import { fetchTermsOfServiceAcf, fetchPageTemplateSeo } from "@/lib/wordpress";
import { TERMS_OF_SERVICE_HTML } from "@/lib/legal-content";
import TermsOfServiceClient from "./TermsOfServiceClient";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";

export const revalidate = 1800;

export async function generateMetadata() {
  const data = await fetchTermsOfServiceAcf();
  return {
    title: data?.seoMetadata?.title || "Terms of Service | Tenth Rock",
    description: data?.seoMetadata?.metaDesc || "Tenth Rock terms of service.",
  };
}

export default async function TermsOfServicePage() {
  const [data, seo] = await Promise.all([
    fetchTermsOfServiceAcf(),
    fetchPageTemplateSeo("template-terms-of-service", "terms-of-service"),
  ]);
  const content = data?.bodyContent?.trim() || TERMS_OF_SERVICE_HTML;
  return (
    <>
      <JsonLdSchema seo={data?.seoMetadata || seo} />
      <TermsOfServiceClient data={data} content={content} />
    </>
  );
}
