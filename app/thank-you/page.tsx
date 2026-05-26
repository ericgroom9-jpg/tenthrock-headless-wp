import { fetchThankYouAcf, fetchPageTemplateSeo } from "@/lib/wordpress";
import ThankYouClient from "./ThankYouClient";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";

export const revalidate = 1800;

export async function generateMetadata() {
  const data = await fetchThankYouAcf();
  return {
    title: data?.seoMetadata?.title || "Thank You | Tenth Rock",
    description: data?.seoMetadata?.metaDesc || "Thank you for contacting Tenth Rock.",
  };
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
