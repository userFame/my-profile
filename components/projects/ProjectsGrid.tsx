"use client";

import { resume } from "@/data/resume";

export default function ProjectsGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {resume.projects.map((project) => (
        <div key={project.name} className="p-6 border border-[#D6CFC4] rounded-sm">
          <h3 className="font-semibold mb-2">{project.name}</h3>
          <p className="text-sm text-[#78716C]">{project.description}</p>
        </div>
      ))}
    </div>
  );
}
