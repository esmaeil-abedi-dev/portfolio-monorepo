import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaCalendarAlt, FaTag } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import ContentRenderer from "@/components/content/ContentRenderer";

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
    overview: `
      <p>The AI-Powered Analytics Dashboard is a comprehensive solution designed to transform raw data into actionable insights through artificial intelligence. This project combines modern front-end technologies with machine learning capabilities to provide businesses with an intuitive, interactive platform for data analysis.</p>

      <p>The dashboard features predictive analytics, anomaly detection, and natural language processing to help users understand their data without requiring expertise in data science or statistics.</p>
    `,
    challenge: `
      <p>Creating an analytics dashboard that makes complex data accessible while incorporating AI capabilities presented several challenges:</p>

      <ul>
        <li>Integrating machine learning models into the front-end while maintaining performance</li>
        <li>Designing intuitive visualizations for complex datasets</li>
        <li>Implementing real-time data processing with minimal latency</li>
        <li>Ensuring the AI predictions and insights were accurate and understandable to non-technical users</li>
        <li>Optimizing performance when dealing with large datasets</li>
      </ul>
    `,
    solution: `
      <p>To address these challenges, I implemented several innovative solutions:</p>

      <h3>TensorFlow.js Integration</h3>
      <p>I used TensorFlow.js to run machine learning models directly in the browser, eliminating the need for constant server requests and reducing latency. For more intensive computations, I implemented a hybrid approach with server-side processing.</p>

      <h3>Interactive Visualizations</h3>
      <p>Using D3.js, I created a suite of customizable, interactive visualizations that adapt to different data types and user needs. These visualizations include:</p>

      <ul>
        <li>Time-series forecasting charts with confidence intervals</li>
        <li>Anomaly detection overlays that highlight unusual patterns</li>
        <li>Interactive correlation matrices</li>
        <li>Dimension reduction visualizations to explore high-dimensional data</li>
      </ul>

      <h3>Natural Language Interface</h3>
      <p>I developed a natural language query interface that allows users to ask questions about their data in plain English, using NLP techniques to interpret queries and generate appropriate visualizations and insights.</p>

      <h3>Optimized Data Processing</h3>
      <p>To handle large datasets efficiently, I implemented:</p>

      <ul>
        <li>Data sampling and aggregation techniques</li>
        <li>Incremental rendering for large visualizations</li>
        <li>WebWorkers for background processing</li>
        <li>Efficient data caching strategies</li>
      </ul>
    `,
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
    completedDate: "June 2023",
    featured: true,
    galleryImages: [
      "/images/projects/dashboard-1.jpg",
      "/images/projects/dashboard-2.jpg",
      "/images/projects/dashboard-3.jpg"
    ]
  },
  {
    id: "e-commerce-platform",
    title: "Modern E-Commerce Platform",
    slug: "e-commerce-platform",
    category: "Web Application",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    image: "/images/projects/ecommerce.jpg",
    description: "A fully responsive e-commerce platform with modern design, seamless checkout experience, and comprehensive admin dashboard for product management.",
    overview: `
      <p>This modern e-commerce platform provides businesses with a complete solution for selling products online. Built with Next.js and TypeScript, it offers exceptional performance, SEO optimization, and a seamless user experience across all devices.</p>
      
      <p>The platform includes a customer-facing storefront and a comprehensive admin dashboard for managing products, orders, and customers.</p>
    `,
    challenge: `
      <p>Building a modern e-commerce platform required addressing several challenges:</p>
      
      <ul>
        <li>Creating a fast, responsive user experience on all devices</li>
        <li>Implementing secure payment processing</li>
        <li>Building an intuitive product management system</li>
        <li>Ensuring the platform is scalable to handle traffic spikes</li>
        <li>Optimizing for search engines and conversions</li>
      </ul>
    `,
    solution: `
      <p>I addressed these challenges through several key implementation decisions:</p>
      
      <h3>Next.js Architecture</h3>
      <p>Using Next.js with server-side rendering and static generation provided excellent performance and SEO benefits. I implemented incremental static regeneration to ensure product information remains up-to-date while maintaining fast page loads.</p>
      
      <h3>Responsive Design System</h3>
      <p>With Tailwind CSS, I created a completely responsive design system that works seamlessly on mobile, tablet, and desktop. The interface adapts intelligently to different screen sizes, ensuring a consistent user experience.</p>
      
      <h3>Secure Payment Processing</h3>
      <p>I integrated Stripe for payment processing, implementing their latest Checkout API for a secure, compliant payment flow. The system handles multiple payment methods and currencies.</p>
      
      <h3>Admin Dashboard</h3>
      <p>The admin dashboard provides comprehensive tools for:</p>
      <ul>
        <li>Product management with bulk operations</li>
        <li>Order processing and fulfillment tracking</li>
        <li>Customer relationship management</li>
        <li>Discount and promotion creation</li>
        <li>Analytics and reporting</li>
      </ul>
    `,
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
    completedDate: "May 2023",
    featured: true,
    galleryImages: [
      "/images/projects/ecommerce-1.jpg",
      "/images/projects/ecommerce-2.jpg",
      "/images/projects/ecommerce-3.jpg"
    ]
  }
];

