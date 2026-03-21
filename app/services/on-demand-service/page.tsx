import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function OnDemandServicePage() {
  return (
    <ServiceTemplate
      serviceName="On-Demand Service"
      serviceDescription="Short-term roll-off and open-top container rentals deployed quickly for commercial projects, cleanouts, and overflow needs. Supports both emergency and planned services with no long-term commitments required."
      heroImage="/images/stock/service-dumpster-rental.jpg"
    />
  );
}

export const metadata = {
  title: "On-Demand Container Service | Tenth Rock",
  description: "Short-term roll-off and open-top container rentals deployed fast for commercial projects, cleanouts, and overflow. No long-term commitments.",
};
