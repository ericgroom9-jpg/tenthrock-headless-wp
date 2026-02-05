import ServiceTemplate from "@/components/services/ServiceTemplate";

const imgEventStadium = "/images/stock/service-event-stadium.jpg";

export default function EventStadiumPage() {
  return (
    <ServiceTemplate
      serviceName="Event & Stadium Waste Logistics"
      serviceDescription="Comprehensive waste management solutions for large-scale events, stadiums, and venues. From setup to breakdown, we keep your event clean."
      heroImage={imgEventStadium}
    />
  );
}
