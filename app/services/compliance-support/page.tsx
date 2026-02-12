import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function ComplianceSupportPage() {
  return (
    <ServiceTemplate
      serviceName="Compliance Support"
      serviceDescription="Stay ahead of local and federal waste regulations with our compliance-first approach. We handle documentation, audits, and regulatory requirements so you don't have to."
      heroImage="/images/stock/service-emergency.jpg"
    />
  );
}

export const metadata = {
  title: "Compliance Support | Tenth Rock",
  description: "Stay ahead of local and federal waste regulations with our compliance-first approach.",
};
