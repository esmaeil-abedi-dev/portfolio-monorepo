import { Metadata } from "next";

import ContactPageClient from "@/components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact | Esmaeil Abedi",
  description:
    "Get in touch with Esmaeil Abedi for collaborations, job opportunities, or just to say hello.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
