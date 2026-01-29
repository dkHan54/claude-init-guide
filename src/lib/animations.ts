import { Variants, Transition } from 'framer-motion';

/** 커스텀 이징 함수 */
const smoothEasing: [number, number, number, number] = [0.25, 0.1, 0.25, 1]; // cubic-bezier
const gentleEasing: [number, number, number, number] = [0.4, 0, 0.2, 1]; // Material Design easing

/** 슬라이드 전환 애니메이션 - 페이지 넘김 효과 */
export const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0.5,
    scale: 0.98,
    zIndex: 2,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    zIndex: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '50%' : '-50%',
    opacity: 0,
    scale: 0.95,
    zIndex: 0,
  }),
};

/** 슬라이드 전환 트랜지션 - 페이지 넘김용 */
export const slideTransition: Transition = {
  type: 'tween',
  duration: 0.4,
  ease: gentleEasing,
};

/** 요소 페이드인 애니메이션 - 더 자연스럽게 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay,
      duration: 0.6,
      ease: smoothEasing,
    },
  }),
};

/** 리스트 아이템 스태거 애니메이션 - 더 우아하게 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, x: -15, y: 5 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: smoothEasing,
    },
  },
};

/** 스케일 인 애니메이션 - 더 부드럽게 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92, filter: 'blur(2px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: smoothEasing,
    },
  },
};

/** 하이라이트 펄스 애니메이션 */
export const highlightPulse: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: gentleEasing,
    },
  },
};

/** 제목 애니메이션 - 특별하게 */
export const titleVariants: Variants = {
  hidden: { opacity: 0, y: -20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: smoothEasing,
    },
  },
};

/** 서브타이틀 애니메이션 */
export const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: smoothEasing,
    },
  },
};

/** 콘텐츠 컨테이너 애니메이션 */
export const contentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.4,
      ease: gentleEasing,
      staggerChildren: 0.1,
    },
  },
};
