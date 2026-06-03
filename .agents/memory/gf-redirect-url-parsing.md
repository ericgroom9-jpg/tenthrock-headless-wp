---
name: GF form redirects are pure pass-through (editor-controlled)
description: Form redirect destination comes only from the Gravity Forms confirmation; no code fallback/normalization, and why editors must use absolute canonical URLs
---

# Gravity Forms redirects are 100% editor-controlled

By explicit product decision, the form submission redirect destination is **whatever Gravity Forms returns** and nothing else. The proxy (`app/api/forms/submit-rest/route.ts`) forwards GF's confirmation (`data.form.confirmation.url`, or top-level `confirmation_redirect` when the nested object is absent) **unchanged** — no normalize, no rewrite, no strip. `submit-client.ts` builds `redirectUrl` from `confirmation.url` (+ `queryString`) or returns `undefined`. Every form client does `if (result.redirectUrl) router.push(result.redirectUrl)` — there is **no** hardcoded `"/"` / `"/thank-you/"` fallback.

**Why:** the editor owns the redirect in WP → Forms → Confirmations; code that "helped" by normalizing or supplying a default was masking misconfiguration and causing surprises (a slug-as-host break, and a cross-domain double hop when the confirmation pointed at a non-canonical host). Removing all coded redirect logic makes behavior predictable and fully driven by WP.

**The parser trap that makes absolute URLs mandatory:** GF emits a *relative* confirmation as an empty-authority absolute URL with a triple slash, e.g. `http:///request-a-service/thank-you` (it can't resolve a base host headlessly). `new URL("http:///foo/bar").host` returns `"foo"`, NOT `""` — the WHATWG/Node parser collapses `///` and reads the first path segment as the host, so the browser would navigate to `http://foo`. Because the code no longer compensates for this, the **editor must set each confirmation to an absolute URL on the canonical domain** (`https://tenthrock.com/...`). A relative path breaks; a non-canonical absolute host (e.g. a staging domain) causes a cross-domain double redirect.

**How to apply:** if a form redirect "doesn't work" or double-hops, fix it in WordPress (the GF confirmation URL), not in the code. Do not reintroduce `normalizeConfirmationUrl` or any `router.push(redirectUrl || "...")` fallback.
