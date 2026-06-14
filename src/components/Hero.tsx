import {
  ArrowDown,
  BriefcaseBusiness,
  Code2,
  Download,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from 'lucide-react';
import profilePhoto from '../assets/vansh-profile.png';
import { profile, stats } from '../data/portfolio';
import { Container } from './Container';

export function Hero() {
  return (
    <section id="top" className="soft-grid relative overflow-hidden border-b border-line">
      <Container className="relative grid gap-12 py-12 md:grid-cols-[1.08fr_0.92fr] md:items-center md:py-20">
        <div className="fade-up">
          <p className="mb-5 inline-flex items-center gap-2 rounded-lg border border-line bg-white/5 px-3 py-2 text-sm text-muted backdrop-blur">
            <Sparkles size={16} className="text-cyan" />
            {profile.availability}
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-none text-ink sm:text-6xl lg:text-7xl">
            {profile.name}
            <span className="gradient-text block pt-2">{profile.role}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{profile.summary}</p>
          <p className="mt-4 max-w-2xl leading-7 text-muted">
            I like working on projects where the interface is clear, the code is organized, and
            the final result feels useful for real people.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue via-violet to-fuchsia px-5 py-3 text-center text-sm font-semibold text-white shadow-xl shadow-violet/25 transition hover:-translate-y-1"
              href="#projects"
            >
              View Projects
              <ArrowDown size={18} />
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-cyan/50 bg-cyan/10 px-5 py-3 text-center text-sm font-semibold text-cyan shadow-xl shadow-cyan/10 backdrop-blur transition hover:-translate-y-1 hover:bg-cyan hover:text-paper"
              href="/resume.pdf"
              download="Vansh_Mirani_Resume.pdf"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white/5 px-5 py-3 text-center text-sm font-semibold text-ink backdrop-blur transition hover:-translate-y-1 hover:border-cyan hover:text-cyan"
              href={`mailto:${profile.email}`}
            >
              <Mail size={18} />
              Email Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted">
            <a
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-white/5 px-3 py-2 transition hover:text-cyan"
              href={profile.github}
              rel="noreferrer"
              target="_blank"
            >
              <Code2 size={16} />
              GitHub
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-white/5 px-3 py-2 transition hover:text-cyan"
              href={profile.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              <BriefcaseBusiness size={16} />
              LinkedIn
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-white/5 px-3 py-2 transition hover:text-cyan"
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
            >
              <Phone size={16} />
              {profile.phone}
            </a>
            <span className="inline-flex items-center gap-2 rounded-lg border border-line bg-white/5 px-3 py-2">
              <MapPin size={16} />
              {profile.location}
            </span>
          </div>

          <dl className="mt-10 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-panel rounded-2xl p-4">
                <dt className="text-2xl font-semibold text-ink">{stat.value}</dt>
                <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="floating relative mx-auto w-full max-w-[360px] sm:max-w-md">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-cyan/25 via-violet/25 to-fuchsia/25 blur-3xl" />
          <div className="gradient-border glass-panel relative rounded-[2rem] p-3">
            <div className="overflow-hidden rounded-[1.5rem] bg-panel">
              <img
                className="aspect-[4/5] h-full w-full object-cover object-top"
                src={profilePhoto}
                alt="Professional profile photo of Vansh Mirani"
              />
            </div>
            <div className="mt-4 rounded-2xl border border-line bg-paper/75 p-4 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-ink">{profile.name}</p>
                  <p className="mt-1 text-sm text-muted">Software Developer</p>
                </div>
                <span className="rounded-lg bg-gradient-to-r from-blue to-violet px-3 py-2 text-xs font-semibold text-white">
                  Available
                </span>
              </div>
            </div>
          </div>
          <figcaption className="mt-5 text-center text-sm text-muted">
            I keep my projects practical, readable, and easy to discuss in interviews.
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
