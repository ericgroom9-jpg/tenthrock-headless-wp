import { notFound } from 'next/navigation';
import { fetchIndustryBySlug } from '@/lib/wordpress';
import IndustryTemplate from '@/components/industries/IndustryTemplate';
import type { Metadata } from 'next';

const defaultHeroImage = '/images/stock/service-dumpster-rental.jpg';

const defaultBulletPoints = [
  {
    title: 'Dedicated Account Management',
    description: 'A single point of contact who understands your industry and coordinates all waste operations across your locations.',
  },
  {
    title: 'Custom Service Programs',
    description: 'Tailored pickup schedules, container sizing, and recycling programs designed around how your business operates.',
  },
  {
    title: 'Nationwide Coverage',
    description: 'Consistent service standards across all your locations with our vetted network of local vendors in 48 states.',
  },
  {
    title: 'Transparent Reporting',
    description: 'Detailed reporting on volumes, costs, and sustainability metrics so you always know where you stand.',
  },
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = await fetchIndustryBySlug(slug);

  if (!industry) {
    return { title: 'Industry Not Found' };
  }

  const seo = industry.seoMetadata;
  const plainExcerpt = industry.excerpt?.replace(/<[^>]*>/g, '').trim().slice(0, 160);

  return {
    title: seo?.title || `${industry.title} Waste Management | Tenth Rock`,
    description: seo?.metaDesc || plainExcerpt || industry.title,
    openGraph: {
      title: seo?.opengraphTitle || industry.title,
      description: seo?.opengraphDescription || plainExcerpt || '',
      type: 'website',
      images: seo?.opengraphImage
        ? [seo.opengraphImage]
        : industry.featuredImageUrl
          ? [industry.featuredImageUrl]
          : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.twitterTitle || industry.title,
      description: seo?.twitterDescription || plainExcerpt || '',
      images: seo?.twitterImage
        ? [seo.twitterImage]
        : industry.featuredImageUrl
          ? [industry.featuredImageUrl]
          : undefined,
    },
    ...(seo?.canonical ? { alternates: { canonical: seo.canonical } } : {}),
  };
}

export default async function DynamicIndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = await fetchIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const plainExcerpt = industry.excerpt?.replace(/<[^>]*>/g, '').trim() || '';

  return (
    <IndustryTemplate
      industryName={industry.title}
      heroImage={industry.featuredImageUrl || defaultHeroImage}
      heroDescription={plainExcerpt || `Waste management solutions for the ${industry.title} industry.`}
      aboutTitle={`${industry.title} Waste Solutions`}
      aboutImage={industry.featuredImageUrl || defaultHeroImage}
      bulletPoints={defaultBulletPoints}
    />
  );
}
