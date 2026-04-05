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
      aboutDescription="Tenth Rock offers a full range of roll-off and open top dumpster sizes, with guidance on the right fit for each job. From compact placements to high-capacity containers, we ensure your site has the right equipment to stay efficient and on schedule."
    />
  );
}

export const metadata = {
  title: "Multiple Dumpster Sizes | 20, 30 & 40 Yard Roll-Off Dumpster Rental | Tenth Rock",
  description: "20 yard dumpster rental, 30 yard roll-off, 30 yard dumpster rental, and 40 yard roll-off containers for commercial projects. Open-top dumpsters matched to your job scope.",
};