// Generate metadata for the page dynamically
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Find the project by slug
  const project = projects.find((project) => project.slug === params.slug);

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

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  // Find the project by slug
  const project = projects.find((project) => project.slug === params.slug);

  // If project not found, return 404
  if (!project) {
    notFound();
  }

  // No need for formatDate since we're using a direct string for completedDate

  return (
    <main className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Back to Projects */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="/projects">
            <Button variant="ghost" className="flex items-center gap-2 text-muted-foreground">
              <FaArrowLeft size={14} />
              Back to Projects
            </Button>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.header
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Project Category and Title */}
          <div className="mb-6">
            <span className="text-accent font-medium">{project.category}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#1A2B40] mt-2 leading-tight">
              {project.title}
            </h1>
          </div>
          
          {/* Project Hero Image */}
          <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden mb-8">
            {/* Placeholder for now - would be actual images in production */}
            <div className="bg-gradient-to-br from-primary/70 to-accent/70 h-full w-full flex items-center justify-center">
              <span className="text-white font-heading text-2xl">
                Hero Image for: {project.title}
              </span>
            </div>
          </div>
          
          {/* Quick Info */}
          <div className="flex flex-wrap justify-between items-center bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-wrap gap-6">
              {/* Completion Date */}
              <div>
                <div className="text-muted-foreground text-sm flex items-center gap-1 mb-1">
                  <FaCalendarAlt size={14} />
                  <span>Completed</span>
                </div>
                <div className="font-medium">{project.completedDate}</div>
              </div>
              
              {/* Category */}
              <div>
                <div className="text-muted-foreground text-sm flex items-center gap-1 mb-1">
                  <FaTag size={14} />
                  <span>Category</span>
                </div>
                <div className="font-medium">{project.category}</div>
              </div>
            </div>
            
            {/* External Links */}
            <div className="flex gap-4 mt-4 md:mt-0">
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="flex items-center gap-2">
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </Button>
                </a>
              )}
              
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="flex items-center gap-2">
                    <FaGithub size={14} />
                    Source Code
                  </Button>
                </a>
              )}
            </div>
          </div>
        </motion.header>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <motion.div 
            className="lg:col-span-8 space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Project Overview */}
            <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
              <h2 className="text-2xl font-heading font-bold text-[#1A2B40] mb-4">
                Project Overview
              </h2>
              <ContentRenderer 
                content={`{"sections":[{"id":"overview","type":"paragraph","order":0,"content":{"text":"${project.overview.replace(/"/g, '\\"')}"}}]}`}
                template="portfolio" 
                animateContent={true}
              />
            </section>
            
            {/* The Challenge */}
            <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
              <h2 className="text-2xl font-heading font-bold text-[#1A2B40] mb-4">
                The Challenge
              </h2>
              <ContentRenderer 
                content={`{"sections":[{"id":"challenge","type":"paragraph","order":0,"content":{"text":"${project.challenge.replace(/"/g, '\\"')}"}}]}`}
                template="portfolio" 
                animateContent={true}
              />
            </section>
            
            {/* The Solution */}
            <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
              <h2 className="text-2xl font-heading font-bold text-[#1A2B40] mb-4">
                The Solution
              </h2>
              <ContentRenderer 
                content={`{"sections":[{"id":"solution","type":"paragraph","order":0,"content":{"text":"${project.solution.replace(/"/g, '\\"')}"}}]}`}
                template="portfolio" 
                animateContent={true}
              />
            </section>
            
            {/* Project Gallery */}
            <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
              <h2 className="text-2xl font-heading font-bold text-[#1A2B40] mb-6">
                Project Gallery
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Placeholder gallery images */}
                {Array(4).fill(0).map((_, i) => (
                  <div 
                    key={i} 
                    className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
                  >
                    <span className="text-gray-500">Gallery Image {i + 1}</span>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
          
          {/* Sidebar */}
          <motion.aside 
            className="lg:col-span-4 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Technologies */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-heading font-semibold text-[#1A2B40] mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Key Features */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-heading font-semibold text-[#1A2B40] mb-4">
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-accent/20 text-accent flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Tags */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-heading font-semibold text-[#1A2B40] mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="bg-primary/10 text-[#1A2B40] px-3 py-1 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Other Projects CTA */}
            <div className="bg-primary text-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Interested in more projects?
              </h3>
              <p className="opacity-90 mb-6">
                Explore my other projects to see more examples of my work in web development, AI integration, and UI/UX design.
              </p>
              <Link href="/projects">
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-[#1A2B40]">
                  View All Projects
                </Button>
              </Link>
            </div>
          </motion.aside>
        </div>
        
        {/* Related Projects */}
        <motion.section 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-heading font-semibold text-[#1A2B40] mb-6">
            More Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => p.id !== project.id).slice(0, 3).map((relatedProject) => (
              <article 
                key={relatedProject.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Project Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  {/* Placeholder for now - would be actual images in production */}
                  <div className="bg-gradient-to-br from-gray-700 to-gray-900 h-full w-full absolute" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-[#1A2B40] mb-2">
                    {relatedProject.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {relatedProject.description}
                  </p>
                  
                  <Link href={`/projects/${relatedProject.slug}`}>
                    <Button>
                      View Project
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </motion.section>
        
        {/* Contact CTA */}
        <motion.section 
          className="mt-16 bg-primary text-white p-8 rounded-xl shadow-md text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl font-heading font-semibold mb-4">
            Have a project in mind?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how I can help bring your ideas to life with modern web technologies and AI integration.
          </p>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#1A2B40]">
              Get in Touch
            </Button>
          </Link>
        </motion.section>
      </div>
    </main>
  );
}
