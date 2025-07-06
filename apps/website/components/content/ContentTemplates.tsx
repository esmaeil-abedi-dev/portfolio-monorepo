'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type TemplateType = 
  | 'standard'    // Standard blog layout
  | 'immersive'   // Full-width images and sections with larger typography
  | 'magazine'    // More complex multi-column layout with pull quotes
  | 'technical'   // Code-focused layout with syntax highlighting
  | 'portfolio'   // Project-focused with showcase elements
  | 'story';      // Story-telling focused with animations

type ContentTemplateProps = {
  children: ReactNode;
  type: TemplateType;
  className?: string;
};

/**
 * ContentTemplate wraps content in predefined layouts with specific styling
 */
export default function ContentTemplate({ children, type = 'standard', className }: ContentTemplateProps) {
  return (
    <div className={cn(getTemplateClasses(type), className)}>
      {children}
    </div>
  );
}

// Return the appropriate CSS classes for each template type
function getTemplateClasses(type: TemplateType): string {
  switch (type) {
    case 'standard':
      return 'max-w-3xl mx-auto px-4 md:px-0 prose prose-lg dark:prose-invert';
    
    case 'immersive':
      return 'w-full mx-auto prose prose-xl dark:prose-invert prose-img:w-full prose-img:max-w-none prose-headings:text-center';
    
    case 'magazine':
      return 'max-w-4xl mx-auto px-4 md:px-0 prose prose-lg dark:prose-invert md:columns-2 md:gap-10 md:prose-blockquote:column-span-all md:prose-headings:column-span-all';
    
    case 'technical':
      return 'max-w-3xl mx-auto px-4 md:px-0 prose prose-lg dark:prose-invert prose-code:bg-slate-800 prose-code:text-slate-100 prose-pre:bg-slate-800 prose-pre:text-slate-100 prose-pre:shadow-lg';
    
    case 'portfolio':
      return 'max-w-5xl mx-auto px-4 md:px-0 prose prose-xl dark:prose-invert prose-img:rounded-lg prose-img:shadow-lg';
    
    case 'story':
      return 'max-w-3xl mx-auto px-4 md:px-0 prose prose-lg dark:prose-invert prose-headings:font-serif prose-p:font-serif prose-p:leading-relaxed prose-img:rounded-md prose-img:mx-auto';
    
    default:
      return 'max-w-3xl mx-auto px-4 md:px-0 prose prose-lg dark:prose-invert';
  }
}
