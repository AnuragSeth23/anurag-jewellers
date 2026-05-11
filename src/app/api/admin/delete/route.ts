import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const maxDuration = 30;

interface Body {
  password: string;
  filename: string;   // e.g. "p042.jpg"
  sha: string;        // file sha from list endpoint
}

/** Deletes a photo from /public/products/ via the GitHub API. */
export async function POST(req: NextRequest) {
  const body: Body = await req.json();

  if (body.password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ ok: false, message: 'Unauthorized' }, { status: 401 });
  }

  if (!body.filename || !body.sha) {
    return NextResponse.json({ ok: false, message: 'filename and sha are required' }, { status: 400 });
  }

  // Safety: only allow deleting files inside public/products/ matching pXXX.jpg pattern
  if (!/^[a-z0-9_-]+\.(jpe?g|png|webp)$/i.test(body.filename)) {
    return NextResponse.json({ ok: false, message: 'Invalid filename' }, { status: 400 });
  }

  const token  = process.env.GITHUB_TOKEN;
  const owner  = process.env.GITHUB_OWNER;
  const repo   = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || 'main';

  if (!token || !owner || !repo) {
    return NextResponse.json(
      { ok: false, message: 'GitHub env vars not configured.' },
      { status: 500 }
    );
  }

  const url = `https://api.github.com/repos/${owner}/${repo}/contents/public/products/${body.filename}`;
  const res = await fetch(url, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
      'User-Agent': 'anurag-jewellers-admin',
    },
    body: JSON.stringify({
      message: `Delete product photo ${body.filename} (via admin)`,
      sha: body.sha,
      branch,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json(
      { ok: false, message: `GitHub delete failed: ${res.status} ${text}` },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: `${body.filename} deleted. Vercel will rebuild in ~1 min.`,
  });
}
