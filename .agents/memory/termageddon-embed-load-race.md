---
name: Termageddon embed in Next.js SPA
description: Why the Termageddon cookie-policy embed script can't be used as-is in this app and how /cookie-policy renders it instead.
---

# Termageddon embed in a Next.js/SPA route

The Termageddon embed script (`https://policies.termageddon.com/api/embed/<KEY>.js`) does two non-obvious things:

1. It injects the policy HTML into `document.getElementById(<KEY>)` — the target container's `id` must be the **policy key** (the `<KEY>.js` segment), NOT a generic `policy_embed_div`. Wrong id → it sets `.innerHTML` on `null` and throws, policy never renders.
2. All of its work is wrapped in `window.addEventListener("load", …)`. When the script is added late (client-side route nav, or `next/script` with any strategy), the `load` event has usually already fired, so the listener never runs and the page stays stuck on the "Please wait…" fallback.

**Decision:** `/cookie-policy` does NOT use the embed `<script>`. It fetches Termageddon's render endpoint directly in a `useEffect` and sets `innerHTML`:
`https://embed.termageddon.com/api/render/<KEY>?origin=<encoded current href>`
(this is the exact endpoint the embed's own XHR hits). The "click here" fallback link (`…/api/policy/<KEY>`) stays in place for fetch failures.

**Why:** robust regardless of load timing, zero side effects on other scripts (vs. re-dispatching a global `window` `load` event, which would re-trigger Usercentrics/GTM listeners). CORS is allowed on the render endpoint because Termageddon's own embed calls it from the browser.

**How to apply:** if adding more Termageddon-embedded policies, reuse the fetch-render pattern keyed by the policy key; don't drop in the raw embed `<script>` expecting it to fire.
