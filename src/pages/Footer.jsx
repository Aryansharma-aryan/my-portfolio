import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-gray-400 pt-6 pb-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left - Name */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">
            © {new Date().getFullYear()} <span className="text-white font-semibold">Aryan Sharma</span>. All rights reserved.
          </p>
        </div>

        {/* Middle - Quick Nav */}
        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/projects" className="hover:text-white transition">Projects</Link>
          <Link to="/contact" className="hover:text-white transition">Contact</Link>
        </div>

        {/* Right - Social Links */}
        <div className="flex gap-6 text-lg mt-4 md:mt-0">
          <a
            href="https://github.com/Aryansharma-aryan?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            🐙
          </a>
          <a
            href="https://www.linkedin.com/in/aryan-sharma-3497662a5"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            💼
          </a>
          <a
            href="mailto:arsharma2951@gmail.com"
            className="hover:text-pink-400 transition"
          >
            ✉️
          </a>
        </div>
      </div>
    </footer>
  );
}
