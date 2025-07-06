'use client';

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FaSave, FaTimes, FaImage, FaTrash, FaGithub, FaGlobe } from "react-icons/fa";
import ContentEditor from "@/components/content/ContentEditor";

// Mock data for the project being edited
const mockProjects = {
  "project-1": {
    id: "project-1",
    title: "AI-Powered Task Manager",
    slug: "ai-task-manager",
    description: "A task management application with AI features for intelligent task prioritization and scheduling.",
    content: "# AI-Powered Task Manager\n\nThis project is a task management application that leverages artificial intelligence to help users prioritize and schedule their tasks more effectively.\n\n## Technologies Used\n\n- **Frontend**: React, TypeScript, Tailwind CSS\n- **Backend**: Node.js, Express\n- **AI**: TensorFlow.js for task prioritization\n- **Database**: MongoDB\n\n## Key Features\n\n- **Intelligent Task Prioritization**: The app uses machine learning to suggest which tasks should be prioritized based on deadlines, importance, and user behavior patterns.\n- **Smart Scheduling**: Automatically suggests optimal time slots for tasks based on user's productivity patterns.\n- **Natural Language Processing**: Users can add tasks using natural language inputs like \"Finish the report by tomorrow evening.\"\n- **Productivity Analytics**: Detailed insights into productivity patterns and task completion rates.\n\n## Project Challenges\n\nOne of the biggest challenges was implementing the machine learning model for task prioritization that could work efficiently in a browser environment. We overcame this by using TensorFlow.js and pre-training the model with common task patterns.\n\n## Future Enhancements\n\n- Integration with calendar apps\n- Voice input for adding tasks\n- Team collaboration features",
    status: "completed",
    completedAt: "2023-09-15",
    featuredImage: "/images/projects/ai-task-manager.jpg",
    technologies: ["React", "TypeScript", "Node.js", "TensorFlow.js", "MongoDB"],
    githubUrl: "https://github.com/esmaeilabedi/ai-task-manager",
    liveUrl: "https://ai-task-manager.example.com",
    category: "AI/ML"
  },
  "project-2": {
    id: "project-2",
    title: "E-commerce Platform with AR Product Visualization",
    slug: "ar-ecommerce",
    description: "An e-commerce platform that allows users to visualize products in their environment using Augmented Reality.",
    content: "# E-commerce Platform with AR Product Visualization\n\nThis project is an e-commerce platform that integrates Augmented Reality (AR) technology to enhance the shopping experience by allowing users to visualize products in their real-world environment before making a purchase decision.\n\n## Technologies Used\n\n- **Frontend**: React, Next.js, Three.js\n- **Backend**: Node.js, GraphQL\n- **AR**: WebXR, AR.js\n- **Database**: PostgreSQL\n- **Payment Processing**: Stripe API\n\n## Key Features\n\n- **AR Product Visualization**: Users can see how furniture, decor, and other products would look in their space using their device's camera.\n- **3D Product Models**: Detailed 3D models for all products with accurate dimensions and textures.\n- **Seamless Checkout**: Streamlined purchasing process with various payment options.\n- **User Reviews with AR Photos**: Users can share photos of products in their space as part of reviews.\n\n## Project Challenges\n\nIntegrating AR technology into a web-based platform was challenging due to cross-browser compatibility issues and performance optimization for mobile devices. We solved this by creating adaptive implementations for different browsers and devices.\n\n## Future Enhancements\n\n- Social sharing of AR visualizations\n- AR-based measurements for better product fit\n- Virtual showroom experience",
    status: "in_progress",
    completedAt: "",
    featuredImage: "/images/projects/ar-ecommerce.jpg",
    technologies: ["React", "Next.js", "Three.js", "WebXR", "Node.js", "GraphQL", "PostgreSQL"],
    githubUrl: "https://github.com/esmaeilabedi/ar-ecommerce",
    liveUrl: "https://ar-ecommerce.example.com",
    category: "E-commerce"
  }
};

