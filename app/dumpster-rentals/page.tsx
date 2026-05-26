import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('dumpster-rentals');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Dumpster Rentals | Tenth Rock",
    fallbackDescription: "Flexible dumpster rental solutions for construction, renovation, and cleanouts. Quick delivery, multiple sizes, and competitive pricing.",
  });
}

export default async function DumpsterRentalsPage() {
  const data = await fetchServiceWithAcf('dumpster-rentals');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
