import { getProjects, getSkills } from "@/lib/api";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillGroup } from "@/components/SkillGroup";
import { ExtracurricularSection } from "@/components/ExtracurricularSection";

export default async function Home() {
  const [projects, skills] = await Promise.all([getProjects(), getSkills()]);

  const grouped = skills.reduce<Record<string, typeof skills>>((acc, s) => {
    acc[s.category] = acc[s.category] || [];
    acc[s.category].push(s);
    return acc;
  }, {});

  return (
    <main className="mx-auto max-w-5xl px-5 py-12">
      {/* Hero */}
      <section className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Abhishek Jami</h1>
        <p className="text-zinc-600">
          Data Analytics • BI • ML — building dashboards and models that drive decisions.
        </p>

        <div className="flex flex-wrap gap-4 text-sm">
          <a
            className="underline"
            href="https://github.com/abhishekjami"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="underline"
            href="https://www.linkedin.com/in/abhishekjami"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a className="underline" href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </section>

      {/* About */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-3 text-zinc-600">
          I’m a graduate student focused on analytics, dashboards, and ML projects. I enjoy turning messy data into
          insights and building products that stakeholders actually use.
        </p>
      </section>

      {/* Projects */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      <ExtracurricularSection />

      {/* Skills */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {Object.entries(grouped).map(([cat, list]) => (
            <SkillGroup key={cat} title={cat} skills={list} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mt-12 rounded-2xl border p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-zinc-600">
          Email:{" "}
          <a className="underline" href="mailto:abhishekjami@gmail.com">
            abhishekjami@gmail.com
          </a>
        </p>
      </section>

      <footer className="mt-12 text-sm text-zinc-500">
        © {new Date().getFullYear()} Abhishek Jami
      </footer>
    </main>
  );
}
