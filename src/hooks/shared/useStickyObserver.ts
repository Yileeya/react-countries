import { useEffect, useRef, useState } from 'react';

interface UseStickyObserverOptions {
  offsetDesktop?: number;
  offsetMobile?: number;
}

export function useStickyObserver({
  offsetDesktop = 0,
  offsetMobile = 0,
}: UseStickyObserverOptions = {}) {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (!targetRef.current) return;

    const header = document.querySelector('header');
    const headerHeight = header?.getBoundingClientRect().height || 0;
    const isMobile = window.innerWidth < 768;

    const rootMarginTop =
      headerHeight + (isMobile ? offsetMobile : offsetDesktop);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: `-${rootMarginTop}px 0px 0px 0px`,
      },
    );

    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [offsetDesktop, offsetMobile]);

  return {
    ref: targetRef,
    isSticky,
  };
}
