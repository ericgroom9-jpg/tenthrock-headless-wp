import { fetchPrivacyPolicyAcf, fetchPageTemplateSeo } from "@/lib/wordpress";
import { PRIVACY_POLICY_HTML } from "@/lib/legal-content";
import PrivacyPolicyClient from "./PrivacyPolicyClient";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const revalidate = 1800;

export async function generateMetadata() {
  const data = await fetchPrivacyPolicyAcf();
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Privacy Policy | Tenth Rock",
    fallbackDescription: "Tenth Rock privacy policy.",
  });
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
