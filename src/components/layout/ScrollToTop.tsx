import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto', // 建議用 auto，避免頁面切換有怪動畫
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
