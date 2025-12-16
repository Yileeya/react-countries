import { Link } from 'react-router-dom';
import ThemeToggleButton from '@components/ui/ThemeToggleButton.tsx';

function Header() {
  return (
    <header className="theme-primary fixed top-0 left-0 z-40 h-20 w-full px-4 shadow-[0px_2px_4px_0px_#0000000E]">
      <div className="m-auto flex h-full w-full items-center justify-between md:max-w-[688px] xl:max-w-[1272px]">
        <Link className="text-5 xl:text-2 font-extrabold" to="/">
          Where in the world?
        </Link>
        <ThemeToggleButton />
      </div>
    </header>
  );
}

export default Header;
