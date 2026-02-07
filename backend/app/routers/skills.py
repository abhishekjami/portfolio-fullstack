from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..deps import get_db
from ..models import Skill
from ..schemas import SkillOut

router = APIRouter()

@router.get("", response_model=list[SkillOut])
def list_skills(db: Session = Depends(get_db)):
    return db.query(Skill).order_by(Skill.category.asc(), Skill.name.asc()).all()
