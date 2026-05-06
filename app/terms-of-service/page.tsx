import { fetchTermsOfServiceAcf } from "@/lib/wordpress";
import { fetchTermageddonContent } from "@/lib/termageddon";
import TermsOfServiceClient from "./TermsOfServiceClient";

export const revalidate = 1800;

const DEFAULT_KEY = "Wlc5NU4ySTVhMmRJVEcxcFUxRTlQUT09";

export async function generateMetadata() {
  const data = await fetchTermsOfServiceAcf();
  return {
    title: data?.seoMetadata?.title || "Terms of Service | Tenth Rock",
    description: data?.seoMetadata?.metaDesc || "Tenth Rock terms of service.",
  };
}

export default async function TermsOfServicePage() {
  const data = await fetchTermsOfServiceAcf();
  const embedKey = data?.embedKey || DEFAULT_KEY;
  const initialContent = await fetchTermageddonContent(embedKey);
  return <TermsOfServiceClient data={data} initialContent={initialContent} />;
}
