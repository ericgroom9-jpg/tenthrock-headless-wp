import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function UnplannedCleanutsPage() {
  return (
    <ServiceTemplate
      serviceName="Unplanned Cleanouts & Debris Removal"
      serviceDescription="Unexpected cleanouts caused by tenant abandonment, sudden closures, illegal dumping, or operational transitions. We clear bulk debris, fixtures, shelving, and mixed commercial waste with fast mobilization and minimal disruption."
      heroImage="/images/stock/clean-city.jpg"
    />
  );
}

export const metadata = {
  title: "Unplanned Cleanouts & Debris Removal | Tenth Rock",
  description: "Fast commercial cleanouts for tenant abandonment, sudden closures, and illegal dumping. Bulk debris, fixtures, and mixed waste cleared with minimal disruption across 48 states.",
};
