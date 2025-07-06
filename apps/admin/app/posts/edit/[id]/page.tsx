'use client';

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FaSave, FaTimes, FaImage, FaTrash } from "react-icons/fa";
import ContentEditor from "@/components/content/ContentEditor";

// Mock data for the post being edited
const mockPosts = {
  "post-1": {
    id: "post-1",
    title: "Integrating AI Features into Next.js Applications",
    slug: "integrating-ai-features-into-nextjs-applications",
    excerpt: "A comprehensive guide to adding AI capabilities to your Next.js applications using TensorFlow.js, OpenAI API, and other tools.",
    content: "# Integrating AI Features into Next.js Applications\n\nNext.js has become one of the most popular React frameworks for building modern web applications. Its server-side rendering capabilities, static site generation, and API routes make it a powerful choice for developers.\n\nIn this post, we'll explore how to add artificial intelligence features to your Next.js applications.\n\n## Getting Started with TensorFlow.js\n\nTensorFlow.js is a library for machine learning in JavaScript. It allows you to define, train, and run machine learning models entirely in the browser.\n\n```javascript\nimport * as tf from '@tensorflow/tfjs';\n\n// Define a simple model\nconst model = tf.sequential();\nmodel.add(tf.layers.dense({units: 1, inputShape: [1]}));\n\n// Compile the model\nmodel.compile({loss: 'meanSquaredError', optimizer: 'sgd'});\n\n// Generate some synthetic data\nconst xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);\nconst ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);\n\n// Train the model\nawait model.fit(xs, ys, {epochs: 10});\n\n// Use the model to make predictions\nconst output = model.predict(tf.tensor2d([5], [1, 1]));\nconsole.log(output.dataSync());\n```\n\n## Using the OpenAI API\n\nNext.js API routes provide a perfect way to securely interact with the OpenAI API.",
    status: "published",
    publishedAt: "2023-06-15",
    featuredImage: "/images/blog/ai-nextjs.jpg",
    tags: ["Next.js", "AI", "TensorFlow.js"]
  },
  "post-2": {
    id: "post-2",
    title: "TypeScript Best Practices for Front-End Developers in 2023",
    slug: "typescript-best-practices-for-frontend-developers",
    excerpt: "Learn how to write clean, maintainable TypeScript code with these modern best practices for front-end development.",
    content: "# TypeScript Best Practices for Front-End Developers\n\nTypeScript has revolutionized front-end development by bringing static typing to JavaScript. Here are some best practices for using TypeScript in your projects in 2023.\n\n## Use Strict Type Checking\n\nAlways enable strict type checking in your `tsconfig.json`:\n\n```json\n{\n  \"compilerOptions\": {\n    \"strict\": true\n  }\n}\n```\n\n## Leverage Type Inference\n\nTypeScript's type inference is powerful. Use it when possible instead of explicitly typing everything:\n\n```typescript\n// Good - TypeScript infers the type\nconst user = {\n  name: 'John',\n  age: 30\n};\n\n// Unnecessary explicit typing\nconst user: { name: string; age: number } = {\n  name: 'John',\n  age: 30\n};\n```\n\n## Use Interfaces for Object Shapes\n\n```typescript\ninterface User {\n  id: string;\n  name: string;\n  email: string;\n  age?: number; // Optional property\n}\n\nfunction getUserInfo(user: User): string {\n  return `${user.name} (${user.email})`;\n}\n```",
    status: "published",
    publishedAt: "2023-05-20",
    featuredImage: "/images/blog/typescript.jpg",
    tags: ["TypeScript", "Front-End"]
  }
};

