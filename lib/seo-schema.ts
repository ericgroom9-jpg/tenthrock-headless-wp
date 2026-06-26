import { CANONICAL_ORIGIN } from "@/lib/seo-metadata";

/**
 * Hand-authored Schema.org JSON-LD layered on top of Yoast's default graph for
 * a small set of high-value pages (homepage Organization, service pages,
 * state location pages, FAQ). Every OTHER page continues to emit Yoast's schema
 * untouched — these helpers only run when a page opts in via <JsonLdSchema>.
 *
 * All @id/url values are pinned to the canonical www origin so they line up with
 * toCanonicalUrl() and the #organization node Yoast emits (after host rewrite)
 * on every page.
 */

/** Stable @id for the publisher Organization, referenced as `provider` elsewhere. */
export const ORGANIZATION_ID = `${CANONICAL_ORIGIN}/#organization`;

/**
 * The fully-populated Organization node. Used to (a) merge richer details into
 * the bare #organization node Yoast emits on the homepage, and (b) stand alone
 * if no Yoast org node exists. No `@context` here — it lives at the graph root.
 */
export const ORGANIZATION_NODE: Record<string, unknown> = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Tenth Rock",
  url: `${CANONICAL_ORIGIN}/`,
  description:
    "Nationwide, on-demand commercial waste management and junk removal for businesses. No contracts, 24/7 response, flat-rate pricing.",
  logo: {
    "@type": "ImageObject",
    url: `${CANONICAL_ORIGIN}/wp-content/uploads/2026/05/TenthRock-Logo.avif`,
    width: 750,
    height: 135,
  },
  image: `${CANONICAL_ORIGIN}/wp-content/uploads/2026/05/TenthRock-Logo.avif`,
  telephone: "+1-727-510-5454",
  email: "hello@tenthrock.com",
  // TODO: add `streetAddress`/`addressLocality`/`postalCode` here if a public
  // business street address becomes available.
  address: {
    "@type": "PostalAddress",
    addressRegion: "FL",
    addressCountry: "US",
  },
  areaServed: { "@type": "Country", name: "United States" },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-727-510-5454",
      email: "hello@tenthrock.com",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
  ],
  sameAs: [
    "https://www.facebook.com/tenthrocksolutions",
    "https://www.instagram.com/tenth_rock/",
    "https://www.linkedin.com/company/tenth-rock",
    "https://x.com/Tenth_Rock",
  ],
};

/** Build the Service node for an individual /services/<slug> page. */
export function buildServiceSchema(opts: {
  slug: string;
  name: string;
  description: string;
  serviceType?: string;
}): Record<string, unknown> {
  const url = `${CANONICAL_ORIGIN}/services/${opts.slug}`;
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: opts.name,
    serviceType: opts.serviceType || "Commercial waste management",
    description: opts.description,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: "United States" },
    url,
  };
}

/** Build the state-scoped Service node for a /locations/<state>-junk-removal page. */
export function buildLocationServiceSchema(opts: {
  slug: string;
  stateName: string;
}): Record<string, unknown> {
  const url = `${CANONICAL_ORIGIN}/locations/${opts.slug}`;
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Commercial Waste Management & Junk Removal in ${opts.stateName}`,
    serviceType: "Commercial waste management and junk removal",
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "State", name: opts.stateName },
    url,
  };
}

/**
 * Build the FAQPage node from the exact Q&As rendered on the page. Returns null
 * when there are no items (so we never emit an empty FAQPage). Answers are
 * stripped of any HTML to plain text so the schema mirrors the visible copy.
 */
export function buildFaqPageSchema(
  items: { question: string; answer: string }[],
): Record<string, unknown> | null {
  const mainEntity = items
    .filter((it) => it.question?.trim() && it.answer?.trim())
    .map((it) => ({
      "@type": "Question",
      name: it.question.trim(),
      acceptedAnswer: {
        "@type": "Answer",
        text: stripHtml(it.answer),
      },
    }));
  if (mainEntity.length === 0) return null;
  return {
    "@type": "FAQPage",
    "@id": `${CANONICAL_ORIGIN}/faq#faq`,
    mainEntity,
  };
}

function stripHtml(value: string): string {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

interface AugmentOptions {
  /** Extra graph nodes (Service, FAQPage, …) to add to this page's graph. */
  additionalNodes?: Record<string, unknown>[];
  /** Merge the rich Organization details into the existing #organization node. */
  upgradeOrganization?: boolean;
}

/**
 * Produce a JSON-LD string by augmenting Yoast's raw graph: optionally upgrading
 * the #organization node and/or appending custom nodes. Nodes whose @id already
 * exists in the graph are skipped so we never duplicate an @id. Returns null when
 * there is nothing to emit. Falls back gracefully (builds a standalone graph)
 * when Yoast supplied no schema or the raw string can't be parsed.
 */
export function buildAugmentedJsonLd(
  raw: string | undefined,
  { additionalNodes, upgradeOrganization }: AugmentOptions,
): string | null {
  let parsed: unknown = null;
  if (raw) {
    try {
      parsed = JSON.parse(raw);
    } catch {
      parsed = null;
    }
  }

  let graph: Record<string, unknown>[] = [];
  let context: unknown = "https://schema.org";
  if (parsed && typeof parsed === "object") {
    const obj = parsed as Record<string, unknown>;
    if (obj["@context"]) context = obj["@context"];
    if (Array.isArray(obj["@graph"])) {
      graph = [...(obj["@graph"] as Record<string, unknown>[])];
    } else if (Array.isArray(parsed)) {
      graph = [...(parsed as Record<string, unknown>[])];
    } else {
      graph = [obj];
    }
  } else if (Array.isArray(parsed)) {
    graph = [...(parsed as Record<string, unknown>[])];
  }

  if (upgradeOrganization) {
    const idx = graph.findIndex(
      (n) =>
        typeof n?.["@id"] === "string" &&
        (n["@id"] as string).endsWith("#organization"),
    );
    if (idx >= 0) {
      graph[idx] = { ...graph[idx], ...ORGANIZATION_NODE };
    } else {
      graph.push(ORGANIZATION_NODE);
    }
  }

  if (additionalNodes?.length) {
    const existingIds = new Set(
      graph
        .map((n) => n?.["@id"])
        .filter((id): id is string => typeof id === "string"),
    );
    for (const node of additionalNodes) {
      const id = node?.["@id"];
      if (typeof id === "string" && existingIds.has(id)) continue;
      if (typeof id === "string") existingIds.add(id);
      graph.push(node);
    }
  }

  if (graph.length === 0) return null;
  return JSON.stringify({ "@context": context, "@graph": graph });
}
