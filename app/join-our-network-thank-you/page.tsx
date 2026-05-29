import type { Metadata } from "next";
import JoinThankYouClient from "./JoinThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | Tenth Rock",
  description: "Check your inbox to start your onboarding process.",
  robots: { index: false, follow: false },
};

export default function JoinOurNetworkThankYouPage() {
  return <JoinThankYouClient />;
}
