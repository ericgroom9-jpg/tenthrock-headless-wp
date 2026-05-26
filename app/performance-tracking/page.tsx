import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('performance-tracking');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Service Oversight | Tenth Rock",
    fallbackDescription: "Dedicated account management and vendor coordination to maintain service levels across every site.",
  });
}

export default async function PerformanceTrackingPage() {
  const data = await fetchServiceWithAcf('performance-tracking');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
