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
      aboutDescription="Picking the wrong container size costs you money. Too small and you need a second haul. Too large and you are paying for air. Tenth Rock matches the right roll-off container to your job, from 20 yard dumpster rental for smaller cleanouts to 30 yard roll-off containers for mid-range projects and 40 yard roll-off for large-scale construction debris. All containers are commercial-grade open-top dumpsters built for heavy loads."
    />
  );
}

export const metadata = {
  title: "Multiple Dumpster Sizes | 20, 30 & 40 Yard Roll-Off Dumpster Rental | Tenth Rock",
  description: "20 yard dumpster rental, 30 yard roll-off, 30 yard dumpster rental, and 40 yard roll-off containers for commercial projects. Open-top dumpsters matched to your job scope.",
};
