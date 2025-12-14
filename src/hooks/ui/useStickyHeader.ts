import { useState, useEffect, useRef } from 'react';

export function useStickyHeader(extraTopDesktop = 0, extraTopMobile = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        // 自動抓 header 高度
        const header = document.querySelector('header');
        const headerHeight = header?.getBoundingClientRect().height || 0;

        // 計算 sticky 觸發點 = header 高度 + 額外 top
        const isMobile = window.innerWidth < 768;
        const triggerPoint =
          headerHeight + (isMobile ? extraTopMobile : extraTopDesktop);

        const offset = ref.current.getBoundingClientRect().top;
        setIsSticky(offset <= triggerPoint);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [extraTopDesktop, extraTopMobile]);

  return { ref, isSticky };
}
