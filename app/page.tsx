import { fetchHomepageAcf, fetchGlobalSections, fetchAllTestimonials, fetchAllCaseStudies, fetchAllPartnerLogos } from '@/lib/wordpress';
import HomeClient from '@/components/home/HomeClient';
import { JsonLdSchema } from '@/components/seo/JsonLdSchema';

export const revalidate = 1800;

export async function generateMetadata() {
  const data = await fetchHomepageAcf();
  return {
    title: data?.seoMetadata?.title || 'Tenth Rock Waste Solutions | Nationwide Commercial Waste Management',
    description: data?.seoMetadata?.metaDesc || 'Nationwide commercial waste management: waste removal, pressure washing, dumpster rental, and hauling services. 24/7 dispatch across 48 states.',
    openGraph: {
      title: data?.seoMetadata?.opengraphTitle || data?.seoMetadata?.title || 'Tenth Rock Waste Solutions | Nationwide Commercial Waste Management',
      description: data?.seoMetadata?.opengraphDescription || data?.seoMetadata?.metaDesc || 'Nationwide commercial waste management: waste removal, pressure washing, dumpster rental, and hauling services. 24/7 dispatch across 48 states.',
      type: 'website',
      ...(data?.seoMetadata?.opengraphImage ? { images: [data.seoMetadata.opengraphImage] } : {}),
    },
    ...(data?.seoMetadata?.twitterImage || data?.seoMetadata?.opengraphImage
      ? {
          twitter: {
            card: 'summary_large_image' as const,
            title: data?.seoMetadata?.twitterTitle || data?.seoMetadata?.title || 'Tenth Rock Waste Solutions',
            description: data?.seoMetadata?.twitterDescription || data?.seoMetadata?.metaDesc || '',
            images: [data.seoMetadata.twitterImage || data.seoMetadata.opengraphImage!],
          },
        }
      : {}),
  };
}

export default async function Home() {
  const [acf, globalSections, testimonials, caseStudies, partnerLogos] = await Promise.all([
    fetchHomepageAcf(),
    fetchGlobalSections(),
    fetchAllTestimonials(),
    fetchAllCaseStudies(),
    fetchAllPartnerLogos(),
  ]);
  return (
    <>
      <JsonLdSchema seo={acf?.seoMetadata} />
      <HomeClient
        acf={acf}
        globalSections={globalSections}
        testimonials={testimonials}
        caseStudies={caseStudies}
        partnerLogos={partnerLogos}
      />
    </>
  );
}
