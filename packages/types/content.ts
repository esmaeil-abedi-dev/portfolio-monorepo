// Type definitions for content sections
export type SectionType = 
  | 'heading'
  | 'paragraph' 
  | 'image' 
  | 'code' 
  | 'quote' 
  | 'link' 
  | 'video'
  | 'list'
  | 'divider'
  | 'callout';

export interface BaseSection {
  id: string;
  type: SectionType;
  order: number;
}

export interface HeadingSection extends BaseSection {
  type: 'heading';
  content: {
    text: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
  };
}

export interface ParagraphSection extends BaseSection {
  type: 'paragraph';
  content: {
    text: string;
  };
}

export interface ImageSection extends BaseSection {
  type: 'image';
  content: {
    url: string;
    alt: string;
    caption?: string;
    width?: number;
    height?: number;
  };
}

export interface CodeSection extends BaseSection {
  type: 'code';
  content: {
    code: string;
    language: string;
    fileName?: string;
    description?: string; // Added for two-column layout
  };
}

export interface QuoteSection extends BaseSection {
  type: 'quote';
  content: {
    text: string;
    attribution?: string;
  };
}

export interface LinkSection extends BaseSection {
  type: 'link';
  content: {
    url: string;
    title: string;
    description?: string;
    imageUrl?: string;
  };
}

export interface VideoSection extends BaseSection {
  type: 'video';
  content: {
    url: string; // YouTube, Vimeo, or other video URL
    caption?: string;
    autoplay?: boolean;
    loop?: boolean;
  };
}

export interface ListSection extends BaseSection {
  type: 'list';
  content: {
    items: string[];
    ordered: boolean;
  };
}

export interface DividerSection extends BaseSection {
  type: 'divider';
  content: {
    style?: 'solid' | 'dashed' | 'dotted';
  };
}

export interface CalloutSection extends BaseSection {
  type: 'callout';
  content: {
    text: string;
    variant: 'info' | 'warning' | 'success' | 'error';
    icon?: string;
  };
}

export type ContentSection = 
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

export interface ContentData {
  sections: ContentSection[];
}
