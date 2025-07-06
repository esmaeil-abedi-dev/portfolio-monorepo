'use client';

import Link from "next/link";

export function BlogPostCard({ post }: { post: any }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="rounded-lg border p-4">
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <p className="mt-2 text-gray-400">{post.excerpt}</p>
      </div>
    </Link>
  );
}
