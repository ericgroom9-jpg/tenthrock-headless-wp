import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unplanned Cleanouts & Debris Removal | Commercial Site Cleanout | Tenth Rock",
  description: "Commercial site cleanout and bulk debris removal for foreclosure cleanouts, code violation cleanup support, and emergency site cleanout situations. Large-scale waste clearing across 48 states.",
};

export default async function UnplannedCleanutsPage() {
  const data = await fetchServiceWithAcf('unplanned-cleanouts');
  if (!data) return null;
  return <ServiceTemplate {...data} />;
}
