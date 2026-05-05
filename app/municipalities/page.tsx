import { fetchIndustryWithAcf } from '@/lib/wordpress';
import IndustryTemplate from "@/components/industries/IndustryTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Municipal Waste Management | Government & Public Sector | Tenth Rock",
  description: "Comprehensive waste management solutions for municipalities, government facilities, and public sector organizations. Reliable service that serves your community.",
};

export default async function MunicipalitiesPage() {
  const data = await fetchIndustryWithAcf('municipalities');
  if (!data) return null;
  return <IndustryTemplate {...data} />;
}
