import type { Product } from '@/lib/products';

const tones: Record<NonNullable<Product['tone']>, { stroke: string; fill: string; bg: string }> = {
  gold:    { stroke: '#73591f', fill: '#d4a73a', bg: 'linear-gradient(135deg,#fbf6ea,#ecd498)' },
  rose:    { stroke: '#7a1f3d', fill: '#e8a4b8', bg: 'linear-gradient(135deg,#fff1f4,#f8d7df)' },
  white:   { stroke: '#3f4a5e', fill: '#cfd8e8', bg: 'linear-gradient(135deg,#f7faff,#dde6f4)' },
  antique: { stroke: '#3a3a3a', fill: '#b8b8b8', bg: 'linear-gradient(135deg,#f3f0ea,#cdc8bd)' },
};

interface Props {
  icon: Product['icon'];
  tone: Product['tone'];
  size?: number;
}

/**
 * SVG silhouettes for each jewelry category — used as placeholders
 * until the shop owner uploads real photos via /admin.
 */
export default function JewelryIcon({ icon, tone, size = 160 }: Props) {
  const t = tones[tone];

  const renderIcon = () => {
    switch (icon) {
      case 'ring':
        return (
          <g>
            <circle cx="80" cy="95" r="42" fill="none" stroke={t.stroke} strokeWidth="6" />
            <path d="M62 60 L80 30 L98 60 Z" fill={t.fill} stroke={t.stroke} strokeWidth="2" />
            <circle cx="80" cy="42" r="6" fill="#fff" stroke={t.stroke} />
          </g>
        );
      case 'necklace':
        return (
          <g>
            <path d="M25 35 Q80 100 135 35" fill="none" stroke={t.stroke} strokeWidth="4" />
            <path d="M25 35 Q80 110 135 35" fill="none" stroke={t.fill} strokeWidth="2" />
            <circle cx="80" cy="98" r="10" fill={t.fill} stroke={t.stroke} strokeWidth="2" />
            <circle cx="80" cy="98" r="3" fill="#fff" />
            {[40, 60, 80, 100, 120].map(x => (
              <circle key={x} cx={x} cy={50 + Math.abs(80 - x) * 0.3} r="2" fill={t.fill} />
            ))}
          </g>
        );
      case 'tikka':
        return (
          <g>
            <path d="M80 25 L80 55" stroke={t.stroke} strokeWidth="3" />
            <circle cx="80" cy="65" r="14" fill={t.fill} stroke={t.stroke} strokeWidth="2" />
            <circle cx="80" cy="65" r="4" fill="#fff" />
            <path d="M55 95 Q80 85 105 95" fill="none" stroke={t.stroke} strokeWidth="2" />
            {[60, 70, 80, 90, 100].map(x => (
              <circle key={x} cx={x} cy={92 - Math.abs(80 - x) * 0.2} r="2" fill={t.fill} />
            ))}
          </g>
        );
      case 'jhumka':
        return (
          <g>
            <circle cx="50" cy="50" r="8" fill={t.fill} stroke={t.stroke} strokeWidth="2" />
            <path d="M40 60 L60 60 L65 95 L35 95 Z" fill={t.fill} stroke={t.stroke} strokeWidth="2" />
            {[40, 50, 60].map(x => <circle key={`a${x}`} cx={x} cy="100" r="2.5" fill={t.fill} />)}
            <circle cx="110" cy="50" r="8" fill={t.fill} stroke={t.stroke} strokeWidth="2" />
            <path d="M100 60 L120 60 L125 95 L95 95 Z" fill={t.fill} stroke={t.stroke} strokeWidth="2" />
            {[100, 110, 120].map(x => <circle key={`b${x}`} cx={x} cy="100" r="2.5" fill={t.fill} />)}
          </g>
        );
      case 'bangle':
        return (
          <g>
            <ellipse cx="80" cy="80" rx="45" ry="40" fill="none" stroke={t.stroke} strokeWidth="6" />
            <ellipse cx="80" cy="80" rx="45" ry="40" fill="none" stroke={t.fill} strokeWidth="2" strokeDasharray="3 4" />
            <ellipse cx="80" cy="80" rx="32" ry="28" fill="none" stroke={t.stroke} strokeWidth="3" />
          </g>
        );
      case 'payal':
        return (
          <g>
            <ellipse cx="80" cy="60" rx="55" ry="20" fill="none" stroke={t.stroke} strokeWidth="3" />
            {[35, 55, 75, 95, 115].map((x, i) => (
              <g key={x}>
                <line x1={x} y1="78" x2={x} y2="100" stroke={t.stroke} strokeWidth="1.5" />
                <circle cx={x} cy="105" r="4" fill={t.fill} stroke={t.stroke} />
              </g>
            ))}
          </g>
        );
      case 'nath':
        return (
          <g>
            <ellipse cx="80" cy="75" rx="35" ry="32" fill="none" stroke={t.stroke} strokeWidth="4" />
            <circle cx="50" cy="80" r="6" fill={t.fill} stroke={t.stroke} />
            {[55, 65, 75, 85, 95, 105].map(x => (
              <circle key={x} cx={x} cy={45 + Math.abs(80 - x) * 0.15} r="2" fill={t.fill} />
            ))}
          </g>
        );
      case 'pendant':
        return (
          <g>
            <line x1="30" y1="40" x2="130" y2="40" stroke={t.stroke} strokeWidth="2" />
            <path d="M65 40 L80 100 L95 40 Z" fill={t.fill} stroke={t.stroke} strokeWidth="2" />
            <circle cx="80" cy="55" r="4" fill="#fff" stroke={t.stroke} />
          </g>
        );
      case 'chain':
        return (
          <g>
            {[35, 60, 85, 110].map((y, i) => (
              <ellipse key={y} cx={80 + (i % 2 === 0 ? -5 : 5)} cy={y} rx="14" ry="10"
                       fill="none" stroke={t.stroke} strokeWidth="3" />
            ))}
          </g>
        );
      case 'kada':
        return (
          <g>
            <ellipse cx="80" cy="80" rx="50" ry="42" fill="none" stroke={t.stroke} strokeWidth="10" />
            <ellipse cx="80" cy="80" rx="50" ry="42" fill="none" stroke={t.fill} strokeWidth="3" />
            <ellipse cx="80" cy="80" rx="38" ry="32" fill="none" stroke={t.stroke} strokeWidth="2" />
          </g>
        );
      case 'set':
        return (
          <g>
            <path d="M25 30 Q80 95 135 30" fill="none" stroke={t.stroke} strokeWidth="4" />
            <circle cx="80" cy="80" r="10" fill={t.fill} stroke={t.stroke} strokeWidth="2" />
            <circle cx="40" cy="100" r="6" fill={t.fill} stroke={t.stroke} strokeWidth="1.5" />
            <circle cx="120" cy="100" r="6" fill={t.fill} stroke={t.stroke} strokeWidth="1.5" />
            <path d="M35 100 L45 115 L40 130 Z M115 100 L125 115 L120 130 Z" fill={t.fill} />
          </g>
        );
    }
  };

  return (
    <div
      className="relative w-full aspect-square flex items-center justify-center overflow-hidden"
      style={{ background: t.bg }}
    >
      <svg
        viewBox="0 0 160 140"
        width={size}
        height={size * 0.875}
        className="drop-shadow-md"
      >
        {/* sparkles */}
        <g opacity="0.5">
          <text x="20" y="22" fontSize="10" fill={t.stroke}>✦</text>
          <text x="135" y="125" fontSize="10" fill={t.stroke}>✦</text>
          <text x="142" y="22" fontSize="8" fill={t.stroke}>✧</text>
          <text x="15" y="128" fontSize="8" fill={t.stroke}>✧</text>
        </g>
        {renderIcon()}
      </svg>
    </div>
  );
}
