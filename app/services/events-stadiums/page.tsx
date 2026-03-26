import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function EventsStadiumsPage() {
  return (
    <ServiceTemplate
      serviceName="Events & Stadiums"
      serviceDescription="Manage high-volume waste planning and execution for stadiums, festivals, and temporary activations. Specialized teams coordinate contingency logistics and rapid response to maintain site standards during live, high-visibility events."
      heroImage="/images/stock/service-event-stadium.jpg"
      aboutBullets={[
        "Deploy rapid response crews for immediate container swaps and debris clearing.",
        "Secure specialized vendor logistics for high-traffic venues and fairgrounds.",
        "Maintain site safety and aesthetic standards for attendees and stakeholders.",
        "Access 24/7 support to manage waste overflows during peak event hours.",
      ]}
      aboutDescription="High-traffic events generate unpredictable waste volumes on tight timelines. Tenth Rock provides event waste logistics and stadium waste coordination that scales with your crowd size. We handle pre-event container staging, real-time waste removal during live events, and post-event cleanup. Multi-day event waste support includes contingency planning for weather delays, extended run times, and surge capacity."
    />
  );
}

export const metadata = {
  title: "Events & Stadiums | Event Waste Logistics & Stadium Waste Coordination | Tenth Rock",
  description: "Event waste logistics and stadium waste coordination for multi-day event waste support. Event waste management for stadiums, fairs, festivals, and temporary activations nationwide.",
};
