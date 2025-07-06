'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

type StoryTemplateProps = {
  children: React.ReactNode;
  coverImage?: string;
  title?: string;
  subtitle?: string;
  date?: string;
  author?: string;
  className?: string;
  accentColor?: string;
};

export default function StoryTemplate({
  children,
  coverImage,
  title,
  subtitle,
  date,
  author,
  accentColor = "#10b981", // Default emerald color
  className
}: StoryTemplateProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrolledDown, setScrolledDown] = useState(false);
  
  // Parallax effect for the hero section
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Track overall page scroll for header
  const { scrollYProgress } = useScroll();
  
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(heroScrollProgress, [0, 0.5], [1, 1.15]);
  const heroY = useTransform(heroScrollProgress, [0, 0.5], [0, 150]);
  const titleOpacity = useTransform(heroScrollProgress, [0, 0.4], [1, 0]);
  const titleY = useTransform(heroScrollProgress, [0, 0.4], [0, -50]);
  
  // For the progress bar
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate text shadow based on accent color for better contrast
  const textShadowStyle = {
    textShadow: `0 2px 4px rgba(0,0,0,0.3), 0 0 40px ${accentColor}33`
  };

  return (
    <article className={cn("relative min-h-screen", className)}>
      {/* Reading progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r z-50"
        style={{ 
          scaleX, 
          transformOrigin: "0%", 
          background: `linear-gradient(90deg, ${accentColor} 0%, ${accentColor}99 100%)` 
        }}
      />
      
      {/* Floating header that appears on scroll */}
      <AnimatePresence>
        {scrolledDown && (
          <motion.div 
            className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-40 py-4"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 flex items-center justify-between">
              <h2 className="text-lg font-medium truncate max-w-[70%]">{title}</h2>
              <span className="text-sm text-gray-500">{date}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Full-height hero section with parallax effect */}
      <div ref={heroRef} className="relative h-[100vh] overflow-hidden">
        {/* Gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"
          style={{ opacity: heroOpacity }}
        />
        
        {coverImage ? (
          <motion.div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${coverImage})`,
              scale: heroScale,
              y: heroY
            }}
          />
        ) : (
          <motion.div 
            className="absolute inset-0"
            style={{ 
              background: `linear-gradient(135deg, ${accentColor}66 0%, #111827 100%)`,
              scale: heroScale,
              y: heroY
            }}
          />
        )}
        
        <motion.div 
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4 text-center"
          style={{ 
            opacity: titleOpacity, 
            y: titleY 
          }}
        >
          {subtitle && (
            <motion.span 
              className="inline-block uppercase tracking-widest text-white/80 mb-6 font-medium px-4 py-1 rounded-full border border-white/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {subtitle}
            </motion.span>
          )}
          
          {title && (
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 max-w-5xl"
              style={textShadowStyle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {title}
            </motion.h1>
          )}
          
          <motion.div 
            className="flex items-center gap-4 text-sm text-white/80 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {date && (
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>
                <span>{date}</span>
              </span>
            )}
            {author && (
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>
                <span>By {author}</span>
              </span>
            )}
          </motion.div>
          
          <motion.div 
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Content with animations */}
      <div 
        ref={contentRef} 
        className="bg-white relative z-10 min-h-screen"
        style={{ 
          borderTop: `4px solid ${accentColor}` 
        }}
      >
        <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="story-content"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </article>
  );
}
