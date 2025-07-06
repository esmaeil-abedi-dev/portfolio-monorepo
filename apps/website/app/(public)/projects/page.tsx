import { Metadata } from "next";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Projects | Esmaeil Abedi",
  description: "Explore my portfolio of front-end and AI projects, showcasing my skills in React, Next.js, TypeScript, and AI integration.",
};

// Mock project data (would be fetched from an API/CMS in production)
const projects = [
  {
    id: "ai-powered-dashboard",
    title: "AI-Powered Analytics Dashboard",
    slug: "ai-powered-dashboard",
    category: "Web Application",
    tags: ["React", "TypeScript", "TensorFlow.js", "D3.js"],
    image: "/images/projects/dashboard.jpg",
    description: "An analytics dashboard with AI-powered insights, interactive visualizations, and predictive analytics features to help businesses make data-driven decisions.",
    features: [
      "Machine learning models for anomaly detection",
      "Natural language query interface",
      "Interactive data visualizations",
      "Customizable dashboard widgets",
      "Real-time data processing"
    ],
    technologies: ["React", "TypeScript", "Redux Toolkit", "TensorFlow.js", "D3.js", "WebSockets"],
    demoUrl: "https://dashboard-demo.esmaeilabedi.dev",
    repoUrl: "https://github.com/esmaeilabedi/ai-dashboard",
    featured: true
  },
  {
    id: "e-commerce-platform",
    title: "Modern E-Commerce Platform",
    slug: "e-commerce-platform",
    category: "Web Application",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    image: "/images/projects/ecommerce.jpg",
    description: "A fully responsive e-commerce platform with modern design, seamless checkout experience, and comprehensive admin dashboard for product management.",
    features: [
      "Responsive product catalog",
      "User authentication and profiles",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Order tracking and history"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API", "MongoDB", "NextAuth.js"],
    demoUrl: "https://ecommerce-demo.esmaeilabedi.dev",
    repoUrl: "https://github.com/esmaeilabedi/modern-ecommerce",
    featured: true
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator",
    slug: "ai-content-generator",
    category: "AI Tool",
    tags: ["React", "Node.js", "OpenAI API", "Express"],
    image: "/images/projects/content-generator.jpg",
    description: "A web application that leverages AI to generate high-quality content for marketing, blogs, and social media, with customization options for tone, style, and format.",
    features: [
      "Content generation for various formats",
      "Tone and style customization",
      "SEO optimization suggestions",
      "Export to multiple formats",
      "Content history and favorites"
    ],
    technologies: ["React", "Node.js", "Express", "OpenAI API", "MongoDB", "Redis"],
    demoUrl: "https://content-gen.esmaeilabedi.dev",
    repoUrl: "https://github.com/esmaeilabedi/ai-content-generator",
    featured: true
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    slug: "portfolio-website",
    category: "Website",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/projects/portfolio.jpg",
    description: "My personal portfolio website showcasing my projects, skills, and experience. Built with Next.js, TypeScript, and Tailwind CSS with smooth animations using Framer Motion.",
    features: [
      "Responsive design for all devices",
      "Animated page transitions",
      "Dynamic project showcase",
      "Blog with MDX support",
      "Contact form with validation"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "MDX", "React Hook Form"],
    demoUrl: "https://esmaeilabedi.dev",
    repoUrl: "https://github.com/esmaeilabedi/portfolio-website",
    featured: false
  },
  {
    id: "weather-app",
    title: "Interactive Weather Application",
    slug: "weather-app",
    category: "Web Application",
    tags: ["React", "JavaScript", "Weather API", "CSS"],
    image: "/images/projects/weather-app.jpg",
    description: "A weather application that provides current conditions, forecasts, and historical data with an intuitive interface and beautiful visualizations.",
    features: [
      "Location-based weather data",
      "5-day forecast",
      "Weather maps and radar",
      "Historical weather data",
      "Weather alerts and notifications"
    ],
    technologies: ["React", "JavaScript", "OpenWeatherMap API", "Chart.js", "Styled Components"],
    demoUrl: "https://weather.esmaeilabedi.dev",
    repoUrl: "https://github.com/esmaeilabedi/weather-app",
    featured: false
  },
  {
    id: "task-management",
    title: "Collaborative Task Management",
    slug: "task-management",
    category: "Web Application",
    tags: ["React", "Firebase", "Material UI", "Redux"],
    image: "/images/projects/task-management.jpg",
    description: "A collaborative task management application that helps teams organize work, track progress, and manage deadlines efficiently.",
    features: [
      "Drag-and-drop task organization",
      "Team collaboration features",
      "Task dependencies and subtasks",
      "Time tracking and reporting",
      "File attachments and comments"
    ],
    technologies: ["React", "Firebase", "Redux", "Material UI", "Firebase Authentication"],
    demoUrl: "https://tasks.esmaeilabedi.dev",
    repoUrl: "https://github.com/esmaeilabedi/task-manager",
    featured: false
  }
];

export default function ProjectsPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <main className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            My Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my work showcasing my skills in front-end development, 
            UI/UX design, and AI integration. Each project represents a unique challenge 
            and solution.
          </p>
        </motion.div>

        {/* Project Categories/Filter (future enhancement) */}
        <motion.div 
          className="mb-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium">
            All Projects
          </button>
          <button className="bg-white hover:bg-gray-100 text-primary px-6 py-2 rounded-full text-sm font-medium transition-colors">
            Web Apps
          </button>
          <button className="bg-white hover:bg-gray-100 text-primary px-6 py-2 rounded-full text-sm font-medium transition-colors">
            AI Projects
          </button>
          <button className="bg-white hover:bg-gray-100 text-primary px-6 py-2 rounded-full text-sm font-medium transition-colors">
            UI/UX Design
          </button>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {projects.map((project) => (
            <motion.article 
              key={project.id}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <div className="absolute top-4 right-4 z-20">
                  {project.featured && (
                    <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                {/* Placeholder for now - would be actual images in production */}
                <div className="bg-gradient-to-br from-primary to-accent h-full w-full absolute" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs font-medium bg-accent/10 text-accent px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-xl font-heading font-bold text-primary mb-2">
                  {project.title}
                </h2>
                
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <Link href={`/projects/${project.slug}`}>
                    <Button>
                      View Project
                    </Button>
                  </Link>

                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent-light"
                        aria-label="View live demo"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                    {project.repoUrl && (
                      <a 
                        href={project.repoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-light"
                        aria-label="View source code on GitHub"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16 p-10 bg-primary text-white rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-heading font-semibold mb-4">
            Interested in working together?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Let&apos;s Talk
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
