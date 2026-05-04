import { notFound } from 'next/navigation';
import { fetchServiceBySlug } from '@/lib/wordpress';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await fetchServiceBySlug(slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  const seo = service.seoMetadata;
  const plainExcerpt = service.excerpt?.replace(/<[^>]*>/g, '').trim().slice(0, 160);

  return {
    title: seo?.title || `${service.title} | Tenth Rock`,
    description: seo?.metaDesc || plainExcerpt || service.title,
    openGraph: {
      title: seo?.opengraphTitle || service.title,
      description: seo?.opengraphDescription || plainExcerpt || '',
      type: 'website',
      images: seo?.opengraphImage
        ? [seo.opengraphImage]
        : service.featuredImageUrl
          ? [service.featuredImageUrl]
          : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.twitterTitle || service.title,
      description: seo?.twitterDescription || plainExcerpt || '',
      images: seo?.twitterImage
        ? [seo.twitterImage]
        : service.featuredImageUrl
          ? [service.featuredImageUrl]
          : undefined,
    },
    ...(seo?.canonical ? { alternates: { canonical: seo.canonical } } : {}),
  };
}

export default async function DynamicServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = await fetchServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const plainExcerpt = service.excerpt?.replace(/<[^>]*>/g, '').trim() || '';

  return (
    <ServiceTemplate
      serviceName={service.title}
      serviceDescription={plainExcerpt || service.title}
      heroImage={service.featuredImageUrl || undefined}
      aboutDescription={service.content?.replace(/<[^>]*>/g, '').trim() || undefined}
    />
  );
}
