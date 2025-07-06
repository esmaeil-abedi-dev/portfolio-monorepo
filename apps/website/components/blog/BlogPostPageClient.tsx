'use client';

import { motion } from 'framer-motion';

export default function BlogPostPageClient({ post }: { post: any }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto max-w-5xl px-4 py-16"
    >
      <div className="flex flex-col items-start">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="mt-2 text-lg text-gray-400">{post.excerpt}</p>
      </div>
      <div className="my-8 h-px w-full bg-gray-800" />
      <div
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </motion.div>
  );
}
