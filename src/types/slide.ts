/** 코드 블록에서 지원하는 언어 */
export type CodeLanguage = 'typescript' | 'bash' | 'json' | 'javascript';

/** 슬라이드 콘텐츠 블록 타입 */
export type ContentBlock =
  | { type: 'text'; content: string; className?: string }
  | { type: 'bullets'; items: (string | { text: string; sub?: string[] })[]; animated?: boolean }
  | { type: 'code'; language: CodeLanguage; code: string; filename?: string }
  | { type: 'highlight'; content: string; variant?: 'tip' | 'warning' | 'info' | 'success' }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'comparison'; title?: string; items: { left: string; right: string }[] }
  | { type: 'twoColumn'; left: ContentBlock[]; right: ContentBlock[] }
  | { type: 'spacer'; size?: 'sm' | 'md' | 'lg' };

/** 슬라이드 레이아웃 타입 */
export type SlideLayout = 'default' | 'title' | 'code-focus' | 'split' | 'center';

/** 개별 슬라이드 데이터 구조 */
export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  content: ContentBlock[];
  layout?: SlideLayout;
  backgroundClass?: string;
}

/** 슬라이드 네비게이션 상태 */
export interface SlideState {
  currentIndex: number;
  totalSlides: number;
  direction: 1 | -1;
}

/** 코드 블록 props */
export interface CodeBlockProps {
  code: string;
  language: CodeLanguage;
  filename?: string;
  showLineNumbers?: boolean;
}

/** 애니메이션 요소 props */
export interface AnimatedElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}
