import { notFound } from 'next/navigation';
import { fetchIndustryWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import IndustryTemplate from "@/components/industries/IndustryTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchIndustryWithAcf('real-estate');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Real Estate Waste Management | Property Management | Tenth Rock",
    fallbackDescription: "Professional waste management for property managers, apartment communities, and commercial real estate. Enhance property value with reliable waste services.",
  });
}

export default async function RealEstatePage() {
  const data = await fetchIndustryWithAcf('real-estate');
  if (!data) notFound();
  return <IndustryTemplate {...data} />;
}
