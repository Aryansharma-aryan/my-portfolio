import React from "react";
import { FaLaptopCode, FaChalkboardTeacher, FaCode } from "react-icons/fa";

const Experience = () => {
  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
          My Experience
        </h2>

        <div className="space-y-8">
          {/* Coding Instructor */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-cyan-500/40 transition">
            <div className="flex items-center gap-4 mb-2">
              <FaChalkboardTeacher className="text-3xl text-cyan-400" />
              <h3 className="text-2xl font-semibold">Coding Instructor</h3>
            </div>
            <p className="text-gray-300 mb-1">
              Teaching JavaScript, React, and backend development to students, guiding them in building real-world web apps and enhancing problem-solving.
            </p>
            <span className="text-sm text-gray-400">Part-time • Present</span>
          </div>

          {/* Cybridge Developer */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-pink-500/40 transition">
            <div className="flex items-center gap-4 mb-2">
              <FaLaptopCode className="text-3xl text-pink-400" />
              <h3 className="text-2xl font-semibold">Developer at Cybridge Security</h3>
            </div>
            <p className="text-gray-300 mb-1">
              Built secure full-stack web apps using MERN stack. Collaborated with security teams to follow best practices for secure coding.
            </p>
            <span className="text-sm text-gray-400">Internship • 2024</span>
          </div>

          {/* MERN Interest */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-indigo-500/40 transition">
            <div className="flex items-center gap-4 mb-2">
              <FaCode className="text-3xl text-indigo-400" />
              <h3 className="text-2xl font-semibold">MERN Stack Enthusiast</h3>
            </div>
            <p className="text-gray-300">
              Passionate about building fast, responsive web apps with MongoDB, Express, React, and Node.js. Always exploring new tech and refining full-stack skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
