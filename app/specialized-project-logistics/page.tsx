import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Specialized Project Logistics | Site Decommissioning & Event Waste | Tenth Rock",
  description: "End-to-end waste coordination for site decommissioning, post-construction cleanout, event waste logistics, and storm debris removal. Portfolio-wide site turnover and commercial cleanout across 48 states.",
};

export default async function SpecializedProjectLogisticsPage() {
  const data = await fetchServiceWithAcf('specialized-project-logistics');
  if (!data) return null;
  return <ServiceTemplate {...data} />;
}
