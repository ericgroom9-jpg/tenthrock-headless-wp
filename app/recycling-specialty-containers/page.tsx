import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('recycling-specialty-containers');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Recycling Dumpsters | Commercial Recycling Dumpster Rental | Tenth Rock",
    fallbackDescription: "Commercial recycling dumpster and metal recycling container rental for landfill diversion and source-separated recycling. Cardboard and baler overflow support, specialty waste containers, and C&D solutions across 48 states.",
  });
}

export default async function RecyclingSpecialtyContainersPage() {
  const data = await fetchServiceWithAcf('recycling-specialty-containers');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
