'use client';

import { useState, useEffect } from 'react';

interface CodeEditorProps {
  value: string;
  onChange: (code: string) => void;
  language: string;
}

export default function CodeEditor({ value, onChange, language }: CodeEditorProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full font-mono text-sm border rounded-md p-4 min-h-[200px] bg-gray-50"
      placeholder={`Enter ${language} code here...`}
    />
  );
}
