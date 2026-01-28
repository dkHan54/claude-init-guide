'use client';

import { motion } from 'framer-motion';

interface SlideTitleProps {
  title: string;
  subtitle?: string;
}

export function SlideTitle({ title, subtitle }: SlideTitleProps) {
  return (
    <div className="mb-8">
      <motion.h1
        className="text-5xl font-bold text-text-primary mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          className="text-xl text-text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
