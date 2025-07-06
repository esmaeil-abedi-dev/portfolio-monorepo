'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import StoryTemplate from './StoryTemplate';
import type { 
  SectionType, 
  HeadingSection, 
  ParagraphSection,
  ImageSection,
  CodeSection,
  QuoteSection,
  LinkSection,
  VideoSection,
  ListSection,
  DividerSection,
  CalloutSection
} from '@esmaeilabedi/types';

type StoryContentProps = {
  content: string;
  coverImage?: string;
  title?: string;
  subtitle?: string;
  date?: string;
  author?: string;
  className?: string;
};

interface CodeContent {
  code: string;
  language: string;
  fileName?: string;
  description?: string; // Added description for two-column layout
}

interface QuoteContent {
  text: string;
  attribution?: string;
}

interface VideoContent {
  url: string;
  caption?: string;
  autoplay?: boolean;
  loop?: boolean;
}

interface DividerContent {
  style?: 'solid' | 'dashed' | 'dotted';
}

interface ListContent {
  items: string[];
  ordered: boolean;
}

interface CalloutContent {
  text: string;
  variant: 'info' | 'warning' | 'success' | 'error';
  icon?: string;
}

interface LinkContent {
  url: string;
  title: string;
  description?: string;
  imageUrl?: string;
}

type ContentSection = 
  | HeadingSection
  | ParagraphSection
  | ImageSection
  | CodeSection
  | QuoteSection
  | LinkSection
  | VideoSection
  | ListSection
  | DividerSection
  | CalloutSection;

type ContentData = {
  sections: ContentSection[];
  metadata?: {
    theme?: string;
    template?: string;
    accentColor?: string;
  };
};

export default function StoryContent({ 
  content, 
  coverImage, 
  title,
  subtitle,
  date,
  author,
  className 
}: StoryContentProps) {
  const [parsedContent, setParsedContent] = useState<ContentData | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [accentColor, setAccentColor] = useState("#10b981"); // Default emerald

  useEffect(() => {
    try {
      if (content) {
        const parsed = JSON.parse(content);
        setParsedContent(parsed);
        
        // Extract accent color from metadata if available
        if (parsed.metadata?.accentColor) {
          setAccentColor(parsed.metadata.accentColor);
        }
      }
    } catch (error) {
      console.error('Error parsing content JSON:', error);
      setParsedContent({
        sections: [
          {
            id: 'fallback',
            type: 'paragraph',
            order: 0,
            content: { text: content },
          },
        ],
      });
    }
  }, [content]);

  if (!parsedContent) {
    return <div className="animate-pulse h-40 bg-gray-100 rounded-md" />;
  }

  return (
    <StoryTemplate
      coverImage={coverImage}
      title={title}
      subtitle={subtitle}
      date={date}
      author={author}
      accentColor={accentColor}
      className={className}
    >
      <div ref={containerRef} className="space-y-16 md:space-y-24">
        {parsedContent.sections
          .sort((a, b) => a.order - b.order)
          .map((section, index) => (
            <StorySection 
              key={section.id} 
              section={section} 
              index={index} 
              accentColor={accentColor}
            />
          ))}
      </div>
    </StoryTemplate>
  );
}

type StorySectionProps = {
  section: ContentSection;
  index: number;
  accentColor?: string;
};

function StorySection({ section, index, accentColor }: StorySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.8,
        delay: index * 0.1 
      }}
      className="content-section"
    >
      {renderStorySection(section, accentColor)}
    </motion.div>
  );
}

function renderStorySection(section: ContentSection, accentColor?: string) {
  switch (section.type) {
    case 'heading':
      return <HeadingSection section={section} accentColor={accentColor} />;
    case 'paragraph':
      return <ParagraphSection section={section} />;
    case 'image':
      return <ImageSection section={section} />;
    case 'quote':
      return <QuoteSection section={section} accentColor={accentColor} />;
    case 'code':
      return <CodeSection section={section} accentColor={accentColor} />;
    case 'video':
      return <VideoSection section={section} />;
    case 'divider':
      return <DividerSection accentColor={accentColor} />;
    case 'list':
      return <ListSection section={section} />;
    case 'callout':
      return <CalloutSection section={section} accentColor={accentColor} />;
    case 'link':
      return <LinkSection section={section} />;
    default:
      return <div>Unknown section type</div>;
  }
}

// Individual section components
interface SectionProps {
  section: ContentSection;
  accentColor?: string;
}

