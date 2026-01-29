'use client';

import type { SlideData } from '@/types/slide';
import { useSlideNavigation, useKeyboardNavigation } from '@/hooks';
import { SlideContainer } from './SlideContainer';
import { ProgressBar, SlideIndicator } from '@/components/navigation';

interface SlidePresenterProps {
  slides: SlideData[];
  initialIndex?: number;
}

export function SlidePresenter({ slides, initialIndex = 0 }: SlidePresenterProps) {
  const {
    currentIndex,
    totalSlides,
    direction,
    goToNext,
    goToPrev,
    goToSlide,
    canGoNext,
    canGoPrev,
  } = useSlideNavigation({ totalSlides: slides.length, initialIndex });

  useKeyboardNavigation({
    onNext: goToNext,
    onPrev: goToPrev,
    onGoTo: goToSlide,
  });

  return (
    <div className="relative w-full h-screen bg-bg-primary overflow-hidden">
      <ProgressBar current={currentIndex} total={totalSlides} />

      <SlideContainer
        slides={slides}
        currentIndex={currentIndex}
        direction={direction}
      />

      <SlideIndicator
        current={currentIndex}
        total={totalSlides}
        titles={slides.map(s => s.title)}
        onGoTo={goToSlide}
      />
    </div>
  );
}
