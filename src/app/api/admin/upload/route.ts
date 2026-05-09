import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const maxDuration = 30;

interface Body {
  password: string;
  filename: string;
  data: string; // base64
}

/**
 * Uploads a new photo to /public/products/ in the GitHub repo.
 * Auto-numbers files to next available pXXX.jpg.
 *
 * Required env vars (set on Vercel):
 *   ADMIN_PASSWORD   — owner's secret
 *   GITHUB_TOKEN     — fine-grained PAT with Contents:write on repo
 *   GITHUB_OWNER     — e.g. "AnuragSeth23"
 *   GITHUB_REPO      — e.g. "anurag-jewellers"
 *   GITHUB_BRANCH    — e.g. "main" (optional, default main)
 */
export async function POST(req: NextRequest) {
  const body: Body = await req.json();

  // Auth
  if (body.password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ ok: false, message: 'Unauthorized' }, { status: 401 });
  }

  const token  = process.env.GITHUB_TOKEN;
  const owner  = process.env.GITHUB_OWNER;
  const repo   = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || 'main';

  if (!token || !owner || !repo) {
    return NextResponse.json(
      { ok: false, message: 'GitHub env vars not configured. See DEPLOY.md → Phase 7.' },
      { status: 500 }
    );
  }

  // 1. List existing files in /public/products/ to find next number
  const listUrl = `https://api.github.com/repos/${owner}/${repo}/contents/public/products?ref=${branch}`;
  const listRes = await fetch(listUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'anurag-jewellers-admin',
    },
  });

  if (!listRes.ok) {
    const text = await listRes.text();
    return NextResponse.json(
      { ok: false, message: `GitHub list failed: ${listRes.status} ${text}` },
      { status: 502 }
    );
  }

  const existing: { name: string }[] = await listRes.json();
  const nums = existing
    .map(f => f.name.match(/^p(\d+)\.jpg$/i))
    .filter((m): m is RegExpMatchArray => !!m)
    .map(m => parseInt(m[1], 10));
  const next = (nums.length ? Math.max(...nums) : 0) + 1;
  const newName = `p${String(next).padStart(3, '0')}.jpg`;

  // 2. Commit the new file
  const putUrl = `https://api.github.com/repos/${owner}/${repo}/contents/public/products/${newName}`;
  const putRes = await fetch(putUrl, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
      'User-Agent': 'anurag-jewellers-admin',
    },
    body: JSON.stringify({
      message: `Add product photo ${newName} (uploaded via admin, was ${body.filename})`,
      content: body.data,
      branch,
    }),
  });

  if (!putRes.ok) {
    const text = await putRes.text();
    return NextResponse.json(
      { ok: false, message: `GitHub commit failed: ${putRes.status} ${text}` },
      { status: 502 }
    );
  }

  // 3. Update galleryPhotos count in src/lib/products.ts so next deploy picks up
  // (we just bump the length: 139)
  // Not critical — left for manual update or we re-fetch directory at runtime.
  return NextResponse.json({
    ok: true,
    filename: newName,
    total: next,
    message: 'Uploaded. Vercel auto-deploy will publish in ~1 min. After deploy, also bump galleryPhotos length in src/lib/products.ts.',
  });
}
