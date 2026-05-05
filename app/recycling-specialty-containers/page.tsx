import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Recycling Dumpsters | Commercial Recycling Dumpster Rental | Tenth Rock",
  description: "Commercial recycling dumpster and metal recycling container rental for landfill diversion and source-separated recycling. Cardboard and baler overflow support, specialty waste containers, and C&D solutions across 48 states.",
};

export default async function RecyclingSpecialtyContainersPage() {
  const data = await fetchServiceWithAcf('recycling-specialty-containers');
  if (!data) return null;
  return <ServiceTemplate {...data} />;
}
