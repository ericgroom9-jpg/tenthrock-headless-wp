import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('dumpster-rental');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Dumpster Rental | Tenth Rock",
    fallbackDescription: "Roll-off dumpster rental with flat-rate pricing. 10 to 40-yard sizes, same-day delivery, no hidden fees. Nationwide service. Call 727.510.5454.",
  });
}

export default async function DumpsterRentalPage() {
  const data = await fetchServiceWithAcf('dumpster-rental');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
