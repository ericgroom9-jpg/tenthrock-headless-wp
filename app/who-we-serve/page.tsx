import { fetchWhoWeServeAcf, fetchGlobalSections } from "@/lib/wordpress";
import WhoWeServeClient from "./WhoWeServeClient";

export const revalidate = 300;

export async function generateMetadata() {
  const data = await fetchWhoWeServeAcf();
  return {
    title: data?.seoMetadata?.title || "Who We Serve | Tenth Rock",
    description: data?.seoMetadata?.metaDesc || "Tenth Rock serves retail chains, stadiums, hospitality, real estate, and more with reliable waste management.",
  };
}

export default async function WhoWeServePage() {
  const [acf, globalSections] = await Promise.all([
    fetchWhoWeServeAcf(),
    fetchGlobalSections(),
  ]);
  return <WhoWeServeClient acf={acf} globalSections={globalSections} />;
}
