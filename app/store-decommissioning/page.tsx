import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('store-decommissioning');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "StoreDecommissioning | Tenth Rock",
    fallbackDescription: "",
  });
}

export default async function StoreDecommissioningPage() {
  const data = await fetchServiceWithAcf('store-decommissioning');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
