import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="uppercase tracking-[8px] text-cyan-400 font-semibold">
            Portfolio
          </span>

          <h2 className="text-6xl font-bold mt-3">
            My Projects
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-5"></div>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-16">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;