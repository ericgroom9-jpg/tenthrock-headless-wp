import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Waste Removal Services | Tenth Rock",
  description: "Commercial waste removal with 24/7 dispatch. Emergency disposal, bulk cleanouts, and illegal dumping cleanup across 48 states. Call 727.510.5454.",
};

export default async function WasteRemovalPage() {
  const data = await fetchServiceWithAcf('waste-removal');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
