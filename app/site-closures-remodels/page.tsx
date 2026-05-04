import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site Closures & Remodels | Site Decommissioning & Store Closings | Tenth Rock",
  description: "Site decommissioning, post-construction cleanout, store closings, and retail remodel waste management. Portfolio-wide site turnover, commercial closeout, and D&D across 48 states.",
};

export default async function SiteClosuresRemodelsPage() {
  const data = await fetchServiceWithAcf('site-closures-remodels');
  if (!data) return null;
  return <ServiceTemplate {...data} />;
}
