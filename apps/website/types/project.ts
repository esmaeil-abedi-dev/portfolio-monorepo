
export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  image: string;
  description: string;
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  completedDate: string;
  featured: boolean;
  galleryImages?: string[];
}
