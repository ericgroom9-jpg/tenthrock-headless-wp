import { notFound } from 'next/navigation';
import { fetchServiceWithAcf } from '@/lib/wordpress';
import { buildPageMetadata } from "@/lib/seo-metadata";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchServiceWithAcf('waste-program-assessments');
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Waste Program Assessments & Roadmaps | Portfolio-Wide Waste Strategy | Tenth Rock",
    fallbackDescription: "Portfolio-wide waste strategy and operational waste audit with cost-control waste optimization. Multi-site waste roadmap and portfolio-wide recommendations for multi-location operators.",
  });
}

export default async function WasteProgramAssessmentsPage() {
  const data = await fetchServiceWithAcf('waste-program-assessments');
  if (!data) notFound();
  return <ServiceTemplate {...data} />;
}
