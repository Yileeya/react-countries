import { useEffect, useState } from 'react';
import BrightnessIcon from '@/assets/brightness.svg?react';
import DarkModeOffIcon from '@/assets/dark-mode.svg?react';

type tTheme = 'light' | 'dark';

export default function App() {
  const [theme, setTheme] = useState<tTheme>('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const themes = {
    light: {
      text: 'Dark Mode',
      icon: <DarkModeOffIcon />,
      className: 'text-grey-950 bg-white hover:bg-grey-950 hover:text-white',
    },
    dark: {
      text: 'Light Mode',
      icon: <BrightnessIcon />,
      className: 'text-white bg-blue-900 hover:bg-white hover:text-blue-900',
    },
  };

  const current = themes[theme];

  return (
    <button
      className={`text-6 md:text-4 flex cursor-pointer items-center gap-2 rounded px-2 py-1 font-semibold ${current.className}`}
      onClick={() => setTheme(t => (t === 'light' ? 'dark' : 'light'))}
    >
      {current.icon}
      {current.text}
    </button>
  );
}
