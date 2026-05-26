import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('spend-optimization');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Spend Optimization | Tenth Rock",
    fallbackDescription: "Consolidate vendors and negotiate better rates to reduce your total waste spend.",
  });
}

export default async function SpendOptimizationPage() {
  const data = await fetchServiceWithAcf('spend-optimization');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
