import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function NaturalDisasterMobilizationPage() {
  return (
    <ServiceTemplate
      serviceName="Natural Disaster Mobilization"
      serviceDescription="Rapidly deploy emergency waste management and multi-site recovery support. Specialized teams coordinate emergency debris removal and rapid response debris removal across affected regions to restore business continuity."
      heroImage="/images/stock/industry-natural-disasters-storm.jpg"
      aboutBullets={[
        "Deploy emergency roll-off containers and high-capacity hauling for storm debris.",
        "Coordinate bulk disposal of damaged inventory and temperature-compromised products.",
        "Secure priority equipment staging for multi-location retailers in high-impact zones.",
        "Provide consolidated documentation and reporting for insurance and FEMA claims.",
      ]}
      aboutDescription="Tenth Rock serves as the central command for insurance-driven recovery and corporate business continuity. We deploy temporary containers and hauling crews to storm-prone corridors, ensuring seamless coordination between recovery teams and regional facilities managers."
    />
  );
}

export const metadata = {
  title: "Natural Disaster Mobilization | Storm Debris Removal & Hurricane Cleanup | Tenth Rock",
  description: "Storm debris removal, hurricane debris cleanup, and rapid response debris removal. Emergency dumpster rental and emergency roll-off rental for multi-site recovery support and post-storm waste management.",
};
