import { Metadata } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Blog | Esmaeil Abedi",
  description: "Articles, tutorials, and insights about front-end development, AI, and the tech industry by Esmaeil Abedi.",
};

// Mock blog post data (would be fetched from an API/CMS in production)
const blogPosts = [
  {
    id: "nextjs-ai-integration",
    title: "Integrating AI Features into Next.js Applications",
    slug: "integrating-ai-features-into-nextjs-applications",
    excerpt: "A comprehensive guide to adding AI capabilities to your Next.js applications using TensorFlow.js, OpenAI API, and other tools.",
    date: "2023-06-15",
    readTime: "8 min read",
    category: "Development",
    tags: ["Next.js", "AI", "TensorFlow.js", "React"],
    coverImage: "/images/blog/ai-nextjs.jpg",
    featured: true
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices for Front-End Developers in 2023",
    slug: "typescript-best-practices-for-frontend-developers",
    excerpt: "Learn how to write clean, maintainable TypeScript code with these modern best practices for front-end development.",
    date: "2023-05-20",
    readTime: "6 min read",
    category: "Development",
    tags: ["TypeScript", "Front-End", "Best Practices"],
    coverImage: "/images/blog/typescript.jpg",
    featured: true
  },
  {
    id: "tailwind-vs-css",
    title: "Tailwind CSS vs. Traditional CSS: Pros and Cons",
    slug: "tailwind-css-vs-traditional-css",
    excerpt: "An in-depth comparison of utility-first CSS frameworks like Tailwind versus traditional CSS approaches for modern web development.",
    date: "2023-04-10",
    readTime: "5 min read",
    category: "CSS",
    tags: ["CSS", "Tailwind", "Web Development"],
    coverImage: "/images/blog/tailwind-css.jpg",
    featured: false
  },
  {
    id: "framer-motion-animations",
    title: "Creating Smooth UI Animations with Framer Motion and React",
    slug: "creating-smooth-ui-animations-with-framer-motion",
    excerpt: "How to implement beautiful, performance-optimized animations in your React applications using Framer Motion.",
    date: "2023-03-15",
    readTime: "7 min read",
    category: "UI/UX",
    tags: ["React", "Animation", "Framer Motion"],
    coverImage: "/images/blog/framer-motion.jpg",
    featured: false
  },
  {
    id: "ai-ethics-frontend",
    title: "AI Ethics Considerations for Front-End Developers",
    slug: "ai-ethics-considerations-for-frontend-developers",
    excerpt: "Exploring the ethical implications of implementing AI features in web interfaces and how developers can ensure responsible integration.",
    date: "2023-02-28",
    readTime: "10 min read",
    category: "AI",
    tags: ["AI", "Ethics", "Front-End"],
    coverImage: "/images/blog/ai-ethics.jpg",
    featured: true
  },
  {
    id: "react-server-components",
    title: "Understanding React Server Components",
    slug: "understanding-react-server-components",
    excerpt: "A deep dive into React Server Components: how they work, when to use them, and their impact on application architecture.",
    date: "2023-01-20",
    readTime: "9 min read",
    category: "React",
    tags: ["React", "Server Components", "Performance"],
    coverImage: "/images/blog/server-components.jpg",
    featured: false
  },
  {
    id: "state-management-2023",
    title: "Modern State Management in React Applications",
    slug: "modern-state-management-in-react-applications",
    excerpt: "Comparing different state management solutions for React in 2023, from Context API to Redux Toolkit and Zustand.",
    date: "2022-12-10",
    readTime: "8 min read",
    category: "React",
    tags: ["React", "State Management", "Redux", "Context API"],
    coverImage: "/images/blog/state-management.jpg",
    featured: false
  },
  {
    id: "web-accessibility",
    title: "Building Accessible Web Applications: A Comprehensive Guide",
    slug: "building-accessible-web-applications",
    excerpt: "Best practices, tools, and techniques for creating web applications that are accessible to all users, including those with disabilities.",
    date: "2022-11-05",
    readTime: "12 min read",
    category: "Accessibility",
    tags: ["Accessibility", "WCAG", "Inclusive Design"],
    coverImage: "/images/blog/accessibility.jpg",
    featured: false
  }
];

export default function BlogPage() {
  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);
  // Get regular posts
  const regularPosts = blogPosts.filter(post => !post.featured);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  // Format date for display
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <main className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#1A2B40] mb-4">
            Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on front-end development, 
            artificial intelligence, and technology trends.
          </p>
        </motion.div>

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-heading font-semibold text-[#1A2B40] mb-6">
              Featured Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <motion.article 
                  key={post.id}
                  variants={itemVariants}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  {/* Post Image */}
                  <div className="relative h-48 w-full">
                    {/* Placeholder for now - would be actual images in production */}
                    <div className="bg-gradient-to-br from-primary/70 to-accent/70 h-full w-full flex items-center justify-center">
                      <span className="text-white font-heading text-lg">
                        {post.title.split(' ')[0]}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                      <span>{formatDate(post.date)}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-heading font-bold text-[#1A2B40] mb-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-xs font-medium bg-accent/10 text-accent px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" className="w-full">
                        Read Article
                      </Button>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>
        )}

        {/* Main Posts Section */}
        <motion.section 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <h2 className="text-2xl font-heading font-semibold text-[#1A2B40] mb-6">
            All Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <motion.article 
                key={post.id}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Post Image */}
                <div className="relative h-40 w-full">
                  {/* Placeholder for now - would be actual images in production */}
                  <div className="bg-gradient-to-br from-gray-700 to-gray-900 h-full w-full flex items-center justify-center">
                    <span className="text-white font-heading text-lg">
                      {post.title.split(' ')[0]}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                    <span>{formatDate(post.date)}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-heading font-bold text-[#1A2B40] mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs font-medium bg-accent/10 text-accent px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" className="w-full">
                      Read Article
                    </Button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Newsletter Subscription */}
        <motion.section 
          className="bg-primary text-white p-8 md:p-12 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Subscribe to my Newsletter
                </h2>
                <p className="opacity-90 mb-6">
                  Stay updated with the latest articles, tutorials, and insights on front-end development and AI.
                  I send out a newsletter once a month. No spam, just valuable content!
                </p>
              </div>

              <div>
                <form className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-1 px-4 py-3 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-accent hover:bg-accent-light text-white sm:flex-shrink-0"
                  >
                    Subscribe
                  </Button>
                </form>
                <p className="text-sm opacity-80 mt-3">
                  I respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
