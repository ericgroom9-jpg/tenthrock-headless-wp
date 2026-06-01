---
name: Usercentrics CMP consent loader
description: How the site-wide Usercentrics cookie-consent banner is wired and the exact endpoints it needs.
---

# Usercentrics CMP (cookie consent banner)

Loaded once site-wide via a dedicated component in the **root layout's `<head>`**, NOT through `GlobalScripts` (that helper only re-emits inline editor snippets and drops external `src` scripts + custom attributes like `data-settings-id`).

Customer-provided snippet uses these exact endpoints (don't "correct" them):
- block bundle: `https://privacy-proxy.usercentrics.eu/latest/uc-block.bundle.js`
- loader: `https://app.usercentrics.eu/browser-ui/latest/loader.js` (NOT `web.cmp.usercentrics.eu/ui/loader.js`) with `id="usercentrics-cmp"`, `data-settings-id="VSh7S8F0CRv14Q"`, `async`
- custom translations: `uc.setCustomTranslations('https://termageddon.ams3.cdn.digitaloceanspaces.com/translations/')`

**Gotcha:** an invalid `setCustomTranslations` URL logs `Error fetching translations: status = 403` in console. The translations URL is account-specific — get it verbatim from the customer, don't guess. The call is guarded with `typeof uc !== 'undefined'` so it never throws if `uc` isn't ready.

**Order:** scripts load in source order — `uc-block` first (defines global `uc`), then loader, then the translations call (guarded by a poll on `uc`).

**Strategy MUST be `afterInteractive`, NOT `beforeInteractive`:** `uc-block` is a "Smart Data Protector" that mutates the document DOM (rewrites/adds script + head nodes) the instant it runs. With `beforeInteractive` it mutated the server HTML *before* React hydrated → recoverable "Hydration failed" runtime errors (the Next dev error overlay = perceived "crash"). The failure is intermittent: it only fires when the CDN script actually loads (in the Replit sandbox it sometimes 404s, hiding the bug). `suppressHydrationWarning` on `<head>` does NOT fix it (Next hoists head contents; the mutations also hit body/script nodes React owns). `afterInteractive` defers execution until after hydration so the mutations are tolerated; the banner still appears.
**Why:** consent-gating order (block-before-gated-tags) is a separate concern (handled by the gating task), and is not worth re-introducing a hydration crash for.
