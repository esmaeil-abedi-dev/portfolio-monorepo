'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function AboutPageClient() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
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
            About Me
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know my background, skills, and the journey that shaped my career as a Front-End Engineer with a passion for AI.
          </p>
        </motion.div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {/* Profile Image */}
          <motion.div 
            className="col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-80 w-full md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/profile.jpg" 
                alt="Esmaeil Abedi" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-[#1A2B40] mb-4">
              Esmaeil Abedi
            </h2>
            <h3 className="text-xl text-accent mb-6">
              Front-End Engineer & AI Enthusiast
            </h3>
            <div className="space-y-4 text-foreground">
              <p>
                Hello there! I&apos;m Esmaeil, a passionate Front-End Engineer with a deep interest in AI technologies. With over 8 years of experience in web development, I specialize in creating responsive, accessible, and visually appealing user interfaces that deliver exceptional user experiences.
              </p>
              <p>
                My journey began with a degree in Computer Science, followed by years of hands-on experience building modern web applications using React, Next.js, TypeScript, and various other front-end technologies. Along the way, I&apos;ve developed a keen interest in artificial intelligence and its applications in web development.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring the latest trends in AI, contributing to open-source projects, or sharing my knowledge through technical articles and community workshops.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/cv">
                <Button variant="outline" size="lg">
                  Download CV
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
