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
      aboutDescription="Audits and SOPs only work if someone enforces them. Tenth Rock provides retained advisory support that stays embedded in your operations long after the initial assessment. We manage waste workflow optimization, monitor vendor performance against established standards, and drive ongoing program improvement across your portfolio. This is not a report that sits on a shelf. It is hands-on waste management oversight that produces sustained results."
    />
  );
}

export const metadata = {
  title: "Ongoing Advisory & Program Implementation | Waste Management Oversight | Tenth Rock",
  description: "Waste workflow optimization, multi-site waste execution strategy, and ongoing waste program optimization. Waste management oversight services and operational waste risk mitigation for enterprise operators.",
};
