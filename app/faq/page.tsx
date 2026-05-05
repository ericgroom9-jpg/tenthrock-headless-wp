import FaqPage from "@/components/faq/FaqPage";
import { fetchAllFaqs, fetchFaqPageAcf, fetchGlobalSections } from "@/lib/wordpress";

export const revalidate = 1800;

export async function generateMetadata() {
  const data = await fetchFaqPageAcf();
  return {
    title: data?.seoMetadata?.title || "FAQ | Tenth Rock - Commercial Waste Management",
    description: data?.seoMetadata?.metaDesc || "Find answers to frequently asked questions about Tenth Rock's commercial waste management services, pricing, sustainability, and more.",
  };
}

export default async function Page() {
  const [categories, acf, globalSections] = await Promise.all([
    fetchAllFaqs(),
    fetchFaqPageAcf(),
    fetchGlobalSections(),
  ]);
  return (
    <FaqPage
      categories={categories.length > 0 ? categories : undefined}
      acf={acf}
      globalSections={globalSections}
    />
  );
}
