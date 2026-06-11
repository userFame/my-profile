import { resume } from "@/data/resume";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {resume.projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}