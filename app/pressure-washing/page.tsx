import ServiceTemplate from "@/components/services/ServiceTemplate";

const imgServiceCommercial = "/images/stock/service-commercial.jpg";
const imgServiceMaintenance = "/images/stock/service-maintenance.jpg";
const imgCleanCity = "/images/stock/clean-city.jpg";

const subServices = [
  {
    title: "Storefront & Facade Cleaning",
    description: "Professional pressure washing for retail storefronts, entrances, sidewalks, and building facades. Restore curb appeal and maintain brand standards across all locations.",
    image: imgServiceCommercial,
    link: "/pressure-washing",
    features: ["Retail & Office Exteriors", "Sidewalk Cleaning", "Brand-Standard Appearance"],
  },
  {
    title: "Compactor Pad & Loading Dock Cleaning",
    description: "Deep cleaning for compactor areas, loading docks, and waste staging zones. Odor control, grime removal, and sanitization to meet health and safety standards.",
    image: imgServiceMaintenance,
    link: "/pressure-washing",
    features: ["Odor & Grime Removal", "Property Standards", "Scheduled Maintenance"],
  },
  {
    title: "Post-Waste Cleanup",
    description: "Complete site cleaning after waste removal projects. Leave your property spotless and ready for business with professional pressure washing and surface treatment.",
    image: imgCleanCity,
    link: "/pressure-washing",
    features: ["Post-Removal Deep Clean", "Surface Restoration", "Before & After Documentation"],
  },
];

export default function PressureWashingPage() {
  return (
    <ServiceTemplate
      serviceName="Pressure Washing"
      serviceDescription="Commercial pressure washing for storefronts, stadiums, compactor pads, and post-waste cleanup. Nationwide service through our vetted vendor network."
      heroImage={imgServiceCommercial}
      subServices={subServices}
      aboutBullets={[
        "Storefronts, sidewalks, facades, and parking areas",
        "Compactor pads, loading docks, and waste staging zones",
        "Post-waste cleanup and surface restoration",
      ]}
      aboutDescription="Dirty exteriors cost you customers. Our pressure washing crews handle storefronts, compactor pads, loading docks, and post-waste site cleanup for commercial properties across 48 states. One call schedules the job. We coordinate local crews, confirm completion with photos, and send a single invoice."
    />
  );
}

export const metadata = {
  title: "Commercial Pressure Washing | Tenth Rock",
  description: "Professional pressure washing for commercial properties. Storefronts, compactor pads, loading docks, and post-waste cleanup across 48 states. Call 727.510.5454.",
};
