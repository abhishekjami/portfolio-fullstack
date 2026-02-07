from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..deps import get_db
from ..models import Project
from ..schemas import ProjectOut

router = APIRouter()

def _to_out(p: Project) -> ProjectOut:
    return ProjectOut(
        id=p.id,
        title=p.title,
        description=p.description,
        tech_stack=[t.strip() for t in p.tech_stack.split(",") if t.strip()],
        github_url=p.github_url,
        demo_url=p.demo_url,
    )

@router.get("", response_model=list[ProjectOut])
def list_projects(db: Session = Depends(get_db)):
    projects = db.query(Project).order_by(Project.id.desc()).all()
    return [_to_out(p) for p in projects]

@router.get("/{project_id}", response_model=ProjectOut)
def get_project(project_id: int, db: Session = Depends(get_db)):
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return _to_out(project)
