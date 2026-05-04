import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hauling Services | Tenth Rock",
  description: "Commercial hauling services including compactor transport, bulk hauling, and specialty waste logistics. Nationwide coverage across 48 states. Call 727.510.5454.",
};

export default async function HaulingServicesPage() {
  const data = await fetchServiceWithAcf('hauling-services');
  if (!data) return null;
  return <ServiceTemplate {...data} />;
}
