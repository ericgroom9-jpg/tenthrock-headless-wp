import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Natural Disaster Mobilization | Storm Debris Removal & Hurricane Cleanup | Tenth Rock",
  description: "Storm debris removal, hurricane debris cleanup, and rapid response debris removal. Emergency dumpster rental and emergency roll-off rental for multi-site recovery support and post-storm waste management.",
};

export default async function NaturalDisasterMobilizationPage() {
  const data = await fetchServiceWithAcf('natural-disaster-mobilization');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
