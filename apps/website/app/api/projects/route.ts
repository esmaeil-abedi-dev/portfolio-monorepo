import { NextResponse } from 'next/server';

// Mock projects data (in a real app, this would come from a database)
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
    completedDate: "June 2023",
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
    completedDate: "May 2023",
    featured: true
  }
  // Additional projects would be here...
];

export async function GET() {
  try {
    // Return all projects
    return NextResponse.json(
      { 
        projects,
        success: true 
      }, 
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { 
        error: "Failed to fetch projects",
        success: false 
      }, 
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    // In a real application, we would:
    // 1. Validate the user is authenticated and authorized
    // 2. Validate the request body
    // 3. Save the new project to the database
    // 4. Return the created project

    const body = await request.json();
    
    // Simple validation
    if (!body.title || !body.description) {
      return NextResponse.json(
        { 
          error: "Title and description are required",
          success: false 
        }, 
        { status: 400 }
      );
    }

    // Mock creating a new project
    const newProject = {
      id: `project-${Date.now()}`,
      slug: body.slug || body.title.toLowerCase().replace(/\s+/g, '-'),
      completedDate: body.completedDate || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' }),
      ...body
    };

    // In a real app, we would save to database here

    return NextResponse.json(
      { 
        project: newProject,
        success: true 
      }, 
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { 
        error: "Failed to create project",
        success: false 
      }, 
      { status: 500 }
    );
  }
}
