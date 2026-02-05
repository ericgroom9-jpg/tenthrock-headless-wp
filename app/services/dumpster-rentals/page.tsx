import ServiceTemplate from "@/components/services/ServiceTemplate";

const imgServiceEmergencyOverflow = "/images/stock/service-emergency-overflow.jpg";
const imgServiceDumpsterRental = "/images/stock/service-dumpster-rental.jpg";
const imgServiceEventStadium = "/images/stock/service-event-stadium.jpg";

const subServices = [
  {
    title: "Waste Removal",
    description: "Complete waste removal services for commercial properties of all sizes.",
    image: imgServiceEmergencyOverflow,
    link: "/services/waste-removal",
  },
  {
    title: "Dumpster Rentals",
    description: "Flexible dumpster rental solutions for construction, renovation, and cleanouts.",
    image: imgServiceDumpsterRental,
    link: "/services/dumpster-rentals",
  },
  {
    title: "Emergency Waste Removal",
    description: "24/7 rapid response for unexpected waste emergencies and overflow situations.",
    image: imgServiceEventStadium,
    link: "/services/emergency-waste-removal",
  },
];

export default function DumpsterRentalsPage() {
  return (
    <ServiceTemplate
      serviceName="Dumpster Rentals"
      serviceDescription="Flexible dumpster rental solutions for construction, renovation, and commercial cleanouts. Multiple sizes available with quick delivery."
      heroImage={imgServiceDumpsterRental}
      subServices={subServices}
    />
  );
}

export const metadata = {
  title: "Dumpster Rentals | Tenth Rock",
  description: "Flexible dumpster rental solutions for construction, renovation, and cleanouts. Quick delivery, multiple sizes, and competitive pricing.",
};
