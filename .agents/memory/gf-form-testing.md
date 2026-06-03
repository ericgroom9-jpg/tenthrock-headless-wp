---
name: Gravity Forms REST testing & live config quirks
description: How GF /submissions responds, how to clean up test entries, and that form config lives in WP (not the repo) so it can drift from replit.md
---

# Testing Gravity Forms via REST (gf/v2)

Auth: Basic `GF_CONSUMER_KEY:GF_CONSUMER_SECRET` (base64). Base = `new URL(WP_API_URL).origin + "/wp-json/gf/v2"`.

## Submission success response shape
POST `/forms/{id}/submissions` (multipart FormData with `input_{id}` keys) on success returns the confirmation at the **top level**, NOT nested under `data.form.confirmation`:
```
{ is_valid:true, confirmation_type:"redirect", confirmation_redirect:"http:///contact/thank-you", entry_id (often OMITTED for redirect confirmations) }
```
- The redirect URL has an **empty host** (`http:///path`) when the confirmation is configured relative, because GF can't determine a base. The site proxy forwards the GF confirmation URL **unchanged** (no normalization), so confirmations must be set as absolute canonical URLs in WP — see `gf-redirect-url-parsing.md`.
- **`entry_id` is omitted** on redirect-type confirmations, so you cannot delete a test entry from the submit response. To clean up test entries: `GET /entries?paging[page_size]=100&sorting[key]=id&sorting[direction]=DESC`, filter by your test email value, then `DELETE /entries/{id}`.
- `example.com` / reserved-domain emails are rejected as "invalid" by GF's email validator — use a real-looking domain (e.g. gmail) when testing.

## Live form config can drift from replit.md
Form field config (phoneFormat, confirmations, notifications) lives in **WordPress**, not the repo — always verify against the live form via `GET /forms/{id}`.
**Why:** As of 2026-06, forms 1 (Contact), 4 (Service Inquiry), 5 (Location Inquiry) actually use `phoneFormat:"standard"` (US-only, rejects E.164), contradicting the replit.md "GF phone fields" gotcha that claims they're "international". Only form 2 (Request A Service) is "international".

## Applying confirmation changes without clobbering editor settings
`scripts/seed-gravity-forms.mjs` does a **full PUT** including `notifications:{}`, which wipes editor-managed notifications. To change only the redirect URL on a live form: GET the form, replace just the default confirmation's `url`, PUT the full body back.
