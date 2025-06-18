import { Link } from "react-router-dom";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiVite } from "react-icons/si";
import CountUp from "react-countup";

export default function Home() {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(typedRef.current, {
      strings: [
        "Hi, I'm Aryan Sharma",
        "MERN Stack Developer",
        "Full-Stack Web Builder",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typedInstance.current.destroy();
    };
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-black to-gray-900 flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full text-center text-white animate-fadeIn">

        {/* Header with Typing */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-8 tracking-tight">
          <span
            ref={typedRef}
            className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-colorChange"
          ></span>
        </h1>

        {/* Experience Counter */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 font-medium">
          <CountUp end={1} duration={3} />+ years of coding experience and building powerful web applications.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <Link
            to="/projects"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-xl shadow-md hover:scale-105 hover:shadow-cyan-400/40 transition-all duration-300"
          >
            🚀 View Projects
          </Link>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-pink-500 text-pink-400 text-lg font-semibold rounded-xl hover:bg-pink-500 hover:text-white shadow-md hover:shadow-pink-400/40 transition-all duration-300"
          >
            📄 Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-10 text-3xl">
          <a href="https://github.com/Aryansharma-aryan/" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/aryan-sharma-3497662a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            <FaLinkedin />
          </a>
        </div>

        {/* Tech Stack Icons */}
        <div className="flex justify-center flex-wrap gap-6 text-5xl text-gray-300">
          <FaReact className="hover:text-cyan-400 transition duration-300" />
          <FaNodeJs className="hover:text-green-400 transition duration-300" />
          <SiMongodb className="hover:text-green-500 transition duration-300" />
          <SiTailwindcss className="hover:text-blue-300 transition duration-300" />
          <FaDatabase className="hover:text-yellow-300 transition duration-300" />
          <SiVite className="hover:text-purple-300 transition duration-300" />
        </div>
      </div>
    </section>
  );
}
