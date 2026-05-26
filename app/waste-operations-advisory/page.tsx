import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('waste-operations-advisory');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Waste Advisory | Tenth Rock",
    fallbackDescription: "Retained waste management advisory for multi-site operators. Hands-on program rollout, vendor training and oversight, performance optimization, and portfolio-wide execution management across 48 states.",
  });
}

export default async function WasteOperationsAdvisoryPage() {
  const data = await fetchServiceWithAcf('waste-operations-advisory');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
