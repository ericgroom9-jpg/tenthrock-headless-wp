import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('ongoing-advisory');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Ongoing Advisory & Program Implementation | Waste Management Oversight | Tenth Rock",
    fallbackDescription: "Waste workflow optimization, multi-site waste execution strategy, and ongoing waste program optimization. Waste management oversight services and operational waste risk mitigation for enterprise operators.",
  });
}

export default async function OngoingAdvisoryPage() {
  const data = await fetchServiceWithAcf('ongoing-advisory');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
