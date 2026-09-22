import { capabilities } from "@/data/skills";
import { SectionHeading } from "@/components/SectionHeading";
import { Check } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-shell py-16 md:py-24">
      <SectionHeading eyebrow="About" title="A little about me" />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground" data-reveal>
          <p>
            I am a Junior Front-End Developer focused on creating responsive and
            user-friendly web interfaces.
          </p>
          <p>
            I work with HTML, CSS, JavaScript and React, and I am continuously improving
            my development skills through practical projects.
          </p>
          <p>
            I am also currently studying SQL, Algorithms &amp; Data Structures and Problem
            Solving to strengthen my programming and software development fundamentals.
          </p>
        </div>

        <div className="card-surface p-6" data-reveal>
          <h3 className="font-mono text-sm uppercase tracking-[0.14em] text-primary">
            What I can build
          </h3>
          <ul className="mt-4 space-y-3">
            {capabilities.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
