import { fetchWhoWeServeAcf, fetchGlobalSections, fetchPageTemplateSeo } from "@/lib/wordpress";
import WhoWeServeClient from "./WhoWeServeClient";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";

export const revalidate = 1800;

export async function generateMetadata() {
  const data = await fetchWhoWeServeAcf();
  return {
    title: data?.seoMetadata?.title || "Who We Serve | Tenth Rock",
    description: data?.seoMetadata?.metaDesc || "Tenth Rock serves retail chains, stadiums, hospitality, real estate, and more with reliable waste management.",
  };
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
