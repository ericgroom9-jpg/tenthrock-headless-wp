import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function RecyclingSpecialtyContainersPage() {
  return (
    <ServiceTemplate
      serviceName="Recycling & Specialty Containers"
      serviceDescription="Access commercial-grade recycling containers for cardboard, metals, and industrial materials. Specialized teams coordinate equipment deployment for temporary projects, facility cleanouts, and high-volume capacity needs."
      heroImage="/images/stock/service-centralized-program.jpg"
      aboutBullets={[
        "Commercial recycling dumpster for cardboard, plastics, and mixed recyclables",
        "Metal recycling container rental for scrap and ferrous metals",
        "Cardboard and baler overflow support during peak volume",
        "C&D (Construction Debris) containers and specialty waste containers",
      ]}
      aboutDescription="Tenth Rock provides dedicated recycling logistics that differ from standard residential programs. We manage the sourcing and hauling of specialty open-top containers to ensure your commercial site maintains compliance and operational efficiency."
    />
  );
}

export const metadata = {
  title: "Recycling & Specialty Containers | Commercial Recycling Dumpster Rental | Tenth Rock",
  description: "Commercial recycling dumpster and metal recycling container rental for landfill diversion and source-separated recycling. Cardboard and baler overflow support, specialty waste containers, and C&D solutions across 48 states.",
};
