import { notFound } from 'next/navigation';
import { fetchIndustryWithAcf } from '@/lib/wordpress';
import IndustryTemplate from '@/components/industries/IndustryTemplate';
import { JsonLdSchema } from '@/components/seo/JsonLdSchema';
import { DEFAULT_OG_IMAGE } from '@/lib/seo-metadata';
import { INDUSTRY_PUBLIC_TO_WP } from '@/lib/config/url-redirects';
import { getFrontendUrl } from '@/lib/seo-proxy';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

function buildSeoMetadata(
  title: string,
  seo: any,
  canonicalPath: string,
  featuredImageUrl?: string | null,
): Metadata {
  return {
    title: seo?.title || title,
    description: seo?.metaDesc || '',
    openGraph: {
      title: seo?.opengraphTitle || title,
      description: seo?.opengraphDescription || '',
      type: 'website',
      images: [seo?.opengraphImage || featuredImageUrl || DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.twitterTitle || title,
      description: seo?.twitterDescription || '',
      images: [seo?.twitterImage || seo?.opengraphImage || featuredImageUrl || DEFAULT_OG_IMAGE],
    },
    // Canonical points at the new public URL, never the legacy root slug.
    alternates: { canonical: canonicalPath },
  };
}

export const revalidate = 1800;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const wpSlug = INDUSTRY_PUBLIC_TO_WP[slug];
  if (!wpSlug) return { title: 'Page Not Found' };

  const industry = await fetchIndustryWithAcf(wpSlug).catch(() => null);
  if (!industry) return { title: 'Page Not Found' };

  const base = await getFrontendUrl();
  return buildSeoMetadata(
    `${industry.industryName} Waste Management | Tenth Rock`,
    industry.seoMetadata,
    `${base}/industries/${slug}`,
  );
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const wpSlug = INDUSTRY_PUBLIC_TO_WP[slug];
  if (!wpSlug) notFound();

  const industry = await fetchIndustryWithAcf(wpSlug).catch(() => null);
  if (!industry) notFound();

  return (
    <>
      <JsonLdSchema seo={industry.seoMetadata} />
      <IndustryTemplate {...industry} />
    </>
  );
}
