'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const AboutSnippet = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full md:w-1/2">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-primary to-accent/70 overflow-hidden relative">
                {/* Placeholder for an actual profile image */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
                  Profile Image
                </div>
                
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#smallGrid)" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-heading font-bold mb-4 text-[#1A2B40]">About Me</h2>
              <p className="text-gray-600 mb-4">
                With over 8 years of experience in front-end development, I&apos;m passionate about creating 
                intuitive and performant user interfaces. Recently, I&apos;ve been exploring the 
                intersection of web development and artificial intelligence.
              </p>
              <p className="text-gray-600 mb-6">
                Currently pursuing my M.Sc. in Computer Science with a focus on AI, 
                I&apos;m working on projects that combine responsive front-end design with 
                intelligent features powered by machine learning.
              </p>
              <Link href="/about">
                <Button variant="outline">
                  Learn More About Me
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { AboutSnippet };
