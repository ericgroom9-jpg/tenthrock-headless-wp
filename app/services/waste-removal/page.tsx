import ServiceTemplate from "@/components/services/ServiceTemplate";

const imgServiceEmergencyOverflow = "/images/stock/service-emergency-overflow.jpg";
const imgServiceDumpsterRental = "/images/stock/service-dumpster-rental.jpg";
const imgServiceEventStadium = "/images/stock/service-event-stadium.jpg";

const subServices = [
  {
    title: "Emergency & Overflow Waste Response",
    description: "Rapid-response hauling, overflow pickups, and surge capacity when your operations can't wait. Built for retail, industrial, and multi-site emergencies.",
    image: imgServiceEmergencyOverflow,
    link: "/services/emergency-waste-removal",
    features: ["24/7 Dispatch", "Overflow & Surge Capacity", "Nationwide Network"],
  },
  {
    title: "Store Decommissioning & Remodel Support",
    description: "Cleanouts, roll-offs, and coordinated haul schedules for remodels, closures, and fixture swaps—without disrupting day-to-day operations.",
    image: imgServiceDumpsterRental,
    link: "/services/store-decommissioning",
    features: ["Project Scheduling", "Site Cleanouts", "Multi-location Coordination"],
  },
  {
    title: "Event & Stadium Waste Logistics",
    description: "End-to-end waste plans for venues and large events—placement, swaps, post-event sweeps, and recycling streams managed on tight timelines.",
    image: imgServiceEventStadium,
    link: "/services/event-stadium",
    features: ["Venue Routing", "High-volume Support", "Diversion Planning"],
  },
  {
    title: "Dumpster Rental & Temporary Containers",
    description: "Temporary containers and compactor solutions for projects and peaks. Transparent sizing, delivery windows, and swap schedules.",
    image: imgServiceDumpsterRental,
    link: "/services/dumpster-rentals",
    features: ["Roll-offs & Front-load", "Fast Delivery", "Flexible Terms"],
  },
  {
    title: "Centralized Waste Program Management",
    description: "One partner to standardize vendors, pricing, reporting, and service levels across all your locations—improving control and visibility.",
    image: imgServiceEmergencyOverflow,
    link: "/services/centralized-programs",
    features: ["Standardized SLAs", "Spend Visibility", "Single Point of Contact"],
  },
  {
    title: "Environmental & Compactor Maintenance Services",
    description: "Preventative maintenance and service for compactors and waste equipment, plus environmental support to keep sites compliant and running.",
    image: imgServiceEventStadium,
    link: "/services/environmental-maintenance",
    features: ["PM Schedules", "On-site Repairs", "Compliance Support"],
  },
];

export default function WasteRemovalPage() {
  return (
    <ServiceTemplate
      serviceName="Waste Removal"
      serviceDescription="Complete waste removal services for commercial properties of all sizes. From routine collection to emergency response, we handle it all."
      heroImage={imgServiceEmergencyOverflow}
      subServices={subServices}
    />
  );
}

export const metadata = {
  title: "Waste Removal Services | Tenth Rock",
  description: "Professional waste removal services for commercial properties. 24/7 availability, nationwide coverage, and guaranteed satisfaction.",
};
