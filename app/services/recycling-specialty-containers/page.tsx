import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function RecyclingSpecialtyContainersPage() {
  return (
    <ServiceTemplate
      serviceName="Recycling Dumpsters"
      serviceDescription="Deploy material-specific containers for cardboard, metal, and construction debris. Our recycling and specialty dumpster rentals support high-volume operations, baler overflow, and landfill diversion, without disrupting your workflow."
      heroImage="/images/stock/recycling-2.png"
      aboutBullets={[
        "Access dedicated recycling containers for cardboard, metal, and source-separated materials.",
        "Supplement existing systems with additional capacity for baler overflow and high-volume periods.",
        "Utilize specialty containers for construction debris (C&D) and industrial waste streams.",
        "Support sustainability initiatives with structured recycling programs and material tracking.",
      ]}
      aboutDescription="Tenth Rock delivers recycling dumpsters and specialty container solutions designed for scale. From cardboard and metal to C&D, we provide the right containers and coordination to reduce landfill use and keep operations efficient."
      paragraphSection1={{
        badge: "Why It Matters",
        heading: "Built for the Demands of Modern Business",
        body: "Managing waste across hundreds of locations is a competitive advantage, not a chore. Tenth Rock replaces fragmented vendors with a single, accountable partner to save your team time and budget.",
        image: "/images/stock/recycling-1.png",
        imageAlt: "Green commercial recycling dumpster beside baled cardboard at a recovery facility",
        bulletPoints: [
          "Reduce waste management overhead by up to 30%",
          "Eliminate multi-vendor coordination headaches",
          "Real-time job status and documentation",
          "Scalable solutions that grow with your business",
        ],
      }}
      paragraphSection2={{
        badge: "Our Commitment",
        heading: "Sustainability Without Compromise",
        body: "Environmental responsibility and operational efficiency go hand in hand. Our approach supports waste diversion efforts without disrupting your service or adding unnecessary complexity. We work with recovery and processing facilities across the country to help reduce landfill use while maintaining the reliable operations your business depends on.",
        image: "/images/stock/recycling-4.jpg",
        imageAlt: "Sorted recyclable materials moving along a conveyor inside a processing facility",
        bulletPoints: [
          "Practical waste diversion and recovery",
          "Clear insights into site activity and service history",
          "Direct access to a nationwide network of facilities",
          "Reporting that supports your sustainability goals",
        ],
      }}
      statsImage="/images/stock/recycling-3.jpg"
      statsImageAlt="Pair of green commercial recycling containers staged behind an industrial building"
      ctaImage="/images/stock/recycling-5.jpg"
      ctaImageAlt="Person depositing a glass bottle into a green source-separated recycling container"
    />
  );
}

export const metadata = {
  title: "Recycling Dumpsters | Commercial Recycling Dumpster Rental | Tenth Rock",
  description: "Commercial recycling dumpster and metal recycling container rental for landfill diversion and source-separated recycling. Cardboard and baler overflow support, specialty waste containers, and C&D solutions across 48 states.",
};
