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
            I am a Junior Front-End and WordPress Developer focused on creating
            responsive, interactive, and user-friendly websites.
          </p>
          <p>
            I work with HTML, CSS, JavaScript, React, and WordPress. I build complete
            WordPress websites from scratch with Elementor and create themes tailored to
            each user's needs.
          </p>
          <p>
            I also maintain existing WordPress websites and work with their databases,
            combining practical problem solving with reliable front-end development.
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
