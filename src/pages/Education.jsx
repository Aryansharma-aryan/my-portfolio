export default function Education() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-cyan-400 mb-16 tracking-wide">
          🎓 Education
        </h2>

        <div className="relative border-l-4 border-cyan-500 pl-10 space-y-16">
          {/* B.Tech */}
          <div className="group relative">
            <div className="absolute -left-[1.15rem] top-1 w-5 h-5 bg-cyan-500 rounded-full ring-4 ring-cyan-900 group-hover:ring-cyan-400 transition"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-cyan-300 group-hover:text-white transition">
              B.Tech in Computer Science and Engineering
            </h3>
            <p className="text-lg text-gray-400 mt-1">
              Kurukshetra University | <span className="text-white">2020 – 2024</span>
            </p>
          </div>

          {/* 12th */}
          <div className="group relative">
            <div className="absolute -left-[1.15rem] top-1 w-5 h-5 bg-cyan-500 rounded-full ring-4 ring-cyan-900 group-hover:ring-cyan-400 transition"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-cyan-300 group-hover:text-white transition">
              12th – HBSE Board
            </h3>
            <p className="text-lg text-gray-400 mt-1">
              Scored <span className="text-white">80.2%</span>
            </p>
          </div>

          {/* 10th */}
          <div className="group relative">
            <div className="absolute -left-[1.15rem] top-1 w-5 h-5 bg-cyan-500 rounded-full ring-4 ring-cyan-900 group-hover:ring-cyan-400 transition"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-cyan-300 group-hover:text-white transition">
              10th – HBSE Board
            </h3>
            <p className="text-lg text-gray-400 mt-1">
              Scored <span className="text-white">80.8%</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
