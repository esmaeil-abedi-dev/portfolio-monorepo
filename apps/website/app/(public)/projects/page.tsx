import { Metadata } from "next";

import ProjectsPageClient from "@/components/projects/ProjectsPageClient";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
