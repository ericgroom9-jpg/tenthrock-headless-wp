import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function NaturalDisasterMobilizationPage() {
  return (
    <ServiceTemplate
      serviceName="Natural Disaster Mobilization"
      serviceDescription="Rapidly mobilize multi-site waste recovery following hurricanes, floods, and severe storms. Specialized teams coordinate debris removal and damaged product disposal to restore safety and operations across affected regions."
      heroImage="/images/stock/industry-natural-disasters-storm.jpg"
      aboutBullets={[
        "Storm debris removal and hurricane debris cleanup",
        "Emergency dumpster rental and emergency roll-off rental",
        "Emergency open-top dumpsters deployed across affected regions",
        "Multi-site recovery support and post-storm waste management",
      ]}
      aboutDescription="Tenth Rock serves as the central command for insurance-driven recovery and corporate business continuity. We deploy temporary containers and hauling crews to storm-prone corridors, ensuring seamless coordination between recovery teams and regional facilities managers."
    />
  );
}

export const metadata = {
  title: "Natural Disaster Mobilization | Storm Debris Removal & Hurricane Cleanup | Tenth Rock",
  description: "Storm debris removal, hurricane debris cleanup, and rapid response debris removal. Emergency dumpster rental and emergency roll-off rental for multi-site recovery support and post-storm waste management.",
};
