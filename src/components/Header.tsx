import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="fixed top-0 left-0 z-40 h-20 w-full bg-white shadow-[0px_2px_4px_0px_#0000000E]">
      <div className="m-auto flex h-full w-full max-w-[1280px] items-center justify-between">
        <Link className="text-2 text-grey-950 font-extrabold" to="/">
          Where in the world?
        </Link>
      </div>
    </header>
  );
}

export default Header;
