'use client';

import { useState } from 'react';

interface UploadResult {
  ok: boolean;
  message: string;
  filename?: string;
  total?: number;
}

export default function UploadClient() {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [results, setResults] = useState<UploadResult[]>([]);

  async function login() {
    setAuthError('');
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        sessionStorage.setItem('admin-pw', password);
        setAuthed(true);
      } else {
        setAuthError('गलत password');
      }
    } catch {
      setAuthError('Server error');
    }
  }

  async function upload() {
    if (!files.length) return;
    setBusy(true);
    setResults([]);
    const out: UploadResult[] = [];

    for (const f of files) {
      const buf = await f.arrayBuffer();
      const base64 = Buffer.from(buf).toString('base64');
      try {
        const res = await fetch('/api/admin/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            password: sessionStorage.getItem('admin-pw'),
            filename: f.name,
            data: base64,
          }),
        });
        const j = await res.json();
        out.push({ ok: res.ok, message: j.message || (res.ok ? 'OK' : 'Failed'), filename: j.filename, total: j.total });
      } catch (e: any) {
        out.push({ ok: false, message: e?.message || 'Network error' });
      }
      setResults([...out]);
    }
    setBusy(false);
    setFiles([]);
  }

  if (!authed) {
    return (
      <div className="container mx-auto px-4 py-20 max-w-md">
        <div className="bg-white border border-gold-200 rounded-2xl p-8 shadow-gold">
          <div className="text-center mb-6">
            <div className="text-4xl mb-2">🔒</div>
            <h1 className="text-2xl maroon-text font-bold">Owner Access Only</h1>
            <p className="text-sm text-stone-600 mt-1">Admin Upload Panel</p>
          </div>

          <label className="block text-sm font-medium mb-2">Enter Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && login()}
            className="w-full px-4 py-3 border border-gold-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:outline-none"
            placeholder="••••••••"
            autoFocus
          />

          {authError && (
            <div className="mt-3 text-red-700 text-sm">{authError === 'गलत password' ? 'Wrong password' : authError}</div>
          )}

          <button
            onClick={login}
            disabled={!password}
            className="btn-primary w-full justify-center mt-5 disabled:opacity-50"
          >
            Login
          </button>

          <div className="mt-6 text-xs text-stone-500 text-center">
            Forgot password? See DEPLOY.md for the reset instructions.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl maroon-text font-bold">📸 Upload New Photos</h1>
        <button
          onClick={() => { sessionStorage.removeItem('admin-pw'); setAuthed(false); setPassword(''); }}
          className="text-sm text-stone-500 underline"
        >
          Logout
        </button>
      </div>

      <div className="bg-white border-2 border-dashed border-gold-300 rounded-2xl p-8 text-center">
        <input
          id="fileinput"
          type="file"
          accept="image/jpeg,image/jpg,image/png,image/webp"
          multiple
          onChange={(e) => setFiles(Array.from(e.target.files || []))}
          className="hidden"
        />
        <label htmlFor="fileinput" className="cursor-pointer block">
          <div className="text-5xl mb-3">📁</div>
          <div className="text-lg font-semibold text-maroon-700">
            Choose photos or drop them here
          </div>
          <div className="text-xs text-stone-500 mt-1">JPG, PNG, WEBP — multiple photos supported</div>
        </label>

        {files.length > 0 && (
          <div className="mt-5 text-left">
            <div className="text-sm font-medium mb-2">{files.length} photo(s) selected:</div>
            <div className="flex flex-wrap gap-2 mb-4">
              {files.map((f, i) => (
                <div key={i} className="text-xs bg-gold-50 border border-gold-200 px-2 py-1 rounded">
                  {f.name} <span className="text-stone-500">({(f.size / 1024).toFixed(0)}KB)</span>
                </div>
              ))}
            </div>
            <button
              onClick={upload}
              disabled={busy}
              className="btn-primary w-full justify-center disabled:opacity-50"
            >
              {busy ? '⏳ Uploading...' : `🚀 Upload ${files.length} photo${files.length > 1 ? 's' : ''}`}
            </button>
          </div>
        )}
      </div>

      {results.length > 0 && (
        <div className="mt-8 bg-white border border-gold-200 rounded-2xl p-6">
          <h2 className="text-xl maroon-text font-semibold mb-4">Upload Results</h2>
          <ul className="space-y-2">
            {results.map((r, i) => (
              <li key={i} className={`text-sm flex items-start gap-2 ${r.ok ? 'text-green-700' : 'text-red-700'}`}>
                <span>{r.ok ? '✅' : '❌'}</span>
                <span className="flex-1">
                  {r.filename && <strong>{r.filename}</strong>}
                  {r.filename && ' — '}
                  {r.message}
                  {r.total && <span className="text-stone-500"> (Total photos: {r.total})</span>}
                </span>
              </li>
            ))}
          </ul>

          {results.some(r => r.ok) && (
            <div className="mt-4 bg-cream border border-gold-200 rounded-lg p-4 text-sm">
              <div className="font-semibold maroon-text mb-1">✅ Note</div>
              <p className="text-stone-700">
                New photos have been committed to GitHub. Vercel will auto-deploy in 1–2 minutes
                and they will appear on the Gallery page. Refresh after a moment to see them live.
              </p>
            </div>
          )}
        </div>
      )}

      <div className="mt-8 bg-cream border border-gold-200 rounded-xl p-5 text-sm text-stone-700">
        <div className="font-semibold maroon-text mb-2">📋 Tips</div>
        <ul className="space-y-1 list-disc list-inside">
          <li>Use good lighting and a clean background</li>
          <li>Keep each photo under 5 MB for faster loading</li>
          <li>Square (1:1) aspect ratio looks best in the grid</li>
          <li>Photos are committed to your GitHub repo and appear automatically on the Gallery page</li>
          <li>Upload no more than 5–10 photos at a time to avoid GitHub rate limits</li>
        </ul>
      </div>
    </div>
  );
}
