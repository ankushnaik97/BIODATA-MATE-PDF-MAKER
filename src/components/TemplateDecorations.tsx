"use client";

/** SVG background watermark decorations for each template category.
 *  All rendered at low opacity as beautiful background elements. */

interface DecorProps {
  color: string;  // theme accent color
}

/* ─── FLORAL: Roses, petals, vines ─── */
export function FloralDecor({ color }: DecorProps) {
  return (
    <>
      {/* Top-left flower cluster */}
      <svg className="absolute top-0 left-0 w-48 h-48" viewBox="0 0 200 200" fill="none" style={{ opacity: 0.06 }}>
        {/* Large rose */}
        <circle cx="60" cy="60" r="25" fill={color} />
        <circle cx="45" cy="45" r="18" fill={color} />
        <circle cx="75" cy="45" r="18" fill={color} />
        <circle cx="45" cy="75" r="18" fill={color} />
        <circle cx="75" cy="75" r="18" fill={color} />
        <circle cx="60" cy="60" r="10" fill={color} opacity="0.8" />
        {/* Petals */}
        <ellipse cx="30" cy="100" rx="12" ry="20" transform="rotate(-30 30 100)" fill={color} />
        <ellipse cx="100" cy="30" rx="12" ry="20" transform="rotate(30 100 30)" fill={color} />
        {/* Small buds */}
        <circle cx="20" cy="140" r="8" fill={color} />
        <circle cx="140" cy="20" r="8" fill={color} />
        {/* Vine curves */}
        <path d="M60 85 Q80 120 60 160 Q40 180 20 190" stroke={color} strokeWidth="2" fill="none" />
        <path d="M85 60 Q120 80 160 60 Q180 40 190 20" stroke={color} strokeWidth="2" fill="none" />
        {/* Leaves on vines */}
        <ellipse cx="70" cy="120" rx="8" ry="14" transform="rotate(-45 70 120)" fill={color} />
        <ellipse cx="120" cy="70" rx="8" ry="14" transform="rotate(45 120 70)" fill={color} />
      </svg>
      {/* Top-right flower cluster (mirrored) */}
      <svg className="absolute top-0 right-0 w-48 h-48" viewBox="0 0 200 200" fill="none" style={{ opacity: 0.06, transform: "scaleX(-1)" }}>
        <circle cx="60" cy="60" r="25" fill={color} />
        <circle cx="45" cy="45" r="18" fill={color} />
        <circle cx="75" cy="45" r="18" fill={color} />
        <circle cx="45" cy="75" r="18" fill={color} />
        <circle cx="75" cy="75" r="18" fill={color} />
        <circle cx="60" cy="60" r="10" fill={color} opacity="0.8" />
        <ellipse cx="30" cy="100" rx="12" ry="20" transform="rotate(-30 30 100)" fill={color} />
        <ellipse cx="100" cy="30" rx="12" ry="20" transform="rotate(30 100 30)" fill={color} />
        <circle cx="20" cy="140" r="8" fill={color} />
        <circle cx="140" cy="20" r="8" fill={color} />
        <path d="M60 85 Q80 120 60 160 Q40 180 20 190" stroke={color} strokeWidth="2" fill="none" />
        <path d="M85 60 Q120 80 160 60 Q180 40 190 20" stroke={color} strokeWidth="2" fill="none" />
        <ellipse cx="70" cy="120" rx="8" ry="14" transform="rotate(-45 70 120)" fill={color} />
        <ellipse cx="120" cy="70" rx="8" ry="14" transform="rotate(45 120 70)" fill={color} />
      </svg>
      {/* Bottom-left */}
      <svg className="absolute bottom-0 left-0 w-48 h-48" viewBox="0 0 200 200" fill="none" style={{ opacity: 0.06, transform: "scaleY(-1)" }}>
        <circle cx="60" cy="60" r="25" fill={color} />
        <circle cx="45" cy="45" r="18" fill={color} />
        <circle cx="75" cy="45" r="18" fill={color} />
        <circle cx="45" cy="75" r="18" fill={color} />
        <circle cx="75" cy="75" r="18" fill={color} />
        <circle cx="60" cy="60" r="10" fill={color} opacity="0.8" />
        <path d="M60 85 Q80 120 60 160 Q40 180 20 190" stroke={color} strokeWidth="2" fill="none" />
        <ellipse cx="70" cy="120" rx="8" ry="14" transform="rotate(-45 70 120)" fill={color} />
        <circle cx="20" cy="140" r="8" fill={color} />
      </svg>
      {/* Bottom-right */}
      <svg className="absolute bottom-0 right-0 w-48 h-48" viewBox="0 0 200 200" fill="none" style={{ opacity: 0.06, transform: "scale(-1,-1)" }}>
        <circle cx="60" cy="60" r="25" fill={color} />
        <circle cx="45" cy="45" r="18" fill={color} />
        <circle cx="75" cy="45" r="18" fill={color} />
        <circle cx="45" cy="75" r="18" fill={color} />
        <circle cx="75" cy="75" r="18" fill={color} />
        <circle cx="60" cy="60" r="10" fill={color} opacity="0.8" />
        <path d="M60 85 Q80 120 60 160 Q40 180 20 190" stroke={color} strokeWidth="2" fill="none" />
        <ellipse cx="70" cy="120" rx="8" ry="14" transform="rotate(-45 70 120)" fill={color} />
        <circle cx="20" cy="140" r="8" fill={color} />
      </svg>
      {/* Center watermark flower */}
      <svg className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 200 200" fill="none" style={{ opacity: 0.03 }}>
        {/* 8-petal flower */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
          <ellipse key={angle} cx="100" cy="100" rx="15" ry="45" fill={color}
            transform={`rotate(${angle} 100 100)`} />
        ))}
        <circle cx="100" cy="100" r="18" fill={color} />
      </svg>
      {/* Side vine left */}
      <svg className="absolute top-1/4 left-0 w-16 h-96" viewBox="0 0 60 400" fill="none" style={{ opacity: 0.05 }}>
        <path d="M30 0 Q10 50 30 100 Q50 150 30 200 Q10 250 30 300 Q50 350 30 400" stroke={color} strokeWidth="2" fill="none" />
        {[50, 150, 250, 350].map(y => (
          <ellipse key={y} cx="30" cy={y} rx="10" ry="16" transform={`rotate(${y % 100 === 50 ? -30 : 30} 30 ${y})`} fill={color} />
        ))}
        {[100, 200, 300].map(y => (
          <circle key={y} cx="30" cy={y} r="6" fill={color} />
        ))}
      </svg>
      {/* Side vine right */}
      <svg className="absolute top-1/4 right-0 w-16 h-96" viewBox="0 0 60 400" fill="none" style={{ opacity: 0.05, transform: "scaleX(-1)" }}>
        <path d="M30 0 Q10 50 30 100 Q50 150 30 200 Q10 250 30 300 Q50 350 30 400" stroke={color} strokeWidth="2" fill="none" />
        {[50, 150, 250, 350].map(y => (
          <ellipse key={y} cx="30" cy={y} rx="10" ry="16" transform={`rotate(${y % 100 === 50 ? -30 : 30} 30 ${y})`} fill={color} />
        ))}
        {[100, 200, 300].map(y => (
          <circle key={y} cx="30" cy={y} r="6" fill={color} />
        ))}
      </svg>
    </>
  );
}

