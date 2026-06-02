---
name: Usercentrics CMP lives in Shadow DOM
description: Why page-level CSS can't style the Usercentrics consent UI, and the working pattern to hide/restyle parts of it.
---

The Usercentrics CMP (browser-ui, loaded via `app.usercentrics.eu/.../loader.js` with `data-settings-id`) renders its **entire UI inside the Shadow DOM of `#usercentrics-root`** (a `<div>` appended to `<body>`). The separate `uc-block.bundle.js` ("Smart Data Protector", from `privacy-proxy.usercentrics.eu`) only does script-blocking and does NOT render the floating button.

**Rule:** page-level CSS (e.g. in `app/globals.css`) CANNOT touch anything inside `#usercentrics-root` — including the floating "fingerprint" privacy trigger. There is no `<uc-privacy-button>` light-DOM custom element; that selector is a dead end.

**Actual inner structure** (all `data-testid` attrs inside the shadow root): `uc-app-container`, `uc-privacy-button` (the floating trigger, aria-label "Open Privacy Settings"), `uc-privacy-icon`, `uc-default-banner`, `uc-banner-content`, `uc-accept-all-button`, `uc-deny-all-button`, `uc-save-button`, `uc-close-button`, `uc-customize-anchor`, `uc-anchor-link`. Class names are hashed/random (styled-components) so target by `data-testid`, not class.

**Working pattern to hide/restyle:** inject a `<style>` INTO the shadow root once it exists:
```js
var r = document.getElementById('usercentrics-root');
if (r && r.shadowRoot && !r.shadowRoot.getElementById('uc-hide-privacy-btn')) {
  var s = document.createElement('style');
  s.id = 'uc-hide-privacy-btn';
  s.textContent = '[data-testid="uc-privacy-button"]{display:none !important;}';
  r.shadowRoot.appendChild(s);
}
```
Poll on an interval for ~20s (the shadow root + button render asynchronously, after "Initializing Smart Data Protector" logs) and re-inject if missing, so it survives the CMP's initial re-renders. Implemented as an `afterInteractive` inline `<Script>` in `components/scripts/CookieConsent.tsx`.

**Why:** a prior attempt with `uc-privacy-button { display:none }` in globals.css silently did nothing because the element is shadow-encapsulated.

**How to apply:** any future "hide/restyle the consent X" request — find its `data-testid` (dump the shadow tree with a temp diagnostic), then add a rule to the injected shadow `<style>`. Keep the footer "Privacy Settings" link (`UC_UI.showSecondLayer()`) so users can still reach consent settings after the floating trigger is hidden.

**Dev caveat:** in the Replit preview the banner stays in first-layer state (consent isn't persisted), so the floating button isn't visually shown — verify via a temp `console.log` of `getComputedStyle(btn).display` rather than by eye.
