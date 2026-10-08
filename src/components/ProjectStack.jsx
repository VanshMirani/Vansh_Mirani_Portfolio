import { Atom, Coffee, Database } from "lucide-react";
import "./project-stack.css";

// Select the main technologies from the same tags used by the project cards.
function projectStack(tags) {
  if (tags.includes("Java")) return [{ name: "Java", kind: "java" }];
  const stack = [];
  if (tags.includes("React.js")) stack.push({ name: "React", kind: "react" });
  else if (tags.includes("JavaScript"))
    stack.push({ name: "JavaScript", kind: "javascript" });
  if (tags.includes("Node.js")) stack.push({ name: "Node.js", kind: "node" });
  if (tags.includes("PostgreSQL"))
    stack.push({ name: "PostgreSQL", kind: "postgres" });
  else if (tags.includes("MongoDB"))
    stack.push({ name: "MongoDB", kind: "mongo" });
  return stack;
}

function TechnologyIcon({ kind }) {
  if (kind === "react") return <Atom strokeWidth={1.35} />;
  if (kind === "java") return <Coffee strokeWidth={1.4} />;
  if (kind === "postgres") return <Database strokeWidth={1.4} />;
  if (kind === "javascript") return <span className="stack-js-mark">JS</span>;
  if (kind === "node")
    return (
      <svg viewBox="0 0 40 40" fill="none">
        <path
          d="m20 3 15 8.5v17L20 37 5 28.5v-17Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <text
          x="20"
          y="25"
          textAnchor="middle"
          fill="currentColor"
          fontSize="14"
          fontWeight="600"
        >
          JS
        </text>
      </svg>
    );
  return (
    <svg viewBox="0 0 40 40" fill="none">
      <path
        d="M20 3C17 10 9 13 10 23c.6 7 6 10 10 12 5-3 10-7 10-14C30 13 23 9 20 3Z"
        fill="currentColor"
        fillOpacity=".16"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M20 10v28" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function ProjectStack({ project }) {
  if (!project) return null;
  const stack = projectStack(project.tags);
  if (!stack.length) return null;
  const single = stack.length === 1;

  return (
    <section
      className="project-stack"
      aria-label={`The technology behind ${project.title}`}
    >
      <p className="project-stack-heading">Built with</p>
      <div
        className={`project-stack-scene${single ? " is-single" : ""}`}
        key={project.id}
      >
        <svg
          className="project-stack-wires"
          viewBox="0 0 400 300"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {!single && (
            <>
              <path d="M96 57C172 57 205 144 352 144" />
              <path d="M104 237C184 237 205 144 352 144" />
            </>
          )}
          <path d={single ? "M160 144H400" : "M240 144H400"} />
          <path
            className="project-stack-signal"
            pathLength="100"
            d={single ? "M160 144H400" : "M96 57C172 57 205 144 352 144H400"}
          />
          <circle cx="352" cy="144" r="3" />
        </svg>
        <span className="project-stack-bridge" aria-hidden="true">
          <span />
        </span>
        <ul className="project-stack-technologies">
          {stack.map((technology, index) => (
            <li
              className={`project-stack-tech stack-position-${index}`}
              key={technology.kind}
              style={{ "--tile-order": index }}
            >
              <span className="project-stack-tile" aria-hidden="true">
                <TechnologyIcon kind={technology.kind} />
              </span>
              <span className="project-stack-name">{technology.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
