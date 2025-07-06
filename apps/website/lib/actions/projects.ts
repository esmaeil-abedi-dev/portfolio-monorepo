
import { Project } from "@/types/project";

// Mock project data (would be fetched from an API/CMS in production)
const projects: Project[] = [
  {
    id: "ai-powered-dashboard",
    title: "AI-Powered Analytics Dashboard",
    slug: "ai-powered-dashboard",
    category: "Web Application",
    tags: ["React", "TypeScript", "TensorFlow.js", "D3.js"],
    image: "/images/projects/dashboard.jpg",
    description:
      "An analytics dashboard with AI-powered insights, interactive visualizations, and predictive analytics features to help businesses make data-driven decisions.",
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
      "Real-time data processing",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "TensorFlow.js",
      "D3.js",
      "WebSockets",
    ],
    demoUrl: "https://dashboard-demo.esmaeilabedi.dev",
    repoUrl: "https://github.com/esmaeilabedi/ai-dashboard",
    completedDate: "June 2023",
    featured: true,
    galleryImages: [
      "/images/projects/dashboard-1.jpg",
      "/images/projects/dashboard-2.jpg",
      "/images/projects/dashboard-3.jpg",
    ],
  },
  {
    id: "e-commerce-platform",
    title: "Modern E-Commerce Platform",
    slug: "e-commerce-platform",
    category: "Web Application",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    image: "/images/projects/ecommerce.jpg",
    description:
      "A fully responsive e-commerce platform with modern design, seamless checkout experience, and comprehensive admin dashboard for product management.",
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
      "Order tracking and history",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe API",
      "MongoDB",
      "NextAuth.js",
    ],
    demoUrl: "https://ecommerce-demo.esmaeilabedi.dev",
    repoUrl: "https://github.com/esmaeilabedi/modern-ecommerce",
    completedDate: "May 2023",
    featured: true,
    galleryImages: [
      "/images/projects/ecommerce-1.jpg",
      "/images/projects/ecommerce-2.jpg",
      "/images/projects/ecommerce-3.jpg",
    ],
  },
];

export async function getProjects(): Promise<Project[]> {
  // In a real app, you would fetch this from a database or CMS
  return Promise.resolve(projects);
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  // In a real app, you would fetch this from a database or CMS
  const project = projects.find((p) => p.slug === slug);
  return Promise.resolve(project);
}
