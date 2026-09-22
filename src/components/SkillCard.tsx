import type { SkillGroup } from "@/data/skills";

export function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <div className="card-surface card-hover h-full p-6" data-reveal>
      <h3 className="font-mono text-sm uppercase tracking-[0.14em] text-primary">
        {group.category}
      </h3>
      {group.note ? (
        <p className="mt-2 text-xs text-muted-foreground">{group.note}</p>
      ) : null}
      <ul className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li
            key={item}
            className="rounded-lg border border-border bg-muted px-3 py-1.5 text-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
