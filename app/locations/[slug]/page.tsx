import { fetchLocationWithAcf } from "@/lib/wordpress";
import { getStateData } from "@/lib/data/state-cities";
import { getStateLocationContent } from "@/lib/data/state-location-content";
import LocationTemplateClient from "./LocationTemplateClient";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 1800;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const locationName = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  const wpData = await fetchLocationWithAcf(slug).catch(() => null);
  const seo = wpData?.seoMetadata;

  return {
    title: seo?.title || `Waste Management Services in ${locationName} | Tenth Rock`,
    description: seo?.metaDesc || `Commercial waste removal services for businesses across ${locationName}. Emergency waste removal, dumpster rentals, and managed programs.`,
    openGraph: {
      title: seo?.opengraphTitle || `Waste Management in ${locationName}`,
      description: seo?.opengraphDescription || `On-demand waste removal and managed programs for businesses across ${locationName}.`,
    },
  };
}

export default async function LocationTemplatePage({ params }: PageProps) {
  const { slug } = await params;

  const wpData = await fetchLocationWithAcf(slug).catch(() => null);

  const localStateData = getStateData(slug);
  const localContent = getStateLocationContent(slug);

  const locationName = wpData?.locationName || slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  const heroSubtitle = wpData?.heroSubtitle || localContent?.subtitle || "On-demand waste removal, dumpster rentals, and managed programs for businesses across the region. Local crews, nationwide support.";
  const aboutDescription = wpData?.aboutDescription || localContent?.aboutDesc || "Our local crews are fully licensed, insured, and trained to handle commercial waste for businesses of all sizes. From emergency overflow pickups to scheduled dumpster service, we deliver fast, reliable waste solutions backed by our nationwide infrastructure.";
  const aboutBullets = (wpData?.aboutBullets?.length ? wpData.aboutBullets : null) || localContent?.bullets || [
    "Emergency waste removal for local businesses",
    "Rapid response for compactor failures and waste overflow",
    "Perishable inventory disposal and bulk debris removal",
  ];
  const trustedDescription = wpData?.trustedDescription || localContent?.trustedDesc || "Our operations in this area date back over a decade. We've served hundreds of commercial clients and have deep relationships with local waste facilities, ensuring efficient routing and competitive pricing for your business.";
  const infoHeading = wpData?.infoHeading || localContent?.thirdHeading || "Why Local Businesses Choose Us";
  const infoBody = wpData?.infoBody || localContent?.thirdDesc || `Managing waste across multiple locations means dealing with different providers, inconsistent pricing, and service gaps. Tenth Rock eliminates all of that. We vet and manage local vendors so you get reliable pickups, transparent invoicing, and one number to call when something goes wrong. Whether you need a one-time cleanout or ongoing scheduled service, our team handles the coordination so yours doesn't have to.`;
  const heroImage = wpData?.heroImage || "/images/stock/locations-hero-modern-city.jpg";
  const abbreviation = wpData?.stateAbbreviation || localStateData?.abbreviation || "";
  const cities = (wpData?.cities?.length ? wpData.cities : null) || localStateData?.cities || [];
  const faqs = (wpData?.faqs?.length ? wpData.faqs : null) || localContent?.faqs || [];

  return (
    <>
      <JsonLdSchema seo={wpData?.seoMetadata} />
      <LocationTemplateClient
        slug={slug}
        locationName={locationName}
        heroSubtitle={heroSubtitle}
        heroImage={heroImage}
        aboutDescription={aboutDescription}
        aboutBullets={aboutBullets}
        trustedDescription={trustedDescription}
        infoHeading={infoHeading}
        infoBody={infoBody}
        abbreviation={abbreviation}
        cities={cities}
        faqs={faqs}
      />
    </>
  );
}
