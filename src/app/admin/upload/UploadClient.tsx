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
            <h1 className="hindi text-2xl maroon-text font-bold">केवल Owner के लिए</h1>
            <p className="text-sm text-stone-600 mt-1">Admin Upload Panel</p>
          </div>

          <label className="block text-sm font-medium hindi mb-2">पासवर्ड डालें</label>
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
            लॉगिन करें
          </button>

          <div className="mt-6 text-xs text-stone-500 hindi text-center">
            अगर पासवर्ड याद नहीं — DEPLOY.md में Reset का तरीका दिया है।
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="hindi text-3xl maroon-text font-bold">📸 नई फोटो अपलोड करें</h1>
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
          <div className="hindi text-lg font-semibold text-maroon-700">
            फोटो चुनें या यहाँ खींचकर डालें
          </div>
          <div className="text-xs text-stone-500 mt-1">JPG, PNG, WEBP — एक साथ कई फोटो भी ले सकते हैं</div>
        </label>

        {files.length > 0 && (
          <div className="mt-5 text-left">
            <div className="text-sm font-medium hindi mb-2">{files.length} फोटो चुनी गई:</div>
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
              {busy ? '⏳ अपलोड हो रहा है...' : `🚀 ${files.length} फोटो अपलोड करें`}
            </button>
          </div>
        )}
      </div>

      {results.length > 0 && (
        <div className="mt-8 bg-white border border-gold-200 rounded-2xl p-6">
          <h2 className="hindi text-xl maroon-text font-semibold mb-4">अपलोड परिणाम</h2>
          <ul className="space-y-2">
            {results.map((r, i) => (
              <li key={i} className={`text-sm flex items-start gap-2 ${r.ok ? 'text-green-700' : 'text-red-700'}`}>
                <span>{r.ok ? '✅' : '❌'}</span>
                <span className="flex-1">
                  {r.filename && <strong>{r.filename}</strong>}
                  {r.filename && ' — '}
                  {r.message}
                  {r.total && <span className="text-stone-500"> (कुल फोटो: {r.total})</span>}
                </span>
              </li>
            ))}
          </ul>

          {results.some(r => r.ok) && (
            <div className="mt-4 bg-cream border border-gold-200 rounded-lg p-4 text-sm">
              <div className="hindi font-semibold maroon-text mb-1">✅ ध्यान दें</div>
              <p className="hindi text-stone-700">
                नई फोटो GitHub par commit ho gayi hain. Vercel 1-2 minute me automatic deploy kar dega aur fir aapki website par live dikhne lagengi —
                Gallery page par jaake refresh karke check karein.
              </p>
            </div>
          )}
        </div>
      )}

      <div className="mt-8 bg-cream border border-gold-200 rounded-xl p-5 text-sm text-stone-700">
        <div className="hindi font-semibold maroon-text mb-2">📋 ध्यान देने योग्य बातें</div>
        <ul className="space-y-1 hindi list-disc list-inside">
          <li>Photo अच्छी रोशनी में और साफ background में होनी चाहिए</li>
          <li>प्रति फोटो 5MB से कम size रखें — fast loading के लिए</li>
          <li>Square aspect ratio (1:1) सबसे अच्छा दिखता है</li>
          <li>Photos आपके GitHub repo में commit होंगी और Gallery page par auto-दिखेंगी</li>
          <li>एक बार में 5-10 फोटो से ज़्यादा upload मत करें — GitHub rate limit है</li>
        </ul>
      </div>
    </div>
  );
}
