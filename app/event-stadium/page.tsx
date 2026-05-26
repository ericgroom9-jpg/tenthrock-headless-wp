import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('event-stadium');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "EventStadium | Tenth Rock",
    fallbackDescription: "",
  });
}

export default async function EventStadiumPage() {
  const data = await fetchServiceWithAcf('event-stadium');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
