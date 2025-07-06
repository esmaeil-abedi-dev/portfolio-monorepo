import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FaPlus, FaEdit, FaTrash, FaEye } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Posts | Esmaeil Abedi Admin",
  description: "Manage blog posts for Esmaeil Abedi's personal website",
};

// Mock blog posts data
const posts = [
  {
    id: "post-1",
    title: "Integrating AI Features into Next.js Applications",
    slug: "integrating-ai-features-into-nextjs-applications",
    excerpt: "A comprehensive guide to adding AI capabilities to your Next.js applications using TensorFlow.js, OpenAI API, and other tools.",
    status: "published",
    publishedAt: "2023-06-15",
    tags: ["Next.js", "AI", "TensorFlow.js"]
  },
  {
    id: "post-2",
    title: "TypeScript Best Practices for Front-End Developers in 2023",
    slug: "typescript-best-practices-for-frontend-developers",
    excerpt: "Learn how to write clean, maintainable TypeScript code with these modern best practices for front-end development.",
    status: "published",
    publishedAt: "2023-05-20",
    tags: ["TypeScript", "Front-End"]
  },
  {
    id: "post-3",
    title: "Tailwind CSS vs. Traditional CSS: Pros and Cons",
    slug: "tailwind-css-vs-traditional-css",
    excerpt: "An in-depth comparison of utility-first CSS frameworks like Tailwind versus traditional CSS approaches for modern web development.",
    status: "published",
    publishedAt: "2023-04-10",
    tags: ["CSS", "Tailwind"]
  },
  {
    id: "post-4",
    title: "Creating Smooth UI Animations with Framer Motion and React",
    slug: "creating-smooth-ui-animations-with-framer-motion",
    excerpt: "How to implement beautiful, performance-optimized animations in your React applications using Framer Motion.",
    status: "published",
    publishedAt: "2023-03-15",
    tags: ["React", "Animation", "Framer Motion"]
  },
  {
    id: "post-5",
    title: "AI Ethics Considerations for Front-End Developers",
    slug: "ai-ethics-considerations-for-frontend-developers",
    excerpt: "Exploring the ethical implications of implementing AI features in web interfaces and how developers can ensure responsible integration.",
    status: "published",
    publishedAt: "2023-02-28",
    tags: ["AI", "Ethics", "Front-End"]
  },
  {
    id: "post-6",
    title: "Building Accessible Web Applications",
    slug: "building-accessible-web-applications",
    status: "draft",
    publishedAt: null,
    tags: ["Accessibility", "WCAG", "Inclusive Design"]
  },
  {
    id: "post-7",
    title: "Modern State Management in React",
    slug: "modern-state-management-in-react",
    status: "draft",
    publishedAt: null,
    tags: ["React", "State Management"]
  }
];

export default function PostsPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Blog Posts</h1>
        <Link href="/posts/new">
          <Button className="flex items-center gap-2">
            <FaPlus size={14} />
            New Post
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
              placeholder="Search posts..."
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
            <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
            <select
              id="sort"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <Button variant="outline">
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
      
      {/* Posts Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tags
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-gray-900">
                        {post.title}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      post.status === 'published' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.status === 'published' ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {post.publishedAt || '—'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {post.tags && post.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-gray-100 rounded-full">
                          {tag}
                        </span>
                      ))}
                      {post.tags && post.tags.length > 2 && (
                        <span className="px-2 py-1 text-xs bg-gray-100 rounded-full">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <Link href={`/posts/${post.id}`}>
                        <Button variant="ghost" size="sm" className="text-blue-600">
                          <FaEye size={16} />
                        </Button>
                      </Link>
                      <Link href={`/posts/${post.id}/edit`}>
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
