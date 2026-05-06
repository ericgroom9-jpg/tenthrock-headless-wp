import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "EnvironmentalMaintenance | Tenth Rock",
};

export default async function EnvironmentalMaintenancePage() {
  const data = await fetchServiceWithAcf('environmental-maintenance');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
