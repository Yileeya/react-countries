import BrightnessIcon from '@/assets/brightness.svg?react';
import DarkModeOffIcon from '@/assets/dark-mode.svg?react';
import { useTheme } from '@/contexts/theme-context.tsx';

export default function App() {
  const { theme, toggleTheme } = useTheme();

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
      onClick={toggleTheme}
    >
      {current.icon}
      {current.text}
    </button>
  );
}
