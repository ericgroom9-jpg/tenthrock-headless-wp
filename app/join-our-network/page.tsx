import { fetchJoinNetworkAcf } from "@/lib/wordpress";
import JoinOurNetworkClient from "./JoinOurNetworkClient";

export const revalidate = 300;

export async function generateMetadata() {
  const data = await fetchJoinNetworkAcf();
  return {
    title: data?.seoMetadata?.title || "Join Our Network | Tenth Rock",
    description: data?.seoMetadata?.description || "Partner with Tenth Rock as a certified service provider. Same-day payment, no sales, national reach.",
  };
}

export default async function JoinOurNetworkPage() {
  const acf = await fetchJoinNetworkAcf();
  return <JoinOurNetworkClient acf={acf} />;
}
