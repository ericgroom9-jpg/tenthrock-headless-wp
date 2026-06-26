---
name: RSC data imports from "use client" modules
description: Why importing plain data/constants from a "use client" file into a Server Component breaks, and where to put shared data instead.
---

# Importing non-component exports from a "use client" module into a Server Component

When a Server Component imports a **non-component** export (a plain array, object,
constant, or type-erased data) from a module marked `"use client"`, Next.js does
NOT give the Server Component the real value — it gives a **client-reference stub**
(a proxy used to wire the client component across the RSC boundary). At runtime the
stub is not the data, so operations like `.flatMap`, `.map`, `.length` throw
(e.g. `X.flatMap is not a function`). Type-checking passes; it only fails at render.

**Why:** `"use client"` marks the whole module as a client boundary. Every export
becomes a client reference, regardless of whether it's a component. Server code
receives references, not the underlying JS values.

**How to apply:** Put any data/constants/types that BOTH a server page and a client
component need in a **plain module** (no `"use client"` directive), e.g.
`lib/data/*.ts`, and import it from both sides. Never re-export shared fallback
data from the client component file and import it into a server page.

In this repo: FAQ fallback content lives in `lib/data/faq-defaults.ts`
(`defaultFaqCategories`, `FaqCategory`, `FaqItem`) precisely so the FAQ server page
(for JSON-LD) and the client `FaqPage` component can both consume the real array.
