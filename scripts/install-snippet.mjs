#!/usr/bin/env node
/**
 * Install / update / activate a Code Snippets PHP snippet on WordPress
 * via the Code Snippets v1 REST API.
 *
 * Usage:
 *   node scripts/install-snippet.mjs <id-or-name> <path-to-php> [--no-activate]
 *
 * If <id-or-name> is numeric, the snippet with that ID is updated.
 * Otherwise it is treated as a snippet name — looked up by name and
 * created if it does not exist.
 *
 * Examples:
 *   node scripts/install-snippet.mjs 5 scripts/register-cpts-snippet.php
 *   node scripts/install-snippet.mjs "Register Custom Taxonomies" scripts/register-taxonomies-snippet.php
 */

import { readFileSync } from 'fs';

const [, , idOrName, pathArg, ...rest] = process.argv;
if (!idOrName || !pathArg) {
  console.error('Usage: node scripts/install-snippet.mjs <id-or-name> <path-to-php> [--no-activate]');
  process.exit(1);
}
const phpPath = pathArg;
const shouldActivate = !rest.includes('--no-activate');
const looksNumeric = /^\d+$/.test(idOrName);

const WP_API_URL = process.env.WP_API_URL;
const USER = process.env.preview_user_un;
const PASS = process.env.preview_user_pass;
if (!WP_API_URL || !USER || !PASS) {
  console.error('Missing env: WP_API_URL, preview_user_un, preview_user_pass');
  process.exit(1);
}
const baseUrl = WP_API_URL.replace(/\/graphql\/?$/, '');
const auth = 'Basic ' + Buffer.from(`${USER}:${PASS}`).toString('base64');

// Read PHP and strip the leading <?php tag — Code Snippets stores the
// snippet body without the opening tag.
let phpRaw = readFileSync(phpPath, 'utf8');
const code = phpRaw.replace(/^\s*<\?php\s*/, '').trim();
console.log(`📄 Loaded ${phpPath} (${code.length} chars)`);

async function api(method, endpoint, body) {
  const url = `${baseUrl}/wp-json/code-snippets/v1${endpoint}`;
  const opts = {
    method,
    headers: { 'Content-Type': 'application/json', Authorization: auth },
  };
  if (body !== undefined) opts.body = JSON.stringify(body);
  const res = await fetch(url, opts);
  const text = await res.text();
  let json;
  try { json = JSON.parse(text); } catch { json = text; }
  if (!res.ok) {
    throw new Error(`${method} ${endpoint} → ${res.status}: ${typeof json === 'string' ? json.slice(0, 400) : JSON.stringify(json).slice(0, 400)}`);
  }
  return json;
}

(async () => {
  let snippetId, snippetName, scope = 'global';

  if (looksNumeric) {
    snippetId = Number(idOrName);
    console.log(`🔎 Fetching snippet #${snippetId}...`);
    const existing = await api('GET', `/snippets/${snippetId}`);
    snippetName = existing.name;
    scope = existing.scope || 'global';
    console.log(`   name="${snippetName}"  active=${existing.active}  scope=${scope}`);
  } else {
    snippetName = idOrName;
    console.log(`🔎 Looking up snippet by name "${snippetName}"...`);
    const all = await api('GET', '/snippets');
    const match = Array.isArray(all) ? all.find(s => s.name === snippetName) : null;
    if (match) {
      snippetId = match.id;
      scope = match.scope || 'global';
      console.log(`   found id=${snippetId}  active=${match.active}  scope=${scope}`);
    } else {
      console.log(`   not found → creating new snippet...`);
      const created = await api('POST', '/snippets', {
        name: snippetName,
        code,
        scope: 'global',
        active: shouldActivate,
      });
      console.log(`✅ Created snippet #${created.id}${shouldActivate ? ' and activated' : ''}.`);
      return;
    }
  }

  console.log(`✏️  Updating snippet body...`);
  const updated = await api('POST', `/snippets/${snippetId}`, {
    name: snippetName,
    code,
    scope,
    active: shouldActivate,
  });
  console.log(`   updated. code_len=${(updated.code || '').length}  active=${updated.active}`);

  if (shouldActivate && !updated.active) {
    console.log(`⚡ Activating snippet...`);
    const activated = await api('POST', `/snippets/${snippetId}/activate`);
    console.log(`   active=${activated.active}`);
  }
  console.log(`✅ Snippet #${snippetId} installed${shouldActivate ? ' and activated' : ''}.`);
})().catch(err => {
  console.error('❌ Failed:', err.message);
  process.exit(1);
});
