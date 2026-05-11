import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** Lists all photos currently in /public/products/ via the GitHub API. */
export async function POST(req: NextRequest) {
  const { password } = await req.json();

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ ok: false, message: 'Unauthorized' }, { status: 401 });
  }

  const token  = process.env.GITHUB_TOKEN;
  const owner  = process.env.GITHUB_OWNER;
  const repo   = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || 'main';

  if (!token || !owner || !repo) {
    return NextResponse.json(
      { ok: false, message: 'GitHub env vars not configured. See DEPLOY.md.' },
      { status: 500 }
    );
  }

  const url = `https://api.github.com/repos/${owner}/${repo}/contents/public/products?ref=${branch}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'anurag-jewellers-admin',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json(
      { ok: false, message: `GitHub list failed: ${res.status} ${text}` },
      { status: 502 }
    );
  }

  const items: { name: string; sha: string; size: number }[] = await res.json();
  const photos = items
    .filter(f => /\.(jpe?g|png|webp)$/i.test(f.name))
    .map(f => ({ name: f.name, sha: f.sha, size: f.size }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return NextResponse.json({ ok: true, total: photos.length, photos });
}
