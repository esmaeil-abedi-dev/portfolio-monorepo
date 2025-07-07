import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { LatestBlogPosts } from "@/components/home/LatestBlogPosts";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { TailwindTest } from "@/components/ui/TailwindTest";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container mx-auto px-4">
        <TailwindTest />
      </div>
      <FeaturedProjects />
      <AboutSnippet />
      <LatestBlogPosts />
    </main>
  );
}
