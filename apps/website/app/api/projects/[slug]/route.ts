import { NextRequest, NextResponse } from 'next/server';

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

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    
    // Find the project with the matching slug
    const project = projects.find((project) => project.slug === slug);
    
    if (!project) {
      return NextResponse.json(
        { 
          error: "Project not found",
          success: false 
        }, 
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { 
        project,
        success: true 
      }, 
      { status: 200 }
    );
  } catch (error) {
    console.error(`Error fetching project with slug: ${params.slug}`, error);
    return NextResponse.json(
      { 
        error: "Failed to fetch project",
        success: false 
      }, 
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    
    // Find the project with the matching slug
    const projectIndex = projects.findIndex((project) => project.slug === slug);
    
    if (projectIndex === -1) {
      return NextResponse.json(
        { 
          error: "Project not found",
          success: false 
        }, 
        { status: 404 }
      );
    }
    
    // Get the update data from request body
    const body = await request.json();
    
    // In a real app, we would update the project in the database
    // For this mock, we'll just pretend we updated it
    const updatedProject = {
      ...projects[projectIndex],
      ...body,
      // Preserve the original ID and slug
      id: projects[projectIndex].id,
      slug: projects[projectIndex].slug,
    };
    
    return NextResponse.json(
      { 
        project: updatedProject,
        success: true 
      }, 
      { status: 200 }
    );
  } catch (error) {
    console.error(`Error updating project with slug: ${params.slug}`, error);
    return NextResponse.json(
      { 
        error: "Failed to update project",
        success: false 
      }, 
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    
    // Find the project with the matching slug
    const projectIndex = projects.findIndex((project) => project.slug === slug);
    
    if (projectIndex === -1) {
      return NextResponse.json(
        { 
          error: "Project not found",
          success: false 
        }, 
        { status: 404 }
      );
    }
    
    // In a real app, we would delete the project from the database
    // For this mock, we'll just pretend we deleted it
    
    return NextResponse.json(
      { 
        success: true,
        message: `Project '${slug}' successfully deleted`
      }, 
      { status: 200 }
    );
  } catch (error) {
    console.error(`Error deleting project with slug: ${params.slug}`, error);
    return NextResponse.json(
      { 
        error: "Failed to delete project",
        success: false 
      }, 
      { status: 500 }
    );
  }
}
