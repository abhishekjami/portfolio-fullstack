from sqlalchemy import String, Integer, Text
from sqlalchemy.orm import Mapped, mapped_column
from .database import Base

class Project(Base):
    __tablename__ = "projects"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=False)
    tech_stack: Mapped[str] = mapped_column(String(300), nullable=False)  # comma-separated
    github_url: Mapped[str] = mapped_column(String(300), nullable=False)
    demo_url: Mapped[str | None] = mapped_column(String(300), nullable=True)

class Skill(Base):
    __tablename__ = "skills"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String(120), nullable=False)
    category: Mapped[str] = mapped_column(String(120), nullable=False)