/* ─── ROYAL: Ornamental frames, filigree, crowns ─── */
export function RoyalDecor({ color }: DecorProps) {
  return (
    <>
      {/* Top-left ornamental corner */}
      <svg className="absolute top-1 left-1 w-40 h-40" viewBox="0 0 160 160" fill="none" style={{ opacity: 0.08 }}>
        {/* Corner scroll */}
        <path d="M0 40 Q0 0 40 0" stroke={color} strokeWidth="3" fill="none" />
        <path d="M0 60 Q0 10 60 0" stroke={color} strokeWidth="2" fill="none" />
        <path d="M0 80 Q0 20 80 0" stroke={color} strokeWidth="1.5" fill="none" />
        {/* Scroll curls */}
        <path d="M40 0 Q55 10 45 25 Q35 40 50 45" stroke={color} strokeWidth="2" fill="none" />
        <path d="M0 40 Q10 55 25 45 Q40 35 45 50" stroke={color} strokeWidth="2" fill="none" />
        {/* Diamond ornament */}
        <path d="M70 10 L80 20 L70 30 L60 20 Z" fill={color} />
        <path d="M10 70 L20 80 L10 90 L0 80 Z" fill={color} />
        {/* Dots */}
        <circle cx="50" cy="50" r="3" fill={color} />
        <circle cx="90" cy="5" r="2" fill={color} />
        <circle cx="5" cy="90" r="2" fill={color} />
      </svg>
      {/* Top-right (mirrored) */}
      <svg className="absolute top-1 right-1 w-40 h-40" viewBox="0 0 160 160" fill="none" style={{ opacity: 0.08, transform: "scaleX(-1)" }}>
        <path d="M0 40 Q0 0 40 0" stroke={color} strokeWidth="3" fill="none" />
        <path d="M0 60 Q0 10 60 0" stroke={color} strokeWidth="2" fill="none" />
        <path d="M0 80 Q0 20 80 0" stroke={color} strokeWidth="1.5" fill="none" />
        <path d="M40 0 Q55 10 45 25 Q35 40 50 45" stroke={color} strokeWidth="2" fill="none" />
        <path d="M0 40 Q10 55 25 45 Q40 35 45 50" stroke={color} strokeWidth="2" fill="none" />
        <path d="M70 10 L80 20 L70 30 L60 20 Z" fill={color} />
        <path d="M10 70 L20 80 L10 90 L0 80 Z" fill={color} />
        <circle cx="50" cy="50" r="3" fill={color} />
      </svg>
      {/* Bottom-left */}
      <svg className="absolute bottom-1 left-1 w-40 h-40" viewBox="0 0 160 160" fill="none" style={{ opacity: 0.08, transform: "scaleY(-1)" }}>
        <path d="M0 40 Q0 0 40 0" stroke={color} strokeWidth="3" fill="none" />
        <path d="M0 60 Q0 10 60 0" stroke={color} strokeWidth="2" fill="none" />
        <path d="M0 80 Q0 20 80 0" stroke={color} strokeWidth="1.5" fill="none" />
        <path d="M40 0 Q55 10 45 25 Q35 40 50 45" stroke={color} strokeWidth="2" fill="none" />
        <path d="M0 40 Q10 55 25 45 Q40 35 45 50" stroke={color} strokeWidth="2" fill="none" />
        <path d="M70 10 L80 20 L70 30 L60 20 Z" fill={color} />
      </svg>
      {/* Bottom-right */}
      <svg className="absolute bottom-1 right-1 w-40 h-40" viewBox="0 0 160 160" fill="none" style={{ opacity: 0.08, transform: "scale(-1,-1)" }}>
        <path d="M0 40 Q0 0 40 0" stroke={color} strokeWidth="3" fill="none" />
        <path d="M0 60 Q0 10 60 0" stroke={color} strokeWidth="2" fill="none" />
        <path d="M0 80 Q0 20 80 0" stroke={color} strokeWidth="1.5" fill="none" />
        <path d="M40 0 Q55 10 45 25 Q35 40 50 45" stroke={color} strokeWidth="2" fill="none" />
        <path d="M0 40 Q10 55 25 45 Q40 35 45 50" stroke={color} strokeWidth="2" fill="none" />
        <path d="M70 10 L80 20 L70 30 L60 20 Z" fill={color} />
      </svg>
      {/* Center crown watermark */}
      <svg className="absolute top-1/2 left-1/2 w-56 h-56 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 200 200" fill="none" style={{ opacity: 0.03 }}>
        <path d="M40 140 L40 80 L70 110 L100 60 L130 110 L160 80 L160 140 Z" fill={color} />
        <circle cx="40" cy="75" r="8" fill={color} />
        <circle cx="100" cy="55" r="8" fill={color} />
        <circle cx="160" cy="75" r="8" fill={color} />
        <rect x="35" y="140" width="130" height="15" rx="3" fill={color} />
      </svg>
      {/* Side ornamental bars */}
      <svg className="absolute top-1/3 left-2 w-6 h-48" viewBox="0 0 20 200" fill="none" style={{ opacity: 0.06 }}>
        <rect x="8" y="0" width="4" height="200" fill={color} />
        {[0, 40, 80, 120, 160, 200].map(y => (
          <path key={y} d="M0 0 L10 -8 L20 0 L10 8 Z" fill={color} transform={`translate(0,${y})`} />
        ))}
      </svg>
      <svg className="absolute top-1/3 right-2 w-6 h-48" viewBox="0 0 20 200" fill="none" style={{ opacity: 0.06 }}>
        <rect x="8" y="0" width="4" height="200" fill={color} />
        {[0, 40, 80, 120, 160, 200].map(y => (
          <path key={y} d="M0 0 L10 -8 L20 0 L10 8 Z" fill={color} transform={`translate(0,${y})`} />
        ))}
      </svg>
    </>
  );
}

