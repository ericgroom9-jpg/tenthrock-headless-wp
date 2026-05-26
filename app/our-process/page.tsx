import { fetchOurProcessAcf, fetchGlobalSections, fetchPageTemplateSeo } from "@/lib/wordpress";
import OurProcessClient from "./OurProcessClient";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const revalidate = 1800;

export async function generateMetadata() {
  const data = await fetchOurProcessAcf();
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Our Process | Tenth Rock",
    fallbackDescription: "Five steps from first call to job complete. See how Tenth Rock handles every project.",
  });
}

export default async function OurProcessPage() {
  const [acf, globalSections, seo] = await Promise.all([
    fetchOurProcessAcf(),
    fetchGlobalSections(),
    fetchPageTemplateSeo("template-our-process", "our-process"),
  ]);
  return (
    <>
      <JsonLdSchema seo={acf?.seoMetadata || seo} />
      <OurProcessClient acf={acf} globalSections={globalSections} />
    </>
  );
}
