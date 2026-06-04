import { NextResponse } from "next/server";
import { z } from "zod";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "855akk501";
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "admin-secret-token";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = loginSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { detail: parsed.error.issues.map((issue) => issue.message).join(" ") },
      { status: 400 }
    );
  }

  if (
    parsed.data.username !== ADMIN_USERNAME ||
    parsed.data.password !== ADMIN_PASSWORD
  ) {
    return NextResponse.json({ detail: "Invalid credentials" }, { status: 401 });
  }

  return NextResponse.json({ token: ADMIN_TOKEN });
}
