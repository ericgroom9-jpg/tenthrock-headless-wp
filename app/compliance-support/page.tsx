import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation Support | Tenth Rock",
  description: "Comprehensive job documentation for every service we perform.",
};

export default async function ComplianceSupportPage() {
  const data = await fetchServiceWithAcf('compliance-support');
  if (!data) return null;
  return <ServiceTemplate {...data} />;
}
