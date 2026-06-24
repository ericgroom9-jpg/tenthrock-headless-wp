---
name: reCAPTCHA is consent-gated by Usercentrics
description: Why the GF reCAPTCHA verify must fail OPEN on a missing token (CMP blocks the script until consent).
---

The site runs the **Usercentrics "Smart Data Protector"** cookie-consent manager. It intercepts third-party scripts and **blocks Google reCAPTCHA from running until the visitor accepts the reCAPTCHA cookie category**. Until then it injects a `grecaptcha` stub (so `window.grecaptcha?.execute` is truthy and our `loadScript` resolves immediately) but real execution throws/blocks with console log: *"Consent for Recaptcha was not given or is called too early."* Result: a non-consenting visitor mints **no token**.

**Rule:** server-side reCAPTCHA verification for the GF forms must **fail OPEN on a missing token** (treat absent token as "consent not granted", a legitimate state) and only **fail CLOSED when a token IS present but verification fails / score < threshold** (a real bot signal). Honeypot + in-memory rate-limit remain the floor for tokenless submits.

**Why:** if it failed closed on a missing token, every visitor who declines (or hasn't yet interacted with) the cookie banner would be unable to submit ANY of the 6 native forms — silently killing lead capture. User explicitly chose this "still let them submit" behavior over strict blocking.

**How to apply:** keep `verifyRecaptcha` returning `ok:true` for the missing-token case. The alternative (strict blocking) would require classifying reCAPTCHA as an "essential" service in the Usercentrics dashboard so it always loads — that's a WP/CMP-dashboard change, not code.

**Testing gotcha:** a token minted in headless Chromium fails Google `siteverify` with `error-codes:["browser-error"]` (environment signal, NOT a bad-key signal). A wrong secret returns `invalid-input-secret` instead. To test fail-open/closed without creating GF/CRM entries: POST with no token + no formId → expect `400 "formId is required"` (reCAPTCHA passed); POST with a garbage token → expect `400 "couldn't verify"` (reCAPTCHA blocked).
