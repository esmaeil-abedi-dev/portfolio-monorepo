import { Metadata } from "next";

import CVPageClient from "@/components/cv/CVPageClient";

export const metadata: Metadata = {
  title: "CV | Esmaeil Abedi",
  description:
    "Professional resume and curriculum vitae of Esmaeil Abedi, Front-End Engineer and AI Enthusiast.",
};

export default function CVPage() {
  return <CVPageClient />;
}
