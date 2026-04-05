import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function RecyclingSpecialtyContainersPage() {
  return (
    <ServiceTemplate
      serviceName="Recycling Dumpsters"
      serviceDescription="Deploy material-specific containers for cardboard, metal, and construction debris. Our recycling and specialty dumpster rentals support high-volume operations, baler overflow, and landfill diversion, without disrupting your workflow."
      heroImage="/images/stock/service-centralized-program.jpg"
      aboutBullets={[
        "Access commercial recycling receptacle units for metal and cardboard.",
        "Secure temporary recycling capacity for emergency junk removal.",
        "Utilize emergency roll-off service for C&D and industrial materials.",
        "Deploy specialty waste containers for landfill diversion.",
      ]}
      aboutDescription="Tenth Rock delivers same-day junk removal to support landfill diversion and sustainability. We offer source-separated recycling for C&D (Construction Debris) and metal recycling container rental for an efficient circular economy."
    />
  );
}

export const metadata = {
  title: "Recycling Dumpsters | Commercial Recycling Dumpster Rental | Tenth Rock",
  description: "Commercial recycling dumpster and metal recycling container rental for landfill diversion and source-separated recycling. Cardboard and baler overflow support, specialty waste containers, and C&D solutions across 48 states.",
};
