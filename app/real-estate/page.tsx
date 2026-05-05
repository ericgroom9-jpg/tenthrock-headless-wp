import { fetchIndustryWithAcf } from '@/lib/wordpress';
import IndustryTemplate from "@/components/industries/IndustryTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Real Estate Waste Management | Property Management | Tenth Rock",
  description: "Professional waste management for property managers, apartment communities, and commercial real estate. Enhance property value with reliable waste services.",
};

export default async function RealEstatePage() {
  const data = await fetchIndustryWithAcf('real-estate');
  if (!data) return null;
  return <IndustryTemplate {...data} />;
}
