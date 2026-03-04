import { Project } from "@/lib/api";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <div
      className="pixel-border p-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,65,0.25)]"
      style={{ background: "var(--card-bg)" }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <p
            className="glow-pink mb-2"
            style={{ fontFamily: "var(--font-pixel)", fontSize: "7px" }}
          >
            ◆ MISSION
          </p>
          <h3
            className="glow-green"
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "10px",
              lineHeight: 1.7,
            }}
          >
            {p.title}
          </h3>
        </div>
        <a
          href={p.github_url}
          target="_blank"
          rel="noreferrer"
          className="pixel-btn flex-shrink-0"
          style={{ fontSize: "7px", padding: "5px 8px" }}
        >
          CODE
        </a>
      </div>

      {/* Description */}
      <p
        style={{
          color: "var(--foreground)",
          opacity: 0.75,
          fontSize: "18px",
          lineHeight: 1.55,
          marginBottom: "14px",
        }}
      >
        {p.description}
      </p>

      {/* Tech stack */}
      <div
        style={{
          borderTop: "1px solid rgba(0,255,65,0.2)",
          paddingTop: "10px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "7px",
            color: "var(--dim)",
            marginBottom: "8px",
          }}
        >
          TECH_STACK:
        </p>
        <div className="flex flex-wrap gap-2">
          {p.tech_stack.map((t) => (
            <span key={t} className="retro-tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
