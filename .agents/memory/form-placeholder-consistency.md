---
name: Form placeholder/select color convention
description: How the "Request a Service" lead forms keep placeholder + unselected-dropdown text colors consistent.
---

All lead forms (city, location/state, service template, standalone request-a-service) use a single
placeholder color: `placeholder:text-[#042940]/40` (a soft navy-gray). The shared `components/ui/input.tsx`
base forces `placeholder:text-muted-foreground` (a DARKER blue-gray) and `h-9`, so any field built on the
base `Input` / `PhoneInput` (notably the Phone field) must append `placeholder:text-[#042940]/40` to override
it — twMerge makes the appended class win.

**Why:** Phone fields and dropdowns looked visibly darker than their sibling inputs because they inherited
the base muted-foreground while siblings used `#042940/40`. Editors/users repeatedly flagged the mismatch.

**How to apply:**
- Text/phone inputs: add `placeholder:text-[#042940]/40` (and `px-4` if matching inline siblings) to className.
- Unselected `<select>` "Select one..." placeholder option:
  - Controlled selects: conditional class `formData.x ? "text-[#042940]" : "text-[#042940]/40"`.
  - Uncontrolled selects (`defaultValue` + `required` + `<option value="" disabled>`): use the
    `invalid:text-[#042940]/40` Tailwind variant — `:invalid` applies on load while value is empty, and
    flips to the base `text-[#042940]` once a real option is chosen. No state needed.
- Do NOT edit shared `components/ui/input.tsx` or `phone-input.tsx` to fix this (would affect unrelated forms).
