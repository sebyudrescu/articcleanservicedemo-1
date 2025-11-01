import {
  type ComponentPropsWithoutRef,
  type ElementType,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';

const prefersReducedMotion = () => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

type ScrollRevealProps<T extends ElementType> = {
  as?: T;
  className?: string;
  delay?: number;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>;

const ScrollReveal = <T extends ElementType = 'div'>({
  as,
  className = '',
  delay = 0,
  children,
  ...rest
}: ScrollRevealProps<T>) => {
  const Tag = (as ?? 'div') as ElementType;
  const [isVisible, setIsVisible] = useState(prefersReducedMotion());
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setIsVisible(true);
      return;
    }

    const node = elementRef.current;
    if (!node) {
      return;
    }

    let cancelled = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!cancelled && entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10%'
      }
    );

    observer.observe(node);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, []);

  const combinedClassName = useMemo(
    () =>
      [
        'scroll-reveal',
        isVisible ? 'scroll-reveal--visible' : '',
        className
      ]
        .filter(Boolean)
        .join(' '),
    [className, isVisible]
  );

  const styleFromProps = (rest as { style?: React.CSSProperties }).style ?? {};
  const mergedStyle = useMemo(
    () => ({
      ...styleFromProps,
      transitionDelay: `${delay}ms`
    }),
    [delay, styleFromProps]
  );

  return (
    <Tag
      ref={elementRef}
      className={combinedClassName}
      {...rest}
      style={mergedStyle}
    >
      {children}
    </Tag>
  );
};

export default ScrollReveal;
