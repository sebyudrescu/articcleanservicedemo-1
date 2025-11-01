import { useEffect, useRef, useState } from 'react';

const canUseMotion = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
  return !prefersReducedMotion && hasFinePointer;
};

const MouseGlow = () => {
  const [isActive, setIsActive] = useState(false);
  const [canRender, setCanRender] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const requestRef = useRef<number>();
  const targetPosition = useRef({ x: 0, y: 0 });
  const latestPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setCanRender(canUseMotion());

    const handleChange = () => {
      setCanRender(canUseMotion());
    };

    const coarseQuery = window.matchMedia('(pointer: coarse)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    coarseQuery.addEventListener('change', handleChange);
    motionQuery.addEventListener('change', handleChange);

    return () => {
      coarseQuery.removeEventListener('change', handleChange);
      motionQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    if (!canRender) {
      return undefined;
    }

    let animationRunning = false;

    const animate = () => {
      const ease = 0.18;
      latestPosition.current = {
        x: latestPosition.current.x + (targetPosition.current.x - latestPosition.current.x) * ease,
        y: latestPosition.current.y + (targetPosition.current.y - latestPosition.current.y) * ease
      };

      setPosition({
        x: latestPosition.current.x,
        y: latestPosition.current.y
      });

      if (
        Math.abs(latestPosition.current.x - targetPosition.current.x) > 0.1 ||
        Math.abs(latestPosition.current.y - targetPosition.current.y) > 0.1
      ) {
        requestRef.current = window.requestAnimationFrame(animate);
      } else {
        animationRunning = false;
      }
    };

    const startAnimationIfNeeded = () => {
      if (!animationRunning) {
        animationRunning = true;
        requestRef.current = window.requestAnimationFrame(animate);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetPosition.current = { x: event.clientX, y: event.clientY };
      latestPosition.current = {
        x: latestPosition.current.x || event.clientX,
        y: latestPosition.current.y || event.clientY
      };

      startAnimationIfNeeded();
      if (!isActive) {
        setIsActive(true);
      }
    };

    const handlePointerLeave = () => {
      setIsActive(false);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      if (requestRef.current) {
        window.cancelAnimationFrame(requestRef.current);
      }
    };
  }, [canRender, isActive]);

  if (!canRender) {
    return null;
  }

  return (
    <div className={`mouse-glow-layer ${isActive ? 'mouse-glow-layer--active' : ''}`}>
      <div
        className="mouse-glow-pointer"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`
        }}
      />
    </div>
  );
};

export default MouseGlow;
