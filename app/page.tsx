import { fetchHomepageAcf, fetchGlobalSections, fetchAllTestimonials, fetchAllCaseStudies, fetchAllPartnerLogos } from '@/lib/wordpress';
import HomeClient from '@/components/home/HomeClient';
import { JsonLdSchema } from '@/components/seo/JsonLdSchema';
import { buildPageMetadata } from '@/lib/seo-metadata';

export const revalidate = 1800;

export async function generateMetadata() {
  const data = await fetchHomepageAcf();
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: 'Tenth Rock Waste Solutions | Nationwide Commercial Waste Management',
    fallbackDescription: 'Nationwide commercial waste management: waste removal, pressure washing, dumpster rental, and hauling services. 24/7 dispatch across 48 states.',
  });
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
      <JsonLdSchema seo={acf?.seoMetadata} upgradeOrganization />
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
