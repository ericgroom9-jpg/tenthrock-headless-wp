#!/usr/bin/env node
/**
 * Delete CPT posts that have an empty critical ACF field. These are the
 * duplicate stubs created during the first inject pass (before show_in_rest
 * was added to the ACF group registration).
 */
const WP_URL = process.env.WP_API_URL?.replace('/graphql', '') || '';
const AUTH = Buffer.from(`${process.env.preview_user_un}:${process.env.preview_user_pass}`).toString('base64');

async function wpReq(method, endpoint) {
  const res = await fetch(`${WP_URL}/wp-json/wp/v2/${endpoint}`, {
    method, headers: { 'Authorization': `Basic ${AUTH}` },
  });
  const text = await res.text();
  let json; try { json = JSON.parse(text); } catch { json = text; }
  return { ok: res.ok, status: res.status, data: json };
}

async function listAll(cpt) {
  const out = [];
  let page = 1;
  while (true) {
    const r = await wpReq('GET', `${cpt}?per_page=100&page=${page}&_fields=id,title,acf,date`);
    if (!Array.isArray(r.data) || r.data.length === 0) break;
    out.push(...r.data);
    if (r.data.length < 100) break;
    page++;
  }
  return out;
}

const checks = [
  { cpt: 'tr_testimonial', field: 'quote' },
  { cpt: 'tr_case_study',  field: 'description' },
  { cpt: 'tr_faq',         field: 'answer' },
  { cpt: 'tr_partner_logo', field: 'logo_image' },
];

async function main() {
  console.log(`WP: ${WP_URL}\n`);
  for (const { cpt, field } of checks) {
    console.log(`--- ${cpt} (key field: ${field}) ---`);
    const posts = await listAll(cpt);
    console.log(`  total: ${posts.length}`);
    let deleted = 0, kept = 0;
    for (const p of posts) {
      const v = p?.acf?.[field];
      const empty = v == null || v === '' || (Array.isArray(v) && v.length === 0);
      if (empty) {
        const r = await wpReq('DELETE', `${cpt}/${p.id}?force=true`);
        if (r.ok) { deleted++; }
        else { console.error(`  FAIL delete ${p.id}: ${r.status}`); }
      } else kept++;
    }
    console.log(`  kept: ${kept}, deleted: ${deleted}`);
  }
}
main().catch(e => { console.error(e); process.exit(1); });
