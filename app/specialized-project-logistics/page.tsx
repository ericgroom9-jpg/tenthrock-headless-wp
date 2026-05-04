import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function SpecializedProjectLogisticsPage() {
  return (
    <ServiceTemplate
      serviceName="Specialized Project Logistics"
      serviceDescription="End-to-end waste coordination for site decommissioning, post-construction cleanout, event waste logistics, and storm debris removal across multiple sites. Vendor sourcing, scheduling, documentation, and close-out reporting included."
      heroImage="/images/stock/service-commercial.jpg"
      aboutBullets={[
        "Site decommissioning and post-construction cleanout coordination",
        "Event waste logistics for stadiums, fairs, and festivals",
        "Storm debris removal and disaster mobilization",
        "Multi-site project management with close-out reporting",
      ]}
      aboutDescription="Structured project work requires structured waste coordination. Whether you are closing stores, managing a remodel, running a multi-day event, or recovering from a natural disaster, Tenth Rock coordinates vendor sourcing, hauling logistics, container deployment, and documentation across every site. Your dedicated project manager handles every moving part so your team can focus on the project itself."
      subServices={[
        {
          title: "Site Closures & Remodels",
          description: "Site decommissioning, post-construction cleanout, store closings, and retail remodel waste management. Portfolio-wide site turnover, commercial cleanout, and D&D (Deactivation and Demolition) handled start to finish with vendor sourcing and close-out reporting.",
          image: "/images/stock/service-commercial.jpg",
          link: "/site-closures-remodels",
        },
        {
          title: "Events & Stadiums",
          description: "Event waste logistics and stadium waste coordination for multi-day event waste support. Event waste management for fairs, festivals, and temporary activations managed on tight timelines with contingency planning and rapid response.",
          image: "/images/stock/service-event-stadium.jpg",
          link: "/events-stadiums",
        },
        {
          title: "Natural Disasters",
          description: "Storm debris removal, hurricane debris cleanup, and emergency debris removal with rapid response. Emergency dumpster rental, emergency roll-off rental, and emergency open-top dumpsters deployed for multi-site recovery support and post-storm waste management.",
          image: "/images/stock/industry-natural-disasters-storm.jpg",
          link: "/natural-disaster-mobilization",
        },
      ]}
    />
  );
}

export const metadata = {
  title: "Specialized Project Logistics | Site Decommissioning & Event Waste | Tenth Rock",
  description: "End-to-end waste coordination for site decommissioning, post-construction cleanout, event waste logistics, and storm debris removal. Portfolio-wide site turnover and commercial cleanout across 48 states.",
};
