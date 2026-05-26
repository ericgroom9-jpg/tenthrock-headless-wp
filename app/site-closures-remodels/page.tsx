import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('site-closures-remodels');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Site Closures & Remodels | Site Decommissioning & Store Closings | Tenth Rock",
    fallbackDescription: "Site decommissioning, post-construction cleanout, store closings, and retail remodel waste management. Portfolio-wide site turnover, commercial closeout, and D&D across 48 states.",
  });
}

export default async function SiteClosuresRemodelsPage() {
  const data = await fetchServiceWithAcf('site-closures-remodels');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
