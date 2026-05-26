import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('specialized-project-logistics');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Specialized Project Logistics | Site Decommissioning & Event Waste | Tenth Rock",
    fallbackDescription: "End-to-end waste coordination for site decommissioning, post-construction cleanout, event waste logistics, and storm debris removal. Portfolio-wide site turnover and commercial cleanout across 48 states.",
  });
}

export default async function SpecializedProjectLogisticsPage() {
  const data = await fetchServiceWithAcf('specialized-project-logistics');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
