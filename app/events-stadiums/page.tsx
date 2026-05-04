import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function EventsStadiumsPage() {
  return (
    <ServiceTemplate
      serviceName="Events & Stadiums"
      serviceDescription="Implement high-volume event waste logistics and stadium waste coordination. Specialized teams provide emergency waste management and contingency planning to maintain standards during live, high-visibility events."
      heroImage="/images/stock/service-event-stadium.jpg"
      aboutBullets={[
        "Implement on-site waste systems for high-traffic environments to maintain cleanliness, safety, and flow.",
        "Support multi-day events across stadiums, arenas, and fairgrounds with structured, scalable waste programs.",
        "Manage post-event breakdown with high-volume debris removal and rapid site turnover.",
        "Coordinate waste logistics between back-to-back events to keep operations moving without disruption.",
      ]}
      aboutDescription="Tenth Rock delivers event waste logistics and multi-day operational support. We manage the full lifecycle of waste at large-scale venues, ensuring efficient movement, clean environments, and seamless transitions between events."
    />
  );
}

export const metadata = {
  title: "Events & Stadiums | Event Waste Logistics & Stadium Waste Coordination | Tenth Rock",
  description: "Event waste logistics and stadium waste coordination for multi-day event waste support. Event waste management for stadiums, fairs, festivals, and temporary activations nationwide.",
};
