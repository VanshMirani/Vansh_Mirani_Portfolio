import { useEffect, useId, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MoveHorizontal,
} from "lucide-react";
import ProjectArtwork from "./ProjectArtwork";
import "./project-deck.css";

const wrap = (index, length) => ((index % length) + length) % length;

function cardPosition(index, active, length) {
  let offset = wrap(index - active, length);
  if (offset > length / 2) offset -= length;
  const depth = Math.abs(offset);
  return {
    "--card-x": `${Math.sign(offset) * Math.min(depth, 2) * 18}px`,
    "--card-y": `${Math.min(depth, 2) * 11}px`,
    "--card-rotation": `${Math.sign(offset) * Math.min(depth, 2) * 5}deg`,
    "--card-scale": 1 - Math.min(depth, 2) * 0.055,
    zIndex: length - depth,
    opacity: depth > 2 ? 0 : 1,
    visibility: depth > 2 ? "hidden" : "visible",
  };
}

export default function ProjectDeck({
  projects,
  activeIndex: selection,
  onSelect,
  onOpen,
}) {
  const stageRef = useRef(null);
  const gestureRef = useRef(null);
  const suppressOpenUntil = useRef(0);
  const instructionsId = useId();
  const count = projects.length;
  const activeIndex = count ? wrap(selection, count) : 0;
  const activeProject = projects[activeIndex];

  function clearGesture() {
    const gesture = gestureRef.current;
    gestureRef.current = null;
    const stage = stageRef.current;
    if (!stage) return;
    stage.style.removeProperty("--drag-x");
    stage.style.removeProperty("--drag-rotation");
    stage.removeAttribute("data-dragging");
    if (gesture && stage.hasPointerCapture(gesture.pointerId)) {
      stage.releasePointerCapture(gesture.pointerId);
    }
  }

  useEffect(() => {
    const stage = stageRef.current;
    return () => {
      const gesture = gestureRef.current;
      if (gesture && stage?.hasPointerCapture(gesture.pointerId)) {
        stage.releasePointerCapture(gesture.pointerId);
      }
      gestureRef.current = null;
    };
  }, []);

  function select(index) {
    clearGesture();
    onSelect(wrap(index, count));
  }

  function onPointerDown(event) {
    if (count < 2 || !event.isPrimary || event.button !== 0) return;
    if (event.target.closest("button, a")) return;
    gestureRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      direction: null,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event) {
    const gesture = gestureRef.current;
    if (!gesture || gesture.pointerId !== event.pointerId) return;
    const x = event.clientX - gesture.startX;
    const y = event.clientY - gesture.startY;
    if (!gesture.direction && Math.max(Math.abs(x), Math.abs(y)) > 9) {
      gesture.direction =
        Math.abs(x) > Math.abs(y) * 1.2 ? "horizontal" : "vertical";
    }
    if (gesture.direction !== "horizontal") return;
    event.currentTarget.setAttribute("data-dragging", "true");
    event.currentTarget.style.setProperty(
      "--drag-x",
      `${Math.max(-100, Math.min(100, x * 0.55))}px`,
    );
    event.currentTarget.style.setProperty(
      "--drag-rotation",
      `${Math.max(-6, Math.min(6, x * 0.025))}deg`,
    );
  }

  function onPointerUp(event) {
    const gesture = gestureRef.current;
    if (!gesture || gesture.pointerId !== event.pointerId) return;
    const distance = event.clientX - gesture.startX;
    const shouldChange =
      gesture.direction === "horizontal" && Math.abs(distance) > 42;
    clearGesture();
    if (shouldChange) {
      suppressOpenUntil.current = performance.now() + 350;
      select(activeIndex + (distance < 0 ? 1 : -1));
    }
  }

  function onKeyDown(event) {
    if (count < 2 || event.altKey || event.ctrlKey || event.metaKey) return;
    const isNavigationKey = ["ArrowRight", "ArrowLeft", "Home", "End"].includes(
      event.key,
    );
    if (isNavigationKey && event.target.closest(".project-deck-card")) {
      stageRef.current?.focus({ preventScroll: true });
    }
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      select(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      select(event.key === "Home" ? 0 : count - 1);
    }
  }

  if (!activeProject) return null;

  return (
    <section
      className="project-deck"
      aria-label="Interactive project showcase"
      aria-roledescription="carousel"
      onKeyDown={onKeyDown}
    >
      <div className="project-deck-heading">
        <span className="project-deck-eyebrow">Pick a project</span>
        <span className="project-deck-hint" aria-hidden="true">
          <MoveHorizontal size={15} />
          <span className="deck-desktop-hint">Drag / use arrows</span>
          <span className="deck-touch-hint">Swipe / use arrows</span>
        </span>
      </div>

      <p className="project-deck-sr" id={instructionsId}>
        Swipe horizontally or use the previous and next buttons to explore. With
        the deck focused, use the Left and Right arrow keys. Open a project to
        see its details.
      </p>

      <div
        className="project-deck-stage"
        ref={stageRef}
        tabIndex={0}
        role="group"
        aria-label="Project cards"
        aria-describedby={instructionsId}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={clearGesture}
        onLostPointerCapture={clearGesture}
      >
        {projects.map((project, index) => {
          const isActive = index === activeIndex;
          return (
            <article
              className={`project-deck-card${isActive ? " is-active" : ""}`}
              style={cardPosition(index, activeIndex, count)}
              key={project.id}
              aria-hidden={!isActive}
              inert={!isActive}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${count}: ${project.title}`}
            >
              <div className="project-deck-art">
                <ProjectArtwork project={project} compact />
                <span className="project-deck-category">
                  {project.category}
                </span>
                <span className="project-deck-card-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="project-deck-body">
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <div className="project-deck-actions">
                  <button
                    className="project-deck-open"
                    type="button"
                    tabIndex={isActive ? 0 : -1}
                    aria-label={`View ${project.title}`}
                    onClick={(event) => {
                      if (performance.now() >= suppressOpenUntil.current)
                        onOpen(project, event.currentTarget);
                    }}
                  >
                    View project <ArrowUpRight size={17} aria-hidden="true" />
                  </button>
                  {project.live && (
                    <a
                      className="project-deck-live"
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex={isActive ? 0 : -1}
                      aria-label={`Open ${project.title} live demo`}
                      onClick={(event) => {
                        if (performance.now() < suppressOpenUntil.current)
                          event.preventDefault();
                      }}
                    >
                      Live demo <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="project-deck-controls">
        <button
          type="button"
          className="project-deck-arrow"
          aria-label="Previous project"
          onClick={() => select(activeIndex - 1)}
          disabled={count < 2}
        >
          <ArrowLeft size={18} />
        </button>
        <div className="project-deck-position" aria-hidden="true">
          <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
          <span>/</span>
          {String(count).padStart(2, "0")}
        </div>
        <button
          type="button"
          className="project-deck-arrow"
          aria-label="Next project"
          onClick={() => select(activeIndex + 1)}
          disabled={count < 2}
        >
          <ArrowRight size={18} />
        </button>
      </div>

      <div
        className="project-deck-selectors"
        role="group"
        aria-label="Choose a project"
      >
        {projects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            aria-label={`Show ${project.title}`}
            aria-pressed={index === activeIndex}
            onClick={() => select(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
          </button>
        ))}
      </div>
      <p
        className="project-deck-sr"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {activeProject.title}. Project {activeIndex + 1} of {count}.
      </p>
    </section>
  );
}
