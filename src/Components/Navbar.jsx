import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/80 z-20 flex items-center h-16 px-4 font-['Pixelify_Sans'] text-lg">
      <Link to="/">
        <img src="/photos/nav-picture.png" alt="Logo" className="h-12 mr-4" />
      </Link>
      <ul className="hidden sm:flex ml-auto space-x-6 text-white">
        <li>
            <Link className='hover:bg-white hover:text-black px-4 py-2 transition text-4xl' to="/">Home</Link>
        </li>
        <li>
            <Link className='hover:bg-white hover:text-black px-4 py-2 transition text-4xl' to="/Projects">
            Projects</Link>
        </li>
      </ul>
      <div className="sm:hidden ml-auto">
        <img src="/photos/icons/dropdown.png" alt="dropdown" className="w-7" />
      </div>
    </nav>
  );
};

export default Navbar;