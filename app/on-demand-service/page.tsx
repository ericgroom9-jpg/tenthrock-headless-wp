import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('on-demand-service');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "On-Demand Dumpster Rental | Same-Day Roll-Off Service | Tenth Rock",
    fallbackDescription: "Same-day dumpster rental, emergency dumpster rental, and emergency roll-off service for commercial projects. Roll-off dumpsters and open-top dumpsters with same-day swaps across 48 states.",
  });
}

export default async function OnDemandServicePage() {
  const data = await fetchServiceWithAcf('on-demand-service');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
