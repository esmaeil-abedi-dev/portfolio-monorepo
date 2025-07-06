'use client';

import { motion } from 'framer-motion';

import { BlogPostCard } from './BlogPostCard';

export default function BlogPageClient({ posts }: { posts: any[] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto max-w-5xl px-4 py-16"
    >
      <div className="flex flex-col items-start">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="mt-2 text-lg text-gray-400">
          My thoughts on web development, AI, and more.
        </p>
      </div>
      <div className="my-8 h-px w-full bg-gray-800" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {posts.map((post: any) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </motion.div>
  );
}
