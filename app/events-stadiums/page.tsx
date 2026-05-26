import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('events-stadiums');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Events & Stadiums | Event Waste Logistics & Stadium Waste Coordination | Tenth Rock",
    fallbackDescription: "Event waste logistics and stadium waste coordination for multi-day event waste support. Event waste management for stadiums, fairs, festivals, and temporary activations nationwide.",
  });
}

export default async function EventsStadiumsPage() {
  const data = await fetchServiceWithAcf('events-stadiums');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
