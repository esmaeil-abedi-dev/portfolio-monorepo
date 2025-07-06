import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Example project data - in a real scenario, this would come from an API or CMS
const FEATURED_PROJECTS = [
  {
    id: "1",
    title: "AI-Powered Task Manager",
    description: "A task management application with AI features for intelligent task prioritization and scheduling.",
    image: "/images/projects/ai-task-manager.jpg",
    technologies: ["React", "TypeScript", "Node.js", "TensorFlow.js"],
    demoLink: "https://example.com/ai-task-manager",
    githubLink: "https://github.com/esmaeilabedi/ai-task-manager",
    category: "AI/ML",
  },
  {
    id: "2",
    title: "Responsive E-commerce Platform",
    description: "A modern e-commerce platform with responsive design and advanced filtering capabilities.",
    image: "/images/projects/ecommerce-platform.jpg",
    technologies: ["Next.js", "Tailwind CSS", "GraphQL", "MongoDB"],
    demoLink: "https://example.com/ecommerce",
    githubLink: "https://github.com/esmaeilabedi/ecommerce-platform",
    category: "Front-End",
  },
  {
    id: "3",
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with customizable charts and filters.",
    image: "/images/projects/data-dashboard.jpg",
    technologies: ["React", "D3.js", "Material UI", "Express"],
    demoLink: "https://example.com/data-dashboard",
    githubLink: "https://github.com/esmaeilabedi/data-dashboard",
    category: "Front-End",
  },
];

interface ProjectCardProps {
  project: typeof FEATURED_PROJECTS[0];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
    >
      <div className="relative h-48 w-full">
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          {/* Placeholder if image fails to load */}
          <span className="text-gray-400">Project Image</span>
        </div>
        {/* Actual image - would need proper handling for real images */}
        {/* <Image 
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        /> */}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-[#1A2B40]">{project.title}</h3>
          <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-[#1A2B40] rounded-full">
            {project.category}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-md">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <Link href={`/projects/${project.id}`} className="text-accent hover:text-accent-dark">
            View details
          </Link>
          
          <div className="flex gap-2">
            <a 
              href={project.githubLink} 
              target="_blank"
              rel="noreferrer"
              className="p-2 text-gray-600 hover:text-accent"
            >
              <FaGithub />
            </a>
            <a 
              href={project.demoLink} 
              target="_blank"
              rel="noreferrer"
              className="p-2 text-gray-600 hover:text-accent"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedProjects = () => {
  return (
    <section className="py-16 bg-background-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-2">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work across front-end development and AI/ML integration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/projects">
            <Button size="lg">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { FeaturedProjects };
