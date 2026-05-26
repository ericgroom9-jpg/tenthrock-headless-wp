import { notFound } from 'next/navigation';
import { fetchIndustryWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import IndustryTemplate from "@/components/industries/IndustryTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchIndustryWithAcf('municipalities');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Municipal Waste Management | Government & Public Sector | Tenth Rock",
    fallbackDescription: "Comprehensive waste management solutions for municipalities, government facilities, and public sector organizations. Reliable service that serves your community.",
  });
}

export default async function MunicipalitiesPage() {
  const data = await fetchIndustryWithAcf('municipalities');
  if (!data) notFound();
  return <IndustryTemplate {...data} />;
}
