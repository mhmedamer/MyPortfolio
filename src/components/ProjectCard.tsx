import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { ButtonLink } from "./Button";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-surface card-hover flex h-full flex-col overflow-hidden" data-reveal>
      <a
        href={project.liveDemo}
        target={project.liveDemo.startsWith("http") ? "_blank" : undefined}
        rel={project.liveDemo.startsWith("http") ? "noreferrer noopener" : undefined}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-44 w-full border-b border-border object-cover object-top"
          loading="lazy"
        />
      </a>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mt-5 text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

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

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
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
      </div>
    </article>
  );
}
