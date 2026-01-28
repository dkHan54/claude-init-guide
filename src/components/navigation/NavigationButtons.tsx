'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
}

export function NavigationButtons({ onPrev, onNext, canGoPrev, canGoNext }: NavigationButtonsProps) {
  return (
    <>
      {/* 이전 버튼 */}
      <motion.button
        onClick={onPrev}
        disabled={!canGoPrev}
        className={`fixed left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-bg-secondary/80 backdrop-blur-sm border border-text-secondary/20 z-50 transition-all ${
          canGoPrev ? 'hover:bg-bg-secondary hover:border-accent-purple cursor-pointer' : 'opacity-30 cursor-not-allowed'
        }`}
        whileHover={canGoPrev ? { scale: 1.1 } : {}}
        whileTap={canGoPrev ? { scale: 0.95 } : {}}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <ChevronLeft className="w-6 h-6 text-text-primary" />
      </motion.button>

      {/* 다음 버튼 */}
      <motion.button
        onClick={onNext}
        disabled={!canGoNext}
        className={`fixed right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-bg-secondary/80 backdrop-blur-sm border border-text-secondary/20 z-50 transition-all ${
          canGoNext ? 'hover:bg-bg-secondary hover:border-accent-purple cursor-pointer' : 'opacity-30 cursor-not-allowed'
        }`}
        whileHover={canGoNext ? { scale: 1.1 } : {}}
        whileTap={canGoNext ? { scale: 0.95 } : {}}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <ChevronRight className="w-6 h-6 text-text-primary" />
      </motion.button>
    </>
  );
}