export default function EditProjectPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;
  
  // State for form data
  const [project, setProject] = useState({
    id: "",
    title: "",
    slug: "",
    description: "",
    content: "",
    status: "in_progress",
    completedAt: "",
    featuredImage: "",
    technologies: [] as string[],
    githubUrl: "",
    liveUrl: "",
    category: ""
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [techInput, setTechInput] = useState("");
  
  // Fetch project data
  useEffect(() => {
    // In a real app, you would fetch from API
    // For now, we use mock data
    if (mockProjects[projectId]) {
      setProject(mockProjects[projectId]);
    }
    setIsLoading(false);
  }, [projectId]);
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProject(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle content editor changes
  const handleContentChange = (content: string) => {
    setProject(prev => ({
      ...prev,
      content
    }));
  };
  
  // Handle adding a new technology
  const handleAddTech = () => {
    if (techInput.trim() && !project.technologies.includes(techInput.trim())) {
      setProject(prev => ({
        ...prev,
        technologies: [...prev.technologies, techInput.trim()]
      }));
      setTechInput("");
    }
  };
  
  // Handle removing a technology
  const handleRemoveTech = (techToRemove: string) => {
    setProject(prev => ({
      ...prev,
      technologies: prev.technologies.filter(tech => tech !== techToRemove)
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving project:", project);
    // In a real app, you would send data to API
    // Then redirect after successful save
    router.push("/projects");
  };
  
  if (isLoading) {
    return <div className="p-6">Loading...</div>;
  }
  
  if (!project.id) {
    return <div className="p-6">Project not found</div>;
  }
  
  return (
    <div className="p-6">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Edit Project: {project.title}</h1>
          <div className="flex gap-2">
            <Link href="/projects">
              <Button type="button" variant="outline" className="flex items-center gap-2">
                <FaTimes size={14} />
                Cancel
              </Button>
            </Link>
            <Button type="submit" className="flex items-center gap-2">
              <FaSave size={14} />
              Save Changes
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Title */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Project Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={project.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Enter project title"
                required
              />
            </div>
            
            {/* Project Description */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Short Description
              </label>
              <textarea
                id="description"
                name="description"
                value={project.description}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Enter a brief description of the project"
                required
              ></textarea>
            </div>
            
            {/* Project Content */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Detailed Description
              </label>
              <ContentEditor initialValue={project.content} onChange={handleContentChange} />
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status and Project Settings */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-medium text-gray-800 mb-4">Project Settings</h2>
              
              {/* Status */}
              <div className="mb-4">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={project.status}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                >
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
              
              {/* Completion Date */}
              {project.status === "completed" && (
                <div className="mb-4">
                  <label htmlFor="completedAt" className="block text-sm font-medium text-gray-700 mb-1">
                    Completion Date
                  </label>
                  <input
                    type="date"
                    id="completedAt"
                    name="completedAt"
                    value={project.completedAt}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
              )}
              
              {/* Category */}
              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={project.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="e.g., Web App, Mobile, AI/ML"
                />
              </div>
              
              {/* Slug */}
              <div>
                <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
                  URL Slug
                </label>
                <input
                  type="text"
                  id="slug"
                  name="slug"
                  value={project.slug}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="project-url-slug"
                  required
                />
              </div>
            </div>
            
            {/* Links */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-medium text-gray-800 mb-4">Project Links</h2>
              
              {/* GitHub URL */}
              <div className="mb-4">
                <label htmlFor="githubUrl" className="block text-sm font-medium text-gray-700 mb-1">
                  <FaGithub className="inline mr-1" /> GitHub Repository URL
                </label>
                <input
                  type="text"
                  id="githubUrl"
                  name="githubUrl"
                  value={project.githubUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="https://github.com/username/repo"
                />
              </div>
              
              {/* Live URL */}
              <div>
                <label htmlFor="liveUrl" className="block text-sm font-medium text-gray-700 mb-1">
                  <FaGlobe className="inline mr-1" /> Live Project URL
                </label>
                <input
                  type="text"
                  id="liveUrl"
                  name="liveUrl"
                  value={project.liveUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="https://example.com"
                />
              </div>
            </div>
            
            {/* Featured Image */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-medium text-gray-800 mb-4">Featured Image</h2>
              
              {project.featuredImage ? (
                <div className="mb-4">
                  <div className="aspect-video bg-gray-100 rounded-md overflow-hidden relative">
                    <img 
                      src={project.featuredImage} 
                      alt="Featured" 
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                      onClick={() => setProject(prev => ({ ...prev, featuredImage: "" }))}
                    >
                      <FaTrash size={12} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mb-4">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center rounded-md">
                    <Button type="button" variant="outline" className="flex items-center gap-2">
                      <FaImage size={14} />
                      Select Image
                    </Button>
                  </div>
                </div>
              )}
              
              <div>
                <label htmlFor="featuredImage" className="block text-sm font-medium text-gray-700 mb-1">
                  Image URL
                </label>
                <input
                  type="text"
                  id="featuredImage"
                  name="featuredImage"
                  value={project.featuredImage}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>
            
            {/* Technologies */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-medium text-gray-800 mb-4">Technologies Used</h2>
              
              <div className="flex mb-2">
                <input
                  type="text"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Add a technology"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTech())}
                />
                <Button 
                  type="button"
                  onClick={handleAddTech}
                  className="rounded-l-none"
                >
                  Add
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map(tech => (
                  <div 
                    key={tech} 
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                  >
                    {tech}
                    <button
                      type="button"
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => handleRemoveTech(tech)}
                    >
                      ×
                    </button>
                  </div>
                ))}
                {project.technologies.length === 0 && (
                  <span className="text-gray-400 text-sm">No technologies added yet</span>
                )}
              </div>
            </div>
            
            {/* Danger Zone */}
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h2 className="font-medium text-red-800 mb-3">Danger Zone</h2>
              <p className="text-sm text-red-600 mb-3">
                Deleting a project is permanent and cannot be undone.
              </p>
              <Button
                type="button"
                variant="danger"
                className="flex items-center gap-2 w-full justify-center"
                onClick={() => {
                  if (window.confirm("Are you sure you want to delete this project? This action cannot be undone.")) {
                    console.log("Deleting project:", projectId);
                    // In a real app, you would delete via API
                    router.push("/projects");
                  }
                }}
              >
                <FaTrash size={14} />
                Delete Project
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
