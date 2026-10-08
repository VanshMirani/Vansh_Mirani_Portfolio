import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Copy,
  Download,
  CodeXml,
  GraduationCap,
  Layers3,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Menu,
  Plus,
  X,
} from "lucide-react";
import {
  certifications,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "./data/portfolio.js";
import ProjectDeck from "./components/ProjectDeck.jsx";
import ProjectStack from "./components/ProjectStack.jsx";
import ProjectArtwork from "./components/ProjectArtwork.jsx";
import ProjectDialog from "./components/ProjectDialog.jsx";
import profilePhoto from "./assets/vansh-profile.jpg";

const featuredProjects = projects.filter((project) => project.featured);
const categories = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];
const navItems = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuRef.current?.focus();
      }
    };
    const handlePointer = (event) => {
      if (!navRef.current?.contains(event.target)) setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 761px)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    document.addEventListener("pointerdown", handlePointer);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("pointerdown", handlePointer);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);
  return (
    <header className="site-header" ref={navRef}>
      <div className="container navigation">
        <a
          href="#top"
          className="wordmark"
          aria-label="Vansh Mirani, home"
          onClick={() => setOpen(false)}
        >
          vm<span>.</span>
        </a>
        <nav aria-label="Main navigation" className="desktop-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a
            className="button button-small button-outline"
            href="/resume.pdf"
            download="Vansh_Mirani_Software_Developer_Resume.pdf"
          >
            Resume <Download size={14} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="icon-button menu-toggle"
            ref={menuRef}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className="mobile-nav container"
        hidden={!open}
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        ))}
      </nav>
    </header>
  );
}

function Reveal({ children, className = "", ...props }) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) return;
    element.classList.add("reveal-pending");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove("reveal-pending");
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} {...props}>
      {children}
    </div>
  );
}

function SectionHeading({ number, label, title, children }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span className="section-number">{number}</span>
          {label}
        </p>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}

function ProjectCard({ project, index, onOpen }) {
  const handlePointer = (event) => {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--pointer-x",
      `${event.clientX - rect.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--pointer-y",
      `${event.clientY - rect.top}px`,
    );
  };
  return (
    <article className="project-card" onPointerMove={handlePointer}>
      <button
        className="project-cover-button"
        type="button"
        aria-label={`Explore ${project.title}`}
        onClick={(event) => onOpen(project, event.currentTarget)}
      >
        <ProjectArtwork project={project} />
        <span className="cover-corner" aria-hidden="true">
          <ArrowUpRight size={20} />
        </span>
      </button>
      <div className="project-card-body">
        <div className="project-meta">
          <span>{project.type}</span>
          <span>0{index + 1}</span>
        </div>
        <h3>
          <button
            type="button"
            onClick={(event) => onOpen(project, event.currentTarget)}
          >
            {project.title}
            <ArrowUpRight size={20} aria-hidden="true" />
          </button>
        </h3>
        <p>{project.summary}</p>
        <div className="project-tags">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {project.live && (
          <a
            className="text-link project-live-link"
            href={project.live}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} live demo`}
          >
            Live demo <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}

