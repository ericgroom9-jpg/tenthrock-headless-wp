import { fetchIndustryWithAcf } from '@/lib/wordpress';
import IndustryTemplate from "@/components/industries/IndustryTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Retail Waste Management | Stores & Shopping Centers | Tenth Rock",
  description: "Efficient waste management for retail stores, shopping centers, and commercial establishments. Keep your business clean and customers happy.",
};

export default async function RetailPage() {
  const data = await fetchIndustryWithAcf('retail');
  if (!data) return null;
  return <IndustryTemplate {...data} />;
}
