import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function ComplianceSupportPage() {
  return (
    <ServiceTemplate
      serviceName="Documentation Support"
      serviceDescription="Comprehensive job documentation for every service we perform. Waste manifests, certificates of destruction, and photo records delivered with every completed project."
      heroImage="/images/stock/service-emergency.jpg"
    />
  );
}

export const metadata = {
  title: "Documentation Support | Tenth Rock",
  description: "Comprehensive job documentation for every service we perform.",
};
