#!/usr/bin/env node
/**
 * Exhaustive ACF field test harness.
 *
 * For every page template and CPT post:
 *   1. Snapshot original ACF (saved to .local/acf-snapshots/<id>.json)
 *   2. Build a mutated ACF tree where every leaf scalar gets a unique sentinel
 *   3. PATCH all sentinels in one request → revalidate → fetch HTML
 *   4. Count: total fields, observed sentinels, structural styling diffs
 *   5. PATCH original back, revalidate, verify restoration
 *
 * Output: ./.local/acf-test-results.json + a unified table to stdout.
 */
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'node:fs';

const WP_BASE = (process.env.WP_API_URL || '').replace('/graphql', '');
const AUTH = Buffer.from(`${process.env.preview_user_un}:${process.env.preview_user_pass}`).toString('base64');
const REVAL = process.env.WP_REVALIDATE_SECRET || process.env.REVALIDATE_SECRET || process.env.WP_PREVIEW_SECRET;
const FRONT = process.env.FRONT_URL || 'http://localhost:5000';

const SNAP_DIR = '.local/acf-snapshots';
mkdirSync(SNAP_DIR, { recursive: true });
mkdirSync('.local', { recursive: true });

const argFilter = process.argv[2]; // optional: only run targets whose label includes this string
const POST_FILTER = process.argv[3]; // optional: limit number of CPT posts of each type
const OFFSET = parseInt(process.env.OFFSET || '0');
const LIMIT  = parseInt(process.env.LIMIT  || '999');
const RESULTS_FILE = '.local/acf-test-results.json';
const RESET = process.env.RESET === '1';
let priorResults = [];
if (!RESET && existsSync(RESULTS_FILE)) {
  try { priorResults = JSON.parse(readFileSync(RESULTS_FILE, 'utf-8')); } catch {}
}
const doneKeys = new Set(priorResults.map(r => `${r.category}|${r.label}`));

// ─── HTTP helpers ────────────────────────────────────────────────────────
async function wpReq(method, endpoint, data) {
  const init = { method, headers: { Authorization: `Basic ${AUTH}` } };
  if (data) {
    init.headers['Content-Type'] = 'application/json';
    init.body = JSON.stringify(data);
  }
  const res = await fetch(`${WP_BASE}/wp-json/wp/v2/${endpoint}`, init);
  const text = await res.text();
  if (!res.ok) throw new Error(`WP ${method} ${endpoint} → ${res.status}: ${text.slice(0, 200)}`);
  return text ? JSON.parse(text) : null;
}

