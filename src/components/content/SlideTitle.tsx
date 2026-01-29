'use client';

import { motion } from 'framer-motion';
import { titleVariants, subtitleVariants } from '@/lib/animations';

interface SlideTitleProps {
  title: string;
  subtitle?: string;
}

export function SlideTitle({ title, subtitle }: SlideTitleProps) {
  return (
    <motion.div
      className="mb-8"
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-5xl font-bold text-text-primary mb-4"
        variants={titleVariants}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          className="text-xl text-text-secondary"
          variants={subtitleVariants}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
