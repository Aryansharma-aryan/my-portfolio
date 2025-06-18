// src/components/About.jsx
export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-24 flex items-center justify-center">
      <div className="max-w-5xl text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 animate-text-glow">
          About Me
        </h2>

        {/* Intro */}
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed tracking-wide">
          I'm <span className="text-cyan-400 font-semibold">Aryan Sharma</span>, a dedicated Full Stack Developer with hands-on experience in the
          <span className="text-pink-400 font-semibold"> MERN stack</span> — MongoDB, Express, React, and Node.js.
        </p>

        {/* Secondary Paragraph */}
        <p className="mt-8 text-md md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          I’ve built multiple full-stack projects and participated in real-world development during my internships.
          I’ve worked with <span className="text-pink-400 font-semibold">Cybridge Security Company</span> where I gained valuable experience in secure application development, backend APIs, and scalable architecture.
          I focus on clean code, intuitive UIs, and staying updated with modern tech.
        </p>

        {/* Info Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-800 to-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-cyan-400/40 hover:scale-105 transition-all">
            <h3 className="text-2xl font-bold text-cyan-300 mb-3">🎓 Education</h3>
            <p className="text-gray-200 text-lg">B.Tech in Computer Science (2024)</p>
          </div>

          <div className="bg-gradient-to-r from-pink-800 to-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-pink-400/40 hover:scale-105 transition-all">
            <h3 className="text-2xl font-bold text-pink-300 mb-3">💼 Experience</h3>
            <p className="text-gray-200 text-lg">
              Internship at <span className="font-semibold text-white">Cybridge Security Company</span><br />
              1+ Year Teaching Coding | Real-World MERN Projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
