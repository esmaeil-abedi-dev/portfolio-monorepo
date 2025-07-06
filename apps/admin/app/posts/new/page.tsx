import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FaSave, FaTimes, FaImage } from "react-icons/fa";
import ContentEditor from "@/components/content/ContentEditor";

export const metadata: Metadata = {
  title: "New Post | Esmaeil Abedi Admin",
  description: "Create a new blog post for Esmaeil Abedi's personal website",
};

export default function NewPostPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">New Blog Post</h1>
        <div className="flex gap-2">
          <Link href="/posts">
            <Button variant="outline" className="flex items-center gap-2">
              <FaTimes size={14} />
              Cancel
            </Button>
          </Link>
          <Button className="flex items-center gap-2">
            <FaSave size={14} />
            Save Post
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Post Title */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Post Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="Enter post title"
            />
          </div>
          
          {/* Post Content */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Content
            </label>
            <ContentEditor
              onChange={(content) => console.log(content)}
              initialContent=""
            />
            {/* Placeholder for rich text editor */}
            <div className="border border-gray-300 rounded-md min-h-[500px] p-4">
              <p className="text-gray-500">
                Rich Text Editor would be integrated here. The actual implementation would use react-quill or a similar editor component.
              </p>
            </div>
          </div>
          
          {/* SEO Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium text-gray-800 mb-4">SEO</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="meta-title" className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Title
                </label>
                <input
                  type="text"
                  id="meta-title"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Meta title for SEO"
                />
              </div>
              
              <div>
                <label htmlFor="meta-description" className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Description
                </label>
                <textarea
                  id="meta-description"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Meta description for SEO"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-2">
                  URL Slug
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    blog/
                  </span>
                  <input
                    type="text"
                    id="slug"
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:outline-none focus:ring-accent focus:border-accent"
                    placeholder="your-post-slug"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Post Settings */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Post Settings</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  id="status"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="publishDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Publish Date
                </label>
                <input
                  type="date"
                  id="publishDate"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">Featured Post</span>
                </label>
              </div>
              
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">Allow Comments</span>
                </label>
              </div>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Featured Image</h2>
            
            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center">
              <FaImage size={40} className="text-gray-400 mb-4" />
              <p className="text-sm text-gray-500 text-center mb-4">
                Drag and drop an image here, or click to select a file
              </p>
              <Button variant="outline" size="sm">
                Select Image
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Recommended size: 1200x630px. Max file size: 2MB.
            </p>
          </div>
          
          {/* Categories & Tags */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Categories & Tags</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                >
                  <option value="">Select a category</option>
                  <option value="development">Development</option>
                  <option value="design">Design</option>
                  <option value="ai">Artificial Intelligence</option>
                  <option value="tutorials">Tutorials</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <input
                  type="text"
                  id="tags"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Enter tags separated by commas"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Example: React, Next.js, TypeScript
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
