import ServiceTemplate from "@/components/services/ServiceTemplate";

const imgServiceDumpsterRental = "/images/stock/service-dumpster-rental.jpg";
const imgServiceDumpster = "/images/stock/service-dumpster.jpg";
const imgServiceCentralized = "/images/stock/service-centralized-program.jpg";

const subServices = [
  {
    title: "Roll-Off Dumpsters",
    description: "10, 20, 30, and 40-yard roll-off containers for construction, renovation, and large-scale cleanouts. Matched to your specific project needs with prompt delivery.",
    image: imgServiceDumpsterRental,
    link: "/services/dumpster-rental",
    features: ["10 to 40-Yard Sizes", "Same-Day Delivery", "Construction & Renovation"],
  },
  {
    title: "Commercial Containers",
    description: "Front-load and rear-load containers for ongoing commercial waste needs. Flexible terms from short-term rentals to long-term contracts with scheduled pickups.",
    image: imgServiceDumpster,
    link: "/services/dumpster-rental",
    features: ["Front-Load & Rear-Load", "Flexible Scheduling", "Multi-Location Programs"],
  },
  {
    title: "Flat-Rate Pricing",
    description: "Transparent, all-inclusive pricing with no hidden fees or surprise charges. One price covers delivery, pickup, disposal, and tonnage within your agreed limits.",
    image: imgServiceCentralized,
    link: "/services/dumpster-rental",
    features: ["No Hidden Fees", "All-Inclusive Rates", "Volume Discounts Available"],
  },
];

export default function DumpsterRentalPage() {
  return (
    <ServiceTemplate
      serviceName="Dumpster Rental"
      serviceDescription="Roll-off dumpsters in 10, 20, 30, and 40-yard sizes with flat-rate pricing. Same-day or next-day delivery for construction, renovation, and commercial cleanouts."
      heroImage={imgServiceDumpsterRental}
      subServices={subServices}
      aboutBullets={[
        "10, 20, 30, and 40-yard roll-off containers",
        "Same-day or next-day delivery in most markets",
        "Flat-rate pricing with no hidden fees or overage surprises",
      ]}
      aboutDescription="Whether it's a remodel, a store closure, or an ongoing commercial need, we match the right container to your project and get it on-site fast. Our network of local haulers delivers and picks up on your schedule. You get one flat rate, one invoice, and one number to call if anything changes."
    />
  );
}

export const metadata = {
  title: "Dumpster Rental | Tenth Rock",
  description: "Roll-off dumpster rental with flat-rate pricing. 10 to 40-yard sizes, same-day delivery, no hidden fees. Nationwide service. Call 727.510.5454.",
};