/* ─── ELEGANT: Filigree swirls, subtle curves ─── */
export function ElegantDecor({ color }: DecorProps) {
  return (
    <>
      {/* Top-left filigree */}
      <svg className="absolute top-2 left-2 w-36 h-36" viewBox="0 0 150 150" fill="none" style={{ opacity: 0.07 }}>
        <path d="M0 0 Q40 5 50 40 Q55 60 40 70 Q25 80 35 95 Q45 110 30 120" stroke={color} strokeWidth="2" fill="none" />
        <path d="M0 0 Q5 40 40 50 Q60 55 70 40 Q80 25 95 35 Q110 45 120 30" stroke={color} strokeWidth="2" fill="none" />
        <circle cx="50" cy="40" r="4" fill={color} />
        <circle cx="40" cy="50" r="4" fill={color} />
        <circle cx="35" cy="95" r="3" fill={color} />
        <circle cx="95" cy="35" r="3" fill={color} />
      </svg>
      {/* Top-right (mirrored) */}
      <svg className="absolute top-2 right-2 w-36 h-36" viewBox="0 0 150 150" fill="none" style={{ opacity: 0.07, transform: "scaleX(-1)" }}>
        <path d="M0 0 Q40 5 50 40 Q55 60 40 70 Q25 80 35 95 Q45 110 30 120" stroke={color} strokeWidth="2" fill="none" />
        <path d="M0 0 Q5 40 40 50 Q60 55 70 40 Q80 25 95 35 Q110 45 120 30" stroke={color} strokeWidth="2" fill="none" />
        <circle cx="50" cy="40" r="4" fill={color} />
        <circle cx="40" cy="50" r="4" fill={color} />
      </svg>
      {/* Bottom-left */}
      <svg className="absolute bottom-2 left-2 w-36 h-36" viewBox="0 0 150 150" fill="none" style={{ opacity: 0.07, transform: "scaleY(-1)" }}>
        <path d="M0 0 Q40 5 50 40 Q55 60 40 70 Q25 80 35 95" stroke={color} strokeWidth="2" fill="none" />
        <path d="M0 0 Q5 40 40 50 Q60 55 70 40 Q80 25 95 35" stroke={color} strokeWidth="2" fill="none" />
        <circle cx="50" cy="40" r="4" fill={color} />
        <circle cx="40" cy="50" r="4" fill={color} />
      </svg>
      {/* Bottom-right */}
      <svg className="absolute bottom-2 right-2 w-36 h-36" viewBox="0 0 150 150" fill="none" style={{ opacity: 0.07, transform: "scale(-1,-1)" }}>
        <path d="M0 0 Q40 5 50 40 Q55 60 40 70 Q25 80 35 95" stroke={color} strokeWidth="2" fill="none" />
        <path d="M0 0 Q5 40 40 50 Q60 55 70 40 Q80 25 95 35" stroke={color} strokeWidth="2" fill="none" />
        <circle cx="50" cy="40" r="4" fill={color} />
        <circle cx="40" cy="50" r="4" fill={color} />
      </svg>
      {/* Center swirl watermark */}
      <svg className="absolute top-1/2 left-1/2 w-52 h-52 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 200 200" fill="none" style={{ opacity: 0.025 }}>
        <path d="M100 100 Q130 60 160 100 Q130 140 100 100" stroke={color} strokeWidth="3" fill="none" />
        <path d="M100 100 Q60 70 100 40 Q140 70 100 100" stroke={color} strokeWidth="3" fill="none" />
        <path d="M100 100 Q70 130 100 160 Q130 130 100 100" stroke={color} strokeWidth="3" fill="none" />
        <path d="M100 100 Q140 130 160 100 Q140 70 100 100" stroke={color} strokeWidth="3" fill="none" />
        <circle cx="100" cy="100" r="8" fill={color} />
      </svg>
    </>
  );
}

