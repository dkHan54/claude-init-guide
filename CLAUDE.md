# Claude Code 초기 가이드 웹사이트

PPT 스타일 슬라이드 프레젠테이션 웹앱.

## 기술 스택

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## 명령어

- `nvm use 20` - Node 20 필수 (Next.js 16 요구사항)
- `npm run dev` - 개발 서버 (localhost:3000)
- `npm run build` - 프로덕션 빌드

## 구조

- `src/data/slides.ts` - 슬라이드 콘텐츠 (18장)
- `src/components/slides/` - 슬라이드 컴포넌트
- `src/components/content/` - 콘텐츠 블록 (CodeBlock, BulletList 등)
- `src/components/navigation/` - 네비게이션 (ProgressBar, SlideIndicator)
- `src/types/slide.ts` - 타입 정의

## 슬라이드 타입

CodeLanguage: 'typescript' | 'bash' | 'json' | 'javascript'
Layout: 'default' | 'title' | 'code-focus' | 'split' | 'center'

## 규칙

- 키보드 좌우 화살표로 슬라이드 이동
- 긴 콘텐츠는 스크롤 가능
- 다크 모드 전용 디자인
