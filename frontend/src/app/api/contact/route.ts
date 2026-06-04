import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/src/lib/sqlite";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(5, "Message is too short"),
});

export async function POST(request: Request) {
  const requestBody = await request.json();
  const parsed = contactSchema.safeParse(requestBody);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues.map((err) => err.message).join(" ") },
      { status: 400 }
    );
  }

  const db = getDb();
  const stmt = db.prepare(
    `INSERT INTO contact_messages (name, email, subject, message, created_at)
     VALUES (?, ?, ?, ?, ?)`
  );

  stmt.run(
    parsed.data.name,
    parsed.data.email,
    parsed.data.subject,
    parsed.data.message,
    new Date().toISOString()
  );

  return NextResponse.json({ message: "Message saved successfully." });
}
