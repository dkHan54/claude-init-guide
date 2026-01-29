'use client';

import { motion } from 'framer-motion';
import type { SlideData, ContentBlock } from '@/types/slide';
import { SlideTitle } from '@/components/content/SlideTitle';
import { BulletList } from '@/components/content/BulletList';
import { CodeBlock } from '@/components/content/CodeBlock';
import { Highlight } from '@/components/content/Highlight';
import { Table } from '@/components/content/Table';
import { ComparisonTable } from '@/components/content/ComparisonTable';
import { fadeInUp, titleVariants, subtitleVariants, contentVariants } from '@/lib/animations';

interface SlideProps {
  data: SlideData;
}

function renderContentBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'text':
      return (
        <motion.p
          key={index}
          className={`text-lg text-text-primary leading-relaxed ${block.className || ''}`}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={index * 0.1}
        >
          {block.content}
        </motion.p>
      );

    case 'bullets':
      return <BulletList key={index} items={block.items} animated={block.animated !== false} />;

    case 'code':
      return (
        <CodeBlock
          key={index}
          code={block.code}
          language={block.language}
          filename={block.filename}
        />
      );

    case 'highlight':
      return <Highlight key={index} content={block.content} variant={block.variant} />;

    case 'table':
      return <Table key={index} headers={block.headers} rows={block.rows} />;

    case 'comparison':
      return <ComparisonTable key={index} title={block.title} items={block.items} />;

    case 'twoColumn':
      return (
        <motion.div
          key={index}
          className="grid grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {block.left.map((b, i) => renderContentBlock(b, i))}
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {block.right.map((b, i) => renderContentBlock(b, i))}
          </motion.div>
        </motion.div>
      );

    case 'spacer':
      const sizeMap = { sm: 'h-4', md: 'h-8', lg: 'h-12' };
      return <div key={index} className={sizeMap[block.size || 'md']} />;

    default:
      return null;
  }
}

export function Slide({ data }: SlideProps) {
  const { title, subtitle, content, layout = 'default' } = data;

  const layoutClasses = {
    default: 'max-w-4xl mx-auto',
    title: 'flex flex-col items-center justify-center text-center h-full',
    'code-focus': 'max-w-5xl mx-auto',
    split: 'max-w-6xl mx-auto',
    center: 'max-w-4xl mx-auto flex flex-col items-center justify-center text-center h-full',
  };

  return (
    <div className={`w-full min-h-full p-12 pb-24 ${layoutClasses[layout]}`}>
      {layout === 'title' ? (
        <motion.div
          className="space-y-6"
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-6xl font-bold bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent"
            variants={titleVariants}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              className="text-2xl text-text-secondary"
              variants={subtitleVariants}
            >
              {subtitle}
            </motion.p>
          )}
          <motion.div
            className="space-y-4 mt-8"
            variants={contentVariants}
          >
            {content.map((block, index) => renderContentBlock(block, index))}
          </motion.div>
        </motion.div>
      ) : (
        <>
          <SlideTitle title={title} subtitle={subtitle} />
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            {content.map((block, index) => renderContentBlock(block, index))}
          </motion.div>
        </>
      )}
    </div>
  );
}
