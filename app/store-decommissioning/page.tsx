import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StoreDecommissioning | Tenth Rock",
};

export default async function StoreDecommissioningPage() {
  const data = await fetchServiceWithAcf('store-decommissioning');
  if (!data) return null;
  return <ServiceTemplate {...data} />;
}
