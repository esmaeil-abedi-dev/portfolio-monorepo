'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import ContentTemplate, { TemplateType } from './ContentTemplates';

type ContentRendererProps = {
  content: string;
  className?: string;
  template?: TemplateType;
  animateContent?: boolean;
};

interface SectionContent {
  [key: string]: any;
}

type ContentSection = {
  id: string;
  type: string;
  order: number;
  content: SectionContent;
};

type ContentData = {
  sections: ContentSection[];
  template?: TemplateType;
  metadata?: {
    theme?: string;
    template?: TemplateType;
    accentColor?: string;
  };
};

export default function ContentRenderer({ content, className, template = 'standard', animateContent = true }: ContentRendererProps) {
  const [parsedContent, setParsedContent] = useState<ContentData | null>(null);

  useEffect(() => {
    try {
      if (content) {
        const parsed = JSON.parse(content);
        setParsedContent(parsed);
      }
    } catch (error) {
      console.error('Error parsing content JSON:', error);
      // Fallback for plain text content
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

  // Use template from content metadata if available, otherwise use prop
  const contentTemplate = parsedContent.metadata?.template || template;

  return (
    <ContentTemplate type={contentTemplate} className={className}>
      <div className={cn("space-y-8")}>
        {parsedContent.sections
          .sort((a, b) => a.order - b.order)
          .map((section, index) => (
            <motion.div
              key={section.id}
              className="content-section"
              initial={animateContent ? { opacity: 0, y: 20 } : undefined}
              whileInView={animateContent ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {renderSection(section)}
            </motion.div>
          ))}
      </div>
    </ContentTemplate>
  );
}

function renderSection(section: ContentSection) {
  switch (section.type) {
    case 'heading':
      return renderHeading(section);
    case 'paragraph':
      return renderParagraph(section);
    case 'image':
      return renderImage(section);
    case 'code':
      return renderCode(section);
    case 'quote':
      return renderQuote(section);
    case 'link':
      return renderLink(section);
    case 'video':
      return renderVideo(section);
    case 'list':
      return renderList(section);
    case 'divider':
      return renderDivider(section);
    case 'callout':
      return renderCallout(section);
    default:
      return <div>Unknown section type: {section.type}</div>;
  }
}

function renderHeading(section: ContentSection) {
  const { text, level = 2 } = section.content;
  
  const gradientClasses = level <= 2 ? 
    'bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text' : '';
  
  switch (level) {
    case 1:
      return (
        <motion.h1 
          className={`text-5xl font-bold mt-8 mb-6 ${gradientClasses}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {text}
        </motion.h1>
      );
    case 2:
      return (
        <motion.h2 
          className={`text-4xl font-bold mt-7 mb-5 ${gradientClasses}`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {text}
        </motion.h2>
      );
    case 3:
      return <h3 className="text-2xl font-bold mt-6 mb-3">{text}</h3>;
    case 4:
      return <h4 className="text-xl font-bold mt-4 mb-2">{text}</h4>;
    case 5:
      return <h5 className="text-lg font-bold mt-3 mb-2">{text}</h5>;
    case 6:
      return <h6 className="text-base font-bold mt-3 mb-1">{text}</h6>;
    default:
      return <h2 className="text-3xl font-bold mt-6 mb-4">{text}</h2>;
  }
}

function renderParagraph(section: ContentSection) {
  const { text } = section.content;
  
  // Process text for basic markdown-like formatting
  const formattedText = text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/`(.+?)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-pink-600">$1</code>');

  // If the text is relatively short, we'll make it larger for better storytelling impact
  const isShortText = text.length < 100;
  
  return (
    <div 
      className={`text-gray-700 leading-relaxed ${isShortText ? 'text-xl md:text-2xl font-light' : ''}`}
      dangerouslySetInnerHTML={{ __html: formattedText }}
    />
  );
}

function renderImage(section: ContentSection) {
  const { url, alt, caption, width, height } = section.content;
  
  // Determine if image should be displayed in a special layout
  const isWide = width && height && width > height * 1.5;
  const isTall = width && height && height > width * 1.2;
  
  return (
    <motion.figure 
      className={`my-10 ${isWide ? 'md:-mx-20' : ''}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
    >
      <div className={`
        relative overflow-hidden rounded-lg shadow-lg
        ${isWide ? 'w-full aspect-[21/9]' : isTall ? 'w-2/3 mx-auto aspect-[3/4]' : 'w-full aspect-[16/9]'}
      `}>
        <Image
          src={url}
          alt={alt || ''}
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          priority={section.order < 3} // Prioritize loading for images near the top
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-500 italic">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}

function renderCode(section: ContentSection) {
  const { code, language = 'javascript', fileName } = section.content;
  
  return (
    <div className="my-8 shadow-lg rounded-lg overflow-hidden">
      {fileName && (
        <div className="bg-gray-800 text-gray-200 px-4 py-2 text-sm flex justify-between items-center border-b border-gray-700">
          <span className="font-mono">{fileName}</span>
          <span className="text-xs uppercase text-gray-400">{language}</span>
        </div>
      )}
      <pre className="bg-gray-800 text-gray-200 p-5 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function renderQuote(section: ContentSection) {
  const { text, attribution } = section.content;
  
  return (
    <motion.blockquote 
      className="py-5 my-8 md:mx-5 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-5xl text-[#1A2B40] leading-none block mb-2">&ldquo;</span>
      <p className="text-xl md:text-2xl font-serif italic text-gray-700 px-5 md:px-12">{text}</p>
      {attribution && (
        <footer className="mt-4 text-gray-500">
          — {attribution}
        </footer>
      )}
    </motion.blockquote>
  );
}

function renderLink(section: ContentSection) {
  const { url, title, description, imageUrl } = section.content;
  
  return (
    <motion.a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block p-5 border rounded-lg hover:shadow-lg transition-all my-8 bg-white group"
      whileHover={{ y: -3 }}
    >
      <div className="flex flex-col md:flex-row gap-5">
        {imageUrl && (
          <div className="md:w-1/3 flex-shrink-0">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md">
              <Image
                src={imageUrl}
                alt=""
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
          </div>
        )}
        <div className={imageUrl ? 'md:w-2/3' : 'w-full'}>
          <h4 className="font-bold text-blue-600 text-lg group-hover:text-blue-700 transition-colors">{title}</h4>
          {description && <p className="text-gray-700 mt-2">{description}</p>}
          <p className="text-gray-400 text-xs mt-4 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
            </svg>
            {url}
          </p>
        </div>
      </div>
    </motion.a>
  );
}

function renderVideo(section: ContentSection) {
  const { url, caption, autoplay = false, loop = false } = section.content;
  
  // Extract video ID for embedding
  let videoId = '';
  
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    // YouTube
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    if (match) videoId = match[1];
  } else if (url.includes('vimeo.com')) {
    // Vimeo
    const match = url.match(/vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/[^\/]*\/videos\/|)(\d+)/);
    if (match) videoId = match[1];
  }
  
  return (
    <motion.figure 
      className="my-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
        {url.includes('youtube') && videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}${autoplay ? '?autoplay=1' : ''}${loop ? '&loop=1&playlist=' + videoId : ''}`}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : url.includes('vimeo') && videoId ? (
          <iframe
            src={`https://player.vimeo.com/video/${videoId}${autoplay ? '?autoplay=1' : ''}${loop ? '&loop=1' : ''}`}
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
        <figcaption className="mt-3 text-center text-sm text-gray-500 italic">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}

function renderList(section: ContentSection) {
  const { items, ordered } = section.content;
  
  const staggeredItems = items.map((item: string, index: number) => (
    <motion.li 
      key={index}
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="mb-3"
    >
      {item}
    </motion.li>
  ));
  
  if (ordered) {
    return (
      <ol className="list-decimal pl-6 my-6 text-gray-700">
        {staggeredItems}
      </ol>
    );
  }
  
  return (
    <ul className="list-disc pl-6 my-6 text-gray-700">
      {staggeredItems}
    </ul>
  );
}

function renderDivider(section: ContentSection) {
  const { style = 'solid' } = section.content;
  
  const dividerStyles: Record<string, string> = {
    'solid': 'border-gray-200',
    'dashed': 'border-dashed border-gray-300',
    'dotted': 'border-dotted border-gray-300',
  };
  
  return (
    <div className="flex justify-center my-12">
      <hr className={`w-1/3 border-t-2 ${dividerStyles[style] || dividerStyles.solid}`} />
    </div>
  );
}

function renderCallout(section: ContentSection) {
  const { text, variant = 'info', icon } = section.content;
  
  const variantStyles = {
    info: 'bg-blue-50 border-blue-500 text-blue-800',
    warning: 'bg-amber-50 border-amber-500 text-amber-800',
    success: 'bg-green-50 border-green-500 text-green-800',
    error: 'bg-red-50 border-red-500 text-red-800',
  };
  
  const style = variantStyles[variant as keyof typeof variantStyles] || variantStyles.info;
  
  const iconMap: Record<string, React.ReactNode> = {
    info: (
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
      </svg>
    ),
    warning: (
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
      </svg>
    ),
    success: (
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
      </svg>
    ),
    error: (
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
      </svg>
    )
  };
  
  return (
    <motion.div 
      className={`p-5 border-l-4 rounded-r my-8 shadow-sm ${style}`}
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center">
        {icon ? icon : iconMap[variant as keyof typeof iconMap]}
        <p className="text-lg font-medium">{text}</p>
      </div>
    </motion.div>
  );
}
