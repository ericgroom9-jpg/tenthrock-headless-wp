import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function FlexibleTermsPage() {
  return (
    <ServiceTemplate
      serviceName="Flexible Terms"
      serviceDescription="Short-term rentals, long-term contracts, or project-based agreements that fit your budget. Transparent pricing with no hidden fees."
      heroImage="/images/stock/service-maintenance.jpg"
    />
  );
}

export const metadata = {
  title: "Flexible Terms | Tenth Rock",
  description: "Short-term rentals, long-term contracts, or project-based agreements that fit your budget.",
};
