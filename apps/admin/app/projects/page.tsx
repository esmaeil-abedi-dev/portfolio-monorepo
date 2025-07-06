import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FaPlus, FaEdit, FaTrash, FaEye } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Projects | Esmaeil Abedi Admin",
  description: "Manage projects for Esmaeil Abedi's personal website",
};

// Mock projects data
const projects = [
  {
    id: "project-1",
    title: "AI-Powered Analytics Dashboard",
    slug: "ai-powered-dashboard",
    category: "Web Application",
    tags: ["React", "TypeScript", "TensorFlow.js", "D3.js"],
    status: "published",
    publishedAt: "2023-06-15",
    featured: true
  },
  {
    id: "project-2",
    title: "Modern E-Commerce Platform",
    slug: "e-commerce-platform",
    category: "Web Application",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    status: "published",
    publishedAt: "2023-05-10",
    featured: true
  },
  {
    id: "project-3",
    title: "AI Content Generator",
    slug: "ai-content-generator",
    category: "AI Tool",
    tags: ["React", "Node.js", "OpenAI API", "Express"],
    status: "published",
    publishedAt: "2023-03-22",
    featured: true
  },
  {
    id: "project-4",
    title: "Personal Portfolio Website",
    slug: "portfolio-website",
    category: "Website",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "published",
    publishedAt: "2023-01-15",
    featured: false
  },
  {
    id: "project-5",
    title: "Interactive Weather Application",
    slug: "weather-app",
    category: "Web Application",
    tags: ["React", "JavaScript", "Weather API", "CSS"],
    status: "published",
    publishedAt: "2022-12-10",
    featured: false
  },
  {
    id: "project-6",
    title: "Task Management Application",
    slug: "task-management",
    category: "Web Application",
    tags: ["React", "Firebase", "Material UI", "Redux"],
    status: "published",
    publishedAt: "2022-10-05",
    featured: false
  },
  {
    id: "project-7",
    title: "Portfolio Website Redesign",
    slug: "portfolio-redesign",
    category: "Website",
    tags: ["Next.js", "TypeScript", "Design"],
    status: "draft",
    publishedAt: null,
    featured: false
  }
];

export default function ProjectsPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Projects</h1>
        <Link href="/projects/new">
          <Button className="flex items-center gap-2">
            <FaPlus size={14} />
            New Project
          </Button>
        </Link>
      </div>
      
      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search</label>
            <input
              type="text"
              id="search"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="Search projects..."
            />
          </div>
          
          <div className="w-40">
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              id="status"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            >
              <option value="">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>
          
          <div className="w-40">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              id="category"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            >
              <option value="">All Categories</option>
              <option value="web-application">Web Application</option>
              <option value="ai-tool">AI Tool</option>
              <option value="website">Website</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <Button variant="outline">
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
      
      {/* Projects Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Project
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Featured
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-gray-900">
                        {project.title}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs bg-gray-100 rounded-full">
                      {project.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      project.status === 'published' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status === 'published' ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {project.publishedAt || '—'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {project.featured ? (
                      <span className="text-green-600">Yes</span>
                    ) : (
                      <span>No</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <Link href={`/projects/${project.id}`}>
                        <Button variant="ghost" size="sm" className="text-blue-600">
                          <FaEye size={16} />
                        </Button>
                      </Link>
                      <Link href={`/projects/${project.id}/edit`}>
                        <Button variant="ghost" size="sm" className="text-amber-600">
                          <FaEdit size={16} />
                        </Button>
                      </Link>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        <FaTrash size={16} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">7</span> of <span className="font-medium">7</span> results
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
