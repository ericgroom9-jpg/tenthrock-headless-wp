import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function SiteStabilizationPage() {
  return (
    <ServiceTemplate
      serviceName="Temporary Capacity & Site Stabilization"
      serviceDescription="Deployment of temporary dumpsters, hauling crews, or surge capacity when sites exceed normal waste limits. We handle compactor failures, overflow situations, peak seasons, and vendor service gaps to stabilize operations fast."
      heroImage="/images/stock/service-emergency-overflow.jpg"
    />
  );
}

export const metadata = {
  title: "Temporary Capacity & Site Stabilization | Tenth Rock",
  description: "Fast deployment of temporary dumpsters and hauling crews for compactor failures, overflow, and peak season surge at commercial sites across 48 states.",
};
