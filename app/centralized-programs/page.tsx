import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CentralizedPrograms | Tenth Rock",
};

export default async function CentralizedProgramsPage() {
  const data = await fetchServiceWithAcf('centralized-programs');
  if (!data) return null;
  return <ServiceTemplate {...data} />;
}
