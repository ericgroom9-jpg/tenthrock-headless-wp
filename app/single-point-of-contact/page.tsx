import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Single Point of Contact | Tenth Rock",
  description: "One dedicated account manager for all your locations, simplifying communication and ensuring consistent service quality.",
};

export default async function SinglePointOfContactPage() {
  const data = await fetchServiceWithAcf('single-point-of-contact');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
