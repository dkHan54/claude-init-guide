# 초기 셋업 추가 콘텐츠 계획

## 출처
- [Anthropic 공식 Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices)
- [Claude Code 공식 설정 문서](https://code.claude.com/docs/en/settings)
- [CLAUDE.md 작성 가이드 - Dometrain](https://dometrain.com/blog/creating-the-perfect-claudemd-for-claude-code/)
- [Claude Code CLI 치트시트 - Shipyard](https://shipyard.build/blog/claude-code-cheat-sheet/)
- [40+ Claude Code Tips - GitHub](https://github.com/ykdojo/claude-code-tips)
- [HumanLayer CLAUDE.md 가이드](https://www.humanlayer.dev/blog/writing-a-good-claude-md)

---

## 추가할 콘텐츠 (새 슬라이드 또는 기존 보강)

### 1. CLAUDE.md 작성 베스트 프랙티스 (새 슬라이드 추가)

**핵심 내용:**
- WHAT: 기술 스택, 프로젝트 구조, 코드베이스 맵
- WHY: 프로젝트 목적, 각 부분의 역할
- HOW: 개발 방식 (bun vs node, 테스트 방법 등)

**베스트 프랙티스:**
- 간결하게 유지 (150-200개 지침이 한계)
- 스타일 규칙은 린터에 맡기기 (LLM은 느리고 비쌈)
- 터미널 명령어 문서화 필수
- 비밀 정보 포함 금지 (API 키, 연결 문자열)

**코드 예시:**
```markdown
# CLAUDE.md 예시

## 프로젝트 개요
Next.js 14 기반 웹 애플리케이션

## 기술 스택
- Next.js 14 (App Router)
- TypeScript 5.x
- Tailwind CSS

## 개발 명령어
- `npm run dev` - 개발 서버
- `npm run build` - 프로덕션 빌드
- `npm run test` - 테스트 실행
- `npm run lint` - 린트 검사

## 코드 규칙
- ESLint + Prettier 사용
- 컴포넌트는 src/components에 배치
- 타입은 src/types에 정의

## 주의사항
- API 키는 .env.local에 저장 (커밋 금지)
```

---

### 2. 설정 파일 계층 구조 (기존 슬라이드 5번 보강)

**3단계 설정 계층:**
```
~/.claude/settings.json      # 전역 (모든 프로젝트)
.claude/settings.json        # 프로젝트 (팀 공유, git에 포함)
.claude/settings.local.json  # 로컬 (개인용, git 제외)
```

**CLAUDE.md 위치:**
```
~/.claude/CLAUDE.md          # 전역 (모든 세션)
프로젝트루트/CLAUDE.md       # 프로젝트 (git에 포함)
프로젝트루트/CLAUDE.local.md # 로컬 (gitignore)
하위폴더/CLAUDE.md           # 필요시 로드
```

---

### 3. 성능 최적화 팁 (새 슬라이드 또는 17번 보강)

**컨텍스트 관리:**
- 새 대화 = 최고 성능 (컨텍스트 오염 없음)
- 주제 변경 시 새 대화 시작 권장
- 성능 저하 느껴지면 새 대화로 전환

**토큰 절약:**
- `/compact` 명령으로 컨텍스트 정리
- 불필요한 파일 읽기 최소화
- 명확한 지시로 반복 줄이기

---

### 4. 커스텀 슬래시 명령어 (새 슬라이드 - Skills 섹션에 통합 가능)

**슬래시 명령어 만들기:**
- 자주 쓰는 프롬프트를 명령어로 저장
- `.claude/commands/` 폴더에 파일 생성

**예시:**
```markdown
# .claude/commands/review.md
코드를 리뷰해주세요:
1. 버그 가능성
2. 성능 이슈
3. 보안 취약점
4. 코드 스타일
```

사용: `/project:review`

---

### 5. 서브에이전트 활용 (기존 슬라이드 보강)

**서브에이전트 특징:**
- Stateless (매 호출마다 새로운 컨텍스트)
- 자율 실행 (중간 상호작용 없이 완료)
- 병렬 실행 가능 (성능 극대화)
- 단일 메시지로 결과 반환

**OMC에서의 활용:**
- 32개 전문 에이전트가 서브에이전트로 동작
- architect, executor, designer 등

---

## 슬라이드 구성 변경 제안

### Option A: 기존 슬라이드 보강
- 슬라이드 5 (초기 설정): 설정 계층 구조 추가
- 슬라이드 17 (주의사항): 성능 팁 추가

### Option B: 새 슬라이드 추가 (권장)
기존 18장 → 20장으로 확장

| 새 슬라이드 | 위치 | 내용 |
|------------|------|------|
| CLAUDE.md 작성법 | 5번 뒤 (새 6번) | WHAT/WHY/HOW + 베스트 프랙티스 |
| 성능 최적화 | 10번 뒤 | 컨텍스트 관리, 토큰 절약 |

### Option C: 슬라이드 교체
- 기존 슬라이드 중 중복/덜 중요한 내용 압축
- 새 내용으로 교체

---

## 결정 필요 사항

1. **슬라이드 수**: 18장 유지 vs 20장 확장?
2. **CLAUDE.md 슬라이드**: 별도 추가 vs 기존 보강?
3. **성능 팁**: 별도 슬라이드 vs 주의사항에 통합?
