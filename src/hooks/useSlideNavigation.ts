'use client';

import { useState, useCallback, useEffect } from 'react';
import type { SlideState } from '@/types/slide';

interface UseSlideNavigationProps {
  totalSlides: number;
  initialIndex?: number;
}

interface UseSlideNavigationReturn extends SlideState {
  goToNext: () => void;
  goToPrev: () => void;
  goToSlide: (index: number) => void;
  canGoNext: boolean;
  canGoPrev: boolean;
}

function getInitialIndexFromHash(totalSlides: number, fallback: number): number {
  if (typeof window === 'undefined') return fallback;
  const hash = window.location.hash;
  if (hash) {
    const slideNum = parseInt(hash.replace('#slide-', ''));
    if (!isNaN(slideNum) && slideNum >= 1 && slideNum <= totalSlides) {
      return slideNum - 1;
    }
  }
  return fallback;
}

export function useSlideNavigation({
  totalSlides,
  initialIndex = 0,
}: UseSlideNavigationProps): UseSlideNavigationReturn {
  const [currentIndex, setCurrentIndex] = useState(() =>
    getInitialIndexFromHash(totalSlides, initialIndex)
  );
  const [direction, setDirection] = useState<1 | -1>(1);

  // Update hash on slide change
  useEffect(() => {
    window.history.replaceState(null, '', `#slide-${currentIndex + 1}`);
  }, [currentIndex]);

  const goToNext = useCallback(() => {
    if (currentIndex < totalSlides - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, totalSlides]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const goToSlide = useCallback(
    (index: number) => {
      // Handle -1 as last slide
      const targetIndex = index === -1 ? totalSlides - 1 : index;

      if (targetIndex >= 0 && targetIndex < totalSlides && targetIndex !== currentIndex) {
        setDirection(targetIndex > currentIndex ? 1 : -1);
        setCurrentIndex(targetIndex);
      }
    },
    [currentIndex, totalSlides]
  );

  return {
    currentIndex,
    totalSlides,
    direction,
    goToNext,
    goToPrev,
    goToSlide,
    canGoNext: currentIndex < totalSlides - 1,
    canGoPrev: currentIndex > 0,
  };
}
