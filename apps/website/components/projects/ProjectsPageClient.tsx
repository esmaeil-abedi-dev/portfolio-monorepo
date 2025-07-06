'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

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
    tags: ["React", "OpenWeatherMap API", "Geolocation"],
    image: "/images/projects/weather.jpg",
    description: "A simple and elegant weather application that provides real-time weather information based on your location or a searched city.",
    features: [
      "Real-time weather data",
      "5-day forecast",
      "Search by city name",
      "Geolocation support",
      "Responsive design"
    ],
    technologies: ["React", "OpenWeatherMap API", "Geolocation API", "CSS Modules"],
    demoUrl: "https://weather-app-demo.esmaeilabedi.dev",
    repoUrl: "https://github.com/esmaeilabedi/weather-app",
    featured: false
  }
];

export default function ProjectsPageClient() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
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
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#1A2B40] mb-4">
            My Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore a selection of my work, from web applications to AI-powered tools. Each project showcases my dedication to quality, performance, and user experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="bg-card rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              variants={itemVariants}
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="relative h-56 w-full">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-card-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
