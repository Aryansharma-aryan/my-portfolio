import { Link } from "react-router-dom";
import profile from "../assets/Pic.jpg";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-black to-gray-900 flex items-center justify-center px-6 py-16">
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 max-w-6xl w-full">
        
        {/* Circular Profile Image with Effects */}
        <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-2xl group hover:scale-105 transition duration-500">
          <img
            src={profile}
            alt="Aryan Sharma"
            className="w-full h-full object-cover scale-110 group-hover:scale-125 transition duration-700"
          />
          {/* Vignette & blur overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40 rounded-full transition duration-500 group-hover:backdrop-blur-sm"></div>
          {/* Soft glowing border */}
          <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"></div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left text-white flex-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Hi, I'm Aryan Sharma
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
            MERN Stack Developer | I craft full-stack apps with modern UI/UX, strong functionality, and optimized performance.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-6">
            <Link
              to="/projects"
              className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-md hover:scale-105 hover:shadow-cyan-400/40 transition-all duration-300"
            >
              🚀 View Projects
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border border-pink-500 text-pink-400 font-semibold rounded-xl hover:bg-pink-500 hover:text-white shadow-md hover:shadow-pink-400/40 transition-all duration-300"
            >
              📄 Download Resume
            </a>
          </div>

          <p className="text-sm sm:text-base text-gray-400">
            Tech Stack: React, Node.js, Express, MongoDB, Tailwind CSS, Vite
          </p>
        </div>
      </div>
    </section>
  );
}
