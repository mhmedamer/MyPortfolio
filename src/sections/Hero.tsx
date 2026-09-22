import { ArrowRight, Download, Github, MapPin } from "lucide-react";
import personalInfo from "@/data/personalInfo";
import { ButtonLink } from "@/components/Button";

const codeLines = [
  { text: "const developer = {", indent: 0 },
  { text: '  name: "Muhammed Amer",', indent: 0 },
  { text: '  role: "Front-End & WordPress Developer",', indent: 0 },
  { text: '  stack: ["React", "WordPress", "Elementor"],', indent: 0 },
  { text: '  experience: ["SQL", "Custom Themes"],', indent: 0 },
  { text: "  openToWork: true,", indent: 0 },
  { text: "};", indent: 0 },
];

export function Hero() {
  return (
    <section id="home" className="hero-glow relative overflow-hidden">
      <div className="section-shell grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            Open to Front-End & WordPress opportunities
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            {personalInfo.name}
          </h1>
          <p className="mt-3 text-xl font-medium text-gradient sm:text-2xl">
            {personalInfo.title}
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {personalInfo.intro}
          </p>

          <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {personalInfo.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#projects">
              View My Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="outline">
              Contact Me
            </ButtonLink>
            {personalInfo.github ? (
              <ButtonLink href={personalInfo.github} external variant="outline">
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </ButtonLink>
            ) : null}
            {personalInfo.resume ? (
              <ButtonLink href={personalInfo.resume} external variant="outline">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </ButtonLink>
            ) : null}
          </div>
        </div>

        <div className="card-surface overflow-hidden" aria-hidden="true">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">
              developer.js
            </span>
          </div>
          <pre className="overflow-x-auto px-4 py-5 font-mono text-[13px] leading-7 text-muted-foreground sm:text-sm">
            {codeLines.map((line, i) => (
              <div key={line.text} className="flex gap-4">
                <span className="select-none text-muted-foreground/40">{i + 1}</span>
                <code className={i === 0 || i === 6 ? "text-primary" : undefined}>
                  {line.text}
                </code>
              </div>
            ))}
          </pre>
        </div>
      </div>
    </section>
  );
}
