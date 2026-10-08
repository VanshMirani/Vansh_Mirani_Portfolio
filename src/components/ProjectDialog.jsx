import { useEffect, useRef } from "react";
import { ArrowUpRight, Check, CodeXml, X } from "lucide-react";
import ProjectArtwork from "./ProjectArtwork.jsx";

export default function ProjectDialog({ project, onClose }) {
  const ref = useRef(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  useEffect(() => {
    const dialog = ref.current;
    if (!project) {
      if (dialog.open) dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);
  return (
    <dialog
      ref={ref}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onCancel={(event) => {
        event.preventDefault();
        closeRef.current();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeRef.current();
      }}
    >
      {project ? (
        <div className="project-dialog-inner">
          <div className="dialog-top">
            <span className="small-label">PROJECT / {project.category}</span>
            <button
              type="button"
              className="icon-button"
              aria-label="Close project details"
              onClick={onClose}
              autoFocus
            >
              <X size={22} />
            </button>
          </div>
          <ProjectArtwork project={project} compact />
          <div className="dialog-copy">
            <p className="eyebrow">{project.type}</p>
            <h2 id="project-dialog-title">
              {project.title}
              <span className="blue-text">.</span>
            </h2>
            <p className="dialog-description">{project.description}</p>
            <h3>Inside the project</h3>
            <ul className="project-highlights">
              {project.contributions.map((item) => (
                <li key={item}>
                  <Check size={16} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="project-tags dialog-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="dialog-actions">
              {project.live ? (
                <a
                  className="button button-primary"
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit website
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              ) : null}
              <a
                className="button button-outline"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <CodeXml size={17} aria-hidden="true" />
                View source
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
