'use client';

import { useState, useEffect } from 'react';

interface UploadResult {
  ok: boolean;
  message: string;
  filename?: string;
  total?: number;
}

interface PhotoEntry {
  name: string;
  sha: string;
  size: number;
}

export default function UploadClient() {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState('');
  const [tab, setTab] = useState<'upload' | 'manage'>('upload');

  // Upload state
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [results, setResults] = useState<UploadResult[]>([]);

  // Manage state
  const [photos, setPhotos] = useState<PhotoEntry[]>([]);
  const [loadingList, setLoadingList] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [manageMsg, setManageMsg] = useState<string>('');

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
        setAuthError('Wrong password');
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

  async function loadPhotos() {
    setLoadingList(true);
    setManageMsg('');
    try {
      const res = await fetch('/api/admin/list', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: sessionStorage.getItem('admin-pw') }),
      });
      const j = await res.json();
      if (res.ok) {
        setPhotos(j.photos || []);
      } else {
        setManageMsg(j.message || 'Failed to load photos');
      }
    } catch (e: any) {
      setManageMsg(e?.message || 'Network error');
    }
    setLoadingList(false);
  }

  useEffect(() => {
    if (authed && tab === 'manage' && photos.length === 0) loadPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authed, tab]);

  async function deletePhoto(p: PhotoEntry) {
    if (!confirm(`Delete ${p.name}? This cannot be undone.`)) return;
    setDeleting(p.name);
    setManageMsg('');
    try {
      const res = await fetch('/api/admin/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          password: sessionStorage.getItem('admin-pw'),
          filename: p.name,
          sha: p.sha,
        }),
      });
      const j = await res.json();
      if (res.ok) {
        setPhotos(prev => prev.filter(x => x.name !== p.name));
        setManageMsg(`✅ ${p.name} deleted. Vercel will redeploy in ~1 minute.`);
      } else {
        setManageMsg(`❌ ${j.message}`);
      }
    } catch (e: any) {
      setManageMsg(`❌ ${e?.message || 'Network error'}`);
    }
    setDeleting(null);
  }

  if (!authed) {
    return (
      <div className="container mx-auto px-4 py-20 max-w-md">
        <div className="bg-white border border-gold-200 rounded-2xl p-8 shadow-gold">
          <div className="text-center mb-6">
            <div className="text-4xl mb-2">🔒</div>
            <h1 className="text-2xl maroon-text font-bold">Owner Access Only</h1>
            <p className="text-sm text-stone-600 mt-1">Admin Panel — Upload &amp; Manage Photos</p>
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
            <div className="mt-3 text-red-700 text-sm">{authError}</div>
          )}

          <button
            onClick={login}
            disabled={!password}
            className="btn-primary w-full justify-center mt-5 disabled:opacity-50"
          >
            Login
          </button>

          <div className="mt-6 text-xs text-stone-500 text-center">
            Forgot password? See DEPLOY.md for reset steps.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl maroon-text font-bold">🔧 Admin Panel</h1>
        <button
          onClick={() => { sessionStorage.removeItem('admin-pw'); setAuthed(false); setPassword(''); }}
          className="text-sm text-stone-500 underline"
        >
          Logout
        </button>
      </div>

      {/* Tab switcher */}
      <div className="flex gap-2 mb-6 bg-cream border border-gold-200 rounded-xl p-1">
        <button
          onClick={() => setTab('upload')}
          className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors ${
            tab === 'upload' ? 'bg-gold-gradient text-white shadow-gold' : 'text-stone-600 hover:bg-gold-50'
          }`}
        >
          📤 Upload Photos
        </button>
        <button
          onClick={() => setTab('manage')}
          className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors ${
            tab === 'manage' ? 'bg-gold-gradient text-white shadow-gold' : 'text-stone-600 hover:bg-gold-50'
          }`}
        >
          🗂️ Manage / Delete
        </button>
      </div>

      {/* ============== UPLOAD TAB ============== */}
      {tab === 'upload' && (
        <>
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
                Choose photos or tap here
              </div>
              <div className="text-xs text-stone-500 mt-1">JPG, PNG, WEBP — multiple supported</div>
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
            <div className="mt-6 bg-white border border-gold-200 rounded-2xl p-5">
              <h2 className="text-lg maroon-text font-semibold mb-3">Upload Results</h2>
              <ul className="space-y-2">
                {results.map((r, i) => (
                  <li key={i} className={`text-sm flex items-start gap-2 ${r.ok ? 'text-green-700' : 'text-red-700'}`}>
                    <span>{r.ok ? '✅' : '❌'}</span>
                    <span className="flex-1">
                      {r.filename && <strong>{r.filename}</strong>}
                      {r.filename && ' — '}
                      {r.message}
                      {r.total && <span className="text-stone-500"> (Total: {r.total})</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6 bg-cream border border-gold-200 rounded-xl p-5 text-sm text-stone-700">
            <div className="font-semibold maroon-text mb-2">📋 Tips</div>
            <ul className="space-y-1 list-disc list-inside">
              <li>Good lighting + clean background = professional look</li>
              <li>Keep each photo under 5 MB</li>
              <li>Square (1:1) ratio looks best in grid</li>
              <li>Photos auto-appear on Gallery after Vercel rebuild (1–2 min)</li>
              <li>Max 5–10 photos at once (GitHub rate limit)</li>
            </ul>
          </div>
        </>
      )}

      {/* ============== MANAGE / DELETE TAB ============== */}
      {tab === 'manage' && (
        <>
          <div className="bg-white border border-gold-200 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg maroon-text font-semibold">
                Photo Library {photos.length > 0 && <span className="text-sm text-stone-500">({photos.length} photos)</span>}
              </h2>
              <button
                onClick={loadPhotos}
                disabled={loadingList}
                className="btn-outline text-xs !py-1 !px-3"
              >
                {loadingList ? '⏳' : '🔄'} Refresh
              </button>
            </div>

            {manageMsg && (
              <div className={`mb-4 p-3 rounded-lg text-sm ${
                manageMsg.startsWith('✅') ? 'bg-green-50 text-green-800 border border-green-200'
                                            : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {manageMsg}
              </div>
            )}

            {loadingList && photos.length === 0 && (
              <div className="text-center py-12 text-stone-500">⏳ Loading photos…</div>
            )}

            {!loadingList && photos.length === 0 && (
              <div className="text-center py-12 text-stone-500">
                No photos yet. Use the Upload tab to add some.
              </div>
            )}

            {photos.length > 0 && (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {photos.map(p => (
                  <div key={p.name} className="group relative aspect-square overflow-hidden rounded-lg border border-gold-200 bg-gold-50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/products/${p.name}`}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => deletePhoto(p)}
                      disabled={deleting === p.name}
                      title={`Delete ${p.name}`}
                      className="absolute inset-0 bg-red-700/0 hover:bg-red-700/70 active:bg-red-700/80 transition-colors flex items-center justify-center text-white text-2xl disabled:bg-stone-700/70"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-red-700 rounded-full w-10 h-10 flex items-center justify-center text-base font-bold">
                        {deleting === p.name ? '⏳' : '🗑️'}
                      </span>
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[10px] px-1.5 py-0.5">
                      {p.name}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 bg-cream border border-gold-200 rounded-xl p-5 text-sm text-stone-700">
            <div className="font-semibold maroon-text mb-2">⚠️ About Delete</div>
            <ul className="space-y-1 list-disc list-inside">
              <li><strong>Hover</strong> any photo to see the delete button</li>
              <li>Confirmation popup will ask before deleting</li>
              <li>Deleted photos are removed from GitHub commit history of the next build</li>
              <li>Vercel will rebuild in 1–2 minutes — photo will disappear from public site</li>
              <li>Only photos in <code>/public/products/</code> can be managed here</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
