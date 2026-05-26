import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('flexible-terms');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Flexible Terms | Tenth Rock",
    fallbackDescription: "Short-term rentals, long-term contracts, or project-based agreements that fit your budget.",
  });
}

export default async function FlexibleTermsPage() {
  const data = await fetchServiceWithAcf('flexible-terms');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
