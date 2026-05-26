import { fetchBookCallAcf, fetchPageTemplateSeo } from "@/lib/wordpress";
import BookACallClient from "./BookACallClient";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const revalidate = 1800;

export async function generateMetadata() {
  const data = await fetchBookCallAcf();
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Book A Call | Tenth Rock",
    fallbackDescription: "Schedule a consultation with Tenth Rock waste management experts.",
  });
}

export default async function BookACallPage() {
  const [data, seo] = await Promise.all([
    fetchBookCallAcf(),
    fetchPageTemplateSeo("template-book-a-call", "book-a-call"),
  ]);
  return (
    <>
      <JsonLdSchema seo={data?.seoMetadata || seo} />
      <BookACallClient data={data} />
    </>
  );
}
