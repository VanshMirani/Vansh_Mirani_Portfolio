import { useEffect, useState } from 'react';
import { navItems, profile } from '../data/portfolio';
import { Container } from './Container';

export function Navbar() {
  const [activeSection, setActiveSection] = useState(navItems[0]?.href ?? '#about');

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(`#${visibleEntry.target.id}`);
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.12, 0.3, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/80 backdrop-blur-xl">
      <Container className="flex min-h-[72px] items-center justify-between gap-4 py-4">
        <a
          className="flex items-center gap-3 font-semibold text-ink transition hover:text-cyan"
          href="#top"
          aria-label="Vansh home"
        >
          <span className="grid size-10 place-items-center rounded-lg bg-gradient-to-br from-cyan via-blue to-violet text-sm font-bold text-white shadow-lg shadow-violet/20">
            VM
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-5 text-sm text-muted xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              className={`rounded-lg px-2 py-1 transition ${
                activeSection === item.href
                  ? 'bg-white/10 text-cyan shadow-sm shadow-cyan/10'
                  : 'hover:text-ink'
              }`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="rounded-lg bg-gradient-to-r from-blue to-violet px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet/25 transition hover:-translate-y-0.5 hover:shadow-blue/30"
          href="#contact"
        >
          Contact Me
        </a>
      </Container>

      <div className="border-t border-line/60 xl:hidden">
        <Container className="flex gap-2 overflow-x-auto py-3 text-sm text-muted">
          {navItems.map((item) => (
            <a
              key={item.href}
              className={`shrink-0 rounded-lg border px-3 py-2 transition ${
                activeSection === item.href
                  ? 'border-cyan/50 bg-cyan/10 text-cyan'
                  : 'border-line bg-white/5 hover:text-ink'
              }`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </Container>
      </div>
    </header>
  );
}
