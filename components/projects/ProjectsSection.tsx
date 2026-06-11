import ProjectsGrid from "./ProjectsGrid";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl">
            A selection of things I've built.
          </p>
        </div>

        <ProjectsGrid />
      </div>
    </section>
  );
}
