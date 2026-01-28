'use client';

import { motion } from 'framer-motion';
import { Info, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';

interface HighlightProps {
  content: string;
  variant?: 'tip' | 'warning' | 'info' | 'success';
}

const variantStyles = {
  tip: {
    bg: 'bg-accent-purple/10',
    border: 'border-accent-purple/30',
    icon: Lightbulb,
    iconColor: 'text-accent-purple',
  },
  warning: {
    bg: 'bg-accent-orange/10',
    border: 'border-accent-orange/30',
    icon: AlertTriangle,
    iconColor: 'text-accent-orange',
  },
  info: {
    bg: 'bg-accent-blue/10',
    border: 'border-accent-blue/30',
    icon: Info,
    iconColor: 'text-accent-blue',
  },
  success: {
    bg: 'bg-accent-green/10',
    border: 'border-accent-green/30',
    icon: CheckCircle,
    iconColor: 'text-accent-green',
  },
};

export function Highlight({ content, variant = 'info' }: HighlightProps) {
  const styles = variantStyles[variant];
  const Icon = styles.icon;

  return (
    <motion.div
      className={`flex items-start gap-3 p-4 rounded-lg border ${styles.bg} ${styles.border}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${styles.iconColor}`} />
      <p className="text-text-primary">{content}</p>
    </motion.div>
  );
}
