import React from "react";

const projects = [
  {
    title: "🍔 Food Delivery App",
    description:
      "A full-stack end-to-end MERN app with user authentication, food browsing, cart system, admin panel, and Razorpay payment integration.",
    live: "https://mern-stack-food-ordering-web-app.vercel.app",
    github: "https://github.com/Aryansharma-aryan/MERN-STACK-FOOD-ORDERING-WEB-APP",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
  },
  {
    title: "✍️ Blog Platform",
    description:
      "A complete full-stack blog app with CRUD operations, JWT authentication, admin dashboard, and rich text editing using Quill.",
    live: "https://blog-verse-lovat.vercel.app/",
    github: "https://github.com/Aryansharma-aryan/blog-app",
    tech: ["React", "Express", "MongoDB", "JWT", "Quill"],
  },
  {
    title: "🧑‍💼 HRMS Portal",
    description:
      "A modern MERN-based HRMS dashboard with secure login, employee/candidate management, leave and attendance tracking, and admin controls.",
    live: "https://hr-portal-six-liart.vercel.app/login",
    github: "https://github.com/Aryansharma-aryan/HR-PORTAL",
    tech: ["React", "Node.js", "MongoDB", "JWT", "CSS", "Express"],
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 animate-pulse drop-shadow-xl">
          My Projects
        </h2>

        <p className="text-gray-400 mb-12 text-lg max-w-3xl mx-auto leading-relaxed">
          These are some of my <span className="text-cyan-400 font-semibold">full-stack MERN applications</span> built with production-level features and modern UI/UX.
        </p>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-2xl p-6 shadow-xl border border-gray-700 hover:shadow-cyan-500/40 transition-transform duration-300 hover:scale-[1.03]"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5 justify-center">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-xs px-3 py-1 rounded-full text-gray-200 tracking-wide hover:bg-cyan-600 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-center gap-4 flex-wrap mt-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-600 hover:bg-cyan-500 text-white text-sm px-5 py-2 rounded-full shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 scale-100 hover:scale-105"
                >
                  🔗 Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 hover:bg-pink-500 text-white text-sm px-5 py-2 rounded-full shadow-lg hover:shadow-pink-400/50 transition-all duration-300 scale-100 hover:scale-105"
                >
                  📁 GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
