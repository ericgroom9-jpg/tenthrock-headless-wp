import { fetchOurProcessAcf, fetchGlobalSections, fetchPageTemplateSeo } from "@/lib/wordpress";
import OurProcessClient from "./OurProcessClient";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";

export const revalidate = 1800;

export async function generateMetadata() {
  const data = await fetchOurProcessAcf();
  return {
    title: data?.seoMetadata?.title || "Our Process | Tenth Rock",
    description: data?.seoMetadata?.metaDesc || "Five steps from first call to job complete. See how Tenth Rock handles every project.",
  };
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
