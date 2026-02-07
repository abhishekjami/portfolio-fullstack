import { Skill } from "@/lib/api";

export function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: Skill[];
}) {
  return (
    <div className="rounded-2xl border p-5 shadow-sm">
      <h3 className="text-base font-semibold">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {skills.map((s) => (
          <span key={s.id} className="rounded-full border px-3 py-1 text-xs">
            {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}
