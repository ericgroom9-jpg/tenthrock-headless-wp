import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('hauling-services');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Hauling Services | Tenth Rock",
    fallbackDescription: "Commercial hauling services including compactor transport, bulk hauling, and specialty waste logistics. Nationwide coverage across 48 states. Call 727.510.5454.",
  });
}

export default async function HaulingServicesPage() {
  const data = await fetchServiceWithAcf('hauling-services');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
