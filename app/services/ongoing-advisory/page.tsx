import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function OngoingAdvisoryPage() {
  return (
    <ServiceTemplate
      serviceName="Ongoing Advisory & Program Implementation"
      serviceDescription="Implement a multi-site waste execution strategy through waste management oversight services. Specialized teams provide ongoing waste program optimization to ensure seamless performance across your entire enterprise."
      heroImage="/images/stock/service-commercial.jpg"
      aboutBullets={[
        "Retained advisory support embedded in your daily operations",
        "Waste workflow optimization and multi-site execution strategy",
        "Waste management oversight services for vendor accountability",
        "Operational risk mitigation and ongoing program improvement",
      ]}
      aboutDescription="Tenth Rock serves as a strategic partner for private equity-backed brands and franchise networks. We deliver waste workflow optimization and operational waste risk mitigation to bridge the gap between strategy and site-level results."
    />
  );
}

export const metadata = {
  title: "Ongoing Advisory & Program Implementation | Waste Management Oversight | Tenth Rock",
  description: "Waste workflow optimization, multi-site waste execution strategy, and ongoing waste program optimization. Waste management oversight services and operational waste risk mitigation for enterprise operators.",
};
