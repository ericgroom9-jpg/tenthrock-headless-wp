import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Emergency Waste Removal | Same-Day Junk Removal | Tenth Rock",
  description: "Same-day emergency waste management for spoiled product disposal, overflowing dumpsters, and commercial site cleanouts. After-hours waste removal, damaged inventory disposal, and urgent bulk pickup across 48 states.",
};

export default async function EmergencyWasteRemovalPage() {
  const data = await fetchServiceWithAcf('emergency-waste-removal');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
