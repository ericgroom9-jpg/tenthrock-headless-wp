import { fetchRequestServiceAcf } from "@/lib/wordpress";
import RequestAServiceClient from "./RequestAServiceClient";

export const revalidate = 300;

export async function generateMetadata() {
  const data = await fetchRequestServiceAcf();
  return {
    title: data?.seoMetadata?.title || "Request A Service | Tenth Rock",
    description: data?.seoMetadata?.description || "Request commercial waste management services from Tenth Rock.",
  };
}

export default async function RequestAServicePage() {
  const data = await fetchRequestServiceAcf();
  return <RequestAServiceClient data={data} />;
}
