import CookiePolicyClient from "./CookiePolicyClient";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const revalidate = 1800;

export async function generateMetadata() {
  return buildPageMetadata({
    seo: null,
    fallbackTitle: "Cookie Policy | Tenth Rock",
    fallbackDescription:
      "Learn how Tenth Rock uses cookies and similar technologies, and how you can manage your cookie preferences.",
  });
}

export default function CookiePolicyPage() {
  return <CookiePolicyClient />;
}
