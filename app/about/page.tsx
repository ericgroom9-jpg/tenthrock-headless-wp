import { fetchAboutAcf, fetchGlobalSections } from "@/lib/wordpress";
import AboutClient from "./AboutClient";

export const revalidate = 1800;

export async function generateMetadata() {
  const data = await fetchAboutAcf();
  return {
    title: data?.seoMetadata?.title || "About | Tenth Rock Waste Solutions",
    description: data?.seoMetadata?.metaDesc || "Built from the ground up to fix a broken industry. Learn about Tenth Rock's mission and values.",
  };
}

export default async function AboutPage() {
  const [acf, globalSections] = await Promise.all([
    fetchAboutAcf(),
    fetchGlobalSections(),
  ]);
  return <AboutClient acf={acf} globalSections={globalSections} />;
}
