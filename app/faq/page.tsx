import FaqPage from "@/components/faq/FaqPage";
import { fetchAllFaqs } from "@/lib/wordpress";

export const metadata = {
  title: "FAQ | Tenth Rock - Commercial Waste Management",
  description: "Find answers to frequently asked questions about Tenth Rock's commercial waste management services, pricing, sustainability, and more.",
};

export default async function Page() {
  const categories = await fetchAllFaqs();
  return <FaqPage categories={categories.length > 0 ? categories : undefined} />;
}
