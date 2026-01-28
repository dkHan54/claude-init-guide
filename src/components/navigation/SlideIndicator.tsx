'use client';

import { motion } from 'framer-motion';

interface SlideIndicatorProps {
  current: number;
  total: number;
}

export function SlideIndicator({ current, total }: SlideIndicatorProps) {
  return (
    <motion.div
      className="fixed bottom-4 right-4 flex items-center gap-1 px-2 py-1 rounded-md bg-bg-secondary/60 backdrop-blur-sm text-xs z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      whileHover={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <span className="font-medium text-text-secondary">{current + 1}</span>
      <span className="text-text-secondary/60">/</span>
      <span className="text-text-secondary/60">{total}</span>
    </motion.div>
  );
}
