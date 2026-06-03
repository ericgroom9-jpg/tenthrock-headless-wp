---
name: GF confirmation redirect URL parsing trap
description: Why Gravity Forms relative redirects broke (slug became the host) and how the proxy normalizes them
---

# Gravity Forms empty-authority redirect URLs

Gravity Forms returns relative confirmation redirects as **empty-authority absolute URLs** with a triple slash, e.g. `http:///request-a-service/thank-you` (it can't determine a base host headlessly). The submission response usually has ONLY the top-level `confirmation_redirect`; `data.form.confirmation` (which would carry a clean relative `url`) is frequently absent, so the proxy fallback path is what actually runs.

**The trap:** `new URL("http:///request-a-service/thank-you").host` returns `"request-a-service"`, NOT `""`. The WHATWG/Node URL parser collapses `///` and reads the first path segment as the host. So an `if (!u.host)` guard never fires, the malformed string passes through, and the browser navigates to `http://request-a-service/thank-you` (slug treated as host).

**Why:** never trust `URL.host` to detect an empty authority for these strings — the parser lies. Detect the empty authority from the **raw string** instead.

**How to apply:** `app/api/forms/submit-rest/route.ts` → `normalizeConfirmationUrl()`. If the raw string matches `^https?://` and the remainder after the scheme starts with `/`, it's empty-authority → return that remainder (the relative path). Genuine external absolute URLs (authority does not start with `/`) are left untouched. Returning a relative path keeps the redirect on the current host (prod → `https://tenthrock.com/<slug>`). This one proxy fix covers all 6 forms, since every form funnels redirects through `submit-client.ts` → `router.push(result.redirectUrl)`.
