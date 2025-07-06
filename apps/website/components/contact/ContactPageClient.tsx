'use client';

import { motion } from 'framer-motion';

import { Button } from '@/components/ui/Button';

export default function ContactPageClient() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto max-w-5xl px-4 py-16"
    >
      <div className="flex flex-col items-start">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="mt-2 text-lg text-gray-400">
          I am always open to new opportunities and collaborations.
        </p>
      </div>
      <form className="mt-8 grid grid-cols-1 gap-y-6">
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} />
        </div>
        <Button type="submit">Send Message</Button>
      </form>
    </motion.div>
  );
}
