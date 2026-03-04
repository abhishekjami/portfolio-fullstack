import { Skill } from "@/lib/api";

export function SkillGroup({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <div
      className="pixel-border-pink p-5"
      style={{ background: "var(--card-bg)" }}
    >
      {/* Header */}
      <div
        style={{
          borderBottom: "1px solid rgba(255,0,144,0.25)",
          paddingBottom: "10px",
          marginBottom: "12px",
        }}
      >
        <p
          className="glow-pink mb-1"
          style={{ fontFamily: "var(--font-pixel)", fontSize: "7px" }}
        >
          ◆ MODULE
        </p>
        <h3
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "10px",
            color: "var(--foreground)",
            lineHeight: 1.6,
          }}
        >
          {title.toUpperCase()}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s.id}
            className="retro-tag"
            style={{
              borderColor: "rgba(0,229,255,0.5)",
              color: "var(--cyan)",
              textShadow: "0 0 4px var(--cyan)",
            }}
          >
            ▶ {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}
