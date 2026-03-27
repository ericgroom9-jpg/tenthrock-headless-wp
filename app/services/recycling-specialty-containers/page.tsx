import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function RecyclingSpecialtyContainersPage() {
  return (
    <ServiceTemplate
      serviceName="Recycling & Specialty Containers"
      serviceDescription="Access commercial-grade recycling containers for cardboard, metals, and industrial materials. Specialized teams coordinate equipment deployment for temporary projects, facility cleanouts, and high-volume capacity needs."
      heroImage="/images/stock/service-centralized-program.jpg"
      aboutBullets={[
        "Deploy large-scale recycling containers for cardboard and metal scrap.",
        "Secure specialized hauling for industrial materials and warehouse cleanouts.",
        "Access project-based recycling solutions to manage temporary material overflows.",
        "Receive detailed documentation for corporate sustainability and compliance reporting.",
      ]}
      aboutDescription="Tenth Rock provides dedicated recycling logistics that differ from standard residential programs. We manage the sourcing and hauling of specialty open-top containers to ensure your commercial site maintains compliance and operational efficiency."
    />
  );
}

export const metadata = {
  title: "Recycling & Specialty Containers | Commercial Recycling Dumpster Rental | Tenth Rock",
  description: "Commercial recycling dumpster and metal recycling container rental for landfill diversion and source-separated recycling. Cardboard and baler overflow support, specialty waste containers, and C&D solutions across 48 states.",
};
