import { journey } from "@/data/skills";
import { SectionHeading } from "@/components/SectionHeading";

export function Journey() {
  return (
    <section id="journey" className="section-shell py-16 md:py-24">
      <SectionHeading
        eyebrow="Journey"
        title="From surveying to the browser"
        description="A short timeline of how I moved into Front-End Development."
      />

      <ol className="mt-10 space-y-0 border-l border-border pl-6 sm:pl-8">
        {journey.map((step) => (
          <li key={step.title} className="relative pb-8 last:pb-0" data-reveal>
            <span
              className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-gradient-accent ring-4 ring-background sm:-left-[39px]"
              aria-hidden="true"
            />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
              {step.year}
            </span>
            <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
