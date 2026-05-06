import { notFound } from 'next/navigation';
import { fetchIndustryWithAcf } from '@/lib/wordpress';
import IndustryTemplate from "@/components/industries/IndustryTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Stadium & Event Waste Management | Tenth Rock",
  description: "Professional waste management for stadiums, arenas, and large-scale events. High-volume waste solutions, recycling programs, and rapid post-event cleanup services.",
};

export default async function StadiumsEventsPage() {
  const data = await fetchIndustryWithAcf('stadiums-events');
  if (!data) notFound();
  return <IndustryTemplate {...data} />;
}
