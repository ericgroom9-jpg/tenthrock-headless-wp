import type { SeoMetadata } from "@/shared/schema";
import { buildAugmentedJsonLd } from "@/lib/seo-schema";

interface JsonLdSchemaProps {
  seo?: SeoMetadata | null;
  /**
   * Extra Schema.org graph nodes (e.g. Service, FAQPage) to add to this page's
   * JSON-LD. When omitted, Yoast's schema is emitted byte-for-byte unchanged.
   */
  additionalNodes?: Record<string, unknown>[];
  /**
   * When true, merge richer Organization details into the page's
   * #organization node (used on the homepage).
   */
  upgradeOrganization?: boolean;
}

/**
 * Emits Yoast SEO's JSON-LD graph as a <script type="application/ld+json">
 * tag for the current page. Renders nothing if the SEO payload has no schema
 * (e.g. legacy posts, fallback pages, or when WPGraphQL Yoast is unavailable).
 *
 * When `additionalNodes` or `upgradeOrganization` is supplied, the Yoast graph
 * is parsed and augmented (see buildAugmentedJsonLd). Otherwise the raw Yoast
 * string is passed through untouched so non-opted-in pages are unaffected.
 *
 * Safe to render anywhere in the page tree; Google reads the script from
 * either head or body.
 */
export function JsonLdSchema({ seo, additionalNodes, upgradeOrganization }: JsonLdSchemaProps) {
  const raw = seo?.schema ?? undefined;
  const needsAugment = Boolean(upgradeOrganization) || (additionalNodes?.length ?? 0) > 0;

  const output = needsAugment
    ? buildAugmentedJsonLd(raw, { additionalNodes, upgradeOrganization })
    : raw;

  if (!output) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: output }}
    />
  );
}
