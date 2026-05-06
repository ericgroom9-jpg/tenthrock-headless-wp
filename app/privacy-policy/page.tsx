import { fetchPrivacyPolicyAcf } from "@/lib/wordpress";
import { fetchTermageddonContent } from "@/lib/termageddon";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const revalidate = 1800;

const DEFAULT_KEY = "TVdZcmMxWmpXRGxsV0RkblJHYzlQUT09";

export async function generateMetadata() {
  const data = await fetchPrivacyPolicyAcf();
  return {
    title: data?.seoMetadata?.title || "Privacy Policy | Tenth Rock",
    description: data?.seoMetadata?.metaDesc || "Tenth Rock privacy policy.",
  };
}

export default async function PrivacyPolicyPage() {
  const data = await fetchPrivacyPolicyAcf();
  const embedKey = data?.embedKey || DEFAULT_KEY;
  const initialContent = await fetchTermageddonContent(embedKey);
  return <PrivacyPolicyClient data={data} initialContent={initialContent} />;
}
