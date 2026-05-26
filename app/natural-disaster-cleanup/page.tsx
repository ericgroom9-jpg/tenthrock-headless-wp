import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

// NOTE: The WordPress `tr_service` slug is misspelled in WP as
// `natrual-disaster-cleanup` ("natrual" not "natural"). We keep the public
// URL at the correctly-spelled `/natural-disaster-cleanup` and fetch the
// misspelled WP slug here. See follow-up task to rename the WP slug and
// flip this constant back to the clean spelling.
const WP_SLUG = 'natrual-disaster-cleanup';

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf(WP_SLUG);
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Natural Disaster Cleanup | Storm Debris Removal & Hurricane Cleanup | Tenth Rock",
    fallbackDescription: "Storm debris removal, hurricane debris cleanup, and rapid response debris removal. Emergency dumpster rental and emergency roll-off rental for multi-site recovery support and post-storm waste management.",
  });
}

export default async function NaturalDisasterCleanupPage() {
  const data = await fetchServiceWithAcf(WP_SLUG);
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
