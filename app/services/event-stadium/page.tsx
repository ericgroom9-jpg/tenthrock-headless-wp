import ServiceTemplate from "@/components/services/ServiceTemplate";

const imgEventStadium = "/images/stock/service-event-stadium.jpg";

const subServices = [
  {
    title: "Concert & Festival Waste",
    description: "Large-scale waste management for concerts, music festivals, and outdoor events.",
    image: "/images/stock/service-event-stadium.jpg",
    link: "/services/event-stadium",
  },
  {
    title: "Stadium Game Day Services",
    description: "Rapid waste removal and recycling during and after sporting events.",
    image: "/images/stock/service-dumpster-rental.jpg",
    link: "/services/event-stadium",
  },
  {
    title: "Convention Center Support",
    description: "Trade show and convention waste logistics with on-site coordination.",
    image: "/images/stock/service-emergency-overflow.jpg",
    link: "/services/event-stadium",
  },
];

export default function EventStadiumPage() {
  return (
    <ServiceTemplate
      serviceName="Event & Stadium Waste Logistics"
      serviceDescription="Comprehensive waste management solutions for large-scale events, stadiums, and venues. From setup to breakdown, we keep your event clean."
      heroImage={imgEventStadium}
      subServices={subServices}
    />
  );
}