function Projects({ onOpen }) {
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [category, setCategory] = useState("All");
  const filteredProjects = projects.filter(
    (project) => category === "All" || project.category === category,
  );
  return (
    <section id="projects" className="section work-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            number="01"
            label="Selected work"
            title={
              <>
                A few things
                <br className="mobile-break" /> I've brought to life
                <span className="blue-text">.</span>
              </>
            }
          >
            <p className="section-note">
              Real problems, a little curiosity,
              <br />
              and a lot of building.
            </p>
          </SectionHeading>
        </Reveal>
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id}>
              <ProjectCard project={project} index={index} onOpen={onOpen} />
            </Reveal>
          ))}
        </div>
        <div className="archive-heading">
          <div>
            <span className="small-label">THERE'S MORE TO EXPLORE</span>
            <p>Big builds. Small experiments. All part of the journey.</p>
          </div>
          <button
            className="button button-outline archive-button"
            type="button"
            aria-expanded={archiveOpen}
            aria-controls="project-archive"
            onClick={() => setArchiveOpen(!archiveOpen)}
          >
            {archiveOpen ? "Close collection" : "All projects"}
            <span className="count-badge">{projects.length}</span>
            {archiveOpen ? (
              <X size={16} aria-hidden="true" />
            ) : (
              <Plus size={16} aria-hidden="true" />
            )}
          </button>
        </div>
        <div
          id="project-archive"
          className="project-archive"
          hidden={!archiveOpen}
        >
          <div className="archive-toolbar">
            <div
              className="filter-list"
              role="group"
              aria-label="Filter projects"
            >
              {categories.map((item) => (
                <button
                  type="button"
                  key={item}
                  aria-pressed={category === item}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <p role="status" className="results-count">
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "project" : "projects"}
            </p>
          </div>
          <div className="archive-list">
            {filteredProjects.map((project) => (
              <button
                className="archive-row"
                key={project.id}
                type="button"
                onClick={(event) => onOpen(project, event.currentTarget)}
              >
                <span className="archive-icon">
                  <Code2 size={19} aria-hidden="true" />
                </span>
                <span className="archive-name">
                  {project.title}
                  <span>{project.summary}</span>
                </span>
                <span className="archive-category">{project.category}</span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            number="02"
            label="A little about me"
            title={
              <>
                The person
                <br />
                behind the pixels<span className="blue-text">.</span>
              </>
            }
          />
        </Reveal>
        <div className="about-layout">
          <Reveal className="portrait-layout">
            <div className="portrait-frame">
              <img
                src={profilePhoto}
                alt="Vansh Mirani"
                width="1105"
                height="1423"
                loading="lazy"
                decoding="async"
              />
              <span className="portrait-tag">
                <MapPin size={14} aria-hidden="true" />
                Ahmedabad, India
              </span>
            </div>
            <span className="photo-caption">Always a work in progress.</span>
          </Reveal>
          <Reveal className="about-copy">
            <p className="about-lead">
              A curious mind.
              <br />A <span className="blue-text">builder</span> at heart.
            </p>
            <p>{profile.summary}</p>
            <p>
              I'm studying Computer Science at Indus University. My favourite
              part of a project is connecting the pieces: a clear interface,
              useful functionality, and the details that make it feel right.
            </p>
            <p>
              I'm looking for an opportunity to contribute, learn from a team,
              and keep getting better at what I do.
            </p>
            <div className="about-links">
              <a
                className="text-link"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <CodeXml size={17} />
                GitHub
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <a
                className="text-link"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <BriefcaseBusiness size={17} />
                LinkedIn
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div className="toolbox" id="skills">
            <div className="toolbox-title">
              <Layers3 size={19} aria-hidden="true" />
              <h3>My everyday toolkit</h3>
              <span>Always room for something new.</span>
            </div>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h4>{group.title}</h4>
                  <ul>
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="section journey-section">
      <div className="container journey-layout">
        <Reveal>
          <SectionHeading
            number="03"
            label="Learning along the way"
            title={
              <>
                Every step
                <br /> adds something<span className="blue-text">.</span>
              </>
            }
          />
          <p className="journey-note">
            The foundations, the practice,
            <br />
            and the people I learn from.
          </p>
          <a
            id="resume"
            className="text-link resume-link"
            href="/resume.pdf"
            download="Vansh_Mirani_Software_Developer_Resume.pdf"
          >
            Download my resume
            <Download size={16} aria-hidden="true" />
          </a>
        </Reveal>
        <Reveal className="timeline">
          <div id="education" className="timeline-entry">
            <span className="timeline-dot">
              <GraduationCap size={17} aria-hidden="true" />
            </span>
            <p className="small-label">{education[0].period} / EDUCATION</p>
            <h3>{education[0].degree}</h3>
            <p className="timeline-place">{education[0].institution}</p>
            <p>{education[0].description}</p>
          </div>
          <div id="experience" className="timeline-entry">
            <span className="timeline-dot">
              <Code2 size={17} aria-hidden="true" />
            </span>
            <p className="small-label">PRACTICAL EXPERIENCE</p>
            <h3>{experience[0].title}</h3>
            <p className="timeline-place">{experience[0].organization}</p>
            <p>{experience[0].description}</p>
          </div>
          <details className="certification-details" id="certifications">
            <summary>
              Courses & certifications
              <span className="count-badge">{certifications.length}</span>
              <ChevronDown size={17} aria-hidden="true" />
            </summary>
            <ul>
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </details>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const [copyState, setCopyState] = useState("idle");
  const timerRef = useRef(null);
  useEffect(() => () => window.clearTimeout(timerRef.current), []);
  const copyEmail = async () => {
    window.clearTimeout(timerRef.current);
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
    timerRef.current = window.setTimeout(() => setCopyState("idle"), 4500);
  };
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <Reveal>
          <div className="contact-top">
            <p className="eyebrow">
              <span className="section-number">04</span>Have something in mind?
            </p>
            <span className="availability">
              <span />
              Open to opportunities
            </span>
          </div>
          <h2>
            Let's build
            <br />
            something <span className="blue-text">good.</span>
            <ArrowUpRight className="contact-arrow" aria-hidden="true" />
          </h2>
          <div className="contact-bottom">
            <div className="email-group">
              <a className="email-link" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <button
                type="button"
                className="icon-button copy-button"
                aria-label={
                  copyState === "copied" ? "Email copied" : "Copy email address"
                }
                onClick={copyEmail}
              >
                {copyState === "copied" ? (
                  <Check size={18} />
                ) : (
                  <Copy size={18} />
                )}
              </button>
              <span className="copy-status" role="status">
                {copyState === "copied"
                  ? "Copied to clipboard"
                  : copyState === "error"
                    ? "Please select the email to copy it."
                    : ""}
              </span>
            </div>
            <a
              className="text-link phone-link"
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
            >
              {profile.phone}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const projectTriggerRef = useRef(null);
  const openProject = (project, trigger) => {
    projectTriggerRef.current = trigger;
    setSelectedProject(project);
  };
  const closeProject = () => {
    setSelectedProject(null);
    window.requestAnimationFrame(() => projectTriggerRef.current?.focus());
  };
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <section id="top" className="hero-section">
          <div className="container">
            <div className="hero-overline">
              <span className="availability">
                <span />
                Open to internships & opportunities
              </span>
              <span className="small-label portfolio-year">
                PORTFOLIO / {new Date().getFullYear()}
              </span>
            </div>
            <div className="hero-layout">
              <div className="hero-copy">
                <p className="hero-greeting">Hi, I'm</p>
                <h1>
                  Vansh
                  <br /> Mirani<span>.</span>
                </h1>
                <p className="hero-role">
                  Developer. Builder. <span>Curious human.</span>
                </p>
                <p className="hero-description">
                  Turning everyday ideas into thoughtful
                  <br className="desktop-break" /> experiences for the web.
                </p>
                <div className="hero-actions">
                  <a className="button button-primary" href="#projects">
                    Explore my work
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                  <a
                    className="button button-outline"
                    href="/resume.pdf"
                    download="Vansh_Mirani_Software_Developer_Resume.pdf"
                  >
                    Resume
                    <Download size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="hero-toolkit">
                <ProjectStack project={projects[activeIndex]} />
              </div>
              <div className="hero-projects">
                <ProjectDeck
                  projects={projects}
                  activeIndex={activeIndex}
                  onSelect={setActiveIndex}
                  onOpen={openProject}
                />
              </div>
            </div>
            <div className="hero-footer">
              <span>
                <MapPin size={13} aria-hidden="true" />
                Ahmedabad, India
              </span>
              <a href="#projects">
                A FEW THINGS I'VE BUILT
                <ArrowDown size={14} aria-hidden="true" />
              </a>
              <div>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <CodeXml size={17} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <BriefcaseBusiness size={17} />
                </a>
                <a href={`mailto:${profile.email}`} aria-label="Email Vansh">
                  <Mail size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>
        <Projects onOpen={openProject} />
        <About />
        <Journey />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="container">
          <a className="wordmark" href="#top" aria-label="Back to top">
            vm<span>.</span>
          </a>
          <p>
            © {new Date().getFullYear()} Vansh Mirani
            <span>Built with care & a little curiosity.</span>
          </p>
          <a className="text-link" href="#top">
            Back to top
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </footer>
      <ProjectDialog project={selectedProject} onClose={closeProject} />
    </>
  );
}
