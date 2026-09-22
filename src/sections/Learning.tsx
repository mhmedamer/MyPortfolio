import { BookOpen } from "lucide-react";
import { learningPaths } from "@/data/skills";
import { SectionHeading } from "@/components/SectionHeading";

export function Learning() {
  return (
    <section id="learning" className="border-y border-border bg-surface">
      <div className="section-shell py-16 md:py-24">
        <SectionHeading
          eyebrow="Currently Learning"
          title="Building stronger fundamentals"
          description="Subjects I am studying right now to grow beyond the interface layer."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {learningPaths.map((path) => (
            <article key={path.title} className="card-surface card-hover p-6" data-reveal>
              <div className="flex items-center justify-between gap-3">
                <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="rounded-full border border-primary/40 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-primary">
                  {path.status}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{path.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {path.description}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">Why:</span> {path.why}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