function HeadingSection({ section, accentColor = "#10b981" }: SectionProps) {
  const content = section.content as unknown as HeadingSection['content'];
  const { text, level = 2 } = content;
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  switch (Number(level)) {
    case 1:
      return (
        <motion.h1 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl font-bold mt-24 mb-10 leading-tight text-center font-serif relative overflow-hidden"
        >
          <span className="inline-block relative">
            {text}
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-1"
              style={{ originX: 0, backgroundColor: accentColor }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </span>
        </motion.h1>
      );
    case 2:
      return (
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-bold mt-16 mb-8 leading-tight font-serif"
        >
          {text}
        </motion.h2>
      );
    case 3:
      return (
        <motion.h3 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl font-bold mt-12 mb-6 font-serif"
        >
          {text}
        </motion.h3>
      );
    default:
      return (
        <motion.h4 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl font-bold mt-8 mb-4 font-serif"
        >
          {text}
        </motion.h4>
      );
  }
}

function ParagraphSection({ section }: SectionProps) {
  const content = section.content as unknown as ParagraphSection['content'];
  const { text } = content;
  const isShortText = text.length < 150;
  const isLongText = text.length > 400;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Process text for basic formatting
  const formattedText = text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "font-serif leading-relaxed text-gray-800",
        isShortText ? "text-xl md:text-2xl font-light italic text-center max-w-3xl mx-auto" : 
        isLongText ? "text-lg md:text-xl" : "text-lg md:text-xl"
      )}
      dangerouslySetInnerHTML={{ __html: formattedText }}
    />
  );
}

function ImageSection({ section }: SectionProps) {
  const content = section.content as unknown as ImageSection['content'];
  const { url, alt, caption, width, height } = content;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Determine if image should display in a special layout
  const isWide = width && height && width > height * 1.5;
  const isTall = width && height && height > width * 1.2;

  return (
    <motion.figure 
      ref={ref}
      className={cn(
        "my-20",
        isWide ? "md:-mx-32 lg:-mx-48" : "",
        isTall ? "md:w-2/3 mx-auto" : ""
      )}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 1 }}
    >
      <div className={cn(
        "relative overflow-hidden rounded-lg shadow-2xl",
        isWide ? "aspect-[21/9]" : isTall ? "aspect-[3/4]" : "aspect-[16/9]"
      )}>
        <Image
          src={url}
          alt={alt || ''}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
          priority={true}
        />
      </div>
      {caption && (
        <figcaption className="mt-4 text-center text-gray-500 italic text-sm md:text-base">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}

function QuoteSection({ section, accentColor = "#10b981" }: SectionProps) {
  const content = section.content as unknown as QuoteSection['content'];
  const { text, attribution } = content;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div 
      ref={ref}
      className="py-16 md:py-24 px-4 relative max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      <svg 
        className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 opacity-20" 
        width="80" 
        height="80" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: accentColor }}
      >
        <path 
          d="M40 20C40 8.954 31.046 0 20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20ZM20 30C14.477 30 10 25.523 10 20C10 14.477 14.477 10 20 10C25.523 10 30 14.477 30 20C30 25.523 25.523 30 20 30Z" 
          fill="currentColor"
        />
        <path 
          d="M100 20C100 8.954 91.046 0 80 0C68.954 0 60 8.954 60 20C60 31.046 68.954 40 80 40C91.046 40 100 31.046 100 20ZM80 30C74.477 30 70 25.523 70 20C70 14.477 74.477 10 80 10C85.523 10 90 14.477 90 20C90 25.523 85.523 30 80 30Z" 
          fill="currentColor"
        />
      </svg>
      
      <p className="text-2xl md:text-4xl font-serif italic leading-relaxed text-center">
        {text}
      </p>
      
      <motion.div 
        className="w-16 h-1 mx-auto my-8"
        style={{ backgroundColor: accentColor }}
        initial={{ width: 0 }}
        animate={isInView ? { width: 64 } : { width: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
      
      {attribution && (
        <motion.footer 
          className="text-center text-gray-600 font-medium"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          — {attribution}
        </motion.footer>
      )}
    </motion.div>
  );
}

