import type { SlideData } from '@/types/slide';

export const slides: SlideData[] = [
  // Slide 1: 타이틀
  {
    id: 1,
    title: 'Claude Code로 개발 워크플로우 혁신하기',
    subtitle: '개발자를 위한 AI 코딩 어시스턴트 가이드',
    layout: 'title',
    content: [
      {
        type: 'text',
        content: '+ oh-my-claudecode 플러그인',
        className: 'text-accent-purple text-xl',
      },
    ],
  },

  // Slide 2: 왜 Claude Code인가?
  {
    id: 2,
    title: '왜 Claude Code인가?',
    subtitle: 'AI 코딩 도구의 진화',
    content: [
      {
        type: 'table',
        headers: ['기능', 'Copilot', 'Cursor', 'Claude Code'],
        rows: [
          ['자동완성', '✓', '✓', '✓'],
          ['대화형 코딩', '△', '✓', '✓'],
          ['파일 편집', '✗', '✓', '✓'],
          ['터미널 실행', '✗', '△', '✓'],
          ['멀티 에이전트', '✗', '✗', '✓ (OMC)'],
          ['자율 실행', '✗', '△', '✓'],
        ],
      },
      { type: 'spacer', size: 'md' },
      {
        type: 'highlight',
        content: 'Claude Code = 대화형 페어 프로그래머 + 자율 실행 에이전트',
        variant: 'tip',
      },
    ],
  },

  // Slide 3: CLAUDE.md 작성 베스트 프랙티스
  {
    id: 3,
    title: 'CLAUDE.md 작성법',
    subtitle: '프로젝트 맞춤 설정의 핵심',
    layout: 'split',
    content: [
      {
        type: 'twoColumn',
        left: [
          {
            type: 'text',
            content: 'WHAT / WHY / HOW 프레임워크',
            className: 'font-semibold text-accent-purple mb-2',
          },
          {
            type: 'bullets',
            items: [
              { text: 'WHAT', sub: ['기술 스택, 프로젝트 구조, 코드베이스 맵'] },
              { text: 'WHY', sub: ['프로젝트 목적, 각 모듈의 역할'] },
              { text: 'HOW', sub: ['빌드/테스트 명령어, 배포 절차'] },
            ],
          },
          { type: 'spacer', size: 'sm' },
          {
            type: 'text',
            content: '파일 위치 옵션',
            className: 'font-semibold text-accent-blue mb-2',
          },
          {
            type: 'bullets',
            items: [
              { text: '프로젝트루트/CLAUDE.md', sub: ['팀 공유용 (git 커밋)'] },
              { text: 'CLAUDE.local.md', sub: ['개인 설정 (.gitignore 추가)'] },
              { text: '~/.claude/CLAUDE.md', sub: ['전역 설정 (모든 프로젝트)'] },
            ],
          },
        ],
        right: [
          {
            type: 'text',
            content: '핵심 꿀팁',
            className: 'font-semibold text-accent-purple mb-2',
          },
          {
            type: 'bullets',
            items: [
              { text: '/init으로 시작', sub: ['자동 생성 후 불필요한 것 삭제'] },
              { text: '# 키로 즉시 추가', sub: ['작업 중 발견한 규칙 바로 저장'] },
              { text: '@파일명 참조', sub: ['@README.md로 다른 파일 임포트'] },
              { text: '300줄 미만 유지', sub: ['60줄 이하가 이상적'] },
            ],
          },
          { type: 'spacer', size: 'sm' },
          {
            type: 'text',
            content: '피해야 할 것',
            className: 'font-semibold text-red-400 mb-2',
          },
          {
            type: 'bullets',
            items: [
              { text: '스타일 규칙', sub: ['린터에 맡기기 (ESLint, Prettier)'] },
              { text: '코드 스니펫 복붙', sub: ['금방 outdated됨, file:line 참조'] },
              { text: '모호한 지시', sub: ['"코드 잘 짜줘" → 구체적으로'] },
            ],
          },
        ],
      },
      { type: 'spacer', size: 'sm' },
      {
        type: 'code',
        language: 'bash',
        code: `# 프로젝트 개요
Next.js 14 App Router 기반 웹앱

# 명령어
- npm run dev    개발 서버 실행 (포트 3000)
- npm run build  프로덕션 빌드
- npm run test   Jest 테스트 실행

# 아키텍처
- src/components  React 컴포넌트
- src/lib         유틸리티 (@lib/utils.ts 참조)

# 규칙
- IMPORTANT: API 응답은 반드시 try-catch로 감싸기
- 새 컴포넌트는 tests/에 테스트 필수`,
        filename: 'CLAUDE.md',
      },
      {
        type: 'highlight',
        content: '핵심: Claude는 "관련 없으면 무시해도 됨"이라는 시스템 지침을 받음. 모든 세션에 적용되는 보편적 규칙만 작성!',
        variant: 'warning',
      },
    ],
  },

  // Slide 4: oh-my-claudecode 소개
  {
    id: 4,
    title: 'oh-my-claudecode (OMC)',
    subtitle: '멀티 에이전트 오케스트레이션 플러그인',
    content: [
      {
        type: 'bullets',
        items: [
          {
            text: '32개 전문 에이전트',
            sub: ['architect, executor, designer, researcher, qa-tester 등'],
          },
          {
            text: '31+ 내장 스킬',
            sub: ['autopilot, ralph, ultrawork, plan, analyze 등'],
          },
          {
            text: 'Zero Learning Curve',
            sub: ['"build me a REST API" → 자동으로 autopilot 활성화'],
          },
          {
            text: '스마트 모델 라우팅',
            sub: ['간단한 작업 → Haiku, 복잡한 추론 → Opus (30-50% 비용 절감)'],
          },
        ],
      },
    ],
  },

  // Slide 5: 설치 가이드
  {
    id: 5,
    title: '설치 가이드',
    subtitle: '3단계로 시작하기',
    layout: 'code-focus',
    content: [
      { type: 'text', content: '1. Claude Code CLI 설치 & 로그인' },
      {
        type: 'code',
        language: 'bash',
        code: 'npm install -g @anthropic-ai/claude-code\nclaude   # 첫 실행 시 브라우저로 로그인 (Max/Pro 구독 필요)',
        filename: 'Terminal',
      },
      { type: 'spacer', size: 'sm' },
      { type: 'text', content: '2. (선택) API 키 사용 시' },
      {
        type: 'code',
        language: 'bash',
        code: 'export ANTHROPIC_API_KEY="sk-ant-..."',
        filename: 'Terminal',
      },
      { type: 'spacer', size: 'sm' },
      { type: 'text', content: '3. oh-my-claudecode 플러그인 설치' },
      {
        type: 'code',
        language: 'bash',
        code: '/plugin marketplace add https://github.com/Yeachan-Heo/oh-my-claudecode\n/plugin install oh-my-claudecode',
        filename: 'Claude Code 내에서',
      },
    ],
  },

  // Slide 6: 초기 설정
  {
    id: 6,
    title: '초기 설정',
    subtitle: 'omc-setup으로 한 번에',
    layout: 'code-focus',
    content: [
      {
        type: 'code',
        language: 'bash',
        code: '/oh-my-claudecode:omc-setup',
        filename: 'Claude Code',
      },
      { type: 'spacer', size: 'md' },
      {
        type: 'bullets',
        items: [
          'HUD 상태바 설치 (실시간 에이전트 상태, 비용 추적)',
          'CLAUDE.md 자동 생성 (프로젝트별 지침)',
          '기본 실행 모드 선택 (ultrawork / ecomode)',
          '권장 MCP 서버 설정 안내',
        ],
      },
      {
        type: 'highlight',
        content: '설정 후에는 자연어로 대화하듯이 사용하면 됩니다!',
        variant: 'success',
      },
    ],
  },

  // Slide 7: OMC 기본 포함 기능
  {
    id: 7,
    title: 'OMC 기본 포함 기능',
    subtitle: '설치만 하면 바로 사용 가능!',
    content: [
      {
        type: 'twoColumn',
        left: [
          {
            type: 'text',
            content: '32개 전문 에이전트',
            className: 'font-semibold text-accent-purple',
          },
          {
            type: 'bullets',
            items: [
              'architect - 아키텍처 분석',
              'executor - 코드 구현',
              'designer - UI/UX',
              'researcher - 문서 조사',
              'qa-tester - 테스트',
            ],
          },
        ],
        right: [
          {
            type: 'text',
            content: '자동 기능',
            className: 'font-semibold text-accent-blue',
          },
          {
            type: 'bullets',
            items: [
              '스마트 모델 라우팅',
              '자동 패턴 감지',
              'Architect 검증',
              'HUD 상태바',
              '비용 추적',
            ],
          },
        ],
      },
      { type: 'spacer', size: 'md' },
      {
        type: 'highlight',
        content: '"build me..."라고 말하면 자동으로 autopilot이 활성화됩니다',
        variant: 'tip',
      },
    ],
  },

  // Slide 8: OMC HUD 설정
  {
    id: 8,
    title: 'OMC HUD 상태창',
    subtitle: '실시간 모니터링',
    layout: 'split',
    content: [
      {
        type: 'code',
        language: 'bash',
        code: '[OMC] | 5h:[░░░░░░░░]6%(4h40m) wk:[█░░░░░░░]17%(4d7h) | thinking | ctx:[██████░░░░]63%',
        filename: 'HUD 예시 (focused + useBars)',
      },
      { type: 'spacer', size: 'sm' },
      {
        type: 'twoColumn',
        left: [
          {
            type: 'text',
            content: 'elements 옵션',
            className: 'font-semibold text-accent-purple mb-2',
          },
          {
            type: 'bullets',
            items: [
              { text: 'omcLabel', sub: ['[OMC] 라벨'] },
              { text: 'rateLimits', sub: ['5h/wk 사용량 + 남은시간'] },
              { text: 'contextBar', sub: ['ctx:63% 컨텍스트'] },
              { text: 'useBars', sub: ['[██░░] 프로그레스 바'] },
              { text: 'thinking', sub: ['extended thinking 표시'] },
              { text: 'agents', sub: ['실행 중인 에이전트'] },
              { text: 'agentsFormat', sub: ['count / codes / multiline'] },
              { text: 'todos', sub: ['TODO 진행 상황'] },
              { text: 'ralph / autopilot', sub: ['활성 모드 상태'] },
              { text: 'prdStory', sub: ['PRD 스토리 ID'] },
              { text: 'activeSkills / lastSkill', sub: ['스킬 표시'] },
              { text: 'backgroundTasks', sub: ['백그라운드 태스크'] },
              { text: 'sessionHealth', sub: ['세션 상태'] },
            ],
          },
        ],
        right: [
          {
            type: 'text',
            content: '프리셋 & 설정 예시',
            className: 'font-semibold text-accent-blue mb-2',
          },
          {
            type: 'bullets',
            items: [
              { text: 'minimal', sub: ['필수만, useBars 꺼짐'] },
              { text: 'focused', sub: ['기본값, useBars 켜짐'] },
              { text: 'full / dense', sub: ['모든 정보 + multiline'] },
            ],
          },
          { type: 'spacer', size: 'sm' },
          {
            type: 'code',
            language: 'json',
            code: '{\n  "preset": "focused",\n  "elements": {\n    "sessionHealth": false,\n    "useBars": true,\n    "agentsFormat": "multiline",\n    "agentsMaxLines": 10\n  }\n}',
            filename: '사용자 설정 예시',
          },
          { type: 'spacer', size: 'sm' },
          {
            type: 'highlight',
            content: '설정: ~/.claude/.omc/hud-config.json',
            variant: 'info',
          },
        ],
      },
      { type: 'spacer', size: 'sm' },
      {
        type: 'text',
        content: '비용 추적 (full/dense/analytics 프리셋)',
        className: 'font-semibold text-accent-orange mb-2',
      },
      {
        type: 'code',
        language: 'bash',
        code: '🟢 $0.0234 | 45.2k | Cache: 67.3% | $0.15/h',
        filename: 'sessionHealth 예시',
      },
      {
        type: 'highlight',
        content: 'Budget: $2+ → notice, $5+ → ALERT. 색상: 🟢정상 🟡경고 🔴위험',
        variant: 'warning',
      },
    ],
  },

  // Slide 9: 추천 MCP 서버
  {
    id: 9,
    title: '추천 MCP 서버',
    subtitle: '선택사항이지만 강력 추천',
    content: [
      {
        type: 'table',
        headers: ['MCP 서버', '용도', '추천도'],
        rows: [
          ['context7', '라이브러리 공식 문서 실시간 조회', '***'],
          ['sequential-thinking', '복잡한 추론 구조화 (선택)', '*'],
        ],
      },
      { type: 'spacer', size: 'sm' },
      {
        type: 'highlight',
        content: 'GitHub/Filesystem MCP는 불필요 - gh CLI와 기본 파일 도구로 충분',
        variant: 'tip',
      },
      { type: 'spacer', size: 'sm' },
      {
        type: 'code',
        language: 'bash',
        code: '/oh-my-claudecode:mcp-setup',
        filename: 'MCP 설정 시작',
      },
    ],
  },

  // Slide 10: Autopilot 모드
  {
    id: 10,
    title: 'Autopilot 모드',
    subtitle: '완전 자율 실행',
    layout: 'code-focus',
    content: [
      { type: 'text', content: '아이디어만 말하면 끝까지 실행' },
      {
        type: 'code',
        language: 'bash',
        code: '"build me a REST API for task management with CRUD operations"',
        filename: '입력',
      },
      { type: 'spacer', size: 'md' },
      {
        type: 'bullets',
        items: [
          {
            text: '자동 계획 수립',
            sub: ['요구사항 분석 → 기술 사양 → 구현 계획'],
          },
          {
            text: '병렬 에이전트 실행',
            sub: ['architect + executor + qa-tester 협업'],
          },
          { text: 'Architect 검증', sub: ['완료 전 자동 품질 검증'] },
        ],
      },
      {
        type: 'highlight',
        content: '매직 키워드: "autopilot:", "build me", "I want a"',
        variant: 'info',
      },
    ],
  },

  // Slide 11: Ralph & Ultrawork
  {
    id: 11,
    title: 'Ralph & Ultrawork',
    subtitle: '지속성 + 병렬 실행',
    content: [
      {
        type: 'twoColumn',
        left: [
          {
            type: 'text',
            content: 'Ralph (지속성 모드)',
            className: 'font-semibold text-accent-orange',
          },
          {
            type: 'bullets',
            items: [
              '끝까지 완료 보장',
              '에러 발생 시 자동 수정',
              'Architect 검증 통과까지 반복',
            ],
          },
          {
            type: 'code',
            language: 'bash',
            code: 'ralph: refactor auth module',
            filename: '사용법',
          },
        ],
        right: [
          {
            type: 'text',
            content: 'Ultrawork (병렬 모드)',
            className: 'font-semibold text-accent-blue',
          },
          {
            type: 'bullets',
            items: [
              '최대 병렬 실행',
              '독립 작업 동시 처리',
              '대규모 변경에 적합',
            ],
          },
          {
            type: 'code',
            language: 'bash',
            code: 'ulw fix all TypeScript errors',
            filename: '사용법',
          },
        ],
      },
      { type: 'spacer', size: 'md' },
      {
        type: 'highlight',
        content: '조합 가능: "ralph ulw: migrate database" = 지속성 + 병렬',
        variant: 'tip',
      },
    ],
  },

  // Slide 12: Ecomode & 비용 최적화
  {
    id: 12,
    title: 'Ecomode & 비용 최적화',
    subtitle: '토큰 효율적 실행',
    content: [
      {
        type: 'table',
        headers: ['모드', '특징', '비용'],
        rows: [
          ['ultrawork', '최대 병렬, Sonnet 중심', '높음'],
          ['ecomode', 'Haiku 우선, 필요시 Sonnet', '30-50% 절감'],
        ],
      },
      { type: 'spacer', size: 'md' },
      { type: 'text', content: '스마트 모델 라우팅' },
      {
        type: 'bullets',
        items: [
          { text: 'Haiku (저비용)', sub: ['단순 조회, 파일 탐색, 간단한 수정'] },
          { text: 'Sonnet (중간)', sub: ['일반 구현, 리팩토링'] },
          {
            text: 'Opus (고비용)',
            sub: ['복잡한 아키텍처, 디버깅, 보안 분석'],
          },
        ],
      },
      {
        type: 'code',
        language: 'bash',
        code: 'eco fix all linting errors  # 비용 효율적 실행',
        filename: 'Ecomode 사용',
      },
    ],
  },

  // Slide 13: Plan & Analyze
  {
    id: 13,
    title: 'Plan & Analyze',
    subtitle: '복잡한 작업 전 계획 수립',
    content: [
      {
        type: 'code',
        language: 'bash',
        code: '/oh-my-claudecode:plan implement user authentication',
        filename: '계획 세션 시작',
      },
      { type: 'spacer', size: 'md' },
      {
        type: 'bullets',
        items: [
          {
            text: '인터뷰 워크플로우',
            sub: ['요구사항 확인 → 기술 선택 → 범위 확정'],
          },
          {
            text: 'Analyst 분석',
            sub: ['숨겨진 요구사항, 엣지 케이스 탐지'],
          },
          { text: 'Architect 검토', sub: ['기술 사양 작성, 위험 평가'] },
          { text: 'Critic 리뷰 (선택)', sub: ['계획 품질 검증'] },
        ],
      },
      {
        type: 'highlight',
        content: '복잡한 기능은 바로 구현하지 말고 plan부터!',
        variant: 'warning',
      },
    ],
  },

  // Slide 14: 성능 최적화 & 컨텍스트 관리
  {
    id: 14,
    title: '성능 최적화 & 컨텍스트 관리',
    subtitle: '효율적인 Claude Code 사용법',
    content: [
      {
        type: 'twoColumn',
        left: [
          {
            type: 'text',
            content: '컨텍스트 관리',
            className: 'font-semibold text-accent-blue',
          },
          {
            type: 'bullets',
            items: [
              { text: '새 대화 = 최고 성능', sub: ['주제 바뀌면 새 대화 시작'] },
              { text: '/context로 사용량 확인', sub: ['70% 넘으면 /compact 고려'] },
              { text: '/compact 커스텀 가능', sub: ['"수정 파일만 보존해줘"'] },
            ],
          },
        ],
        right: [
          {
            type: 'text',
            content: '/compact 팁',
            className: 'font-semibold text-accent-purple',
          },
          {
            type: 'bullets',
            items: [
              { text: '자동(95%)보다 수동 권장', sub: ['작업 완료 시점에 직접 실행'] },
              { text: 'CLAUDE.md에 규칙 설정', sub: ['"compact시 파일목록 보존"'] },
              { text: '중요 정보 먼저 언급', sub: ['직전에 말하면 요약에 포함'] },
            ],
          },
        ],
      },
      { type: 'spacer', size: 'sm' },
      {
        type: 'code',
        language: 'bash',
        code: '/compact 수정한 파일 목록과 실패한 접근법 보존해줘',
        filename: '커스텀 compact 예시',
      },
    ],
  },

  // Slide 15: 예시 1 - 간단한 기능 구현
  {
    id: 15,
    title: '예시 1: 간단한 기능 구현',
    subtitle: 'autopilot으로 REST API 만들기',
    layout: 'code-focus',
    content: [
      {
        type: 'code',
        language: 'bash',
        code: '"build me a Express.js REST API for managing todos with:\n- GET /todos - list all\n- POST /todos - create\n- PUT /todos/:id - update\n- DELETE /todos/:id - delete"',
        filename: '입력',
      },
      { type: 'spacer', size: 'md' },
      { type: 'text', content: '자동 실행 흐름:' },
      {
        type: 'bullets',
        items: [
          '1. 요구사항 분석 (Analyst)',
          '2. 프로젝트 구조 설계 (Architect)',
          '3. 코드 구현 (Executor)',
          '4. 테스트 작성 (QA-Tester)',
          '5. 최종 검증 (Architect)',
        ],
      },
    ],
  },

  // Slide 16: 예시 2 - 디버깅
  {
    id: 16,
    title: '예시 2: 디버깅 워크플로우',
    subtitle: 'analyze 모드로 버그 추적',
    layout: 'code-focus',
    content: [
      {
        type: 'code',
        language: 'bash',
        code: '/oh-my-claudecode:analyze "TypeError: Cannot read property \'id\' of undefined"',
        filename: '입력',
      },
      { type: 'spacer', size: 'md' },
      { type: 'text', content: 'Architect 에이전트가:' },
      {
        type: 'bullets',
        items: [
          '스택 트레이스 분석',
          '관련 코드 탐색',
          '근본 원인 식별 (file:line)',
          '수정 방안 제시',
        ],
      },
      {
        type: 'highlight',
        content: '복잡한 버그는 analyze → plan → executor 순서로',
        variant: 'tip',
      },
    ],
  },

  // Slide 17: 예시 3 - 대규모 리팩토링
  {
    id: 17,
    title: '예시 3: 대규모 리팩토링',
    subtitle: 'ultrawork로 병렬 처리',
    layout: 'code-focus',
    content: [
      {
        type: 'code',
        language: 'bash',
        code: 'ralph ulw: migrate all class components to functional components with hooks',
        filename: '입력',
      },
      { type: 'spacer', size: 'md' },
      { type: 'text', content: '병렬 에이전트 분업:' },
      {
        type: 'bullets',
        items: [
          'Executor A: src/components/Header.tsx',
          'Executor B: src/components/Sidebar.tsx',
          'Executor C: src/components/Footer.tsx',
          '... (파일별 병렬 처리)',
        ],
      },
      {
        type: 'highlight',
        content: 'ralph가 모든 파일 완료까지 지속 실행',
        variant: 'info',
      },
    ],
  },

  // Slide 18: Skills 활용 전략
  {
    id: 18,
    title: 'Skills 활용 전략',
    subtitle: '자주 쓰는 스킬들',
    content: [
      {
        type: 'table',
        headers: ['스킬', '용도', '사용법'],
        rows: [
          ['autopilot', '완전 자율 실행', '"build me..." 또는 /autopilot'],
          ['plan', '계획 수립', '/plan [작업]'],
          ['analyze', '깊은 분석', '/analyze [문제]'],
          ['deepsearch', '코드베이스 탐색', '/deepsearch [검색어]'],
          ['tdd', '테스트 주도 개발', '/tdd [기능]'],
          ['code-review', '코드 리뷰', '/code-review'],
        ],
      },
      { type: 'spacer', size: 'md' },
      { type: 'text', content: '커스텀 스킬 만들기:' },
      {
        type: 'code',
        language: 'bash',
        code: '/oh-my-claudecode:learner  # 현재 세션에서 패턴 추출',
        filename: 'learner',
      },
    ],
  },

  // Slide 19: 보안 & 자동화
  {
    id: 19,
    title: '보안 & 자동화',
    subtitle: 'Hook과 GitHub Actions',
    content: [
      {
        type: 'twoColumn',
        left: [
          {
            type: 'text',
            content: 'Hook 기반 보안',
            className: 'font-semibold text-accent-purple',
          },
          {
            type: 'bullets',
            items: [
              { text: '위험 명령어 차단', sub: ['rm -rf, sudo 등 사전 검증'] },
              { text: '민감 파일 보호', sub: ['.env, .ssh, credentials 접근 방지'] },
              { text: '디렉토리 탈출 방지', sub: ['프로젝트 외부 접근 제한'] },
              { text: '감사 로깅', sub: ['모든 도구 사용 기록'] },
            ],
          },
          {
            type: 'code',
            language: 'bash',
            code: '# .claude/settings.json\n"hooks": {\n  "PreToolUse": [{\n    "matcher": "Bash",\n    "hooks": ["./security-check.sh"]\n  }]\n}',
            filename: 'Hook 설정 예시',
          },
        ],
        right: [
          {
            type: 'text',
            content: 'GitHub Actions 통합',
            className: 'font-semibold text-accent-blue',
          },
          {
            type: 'bullets',
            items: [
              { text: '@claude 멘션', sub: ['PR/이슈에서 Claude 호출'] },
              { text: '자동 코드 리뷰', sub: ['PR 생성 시 자동 분석'] },
              { text: '버그 수정 PR 생성', sub: ['이슈 → 자동 PR'] },
              { text: '문서 자동 업데이트', sub: ['코드 변경 시 docs 동기화'] },
            ],
          },
          {
            type: 'code',
            language: 'bash',
            code: '# PR 코멘트에서\n@claude 이 PR의 보안 취약점 분석해줘\n\n# 이슈에서\n@claude 이 버그 수정하는 PR 만들어줘',
            filename: '사용 예시',
          },
        ],
      },
      {
        type: 'highlight',
        content: 'GitHub Actions는 anthropics/claude-code-action 사용. API 키 또는 OAuth 토큰 필요',
        variant: 'info',
      },
    ],
  },

  // Slide 20: 개인 경험담
  {
    id: 20,
    title: 'Claude Code 사용 경험',
    subtitle: '실전에서 배운 것들',
    content: [
      {
        type: 'text',
        content: '💡 핵심 깨달음',
        className: 'font-semibold text-accent-purple',
      },
      {
        type: 'bullets',
        items: [
          {
            text: 'Plan Mode 먼저, 코딩은 나중에',
            sub: ['설계 충분히 다듬은 후 auto-accept 모드로 전환하면 1-shot 해결'],
          },
          {
            text: '첫 제안은 보통 틀림',
            sub: ['반복 수정 예상하고 시작. Plan Mode에서 2-3회 반복이 정상'],
          },
          {
            text: '새 코드 vs 기존 코드',
            sub: ['처음부터 Claude가 짜면 plan에 집중, 기존 코드 수정은 auto-accept 끄고 중간 검토 필수'],
          },
        ],
      },
      { type: 'spacer', size: 'sm' },
      {
        type: 'text',
        content: '⚙️ 워크플로우 팁',
        className: 'font-semibold text-accent-blue',
      },
      {
        type: 'bullets',
        items: [
          {
            text: 'Shift-Tab 모드 전환',
            sub: ['계획 모드 ↔ 자동 수락 모드 ↔ 일반 모드. Plan 확정 후 자동 수락으로 전환하면 빠름'],
          },
          {
            text: '검증 피드백 루프 연결',
            sub: ['린터, 타입체커, 테스트를 Claude가 직접 실행하게 → 수동 검토 시간 절약'],
          },
          {
            text: '새 대화 = 신선한 컨텍스트',
            sub: ['주제 바뀌면 새 대화 시작. 길어지면 /compact로 컨텍스트 압축'],
          },
          {
            text: 'CLAUDE.md를 온보딩 문서처럼',
            sub: ['Claude를 신입 개발자로 생각. 실수는 기록해서 학습시키기'],
          },
          {
            text: '병렬 세션 운영 (Git Worktrees)',
            sub: ['여러 Claude 세션 동시 실행. 각각 별도 checkout으로 충돌 방지'],
          },
        ],
      },
    ],
  },

  // Slide 21: 참조 문서
  {
    id: 21,
    title: '참조 문서',
    subtitle: '더 깊이 알아보기',
    layout: 'center',
    content: [
      {
        type: 'bullets',
        items: [
          {
            text: 'Claude Code 공식 문서',
            sub: ['https://docs.anthropic.com/en/docs/claude-code'],
          },
          {
            text: 'oh-my-claudecode GitHub',
            sub: ['https://github.com/Yeachan-Heo/oh-my-claudecode'],
          },
          {
            text: 'Hyperithm Claude Code 가이드 (기초)',
            sub: ['https://tech.hyperithm.com/claude_code_guides'],
          },
          {
            text: 'Hyperithm Claude Code 가이드 (심화)',
            sub: ['https://tech.hyperithm.com/claude_code_guides_2'],
          },
        ],
      },
      { type: 'spacer', size: 'lg' },
      {
        type: 'highlight',
        content: 'Happy Coding with Claude! 🚀',
        variant: 'success',
      },
    ],
  },
];
