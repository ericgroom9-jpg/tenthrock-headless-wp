#!/usr/bin/env node
/**
 * Walks every CPT + pages + posts ACF tree and reports any image-shaped
 * string value that does NOT resolve to a real file in `public/` or a
 * reachable absolute URL. Exits non-zero if anything is broken.
 *
 * Used as a regression gate: after running `scripts/fix-acf-image-paths.mjs`
 * (or after a content seed) run this script; a clean run means every ACF
 * image field on the live site will render successfully.
 *
 *   node scripts/audit-acf-images.mjs
 *   node scripts/audit-acf-images.mjs tr_industry,tr_service   # subset
 *   node scripts/audit-acf-images.mjs --no-remote               # skip URL HEAD checks
 */
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const WP = (process.env.WP_API_URL || process.env.WORDPRESS_GRAPHQL_URL || '').replace('/graphql', '');
if (!WP) { console.error('WP_API_URL missing'); process.exit(1); }
const AUTH = Buffer.from(
  `${process.env.preview_user_un || process.env.PREVIEW_USER_UN}:${process.env.preview_user_pass || process.env.PREVIEW_USER_PASS}`
).toString('base64');

const PUBLIC_DIR = join(process.cwd(), 'public');
const IMG_EXT_RE = /\.(jpe?g|png|webp|gif|svg|avif)(\?.*)?$/i;
const IMAGE_PATH_HINTS = ['/images/', '/assets_export/', '/wp-content/uploads/'];

const args = process.argv.slice(2).filter(a => !a.startsWith('--'));
const flags = new Set(process.argv.slice(2).filter(a => a.startsWith('--')));
const CHECK_REMOTE = !flags.has('--no-remote');

const ALL_CPTS = [
  'tr_service', 'tr_industry', 'tr_location', 'tr_case_study',
  'tr_faq', 'tr_partner_logo', 'tr_testimonial',
  'pages', 'posts',
];
const cpts = args.length ? args[0].split(',') : ALL_CPTS;

const MENU_LOCATIONS = [
  'primary', 'header-ctas', 'locations-dropdown',
  'footer-services', 'footer-industries', 'footer-company',
  'footer-legal', 'footer-social',
];

// WPGraphQL auth (separate creds — REST `preview_user_*` are rejected by GraphQL,
// and the GraphQL `WP_AUTH_*` creds are rejected by REST. See replit.md gotchas.)
const GQL_URL = process.env.WORDPRESS_GRAPHQL_URL || (process.env.WP_API_URL && process.env.WP_API_URL.endsWith('/graphql') ? process.env.WP_API_URL : null);
const GQL_AUTH = (process.env.WP_AUTH_USER && process.env.WP_AUTH_PASSWORD)
  ? Buffer.from(`${process.env.WP_AUTH_USER}:${process.env.WP_AUTH_PASSWORD}`).toString('base64')
  : null;

async function req(ep) {
  const r = await fetch(`${WP}/wp-json/wp/v2/${ep}`, {
    headers: { Authorization: `Basic ${AUTH}` },
  });
  const text = await r.text();
  let json; try { json = JSON.parse(text); } catch { json = text; }
  return { ok: r.ok, status: r.status, data: json };
}

async function listAll(cpt) {
  const out = []; let p = 1;
  while (true) {
    const r = await req(`${cpt}?per_page=100&page=${p}&status=any&_fields=id,slug,title,acf`);
    if (!Array.isArray(r.data) || !r.data.length) break;
    out.push(...r.data);
    if (r.data.length < 100) break;
    p++;
  }
  return out;
}

function isImageLike(s) {
  if (typeof s !== 'string' || !s) return false;
  if (IMG_EXT_RE.test(s)) return true;
  // Some ACF image fields store paths without an extension on absolute URLs;
  // restrict the hint-based fallback to obvious image hosts so we don't
  // grade every URL string as an image.
  return IMAGE_PATH_HINTS.some(h => s.includes(h)) && /\.[a-z0-9]+(\?|$)/i.test(s);
}

