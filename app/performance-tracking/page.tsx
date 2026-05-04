import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Oversight | Tenth Rock",
  description: "Dedicated account management and vendor coordination to maintain service levels across every site.",
};

export default async function PerformanceTrackingPage() {
  const data = await fetchServiceWithAcf('performance-tracking');
  if (!data) return null;
  return <ServiceTemplate {...data} />;
}
