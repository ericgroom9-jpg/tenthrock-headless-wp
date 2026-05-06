import { notFound } from 'next/navigation';
import { fetchIndustryWithAcf } from '@/lib/wordpress';
import IndustryTemplate from "@/components/industries/IndustryTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Disaster Response Waste Management | Emergency Cleanup | Tenth Rock",
  description: "Rapid-response waste management for natural disasters and emergencies. Storm debris removal, flood cleanup, and disaster recovery support when you need it most.",
};

export default async function NaturalDisastersPage() {
  const data = await fetchIndustryWithAcf('natural-disasters');
  if (!data) notFound();
  return <IndustryTemplate {...data} />;
}
