import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const expected = process.env.ADMIN_PASSWORD;

  if (!expected) {
    return NextResponse.json(
      { ok: false, message: 'ADMIN_PASSWORD env var not configured. See DEPLOY.md.' },
      { status: 500 }
    );
  }

  if (password !== expected) {
    return NextResponse.json({ ok: false, message: 'Wrong password' }, { status: 401 });
  }

  return NextResponse.json({ ok: true });
}
