import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('site-stabilization');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Site Stabilization | Compactor Failure Response | Tenth Rock",
    fallbackDescription: "Compactor failure response, overflowing dumpster support, and urgent bulk waste removal for commercial sites. Fast deployment for missed pickups, waste overflow, and broken compactor emergencies across 48 states.",
  });
}

export default async function SiteStabilizationPage() {
  const data = await fetchServiceWithAcf('site-stabilization');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
