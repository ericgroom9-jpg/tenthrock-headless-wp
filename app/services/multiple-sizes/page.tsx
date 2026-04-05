import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function MultipleSizesPage() {
  return (
    <ServiceTemplate
      serviceName="Multiple Sizes"
      serviceDescription="Deploy the right roll-off dumpster for any project. Our open top containers are available in 20, 30, and 40 yard sizes, ensuring the right capacity for efficient, uninterrupted operations."
      heroImage="/images/stock/service-dumpster.jpg"
      aboutBullets={[
        "Access 20, 30, and 40 yard roll-off dumpsters to match the scale and demands of your project.",
        "Use 20 yard containers for tighter spaces and heavier, denser materials.",
        "Deploy 30 yard dumpsters for standard commercial projects and ongoing site needs.",
        "Leverage 40 yard containers for high-volume debris and large-scale operations.",
      ]}
      aboutDescription="Tenth Rock offers a 20 yard dumpster rental, 30 yard roll off, and 40 yard roll off units. We ensure you have a 30 yard open top or 20 yard rolloff for emergency junk removal and same-day junk removal."
    />
  );
}

export const metadata = {
  title: "Multiple Dumpster Sizes | 20, 30 & 40 Yard Roll-Off Dumpster Rental | Tenth Rock",
  description: "20 yard dumpster rental, 30 yard roll-off, 30 yard dumpster rental, and 40 yard roll-off containers for commercial projects. Open-top dumpsters matched to your job scope.",
};
