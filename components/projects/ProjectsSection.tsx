import ProjectsGrid from "./ProjectsGrid";

export default function ProjectsSection() {
  return (
    <section className="section-container section-padding">
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Projects
        </h2>
        <p className="text-muted-foreground mt-2">
          A selection of things I’ve built.
        </p>
      </div>

      <ProjectsGrid />
    </section>
  );
}