const remoteCache = new Map();
async function checkRemote(url) {
  if (!CHECK_REMOTE) return { ok: true, skipped: true };
  if (remoteCache.has(url)) return remoteCache.get(url);
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 8000);
  try {
    let r = await fetch(url, { method: 'HEAD', signal: ctrl.signal, redirect: 'follow' });
    // Some CDNs reject HEAD; fall back to GET with no body read.
    if (r.status === 405 || r.status === 403) {
      r = await fetch(url, { method: 'GET', signal: ctrl.signal, redirect: 'follow' });
    }
    const result = { ok: r.ok, status: r.status };
    remoteCache.set(url, result);
    return result;
  } catch (e) {
    const result = { ok: false, status: 0, error: e.message };
    remoteCache.set(url, result);
    return result;
  } finally {
    clearTimeout(t);
  }
}

function checkLocal(p) {
  // Strip query strings; only allow paths that start with `/` and live under public/.
  const clean = p.split('?')[0];
  if (!clean.startsWith('/')) return { ok: false, reason: 'not absolute and not http(s)' };
  const abs = join(PUBLIC_DIR, clean);
  if (!abs.startsWith(PUBLIC_DIR)) return { ok: false, reason: 'path escapes public/' };
  return existsSync(abs) ? { ok: true } : { ok: false, reason: 'no such file in public/' };
}

async function classify(url) {
  if (/^https?:\/\//i.test(url)) {
    const r = await checkRemote(url);
    return r.ok ? { ok: true } : { ok: false, reason: r.skipped ? 'remote check disabled' : `remote ${r.status}${r.error ? ` (${r.error})` : ''}` };
  }
  return checkLocal(url);
}

function collectImages(node, path, acc) {
  if (node == null) return;
  if (typeof node === 'string') {
    if (isImageLike(node)) acc.push({ path, value: node });
    return;
  }
  if (Array.isArray(node)) {
    node.forEach((v, i) => collectImages(v, `${path}[${i}]`, acc));
    return;
  }
  if (typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) {
      collectImages(v, path ? `${path}.${k}` : k, acc);
    }
  }
}

async function fetchMenu(location) {
  const url = `${WP}/wp-json/headless/v1/menus/${encodeURIComponent(location)}`;
  // Endpoint is __return_true (public). Try no-auth first; fall back to
  // preview creds on 401 (mirrors lib/menus.ts behavior).
  let r = await fetch(url);
  if (r.status === 401) {
    r = await fetch(url, { headers: { Authorization: `Basic ${AUTH}` } });
  }
  if (!r.ok) throw new Error(`menu ${location} → ${r.status}`);
  return r.json();
}

async function auditMenus() {
  console.log('  --- menus ---');
  const broken = [];
  let total = 0;
  for (const loc of MENU_LOCATIONS) {
    let items;
    try { items = await fetchMenu(loc); }
    catch (e) { console.warn(`  ! menu:${loc}: skip (${e.message})`); continue; }
    const list = Array.isArray(items) ? items : (items?.items || []);
    const refs = [];
    collectImages(list, '', refs);
    total += refs.length;
    const results = await Promise.all(refs.map(async r => ({ r, c: await classify(r.value) })));
    let locBroken = 0;
    for (const { r, c } of results) {
      if (!c.ok) { broken.push({ slug: loc, field: r.path, url: r.value, reason: c.reason }); locBroken++; }
    }
    console.log(`  menu:${loc}: ${list.length} items, ${refs.length} image refs, ${locBroken} broken`);
  }
  console.log(`  menus total: ${MENU_LOCATIONS.length} locations, ${total} image refs, ${broken.length} broken`);
  return broken.map(b => ({ cpt: 'menus', ...b }));
}

