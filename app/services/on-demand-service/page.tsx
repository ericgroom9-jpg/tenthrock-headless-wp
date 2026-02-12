import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function OnDemandServicePage() {
  return (
    <ServiceTemplate
      serviceName="On-Demand Service"
      serviceDescription="Same-day or next-day delivery for urgent container needs at any location. No long-term commitments required—just reliable, fast service when you need it."
      heroImage="/images/stock/service-dumpster-rental.jpg"
    />
  );
}

export const metadata = {
  title: "On-Demand Service | Tenth Rock",
  description: "Same-day or next-day delivery for urgent container needs at any location.",
};
