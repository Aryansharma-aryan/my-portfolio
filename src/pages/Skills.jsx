import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiVite,
  SiRedux,
  SiFirebase,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-400" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Redux", icon: SiRedux, color: "text-purple-500" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Express", icon: SiExpress, color: "text-gray-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
    { name: "Vite", icon: SiVite, color: "text-purple-400" },
    { name: "Git", icon: FaGitAlt, color: "text-red-500" },
    { name: "GitHub", icon: FaGithub, color: "text-white" },
    { name: "Database", icon: FaDatabase, color: "text-yellow-400" },
  ];

  return (
    <section className="min-h-screen py-16 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 tracking-tight underline underline-offset-8 decoration-cyan-400">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map(({ name, icon: Icon, color }, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-4 p-6 bg-black bg-opacity-30 rounded-xl shadow-lg hover:scale-110 hover:shadow-cyan-400/40 transition-all duration-300"
            >
              <Icon className={`text-6xl ${color}`} />
              <p className="text-lg sm:text-xl font-semibold">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
