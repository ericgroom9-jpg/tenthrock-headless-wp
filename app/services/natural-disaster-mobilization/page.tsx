import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function NaturalDisasterMobilizationPage() {
  return (
    <ServiceTemplate
      serviceName="Natural Disaster Mobilization"
      serviceDescription="Rapidly mobilize multi-site waste recovery following hurricanes, floods, and severe storms. Specialized teams coordinate debris removal and damaged product disposal to restore safety and operations across affected regions."
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
