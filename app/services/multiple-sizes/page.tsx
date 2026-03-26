import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function MultipleSizesPage() {
  return (
    <ServiceTemplate
      serviceName="Multiple Sizes"
      serviceDescription="Access a full range of commercial-grade open-top roll-off containers tailored to your specific project scope. Specialized teams ensure the right equipment is deployed for temporary construction, cleanouts, and high-volume debris."
      heroImage="/images/stock/service-dumpster.jpg"
      aboutBullets={[
        "20 yard dumpster rental for tight-space cleanouts and small projects",
        "30 yard roll-off and 30 yard open-top for mid-range commercial projects",
        "40 yard roll-off for large-scale construction debris and demolition",
        "Right-sized containers matched to your specific project scope",
      ]}
      aboutDescription="Tenth Rock differentiates from permanent front-load services by offering flexible, large-scale hauling solutions. We manage the logistics of selecting and scheduling container sizes to optimize site space and project budgets."
    />
  );
}

export const metadata = {
  title: "Multiple Dumpster Sizes | 20, 30 & 40 Yard Roll-Off Dumpster Rental | Tenth Rock",
  description: "20 yard dumpster rental, 30 yard roll-off, 30 yard dumpster rental, and 40 yard roll-off containers for commercial projects. Open-top dumpsters matched to your job scope.",
};
