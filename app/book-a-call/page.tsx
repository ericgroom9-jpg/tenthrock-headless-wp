import { fetchBookCallAcf } from "@/lib/wordpress";
import BookACallClient from "./BookACallClient";

export const revalidate = 300;

export async function generateMetadata() {
  const data = await fetchBookCallAcf();
  return {
    title: data?.seoMetadata?.title || "Book A Call | Tenth Rock",
    description: data?.seoMetadata?.metaDesc || "Schedule a consultation with Tenth Rock waste management experts.",
  };
}

export default async function BookACallPage() {
  const data = await fetchBookCallAcf();
  return <BookACallClient data={data} />;
}
