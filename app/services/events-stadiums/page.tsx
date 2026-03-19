import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function EventsStadiumsPage() {
  return (
    <ServiceTemplate
      serviceName="Events & Stadiums"
      serviceDescription="End-to-end waste plans for venues and large events: placement, swaps, post-event sweeps, and recycling streams managed on tight timelines."
      heroImage="/images/stock/service-event-stadium.jpg"
    />
  );
}

export const metadata = {
  title: "Events & Stadiums | Tenth Rock",
  description: "End-to-end waste plans for venues and large events: placement, swaps, post-event sweeps, and recycling streams.",
};
