import type { Metadata } from "next";
import type { SeoMetadata } from "@/shared/schema";

/**
 * Site-wide default OG/Twitter image used when neither WP SEO nor the page
 * itself supplies one. Keeps every shared link rendering with a Tenth Rock
 * preview card instead of falling back to nothing.
 */
export const DEFAULT_OG_IMAGE =
  "https://tenthrock.sherstaging.com/wp-content/uploads/2026/05/tr-fi-img-1.jpg";

interface BuildPageMetadataOptions {
  seo?: SeoMetadata | null;
  fallbackTitle: string;
  fallbackDescription: string;
  fallbackImage?: string | null;
}

/**
 * Builds a Next.js Metadata object from a Yoast SEO payload with sensible
 * fallbacks. Always emits openGraph + twitter blocks so social previews work
 * even when WP hasn't populated every field.
 */
export function buildPageMetadata({
  seo,
  fallbackTitle,
  fallbackDescription,
  fallbackImage,
}: BuildPageMetadataOptions): Metadata {
  const title = seo?.title || fallbackTitle;
  const description = seo?.metaDesc || fallbackDescription;
  const ogTitle = seo?.opengraphTitle || title;
  const ogDescription = seo?.opengraphDescription || description;
  const ogImage = seo?.opengraphImage || fallbackImage || DEFAULT_OG_IMAGE;
  const twitterImage = seo?.twitterImage || ogImage;

  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: "website",
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: seo?.twitterTitle || ogTitle,
      description: seo?.twitterDescription || ogDescription,
      ...(twitterImage ? { images: [twitterImage] } : {}),
    },
  };

  if (seo?.canonical) {
    metadata.alternates = { canonical: seo.canonical };
  }

  return metadata;
}
