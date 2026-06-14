import { ArrowUpRight, CheckCircle2, Code2 } from 'lucide-react';

type ProjectCardProps = {
  project: {
    title: string;
    type: string;
    description: string;
    contributions: string[];
    tags: string[];
    href: string;
  };
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="gradient-border group glass-panel relative overflow-hidden rounded-2xl p-5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet/15">
      <div className="pointer-events-none absolute -right-16 -top-16 size-36 rounded-full bg-gradient-to-br from-cyan/20 to-fuchsia/20 blur-3xl transition duration-500 group-hover:scale-125" />
      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-cyan">{project.type}</p>
          <a
            className="inline-flex size-10 items-center justify-center rounded-lg border border-line bg-white/5 text-ink transition group-hover:border-cyan group-hover:text-cyan"
            href={project.href}
            rel="noreferrer"
            target="_blank"
            aria-label={`Open ${project.title} on GitHub`}
          >
            <ArrowUpRight size={18} />
          </a>
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-ink">{project.title}</h3>
        <p className="mt-3 leading-7 text-muted">{project.description}</p>
        <ul className="mt-5 grid gap-2 text-sm text-muted">
          {project.contributions.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <CheckCircle2 className="shrink-0 text-lime" size={16} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-line bg-white/5 px-3 py-1 text-sm text-muted transition hover:border-violet/50 hover:text-ink"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-4 py-3 text-sm font-semibold text-ink transition hover:bg-cyan hover:text-paper"
            href={project.href}
            rel="noreferrer"
            target="_blank"
          >
            <Code2 size={17} />
            View Code
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-line px-4 py-3 text-sm font-semibold text-muted transition hover:border-cyan hover:text-cyan"
            href={project.href}
            rel="noreferrer"
            target="_blank"
          >
            GitHub Repository
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </article>
  );
}
