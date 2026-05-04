import { fetchCommercialWasteAcf, fetchGlobalSections } from "@/lib/wordpress";
import type { HeroPageTemplateData, GlobalSectionsData } from "@/lib/wordpress";
import CommercialWasteServices from "@/components/services/CommercialWasteServices";

export const revalidate = 300;

export async function generateMetadata() {
  const data = await fetchCommercialWasteAcf();
  return {
    title: data?.seoMetadata?.title || "Commercial Waste Services | Tenth Rock",
    description: data?.seoMetadata?.description || "Nationwide commercial waste services including emergency removal, dumpster rentals, and waste advisory.",
  };
}

export default async function CommercialWasteServicesPage() {
  const [acf, globalSections] = await Promise.all([
    fetchCommercialWasteAcf(),
    fetchGlobalSections(),
  ]);
  return <CommercialWasteServices acf={acf} globalSections={globalSections} />;
}
