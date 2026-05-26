import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('centralized-programs');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "CentralizedPrograms | Tenth Rock",
    fallbackDescription: "",
  });
}

export default async function CentralizedProgramsPage() {
  const data = await fetchServiceWithAcf('centralized-programs');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
