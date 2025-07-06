'use client';

import { useState } from 'react';
import { TemplateType } from '@/components/content/ContentTemplates';
import { cn } from '@/lib/utils';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type TemplateOption = {
  value: TemplateType;
  label: string;
  description: string;
};

const templateOptions: TemplateOption[] = [
  {
    value: 'standard',
    label: 'Standard',
    description: 'Classic blog layout with balanced typography'
  },
  {
    value: 'immersive',
    label: 'Immersive',
    description: 'Full-width images and large typography for impactful content'
  },
  {
    value: 'magazine',
    label: 'Magazine',
    description: 'Multi-column layout with pull quotes, similar to print magazines'
  },
  {
    value: 'technical',
    label: 'Technical',
    description: 'Code-focused layout with enhanced syntax highlighting'
  },
  {
    value: 'portfolio',
    label: 'Portfolio',
    description: 'Project showcase with visual emphasis and gallery features'
  },
  {
    value: 'story',
    label: 'Story',
    description: 'Narrative-focused layout with elegant typography and animations'
  }
];

type TemplatePickerProps = {
  value: TemplateType;
  onChange: (template: TemplateType) => void;
  className?: string;
};

export default function TemplatePicker({ value = 'standard', onChange, className }: TemplatePickerProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>(value);
  
  const handleTemplateChange = (newValue: string) => {
    const template = newValue as TemplateType;
    setSelectedTemplate(template);
    onChange(template);
  };
  
  // Find the description for the current template
  const currentTemplate = templateOptions.find(t => t.value === selectedTemplate);
  
  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700">Content Template</label>
          <p className="text-sm text-gray-500">{currentTemplate?.description}</p>
        </div>
        <Select 
          value={selectedTemplate} 
          onValueChange={handleTemplateChange}
        >
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Select template" />
          </SelectTrigger>
          <SelectContent>
            {templateOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="p-4 border border-gray-200 rounded-md bg-gray-50">
        <div className="text-center text-sm text-gray-500">
          <div className={cn(
            "inline-block px-3 py-1 rounded-full",
            {
              "bg-blue-100 text-blue-700": selectedTemplate === 'standard',
              "bg-purple-100 text-purple-700": selectedTemplate === 'immersive',
              "bg-amber-100 text-amber-700": selectedTemplate === 'magazine',
              "bg-slate-100 text-slate-700": selectedTemplate === 'technical',
              "bg-indigo-100 text-indigo-700": selectedTemplate === 'portfolio',
              "bg-emerald-100 text-emerald-700": selectedTemplate === 'story',
            }
          )}>
            {selectedTemplate} template
          </div>
          <p className="mt-2">
            {selectedTemplate === 'standard' && 'Well-balanced typography with clean margins'}
            {selectedTemplate === 'immersive' && 'Edge-to-edge imagery with bold typography'}
            {selectedTemplate === 'magazine' && 'Elegant multi-column layout for long-form content'}
            {selectedTemplate === 'technical' && 'Enhanced code blocks and documentation-style layout'}
            {selectedTemplate === 'portfolio' && 'Showcase-oriented with larger visuals and project details'}
            {selectedTemplate === 'story' && 'Narrative flow with elegant typography and smooth animations'}
          </p>
        </div>
      </div>
    </div>
  );
}
