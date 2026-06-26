import FaqPage from "@/components/faq/FaqPage";
import { defaultFaqCategories } from "@/lib/data/faq-defaults";
import { fetchAllFaqs, fetchFaqPageAcf, fetchGlobalSections, fetchPageTemplateSeo } from "@/lib/wordpress";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { buildFaqPageSchema } from "@/lib/seo-schema";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const revalidate = 1800;

export async function generateMetadata() {
  const data = await fetchFaqPageAcf();
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "FAQ | Tenth Rock - Commercial Waste Management",
    fallbackDescription: "Find answers to frequently asked questions about Tenth Rock's commercial waste management services, pricing, sustainability, and more.",
  });
}

export default async function Page() {
  const [categories, acf, globalSections, seo] = await Promise.all([
    fetchAllFaqs(),
    fetchFaqPageAcf(),
    fetchGlobalSections(),
    fetchPageTemplateSeo("template-faq", "faq"),
  ]);
  const effectiveCategories = categories.length > 0 ? categories : defaultFaqCategories;
  const faqSchema = buildFaqPageSchema(effectiveCategories.flatMap((c) => c.faqs));

  return (
    <>
      <JsonLdSchema
        seo={acf?.seoMetadata || seo}
        additionalNodes={faqSchema ? [faqSchema] : undefined}
      />
      <FaqPage
        categories={categories.length > 0 ? categories : undefined}
        acf={acf}
        globalSections={globalSections}
      />
    </>
  );
}
