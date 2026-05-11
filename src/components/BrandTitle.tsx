interface Props {
  hindiName: string;
  englishName: string;
  /** "compact" for mobile cards, "large" for desktop hero */
  size?: 'compact' | 'large';
}

/**
 * Premium animated brand wordmark — shimmer + glow + floating sparkles + 3D depth.
 * All animations are pure CSS (no JS). See globals.css for keyframes.
 */
export default function BrandTitle({ hindiName, englishName, size = 'compact' }: Props) {
  const isLarge = size === 'large';

  return (
    <div className="brand-title relative">
      {/* Floating sparkles around the name */}
      <span className="sparkle sparkle-1" aria-hidden>✦</span>
      <span className="sparkle sparkle-2" aria-hidden>✧</span>
      <span className="sparkle sparkle-3" aria-hidden>✦</span>
      <span className="sparkle sparkle-4" aria-hidden>⋆</span>
      <span className="sparkle sparkle-5" aria-hidden>✧</span>

      {/* Soft glow behind the name */}
      <span className="brand-glow" aria-hidden />

      {/* Crown ornament */}
      <div className="brand-crown" aria-hidden>
        <svg viewBox="0 0 60 30" className="w-12 md:w-16">
          <defs>
            <linearGradient id="bt-crown" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"  stopColor="#fbe7a0"/>
              <stop offset="50%" stopColor="#d4a73a"/>
              <stop offset="100%" stopColor="#73591f"/>
            </linearGradient>
          </defs>
          <polygon points="6,22 12,8 18,22" fill="url(#bt-crown)" stroke="#52401a" strokeWidth="0.5"/>
          <polygon points="22,22 30,2 38,22" fill="url(#bt-crown)" stroke="#52401a" strokeWidth="0.5"/>
          <polygon points="42,22 48,8 54,22" fill="url(#bt-crown)" stroke="#52401a" strokeWidth="0.5"/>
          <rect x="4" y="20" width="52" height="4" fill="url(#bt-crown)" stroke="#52401a" strokeWidth="0.5"/>
          <circle cx="12" cy="8"  r="1.4" fill="#fff3c0"/>
          <circle cx="30" cy="2"  r="1.8" fill="#fff3c0"/>
          <circle cx="48" cy="8"  r="1.4" fill="#fff3c0"/>
        </svg>
      </div>

      {/* Hindi name — gold shimmer + glow + 3D depth */}
      <h1
        className={`brand-hindi hindi ${isLarge ? 'text-7xl' : ''} font-bold`}
        style={
          isLarge
            ? { lineHeight: 1.3, paddingBottom: '0.18em' }
            : { fontSize: 'clamp(2rem, 9vw, 3rem)', lineHeight: 1.4, paddingBottom: '0.18em' }
        }
      >
        {hindiName}
      </h1>

      {/* Animated growing underline */}
      <div className="brand-underline" aria-hidden>
        <span className="brand-underline-line" />
        <span className="brand-underline-jewel">✦</span>
        <span className="brand-underline-line" />
      </div>

      {/* English name — letter reveal + tracking */}
      <h2 className={`brand-english ${isLarge ? 'text-3xl' : 'text-base'} text-maroon-700`}>
        {englishName.split('').map((ch, i) => (
          <span
            key={i}
            className="brand-letter"
            style={{ animationDelay: `${0.05 * i}s` }}
          >
            {ch === ' ' ? ' ' : ch}
          </span>
        ))}
      </h2>
    </div>
  );
}
