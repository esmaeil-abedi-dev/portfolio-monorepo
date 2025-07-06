import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjects } from "@/lib/actions/projects";
import ProjectPageClient from "@/components/projects/ProjectPageClient";

// Generate metadata for the page dynamically
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // Find the project by slug
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found | Esmaeil Abedi",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} | Projects | Esmaeil Abedi`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      tags: project.tags,
    },
  };
}

// Statically generate routes for all projects
export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // Find the project by slug
  const project = await getProjectBySlug(params.slug);

  // If project not found, return 404
  if (!project) {
    notFound();
  }

  return <ProjectPageClient project={project} />;
}
