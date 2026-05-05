import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Dumpster Rental | Tenth Rock",
  description: "Roll-off dumpster rental with flat-rate pricing. 10 to 40-yard sizes, same-day delivery, no hidden fees. Nationwide service. Call 727.510.5454.",
};

export default async function DumpsterRentalPage() {
  const data = await fetchServiceWithAcf('dumpster-rental');
  if (!data) return null;
  return <ServiceTemplate {...data} />;
}
