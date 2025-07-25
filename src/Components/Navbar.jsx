import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-black/90 z-40 flex items-center h-16 px-4 font-['Pixelify_Sans'] text-lg shadow-md">
        <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center">
          <img src="/photos/nav-picture.png" alt="Logo" className="h-12 mr-4" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex ml-auto space-x-6 text-white">
          <li>
            <Link
              to="/"
              className="text-4xl px-4 py-2 rounded transition-colors duration-200 hover:bg-white hover:text-black"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Projects"
              className="text-4xl px-4 py-2 rounded transition-colors duration-200 hover:bg-white hover:text-black"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
        </ul>

        {/* Mobile Dropdown Icon */}
        <div className="sm:hidden ml-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="focus:outline-none"
          >
            <img src="/photos/icons/dropdown.png" alt="dropdown" className="w-7" />
          </button>
        </div>
      </nav>

      <div
        className={`
          sm:hidden fixed top-16 left-0 w-full bg-black/95 text-white text-center overflow-hidden font-['Pixelify_Sans']
          transition-[height] duration-300 ease-in-out
          ${menuOpen ? 'h-[calc(100vh-4rem)]' : 'h-0'}
          z-30
        `}
      >
        <ul className="flex flex-col px-4 py-6 space-y-4 text-3xl">
          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2 rounded transition-colors duration-200 hover:bg-white hover:text-black"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Projects"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2 rounded transition-colors duration-200 hover:bg-white hover:text-black"
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
