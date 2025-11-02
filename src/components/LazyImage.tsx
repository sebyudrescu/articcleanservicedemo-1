import { useState, useEffect, useRef } from 'react';
import type { ImgHTMLAttributes } from 'react';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  placeholder?: string;
  fallbackSrc?: string;
  priority?: boolean;
}

const DEFAULT_PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23f1f5f9" width="800" height="600"/%3E%3C/svg%3E';

const LazyImage = ({
  src = '',
  alt = '',
  className = '',
  placeholder = DEFAULT_PLACEHOLDER,
  fallbackSrc,
  priority = false,
  loading,
  decoding,
  ...rest
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement>(null);
  const hasUsedFallback = useRef(false);

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '50px' }
    );

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!src) return;
    setCurrentSrc(src);
    hasUsedFallback.current = false;
    setIsLoaded(false);
  }, [src]);

  const handleError = () => {
    if (fallbackSrc && !hasUsedFallback.current) {
      hasUsedFallback.current = true;
      setCurrentSrc(fallbackSrc);
      setIsLoaded(false);
    }
  };

  const displaySrc = priority || isInView ? currentSrc : placeholder;
  const resolvedLoading = priority ? 'eager' : loading ?? 'lazy';
  const resolvedDecoding = priority ? 'sync' : decoding ?? 'async';

  return (
    <img
      ref={imgRef}
      src={displaySrc}
      alt={alt}
      className={`${className} transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      onLoad={() => setIsLoaded(true)}
      loading={resolvedLoading}
      decoding={resolvedDecoding}
      onError={handleError}
      {...rest}
    />
  );
};

export default LazyImage;
