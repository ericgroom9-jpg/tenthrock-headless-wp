import { fetchLocationsPageAcf, fetchGlobalSections } from "@/lib/wordpress";
import LocationsClient from "./LocationsClient";

export const revalidate = 1800;

export async function generateMetadata() {
  const data = await fetchLocationsPageAcf();
  return {
    title: data?.seoMetadata?.title || "Locations | Tenth Rock - Nationwide Coverage",
    description: data?.seoMetadata?.metaDesc || "Tenth Rock operates in 48 states with local crews ready for emergency pickups, scheduled service, and project-based waste removal.",
  };
}

export default async function LocationsPage() {
  const [acf, globalSections] = await Promise.all([
    fetchLocationsPageAcf(),
    fetchGlobalSections(),
  ]);
  return <LocationsClient acf={acf} globalSections={globalSections} />;
}
