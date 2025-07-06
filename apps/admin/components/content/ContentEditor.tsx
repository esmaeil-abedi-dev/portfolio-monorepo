'use client';

import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ContentSection, SectionType } from '@esmaeilabedi/types';
import { PlusCircle, Trash2, MoveUp, MoveDown, Layout } from 'lucide-react';
import TextareaAutosize from 'react-textarea-autosize';
import { cn } from '@/lib/utils';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@esmaeilabedi/ui';
import dynamic from 'next/dynamic';
import TemplatePicker from './TemplatePicker';
import { TemplateType } from './ContentTemplates';

// Dynamically import CodeEditor with no SSR to avoid hydration issues
const CodeEditor = dynamic(() => import('./CodeEditor'), { ssr: false });

type ContentEditorProps = {
  initialContent?: string;
  onChange: (contentJson: string) => void;
  className?: string;
};

// Predefined section templates
const SECTION_TEMPLATES = {
  storyTemplate: [
    { type: 'heading', content: { text: '', level: 1 } },
    { type: 'paragraph', content: { text: '' } },
    { type: 'image', content: { url: '', alt: '' } },
    { type: 'paragraph', content: { text: '' } },
    { type: 'heading', content: { text: '', level: 2 } },
    { type: 'paragraph', content: { text: '' } },
    { type: 'code', content: { code: '', language: 'javascript', description: '' } },
    { type: 'quote', content: { text: '', attribution: '' } },
    { type: 'paragraph', content: { text: '' } },
  ],
  tutorialTemplate: [
    { type: 'heading', content: { text: '', level: 1 } },
    { type: 'paragraph', content: { text: '' } },
    { type: 'heading', content: { text: 'Prerequisites', level: 2 } },
    { type: 'list', content: { items: [''], ordered: false } },
    { type: 'heading', content: { text: 'Getting Started', level: 2 } },
    { type: 'paragraph', content: { text: '' } },
    { type: 'code', content: { code: '', language: 'javascript', description: '' } },
    { type: 'heading', content: { text: 'Step 1', level: 3 } },
    { type: 'paragraph', content: { text: '' } },
    { type: 'code', content: { code: '', language: 'javascript', description: '' } },
  ],
  portfolioTemplate: [
    { type: 'heading', content: { text: '', level: 1 } },
    { type: 'paragraph', content: { text: '' } },
    { type: 'image', content: { url: '', alt: '' } },
    { type: 'heading', content: { text: 'Overview', level: 2 } },
    { type: 'paragraph', content: { text: '' } },
    { type: 'heading', content: { text: 'Technologies', level: 2 } },
    { type: 'list', content: { items: [''], ordered: false } },
    { type: 'heading', content: { text: 'Key Features', level: 2 } },
    { type: 'list', content: { items: [''], ordered: true } },
    { type: 'code', content: { code: '', language: 'javascript', description: '' } },
  ]
};

