import ServiceTemplate from "@/components/services/ServiceTemplate";

const imgStoreDecommissioning = "/images/stock/service-dumpster-rental.jpg";

const subServices = [
  {
    title: "Complete Store Closures",
    description: "Full-service decommissioning for retail closures, including fixture removal, waste hauling, and site cleanup.",
    image: "/images/stock/service-dumpster-rental.jpg",
    link: "/services/store-decommissioning",
  },
  {
    title: "Remodel Support",
    description: "Debris removal and waste management during store renovations and remodels.",
    image: "/images/stock/service-event-stadium.jpg",
    link: "/services/store-decommissioning",
  },
  {
    title: "Fixture & Equipment Removal",
    description: "Safe removal and recycling of store fixtures, shelving, and equipment.",
    image: "/images/stock/service-emergency-overflow.jpg",
    link: "/services/store-decommissioning",
  },
];

export default function StoreDecommissioningPage() {
  return (
    <ServiceTemplate
      serviceName="Store Decommissioning & Remodel Support"
      serviceDescription="Professional decommissioning services for retail closures, renovations, and remodels. We handle everything from fixture removal to final site cleanup."
      heroImage={imgStoreDecommissioning}
      subServices={subServices}
    />
  );
}
