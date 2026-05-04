import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spend Optimization | Tenth Rock",
  description: "Consolidate vendors and negotiate better rates to reduce your total waste spend.",
};

export default async function SpendOptimizationPage() {
  const data = await fetchServiceWithAcf('spend-optimization');
  if (!data) return null;
  return <ServiceTemplate {...data} />;
}
