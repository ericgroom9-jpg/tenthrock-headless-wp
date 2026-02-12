import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function SiteStabilizationPage() {
  return (
    <ServiceTemplate
      serviceName="Site Stabilization"
      serviceDescription="Fast deployment teams to stabilize overflowing sites and restore normal operations within hours. Our emergency crews are on call 24/7 to handle any overflow situation."
      heroImage="/images/stock/service-emergency-overflow.jpg"
    />
  );
}

export const metadata = {
  title: "Site Stabilization | Tenth Rock",
  description: "Fast deployment teams to stabilize overflowing sites and restore normal operations within hours.",
};
