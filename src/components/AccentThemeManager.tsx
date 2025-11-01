import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AVAILABLE_ACCENTS = ['sky', 'cyan', 'emerald', 'blue'] as const;
type AccentKey = (typeof AVAILABLE_ACCENTS)[number];

const resolveAccentKey = (value: string | null, fallbackIndex: number): AccentKey => {
  if (value && AVAILABLE_ACCENTS.includes(value as AccentKey)) {
    return value as AccentKey;
  }

  return AVAILABLE_ACCENTS[fallbackIndex % AVAILABLE_ACCENTS.length];
};

const AccentThemeManager = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = document.documentElement;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-theme-accent], main section')
    );

    if (sections.length === 0) {
      root.dataset.accent = 'sky';
      return;
    }

    sections.forEach((section, index) => {
      const accentKey = resolveAccentKey(section.dataset.themeAccent ?? null, index);
      section.dataset.themeAccentResolved = accentKey;
      section.style.scrollMarginTop = '6rem';
    });

    const applyAccent = (accent: AccentKey) => {
      root.dataset.accent = accent;
    };

    applyAccent(
      (sections[0] as HTMLElement | undefined)?.dataset.themeAccentResolved as AccentKey ?? 'sky'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const topEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!topEntry) {
          return;
        }

        const accentKey =
          (topEntry.target as HTMLElement).dataset.themeAccentResolved as AccentKey | undefined;

        if (!accentKey || root.dataset.accent === accentKey) {
          return;
        }

        if (prefersReducedMotion) {
          applyAccent(accentKey);
          return;
        }

        window.requestAnimationFrame(() => applyAccent(accentKey));
      },
      {
        threshold: prefersReducedMotion ? 0.15 : [0.25, 0.5, 0.75],
        rootMargin: '-10% 0px -60% 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  return null;
};

export default AccentThemeManager;
