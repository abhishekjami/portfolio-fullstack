from pydantic import BaseModel

class ProjectOut(BaseModel):
    id: int
    title: str
    description: str
    tech_stack: list[str]
    github_url: str
    demo_url: str | None = None

class SkillOut(BaseModel):
    id: int
    name: str
    category: str
