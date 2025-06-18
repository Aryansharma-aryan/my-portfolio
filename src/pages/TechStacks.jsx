export default function TechStack() {
  const techStacks = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟩" },
    { name: "Express.js", icon: "🚂" },
    { name: "MongoDB", icon: "🍃" },
    { name: "JavaScript", icon: "🟨" },
    { name: "HTML", icon: "📄" },
    { name: "CSS", icon: "🎨" },
    { name: "Tailwind CSS", icon: "🌬️" },
    { name: "Git", icon: "🔧" },
    { name: "Vite", icon: "⚡" },
    { name: "Python", icon: "🐍" },
    { name: "SQL", icon: "💾" },
  ];

  return (
    <section
      id="tech"
      className="bg-black text-white px-6 pt-20 pb-4 overflow-hidden"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 drop-shadow-md">
          Tech Stack
        </h2>
        <p className="text-gray-400 mt-2">Technologies I work with</p>
      </div>

      {/* Marquee container */}
      <div className="w-full overflow-hidden relative mb-0">
        <div className="flex space-x-10 animate-marquee whitespace-nowrap pb-10">
          {techStacks.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[140px] h-[140px] bg-white/5 backdrop-blur-md border border-cyan-500/20 rounded-xl p-4 shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <p className="text-md text-cyan-300 font-semibold">{tech.name}</p>
            </div>
          ))}

          {/* Duplicate for seamless looping */}
          {techStacks.map((tech, index) => (
            <div
              key={`dup-${index}`}
              className="flex flex-col items-center justify-center min-w-[140px] h-[140px] bg-white/5 backdrop-blur-md border border-cyan-500/20 rounded-xl p-4 shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <p className="text-md text-cyan-300 font-semibold">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
