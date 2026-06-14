import { Code2 } from 'lucide-react';
import { GlassCard } from './GlassCard';

type SkillGroupProps = {
  group: {
    title: string;
    note: string;
    skills: string[];
  };
};

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <GlassCard className="group p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-2xl hover:shadow-cyan/10">
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-lg bg-gradient-to-br from-blue/25 to-violet/25 text-cyan transition group-hover:scale-105">
          <Code2 size={20} />
        </span>
        <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
      </div>
      <p className="mt-4 text-sm leading-6 text-muted">{group.note}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-line bg-white/5 px-3 py-2 text-sm text-muted transition hover:border-cyan/50 hover:text-ink"
          >
            {skill}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}
