import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function EventsStadiumsPage() {
  return (
    <ServiceTemplate
      serviceName="Events & Stadiums"
      serviceDescription="Implement high-volume event waste logistics and stadium waste coordination. Specialized teams provide emergency waste management and contingency planning to maintain standards during live, high-visibility events."
      heroImage="/images/stock/service-event-stadium.jpg"
      aboutBullets={[
        "Deploy rapid response crews for immediate container swaps and debris clearing.",
        "Secure specialized vendor logistics for high-traffic venues and fairgrounds.",
        "Maintain site safety and aesthetic standards for attendees and stakeholders.",
        "Access 24/7 support to manage waste overflows during peak event hours.",
      ]}
      aboutDescription="Tenth Rock delivers event waste management and multi-day event waste support. We manage the intense logistics of emergency junk removal to ensure seamless operations and attendee safety."
    />
  );
}

export const metadata = {
  title: "Events & Stadiums | Event Waste Logistics & Stadium Waste Coordination | Tenth Rock",
  description: "Event waste logistics and stadium waste coordination for multi-day event waste support. Event waste management for stadiums, fairs, festivals, and temporary activations nationwide.",
};
