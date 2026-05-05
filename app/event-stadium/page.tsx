import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "EventStadium | Tenth Rock",
};

export default async function EventStadiumPage() {
  const data = await fetchServiceWithAcf('event-stadium');
  if (!data) return null;
  return <ServiceTemplate {...data} />;
}