async function revalidate(path) {
  try {
    const r = await fetch(`${FRONT}/api/revalidate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: REVAL, path, type: 'all' }),
    });
    return r.ok;
  } catch { return false; }
}

async function fetchHTML(route) {
  const url = `${FRONT}${route}${route.includes('?') ? '&' : '?'}_t=${Date.now()}`;
  const r = await fetch(url, { headers: { 'Cache-Control': 'no-cache' } });
  return await r.text();
}

// ─── ACF leaf flattening ─────────────────────────────────────────────────
// Recursively walk the ACF tree, returning [{path:[..segments..], type, value}]
// Path segments are strings (object keys) or numbers (array indices).
function flattenLeaves(node, path = []) {
  const out = [];
  if (node === null || node === undefined) return out;
  if (Array.isArray(node)) {
    for (let i = 0; i < node.length; i++) out.push(...flattenLeaves(node[i], [...path, i]));
    return out;
  }
  if (typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) out.push(...flattenLeaves(v, [...path, k]));
    return out;
  }
  // scalar
  let type = 'string';
  if (typeof node === 'number') type = 'number';
  else if (typeof node === 'boolean') type = 'boolean';
  else if (typeof node === 'string') {
    if (/^https?:\/\//.test(node)) type = 'url';
    else if (/^\/[^\s]*\.(png|jpe?g|gif|webp|svg|mp4|webm)/i.test(node)) type = 'imagepath';
    else type = 'string';
  }
  out.push({ path, type, value: node });
  return out;
}

function setAtPath(root, path, value) {
  let cur = root;
  for (let i = 0; i < path.length - 1; i++) cur = cur[path[i]];
  cur[path[path.length - 1]] = value;
}

function deepClone(x) { return JSON.parse(JSON.stringify(x)); }

function mintSentinel(idx) {
  // ASCII-only, unlikely to appear naturally, won't break HTML.
  return `ZTSNL${idx.toString(36).padStart(4, '0').toUpperCase()}XYZ`;
}

function mutateForLeaf(value, type, sentinel) {
  if (type === 'number') {
    // Pick a value unlikely to collide with existing data.
    return 909000 + (sentinel.charCodeAt(5) % 1000);
  }
  if (type === 'boolean') return !value;
  if (type === 'url' || type === 'imagepath') {
    // Fragment is preserved through HTML attribute serialization.
    return `${value}#${sentinel}`;
  }
  // string / textarea / wysiwyg
  if (typeof value === 'string' && value.length === 0) return sentinel;
  return `${sentinel} ${value}`;
}

function sentinelDetector(type, sentinel, mutated) {
  if (type === 'number') return String(mutated);
  if (type === 'boolean') return null; // can't reliably detect bool flip in HTML
  return sentinel;
}

// ─── Tag-structure extraction (for styling-diff detection) ───────────────
function tagStructure(html) {
  // Strip the test-cache-busting comments + script tags etc. that may include sentinel echoes.
  const tags = html.match(/<\/?[a-zA-Z][a-zA-Z0-9-]*/g) || [];
  return tags;
}
function structDiff(a, b) {
  // Symmetric difference count.
  const len = Math.max(a.length, b.length);
  let diffs = 0;
  for (let i = 0; i < len; i++) if (a[i] !== b[i]) diffs++;
  return diffs;
}

// ─── Targets ─────────────────────────────────────────────────────────────
const PAGE_TARGETS = [
  { type: 'pages', id: 397, route: '/',                  label: 'Homepage',                  category: 'Page Template' },
  { type: 'pages', id: 409, route: '/privacy-policy',    label: 'Privacy Policy',            category: 'Page Template' },
  { type: 'pages', id: 410, route: '/terms-of-service',  label: 'Terms of Service',          category: 'Page Template' },
  { type: 'pages', id: 399, route: '/commercial-waste',  label: 'Commercial Waste Services', category: 'Page Template' },
  { type: 'pages', id: 400, route: '/who-we-serve',      label: 'Who We Serve',              category: 'Page Template' },
  { type: 'pages', id: 401, route: '/our-process',       label: 'Our Process',               category: 'Page Template' },
  { type: 'pages', id: 398, route: '/about',             label: 'About Us',                  category: 'Page Template' },
  { type: 'pages', id: 402, route: '/locations',         label: 'Where We Serve',            category: 'Page Template' },
  { type: 'pages', id: 403, route: '/join-our-network',  label: 'Join Our Network',          category: 'Page Template' },
  { type: 'pages', id: 404, route: '/faq',               label: 'FAQs',                      category: 'Page Template' },
  { type: 'pages', id: 405, route: '/contact',           label: 'Contact Us',                category: 'Page Template' },
  { type: 'pages', id: 406, route: '/request-a-service', label: 'Request A Service',         category: 'Page Template' },
  { type: 'pages', id: 407, route: '/book-a-call',       label: 'Book a Call',               category: 'Page Template' },
  { type: 'pages', id: 408, route: '/thank-you',         label: 'Thank You',                 category: 'Page Template' },
];

async function listCpt(slug) {
  return await wpReq('GET', `${slug}?per_page=100&_fields=id,slug,status&status=publish`);
}

async function buildCptTargets() {
  const out = [];
  for (const [cpt, label] of [
    ['tr_service', 'Service'],
    ['tr_industry', 'Industry'],
    ['tr_location', 'Location'],
  ]) {
    const list = await listCpt(cpt);
    for (const p of list) {
      const route = cpt === 'tr_location' ? `/locations/${p.slug}` : `/${p.slug}`;
      out.push({ type: cpt, id: p.id, route, label: `${label}: ${p.slug}`, category: `${label} (CPT)` });
    }
  }
  return out;
}

// ─── Per-target test ─────────────────────────────────────────────────────
async function testTarget(t) {
  const result = {
    label: t.label, category: t.category, route: t.route, id: t.id,
    totalFields: 0, edited: 0, observed: 0, stylingDiffs: 0,
    nonAssertableTypes: 0, errors: [], notObservedFields: [],
  };
  let acf;
  try {
    const post = await wpReq('GET', `${t.type}/${t.id}?_fields=id,acf`);
    acf = post?.acf || {};
    if (Array.isArray(acf) || !Object.keys(acf).length) {
      result.errors.push('ACF empty/array — not configured');
      return result;
    }
  } catch (e) {
    result.errors.push(`fetch: ${e.message}`);
    return result;
  }

  // Snapshot
  writeFileSync(`${SNAP_DIR}/${t.type}-${t.id}.json`, JSON.stringify(acf, null, 2));

  const leaves = flattenLeaves(acf);
  result.totalFields = leaves.length;
  if (!leaves.length) return result;

  // Build mutated tree with one sentinel per leaf.
  const mutated = deepClone(acf);
  const detectors = []; // [{path, type, sentinel, detector, value, mutatedValue}]
  for (let i = 0; i < leaves.length; i++) {
    const lf = leaves[i];
    const sent = mintSentinel(i);
    const newVal = mutateForLeaf(lf.value, lf.type, sent);
    setAtPath(mutated, lf.path, newVal);
    const det = sentinelDetector(lf.type, sent, newVal);
    detectors.push({ ...lf, sentinel: sent, detector: det, mutatedValue: newVal });
    if (det === null) result.nonAssertableTypes++;
  }

  // Baseline HTML structure (pre-mutation)
  await revalidate(t.route);
  const htmlBefore = await fetchHTML(t.route);
  const structBefore = tagStructure(htmlBefore);

  // PATCH mutated.
  try {
    await wpReq('POST', `${t.type}/${t.id}`, { acf: mutated });
    result.edited = leaves.length;
  } catch (e) {
    result.errors.push(`mutate-PATCH: ${e.message}`);
    // try to restore anyway
    try { await wpReq('POST', `${t.type}/${t.id}`, { acf }); } catch {}
    return result;
  }

  await revalidate(t.route);
  // Small grace period for cache propagation.
  await new Promise(r => setTimeout(r, 800));
  const htmlAfter = await fetchHTML(t.route);

  for (const d of detectors) {
    if (!d.detector) continue;
    if (htmlAfter.includes(d.detector)) result.observed++;
    else result.notObservedFields.push({ path: d.path.join('.'), type: d.type });
  }

  // Restore
  try {
    await wpReq('POST', `${t.type}/${t.id}`, { acf });
  } catch (e) {
    result.errors.push(`restore-PATCH: ${e.message}`);
  }
  await revalidate(t.route);
  await new Promise(r => setTimeout(r, 600));
  const htmlAfterRevert = await fetchHTML(t.route);
  const structAfter = tagStructure(htmlAfterRevert);
  result.stylingDiffs = structDiff(structBefore, structAfter);

  return result;
}

// ─── Main ────────────────────────────────────────────────────────────────
async function main() {
  if (!WP_BASE || !REVAL) { console.error('Missing WP_API_URL or REVALIDATE secret'); process.exit(1); }
  console.log(`WP: ${WP_BASE}\nFRONT: ${FRONT}\n`);

  const cptTargets = await buildCptTargets();
  let targets = [...PAGE_TARGETS, ...cptTargets];
  if (argFilter) targets = targets.filter(t => t.label.toLowerCase().includes(argFilter.toLowerCase()) || t.category.toLowerCase().includes(argFilter.toLowerCase()));
  if (POST_FILTER) {
    const lim = parseInt(POST_FILTER);
    const grouped = {};
    for (const t of targets) (grouped[t.category] ||= []).push(t);
    targets = [];
    for (const cat of Object.keys(grouped)) targets.push(...grouped[cat].slice(0, lim));
  }
  // Skip already-tested targets so chunked runs resume cleanly.
  const todo = targets.filter(t => !doneKeys.has(`${t.category}|${t.label}`)).slice(OFFSET, OFFSET + LIMIT);
  console.log(`Total targets: ${targets.length}  prior-done: ${priorResults.length}  this-run: ${todo.length}\n`);

  const results = [...priorResults];
  let n = 0;
  for (const t of todo) {
    n++;
    const prefix = `[${n}/${todo.length}] ${t.label} ... `;
    const t0 = Date.now();
    let r;
    try {
      r = await testTarget(t);
    } catch (e) {
      r = { label: t.label, category: t.category, route: t.route, id: t.id, totalFields: 0, edited: 0, observed: 0, stylingDiffs: 0, errors: [e.message] };
    }
    results.push(r);
    writeFileSync(RESULTS_FILE, JSON.stringify(results, null, 2));
    const line = `${prefix}fields=${r.totalFields} obs=${r.observed} stylediff=${r.stylingDiffs} (${((Date.now()-t0)/1000).toFixed(1)}s)${r.errors.length?' ERR:'+r.errors.join('|'):''}`;
    console.log(line);
  }

  console.log('\n=== UNIFIED RESULTS ===\n');
  console.log('TEMPLATE'.padEnd(38) + 'FIELDS'.padStart(8) + 'EDITED'.padStart(8) + 'OBSERVED'.padStart(10) + 'NON-ASSERT'.padStart(12) + 'STYLE-DIFF'.padStart(12));
  console.log('-'.repeat(88));
  for (const r of results) {
    console.log(r.label.padEnd(38) + String(r.totalFields).padStart(8) + String(r.edited).padStart(8) + String(r.observed).padStart(10) + String(r.nonAssertableTypes||0).padStart(12) + String(r.stylingDiffs).padStart(12));
  }
  console.log('\nResults saved to .local/acf-test-results.json');
}
main().catch(e => { console.error(e); process.exit(1); });
