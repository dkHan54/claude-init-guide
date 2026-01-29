'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideIndicatorProps {
  current: number;
  total: number;
  titles?: string[];
  onGoTo?: (index: number) => void;
}

export function SlideIndicator({ current, total, titles, onGoTo }: SlideIndicatorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 닫기
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && onGoTo && (
          <motion.div
            className="absolute bottom-full right-0 mb-2 w-72 max-h-80 overflow-y-auto rounded-lg bg-bg-secondary/95 backdrop-blur-md border border-white/10 shadow-xl"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-2 space-y-0.5">
              {Array.from({ length: total }, (_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    onGoTo(i);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center gap-2 ${
                    i === current
                      ? 'bg-accent-purple/20 text-accent-purple'
                      : 'hover:bg-white/5 text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <span className="w-6 text-right text-xs opacity-50">{i + 1}</span>
                  <span className="truncate">{titles?.[i] || `슬라이드 ${i + 1}`}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => onGoTo && setIsOpen(!isOpen)}
        className={`flex items-center gap-1 px-3 py-1.5 rounded-md bg-bg-secondary/60 backdrop-blur-sm text-xs transition-all ${
          onGoTo ? 'cursor-pointer hover:bg-bg-secondary/80' : 'cursor-default'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0.6 }}
        whileHover={{ opacity: 1 }}
        transition={{ delay: isOpen ? 0 : 0.5 }}
      >
        <span className="font-medium text-text-secondary">{current + 1}</span>
        <span className="text-text-secondary/60">/</span>
        <span className="text-text-secondary/60">{total}</span>
        {onGoTo && (
          <motion.span
            className="ml-1 text-text-secondary/40"
            animate={{ rotate: isOpen ? 180 : 0 }}
          >
            ▲
          </motion.span>
        )}
      </motion.button>
    </div>
  );
}
