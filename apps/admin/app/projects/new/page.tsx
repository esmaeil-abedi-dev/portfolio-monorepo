'use client';

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FaSave, FaTimes, FaImage, FaGithub, FaGlobe } from "react-icons/fa";

// Metadata now imported from metadata.ts file

export default function NewProjectPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">New Project</h1>
        <div className="flex gap-2">
          <Link href="/projects">
            <Button variant="outline" className="flex items-center gap-2">
              <FaTimes size={14} />
              Cancel
            </Button>
          </Link>
          <Button className="flex items-center gap-2">
            <FaSave size={14} />
            Save Project
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="Enter project title"
            />
          </div>
          
          {/* Project Description */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            {/* Placeholder for rich text editor */}
            <div className="border border-gray-300 rounded-md min-h-[300px] p-4">
              <p className="text-gray-500">
                Rich Text Editor would be integrated here. The actual implementation would use react-quill or a similar editor component.
              </p>
            </div>
          </div>

          {/* Technical Details */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Technical Details</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="tech-stack" className="block text-sm font-medium text-gray-700 mb-2">
                  Technology Stack
                </label>
                <textarea
                  id="tech-stack"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Describe the technology stack used in this project"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="challenges" className="block text-sm font-medium text-gray-700 mb-2">
                  Challenges & Solutions
                </label>
                <textarea
                  id="challenges"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Describe challenges faced and solutions implemented"
                ></textarea>
              </div>
            </div>
          </div>
          
          {/* Project Links */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Project Links</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="live-url" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <FaGlobe size={14} />
                  Live Demo URL
                </label>
                <input
                  type="text"
                  id="live-url"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="https://example.com"
                />
              </div>
              
              <div>
                <label htmlFor="github-url" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <FaGithub size={14} />
                  GitHub Repository
                </label>
                <input
                  type="text"
                  id="github-url"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="https://github.com/username/repo"
                />
              </div>
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
                    projects/
                  </span>
                  <input
                    type="text"
                    id="slug"
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:outline-none focus:ring-accent focus:border-accent"
                    placeholder="your-project-slug"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Project Settings */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Project Settings</h2>
            
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
                  Completion Date
                </label>
                <input
                  type="date"
                  id="publishDate"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                >
                  <option value="">Select a category</option>
                  <option value="web-application">Web Application</option>
                  <option value="ai-tool">AI Tool</option>
                  <option value="website">Website</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="design">Design</option>
                </select>
              </div>
              
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">Featured Project</span>
                </label>
              </div>
            </div>
          </div>
          
          {/* Project Thumbnail */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Project Thumbnail</h2>
            
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
              Recommended size: 800x600px. Max file size: 2MB.
            </p>
          </div>
          
          {/* Project Gallery */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Project Gallery</h2>
            
            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center">
              <FaImage size={40} className="text-gray-400 mb-4" />
              <p className="text-sm text-gray-500 text-center mb-4">
                Drag and drop images here, or click to select files
              </p>
              <Button variant="outline" size="sm">
                Select Images
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Add multiple images to showcase your project. Max 10 images.
            </p>
            
            {/* Gallery preview would go here */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {/* Empty state - would be filled with uploaded images */}
            </div>
          </div>
          
          {/* Tags */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Tags</h2>
            
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
  );
}