function CodeSection({ section, accentColor = "#10b981" }: SectionProps) {
  const content = section.content as unknown as CodeSection['content'];
  const { code, language = 'javascript', fileName, description } = content;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const hasDescription = !!description;
  
  // Determine if we should use the two-column layout
  // Only use it for desktop and when there's a description
  const useTwoColumnLayout = hasDescription;
  
  return (
    <motion.div 
      ref={ref}
      className={cn(
        "my-16 md:my-24",
        useTwoColumnLayout ? "md:grid md:grid-cols-12 md:gap-8 items-start" : ""
      )}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Code Block - Takes 7 columns in two-column layout */}
      <motion.div 
        className={cn(
          "rounded-lg overflow-hidden shadow-xl",
          useTwoColumnLayout ? "md:col-span-7 mb-8 md:mb-0" : ""
        )}
        initial={{ x: useTwoColumnLayout ? -50 : 0, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: useTwoColumnLayout ? -50 : 0, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {fileName && (
          <div className="bg-gray-800 text-gray-200 px-4 py-2 text-sm flex justify-between items-center border-b border-gray-700">
            <span className="font-mono">{fileName}</span>
            <span className="text-xs uppercase text-gray-400">{language}</span>
          </div>
        )}
        <pre className="bg-gray-800 text-gray-200 p-6 overflow-x-auto text-sm md:text-base">
          <code>{code}</code>
        </pre>
      </motion.div>
      
      {/* Description - Takes 5 columns in two-column layout */}
      {hasDescription && description && (
        <motion.div 
          className={useTwoColumnLayout ? "md:col-span-5" : "mt-8"}
          initial={{ x: useTwoColumnLayout ? 50 : 0, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: useTwoColumnLayout ? 50 : 0, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h4 className="text-xl font-medium mb-4">Code Explanation</h4>
          <div className="prose prose-gray max-w-none">
            {description.split('\n').map((paragraph: string, idx: number) => (
              <p key={idx} className="mb-4">{paragraph}</p>
            ))}
          </div>
          
          {/* Accent line for visual interest */}
          <motion.div 
            className="h-1 w-16 mt-6"
            style={{ backgroundColor: accentColor }}
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : { width: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}

function VideoSection({ section }: SectionProps) {
  const content = section.content as unknown as VideoSection['content'];
  const { url, caption } = content;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Extract video ID for embedding
  let videoId = '';
  
  if (typeof url === 'string') {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      // YouTube
      const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
      if (match) videoId = match[1];
    } else if (url.includes('vimeo.com')) {
      // Vimeo
      const match = url.match(/vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/[^\/]*\/videos\/|)(\d+)/);
      if (match) videoId = match[1];
    }
  }
  
  return (
    <motion.figure 
      ref={ref}
      className="my-20"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-2xl">
        {typeof url === 'string' && url.includes('youtube') && videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : typeof url === 'string' && url.includes('vimeo') && videoId ? (
          <iframe
            src={`https://player.vimeo.com/video/${videoId}`}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">Video URL not supported</p>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-4 text-center text-gray-500 italic text-sm md:text-base">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}

function DividerSection({ accentColor = "#10b981" }: { accentColor?: string }) {
  return (
    <div className="my-16 md:my-24 flex items-center justify-center">
      <AnimatePresence>
        <motion.div 
          className="flex space-x-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="h-2 w-2 rounded-full" 
            style={{ backgroundColor: accentColor }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
          />
          <motion.div 
            className="h-2 w-2 rounded-full" 
            style={{ backgroundColor: accentColor }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, delay: 0.3, repeat: Infinity, repeatDelay: 0.5 }}
          />
          <motion.div 
            className="h-2 w-2 rounded-full" 
            style={{ backgroundColor: accentColor }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, delay: 0.6, repeat: Infinity, repeatDelay: 0.5 }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ListSection({ section }: SectionProps) {
  const content = section.content as unknown as ListSection['content'];
  const { items, ordered } = content;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div 
      ref={ref}
      className="my-12 font-serif"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7 }}
    >
      {ordered ? (
        <ol className="list-decimal pl-8 space-y-3 text-lg">
          {items.map((item, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="leading-relaxed"
            >
              {item}
            </motion.li>
          ))}
        </ol>
      ) : (
        <ul className="list-disc pl-8 space-y-3 text-lg">
          {items.map((item, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="leading-relaxed"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

function CalloutSection({ section, accentColor = "#10b981" }: SectionProps) {
  const content = section.content as unknown as CalloutSection['content'];
  const { text, variant, icon } = content;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Determine color based on variant
  const variantStyles = {
    info: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800', icon: '💡' },
    warning: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-800', icon: '⚠️' },
    success: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800', icon: '✅' },
    error: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800', icon: '⛔' },
  };

  const style = variantStyles[variant] || variantStyles.info;

  return (
    <motion.div 
      ref={ref}
      className={cn(
        "my-12 px-6 py-5 rounded-lg border-l-4",
        style.bg,
        style.border
      )}
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-start">
        <div className="text-2xl mr-4">
          {icon || style.icon}
        </div>
        <div className={cn("flex-1", style.text)}>
          {text}
        </div>
      </div>
    </motion.div>
  );
}

function LinkSection({ section }: SectionProps) {
  const content = section.content as unknown as LinkSection['content'];
  const { url, title, description, imageUrl } = content;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div 
      ref={ref}
      className="my-12"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-lg border border-gray-200 transition-shadow hover:shadow-lg"
      >
        <div className="flex flex-col md:flex-row">
          {imageUrl && (
            <div className="md:w-1/3 relative">
              <div className="aspect-video w-full h-full relative">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
          <div className={cn(
            "p-6",
            imageUrl ? "md:w-2/3" : "w-full"
          )}>
            <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
            {description && (
              <p className="text-gray-600">{description}</p>
            )}
            <div className="mt-4 text-sm text-gray-500 flex items-center">
              <span className="truncate">{url}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
              >
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
