import { PrismTheme } from 'prism-react-renderer';

/** 다크 모드 코드 테마 (GitHub Dark 스타일) */
export const darkCodeTheme: PrismTheme = {
  plain: {
    color: '#e6edf3',
    backgroundColor: '#161b22',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#8b949e',
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: '#a5d6ff',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: '#e6edf3',
      },
    },
    {
      types: ['entity', 'url', 'symbol', 'number', 'boolean', 'variable', 'constant', 'property', 'regex', 'inserted'],
      style: {
        color: '#79c0ff',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: '#ff7b72',
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: '#d2a8ff',
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: '#d2a8ff',
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: '#7ee787',
      },
    },
    {
      types: ['builtin', 'char', 'constant'],
      style: {
        color: '#79c0ff',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: '#ffa657',
      },
    },
  ],
};
