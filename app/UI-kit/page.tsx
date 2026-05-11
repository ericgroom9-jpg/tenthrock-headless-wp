import type { Metadata } from "next";
import UiKitClient from "./UiKitClient";

export const metadata: Metadata = {
  title: "UI Kit | Tenth Rock",
  description: "Tenth Rock brand UI kit — colors, typography, components, and downloadable logo assets.",
  robots: { index: false, follow: false },
};

export default function UiKitPage() {
  return <UiKitClient />;
}
