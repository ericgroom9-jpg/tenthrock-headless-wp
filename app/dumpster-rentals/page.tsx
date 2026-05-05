import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dumpster Rentals | Tenth Rock",
  description: "Flexible dumpster rental solutions for construction, renovation, and cleanouts. Quick delivery, multiple sizes, and competitive pricing.",
};

export default async function DumpsterRentalsPage() {
  const data = await fetchServiceWithAcf('dumpster-rentals');
  if (!data) return null;
  return <ServiceTemplate {...data} />;
}
