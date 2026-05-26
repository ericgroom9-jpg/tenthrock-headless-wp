import { notFound } from 'next/navigation';
import { fetchIndustryWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import IndustryTemplate from "@/components/industries/IndustryTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchIndustryWithAcf('educational');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Educational Waste Management | Universities & Schools | Tenth Rock",
    fallbackDescription: "Specialized waste management solutions for universities, colleges, and K-12 schools. Sustainable campus waste programs, recycling initiatives, and event cleanup services.",
  });
}

export default async function EducationalPage() {
  const data = await fetchIndustryWithAcf('educational');
  if (!data) notFound();
  return <IndustryTemplate {...data} />;
}
