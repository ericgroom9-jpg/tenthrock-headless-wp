import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('brand-protection');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Brand Protection | Tenth Rock",
    fallbackDescription: "Protect your brand reputation with discreet, rapid waste removal before it becomes visible.",
  });
}

export default async function BrandProtectionPage() {
  const data = await fetchServiceWithAcf('brand-protection');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
