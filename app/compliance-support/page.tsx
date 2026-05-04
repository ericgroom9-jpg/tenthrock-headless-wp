import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function ComplianceSupportPage() {
  return (
    <ServiceTemplate
      serviceName="Documentation Support"
      serviceDescription="Get clear confirmation for every service we perform. Detailed job records, material processing proof, and before and after photos are provided with every finished project."
      heroImage="/images/stock/service-emergency.jpg"
    />
  );
}

export const metadata = {
  title: "Documentation Support | Tenth Rock",
  description: "Comprehensive job documentation for every service we perform.",
};
