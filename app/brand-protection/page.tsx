import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Protection | Tenth Rock",
  description: "Protect your brand reputation with discreet, rapid waste removal before it becomes visible.",
};

export default async function BrandProtectionPage() {
  const data = await fetchServiceWithAcf('brand-protection');
  if (!data) return null;
  return <ServiceTemplate {...data} />;
}
