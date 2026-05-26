import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('pressure-washing');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Commercial Pressure Washing | Tenth Rock",
    fallbackDescription: "Professional pressure washing for commercial properties. Storefronts, compactor pads, loading docks, and post-waste cleanup across 48 states. Call 727.510.5454.",
  });
}

export default async function PressureWashingPage() {
  const data = await fetchServiceWithAcf('pressure-washing');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
