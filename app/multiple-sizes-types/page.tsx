import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multiple Sizes & Types | Tenth Rock",
  description: "From 2-yard front-load to 40-yard roll-offs, the right container for every job.",
};

export default async function MultipleSizesTypesPage() {
  const data = await fetchServiceWithAcf('multiple-sizes-types');
  if (!data) return null;
  return <ServiceTemplate {...data} />;
}
