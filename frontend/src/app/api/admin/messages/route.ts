import { NextResponse } from "next/server";
import { getDb } from "@/src/lib/sqlite";

const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "admin-secret-token";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");

  if (authHeader !== `Bearer ${ADMIN_TOKEN}`) {
    return NextResponse.json({ detail: "Unauthorized" }, { status: 401 });
  }

  const db = getDb();
  const messages = db
    .prepare(
      `SELECT id, name, email, subject, message, created_at FROM contact_messages ORDER BY created_at DESC`
    )
    .all();

  return NextResponse.json(messages);
}
