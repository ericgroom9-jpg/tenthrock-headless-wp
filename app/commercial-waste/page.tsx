import { fetchCommercialWasteAcf, fetchGlobalSections, fetchPageTemplateSeo, fetchPageTemplateSlugMap } from "@/lib/wordpress";
import type { CommercialWasteTemplateData, GlobalSectionsData } from "@/lib/wordpress";
import CommercialWasteServices from "@/components/services/CommercialWasteServices";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const revalidate = 1800;

export async function generateMetadata() {
  const [data, slugMap] = await Promise.all([
    fetchCommercialWasteAcf(),
    fetchPageTemplateSlugMap(),
  ]);
  const slug = slugMap["template-commercial-waste"] || "services";
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Commercial Waste Services | Tenth Rock",
    fallbackDescription: "Nationwide commercial waste services including emergency removal, dumpster rentals, and waste advisory.",
    fallbackCanonical: `/${slug}`,
  });
}

export default async function CommercialWasteServicesPage() {
  const [acf, globalSections, seo] = await Promise.all([
    fetchCommercialWasteAcf(),
    fetchGlobalSections(),
    fetchPageTemplateSeo("template-commercial-waste", "commercial-waste"),
  ]);
  return (
    <>
      <JsonLdSchema seo={acf?.seoMetadata || seo} />
      <CommercialWasteServices acf={acf} globalSections={globalSections} />
    </>
  );
}
