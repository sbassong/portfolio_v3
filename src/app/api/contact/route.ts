import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactBody {
  name: string;
  email: string;
  message: string;
}

function isValidBody(body: unknown): body is ContactBody {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return typeof b.name === "string" && typeof b.email === "string" && typeof b.message === "string";
}

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();

    if (!isValidBody(body) || !body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const { name, email, message } = body;

    await resend.emails.send({
      from: process.env.RESEND_FROM ?? "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL ?? "sampromoemail@gmail.com",
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
