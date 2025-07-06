import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";

// Example blog post data - in a real scenario, this would come from an API or CMS
const LATEST_BLOG_POSTS = [
  {
    id: "1",
    title: "The Future of AI in Front-End Development",
    slug: "future-ai-frontend-development",
    excerpt: "Exploring how artificial intelligence is transforming the way we build user interfaces and what this means for front-end developers.",
    publishedAt: "2025-06-15T10:00:00Z",
    readingTime: "5 min read",
  },
  {
    id: "2",
    title: "Optimizing React Performance in Complex Applications",
    slug: "optimizing-react-performance",
    excerpt: "A deep dive into advanced techniques for improving React performance in large-scale applications with complex state management.",
    publishedAt: "2025-05-28T09:30:00Z",
    readingTime: "8 min read",
  },
  {
    id: "3",
    title: "Building Accessible Web Applications: Best Practices",
    slug: "accessible-web-applications-best-practices",
    excerpt: "A comprehensive guide to creating web applications that are accessible to all users, including those with disabilities.",
    publishedAt: "2025-05-10T14:20:00Z",
    readingTime: "6 min read",
  },
];

interface BlogPostCardProps {
  post: typeof LATEST_BLOG_POSTS[0];
  index: number;
}

const BlogPostCard = ({ post, index }: BlogPostCardProps) => {
  return (
    <motion.article
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
    >
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2 flex items-center text-sm text-gray-500">
          <span>{formatDate(post.publishedAt)}</span>
          <span className="mx-2">•</span>
          <span>{post.readingTime}</span>
        </div>
        
        <h3 className="text-xl font-bold text-primary mb-3">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 flex-grow">
          {post.excerpt}
        </p>
        
        <Link 
          href={`/blog/${post.slug}`} 
          className="text-accent font-medium hover:text-accent-dark"
        >
          Read more →
        </Link>
      </div>
    </motion.article>
  );
};

const LatestBlogPosts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-2">Latest Blog Posts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Insights and thoughts on front-end development, AI integration, and technology trends.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LATEST_BLOG_POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/blog">
            <Button size="lg" variant="outline">
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { LatestBlogPosts };
