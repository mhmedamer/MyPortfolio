import { skillGroups } from "@/data/skills";
import { SkillCard } from "@/components/SkillCard";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="border-y border-border bg-surface">
      <div className="section-shell py-16 md:py-24">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="The technologies and practices I have used across Front-End and WordPress projects."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <SkillCard key={group.category} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
