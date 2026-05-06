import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Dumpster Rentals | Same-Day Roll-Off Dumpster Rental | Tenth Rock",
  description: "Same-day dumpster rental with roll-off dumpsters and open-top dumpsters in 20, 30, and 40 yard sizes. Emergency roll-off service and commercial recycling containers across 48 states.",
};

export default async function DumpstersContainersPage() {
  const data = await fetchServiceWithAcf('dumpsters-containers');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
