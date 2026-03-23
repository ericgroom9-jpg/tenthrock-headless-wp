import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function RecyclingSpecialtyContainersPage() {
  return (
    <ServiceTemplate
      serviceName="Recycling & Specialty Containers"
      serviceDescription="Commercial recycling dumpster and metal recycling container rental for landfill diversion and source-separated recycling. Cardboard and baler overflow support, specialty waste containers, temporary recycling capacity, and C&D (Construction Debris) solutions for sustainability-focused operations and circular economy goals."
      heroImage="/images/stock/service-centralized-program.jpg"
      aboutBullets={[
        "Commercial recycling dumpster for cardboard, plastics, and mixed recyclables",
        "Metal recycling container rental for scrap and ferrous metals",
        "Cardboard and baler overflow support during peak volume",
        "C&D (Construction Debris) containers and specialty waste containers",
      ]}
      aboutDescription="Landfill diversion starts with the right container in the right place. Tenth Rock provides commercial recycling dumpsters and metal recycling container rentals for source-separated recycling, cardboard and baler overflow support, and specialty waste streams. We also deploy temporary recycling capacity and C&D containers for construction debris when your project generates materials that should not go to landfill."
    />
  );
}

export const metadata = {
  title: "Recycling & Specialty Containers | Commercial Recycling Dumpster Rental | Tenth Rock",
  description: "Commercial recycling dumpster and metal recycling container rental for landfill diversion and source-separated recycling. Cardboard and baler overflow support, specialty waste containers, and C&D solutions across 48 states.",
};
