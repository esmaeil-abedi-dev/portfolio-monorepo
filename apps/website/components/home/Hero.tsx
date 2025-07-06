'use client';

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-primary text-white py-20 overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="0.5" />
          <path d="M20,20 Q40,5 50,20 T80,30" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-heading font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Esmaeil Abedi
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl font-medium mb-6 text-accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Crafting Intelligent Experiences: Where Robust Front-End Expertise Meets AI Innovation.
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I&apos;m a Front-End Engineer with a growing expertise in AI/ML technologies.
            My passion lies in creating intuitive, responsive, and intelligent user experiences
            that leverage the power of modern web technologies and artificial intelligence.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link href="/projects">
              <Button size="lg">
                View My Projects
              </Button>
            </Link>
            <Link href="/cv">
              <Button size="lg" variant="outline">
                Download CV
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { Hero };