/* ─── MODERN: Geometric shapes, clean lines ─── */
export function ModernDecor({ color }: DecorProps) {
  return (
    <>
      {/* Top-left geometric */}
      <svg className="absolute top-3 left-3 w-32 h-32" viewBox="0 0 120 120" fill="none" style={{ opacity: 0.05 }}>
        <rect x="0" y="0" width="40" height="40" stroke={color} strokeWidth="2" fill="none" />
        <rect x="10" y="10" width="20" height="20" fill={color} />
        <line x1="0" y1="50" x2="80" y2="50" stroke={color} strokeWidth="1" />
        <line x1="50" y1="0" x2="50" y2="80" stroke={color} strokeWidth="1" />
        <circle cx="50" cy="50" r="3" fill={color} />
      </svg>
      {/* Top-right */}
      <svg className="absolute top-3 right-3 w-32 h-32" viewBox="0 0 120 120" fill="none" style={{ opacity: 0.05, transform: "scaleX(-1)" }}>
        <rect x="0" y="0" width="40" height="40" stroke={color} strokeWidth="2" fill="none" />
        <rect x="10" y="10" width="20" height="20" fill={color} />
        <line x1="0" y1="50" x2="80" y2="50" stroke={color} strokeWidth="1" />
        <line x1="50" y1="0" x2="50" y2="80" stroke={color} strokeWidth="1" />
        <circle cx="50" cy="50" r="3" fill={color} />
      </svg>
      {/* Bottom-left */}
      <svg className="absolute bottom-3 left-3 w-32 h-32" viewBox="0 0 120 120" fill="none" style={{ opacity: 0.05, transform: "scaleY(-1)" }}>
        <rect x="0" y="0" width="40" height="40" stroke={color} strokeWidth="2" fill="none" />
        <rect x="10" y="10" width="20" height="20" fill={color} />
        <line x1="0" y1="50" x2="80" y2="50" stroke={color} strokeWidth="1" />
      </svg>
      {/* Bottom-right */}
      <svg className="absolute bottom-3 right-3 w-32 h-32" viewBox="0 0 120 120" fill="none" style={{ opacity: 0.05, transform: "scale(-1,-1)" }}>
        <rect x="0" y="0" width="40" height="40" stroke={color} strokeWidth="2" fill="none" />
        <rect x="10" y="10" width="20" height="20" fill={color} />
        <line x1="0" y1="50" x2="80" y2="50" stroke={color} strokeWidth="1" />
      </svg>
      {/* Center geometric watermark */}
      <svg className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 200 200" fill="none" style={{ opacity: 0.025 }}>
        <rect x="50" y="50" width="100" height="100" stroke={color} strokeWidth="2" fill="none" transform="rotate(45 100 100)" />
        <rect x="65" y="65" width="70" height="70" stroke={color} strokeWidth="1.5" fill="none" transform="rotate(45 100 100)" />
        <circle cx="100" cy="100" r="15" stroke={color} strokeWidth="1.5" fill="none" />
        <circle cx="100" cy="100" r="4" fill={color} />
      </svg>
      {/* Side accent lines */}
      <svg className="absolute top-1/4 left-3 w-3 h-72" viewBox="0 0 10 300" style={{ opacity: 0.04 }}>
        <line x1="5" y1="0" x2="5" y2="300" stroke={color} strokeWidth="2" />
        {[0, 75, 150, 225, 300].map(y => (
          <circle key={y} cx="5" cy={y} r="3" fill={color} />
        ))}
      </svg>
      <svg className="absolute top-1/4 right-3 w-3 h-72" viewBox="0 0 10 300" style={{ opacity: 0.04 }}>
        <line x1="5" y1="0" x2="5" y2="300" stroke={color} strokeWidth="2" />
        {[0, 75, 150, 225, 300].map(y => (
          <circle key={y} cx="5" cy={y} r="3" fill={color} />
        ))}
      </svg>
    </>
  );
}

