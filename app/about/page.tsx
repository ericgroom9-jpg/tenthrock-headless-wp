import { fetchAboutAcf, fetchGlobalSections, fetchPageTemplateSeo, fetchPageTemplateSlugMap } from "@/lib/wordpress";
import AboutClient from "./AboutClient";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const revalidate = 1800;

export async function generateMetadata() {
  const [data, slugMap] = await Promise.all([
    fetchAboutAcf(),
    fetchPageTemplateSlugMap(),
  ]);
  const slug = slugMap["template-about"] || "about-us";
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "About | Tenth Rock Waste Solutions",
    fallbackDescription: "Built from the ground up to fix a broken industry. Learn about Tenth Rock's mission and values.",
    fallbackCanonical: `/${slug}`,
  });
}

export default async function AboutPage() {
  const [acf, globalSections, seo] = await Promise.all([
    fetchAboutAcf(),
    fetchGlobalSections(),
    fetchPageTemplateSeo("template-about", "about"),
  ]);
  return (
    <>
      <JsonLdSchema seo={acf?.seoMetadata || seo} />
      <AboutClient acf={acf} globalSections={globalSections} />
    </>
  );
}
