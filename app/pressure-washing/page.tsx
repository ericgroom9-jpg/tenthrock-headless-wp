import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Commercial Pressure Washing | Tenth Rock",
  description: "Professional pressure washing for commercial properties. Storefronts, compactor pads, loading docks, and post-waste cleanup across 48 states. Call 727.510.5454.",
};

export default async function PressureWashingPage() {
  const data = await fetchServiceWithAcf('pressure-washing');
  if (!data) return null;
  return <ServiceTemplate {...data} />;
}
