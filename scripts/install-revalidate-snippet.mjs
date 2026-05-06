#!/usr/bin/env node
/**
 * Installs the "Tenth Rock — Revalidate Headless Frontend on Save" snippet
 * into WordPress (Code Snippets v1 REST), substituting the front-end URLs
 * and revalidate secret at install time so neither lives in source.
 *
 * Required env:
 *   WP_API_URL              — WP GraphQL endpoint (we strip /graphql)
 *   preview_user_un         — WP basic-auth user
 *   preview_user_pass       — WP basic-auth password
 *   WP_REVALIDATE_SECRET    — must match the one Next.js reads
 *   TR_REVALIDATE_URLS      — comma-separated list of front-end origins
 *                             (defaults to the dev preview + prod URL below)
 */
import { readFileSync } from 'fs';

const WP_API_URL = process.env.WP_API_URL;
const USER       = process.env.preview_user_un;
const PASS       = process.env.preview_user_pass;
// Mirror the secret-resolution order in app/api/revalidate/route.ts so the
// snippet sends whichever secret the deployed app actually accepts.
const SECRET =
  process.env.WP_REVALIDATE_SECRET ||
  process.env.REVALIDATE_SECRET ||
  process.env.WP_PREVIEW_SECRET;

if (!WP_API_URL || !USER || !PASS || !SECRET) {
  console.error('Missing env: WP_API_URL, preview_user_un, preview_user_pass, and one of WP_REVALIDATE_SECRET / REVALIDATE_SECRET / WP_PREVIEW_SECRET');
  process.exit(1);
}

const DEFAULT_URLS = [
  'https://e508db22-b8de-491d-9475-eb0dc0c9df3c-00-343rfzzofjfjm.pike.replit.dev',
  'https://tenthrock.sher.dev',
];
const urls = (process.env.TR_REVALIDATE_URLS || '')
  .split(',').map(s => s.trim()).filter(Boolean);
const finalUrls = urls.length ? urls : DEFAULT_URLS;

const baseUrl = WP_API_URL.replace(/\/graphql\/?$/, '');
const auth = 'Basic ' + Buffer.from(`${USER}:${PASS}`).toString('base64');

let php = readFileSync('scripts/wp-revalidate-on-save-snippet.php', 'utf8');
php = php.replace(/^\s*<\?php\s*/, '').trim();
php = php.replace('__TR_REVALIDATE_URLS_JSON__', JSON.stringify(JSON.stringify(finalUrls)));
php = php.replace('__TR_REVALIDATE_SECRET__', SECRET.replace(/'/g, "\\'"));

console.log(`📄 Snippet code length: ${php.length} chars`);
console.log(`🌐 Front-ends to revalidate: ${finalUrls.length}`);
finalUrls.forEach(u => console.log(`   - ${u}`));

async function api(method, endpoint, body) {
  const res = await fetch(`${baseUrl}/wp-json/code-snippets/v1${endpoint}`, {
    method,
    headers: { 'Content-Type': 'application/json', Authorization: auth },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let json; try { json = JSON.parse(text); } catch { json = text; }
  if (!res.ok) throw new Error(`${method} ${endpoint} → ${res.status}: ${typeof json === 'string' ? json.slice(0,400) : JSON.stringify(json).slice(0,400)}`);
  return json;
}

const SNIPPET_NAME = 'Tenth Rock — Revalidate Headless Frontend on Save';

(async () => {
  const all = await api('GET', '/snippets');
  const match = Array.isArray(all) ? all.find(s => s.name === SNIPPET_NAME) : null;
  if (match) {
    console.log(`✏️  Updating snippet #${match.id} (active=${match.active})`);
    const updated = await api('POST', `/snippets/${match.id}`, {
      name: SNIPPET_NAME,
      code: php,
      scope: match.scope || 'global',
      active: true,
    });
    console.log(`   active=${updated.active}  code_len=${(updated.code||'').length}`);
    if (!updated.active) {
      const activated = await api('POST', `/snippets/${match.id}/activate`);
      console.log(`   activated=${activated.active}`);
    }
    console.log(`✅ Snippet #${match.id} installed.`);
  } else {
    const created = await api('POST', '/snippets', {
      name: SNIPPET_NAME,
      code: php,
      scope: 'global',
      active: true,
    });
    console.log(`✅ Created snippet #${created.id} (active=${created.active}).`);
  }
})().catch(e => { console.error('❌ Failed:', e.message); process.exit(1); });
