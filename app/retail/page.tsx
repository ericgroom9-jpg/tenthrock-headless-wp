import { notFound } from 'next/navigation';
import { fetchIndustryWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import IndustryTemplate from "@/components/industries/IndustryTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchIndustryWithAcf('retail');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Retail Waste Management | Stores & Shopping Centers | Tenth Rock",
    fallbackDescription: "Efficient waste management for retail stores, shopping centers, and commercial establishments. Keep your business clean and customers happy.",
  });
}

export default async function RetailPage() {
  const data = await fetchIndustryWithAcf('retail');
  if (!data) notFound();
  return <IndustryTemplate {...data} />;
}
