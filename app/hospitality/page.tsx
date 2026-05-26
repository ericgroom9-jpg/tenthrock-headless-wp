import { notFound } from 'next/navigation';
import { fetchIndustryWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import IndustryTemplate from "@/components/industries/IndustryTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchIndustryWithAcf('hospitality');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Hospitality Waste Management | Hotels & Resorts | Tenth Rock",
    fallbackDescription: "Premium waste management services for hotels, resorts, and hospitality venues. Discreet, reliable service that protects your guest experience.",
  });
}

export default async function HospitalityPage() {
  const data = await fetchIndustryWithAcf('hospitality');
  if (!data) notFound();
  return <IndustryTemplate {...data} />;
}
