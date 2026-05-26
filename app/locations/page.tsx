import { fetchLocationsPageAcf, fetchGlobalSections, fetchPageTemplateSeo } from "@/lib/wordpress";
import LocationsClient from "./LocationsClient";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";

export const revalidate = 1800;

export async function generateMetadata() {
  const data = await fetchLocationsPageAcf();
  return {
    title: data?.seoMetadata?.title || "Locations | Tenth Rock - Nationwide Coverage",
    description: data?.seoMetadata?.metaDesc || "Tenth Rock operates in 48 states with local crews ready for emergency pickups, scheduled service, and project-based waste removal.",
  };
}

export default async function LocationsPage() {
  const [acf, globalSections, seo] = await Promise.all([
    fetchLocationsPageAcf(),
    fetchGlobalSections(),
    fetchPageTemplateSeo("template-locations", "locations"),
  ]);
  return (
    <>
      <JsonLdSchema seo={acf?.seoMetadata || seo} />
      <LocationsClient acf={acf} globalSections={globalSections} />
    </>
  );
}
