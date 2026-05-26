import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('natrual-disaster-cleanup');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Natural Disaster Cleanup | Storm Debris Removal & Hurricane Cleanup | Tenth Rock",
    fallbackDescription: "Storm debris removal, hurricane debris cleanup, and rapid response debris removal. Emergency dumpster rental and emergency roll-off rental for multi-site recovery support and post-storm waste management.",
  });
}

export default async function NaturalDisasterCleanupPage() {
  const data = await fetchServiceWithAcf('natrual-disaster-cleanup');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
