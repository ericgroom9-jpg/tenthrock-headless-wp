import { notFound } from 'next/navigation';
import { fetchIndustryWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import IndustryTemplate from "@/components/industries/IndustryTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchIndustryWithAcf('faith-based');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Faith-Based Waste Management | Churches & Religious Organizations | Tenth Rock",
    fallbackDescription: "Respectful and reliable waste management services for churches, temples, mosques, and religious organizations. Supporting your community with sustainable solutions.",
  });
}

export default async function FaithBasedPage() {
  const data = await fetchIndustryWithAcf('faith-based');
  if (!data) notFound();
  return <IndustryTemplate {...data} />;
}
