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

**Order:** block bundle + loader use `strategy="beforeInteractive"` so `uc-block` loads before any tag it gates and defines the global `uc`.
