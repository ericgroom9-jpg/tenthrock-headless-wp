import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('unplanned-cleanouts');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Unplanned Cleanouts & Debris Removal | Commercial Site Cleanout | Tenth Rock",
    fallbackDescription: "Commercial site cleanout and bulk debris removal for foreclosure cleanouts, code violation cleanup support, and emergency site cleanout situations. Large-scale waste clearing across 48 states.",
  });
}

export default async function UnplannedCleanutsPage() {
  const data = await fetchServiceWithAcf('unplanned-cleanouts');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
