// src/components/About.jsx
export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-24 flex items-center justify-center">
      <div className="max-w-5xl text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
          About Me
        </h2>

        {/* Intro */}
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed tracking-wide font-medium">
          I'm <span className="text-cyan-400 font-semibold">Aryan Sharma</span>, a passionate Full Stack Developer skilled in the
          <span className="text-pink-400 font-semibold"> MERN stack</span> — MongoDB, Express, React, and Node.js.
        </p>

        {/* Secondary Paragraph */}
        <p className="mt-8 text-md md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          I’ve built multiple full-stack projects and contributed to real-world applications during internships.
          My journey includes working with <span className="text-pink-400 font-semibold">Cybridge Security Company</span>, where I developed secure backend systems, APIs, and scalable web apps.
          I believe in clean code, intuitive UI/UX, and continuous learning.
        </p>

        {/* Info Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Education Card */}
          <div className="bg-white/5 backdrop-blur-md border border-cyan-500/20 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/30 hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-cyan-300 mb-3">🎓 Education</h3>
            <p className="text-gray-200 text-lg">B.Tech in Computer Science (2024)</p>
          </div>

          {/* Experience Card */}
          <div className="bg-white/5 backdrop-blur-md border border-pink-500/20 p-6 rounded-2xl shadow-lg hover:shadow-pink-400/30 hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-pink-300 mb-3">💼 Experience</h3>
            <p className="text-gray-200 text-lg">
              Internship at <span className="font-semibold text-white">Cybridge Security Company</span><br />
              1+ Year Coding Instructor | Real-World MERN Projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
