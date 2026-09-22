import { ExternalLink, Github, Folder } from "lucide-react";
import type { Project } from "@/data/projects";
import { ButtonLink } from "./Button";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-surface card-hover flex h-full flex-col p-6" data-reveal>
      <div
        className="flex h-32 items-center justify-center rounded-lg border border-border bg-muted"
        aria-hidden="true"
      >
        <Folder className="h-8 w-8 text-primary" />
      </div>

      <h3 className="mt-5 text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      {project.role ? (
        <p className="mt-3 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Role:</span> {project.role}
        </p>
      ) : null}
      {project.contribution ? (
        <p className="mt-1 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Contribution:</span>{" "}
          {project.contribution}
        </p>
      ) : null}

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2 pt-1">
        {project.liveDemo ? (
          <ButtonLink
            href={project.liveDemo}
            size="sm"
            variant="outline"
            external={project.liveDemo.startsWith("http")}
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            {project.liveLabel ?? "Live Demo"}
          </ButtonLink>
        ) : null}
        {project.github ? (
          <ButtonLink href={project.github} size="sm" variant="outline" external>
            <Github className="h-4 w-4" aria-hidden="true" />
            Source Code
          </ButtonLink>
        ) : null}
        {!project.liveDemo && !project.github ? (
          <span className="text-xs text-muted-foreground">Links coming soon</span>
        ) : null}
      </div>
    </article>
  );
}
