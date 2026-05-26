#!/usr/bin/env node
/**
 * Repairs WP ACF fields that point at `/images/stock/<name>.{jpg,jpeg,png}`
 * when only `/images/stock/<name>.webp` actually ships in the Next.js
 * `public/` bundle. Walks every CPT + Pages ACF tree and rewrites strings
 * in-place. Idempotent — only PATCHes posts where something actually changed.
 *
 * After running, trigger `revalidateTag('wordpress')` (or wait for the WP
 * save hook) so the live deployment fetches the corrected ACF data.
 */
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const WP = (process.env.WP_API_URL || process.env.WORDPRESS_GRAPHQL_URL || '').replace('/graphql', '');
if (!WP) { console.error('WP_API_URL missing'); process.exit(1); }
const AUTH = Buffer.from(
  `${process.env.preview_user_un || process.env.PREVIEW_USER_UN}:${process.env.preview_user_pass || process.env.PREVIEW_USER_PASS}`
).toString('base64');

const PUBLIC_STOCK = join(process.cwd(), 'public', 'images', 'stock');
const onDisk = new Set(readdirSync(PUBLIC_STOCK).filter(f => statSync(join(PUBLIC_STOCK, f)).isFile()));

const STOCK_RE = /^\/images\/stock\/([A-Za-z0-9._-]+)$/;
const fixCache = new Map();
function fixPath(p) {
  if (typeof p !== 'string') return p;
  if (fixCache.has(p)) return fixCache.get(p);
  const m = STOCK_RE.exec(p);
  if (!m) { fixCache.set(p, p); return p; }
  const file = m[1];
  if (onDisk.has(file)) { fixCache.set(p, p); return p; }
  const base = file.replace(/\.[^.]+$/, '');
  for (const ext of ['webp', 'jpg', 'jpeg', 'png']) {
    const cand = `${base}.${ext}`;
    if (onDisk.has(cand)) {
      const fixed = `/images/stock/${cand}`;
      fixCache.set(p, fixed);
      return fixed;
    }
  }
  fixCache.set(p, p);
  return p;
}

function walk(node) {
  if (node == null) return { value: node, changed: false };
  if (typeof node === 'string') {
    const fixed = fixPath(node);
    return { value: fixed, changed: fixed !== node };
  }
  if (Array.isArray(node)) {
    let changed = false;
    const out = node.map(item => {
      const r = walk(item);
      if (r.changed) changed = true;
      return r.value;
    });
    return { value: out, changed };
  }
  if (typeof node === 'object') {
    let changed = false;
    const out = {};
    for (const [k, v] of Object.entries(node)) {
      const r = walk(v);
      if (r.changed) changed = true;
      out[k] = r.value;
    }
    return { value: out, changed };
  }
  return { value: node, changed: false };
}

async function req(method, ep, body) {
  const r = await fetch(`${WP}/wp-json/wp/v2/${ep}`, {
    method,
    headers: { Authorization: `Basic ${AUTH}`, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await r.text();
  let json; try { json = JSON.parse(text); } catch { json = text; }
  return { ok: r.ok, status: r.status, data: json };
}

async function listAll(cpt) {
  const out = []; let p = 1;
  while (true) {
    const r = await req('GET', `${cpt}?per_page=100&page=${p}&status=any&_fields=id,slug,acf`);
    if (!Array.isArray(r.data) || !r.data.length) break;
    out.push(...r.data);
    if (r.data.length < 100) break;
    p++;
  }
  return out;
}

async function fixCpt(cpt) {
  console.log(`\n=== ${cpt} ===`);
  let posts;
  try { posts = await listAll(cpt); } catch (e) { console.log(`  skip (${e.message})`); return; }
  let patched = 0, clean = 0, failed = 0;
  const todo = [];
  for (const p of posts) {
    const { value, changed } = walk(p.acf || {});
    if (!changed) { clean++; continue; }
    todo.push({ p, value });
  }
  const CONC = 8;
  for (let i = 0; i < todo.length; i += CONC) {
    const slice = todo.slice(i, i + CONC);
    const results = await Promise.all(slice.map(async ({ p, value }) => {
      const r = await req('POST', `${cpt}/${p.id}`, { acf: value });
      return { p, r };
    }));
    for (const { p, r } of results) {
      if (r.ok) { patched++; console.log(`  OK ${p.slug || p.id}`); }
      else { failed++; console.error(`  FAIL ${p.slug || p.id} (${r.status}): ${JSON.stringify(r.data).slice(0, 200)}`); }
    }
  }
  console.log(`  → patched:${patched}  clean:${clean}  failed:${failed}`);
}

async function main() {
  console.log(`WP: ${WP}`);
  console.log(`Files on disk in public/images/stock: ${onDisk.size}`);
  const ALL = [
    'tr_service', 'tr_industry', 'tr_location', 'tr_case_study',
    'tr_faq', 'tr_partner_logo', 'tr_testimonial',
    'pages', 'posts',
  ];
  const arg = process.argv[2];
  const list = arg ? arg.split(',') : ALL;
  for (const cpt of list) {
    await fixCpt(cpt);
  }
  // Revalidate the Next.js cache so the live site picks up new paths
  const revalSecret = process.env.WP_REVALIDATE_SECRET || process.env.WP_PREVIEW_SECRET;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  if (revalSecret && siteUrl) {
    const url = `${siteUrl.replace(/\/+$/, '')}/api/revalidate`;
    try {
      const r = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret: revalSecret, type: 'all' }),
      });
      const t = await r.text();
      console.log(`\nRevalidate ${r.status}: ${t.slice(0, 200)}`);
    } catch (e) {
      console.log(`\nRevalidate failed: ${e.message}`);
    }
  } else {
    console.log('\nSkipping revalidate (set NEXT_PUBLIC_SITE_URL + WP_REVALIDATE_SECRET or WP_PREVIEW_SECRET)');
  }
}
main().catch(e => { console.error(e); process.exit(1); });
