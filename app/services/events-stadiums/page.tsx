import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function EventsStadiumsPage() {
  return (
    <ServiceTemplate
      serviceName="Events & Stadiums"
      serviceDescription="Implement high-volume event waste logistics and stadium waste coordination. Specialized teams provide emergency waste management and contingency planning to maintain standards during live, high-visibility events."
      heroImage="/images/stock/service-event-stadium.jpg"
      aboutBullets={[
        "Deploy emergency junk removal between back-to-back events.",
        "Secure multi-day event waste support for fairgrounds and arenas.",
        "Access same-day junk removal for post-event breakdown.",
        "Implement emergency waste management for high-traffic public spaces.",
      ]}
      aboutDescription="Tenth Rock delivers event waste management and multi-day event waste support. We manage the intense logistics of emergency junk removal to ensure seamless operations and attendee safety."
    />
  );
}

export const metadata = {
  title: "Events & Stadiums | Event Waste Logistics & Stadium Waste Coordination | Tenth Rock",
  description: "Event waste logistics and stadium waste coordination for multi-day event waste support. Event waste management for stadiums, fairs, festivals, and temporary activations nationwide.",
};
