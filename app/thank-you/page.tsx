import { fetchThankYouAcf, fetchPageTemplateSeo } from "@/lib/wordpress";
import ThankYouClient from "./ThankYouClient";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const revalidate = 1800;

export async function generateMetadata() {
  const data = await fetchThankYouAcf();
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Thank You | Tenth Rock",
    fallbackDescription: "Thank you for contacting Tenth Rock.",
  });
}

export default async function ThankYouPage() {
  const [data, seo] = await Promise.all([
    fetchThankYouAcf(),
    fetchPageTemplateSeo("template-thank-you", "thank-you"),
  ]);
  return (
    <>
      <JsonLdSchema seo={data?.seoMetadata || seo} />
      <ThankYouClient data={data} />
    </>
  );
}
