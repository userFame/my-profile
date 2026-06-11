import { resume } from "@/data/resume";

type Project = (typeof resume.projects)[number];

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:border-white/20">
      <h3 className="text-lg font-medium group-hover:text-white transition">
        {project.name}
      </h3>

      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/80"
          >
            {t}
          </span>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-5 text-sm text-blue-400 hover:text-blue-300"
        >
          View →
        </a>
      )}
    </div>
  );
}