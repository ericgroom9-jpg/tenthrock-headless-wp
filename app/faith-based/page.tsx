import { fetchIndustryWithAcf } from '@/lib/wordpress';
import IndustryTemplate from "@/components/industries/IndustryTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faith-Based Waste Management | Churches & Religious Organizations | Tenth Rock",
  description: "Respectful and reliable waste management services for churches, temples, mosques, and religious organizations. Supporting your community with sustainable solutions.",
};

export default async function FaithBasedPage() {
  const data = await fetchIndustryWithAcf('faith-based');
  if (!data) return null;
  return <IndustryTemplate {...data} />;
}
