---
name: Shared CTA hydration race (anchor vs Link)
description: Why shared "Request A Service" CTAs must render in-page hash anchors on form pages instead of relying on onClick to intercept a Next Link.
---

Shared CTA sections (StatsSection, FinalCtaSection) are used on BOTH pages that contain
the on-page `#request-a-service` form (service / location / city) and pages that don't
(homepage / industry). The desired behavior is: scroll to the form when it exists, else
navigate to `/request-a-service`.

**Rule:** On form-bearing pages, render the CTA as a native in-page anchor
(`<a href="#request-a-service" onClick={scrollToRequestForm}>`), gated by a `scrollToForm`
prop. Do NOT just slap an `onClick` smooth-scroll handler on a `<Link href="/request-a-service">`.

**Why:** A `<Link href="/request-a-service">` whose only on-page interception is a JS
`onClick` will perform a real cross-page navigation if the user clicks before React
hydrates that component. This produced a *flaky* "the button still redirects" bug — it
worked after hydration but redirected when clicked early (confirmed empirically: identical
StatsSection/FinalCtaSection code navigated on some loads, scrolled on others). A native
`#request-a-service` anchor is correct even pre-hydration: worst case is a native hash jump
that stays on the page (and `scroll-mt-24` keeps the landing position right); post-hydration
the onClick upgrades it to smooth scroll. Deterministic, no hydration dependency.

**How to apply:** Pass `scrollToForm` to these sections only on pages that actually render
`#request-a-service` (service, location, city). Leave it off on homepage/industry so those
keep navigating to `/request-a-service`. Global nav links (Navbar/Footer "Request A Service")
are intentionally cross-page `<Link>`s — do not convert them.
