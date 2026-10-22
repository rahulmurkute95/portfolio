import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="group rounded-3xl overflow-hidden bg-[#1b2436] border border-slate-700 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(6,182,212,0.25)]">

      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-52 object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"></div>

      </div>

      {/* Content */}

      <div className="p-6 flex flex-col">

        <h3 className="text-3xl font-bold leading-tight text-white mb-4">
          {project.title}
        </h3>

        <p className="text-gray-400 leading-8 mb-6">
          {project.description}
        </p>

        {/* Skills */}

        <div className="flex flex-wrap gap-3 mb-8">

          {project.technologies.map((tech) => (

            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-cyan-500/15 text-cyan-300 text-sm"
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="flex gap-4">

          <a
            href={project.github}
            className="flex-1 flex justify-center items-center gap-2 bg-slate-700 hover:bg-slate-600 rounded-xl py-3 transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.live}
            className="flex-1 flex justify-center items-center gap-2 rounded-xl py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transition"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;