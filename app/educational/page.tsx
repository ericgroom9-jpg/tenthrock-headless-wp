import { fetchIndustryWithAcf } from '@/lib/wordpress';
import IndustryTemplate from "@/components/industries/IndustryTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Educational Waste Management | Universities & Schools | Tenth Rock",
  description: "Specialized waste management solutions for universities, colleges, and K-12 schools. Sustainable campus waste programs, recycling initiatives, and event cleanup services.",
};

export default async function EducationalPage() {
  const data = await fetchIndustryWithAcf('educational');
  if (!data) return null;
  return <IndustryTemplate {...data} />;
}
