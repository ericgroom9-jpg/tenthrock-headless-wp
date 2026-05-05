import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ongoing Advisory & Program Implementation | Waste Management Oversight | Tenth Rock",
  description: "Waste workflow optimization, multi-site waste execution strategy, and ongoing waste program optimization. Waste management oversight services and operational waste risk mitigation for enterprise operators.",
};

export default async function OngoingAdvisoryPage() {
  const data = await fetchServiceWithAcf('ongoing-advisory');
  if (!data) return null;
  return <ServiceTemplate {...data} />;
}
