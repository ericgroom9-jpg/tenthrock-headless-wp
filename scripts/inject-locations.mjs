#!/usr/bin/env node
/**
 * Inject all state-level Location posts into WP.
 * Source data: lib/data/state-location-content.ts + lib/data/state-cities.ts.
 * Uses tsx-style imports via dynamic execution.
 */
import { readFileSync } from 'fs';

const WP_URL = process.env.WP_API_URL?.replace('/graphql', '') || '';
const AUTH = Buffer.from(`${process.env.preview_user_un}:${process.env.preview_user_pass}`).toString('base64');

async function wpReq(method, endpoint, data) {
  const init = { method, headers: { 'Authorization': `Basic ${AUTH}` } };
  if (data) {
    init.headers['Content-Type'] = 'application/json';
    init.body = JSON.stringify(data);
  }
  const res = await fetch(`${WP_URL}/wp-json/wp/v2/${endpoint}`, init);
  const json = await res.json();
  if (!res.ok) throw new Error(`${res.status}: ${JSON.stringify(json).slice(0, 300)}`);
  return json;
}

async function findPostBySlug(cpt, slug) {
  const list = await wpReq('GET', `${cpt}?slug=${encodeURIComponent(slug)}&_fields=id,title,slug`);
  return list[0] || null;
}

// Load TS sources via simple regex parsing — both files are pure data.
function loadStateContent() {
  const src = readFileSync('lib/data/state-location-content.ts', 'utf-8');
  // Strip the `export const stateLocationContent: Record<string, ...> = ` prefix.
  const objStart = src.indexOf('= {');
  const objBody = src.slice(objStart + 1);
  // Find matching closing brace at depth 0.
  let depth = 0, inStr = false, sc = '', i = 0;
  for (; i < objBody.length; i++) {
    const ch = objBody[i];
    if (inStr) { if (ch === '\\') { i++; continue; } if (ch === sc) inStr = false; }
    else {
      if (ch === '"' || ch === "'" || ch === '`') { inStr = true; sc = ch; }
      else if (ch === '{') depth++;
      else if (ch === '}') { depth--; if (depth === 0) { i++; break; } }
    }
  }
  const json = objBody.slice(0, i);
  return new Function(`return (${json})`)();
}

function loadStateCities() {
  const src = readFileSync('lib/data/state-cities.ts', 'utf-8');
  const objStart = src.indexOf('= {');
  const objBody = src.slice(objStart + 1);
  let depth = 0, inStr = false, sc = '', i = 0;
  for (; i < objBody.length; i++) {
    const ch = objBody[i];
    if (inStr) { if (ch === '\\') { i++; continue; } if (ch === sc) inStr = false; }
    else {
      if (ch === '"' || ch === "'" || ch === '`') { inStr = true; sc = ch; }
      else if (ch === '{') depth++;
      else if (ch === '}') { depth--; if (depth === 0) { i++; break; } }
    }
  }
  return new Function(`return (${objBody.slice(0, i)})`)();
}

function titleFromSlug(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

async function upsertLocation(slug, content, cities) {
  const stateName = titleFromSlug(slug);
  const title = `Waste Management Services in ${stateName}`;
  const acf = {
    hero_subtitle: content.subtitle || '',
    hero_image: '/images/stock/locations-hero-modern-city.jpg',
    about_description: content.aboutDesc || '',
    about_bullets: (content.bullets || []).map(b => ({ bullet_text: b })),
    trusted_description: content.trustedDesc || '',
    info_heading: content.thirdHeading || '',
    info_body: content.thirdDesc || '',
    state_abbreviation: cities?.abbreviation || '',
    cities: (cities?.cities || []).map(c => ({ city_name: c })),
    faqs: (content.faqs || []).map(f => ({ question: f.question, answer: f.answer })),
  };

  const existing = await findPostBySlug('tr_location', slug);
  if (existing) {
    // Clear the legacy JSON-in-content field; ACF now owns info_heading/info_body.
    await wpReq('POST', `tr_location/${existing.id}`, { title, content: '', status: 'publish', acf });
    return { id: existing.id, action: 'updated' };
  }
  const created = await wpReq('POST', 'tr_location', { title, slug, content: '', status: 'publish', acf });
  return { id: created.id, action: 'created' };
}

async function main() {
  console.log(`WP: ${WP_URL}\n`);
  const stateContent = loadStateContent();
  const stateCities = loadStateCities();
  const slugs = Object.keys(stateContent);
  console.log(`Found ${slugs.length} state location entries\n`);

  for (const slug of slugs) {
    try {
      const r = await upsertLocation(slug, stateContent[slug], stateCities[slug]);
      console.log(`  ${r.action.toUpperCase()} ${slug} => ID ${r.id}`);
    } catch (e) {
      console.error(`  FAIL ${slug}: ${e.message}`);
    }
  }
  console.log('\nDone.');
}

main().catch(e => { console.error(e); process.exit(1); });
