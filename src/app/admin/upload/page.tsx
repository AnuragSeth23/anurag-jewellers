import Link from 'next/link';

export const metadata = {
  title: 'Upload Photos via GitHub',
  robots: { index: false, follow: false },
};

const owner = 'AnuragSeth23';
const repo  = 'anurag-jewellers';
const upUrl    = `https://github.com/${owner}/${repo}/upload/main/public/products`;
const browseUrl = `https://github.com/${owner}/${repo}/tree/main/public/products`;

export default function UploadGuidePage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-3xl maroon-text font-bold">📸 Manage Photos</h1>
      <p className="text-sm text-stone-600 mt-2">
        Add or delete photos via your GitHub account — no extra password to remember.
      </p>

      {/* Upload */}
      <div className="mt-6 bg-white border border-gold-200 rounded-2xl p-6 shadow-gold">
        <h2 className="text-xl maroon-text font-semibold mb-2">➕ Add new photos</h2>
        <ol className="text-sm text-stone-700 space-y-1.5 list-decimal list-inside">
          <li>Click the link below — opens GitHub&apos;s drag-and-drop upload page</li>
          <li>Drag photos from your computer (or tap &quot;choose your files&quot;)</li>
          <li>Scroll down → click <strong>Commit changes</strong></li>
          <li>GitHub Actions rebuilds the site in 1–2 minutes → photos appear on Gallery</li>
        </ol>
        <a
          href={upUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-primary mt-4"
        >
          🚀 Open GitHub Upload Page
        </a>
        <p className="text-xs text-stone-500 mt-3">
          GitHub will ask you to log in (only first time). Same login as for code changes.
        </p>
      </div>

      {/* Delete */}
      <div className="mt-6 bg-white border border-gold-200 rounded-2xl p-6 shadow-gold">
        <h2 className="text-xl maroon-text font-semibold mb-2">🗑️ Delete photos</h2>
        <ol className="text-sm text-stone-700 space-y-1.5 list-decimal list-inside">
          <li>Open the photos folder on GitHub (link below)</li>
          <li>Click the photo you want to delete (e.g. <code>p042.jpg</code>)</li>
          <li>Click the &quot;…&quot; menu (top-right) → <strong>Delete file</strong></li>
          <li>Confirm with <strong>Commit changes</strong> at the bottom</li>
          <li>Site rebuilds in 1–2 minutes</li>
        </ol>
        <a
          href={browseUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-outline mt-4"
        >
          🗂️ Open GitHub Photos Folder
        </a>
      </div>

      {/* Tips */}
      <div className="mt-6 bg-cream border border-gold-200 rounded-xl p-5 text-sm text-stone-700">
        <div className="font-semibold maroon-text mb-2">📋 Tips</div>
        <ul className="space-y-1 list-disc list-inside">
          <li>Good lighting + clean background looks professional</li>
          <li>Keep each photo under 5 MB</li>
          <li>Square (1:1) ratio looks best</li>
          <li>Only your GitHub account can upload/delete — fully secure</li>
          <li>No need to rename files — auto-organize works</li>
        </ul>
      </div>

      <div className="mt-6 text-center">
        <Link href="/admin" className="text-sm text-gold-700 underline">
          ← Back to Admin Guide
        </Link>
      </div>
    </div>
  );
}
