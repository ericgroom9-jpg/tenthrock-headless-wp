import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Standards & Vendor Training | Waste Management SOP Development | Tenth Rock",
  description: "Waste management SOP development and multi-site vendor training framework. Vendor performance protocols and site-level execution standards for national retail brands and franchise systems.",
};

export default async function StandardsSopsTrainingPage() {
  const data = await fetchServiceWithAcf('standards-sops-training');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
