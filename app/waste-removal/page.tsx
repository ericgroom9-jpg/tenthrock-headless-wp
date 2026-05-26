import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('waste-removal');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Waste Removal Services | Tenth Rock",
    fallbackDescription: "Commercial waste removal with 24/7 dispatch. Emergency disposal, bulk cleanouts, and illegal dumping cleanup across 48 states. Call 727.510.5454.",
  });
}

export default async function WasteRemovalPage() {
  const data = await fetchServiceWithAcf('waste-removal');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
