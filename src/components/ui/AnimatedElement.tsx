'use client';

import { motion } from 'framer-motion';
import type { AnimatedElementProps } from '@/types/slide';

export function AnimatedElement({ children, delay = 0, duration = 0.5, className = '' }: AnimatedElementProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
}
