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
      aboutDescription="When storms hit, local providers sell out fast. Tenth Rock activates its nationwide network to source emergency dumpster rental and emergency roll-off rental from out-of-state markets when local inventory is unavailable. We coordinate rapid response debris removal, emergency open-top dumpsters, and hauling logistics across affected regions so your locations can recover without waiting for containers that aren't coming."
    />
  );
}

export const metadata = {
  title: "Natural Disaster Mobilization | Storm Debris Removal & Hurricane Cleanup | Tenth Rock",
  description: "Storm debris removal, hurricane debris cleanup, and rapid response debris removal. Emergency dumpster rental and emergency roll-off rental for multi-site recovery support and post-storm waste management.",
};
