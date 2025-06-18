import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ import Link

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-gradient-to-r from-[#1e1e62] to-[#1b0039] fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Gradient Brand Name */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Aryan Sharma
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-white hover:text-blue-400 font-medium transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#1e1e62] to-[#1b0039] px-4 pb-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block py-2 text-white hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)} // ✅ close mobile menu after click
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
