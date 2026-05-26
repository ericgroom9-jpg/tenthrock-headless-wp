import { fetchContactAcf, fetchPageTemplateSeo } from "@/lib/wordpress";
import ContactClient from "./ContactClient";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";

export const revalidate = 1800;

export async function generateMetadata() {
  const data = await fetchContactAcf();
  return {
    title: data?.seoMetadata?.title || "Contact Us | Tenth Rock",
    description: data?.seoMetadata?.metaDesc || "Get in touch with Tenth Rock for commercial waste management services.",
  };
}

export default async function ContactPage() {
  const [data, seo] = await Promise.all([
    fetchContactAcf(),
    fetchPageTemplateSeo("template-contact", "contact"),
  ]);
  return (
    <>
      <JsonLdSchema seo={data?.seoMetadata || seo} />
      <ContactClient data={data} />
    </>
  );
}
