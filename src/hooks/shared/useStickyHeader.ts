import { useState, useEffect, useRef } from 'react';

export function useStickyHeader(extraTopDesktop = 0, extraTopMobile = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  // 記住原始 top（只算一次）
  const originTop = useRef<number | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const header = document.querySelector('header');
    const headerHeight = header?.getBoundingClientRect().height || 0;

    const isMobile = window.innerWidth < 768;
    const triggerPoint =
      headerHeight + (isMobile ? extraTopMobile : extraTopDesktop);

    originTop.current =
      ref.current.getBoundingClientRect().top + window.scrollY;

    const handleScroll = () => {
      if (originTop.current === null) return;

      setIsSticky(window.scrollY >= originTop.current - triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [extraTopDesktop, extraTopMobile]);

  return { ref, isSticky };
}
