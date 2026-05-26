import type { SeoMetadata } from "@/shared/schema";

interface JsonLdSchemaProps {
  seo?: SeoMetadata | null;
}

/**
 * Emits Yoast SEO's JSON-LD graph as a <script type="application/ld+json">
 * tag for the current page. Renders nothing if the SEO payload has no schema
 * (e.g. legacy posts, fallback pages, or when WPGraphQL Yoast is unavailable).
 *
 * Safe to render anywhere in the page tree; Google reads the script from
 * either head or body.
 */
export function JsonLdSchema({ seo }: JsonLdSchemaProps) {
  const raw = seo?.schema;
  if (!raw) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: raw }}
    />
  );
}
