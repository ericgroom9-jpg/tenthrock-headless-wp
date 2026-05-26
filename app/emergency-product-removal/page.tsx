import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('emergency-product-removal');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Emergency Product & Perishable Removal | Spoiled Product Disposal | Tenth Rock",
    fallbackDescription: "Perishable bulk pickup and spoiled product disposal for cold storage failure and refrigeration failure events. Damaged inventory disposal and after-hours waste removal at commercial locations across 48 states.",
  });
}

export default async function EmergencyProductRemovalPage() {
  const data = await fetchServiceWithAcf('emergency-product-removal');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
