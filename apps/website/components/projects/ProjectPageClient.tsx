
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaCalendarAlt,
  FaTag,
} from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import ContentRenderer from "@/components/content/ContentRenderer";
import { Project } from "@/types/project";

export default function ProjectPageClient({ project }: { project: Project }) {
  return (
    <main className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Back to Projects */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="/projects">
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-muted-foreground"
            >
              <FaArrowLeft size={14} />
              Back to Projects
            </Button>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.header
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Project Category and Title */}
          <div className="mb-6">
            <span className="text-accent font-medium">{project.category}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#1A2B40] mt-2 leading-tight">
              {project.title}
            </h1>
          </div>

          {/* Project Hero Image */}
          <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden mb-8">
            {/* Placeholder for now - would be actual images in production */}
            <div className="bg-gradient-to-br from-primary/70 to-accent/70 h-full w-full flex items-center justify-center">
              <span className="text-white font-heading text-2xl">
                Hero Image for: {project.title}
              </span>
            </div>
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap justify-between items-center bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-wrap gap-6">
              {/* Completion Date */}
              <div>
                <div className="text-muted-foreground text-sm flex items-center gap-1 mb-1">
                  <FaCalendarAlt size={14} />
                  <span>Completed</span>
                </div>
                <div className="font-medium">{project.completedDate}</div>
              </div>

              {/* Category */}
              <div>
                <div className="text-muted-foreground text-sm flex items-center gap-1 mb-1">
                  <FaTag size={14} />
                  <span>Category</span>
                </div>
                <div className="font-medium">{project.category}</div>
              </div>
            </div>

            {/* External Links */}
            <div className="flex gap-4 mt-4 md:mt-0">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="flex items-center gap-2">
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </Button>
                </a>
              )}

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="flex items-center gap-2">
                    <FaGithub size={14} />
                    Source Code
                  </Button>
                </a>
              )}
            </div>
          </div>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <motion.div
            className="lg:col-span-8 space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Project Overview */}
            <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
              <h2 className="text-2xl font-heading font-bold text-[#1A2B40] mb-4">
                Project Overview
              </h2>
              <ContentRenderer
                content={`{"sections":[{"id":"overview","type":"paragraph","order":0,"content":{"text":"${project.overview.replace(/"/g, '\\"')}"}}]}`}
                template="portfolio"
                animateContent={true}
              />
            </section>

            {/* The Challenge */}
            <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
              <h2 className="text-2xl font-heading font-bold text-[#1A2B40] mb-4">
                The Challenge
              </h2>
              <ContentRenderer
                content={`{"sections":[{"id":"challenge","type":"paragraph","order":0,"content":{"text":"${project.challenge.replace(/"/g, '\\"')}"}}]}`}
                template="portfolio"
                animateContent={true}
              />
            </section>

            {/* The Solution */}
            <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
              <h2 className="text-2xl font-heading font-bold text-[#1A2B40] mb-4">
                The Solution
              </h2>
              <ContentRenderer
                content={`{"sections":[{"id":"solution","type":"paragraph","order":0,"content":{"text":"${project.solution.replace(/"/g, '\\"')}"}}]}`}
                template="portfolio"
                animateContent={true}
              />
            </section>

            {/* Project Gallery */}
            <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
              <h2 className="text-2xl font-heading font-bold text-[#1A2B40] mb-6">
                Project Gallery
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Placeholder gallery images */}
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
                    >
                      <span className="text-gray-500">
                        Gallery Image {i + 1}
                      </span>
                    </div>
                  ))}
              </div>
            </section>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            className="lg:col-span-4 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Technologies */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-heading font-semibold text-[#1A2B40] mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-heading font-semibold text-[#1A2B40] mb-4">
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-accent/20 text-accent flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-heading font-semibold text-[#1A2B40] mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-primary/10 text-[#1A2B40] px-3 py-1 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Other Projects CTA */}
            <div className="bg-primary text-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Interested in more projects?
              </h3>
              <p className="opacity-90 mb-6">
                Explore my other projects to see more examples of my work in web
                development, AI integration, and UI/UX design.
              </p>
              <Link href="/projects">
                <Button
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-[#1A2B40]"
                >
                  View All Projects
                </Button>
              </Link>
            </div>
          </motion.aside>
        </div>

        {/* Related Projects */}
        <motion.section
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-heading font-semibold text-[#1A2B40] mb-6">
            More Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* This part needs the full projects list, which should be passed as a prop or fetched separately */}
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section
          className="mt-16 bg-primary text-white p-8 rounded-xl shadow-md text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl font-heading font-semibold mb-4">
            Have a project in mind?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how I can help bring your ideas to life with
            modern web technologies and AI integration.
          </p>
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#1A2B40]"
            >
              Get in Touch
            </Button>
          </Link>
        </motion.section>
      </div>
    </main>
  );
}
