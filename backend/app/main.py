from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

from .database import Base, engine
from .seed import seed_if_empty
from .routers import projects, skills

load_dotenv()

app = FastAPI(title="Portfolio API", version="1.0.0")

frontend_origin = os.getenv("FRONTEND_ORIGIN", "http://localhost:3000")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[frontend_origin],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)
seed_if_empty()

app.include_router(projects.router, prefix="/projects", tags=["projects"])
app.include_router(skills.router, prefix="/skills", tags=["skills"])

@app.get("/health")
def health():
    return {"status": "ok"}
