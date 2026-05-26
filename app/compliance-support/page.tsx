import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('compliance-support');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Documentation Support | Tenth Rock",
    fallbackDescription: "Comprehensive job documentation for every service we perform.",
  });
}

export default async function ComplianceSupportPage() {
  const data = await fetchServiceWithAcf('compliance-support');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
