#!/usr/bin/env node
const WP_URL = process.env.WP_API_URL?.replace('/graphql', '') || '';
const AUTH = Buffer.from(`${process.env.preview_user_un}:${process.env.preview_user_pass}`).toString('base64');

const SMALL = new Set(['a','an','the','and','but','or','nor','for','of','in','on','at','to','by','as','from','vs','via']);

function titleCaseWord(w, isFirst, isLast) {
  if (!w) return w;
  // Preserve all-caps acronyms (2+ chars, all letters uppercase)
  if (/^[A-Z0-9]{2,}$/.test(w)) return w;
  const lower = w.toLowerCase();
  if (!isFirst && !isLast && SMALL.has(lower)) return lower;
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

function titleCase(str) {
  if (!str || typeof str !== 'string') return str;
  // Split on spaces but keep punctuation attached; handle hyphens per-segment
  const tokens = str.trim().split(/(\s+)/);
  const wordIdxs = tokens.map((t, i) => /\S/.test(t) ? i : -1).filter(i => i >= 0);
  const firstIdx = wordIdxs[0];
  const lastIdx = wordIdxs[wordIdxs.length - 1];
  return tokens.map((tok, i) => {
    if (!/\S/.test(tok)) return tok;
    // Separate trailing punctuation (?, ., !, ,, :, ;)
    const m = tok.match(/^(.*?)([?.!,:;]*)$/);
    const core = m[1];
    const trail = m[2];
    // Handle hyphens / slashes inside the core
    const parts = core.split(/([-/])/);
    const cased = parts.map(p => /[-/]/.test(p) ? p : titleCaseWord(p, i === firstIdx, i === lastIdx));
    return cased.join('') + trail;
  }).join('');
}

async function wpGet(path) {
  const res = await fetch(`${WP_URL}${path}`, { headers: { Authorization: `Basic ${AUTH}` } });
  if (!res.ok) throw new Error(`GET ${path} -> ${res.status}: ${(await res.text()).slice(0,200)}`);
  return res.json();
}
async function wpPost(path, body) {
  const res = await fetch(`${WP_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Basic ${AUTH}` },
    body: JSON.stringify(body),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`POST ${path} -> ${res.status}: ${JSON.stringify(json).slice(0,300)}`);
  return json;
}

// CPT REST slugs and the ACF field name holding their FAQ repeater
const CPT_TARGETS = [
  { cpt: 'tr_service',  field: 'faqs' },
  { cpt: 'tr_industry', field: 'faqs' },
  { cpt: 'tr_location', field: 'faqs' },
];

async function processCpt({ cpt, field }) {
  console.log(`\n=== ${cpt} ===`);
  let page = 1, total = 0, updated = 0, scanned = 0;
  while (true) {
    const list = await wpGet(`/wp-json/wp/v2/${cpt}?per_page=100&page=${page}&_fields=id,title,acf,status&status=publish,draft`);
    if (!Array.isArray(list) || list.length === 0) break;
    for (const post of list) {
      scanned++;
      const items = post?.acf?.[field];
      if (!Array.isArray(items) || items.length === 0) continue;
      let changed = false;
      const next = items.map(it => {
        if (!it || typeof it !== 'object') return it;
        const q = it.question;
        if (typeof q !== 'string' || !q.trim()) return it;
        const tc = titleCase(q);
        if (tc !== q) { changed = true; return { ...it, question: tc }; }
        return it;
      });
      total += items.length;
      if (!changed) continue;
      await wpPost(`/wp-json/wp/v2/${cpt}/${post.id}`, { acf: { [field]: next } });
      const changes = items.map((it, i) => it.question !== next[i].question ? `\n    - "${it.question}" -> "${next[i].question}"` : '').filter(Boolean).join('');
      console.log(`  #${post.id} ${post.title?.rendered || ''}${changes}`);
      updated++;
    }
    if (list.length < 100) break;
    page++;
  }
  console.log(`  scanned: ${scanned} posts, total FAQ items seen: ${total}, posts updated: ${updated}`);
}

// Also retitle the per-template Commercial Waste Services FAQ repeater (`faqs`)
// on the page that uses the page-template options group. Page templates are
// standard `page` posts identified by `headlessTemplate`.
async function processCommercialWasteTemplate() {
  console.log(`\n=== page template-commercial-waste-services (faqs) ===`);
  const list = await wpGet(`/wp-json/wp/v2/pages?per_page=100&_fields=id,title,acf,template,meta&status=publish,draft`);
  let updated = 0;
  for (const p of list) {
    const items = p?.acf?.faqs;
    if (!Array.isArray(items) || items.length === 0) continue;
    let changed = false;
    const next = items.map(it => {
      const q = it?.question;
      if (typeof q !== 'string' || !q.trim()) return it;
      const tc = titleCase(q);
      if (tc !== q) { changed = true; return { ...it, question: tc }; }
      return it;
    });
    if (!changed) continue;
    await wpPost(`/wp-json/wp/v2/pages/${p.id}`, { acf: { faqs: next } });
    const changes = items.map((it, i) => it.question !== next[i].question ? `\n    - "${it.question}" -> "${next[i].question}"` : '').filter(Boolean).join('');
    console.log(`  page #${p.id} ${p.title?.rendered || ''}${changes}`);
    updated++;
  }
  console.log(`  pages updated: ${updated}`);
}

async function main() {
  if (!WP_URL) throw new Error('WP_API_URL not set');
  for (const t of CPT_TARGETS) await processCpt(t);
  await processCommercialWasteTemplate();
  // Bust Next.js cache so changes show immediately
  const secret = process.env.WP_REVALIDATE_SECRET || process.env.WP_PREVIEW_SECRET;
  try {
    const res = await fetch('http://localhost:5000/api/revalidate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret, type: 'all' }),
    });
    console.log('\nrevalidate:', res.status, (await res.text()).slice(0, 200));
  } catch (e) { console.warn('revalidate skipped:', e.message); }
}

main().catch(e => { console.error(e); process.exit(1); });
