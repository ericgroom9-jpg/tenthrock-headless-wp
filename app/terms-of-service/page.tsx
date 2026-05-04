import { fetchTermsOfServiceAcf } from "@/lib/wordpress";
import TermsOfServiceClient from "./TermsOfServiceClient";

export const revalidate = 300;

export async function generateMetadata() {
  const data = await fetchTermsOfServiceAcf();
  return {
    title: data?.seoMetadata?.title || "Terms of Service | Tenth Rock",
    description: data?.seoMetadata?.description || "Tenth Rock terms of service.",
  };
}

export default async function TermsOfServicePage() {
  const data = await fetchTermsOfServiceAcf();
  return <TermsOfServiceClient data={data} />;
}