/* ─── TRADITIONAL: Mandala, paisley, kolam ─── */
export function TraditionalDecor({ color }: DecorProps) {
  return (
    <>
      {/* Center mandala watermark */}
      <svg className="absolute top-1/2 left-1/2 w-72 h-72 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 300 300" fill="none" style={{ opacity: 0.035 }}>
        {/* Outer ring */}
        <circle cx="150" cy="150" r="130" stroke={color} strokeWidth="2" fill="none" />
        <circle cx="150" cy="150" r="120" stroke={color} strokeWidth="1" fill="none" />
        {/* Petal rings */}
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse key={i} cx="150" cy="150" rx="12" ry="50" fill={color} opacity="0.3"
            transform={`rotate(${i * 30} 150 150)`} />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse key={`inner-${i}`} cx="150" cy="150" rx="8" ry="30" fill={color} opacity="0.4"
            transform={`rotate(${i * 30 + 15} 150 150)`} />
        ))}
        {/* Inner circles */}
        <circle cx="150" cy="150" r="55" stroke={color} strokeWidth="1.5" fill="none" />
        <circle cx="150" cy="150" r="20" fill={color} opacity="0.3" />
        <circle cx="150" cy="150" r="8" fill={color} opacity="0.5" />
        {/* Dots on outer ring */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180;
          return <circle key={`dot-${i}`} cx={150 + 125 * Math.cos(angle)} cy={150 + 125 * Math.sin(angle)} r="3" fill={color} />;
        })}
      </svg>
      {/* Corner paisleys */}
      <svg className="absolute top-2 left-2 w-28 h-28" viewBox="0 0 100 100" fill="none" style={{ opacity: 0.07 }}>
        <path d="M20 80 Q5 50 20 25 Q35 5 55 15 Q70 25 60 50 Q50 70 30 75 Z" fill={color} />
        <path d="M25 70 Q15 50 25 30 Q35 15 48 22 Q58 30 50 48 Q42 62 32 65 Z" fill="none" stroke={color} strokeWidth="1" />
        <circle cx="35" cy="40" r="5" fill={color} opacity="0.6" />
      </svg>
      <svg className="absolute top-2 right-2 w-28 h-28" viewBox="0 0 100 100" fill="none" style={{ opacity: 0.07, transform: "scaleX(-1)" }}>
        <path d="M20 80 Q5 50 20 25 Q35 5 55 15 Q70 25 60 50 Q50 70 30 75 Z" fill={color} />
        <circle cx="35" cy="40" r="5" fill={color} opacity="0.6" />
      </svg>
      <svg className="absolute bottom-2 left-2 w-28 h-28" viewBox="0 0 100 100" fill="none" style={{ opacity: 0.07, transform: "scaleY(-1)" }}>
        <path d="M20 80 Q5 50 20 25 Q35 5 55 15 Q70 25 60 50 Q50 70 30 75 Z" fill={color} />
        <circle cx="35" cy="40" r="5" fill={color} opacity="0.6" />
      </svg>
      <svg className="absolute bottom-2 right-2 w-28 h-28" viewBox="0 0 100 100" fill="none" style={{ opacity: 0.07, transform: "scale(-1,-1)" }}>
        <path d="M20 80 Q5 50 20 25 Q35 5 55 15 Q70 25 60 50 Q50 70 30 75 Z" fill={color} />
        <circle cx="35" cy="40" r="5" fill={color} opacity="0.6" />
      </svg>
    </>
  );
}

