import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function MultipleSizesPage() {
  return (
    <ServiceTemplate
      serviceName="Multiple Sizes"
      serviceDescription="Deploy the right emergency roll-off service for any project. Our open top dumpsters provide the specific capacity needed for commercial site cleanout and emergency waste management."
      heroImage="/images/stock/service-dumpster.jpg"
      aboutBullets={[
        "Access 30 yard dumpster rental for bulky commercial debris removal.",
        "Secure a 40 yard roll off for large-scale emergency waste management.",
        "Utilize 20 yard dumpster rental for dense site transitions.",
        "Receive same day dumpster rental to resolve waste overflow instantly.",
      ]}
      aboutDescription="Tenth Rock offers a 20 yard dumpster rental, 30 yard roll off, and 40 yard roll off units. We ensure you have a 30 yard open top or 20 yard rolloff for emergency junk removal and same-day junk removal."
    />
  );
}

export const metadata = {
  title: "Multiple Dumpster Sizes | 20, 30 & 40 Yard Roll-Off Dumpster Rental | Tenth Rock",
  description: "20 yard dumpster rental, 30 yard roll-off, 30 yard dumpster rental, and 40 yard roll-off containers for commercial projects. Open-top dumpsters matched to your job scope.",
};
