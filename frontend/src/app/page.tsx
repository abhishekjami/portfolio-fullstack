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
    <main className="py-12">
      {/* Hero */}
      <section className="lg:grid lg:grid-cols-12 lg:items-start gap-8">
        <div className="lg:col-span-7 space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">Abhishek Jami</h1>
          <p className="text-zinc-400">
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
        </div>

        {/* Right visual / decorative column for large screens */}
        <div className="hidden lg:flex lg:col-span-5 items-start">
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-950/30 via-blue-900/20 to-transparent ring-1 ring-blue-400/20 p-6 shadow-xl backdrop-blur-md">
            <div className="flex h-full flex-col justify-center items-start gap-4">
              <div className="rounded-lg bg-gradient-to-tr from-blue-800/60 to-blue-700/30 p-4 shadow-inner w-full">
                <h3 className="text-xl font-semibold text-blue-50">Featured</h3>
                <p className="mt-2 text-sm text-blue-100/70">Selected projects and highlights shown below.</p>
              </div>
              <div className="mt-2 w-full grid grid-cols-2 gap-3">
                <div className="h-14 rounded-lg bg-gradient-to-r from-blue-700/40 to-slate-800/20" />
                <div className="h-14 rounded-lg bg-gradient-to-r from-slate-800/20 to-blue-700/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mt-12 md:mt-16 lg:mt-20">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-3 text-zinc-400 max-w-3xl">
          I’m a graduate student focused on analytics, dashboards, and ML projects. I enjoy turning messy data into
          insights and building products that stakeholders actually use.
        </p>
      </section>

      {/* Projects */}
      <section className="mt-12 md:mt-16 lg:mt-20">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      <div className="mt-12 md:mt-16 lg:mt-20">
        <ExtracurricularSection />
      </div>

      {/* Skills */}
      <section className="mt-12 md:mt-16 lg:mt-20">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(grouped).map(([cat, list]) => (
            <SkillGroup key={cat} title={cat} skills={list} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mt-12 md:mt-16 lg:mt-20 rounded-2xl border p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-zinc-400">
          Email: {" "}
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
