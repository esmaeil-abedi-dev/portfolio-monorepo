import { Metadata } from "next";

import BlogPageClient from "@/components/blog/BlogPageClient";
import { getAllPosts } from "@/lib/actions/posts";

export const metadata: Metadata = {
  title: "Blog | Esmaeil Abedi",
  description:
    "Articles, tutorials, and insights about front-end development, AI, and the tech industry by Esmaeil Abedi.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  return <BlogPageClient posts={posts} />;
}
