import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Flexible Terms | Tenth Rock",
  description: "Short-term rentals, long-term contracts, or project-based agreements that fit your budget.",
};

export default async function FlexibleTermsPage() {
  const data = await fetchServiceWithAcf('flexible-terms');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
