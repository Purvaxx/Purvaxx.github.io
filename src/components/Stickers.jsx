// Hand-drawn style sticker characters (SVG). White outline = "sticker" edge.
const stroke = { stroke: '#111', strokeWidth: 5, strokeLinejoin: 'round', strokeLinecap: 'round' };

function Eyes({ x1, x2, y, r = 13, look = 3 }) {
  return (
    <g>
      <circle cx={x1} cy={y} r={r} fill="#fff" {...stroke} />
      <circle cx={x2} cy={y} r={r} fill="#fff" {...stroke} />
      <circle className="pupil" cx={x1 + look} cy={y + look} r={r * 0.45} fill="#111" />
      <circle className="pupil" cx={x2 + look} cy={y + look} r={r * 0.45} fill="#111" />
    </g>
  );
}

export function BlobSticker({ size = 140, color = '#ffc53d', ...rest }) {
  return (
    <svg viewBox="0 0 160 160" width={size} height={size} {...rest} aria-hidden>
      <g filter="url(#none)">
        <path
          d="M22 70 q0-30 20-30 q8-22 26-6 q12-18 26 0 q20-14 26 8 q22 4 18 30 v52 q0 22-22 22 h-72 q-22 0-22-22z"
          fill={color}
          stroke="#fff"
          strokeWidth="14"
          strokeLinejoin="round"
          paintOrder="stroke"
        />
        <path
          d="M22 70 q0-30 20-30 q8-22 26-6 q12-18 26 0 q20-14 26 8 q22 4 18 30 v52 q0 22-22 22 h-72 q-22 0-22-22z"
          fill="none"
          {...stroke}
        />
        <Eyes x1={62} x2={100} y={88} r={15} />
        <path d="M70 118 q12 10 24 0" fill="none" {...stroke} />
      </g>
    </svg>
  );
}

export function GhostSticker({ size = 140, color = '#c58cff', ...rest }) {
  const d = 'M30 140 v-70 q0-50 50-50 q50 0 50 50 v70 l-16-12 l-17 12 l-17-12 l-17 12 l-17-12z';
  return (
    <svg viewBox="0 0 160 160" width={size} height={size} {...rest} aria-hidden>
      <path d={d} fill={color} stroke="#fff" strokeWidth="14" strokeLinejoin="round" paintOrder="stroke" />
      <path d={d} fill="none" {...stroke} />
      <g transform="translate(0 -8)">
        <rect x="46" y="62" width="30" height="16" rx="6" fill="#111" />
        <rect x="84" y="62" width="30" height="16" rx="6" fill="#111" />
        <path d="M76 68 h8" {...stroke} />
      </g>
      <path d="M66 96 q14 12 28 0" fill="none" {...stroke} />
    </svg>
  );
}

export function StarSticker({ size = 120, color = '#ff6a1a', ...rest }) {
  const d = 'M80 12 l18 42 l46 4 l-35 30 l11 45 l-40-24 l-40 24 l11-45 l-35-30 l46-4z';
  return (
    <svg viewBox="0 0 160 160" width={size} height={size} {...rest} aria-hidden>
      <path d={d} fill={color} stroke="#fff" strokeWidth="14" strokeLinejoin="round" paintOrder="stroke" />
      <path d={d} fill="none" {...stroke} />
      <Eyes x1={68} x2={92} y={80} r={9} look={2} />
      <path d="M72 100 q8 7 16 0" fill="none" {...stroke} strokeWidth="4" />
    </svg>
  );
}

export function TermSticker({ size = 140, color = '#5ec8ff', ...rest }) {
  return (
    <svg viewBox="0 0 160 160" width={size} height={size} {...rest} aria-hidden>
      <rect x="18" y="30" width="124" height="96" rx="20" fill={color} stroke="#fff" strokeWidth="14" paintOrder="stroke" />
      <rect x="18" y="30" width="124" height="96" rx="20" fill="none" {...stroke} />
      <path d="M18 52 h124" {...stroke} />
      <circle cx="34" cy="41" r="4" fill="#111" />
      <circle cx="47" cy="41" r="4" fill="#111" />
      <path d="M44 76 l14 12 l-14 12" fill="none" {...stroke} />
      <path d="M70 102 h26" {...stroke} />
      <path d="M50 126 v14 M110 126 v14" {...stroke} />
    </svg>
  );
}

export function Sparkle({ size = 28, color = '#fff', ...rest }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} {...rest} aria-hidden>
      <path d="M20 2 q3 15 18 18 q-15 3-18 18 q-3-15-18-18 q15-3 18-18z" fill={color} />
    </svg>
  );
}
