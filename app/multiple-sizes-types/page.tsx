import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('multiple-sizes-types');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Multiple Sizes & Types | Tenth Rock",
    fallbackDescription: "From 2-yard front-load to 40-yard roll-offs, the right container for every job.",
  });
}

export default async function MultipleSizesTypesPage() {
  const data = await fetchServiceWithAcf('multiple-sizes-types');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
