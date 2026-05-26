import { fetchJoinNetworkAcf, fetchPageTemplateSeo } from "@/lib/wordpress";
import JoinOurNetworkClient from "./JoinOurNetworkClient";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const revalidate = 1800;

export async function generateMetadata() {
  const data = await fetchJoinNetworkAcf();
  return buildPageMetadata({
    seo: data?.seoMetadata,
    fallbackTitle: "Join Our Network | Tenth Rock",
    fallbackDescription: "Partner with Tenth Rock as a certified service provider. Same-day payment, no sales, national reach.",
  });
}

export default async function JoinOurNetworkPage() {
  const [acf, seo] = await Promise.all([
    fetchJoinNetworkAcf(),
    fetchPageTemplateSeo("template-join-our-network", "join-our-network"),
  ]);
  return (
    <>
      <JsonLdSchema seo={acf?.seoMetadata || seo} />
      <JoinOurNetworkClient acf={acf} />
    </>
  );
}
