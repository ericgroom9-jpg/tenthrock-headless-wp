import { fetchWhoWeServeAcf, fetchGlobalSections, fetchPageTemplateSeo, fetchPageTemplateSlugMap } from "@/lib/wordpress";
import WhoWeServeClient from "./WhoWeServeClient";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const revalidate = 1800;

export async function generateMetadata() {
  const [data, slugMap] = await Promise.all([
    fetchWhoWeServeAcf(),
    fetchPageTemplateSlugMap(),
  ]);
  const slug = slugMap["template-who-we-serve"] || "industries";
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Who We Serve | Tenth Rock",
    fallbackDescription: "Tenth Rock serves retail chains, stadiums, hospitality, real estate, and more with reliable waste management.",
    fallbackCanonical: `/${slug}`,
  });
}

export default async function WhoWeServePage() {
  const [acf, globalSections, seo] = await Promise.all([
    fetchWhoWeServeAcf(),
    fetchGlobalSections(),
    fetchPageTemplateSeo("template-who-we-serve", "who-we-serve"),
  ]);
  return (
    <>
      <JsonLdSchema seo={acf?.seoMetadata || seo} />
      <WhoWeServeClient acf={acf} globalSections={globalSections} />
    </>
  );
}
