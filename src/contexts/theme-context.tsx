import {
  createContext,
  useContext,
  useState,
  useCallback,
  useLayoutEffect,
} from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

type tTheme = 'light' | 'dark';

type tThemeContextValue = {
  theme: tTheme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<tThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<tTheme>(() => {
    const saved = localStorage.getItem('theme') as tTheme | null;
    return saved ?? 'light';
  });

  const [skeletonKey, setSkeletonKey] = useState(0);
  const [skeletonColors, setSkeletonColors] = useState({
    base: '',
    highlight: '',
  });

  useLayoutEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');

    localStorage.setItem('theme', theme);

    const rootStyles = getComputedStyle(root);
    setSkeletonColors({
      base: rootStyles.getPropertyValue('--skeleton-base').trim(),
      highlight: rootStyles.getPropertyValue('--skeleton-highlight').trim(),
    });

    setSkeletonKey(prev => prev + 1); // 強制 SkeletonTheme 更新
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <SkeletonTheme
        key={skeletonKey}
        baseColor={skeletonColors.base}
        highlightColor={skeletonColors.highlight}
      >
        {children}
      </SkeletonTheme>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
}
