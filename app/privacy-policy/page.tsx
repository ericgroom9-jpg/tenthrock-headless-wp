import { fetchPrivacyPolicyAcf, fetchPageTemplateSeo } from "@/lib/wordpress";
import { PRIVACY_POLICY_HTML } from "@/lib/legal-content";
import PrivacyPolicyClient from "./PrivacyPolicyClient";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";

export const revalidate = 1800;

export async function generateMetadata() {
  const data = await fetchPrivacyPolicyAcf();
  return {
    title: data?.seoMetadata?.title || "Privacy Policy | Tenth Rock",
    description: data?.seoMetadata?.metaDesc || "Tenth Rock privacy policy.",
  };
}

export default async function PrivacyPolicyPage() {
  const [data, seo] = await Promise.all([
    fetchPrivacyPolicyAcf(),
    fetchPageTemplateSeo("template-privacy-policy", "privacy-policy"),
  ]);
  const content = data?.bodyContent?.trim() || PRIVACY_POLICY_HTML;
  return (
    <>
      <JsonLdSchema seo={data?.seoMetadata || seo} />
      <PrivacyPolicyClient data={data} content={content} />
    </>
  );
}
