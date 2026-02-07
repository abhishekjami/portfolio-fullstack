export const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

export type Project = {
  id: number;
  title: string;
  description: string;
  tech_stack: string[];
  github_url: string;
  demo_url?: string | null;
};

export type Skill = {
  id: number;
  name: string;
  category: string;
};

export async function getProjects(): Promise<Project[]> {
  const res = await fetch(`${API_BASE}/projects`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}

export async function getSkills(): Promise<Skill[]> {
  const res = await fetch(`${API_BASE}/skills`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch skills");
  return res.json();
}
