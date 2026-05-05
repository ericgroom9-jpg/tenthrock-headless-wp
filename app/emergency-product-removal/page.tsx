import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Product & Perishable Removal | Spoiled Product Disposal | Tenth Rock",
  description: "Perishable bulk pickup and spoiled product disposal for cold storage failure and refrigeration failure events. Damaged inventory disposal and after-hours waste removal at commercial locations across 48 states.",
};

export default async function EmergencyProductRemovalPage() {
  const data = await fetchServiceWithAcf('emergency-product-removal');
  if (!data) return null;
  return <ServiceTemplate {...data} />;
}
