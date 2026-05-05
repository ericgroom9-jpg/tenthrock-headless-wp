import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Multiple Dumpster Sizes | 20, 30 & 40 Yard Roll-Off Dumpster Rental | Tenth Rock",
  description: "20 yard dumpster rental, 30 yard roll-off, 30 yard dumpster rental, and 40 yard roll-off containers for commercial projects. Open-top dumpsters matched to your job scope.",
};

export default async function MultipleSizesPage() {
  const data = await fetchServiceWithAcf('multiple-sizes');
  if (!data) return null;
  return <ServiceTemplate {...data} />;
}
