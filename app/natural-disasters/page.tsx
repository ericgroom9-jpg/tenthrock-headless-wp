import { notFound } from 'next/navigation';
import { fetchIndustryWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import IndustryTemplate from "@/components/industries/IndustryTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchIndustryWithAcf('natural-disasters');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Disaster Response Waste Management | Emergency Cleanup | Tenth Rock",
    fallbackDescription: "Rapid-response waste management for natural disasters and emergencies. Storm debris removal, flood cleanup, and disaster recovery support when you need it most.",
  });
}

export default async function NaturalDisastersPage() {
  const data = await fetchIndustryWithAcf('natural-disasters');
  if (!data) notFound();
  return <IndustryTemplate {...data} />;
}
