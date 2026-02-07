import { Project } from "@/lib/api";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="rounded-2xl border p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <a
          className="text-sm underline"
          href={p.github_url}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>

      <p className="mt-2 text-sm text-zinc-600">{p.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {p.tech_stack.map((t) => (
          <span
            key={t}
            className="rounded-full border px-3 py-1 text-xs"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
