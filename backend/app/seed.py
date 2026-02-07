from sqlalchemy.orm import Session
from .database import SessionLocal
from .models import Project, Skill

def seed_if_empty():
    db: Session = SessionLocal()
    try:
        has_projects = db.query(Project).first() is not None
        has_skills = db.query(Skill).first() is not None

        if not has_projects:
            db.add_all([
                Project(
                    title="HR Analytics Dashboard for Employee Attrition",
                    description="HR analytics dashboard to analyze employee attrition and satisfaction trends, helping HR teams track KPIs and improve retention.",
                    tech_stack="Power BI, HR Analytics, Data Visualization, KPIs",
                    github_url="https://github.com/abhishekjami/HR_Analytics_Dashboard_For_Employee_Attrition",
                    demo_url=None,
                ),
                Project(
                    title="In-Vehicle Coupon Recommendation (ML Model)",
                    description="ML classification to predict coupon acceptance based on contextual features like time, passengers, and destination.",
                    tech_stack="Python, scikit-learn, Pandas, Classification, Feature Importance",
                    github_url="https://github.com/abhishekjami/Invehicle_coupon_recommendation_ML_model",
                    demo_url=None,
                ),
            ])

        if not has_skills:
            db.add_all([
                Skill(name="Python", category="Programming"),
                Skill(name="SQL", category="Data"),
                Skill(name="Power BI", category="BI"),
                Skill(name="FastAPI", category="Backend"),
                Skill(name="Next.js", category="Frontend"),
                Skill(name="Machine Learning", category="AI/ML"),
            ])

        if (not has_projects) or (not has_skills):
            db.commit()
    finally:
        db.close()
