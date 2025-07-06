'use client';

import { motion } from 'framer-motion';

export default function CVPageClient() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto max-w-5xl px-4 py-16"
    >
      <div className="flex flex-col items-start">
        <h1 className="text-4xl font-bold">CV</h1>
        <p className="mt-2 text-lg text-gray-400">
          My curriculum vitae.
        </p>
      </div>
      <div className="my-8 h-px w-full bg-gray-800" />
      <div>
        <p>CV content goes here.</p>
      </div>
    </motion.div>
  );
}
