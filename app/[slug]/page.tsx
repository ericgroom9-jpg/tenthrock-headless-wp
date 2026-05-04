import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import { Layout } from '@/components/layout/Layout';
import { storage } from '@/lib/storage';
import { fetchPagePreviewById, fetchServiceBySlug, fetchIndustryBySlug } from '@/lib/wordpress';
import { isLandingBuilderEnabled } from '@/lib/config/features';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import IndustryTemplate from '@/components/industries/IndustryTemplate';
import type { Metadata } from 'next';

import { 
  getPageTemplateInfo, 
  getLandingPageData,
  LandingPageRenderer 
} from '@/modules/landing-builder';

const defaultIndustryHeroImage = '/images/stock/service-dumpster-rental.jpg';

const defaultIndustryBulletPoints = [
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
  searchParams: Promise<{ previewId?: string }>;
}

function buildSeoMetadata(title: string, seo: any, featuredImageUrl?: string | null): Metadata {
  const plainTitle = title;
  return {
    title: seo?.title || plainTitle,
    description: seo?.metaDesc || '',
    openGraph: {
      title: seo?.opengraphTitle || plainTitle,
      description: seo?.opengraphDescription || '',
      type: 'website',
      images: seo?.opengraphImage
        ? [seo.opengraphImage]
        : featuredImageUrl
          ? [featuredImageUrl]
          : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.twitterTitle || plainTitle,
      description: seo?.twitterDescription || '',
      images: seo?.twitterImage
        ? [seo.twitterImage]
        : featuredImageUrl
          ? [featuredImageUrl]
          : undefined,
    },
    ...(seo?.canonical ? { alternates: { canonical: seo.canonical } } : {}),
  };
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { previewId } = await searchParams;
  const draft = await draftMode();
  
  if (isLandingBuilderEnabled()) {
    const templateInfo = await getPageTemplateInfo(slug);
    if (templateInfo?.isLandingPage && templateInfo.seo) {
      return buildSeoMetadata(templateInfo.title, templateInfo.seo);
    }
  }

  const [service, industry] = await Promise.all([
    fetchServiceBySlug(slug).catch(() => null),
    fetchIndustryBySlug(slug).catch(() => null),
  ]);

  if (service) {
    return buildSeoMetadata(
      `${service.title} | Tenth Rock`,
      service.seoMetadata,
      service.featuredImageUrl,
    );
  }

  if (industry) {
    return buildSeoMetadata(
      `${industry.title} Waste Management | Tenth Rock`,
      industry.seoMetadata,
      industry.featuredImageUrl,
    );
  }
  
  let page;
  if (draft.isEnabled && previewId) {
    page = await fetchPagePreviewById(parseInt(previewId));
  }
  if (!page) {
    page = await storage.getPageBySlug(slug);
  }
  
  if (!page) {
    return { title: 'Page Not Found' };
  }

  return buildSeoMetadata(page.title, page.seoMetadata);
}

export default async function WordPressPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { previewId } = await searchParams;
  const draft = await draftMode();
  
  const isPreview = draft.isEnabled;
  
  if (isLandingBuilderEnabled()) {
    const templateInfo = await getPageTemplateInfo(slug);
    
    if (templateInfo?.isLandingPage) {
      console.log('[Page] Rendering as landing page:', slug);
      const landingData = await getLandingPageData(templateInfo.databaseId, isPreview);
      
      if (landingData && landingData.sections.length > 0) {
        return (
          <Layout isPreview={isPreview}>
            <LandingPageRenderer data={landingData} isPreview={isPreview} />
          </Layout>
        );
      }
      console.log('[Page] Landing page has no sections, falling back to regular rendering');
    }
  }

  const [service, industry] = await Promise.all([
    fetchServiceBySlug(slug).catch(() => null),
    fetchIndustryBySlug(slug).catch(() => null),
  ]);

  if (service) {
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

  if (industry) {
    const plainExcerpt = industry.excerpt?.replace(/<[^>]*>/g, '').trim() || '';
    return (
      <IndustryTemplate
        industryName={industry.title}
        heroImage={industry.featuredImageUrl || defaultIndustryHeroImage}
        heroDescription={plainExcerpt || `Waste management solutions for the ${industry.title} industry.`}
        aboutTitle={`${industry.title} Waste Solutions`}
        aboutImage={industry.featuredImageUrl || defaultIndustryHeroImage}
        bulletPoints={defaultIndustryBulletPoints}
      />
    );
  }
  
  let page;
  
  if (draft.isEnabled && previewId) {
    console.log('[Preview Page] Fetching page by previewId:', previewId);
    page = await fetchPagePreviewById(parseInt(previewId));
  }
  
  if (!page) {
    page = await storage.getPageBySlug(slug);
  }

  if (!page) {
    notFound();
  }

  return (
    <Layout isPreview={isPreview}>
      <div className="py-12 md:py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <article>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tighter leading-[1.05] mb-8"
              data-testid="text-page-title"
            >
              {page.title}
            </h1>
            
            {page.content && (
              <div 
                className="prose prose-lg max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: page.content }}
                data-testid="content-page-body"
              />
            )}
          </article>
        </div>
      </div>
    </Layout>
  );
}
