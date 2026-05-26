import { fetchRequestServiceAcf, fetchPageTemplateSeo } from "@/lib/wordpress";
import RequestAServiceClient from "./RequestAServiceClient";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const revalidate = 1800;

export async function generateMetadata() {
  const data = await fetchRequestServiceAcf();
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Request A Service | Tenth Rock",
    fallbackDescription: "Request commercial waste management services from Tenth Rock.",
  });
}

export default async function RequestAServicePage() {
  const [data, seo] = await Promise.all([
    fetchRequestServiceAcf(),
    fetchPageTemplateSeo("template-request-a-service", "request-a-service"),
  ]);
  return (
    <>
      <JsonLdSchema seo={data?.seoMetadata || seo} />
      <RequestAServiceClient data={data} />
    </>
  );
}
