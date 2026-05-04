import { fetchThankYouAcf } from "@/lib/wordpress";
import ThankYouClient from "./ThankYouClient";

export const revalidate = 300;

export async function generateMetadata() {
  const data = await fetchThankYouAcf();
  return {
    title: data?.seoMetadata?.title || "Thank You | Tenth Rock",
    description: data?.seoMetadata?.description || "Thank you for contacting Tenth Rock.",
  };
}

export default async function ThankYouPage() {
  const data = await fetchThankYouAcf();
  return <ThankYouClient data={data} />;
}
