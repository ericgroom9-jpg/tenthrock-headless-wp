import type { Metadata } from "next";
import type { SeoMetadata } from "@/shared/schema";

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
  const ogImage = seo?.opengraphImage || fallbackImage || undefined;
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
