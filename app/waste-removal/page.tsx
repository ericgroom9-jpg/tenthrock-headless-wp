import ServiceTemplate from "@/components/services/ServiceTemplate";

const imgServiceEmergencyOverflow = "/images/stock/service-emergency-overflow.jpg";
const imgServiceDumpsterRental = "/images/stock/service-dumpster-rental.jpg";
const imgServiceEventStadium = "/images/stock/service-event-stadium.jpg";

const subServices = [
  {
    title: "Emergency Waste Disposal",
    description: "24/7 rapid-response teams deployed within hours for urgent waste situations. Overflow pickups, surge capacity, and site stabilization for retail, industrial, and multi-site emergencies.",
    image: imgServiceEmergencyOverflow,
    link: "/waste-removal",
    features: ["24/7 Dispatch", "Overflow & Surge Capacity", "Nationwide Network"],
  },
  {
    title: "Bulk Waste Removal",
    description: "Large-scale cleanouts for damaged, discontinued, or unsellable products and materials. Coordinated haul schedules for remodels, closures, and fixture swaps.",
    image: imgServiceDumpsterRental,
    link: "/waste-removal",
    features: ["Site Cleanouts", "Multi-location Coordination", "Project Scheduling"],
  },
  {
    title: "Illegal Dumping Cleanup",
    description: "Fast removal of mattresses, furniture, construction debris, and unauthorized waste from parking lots, loading docks, and commercial properties.",
    image: imgServiceEventStadium,
    link: "/waste-removal",
    features: ["Same-Day Response", "Before & After Documentation", "Recurring Prevention Plans"],
  },
];

export default function WasteRemovalPage() {
  return (
    <ServiceTemplate
      serviceName="Waste Removal"
      serviceDescription="Emergency disposal, bulk removal, live loads, and illegal dumping cleanup for commercial properties across 48 states. One call, fast dispatch, complete documentation."
      heroImage={imgServiceEmergencyOverflow}
      subServices={subServices}
      aboutBullets={[
        "24/7 emergency dispatch for overflow and surge situations",
        "Bulk cleanouts for store closures, remodels, and fixture swaps",
        "Illegal dumping removal with before-and-after documentation",
      ]}
      aboutDescription="When waste piles up, your business suffers. Our crews handle emergency overflows, bulk debris hauls, live loads, and illegal dumping cleanup at commercial properties across 48 states. You call one number, a project manager takes over, and the problem is gone. Photo documentation and a single invoice follow every job."
    />
  );
}

export const metadata = {
  title: "Waste Removal Services | Tenth Rock",
  description: "Commercial waste removal with 24/7 dispatch. Emergency disposal, bulk cleanouts, and illegal dumping cleanup across 48 states. Call 727.510.5454.",
};