async function auditOptions() {
  console.log('  --- options pages ---');
  if (!GQL_URL || !GQL_AUTH) {
    console.warn('  ! options: skip (WORDPRESS_GRAPHQL_URL or WP_AUTH_USER/PASSWORD missing)');
    return [];
  }
  // WPGraphQL exposes the SHER Options page as `trGlobalSections` /
  // `sHEROptions`. We query the named ACF groups that lib/wordpress.ts
  // already consumes (image-bearing surfaces only).
  const named = `query AuditOptions {
    trGlobalSections {
      gsStats { statsImage statsImageAlt statsCards { title value description } }
      gsFinalCta { finalCtaImage finalCtaImageAlt finalCtaHeading finalCtaSubtitle finalCtaLabel finalCtaLink finalCtaPhone finalCtaPhoneLink }
      gsCtaBanner { ctaBannerTagline ctaBannerHeading ctaBannerSubtitle ctaBannerPlaceholder ctaBannerButton }
      gsProcess { processTagline processHeading processSubtitle processSteps { number title description } }
      gsReasons { reasonsTagline reasonsHeading reasonsSubtitle reasonsCtaLabel reasonsCtaLink reasonsFeatures { iconName title description } }
    }
  }`;
  let payload;
  try {
    const r = await fetch(GQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Basic ${GQL_AUTH}` },
      body: JSON.stringify({ query: named }),
    });
    payload = await r.json();
    if (payload.errors) throw new Error(JSON.stringify(payload.errors).slice(0, 300));
  } catch (e) {
    console.warn(`  ! options: skip (${e.message})`);
    return [];
  }
  const data = payload?.data || {};
  const refs = [];
  collectImages(data, '', refs);
  const results = await Promise.all(refs.map(async r => ({ r, c: await classify(r.value) })));
  const broken = [];
  for (const { r, c } of results) {
    if (!c.ok) broken.push({ slug: 'global-sections', field: r.path, url: r.value, reason: c.reason });
  }
  console.log(`  options:trGlobalSections: ${refs.length} image refs, ${broken.length} broken`);
  return broken.map(b => ({ cpt: 'options', ...b }));
}

async function auditCpt(cpt) {
  const broken = [];
  let posts;
  try { posts = await listAll(cpt); }
  catch (e) { console.warn(`  ! ${cpt}: skip (${e.message})`); return broken; }
  let imgCount = 0;
  for (const p of posts) {
    const refs = [];
    collectImages(p.acf || {}, '', refs);
    imgCount += refs.length;
    const results = await Promise.all(refs.map(async r => ({ r, c: await classify(r.value) })));
    for (const { r, c } of results) {
      if (!c.ok) broken.push({ slug: p.slug || String(p.id), field: r.path, url: r.value, reason: c.reason });
    }
  }
  console.log(`  ${cpt}: ${posts.length} posts, ${imgCount} image refs, ${broken.length} broken`);
  return broken.map(b => ({ cpt, ...b }));
}

async function main() {
  console.log(`WP: ${WP}`);
  console.log(`Remote URL checks: ${CHECK_REMOTE ? 'on' : 'off'}`);
  console.log('');
  const allBroken = [];
  const sourceCounts = {};
  for (const cpt of cpts) {
    const b = await auditCpt(cpt);
    sourceCounts[cpt] = b.length;
    allBroken.push(...b);
  }
  // Only run menu + options sweeps when auditing the full set, not when
  // a subset arg was passed.
  if (!args.length) {
    const mBroken = await auditMenus();
    sourceCounts['menus'] = mBroken.length;
    allBroken.push(...mBroken);
    const oBroken = await auditOptions();
    sourceCounts['options'] = oBroken.length;
    allBroken.push(...oBroken);
  }
  console.log('');
  console.log('Summary by source:');
  for (const [src, n] of Object.entries(sourceCounts)) {
    console.log(`  ${src}: ${n} broken`);
  }
  console.log('');
  if (!allBroken.length) {
    console.log('✓ All ACF image references resolve.');
    return;
  }
  console.error(`✗ ${allBroken.length} broken ACF image reference(s):\n`);
  const byCpt = allBroken.reduce((acc, b) => { (acc[b.cpt] ||= []).push(b); return acc; }, {});
  for (const [cpt, items] of Object.entries(byCpt)) {
    console.error(`  [${cpt}]`);
    const bySlug = items.reduce((acc, b) => { (acc[b.slug] ||= []).push(b); return acc; }, {});
    for (const [slug, list] of Object.entries(bySlug)) {
      console.error(`    ${slug}`);
      for (const b of list) console.error(`      ${b.field || '(root)'} → ${b.url}  [${b.reason}]`);
    }
  }
  process.exit(1);
}
main().catch(e => { console.error(e); process.exit(1); });
