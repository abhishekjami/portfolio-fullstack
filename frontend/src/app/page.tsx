import { getProjects, getSkills } from "@/lib/api";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillGroup } from "@/components/SkillGroup";
import { ExtracurricularSection } from "@/components/ExtracurricularSection";

const STATS = [
  { label: "DATA ANALYTICS", val: 92 },
  { label: "MACHINE LEARNING", val: 85 },
  { label: "VISUALIZATION", val: 88 },
  { label: "SQL / DATABASES", val: 90 },
  { label: "PYTHON", val: 87 },
];

export default async function Home() {
  const [projects, skills] = await Promise.all([getProjects(), getSkills()]);

  const grouped = skills.reduce<Record<string, typeof skills>>((acc, s) => {
    acc[s.category] = acc[s.category] || [];
    acc[s.category].push(s);
    return acc;
  }, {});

  return (
    <main className="py-12 crt-flicker">

      {/* ── HERO ── */}
      <section
        className="pixel-border p-6 sm:p-8 relative"
        style={{ background: "var(--card-bg)" }}
      >
        {/* Top bar */}
        <div
          className="flex justify-between items-center mb-6 pb-3"
          style={{ borderBottom: "1px solid rgba(0,255,65,0.2)" }}
        >
          <span
            className="glow-pink"
            style={{ fontFamily: "var(--font-pixel)", fontSize: "8px" }}
          >
            ◆ PLAYER 1 PROFILE
          </span>
          <span
            className="blink glow-green"
            style={{ fontFamily: "var(--font-pixel)", fontSize: "8px" }}
          >
            ■ ONLINE
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left — Identity */}
          <div className="space-y-5">
            <div>
              <p
                className="glow-pink mb-2"
                style={{ fontFamily: "var(--font-pixel)", fontSize: "8px" }}
              >
                CHARACTER NAME:
              </p>
              <h1
                className="glow-green"
                style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "clamp(16px, 3.5vw, 26px)",
                  lineHeight: 1.6,
                }}
              >
                ABHISHEK
                <br />
                JAMI
              </h1>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="retro-tag">ANALYTICS</span>
              <span
                className="retro-tag"
                style={{
                  borderColor: "var(--secondary)",
                  color: "var(--secondary)",
                  textShadow: "0 0 4px var(--secondary)",
                }}
              >
                SOFTWARE
              </span>
              <span
                className="retro-tag"
                style={{
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                  textShadow: "0 0 4px var(--accent)",
                }}
              >
                PRODUCT
              </span>
            </div>

            <p style={{ color: "var(--foreground)", opacity: 0.75, fontSize: "20px", lineHeight: 1.6 }}>
              Building dashboards and models that drive decisions.
              <br />
              Turning messy data into insights since 2020.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/abhishekjami"
                target="_blank"
                rel="noreferrer"
                className="pixel-btn"
              >
                ◆ GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/abhishekjami"
                target="_blank"
                rel="noreferrer"
                className="pixel-btn pixel-btn-pink"
              >
                ◆ LINKEDIN
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="pixel-btn pixel-btn-yellow"
              >
                ◆ RESUME
              </a>
            </div>
          </div>

          {/* Right — Stats */}
          <div
            className="space-y-4"
            style={{
              borderLeft: "1px solid rgba(0,255,65,0.2)",
              paddingLeft: "2rem",
            }}
          >
            <p
              className="glow-pink mb-4"
              style={{ fontFamily: "var(--font-pixel)", fontSize: "8px" }}
            >
              POWER LEVELS:
            </p>
            {STATS.map(({ label, val }) => (
              <div key={label}>
                <div
                  className="flex justify-between mb-1"
                  style={{
                    fontFamily: "var(--font-pixel)",
                    fontSize: "7px",
                    color: "var(--foreground)",
                  }}
                >
                  <span>{label}</span>
                  <span className="glow-yellow">{val}</span>
                </div>
                <div
                  style={{
                    height: "8px",
                    background: "rgba(0,255,65,0.1)",
                    border: "1px solid rgba(0,255,65,0.3)",
                  }}
                >
                  <div
                    style={{
                      width: `${val}%`,
                      height: "100%",
                      background: "var(--primary)",
                      boxShadow: "0 0 8px var(--primary)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="mt-16">
        <h2 className="retro-section-title mb-6">ABOUT_ME.txt</h2>
        <div className="pixel-border p-5" style={{ background: "var(--card-bg)" }}>
          <p
            style={{
              color: "var(--foreground)",
              fontSize: "20px",
              lineHeight: 1.75,
              maxWidth: "72ch",
            }}
          >
            <span className="glow-green">&gt; </span>
            I&apos;m a graduate student at Northeastern University pursuing Data Analytics
            Engineering. I am also a Graduate Student Ambassador and a Teaching Assistant for
            IE6600: Computation and Visualization. Previously, I worked in the Telecommunication
            domain at Samsung Electronics on 4G &amp; 5G deployment, optimization, root cause
            analysis, and automation. My experience spans Distributed Systems, Networking, Data
            Analysis, and Automation. I&apos;m seeking roles in Analytics Engineering, Product
            Management, or Software Engineering.
          </p>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="mt-16">
        <h2 className="retro-section-title mb-6">MISSIONS_LOG</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      {/* ── EXTRACURRICULAR ── */}
      <div className="mt-16">
        <ExtracurricularSection />
      </div>

      {/* ── SKILLS ── */}
      <section className="mt-16">
        <h2 className="retro-section-title mb-6">SKILL_TREE</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(grouped).map(([cat, list]) => (
            <SkillGroup key={cat} title={cat} skills={list} />
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="mt-16">
        <h2 className="retro-section-title mb-6">CONTACT_FORM</h2>
        <div className="pixel-border p-6 space-y-3" style={{ background: "var(--card-bg)" }}>
          <p style={{ fontSize: "20px", color: "var(--foreground)" }}>
            <span className="glow-pink">&gt; </span>
            PERSONAL:{" "}
            <a
              href="mailto:abhishekjami1999@gmail.com"
              className="glow-yellow"
              style={{ textDecoration: "underline" }}
            >
              abhishekjami1999@gmail.com
            </a>
          </p>
          <p style={{ fontSize: "20px", color: "var(--foreground)" }}>
            <span className="glow-pink">&gt; </span>
            SCHOOL:{" "}
            <a
              href="mailto:jami.ab@northeastern.edu"
              className="glow-yellow"
              style={{ textDecoration: "underline" }}
            >
              jami.ab@northeastern.edu
            </a>
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="mt-16 pb-8 text-center"
        style={{
          fontFamily: "var(--font-pixel)",
          fontSize: "8px",
          color: "var(--dim)",
        }}
      >
        <span className="blink">█</span> © {new Date().getFullYear()} ABHISHEK JAMI — ALL RIGHTS
        RESERVED <span className="blink">█</span>
      </footer>
    </main>
  );
}
