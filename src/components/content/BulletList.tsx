'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';

interface BulletItem {
  text: string;
  sub?: string[];
}

interface BulletListProps {
  items: (string | BulletItem)[];
  animated?: boolean;
}

export function BulletList({ items, animated = true }: BulletListProps) {
  const Container = animated ? motion.ul : 'ul';
  const Item = animated ? motion.li : 'li';

  return (
    <Container
      className="space-y-4"
      {...(animated && {
        variants: staggerContainer,
        initial: 'hidden',
        animate: 'visible',
      })}
    >
      {items.map((item, index) => {
        const isObject = typeof item === 'object';
        const text = isObject ? item.text : item;
        const sub = isObject ? item.sub : undefined;

        return (
          <Item
            key={index}
            className="flex items-start gap-3 text-lg"
            {...(animated && { variants: staggerItem })}
          >
            <span className="mt-2 w-2 h-2 rounded-full bg-accent-purple flex-shrink-0" />
            <div>
              <span className="text-text-primary">{text}</span>
              {sub && sub.length > 0 && (
                <ul className="mt-2 ml-2 space-y-2">
                  {sub.map((subItem, subIndex) => (
                    <li key={subIndex} className="flex items-start gap-2 text-base text-text-secondary">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-text-secondary/50 flex-shrink-0" />
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Item>
        );
      })}
    </Container>
  );
}
