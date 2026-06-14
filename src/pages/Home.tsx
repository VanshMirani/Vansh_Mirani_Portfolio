import { useState } from 'react';
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clipboard,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  UserRound,
} from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { GlassCard } from '../components/GlassCard';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import { SkillGroup } from '../components/SkillGroup';
import {
  certifications,
  contactLinks,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from '../data/portfolio';

export function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = async () => {
    const copyWithFallback = () => {
      const textarea = document.createElement('textarea');
      textarea.value = profile.email;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
    };

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(profile.email);
      } else {
        copyWithFallback();
      }
    } catch {
      copyWithFallback();
    }

    setCopiedEmail(true);
    window.setTimeout(() => setCopiedEmail(false), 1800);
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main>
        <Hero />

        <AnimatedSection id="about" className="scroll-mt-36 py-16 sm:py-20">
          <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="About"
              title="I build, learn, and improve through real projects."
              description="I am pursuing B.Tech Computer Science Engineering at Indus University, and I use my projects to practice frontend development, backend integration, and clean problem solving."
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <GlassCard className="p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/40">
                <UserRound className="text-cyan" size={28} />
                <h3 className="mt-4 text-xl font-semibold text-ink">How I Work</h3>
                <p className="mt-3 leading-7 text-muted">
                  I try to keep my interfaces simple, readable, and useful. I care about the
                  flow of a page as much as the code behind it.
                </p>
              </GlassCard>
              <GlassCard className="p-6 transition duration-300 hover:-translate-y-1 hover:border-violet/40">
                <ShieldCheck className="text-violet" size={28} />
                <h3 className="mt-4 text-xl font-semibold text-ink">What I Am Looking For</h3>
                <p className="mt-3 leading-7 text-muted">
                  I am looking for opportunities where I can contribute, learn from experienced
                  developers, and keep growing through practical development work.
                </p>
              </GlassCard>
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection
          id="skills"
          className="scroll-mt-36 border-y border-line bg-white/[0.025] py-16 sm:py-20"
        >
          <Container>
            <SectionHeading
              eyebrow="Skills"
              title="The tools I am actively building with."
              description="My skill set is still growing, but these are the languages, frameworks, databases, and tools I have used across coursework, training, and personal projects."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map((group) => (
                <SkillGroup key={group.title} group={group} />
              ))}
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection id="projects" className="scroll-mt-36 py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Featured Projects"
              title="Projects that show how I think and build."
              description="These projects helped me practice full-stack structure, dashboard design, Java logic, responsive layouts, and interactive user experiences."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection
          id="certifications"
          className="scroll-mt-36 border-y border-line bg-white/[0.025] py-16 sm:py-20"
        >
          <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeading
              eyebrow="Certifications"
              title="Courses and programs that shaped my learning."
              description="I focused on learning that supports my interest in full-stack development and modern software concepts."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((certification) => (
                <GlassCard
                  key={certification}
                  className="group p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-2xl hover:shadow-cyan/10"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-cyan/25 to-violet/25 text-cyan transition group-hover:scale-105">
                      <Award size={21} />
                    </span>
                    <div>
                      <h3 className="font-semibold leading-6 text-ink">{certification}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        Added to my foundation through structured learning and practice.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection id="experience" className="scroll-mt-36 py-16 sm:py-20">
          <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeading
              eyebrow="Experience / Training"
              title="Professional training and practical learning experiences."
              description="My training experience gave me more hands-on practice with frontend structure, component thinking, and implementation habits."
            />
            <div className="grid gap-5">
              {experience.map((item) => (
                <GlassCard key={item.title} className="p-6 transition duration-300 hover:-translate-y-1 hover:border-violet/40">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue/30 to-fuchsia/25 text-cyan">
                      <BookOpen size={28} />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-cyan">{item.period}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-ink">{item.title}</h3>
                      <p className="mt-2 text-muted">{item.organization}</p>
                      <p className="mt-4 leading-7 text-muted">{item.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.focus.map((focus) => (
                          <span
                            key={focus}
                            className="rounded-lg border border-line bg-white/5 px-3 py-2 text-sm text-muted"
                          >
                            {focus}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection
          id="education"
          className="scroll-mt-36 border-y border-line bg-white/[0.025] py-16 sm:py-20"
        >
          <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeading
              eyebrow="Education"
              title="Building a strong foundation in software development, data structures, databases, and full-stack web technologies."
              description="I am currently studying Computer Science Engineering and applying what I learn through projects, training, and consistent practice."
            />
            <div className="grid gap-5">
              {education.map((item) => (
                <GlassCard key={item.degree} className="p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/40">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue/30 to-fuchsia/25 text-cyan">
                      <GraduationCap size={28} />
                    </span>
                    <div>
                      <p className="inline-flex items-center gap-2 text-sm font-medium text-cyan">
                        <Calendar size={16} />
                        {item.period}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-ink">{item.degree}</h3>
                      <p className="mt-2 text-muted">{item.institution}</p>
                      <p className="mt-2 inline-flex items-center gap-2 text-sm text-muted">
                        <MapPin size={16} />
                        {item.location}
                      </p>
                      <p className="mt-4 leading-7 text-muted">{item.description}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection id="resume" className="scroll-mt-36 py-16 sm:py-20">
          <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Resume"
                title="My resume is ready to download."
                description="It includes my education, projects, skills, training, and contact details in a simple format for internship and developer-role applications."
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue to-violet px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-violet/25 transition hover:-translate-y-1"
                  href="/resume.pdf"
                  download="Vansh_Mirani_Resume.pdf"
                >
                  <Download size={18} />
                  Download Resume
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white/5 px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-1 hover:border-cyan hover:text-cyan"
                  href={profile.github}
                  rel="noreferrer"
                  target="_blank"
                >
                  <ExternalLink size={18} />
                  Open GitHub
                </a>
              </div>
            </div>

            <GlassCard className="p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-line bg-white/5 p-4">
                  <p className="text-sm text-muted">Name</p>
                  <p className="mt-2 font-semibold text-ink">{profile.name}</p>
                </div>
                <div className="rounded-2xl border border-line bg-white/5 p-4">
                  <p className="text-sm text-muted">Focus</p>
                  <p className="mt-2 font-semibold text-ink">Software Development</p>
                </div>
                <div className="rounded-2xl border border-line bg-white/5 p-4">
                  <p className="text-sm text-muted">Education</p>
                  <p className="mt-2 font-semibold text-ink">B.Tech CSE</p>
                </div>
                <div className="rounded-2xl border border-line bg-white/5 p-4">
                  <p className="text-sm text-muted">Location</p>
                  <p className="mt-2 font-semibold text-ink">Ahmedabad, India</p>
                </div>
              </div>
            </GlassCard>
          </Container>
        </AnimatedSection>

        <AnimatedSection
          id="contact"
          className="scroll-mt-36 border-t border-line bg-white/[0.025] py-16 sm:py-20"
        >
          <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Contact"
              title="I'm currently seeking internship opportunities and would be happy to connect regarding projects, internships, or collaboration."
              description="If my work looks relevant, you can email me, copy my email, or connect with me on GitHub and LinkedIn."
            />
            <GlassCard className="p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-line bg-white/5 p-5">
                  <Mail className="text-cyan" size={24} />
                  <p className="mt-4 text-sm text-muted">Email</p>
                  <p className="mt-1 break-words font-semibold text-ink">{profile.email}</p>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <button
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan/10 px-4 py-3 text-sm font-semibold text-cyan transition hover:bg-cyan hover:text-paper"
                      onClick={copyEmail}
                      type="button"
                    >
                      {copiedEmail ? <CheckCircle2 size={17} /> : <Clipboard size={17} />}
                      {copiedEmail ? 'Copied' : 'Copy Email'}
                    </button>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-line px-4 py-3 text-sm font-semibold text-ink transition hover:border-cyan hover:text-cyan"
                      href={`mailto:${profile.email}`}
                    >
                      <Send size={17} />
                      Send Email
                    </a>
                  </div>
                  <p className="mt-3 text-sm text-lime" aria-live="polite">
                    {copiedEmail ? 'Email copied to clipboard.' : ''}
                  </p>
                </div>

                <a
                  className="rounded-2xl border border-line bg-white/5 p-5 transition hover:-translate-y-1 hover:border-cyan hover:text-cyan"
                  href={`tel:${profile.phone.replace(/\s/g, '')}`}
                >
                  <Phone size={24} />
                  <p className="mt-4 text-sm text-muted">Phone</p>
                  <p className="mt-1 font-semibold text-ink">{profile.phone}</p>
                </a>

                <div className="rounded-2xl border border-line bg-white/5 p-5">
                  <MapPin className="text-cyan" size={24} />
                  <p className="mt-4 text-sm text-muted">Location</p>
                  <p className="mt-1 font-semibold text-ink">{profile.location}</p>
                </div>

                <div className="rounded-2xl border border-line bg-white/5 p-5">
                  <ExternalLink className="text-cyan" size={24} />
                  <p className="mt-4 text-sm text-muted">Profiles</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {contactLinks
                      .filter((link) => link.label === 'GitHub' || link.label === 'LinkedIn')
                      .map((link) => (
                        <a
                          key={link.label}
                          className="inline-flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm font-semibold text-ink transition hover:border-cyan hover:text-cyan"
                          href={link.href}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {link.label}
                          <ExternalLink size={14} />
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </Container>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
