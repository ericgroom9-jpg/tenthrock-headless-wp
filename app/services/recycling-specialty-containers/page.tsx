import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function RecyclingSpecialtyContainersPage() {
  return (
    <ServiceTemplate
      serviceName="Recycling Dumpsters"
      serviceDescription="Deploy material-specific containers for cardboard, metal, and construction debris. Our recycling and specialty dumpster rentals support high-volume operations, baler overflow, and landfill diversion, without disrupting your workflow."
      heroImage="/images/stock/service-centralized-program.jpg"
      aboutBullets={[
        "Access dedicated recycling containers for cardboard, metal, and source-separated materials.",
        "Supplement existing systems with additional capacity for baler overflow and high-volume periods.",
        "Utilize specialty containers for construction debris (C&D) and industrial waste streams.",
        "Support sustainability initiatives with structured recycling programs and material tracking.",
      ]}
      aboutDescription="Tenth Rock delivers recycling dumpsters and specialty container solutions designed for scale. From cardboard and metal to C&D, we provide the right containers and coordination to reduce landfill use and keep operations efficient."
    />
  );
}

export const metadata = {
  title: "Recycling Dumpsters | Commercial Recycling Dumpster Rental | Tenth Rock",
  description: "Commercial recycling dumpster and metal recycling container rental for landfill diversion and source-separated recycling. Cardboard and baler overflow support, specialty waste containers, and C&D solutions across 48 states.",
};
