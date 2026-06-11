import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import { JsonLdSchema } from '@/components/seo/JsonLdSchema';
import { DEFAULT_OG_IMAGE, toCanonicalUrl } from '@/lib/seo-metadata';
import { SERVICE_PUBLIC_TO_WP } from '@/lib/config/url-redirects';
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
    alternates: { canonical: toCanonicalUrl(canonicalPath) },
  };
}

export const revalidate = 1800;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const wpSlug = SERVICE_PUBLIC_TO_WP[slug];
  if (!wpSlug) return { title: 'Page Not Found' };

  const service = await fetchServiceWithAcf(wpSlug).catch(() => null);
  if (!service) return { title: 'Page Not Found' };

  const base = await getFrontendUrl();
  return buildSeoMetadata(
    `${service.serviceName} | Tenth Rock`,
    service.seoMetadata,
    `${base}/services/${slug}`,
  );
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const wpSlug = SERVICE_PUBLIC_TO_WP[slug];
  if (!wpSlug) notFound();

  const service = await fetchServiceWithAcf(wpSlug).catch(() => null);
  if (!service) notFound();

  return (
    <>
      <JsonLdSchema seo={service.seoMetadata} />
      <ServiceTemplate {...service} />
    </>
  );
}
