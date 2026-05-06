import { fetchHomepageAcf, fetchGlobalSections, fetchAllTestimonials, fetchAllCaseStudies, fetchAllPartnerLogos } from '@/lib/wordpress';
import HomeClient from '@/components/home/HomeClient';

export const revalidate = 1800;

export async function generateMetadata() {
  const data = await fetchHomepageAcf();
  return {
    title: data?.seoMetadata?.title || 'Tenth Rock Waste Solutions | Nationwide Commercial Waste Management',
    description: data?.seoMetadata?.metaDesc || 'Nationwide commercial waste management: waste removal, pressure washing, dumpster rental, and hauling services. 24/7 dispatch across 48 states.',
    openGraph: {
      title: data?.seoMetadata?.title || 'Tenth Rock Waste Solutions | Nationwide Commercial Waste Management',
      description: data?.seoMetadata?.metaDesc || 'Nationwide commercial waste management: waste removal, pressure washing, dumpster rental, and hauling services. 24/7 dispatch across 48 states.',
      type: 'website',
    },
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
    <HomeClient
      acf={acf}
      globalSections={globalSections}
      testimonials={testimonials}
      caseStudies={caseStudies}
      partnerLogos={partnerLogos}
    />
  );
}
