import type { Metadata } from "next";
import FormThankYou from "@/components/shared/FormThankYou";

export const metadata: Metadata = {
  title: "Thank You | Tenth Rock",
  description: "We've received your service request and will be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function RequestAServiceThankYouPage() {
  return (
    <FormThankYou message="We've received your service request and will be in touch with you shortly." />
  );
}
