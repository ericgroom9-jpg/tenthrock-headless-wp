#!/usr/bin/env node
/**
 * Install / update / activate a Code Snippets PHP snippet on WordPress
 * via the Code Snippets v1 REST API.
 *
 * Usage:
 *   node scripts/install-snippet.mjs <snippet-id> <path-to-php> [--no-activate]
 *
 * Example:
 *   node scripts/install-snippet.mjs 5 scripts/register-cpts-snippet.php
 */

import { readFileSync } from 'fs';

const [, , idArg, pathArg, ...rest] = process.argv;
if (!idArg || !pathArg) {
  console.error('Usage: node scripts/install-snippet.mjs <snippet-id> <path-to-php> [--no-activate]');
  process.exit(1);
}
const snippetId = Number(idArg);
const phpPath = pathArg;
const shouldActivate = !rest.includes('--no-activate');

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
// snippet body without the opening tag, otherwise the plugin fails to
// execute it (it wraps the snippet body in <?php at run time).
let phpRaw = readFileSync(phpPath, 'utf8');
const code = phpRaw.replace(/^\s*<\?php\s*/, '').trim();
console.log(`📄 Loaded ${phpPath} (${code.length} chars after stripping <?php)`);

async function api(method, endpoint, body) {
  const url = `${baseUrl}/wp-json/code-snippets/v1${endpoint}`;
  const opts = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth,
    },
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
  // 1. Fetch existing snippet to get name + scope (don't change them).
  console.log(`🔎 Fetching snippet #${snippetId}...`);
  const existing = await api('GET', `/snippets/${snippetId}`);
  console.log(`   name="${existing.name}"  active=${existing.active}  scope=${existing.scope}`);

  // 2. Push the PHP body. Keep name and scope as-is. Mark as not network-wide.
  console.log(`✏️  Updating snippet body...`);
  const updated = await api('POST', `/snippets/${snippetId}`, {
    name: existing.name,
    code,
    scope: existing.scope || 'global',
    active: shouldActivate,
  });
  console.log(`   updated. code_len=${(updated.code || '').length}  active=${updated.active}`);

  // 3. Explicitly call activate endpoint if requested (some plugin
  //    versions do not toggle active via the update endpoint).
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
