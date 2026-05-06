import { fetchTermsOfServiceAcf } from "@/lib/wordpress";
import { TERMS_OF_SERVICE_HTML } from "@/lib/legal-content";
import TermsOfServiceClient from "./TermsOfServiceClient";

export const revalidate = 1800;

export async function generateMetadata() {
  const data = await fetchTermsOfServiceAcf();
  return {
    title: data?.seoMetadata?.title || "Terms of Service | Tenth Rock",
    description: data?.seoMetadata?.metaDesc || "Tenth Rock terms of service.",
  };
}

export default async function TermsOfServicePage() {
  const data = await fetchTermsOfServiceAcf();
  return <TermsOfServiceClient data={data} content={TERMS_OF_SERVICE_HTML} />;
}
