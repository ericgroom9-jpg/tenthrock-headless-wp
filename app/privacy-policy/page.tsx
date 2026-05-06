import { fetchPrivacyPolicyAcf } from "@/lib/wordpress";
import { PRIVACY_POLICY_HTML } from "@/lib/legal-content";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const revalidate = 1800;

export async function generateMetadata() {
  const data = await fetchPrivacyPolicyAcf();
  return {
    title: data?.seoMetadata?.title || "Privacy Policy | Tenth Rock",
    description: data?.seoMetadata?.metaDesc || "Tenth Rock privacy policy.",
  };
}

export default async function PrivacyPolicyPage() {
  const data = await fetchPrivacyPolicyAcf();
  return <PrivacyPolicyClient data={data} content={PRIVACY_POLICY_HTML} />;
}
