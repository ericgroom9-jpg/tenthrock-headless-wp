import { fetchTermsOfServiceAcf, fetchPageTemplateSeo } from "@/lib/wordpress";
import { TERMS_OF_SERVICE_HTML } from "@/lib/legal-content";
import TermsOfServiceClient from "./TermsOfServiceClient";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const revalidate = 1800;

export async function generateMetadata() {
  const data = await fetchTermsOfServiceAcf();
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Terms of Service | Tenth Rock",
    fallbackDescription: "Tenth Rock terms of service.",
  });
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