export default function ContentEditor({ initialContent, onChange, className }: ContentEditorProps) {
  const [sections, setSections] = useState<ContentSection[]>([]);
  const [template, setTemplate] = useState<TemplateType>('standard');
  const [metadata, setMetadata] = useState<{
    template: TemplateType;
    accentColor?: string;
    theme?: string;
  }>({
    template: 'standard'
  });

  useEffect(() => {
    if (initialContent) {
      try {
        const parsed = JSON.parse(initialContent);
        if (Array.isArray(parsed.sections)) {
          setSections(parsed.sections);
          
          // Extract metadata if available
          if (parsed.metadata) {
            setMetadata(parsed.metadata);
            if (parsed.metadata.template) {
              setTemplate(parsed.metadata.template);
            }
          }
          return;
        }
      } catch (error) {
        console.error('Error parsing content JSON:', error);
      }
    }
    
    // Default section if no valid content provided
    setSections([
      {
        id: uuidv4(),
        type: 'paragraph',
        order: 0,
        content: {
          text: '',
        },
      },
    ]);
  }, [initialContent]);

  // Apply a predefined template to the content
  const applyTemplate = (templateName: keyof typeof SECTION_TEMPLATES) => {
    if (sections.length > 0 && sections.some(s => Object.keys(s.content).some(k => s.content[k]))) {
      if (!confirm('Applying a template will replace your current content. Continue?')) {
        return;
      }
    }

    const templateSections = SECTION_TEMPLATES[templateName];
    const newSections = templateSections.map((section, index) => ({
      id: uuidv4(),
      type: section.type as SectionType,
      order: index,
      content: section.content,
    }));

    setSections(newSections);
  };

  // Update parent component whenever sections or metadata change
  useEffect(() => {
    onChange(JSON.stringify({ 
      sections,
      metadata: {
        ...metadata,
        template
      }
    }));
  }, [sections, metadata, template, onChange]);

  const addSection = (type: SectionType, index: number) => {
    const newSection = createSection(type, index + 1);
    
    const updatedSections = [
      ...sections.slice(0, index + 1),
      newSection,
      ...sections.slice(index + 1),
    ];
    
    // Update order of all sections
    const reorderedSections = updatedSections.map((section, idx) => ({
      ...section,
      order: idx,
    }));
    
    setSections(reorderedSections);
  };

  const removeSection = (index: number) => {
    if (sections.length === 1) {
      // Don't remove the last section, just reset it
      const newDefaultSection = createSection('paragraph', 0);
      setSections([newDefaultSection]);
      return;
    }
    
    const updatedSections = sections.filter((_, idx) => idx !== index);
    
    // Update order of all sections
    const reorderedSections = updatedSections.map((section, idx) => ({
      ...section,
      order: idx,
    }));
    
    setSections(reorderedSections);
  };

  const moveSection = (index: number, direction: 'up' | 'down') => {
    if (
      (direction === 'up' && index === 0) || 
      (direction === 'down' && index === sections.length - 1)
    ) {
      return; // Can't move further up/down
    }
    
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    const updatedSections = [...sections];
    
    // Swap sections
    [updatedSections[index], updatedSections[newIndex]] = 
      [updatedSections[newIndex], updatedSections[index]];
    
    // Update order values
    const reorderedSections = updatedSections.map((section, idx) => ({
      ...section,
      order: idx,
    }));
    
    setSections(reorderedSections);
  };

  const updateSectionType = (index: number, type: SectionType) => {
    const updatedSections = [...sections];
    const currentSection = { ...updatedSections[index] };
    
    // Create a new section of the desired type but preserve the ID and order
    const newTypeSection = createSection(type, currentSection.order);
    newTypeSection.id = currentSection.id;
    
    updatedSections[index] = newTypeSection;
    setSections(updatedSections);
  };

  const updateSectionContent = (index: number, content: any) => {
    const updatedSections = [...sections];
    updatedSections[index] = {
      ...updatedSections[index],
      content,
    };
    setSections(updatedSections);
  };

  const createSection = (type: SectionType, order: number): ContentSection => {
    switch (type) {
      case 'heading':
        return {
          id: uuidv4(),
          type,
          order,
          content: {
            text: '',
            level: 2,
          },
        };
      case 'paragraph':
        return {
          id: uuidv4(),
          type,
          order,
          content: {
            text: '',
          },
        };
      case 'image':
        return {
          id: uuidv4(),
          type,
          order,
          content: {
            url: '',
            alt: '',
          },
        };
      case 'code':
        return {
          id: uuidv4(),
          type,
          order,
          content: {
            code: '',
            language: 'javascript',
            fileName: '',
            description: '', // Added description field for two-column layout
          },
        };
      case 'quote':
        return {
          id: uuidv4(),
          type,
          order,
          content: {
            text: '',
            attribution: '',
          },
        };
      case 'link':
        return {
          id: uuidv4(),
          type,
          order,
          content: {
            url: '',
            title: '',
          },
        };
      case 'video':
        return {
          id: uuidv4(),
          type,
          order,
          content: {
            url: '',
          },
        };
      case 'list':
        return {
          id: uuidv4(),
          type,
          order,
          content: {
            items: [''],
            ordered: false,
          },
        };
      case 'divider':
        return {
          id: uuidv4(),
          type,
          order,
          content: {
            style: 'solid',
          },
        };
      case 'callout':
        return {
          id: uuidv4(),
          type,
          order,
          content: {
            text: '',
            variant: 'info',
          },
        };
      default:
        return {
          id: uuidv4(),
          type: 'paragraph',
          order,
          content: {
            text: '',
          },
        };
    }
  };

  const renderSectionEditor = (section: ContentSection, index: number) => {
    switch (section.type) {
      case 'heading':
        return (
          <div className="space-y-2">
            <div className="flex gap-2 items-center">
              <Select 
                value={section.content.level.toString()} 
                onValueChange={(value) => 
                  updateSectionContent(index, { 
                    ...section.content, 
                    level: parseInt(value) as 1|2|3|4|5|6 
                  })
                }
              >
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">H1</SelectItem>
                  <SelectItem value="2">H2</SelectItem>
                  <SelectItem value="3">H3</SelectItem>
                  <SelectItem value="4">H4</SelectItem>
                  <SelectItem value="5">H5</SelectItem>
                  <SelectItem value="6">H6</SelectItem>
                </SelectContent>
              </Select>
              <TextareaAutosize
                value={section.content.text}
                onChange={(e) => 
                  updateSectionContent(index, { 
                    ...section.content, 
                    text: e.target.value 
                  })
                }
                placeholder="Heading text"
                className="flex-1 resize-none border rounded-md p-2 min-h-[40px]"
              />
            </div>
            <div className="text-sm text-gray-500">
              {section.content.level === 1 && "Main heading (use sparingly)"}
              {section.content.level === 2 && "Section heading"}
              {section.content.level === 3 && "Subsection heading"}
              {section.content.level > 3 && "Minor heading"}
            </div>
          </div>
        );
      
      case 'paragraph':
        return (
          <TextareaAutosize
            value={section.content.text}
            onChange={(e) => 
              updateSectionContent(index, { 
                ...section.content, 
                text: e.target.value 
              })
            }
            placeholder="Write paragraph text..."
            className="w-full resize-none border rounded-md p-2 min-h-[100px]"
          />
        );
      
      case 'image':
        return (
          <div className="space-y-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={section.content.url}
                onChange={(e) => 
                  updateSectionContent(index, { 
                    ...section.content, 
                    url: e.target.value 
                  })
                }
                placeholder="Image URL"
                className="flex-1 border rounded-md p-2"
              />
              <Button 
                type="button"
                variant="outline"
                onClick={() => {
                  // Here you would integrate with your media library
                  alert("Media library selection would open here");
                }}
              >
                Browse
              </Button>
            </div>
            <input
              type="text"
              value={section.content.alt}
              onChange={(e) => 
                updateSectionContent(index, { 
                  ...section.content, 
                  alt: e.target.value 
                })
              }
              placeholder="Alt text (for accessibility)"
              className="w-full border rounded-md p-2"
            />
            <input
              type="text"
              value={section.content.caption || ''}
              onChange={(e) => 
                updateSectionContent(index, { 
                  ...section.content, 
                  caption: e.target.value 
                })
              }
              placeholder="Caption (optional)"
              className="w-full border rounded-md p-2"
            />
            {section.content.url && (
              <div className="mt-2">
                <p className="text-sm text-gray-500 mb-1">Preview:</p>
                <div className="border rounded p-2 bg-gray-50">
                  <img 
                    src={section.content.url} 
                    alt={section.content.alt} 
                    className="max-w-full h-auto mx-auto max-h-[300px] object-contain" 
                  />
                  {section.content.caption && (
                    <p className="text-center text-sm text-gray-500 mt-1">
                      {section.content.caption}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      
      case 'code':
        return (
          <div className="space-y-2">
            <div className="flex gap-2 items-center">
              <Select 
                value={section.content.language} 
                onValueChange={(value) => 
                  updateSectionContent(index, { 
                    ...section.content, 
                    language: value 
                  })
                }
              >
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="typescript">TypeScript</SelectItem>
                  <SelectItem value="html">HTML</SelectItem>
                  <SelectItem value="css">CSS</SelectItem>
                  <SelectItem value="jsx">JSX</SelectItem>
                  <SelectItem value="tsx">TSX</SelectItem>
                  <SelectItem value="json">JSON</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="bash">Bash</SelectItem>
                  <SelectItem value="sql">SQL</SelectItem>
                </SelectContent>
              </Select>
              <input
                type="text"
                value={section.content.fileName || ''}
                onChange={(e) => 
                  updateSectionContent(index, { 
                    ...section.content, 
                    fileName: e.target.value 
                  })
                }
                placeholder="Filename (optional)"
                className="flex-1 border rounded-md p-2"
              />
            </div>
            <CodeEditor 
              value={section.content.code}
              onChange={(code) => 
                updateSectionContent(index, { 
                  ...section.content, 
                  code 
                })
              }
              language={section.content.language}
            />
            
            <div className="mt-4">
              <p className="text-sm text-gray-700 mb-2">Description (for two-column layout)</p>
              <TextareaAutosize
                value={section.content.description || ''}
                onChange={(e) => 
                  updateSectionContent(index, { 
                    ...section.content, 
                    description: e.target.value 
                  })
                }
                placeholder="Add a description of the code (optional). This will appear in a column next to the code."
                className="w-full resize-none border rounded-md p-2 min-h-[120px]"
              />
              <p className="text-xs text-gray-500 mt-1">
                When a description is provided, the code will display in a two-column layout on larger screens.
              </p>
            </div>
          </div>
        );

      case 'quote':
        return (
          <div className="space-y-2">
            <TextareaAutosize
              value={section.content.text}
              onChange={(e) => 
                updateSectionContent(index, { 
                  ...section.content, 
                  text: e.target.value 
                })
              }
              placeholder="Quote text"
              className="w-full resize-none border rounded-md p-2 min-h-[80px]"
            />
            <input
              type="text"
              value={section.content.attribution || ''}
              onChange={(e) => 
                updateSectionContent(index, { 
                  ...section.content, 
                  attribution: e.target.value 
                })
              }
              placeholder="Attribution (optional)"
              className="w-full border rounded-md p-2"
            />
            {(section.content.text || section.content.attribution) && (
              <div className="mt-2">
                <p className="text-sm text-gray-500 mb-1">Preview:</p>
                <blockquote className="border-l-4 border-gray-300 pl-4 py-2 italic">
                  {section.content.text}
                  {section.content.attribution && (
                    <footer className="mt-1 text-sm not-italic">
                      — {section.content.attribution}
                    </footer>
                  )}
                </blockquote>
              </div>
            )}
          </div>
        );

      case 'link':
        return (
          <div className="space-y-2">
            <input
              type="text"
              value={section.content.url}
              onChange={(e) => 
                updateSectionContent(index, { 
                  ...section.content, 
                  url: e.target.value 
                })
              }
              placeholder="URL"
              className="w-full border rounded-md p-2"
            />
            <input
              type="text"
              value={section.content.title}
              onChange={(e) => 
                updateSectionContent(index, { 
                  ...section.content, 
                  title: e.target.value 
                })
              }
              placeholder="Link title"
              className="w-full border rounded-md p-2"
            />
            <TextareaAutosize
              value={section.content.description || ''}
              onChange={(e) => 
                updateSectionContent(index, { 
                  ...section.content, 
                  description: e.target.value 
                })
              }
              placeholder="Description (optional)"
              className="w-full resize-none border rounded-md p-2 min-h-[60px]"
            />
            <input
              type="text"
              value={section.content.imageUrl || ''}
              onChange={(e) => 
                updateSectionContent(index, { 
                  ...section.content, 
                  imageUrl: e.target.value 
                })
              }
              placeholder="Image URL (optional)"
              className="w-full border rounded-md p-2"
            />
            {section.content.url && section.content.title && (
              <div className="mt-2">
                <p className="text-sm text-gray-500 mb-1">Preview:</p>
                <div className="border rounded-md overflow-hidden">
                  <div className="flex">
                    {section.content.imageUrl && (
                      <div className="w-1/3">
                        <img 
                          src={section.content.imageUrl} 
                          alt="" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className={cn(
                      "p-3",
                      section.content.imageUrl ? "w-2/3" : "w-full"
                    )}>
                      <a 
                        href={section.content.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {section.content.title}
                      </a>
                      {section.content.description && (
                        <p className="text-sm text-gray-500 mt-1">
                          {section.content.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'video':
        return (
          <div className="space-y-2">
            <input
              type="text"
              value={section.content.url}
              onChange={(e) => 
                updateSectionContent(index, { 
                  ...section.content, 
                  url: e.target.value 
                })
              }
              placeholder="Video URL (YouTube, Vimeo, etc.)"
              className="w-full border rounded-md p-2"
            />
            <input
              type="text"
              value={section.content.caption || ''}
              onChange={(e) => 
                updateSectionContent(index, { 
                  ...section.content, 
                  caption: e.target.value 
                })
              }
              placeholder="Caption (optional)"
              className="w-full border rounded-md p-2"
            />
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`autoplay-${section.id}`}
                  checked={section.content.autoplay || false}
                  onChange={(e) => 
                    updateSectionContent(index, { 
                      ...section.content, 
                      autoplay: e.target.checked 
                    })
                  }
                  className="rounded border-gray-300"
                />
                <label htmlFor={`autoplay-${section.id}`}>Autoplay</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`loop-${section.id}`}
                  checked={section.content.loop || false}
                  onChange={(e) => 
                    updateSectionContent(index, { 
                      ...section.content, 
                      loop: e.target.checked 
                    })
                  }
                  className="rounded border-gray-300"
                />
                <label htmlFor={`loop-${section.id}`}>Loop</label>
              </div>
            </div>
            {section.content.url && (
              <div className="mt-2">
                <p className="text-sm text-gray-500 mb-1">Preview (placeholder):</p>
                <div className="bg-gray-100 border rounded aspect-video flex items-center justify-center">
                  <span className="text-gray-500">Video embed: {section.content.url}</span>
                </div>
                {section.content.caption && (
                  <p className="text-center text-sm text-gray-500 mt-1">
                    {section.content.caption}
                  </p>
                )}
              </div>
            )}
          </div>
        );

      case 'list':
        return (
          <div className="space-y-2">
            <div className="flex items-center gap-4 mb-2">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id={`bullet-${section.id}`}
                  checked={!section.content.ordered}
                  onChange={() => 
                    updateSectionContent(index, { 
                      ...section.content, 
                      ordered: false 
                    })
                  }
                  className="rounded border-gray-300"
                />
                <label htmlFor={`bullet-${section.id}`}>Bullet List</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id={`numbered-${section.id}`}
                  checked={section.content.ordered}
                  onChange={() => 
                    updateSectionContent(index, { 
                      ...section.content, 
                      ordered: true 
                    })
                  }
                  className="rounded border-gray-300"
                />
                <label htmlFor={`numbered-${section.id}`}>Numbered List</label>
              </div>
            </div>
            {section.content.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex gap-2 items-center">
                <span className="w-6 text-center">
                  {section.content.ordered ? `${itemIndex + 1}.` : '•'}
                </span>
                <input
                  type="text"
                  value={item}
                  onChange={(e) => {
                    const updatedItems = [...section.content.items];
                    updatedItems[itemIndex] = e.target.value;
                    updateSectionContent(index, { 
                      ...section.content, 
                      items: updatedItems 
                    });
                  }}
                  placeholder={`Item ${itemIndex + 1}`}
                  className="flex-1 border rounded-md p-2"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    const updatedItems = [...section.content.items];
                    updatedItems.splice(itemIndex, 1);
                    updateSectionContent(index, { 
                      ...section.content, 
                      items: updatedItems 
                    });
                  }}
                  disabled={section.content.items.length === 1}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              className="w-full mt-2"
              onClick={() => {
                const updatedItems = [...section.content.items, ''];
                updateSectionContent(index, { 
                  ...section.content, 
                  items: updatedItems 
                });
              }}
            >
              Add Item
            </Button>
          </div>
        );

      case 'divider':
        return (
          <div className="space-y-2">
            <Select 
              value={section.content.style || 'solid'} 
              onValueChange={(value) => 
                updateSectionContent(index, { 
                  ...section.content, 
                  style: value as 'solid' | 'dashed' | 'dotted'
                })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Divider style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="solid">Solid</SelectItem>
                <SelectItem value="dashed">Dashed</SelectItem>
                <SelectItem value="dotted">Dotted</SelectItem>
              </SelectContent>
            </Select>
            <div className="mt-2">
              <p className="text-sm text-gray-500 mb-1">Preview:</p>
              <hr className={`border-t-2 border-${section.content.style || 'solid'} my-4`} />
            </div>
          </div>
        );

      case 'callout':
        return (
          <div className="space-y-2">
            <Select 
              value={section.content.variant} 
              onValueChange={(value) => 
                updateSectionContent(index, { 
                  ...section.content, 
                  variant: value as 'info' | 'warning' | 'success' | 'error'
                })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Callout type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="info">Information</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="error">Error</SelectItem>
              </SelectContent>
            </Select>
            <TextareaAutosize
              value={section.content.text}
              onChange={(e) => 
                updateSectionContent(index, { 
                  ...section.content, 
                  text: e.target.value 
                })
              }
              placeholder="Callout text"
              className="w-full resize-none border rounded-md p-2 min-h-[80px]"
            />
            {section.content.text && (
              <div className="mt-2">
                <p className="text-sm text-gray-500 mb-1">Preview:</p>
                <div className={cn(
                  "p-4 border-l-4 rounded-r",
                  {
                    'bg-blue-50 border-blue-500': section.content.variant === 'info',
                    'bg-yellow-50 border-yellow-500': section.content.variant === 'warning',
                    'bg-green-50 border-green-500': section.content.variant === 'success',
                    'bg-red-50 border-red-500': section.content.variant === 'error',
                  }
                )}>
                  {section.content.text}
                </div>
              </div>
            )}
          </div>
        );

      default:
        return <div>Unknown section type: {section.type}</div>;
    }
  };

  return (
    <div className={cn("space-y-8", className)}>
      {/* Template selection */}
      <div className="relative border rounded-lg p-4 bg-white shadow-sm">
        <h3 className="font-medium mb-4 flex items-center">
          <Layout className="mr-2 h-5 w-5 text-gray-500" />
          Content Layout Template
        </h3>
        <TemplatePicker 
          value={template}
          onChange={(newTemplate) => {
            setTemplate(newTemplate);
            setMetadata(prev => ({
              ...prev,
              template: newTemplate
            }));
          }}
        />
        
        <div className="mt-6 pt-4 border-t">
          <h4 className="text-sm font-medium mb-2">Quick Start with Section Templates</h4>
          <p className="text-xs text-gray-500 mb-3">
            Apply a predefined content structure to quickly get started:
          </p>
          
          <div className="flex flex-wrap gap-2">
            <Button 
              type="button"
              size="sm"
              variant="outline"
              onClick={() => {
                if (sections.length > 0 && sections.some(s => {
                  return Object.values(s.content).some(v => 
                    typeof v === 'string' ? v.trim().length > 0 : v !== undefined
                  );
                })) {
                  if (!window.confirm('Applying a template will replace your current content. Continue?')) {
                    return;
                  }
                }
                // Create sections from story template
                const templateSections = SECTION_TEMPLATES.storyTemplate.map((section, index) => ({
                  id: uuidv4(),
                  type: section.type as SectionType,
                  order: index,
                  content: { ...section.content }
                })) as ContentSection[];
                
                setSections(templateSections);
              }}
            >
              Story Template
            </Button>
            
            <Button 
              type="button"
              size="sm"
              variant="outline"
              onClick={() => {
                if (sections.length > 0 && sections.some(s => {
                  return Object.values(s.content).some(v => 
                    typeof v === 'string' ? v.trim().length > 0 : v !== undefined
                  );
                })) {
                  if (!window.confirm('Applying a template will replace your current content. Continue?')) {
                    return;
                  }
                }
                // Create sections from tutorial template
                const templateSections = SECTION_TEMPLATES.tutorialTemplate.map((section, index) => ({
                  id: uuidv4(),
                  type: section.type as SectionType,
                  order: index,
                  content: { ...section.content }
                })) as ContentSection[];
                
                setSections(templateSections);
              }}
            >
              Tutorial Template
            </Button>
            
            <Button 
              type="button"
              size="sm"
              variant="outline"
              onClick={() => {
                if (sections.length > 0 && sections.some(s => {
                  return Object.values(s.content).some(v => 
                    typeof v === 'string' ? v.trim().length > 0 : v !== undefined
                  );
                })) {
                  if (!window.confirm('Applying a template will replace your current content. Continue?')) {
                    return;
                  }
                }
                // Create sections from portfolio template
                const templateSections = SECTION_TEMPLATES.portfolioTemplate.map((section, index) => ({
                  id: uuidv4(),
                  type: section.type as SectionType,
                  order: index,
                  content: { ...section.content }
                })) as ContentSection[];
                
                setSections(templateSections);
              }}
            >
              Portfolio Template
            </Button>
          </div>
        </div>
      </div>
      
      {sections.map((section, index) => (
        <div key={section.id} className="relative border rounded-lg p-4 bg-white shadow-sm">
          <div className="flex justify-between items-center mb-4 pb-2 border-b">
            <Select
              value={section.type}
              onValueChange={(value) => updateSectionType(index, value as SectionType)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Section type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="heading">Heading</SelectItem>
                <SelectItem value="paragraph">Paragraph</SelectItem>
                <SelectItem value="image">Image</SelectItem>
                <SelectItem value="code">Code</SelectItem>
                <SelectItem value="quote">Quote</SelectItem>
                <SelectItem value="link">Link</SelectItem>
                <SelectItem value="video">Video</SelectItem>
                <SelectItem value="list">List</SelectItem>
                <SelectItem value="divider">Divider</SelectItem>
                <SelectItem value="callout">Callout</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="flex items-center gap-1">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => moveSection(index, 'up')}
                disabled={index === 0}
                title="Move up"
                className="p-1"
              >
                <MoveUp className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => moveSection(index, 'down')}
                disabled={index === sections.length - 1}
                title="Move down"
                className="p-1"
              >
                <MoveDown className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeSection(index)}
                className="text-red-500 hover:text-red-700 p-1"
                title="Remove section"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            {renderSectionEditor(section, index)}
          </div>
          
          <div className="mt-4 pt-2 border-t text-center">
            <Button
              type="button"
              variant="ghost"
              onClick={() => addSection('paragraph', index)}
              className="text-blue-500 hover:text-blue-700"
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Add section below
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
