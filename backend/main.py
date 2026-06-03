import base64
import hashlib
import hmac
import json
import os
import time

from fastapi import FastAPI, Header, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# SQLite Database
DATABASE_URL = "sqlite:///./contacts.db"

engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(bind=engine)

Base = declarative_base()

# Database Model
class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    subject = Column(String)
    message = Column(String)

# Create tables
Base.metadata.create_all(bind=engine)

# Admin settings
ADMIN_USERNAME = os.getenv("ADMIN_USERNAME", "admin")
ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD", "851akk5201")
ADMIN_SECRET_KEY = os.getenv("ADMIN_SECRET_KEY", "replace-this-secret")
TOKEN_EXPIRE_SECONDS = 60 * 60

# Validation Schema
class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

# API Route
@app.post("/contact")
def create_contact(contact: ContactCreate):
    db = SessionLocal()

    new_contact = Contact(
        name=contact.name,
        email=contact.email,
        subject=contact.subject,
        message=contact.message
    )

    db.add(new_contact)
    db.commit()
    db.refresh(new_contact)

    db.close()

    return {
        "message": "Message sent successfully"
    }


def create_token(username: str) -> str:
    expires = int(time.time()) + TOKEN_EXPIRE_SECONDS
    payload = {"u": username, "e": expires}
    payload_bytes = json.dumps(payload, separators=(",", ":"), sort_keys=True).encode()
    signature = hmac.new(ADMIN_SECRET_KEY.encode(), payload_bytes, hashlib.sha256).hexdigest()
    payload["sig"] = signature
    token = base64.urlsafe_b64encode(json.dumps(payload, separators=(",", ":")).encode()).decode()
    return token


def verify_token(token: str) -> bool:
    try:
        decoded = base64.urlsafe_b64decode(token.encode())
        payload = json.loads(decoded)
        username = payload.get("u")
        expires = payload.get("e")
        signature = payload.get("sig")
        if not username or not expires or not signature:
            return False

        if int(time.time()) > int(expires):
            return False

        expected_payload = {"u": username, "e": expires}
        expected_bytes = json.dumps(expected_payload, separators=(",", ":"), sort_keys=True).encode()
        expected_signature = hmac.new(ADMIN_SECRET_KEY.encode(), expected_bytes, hashlib.sha256).hexdigest()
        return hmac.compare_digest(signature, expected_signature)
    except Exception:
        return False


def authorize_admin(authorization: str | None) -> None:
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Unauthorized")
    token = authorization.removeprefix("Bearer ").strip()
    if not verify_token(token):
        raise HTTPException(status_code=401, detail="Unauthorized")


@app.post("/admin/login")
def admin_login(payload: dict):
    username = payload.get("username")
    password = payload.get("password")
    if username != ADMIN_USERNAME or password != ADMIN_PASSWORD:
        raise HTTPException(status_code=401, detail="Invalid username or password")
    return {"token": create_token(username)}


@app.get("/admin/messages")
def get_admin_messages(authorization: str | None = Header(None)):
    authorize_admin(authorization)
    db = SessionLocal()
    contacts = db.query(Contact).order_by(Contact.id.desc()).all()
    db.close()

    return [
        {
            "id": contact.id,
            "name": contact.name,
            "email": contact.email,
            "subject": contact.subject,
            "message": contact.message,
        }
        for contact in contacts
    ]