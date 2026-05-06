import { notFound } from 'next/navigation';
import { fetchIndustryWithAcf } from '@/lib/wordpress';
import IndustryTemplate from "@/components/industries/IndustryTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Hospitality Waste Management | Hotels & Resorts | Tenth Rock",
  description: "Premium waste management services for hotels, resorts, and hospitality venues. Discreet, reliable service that protects your guest experience.",
};

export default async function HospitalityPage() {
  const data = await fetchIndustryWithAcf('hospitality');
  if (!data) notFound();
  return <IndustryTemplate {...data} />;
}
