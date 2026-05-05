import { fetchOurProcessAcf, fetchGlobalSections } from "@/lib/wordpress";
import OurProcessClient from "./OurProcessClient";

export const revalidate = 1800;

export async function generateMetadata() {
  const data = await fetchOurProcessAcf();
  return {
    title: data?.seoMetadata?.title || "Our Process | Tenth Rock",
    description: data?.seoMetadata?.metaDesc || "Five steps from first call to job complete. See how Tenth Rock handles every project.",
  };
}

export default async function OurProcessPage() {
  const [acf, globalSections] = await Promise.all([
    fetchOurProcessAcf(),
    fetchGlobalSections(),
  ]);
  return <OurProcessClient acf={acf} globalSections={globalSections} />;
}
