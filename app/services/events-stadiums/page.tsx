import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function EventsStadiumsPage() {
  return (
    <ServiceTemplate
      serviceName="Events & Stadiums"
      serviceDescription="Event waste logistics and stadium waste coordination for high-volume, high-visibility environments. Event waste management and multi-day event waste support for stadiums, fairs, festivals, and temporary activations with coordination, contingency planning, and rapid response during live events."
      heroImage="/images/stock/service-event-stadium.jpg"
      aboutBullets={[
        "Event waste logistics for fairs, festivals, and concerts",
        "Stadium waste coordination for game days and multi-day events",
        "Multi-day event waste support with contingency planning",
        "Rapid response capacity during live events",
      ]}
      aboutDescription="High-traffic events generate unpredictable waste volumes on tight timelines. Tenth Rock provides event waste logistics and stadium waste coordination that scales with your crowd size. We handle pre-event container staging, real-time waste removal during live events, and post-event cleanup. Multi-day event waste support includes contingency planning for weather delays, extended run times, and surge capacity."
    />
  );
}

export const metadata = {
  title: "Events & Stadiums | Event Waste Logistics & Stadium Waste Coordination | Tenth Rock",
  description: "Event waste logistics and stadium waste coordination for multi-day event waste support. Event waste management for stadiums, fairs, festivals, and temporary activations nationwide.",
};
