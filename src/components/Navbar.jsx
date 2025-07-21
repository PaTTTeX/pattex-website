const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/80 z-20 flex items-center h-16 px-4 font-['Pixelify_Sans'] text-lg">
      <a href="#home">
        <img src="/photos/nav-picture.png" alt="Logo" className="h-12 mr-4" />
      </a>
      <ul className="hidden sm:flex ml-auto space-x-6">
        <li>
          <a href="#home" className="hover:bg-white hover:text-black px-4 py-2 transition text-4xl">
            Home
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:bg-white hover:text-black px-4 py-2 transition text-4xl">
            Projects
          </a>
        </li>
      </ul>
      <div className="sm:hidden ml-auto">
        <img src="/photos/icons/dropdown.png" alt="dropdown" className="w-7" />
      </div>
    </nav>
  );
};

export default Navbar;