/* ─── LUXURY: Damask scroll, fleur-de-lis ─── */
export function LuxuryDecor({ color }: DecorProps) {
  return (
    <>
      {/* Top-left scroll */}
      <svg className="absolute top-2 left-2 w-44 h-44" viewBox="0 0 180 180" fill="none" style={{ opacity: 0.07 }}>
        {/* Fleur-de-lis style */}
        <path d="M40 0 Q40 20 25 30 Q10 40 20 55 Q30 70 20 85" stroke={color} strokeWidth="2" fill="none" />
        <path d="M0 40 Q20 40 30 25 Q40 10 55 20 Q70 30 85 20" stroke={color} strokeWidth="2" fill="none" />
        <path d="M30 30 Q50 30 50 50 Q50 70 30 70 Q20 60 30 50 Q40 40 30 30 Z" fill={color} opacity="0.5" />
        {/* Scroll dots */}
        <circle cx="20" cy="85" r="4" fill={color} />
        <circle cx="85" cy="20" r="4" fill={color} />
        <circle cx="30" cy="30" r="3" fill={color} />
      </svg>
      <svg className="absolute top-2 right-2 w-44 h-44" viewBox="0 0 180 180" fill="none" style={{ opacity: 0.07, transform: "scaleX(-1)" }}>
        <path d="M40 0 Q40 20 25 30 Q10 40 20 55 Q30 70 20 85" stroke={color} strokeWidth="2" fill="none" />
        <path d="M0 40 Q20 40 30 25 Q40 10 55 20 Q70 30 85 20" stroke={color} strokeWidth="2" fill="none" />
        <path d="M30 30 Q50 30 50 50 Q50 70 30 70 Q20 60 30 50 Q40 40 30 30 Z" fill={color} opacity="0.5" />
        <circle cx="20" cy="85" r="4" fill={color} />
        <circle cx="85" cy="20" r="4" fill={color} />
      </svg>
      <svg className="absolute bottom-2 left-2 w-44 h-44" viewBox="0 0 180 180" fill="none" style={{ opacity: 0.07, transform: "scaleY(-1)" }}>
        <path d="M40 0 Q40 20 25 30 Q10 40 20 55 Q30 70 20 85" stroke={color} strokeWidth="2" fill="none" />
        <path d="M0 40 Q20 40 30 25 Q40 10 55 20 Q70 30 85 20" stroke={color} strokeWidth="2" fill="none" />
        <path d="M30 30 Q50 30 50 50 Q50 70 30 70 Q20 60 30 50 Q40 40 30 30 Z" fill={color} opacity="0.5" />
        <circle cx="20" cy="85" r="4" fill={color} />
      </svg>
      <svg className="absolute bottom-2 right-2 w-44 h-44" viewBox="0 0 180 180" fill="none" style={{ opacity: 0.07, transform: "scale(-1,-1)" }}>
        <path d="M40 0 Q40 20 25 30 Q10 40 20 55 Q30 70 20 85" stroke={color} strokeWidth="2" fill="none" />
        <path d="M0 40 Q20 40 30 25 Q40 10 55 20 Q70 30 85 20" stroke={color} strokeWidth="2" fill="none" />
        <path d="M30 30 Q50 30 50 50 Q50 70 30 70 Q20 60 30 50 Q40 40 30 30 Z" fill={color} opacity="0.5" />
      </svg>
      {/* Center fleur-de-lis watermark */}
      <svg className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 200 200" fill="none" style={{ opacity: 0.03 }}>
        {/* Fleur-de-lis */}
        <path d="M100 30 Q110 60 100 80 Q90 60 100 30" fill={color} />
        <path d="M100 80 Q120 70 140 50 Q135 75 115 90 Q100 100 100 80" fill={color} />
        <path d="M100 80 Q80 70 60 50 Q65 75 85 90 Q100 100 100 80" fill={color} />
        <path d="M100 100 Q105 130 100 170 Q95 130 100 100" fill={color} />
        <path d="M85 110 Q75 120 70 140 L100 130 Z" fill={color} opacity="0.6" />
        <path d="M115 110 Q125 120 130 140 L100 130 Z" fill={color} opacity="0.6" />
        <circle cx="100" cy="95" r="6" fill={color} />
      </svg>
      {/* Side damask pattern */}
      <svg className="absolute top-1/4 left-1 w-8 h-80" viewBox="0 0 30 350" fill="none" style={{ opacity: 0.05 }}>
        {[0, 70, 140, 210, 280].map(y => (
          <g key={y}>
            <path d={`M15 ${y} Q25 ${y + 15} 15 ${y + 35} Q5 ${y + 15} 15 ${y}`} fill={color} />
            <circle cx="15" cy={y + 17} r="2" fill={color} opacity="0.8" />
          </g>
        ))}
      </svg>
      <svg className="absolute top-1/4 right-1 w-8 h-80" viewBox="0 0 30 350" fill="none" style={{ opacity: 0.05 }}>
        {[0, 70, 140, 210, 280].map(y => (
          <g key={y}>
            <path d={`M15 ${y} Q25 ${y + 15} 15 ${y + 35} Q5 ${y + 15} 15 ${y}`} fill={color} />
            <circle cx="15" cy={y + 17} r="2" fill={color} opacity="0.8" />
          </g>
        ))}
      </svg>
    </>
  );
}

/** Returns the correct decoration component based on template category */
export function getDecoration(category: string, color: string) {
  switch (category) {
    case "Floral": return <FloralDecor color={color} />;
    case "Royal": return <RoyalDecor color={color} />;
    case "Elegant": return <ElegantDecor color={color} />;
    case "Modern": return <ModernDecor color={color} />;
    case "Traditional": return <TraditionalDecor color={color} />;
    case "Luxury": return <LuxuryDecor color={color} />;
    default: return <ElegantDecor color={color} />;
  }
}
