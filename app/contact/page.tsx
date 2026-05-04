import { fetchContactAcf } from "@/lib/wordpress";
import ContactClient from "./ContactClient";

export const revalidate = 300;

export async function generateMetadata() {
  const data = await fetchContactAcf();
  return {
    title: data?.seoMetadata?.title || "Contact Us | Tenth Rock",
    description: data?.seoMetadata?.description || "Get in touch with Tenth Rock for commercial waste management services.",
  };
}

export default async function ContactPage() {
  const data = await fetchContactAcf();
  return <ContactClient data={data} />;
}
