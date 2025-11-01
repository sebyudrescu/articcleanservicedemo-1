import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener('change', updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.4);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const footer = document.getElementById('site-footer');
    if (!footer) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsNearFooter(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (!isVisible) {
    return null;
  }

  const onScrollToTop = () => {
    if (typeof window === 'undefined') {
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  };

  const bottomOffset = isNearFooter ? '7rem' : '1.5rem';

  return (
    <div className="fixed inset-x-0 pointer-events-none z-[55]" style={{ bottom: bottomOffset }}>
      <div className="max-w-7xl mx-auto px-4 flex justify-end">
        <button
          type="button"
          onClick={onScrollToTop}
          className="scroll-top-button accent-focus show"
          aria-label="Torna all'inizio della pagina"
        >
          <ArrowUp aria-hidden="true" className="h-5 w-5" />
          <span className="sr-only">Torna su</span>
        </button>
      </div>
    </div>
  );
};

export default ScrollToTopButton;
