---
name: GF seed script and the Newsletter form
description: The seed-gravity-forms script regenerates lib/gf/form-ids.ts but only manages forms 1–5; the Newsletter form (id 6) must be preserved by the template itself.
---

`scripts/seed-gravity-forms.mjs` seeds and updates the 5 lead/contact forms (Contact, Request A Service, Join Our Network, Service Inquiry, Location Inquiry) and then *overwrites* `lib/gf/form-ids.ts` from a template. The Newsletter form (id 6 in WP) is editor/admin-managed and is NOT in the seed's FORMS array.

**The rule:** the template inside the seed script must hardcode `newsletter: 6` in the emitted `GF_FORM_IDS` literal. If it doesn't, every re-seed silently drops the newsletter key.

**Why:** `components/shared/Footer.tsx` calls `submitGravityForm(formEl, GF_FORM_IDS.newsletter)` and `lib/insightly/forward.ts` derives `FORM_ID_TO_KEY` from `GF_FORM_IDS`. A missing key breaks footer newsletter submissions at runtime and makes Insightly skip newsletter leads — with no build error, since `as const` just narrows the type.

**How to apply:** whenever you touch the seed script's output template or add/remove forms, verify the regenerated `lib/gf/form-ids.ts` still contains every key consumed elsewhere (grep `GF_FORM_IDS\.` to enumerate). If a form is editor-managed and not in the seed, its id must be hardcoded in the template, not derived from `ids[...]`.
