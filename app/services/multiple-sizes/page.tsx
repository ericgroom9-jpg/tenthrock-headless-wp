import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function MultipleSizesPage() {
  return (
    <ServiceTemplate
      serviceName="Multiple Sizes"
      serviceDescription="Deploy the right emergency roll-off service for any project. Our open top dumpsters provide the specific capacity needed for commercial site cleanout and emergency waste management."
      heroImage="/images/stock/service-dumpster.jpg"
      aboutBullets={[
        "Deploy 10, 20, 30, and 40-yard open-top containers for varied debris volumes.",
        "Secure specialized equipment for heavy materials like concrete, dirt, and roofing.",
        "Utilize temporary roll-off services to prevent overflow of permanent waste systems.",
        "Access nationwide inventory for consistent service across all regional project sites.",
      ]}
      aboutDescription="Tenth Rock offers a 20 yard dumpster rental, 30 yard roll off, and 40 yard roll off units. We ensure you have a 30 yard open top or 20 yard rolloff for emergency junk removal and same-day junk removal."
    />
  );
}

export const metadata = {
  title: "Multiple Dumpster Sizes | 20, 30 & 40 Yard Roll-Off Dumpster Rental | Tenth Rock",
  description: "20 yard dumpster rental, 30 yard roll-off, 30 yard dumpster rental, and 40 yard roll-off containers for commercial projects. Open-top dumpsters matched to your job scope.",
};
