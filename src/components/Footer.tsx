import { BriefcaseBusiness, Code2, Mail } from 'lucide-react';
import { profile } from '../data/portfolio';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper/90 py-8">
      <Container className="flex flex-col gap-5 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>&copy; 2026 {profile.name}. All rights reserved.</p>
        <div className="flex flex-wrap gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-white/5 px-3 py-2 transition hover:border-cyan hover:text-cyan"
            href={`mailto:${profile.email}`}
          >
            <Mail size={16} />
            Email
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-white/5 px-3 py-2 transition hover:border-cyan hover:text-cyan"
            href={profile.github}
            rel="noreferrer"
            target="_blank"
          >
            <Code2 size={16} />
            GitHub
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-white/5 px-3 py-2 transition hover:border-cyan hover:text-cyan"
            href={profile.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            <BriefcaseBusiness size={16} />
            LinkedIn
          </a>
        </div>
      </Container>
    </footer>
  );
}