export default function EditPostPage() {
  const params = useParams();
  const router = useRouter();
  const postId = params.id as string;
  
  // State for form data
  const [post, setPost] = useState({
    id: "",
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    status: "draft",
    publishedAt: "",
    featuredImage: "",
    tags: [] as string[]
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [tagInput, setTagInput] = useState("");
  
  // Fetch post data
  useEffect(() => {
    // In a real app, you would fetch from API
    // For now, we use mock data
    if (mockPosts[postId]) {
      setPost(mockPosts[postId]);
    }
    setIsLoading(false);
  }, [postId]);
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPost(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle content editor changes
  const handleContentChange = (content: string) => {
    setPost(prev => ({
      ...prev,
      content
    }));
  };
  
  // Handle adding a new tag
  const handleAddTag = () => {
    if (tagInput.trim() && !post.tags.includes(tagInput.trim())) {
      setPost(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput("");
    }
  };
  
  // Handle removing a tag
  const handleRemoveTag = (tagToRemove: string) => {
    setPost(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving post:", post);
    // In a real app, you would send data to API
    // Then redirect after successful save
    router.push("/posts");
  };
  
  if (isLoading) {
    return <div className="p-6">Loading...</div>;
  }
  
  if (!post.id) {
    return <div className="p-6">Post not found</div>;
  }
  
  return (
    <div className="p-6">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Edit Post: {post.title}</h1>
          <div className="flex gap-2">
            <Link href="/posts">
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
            {/* Post Title */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Post Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={post.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Enter post title"
                required
              />
            </div>
            
            {/* Post Excerpt */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                Excerpt / Summary
              </label>
              <textarea
                id="excerpt"
                name="excerpt"
                value={post.excerpt}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Enter a brief summary of the post"
                required
              ></textarea>
            </div>
            
            {/* Post Content */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Content
              </label>
              <ContentEditor initialValue={post.content} onChange={handleContentChange} />
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status and Publish Settings */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-medium text-gray-800 mb-4">Publish Settings</h2>
              
              {/* Status */}
              <div className="mb-4">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={post.status}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
              
              {/* Publish Date */}
              <div className="mb-4">
                <label htmlFor="publishedAt" className="block text-sm font-medium text-gray-700 mb-1">
                  Publish Date
                </label>
                <input
                  type="date"
                  id="publishedAt"
                  name="publishedAt"
                  value={post.publishedAt}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
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
                  value={post.slug}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="enter-url-slug"
                  required
                />
              </div>
            </div>
            
            {/* Featured Image */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-medium text-gray-800 mb-4">Featured Image</h2>
              
              {post.featuredImage ? (
                <div className="mb-4">
                  <div className="aspect-video bg-gray-100 rounded-md overflow-hidden relative">
                    <img 
                      src={post.featuredImage} 
                      alt="Featured" 
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                      onClick={() => setPost(prev => ({ ...prev, featuredImage: "" }))}
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
                  value={post.featuredImage}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>
            
            {/* Tags */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-medium text-gray-800 mb-4">Tags</h2>
              
              <div className="flex mb-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Add a tag"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                />
                <Button 
                  type="button"
                  onClick={handleAddTag}
                  className="rounded-l-none"
                >
                  Add
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-3">
                {post.tags.map(tag => (
                  <div 
                    key={tag} 
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                  >
                    {tag}
                    <button
                      type="button"
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => handleRemoveTag(tag)}
                    >
                      ×
                    </button>
                  </div>
                ))}
                {post.tags.length === 0 && (
                  <span className="text-gray-400 text-sm">No tags added yet</span>
                )}
              </div>
            </div>
            
            {/* Danger Zone */}
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h2 className="font-medium text-red-800 mb-3">Danger Zone</h2>
              <p className="text-sm text-red-600 mb-3">
                Deleting a post is permanent and cannot be undone.
              </p>
              <Button
                type="button"
                variant="danger"
                className="flex items-center gap-2 w-full justify-center"
                onClick={() => {
                  if (window.confirm("Are you sure you want to delete this post? This action cannot be undone.")) {
                    console.log("Deleting post:", postId);
                    // In a real app, you would delete via API
                    router.push("/posts");
                  }
                }}
              >
                <FaTrash size={14} />
                Delete Post
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
