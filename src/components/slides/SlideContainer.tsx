'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { slideVariants, slideTransition } from '@/lib/animations';
import type { SlideData } from '@/types/slide';
import { Slide } from './Slide';

interface SlideContainerProps {
  slides: SlideData[];
  currentIndex: number;
  direction: 1 | -1;
}

export function SlideContainer({ slides, currentIndex, direction }: SlideContainerProps) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={slideTransition}
          className="absolute inset-0 overflow-y-auto"
        >
          <Slide data={slides[currentIndex]} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
