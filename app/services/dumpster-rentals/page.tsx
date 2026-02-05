import ServiceTemplate from "@/components/services/ServiceTemplate";

const imgServiceDumpsterRental = "/images/stock/service-dumpster-rental.jpg";

export default function DumpsterRentalsPage() {
  return (
    <ServiceTemplate
      serviceName="Dumpster Rental & Temporary Containers"
      serviceDescription="Flexible dumpster rental solutions for construction, renovation, and commercial cleanouts. Multiple sizes available with quick delivery."
      heroImage={imgServiceDumpsterRental}
    />
  );
}

export const metadata = {
  title: "Dumpster Rentals | Tenth Rock",
  description: "Flexible dumpster rental solutions for construction, renovation, and cleanouts. Quick delivery, multiple sizes, and competitive pricing.",
};
