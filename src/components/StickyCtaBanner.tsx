import { useEffect, useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Sparkles, X } from 'lucide-react';

const STORAGE_KEY = 'articclean-sticky-cta-dismissed';

const StickyCtaBanner = () => {
  const [isDismissed, setIsDismissed] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isNearFooter, setIsNearFooter] = useState(false);
  const [isHotspotHighlighted, setIsHotspotHighlighted] = useState(false);
  const [hasScrolledPastThreshold, setHasScrolledPastThreshold] = useState(false);
  const [shouldBounce, setShouldBounce] = useState(false);

  const headingId = useId();
  const descriptionId = useId();
  const calloutId = useId();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const legacyDismissed = window.localStorage.getItem(STORAGE_KEY);
    if (legacyDismissed) {
      window.localStorage.removeItem(STORAGE_KEY);
    }

    const isHidden = window.sessionStorage.getItem(STORAGE_KEY);
    setIsDismissed(Boolean(isHidden));
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const onScroll = () => {
      setHasScrolledPastThreshold(window.scrollY > window.innerHeight * 0.35);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || isDismissed) {
      return;
    }

    const cleanups: Array<() => void> = [];

    // Intersection observers keep the CTA contextual without expensive scroll handlers.
    const heroAnchor = document.querySelector('[data-cta-anchor="hero"]');
    if (heroAnchor) {
      const heroObserver = new IntersectionObserver(
        ([entry]) => setIsHeroVisible(entry.isIntersecting),
        { threshold: 0.35 }
      );
      heroObserver.observe(heroAnchor);
      cleanups.push(() => heroObserver.disconnect());
    } else {
      const trackFallback = () => {
        setIsHeroVisible(window.scrollY < window.innerHeight * 0.5);
      };
      trackFallback();
      window.addEventListener('scroll', trackFallback, { passive: true });
      cleanups.push(() => window.removeEventListener('scroll', trackFallback));
    }

    const hotspotAnchors = document.querySelectorAll('[data-cta-anchor="cta-hotspot"]');
    if (hotspotAnchors.length) {
      const hotspotObserver = new IntersectionObserver(
        (entries) => {
          setIsHotspotHighlighted(entries.some((entry) => entry.isIntersecting));
        },
        { threshold: 0.4 }
      );
      hotspotAnchors.forEach((anchor) => hotspotObserver.observe(anchor));
      cleanups.push(() => hotspotObserver.disconnect());
    }

    const footerAnchor = document.getElementById('site-footer');
    if (footerAnchor) {
      const footerObserver = new IntersectionObserver(
        ([entry]) => setIsNearFooter(entry.isIntersecting),
        { threshold: 0.2 }
      );
      footerObserver.observe(footerAnchor);
      cleanups.push(() => footerObserver.disconnect());
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [isDismissed]);

  const isContextualTrigger = !isHeroVisible || isHotspotHighlighted || isNearFooter;
  const shouldDisplay = !isDismissed && (hasScrolledPastThreshold || isContextualTrigger);

  useEffect(() => {
    if (!shouldDisplay) {
      setShouldBounce(false);
      return;
    }

    setShouldBounce(false);
    const bounceTrigger = window.setTimeout(() => setShouldBounce(true), 800);
    const bounceReset = window.setTimeout(() => setShouldBounce(false), 2200);

    return () => {
      window.clearTimeout(bounceTrigger);
      window.clearTimeout(bounceReset);
    };
  }, [shouldDisplay, isHotspotHighlighted, isNearFooter]);

  const handleDismiss = () => {
    setIsDismissed(true);
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(STORAGE_KEY, 'true');
    }
  };

  if (!shouldDisplay) {
    return null;
  }

  const bottomOffset = isNearFooter ? '7rem' : '1.5rem';

  return (
    <div className="fixed inset-x-0 z-[60] px-4 pointer-events-none" style={{ bottom: bottomOffset }}>
      <div className="mx-auto max-w-5xl pointer-events-auto">
        <section
          className={`cta-card relative overflow-hidden rounded-2xl border border-white/25 accent-gradient px-6 py-6 shadow-2xl shadow-sky-900/20 backdrop-blur ${
            shouldBounce ? 'cta-card--pulse' : ''
          }`}
          role="region"
          aria-live="polite"
          aria-labelledby={headingId}
          aria-describedby={descriptionId}
        >
          <button
            type="button"
            onClick={handleDismiss}
            className="absolute right-3 top-3 rounded-lg p-1 text-white/80 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 hover:bg-white/10 hover:text-white"
            aria-label="Chiudi messaggio promozionale"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-8">
            <div className="flex-1 text-white">
              <span
                id={calloutId}
                className="inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em]"
              >
                <Sparkles className="h-3 w-3" aria-hidden="true" />
                Offerta Limitata
              </span>
              <p id={headingId} className="mt-3 text-lg font-semibold leading-snug md:text-xl">
                Preventivo gratuito in 24 ore e sopralluogo prioritario per aziende e condomini.
              </p>
              <p id={descriptionId} className="mt-2 text-sm text-white/80 md:text-base">
                Team certificato Artic Pulizie: piani personalizzati, prodotti professionali e supporto continuativo
                in tutta Brescia e provincia.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <Link
                to="/richiedi-preventivo"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold shadow-lg transition hover:shadow-xl accent-focus"
                aria-describedby={calloutId}
                aria-label="Richiedi un preventivo gratuito Artic Pulizie"
                style={{ color: 'var(--accent-color-strong)' }}
              >
                Richiedi Preventivo
              </Link>

              <a
                href="tel:+390305231285"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 accent-focus"
                aria-label="Chiama subito Artic Pulizie"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Chiama Subito
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StickyCtaBanner;
