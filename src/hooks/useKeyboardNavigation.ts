'use client';

import { useEffect, useCallback } from 'react';

interface UseKeyboardNavigationProps {
  onNext: () => void;
  onPrev: () => void;
  onGoTo?: (index: number) => void;
}

export function useKeyboardNavigation({ onNext, onPrev, onGoTo }: UseKeyboardNavigationProps) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      // Ignore if typing in an input
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.key) {
        case 'ArrowRight':
        case ' ':
        case 'Enter':
          event.preventDefault();
          onNext();
          break;
        case 'ArrowLeft':
        case 'Backspace':
          event.preventDefault();
          onPrev();
          break;
        case 'Home':
          event.preventDefault();
          onGoTo?.(0);
          break;
        case 'End':
          event.preventDefault();
          onGoTo?.(-1); // -1 means last slide
          break;
        // Number keys 1-9 for quick navigation
        default:
          if (onGoTo && /^[1-9]$/.test(event.key)) {
            event.preventDefault();
            onGoTo(parseInt(event.key) - 1);
          }
      }
    },
    [onNext, onPrev, onGoTo]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}
