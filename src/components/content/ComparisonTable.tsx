'use client';

import { motion } from 'framer-motion';

interface ComparisonTableProps {
  title?: string;
  items: { left: string; right: string }[];
}

export function ComparisonTable({ title, items }: ComparisonTableProps) {
  return (
    <motion.div
      className="overflow-hidden rounded-lg border border-text-secondary/20"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {title && (
        <div className="px-4 py-3 bg-bg-secondary border-b border-text-secondary/20">
          <h3 className="font-semibold text-text-primary">{title}</h3>
        </div>
      )}
      <table className="w-full">
        <thead>
          <tr className="bg-bg-secondary/50">
            <th className="px-4 py-3 text-left text-sm font-medium text-text-secondary border-r border-text-secondary/20">Before</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-text-secondary">After</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <motion.tr
              key={index}
              className="border-t border-text-secondary/20"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <td className="px-4 py-3 text-text-secondary border-r border-text-secondary/20">{item.left}</td>
              <td className="px-4 py-3 text-accent-green">{item.right}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
