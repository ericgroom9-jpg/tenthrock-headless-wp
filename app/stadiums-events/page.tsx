import { notFound } from 'next/navigation';
import { fetchIndustryWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import IndustryTemplate from "@/components/industries/IndustryTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchIndustryWithAcf('stadiums-events');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Stadium & Event Waste Management | Tenth Rock",
    fallbackDescription: "Professional waste management for stadiums, arenas, and large-scale events. High-volume waste solutions, recycling programs, and rapid post-event cleanup services.",
  });
}

export default async function StadiumsEventsPage() {
  const data = await fetchIndustryWithAcf('stadiums-events');
  if (!data) notFound();
  return <IndustryTemplate {...data} />;
}
