"use client";

/**
 * Full-page SVG background watermark decorations for each template category.
 * Covers the entire 794x1123 biodata page with scattered elements at low opacity.
 */

interface DecorProps {
  color: string;
}

/* ─── Helper: 5-petal flower at position ─── */
function Flower({ cx, cy, r, color, rot = 0 }: { cx: number; cy: number; r: number; color: string; rot?: number }) {
  return (
    <g transform={`rotate(${rot} ${cx} ${cy})`}>
      {[0, 72, 144, 216, 288].map(a => (
        <ellipse key={a} cx={cx} cy={cy} rx={r * 0.4} ry={r} fill={color}
          transform={`rotate(${a} ${cx} ${cy})`} />
      ))}
      <circle cx={cx} cy={cy} r={r * 0.35} fill={color} opacity="0.7" />
    </g>
  );
}

/* ─── Helper: Rose (layered petals) ─── */
function Rose({ cx, cy, r, color }: { cx: number; cy: number; r: number; color: string }) {
  return (
    <g>
      {[0, 60, 120, 180, 240, 300].map(a => (
        <ellipse key={a} cx={cx} cy={cy} rx={r * 0.5} ry={r} fill={color}
          transform={`rotate(${a} ${cx} ${cy})`} />
      ))}
      {[30, 90, 150, 210, 270, 330].map(a => (
        <ellipse key={a} cx={cx} cy={cy} rx={r * 0.35} ry={r * 0.7} fill={color} opacity="0.6"
          transform={`rotate(${a} ${cx} ${cy})`} />
      ))}
      <circle cx={cx} cy={cy} r={r * 0.25} fill={color} opacity="0.8" />
    </g>
  );
}

/* ─── Helper: Leaf ─── */
function Leaf({ cx, cy, size, rot, color }: { cx: number; cy: number; size: number; rot: number; color: string }) {
  return (
    <ellipse cx={cx} cy={cy} rx={size * 0.35} ry={size} fill={color}
      transform={`rotate(${rot} ${cx} ${cy})`} />
  );
}

/* ─── FLORAL: Flowers scattered across entire page ─── */
export function FloralDecor({ color }: DecorProps) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 794 1123" fill="none" preserveAspectRatio="none" style={{ opacity: 0.07 }}>
      {/* ── Top-left cluster ── */}
      <Rose cx={60} cy={60} r={35} color={color} />
      <Flower cx={120} cy={30} r={18} color={color} rot={15} />
      <Flower cx={30} cy={120} r={16} color={color} rot={-10} />
      <Leaf cx={90} cy={95} size={22} rot={-40} color={color} />
      <Leaf cx={140} cy={70} size={18} rot={30} color={color} />
      <path d="M60 95 Q90 140 70 200 Q55 250 40 280" stroke={color} strokeWidth="2" fill="none" />
      <path d="M120 48 Q160 80 180 130" stroke={color} strokeWidth="1.5" fill="none" />

      {/* ── Top-right cluster ── */}
      <Rose cx={734} cy={60} r={35} color={color} />
      <Flower cx={674} cy={30} r={18} color={color} rot={-15} />
      <Flower cx={764} cy={120} r={16} color={color} rot={10} />
      <Leaf cx={704} cy={95} size={22} rot={40} color={color} />
      <Leaf cx={654} cy={70} size={18} rot={-30} color={color} />
      <path d="M734 95 Q704 140 724 200 Q739 250 754 280" stroke={color} strokeWidth="2" fill="none" />
      <path d="M674 48 Q634 80 614 130" stroke={color} strokeWidth="1.5" fill="none" />

      {/* ── Bottom-left cluster ── */}
      <Rose cx={60} cy={1063} r={35} color={color} />
      <Flower cx={120} cy={1093} r={18} color={color} rot={-15} />
      <Flower cx={30} cy={1003} r={16} color={color} rot={10} />
      <Leaf cx={90} cy={1028} size={22} rot={40} color={color} />
      <path d="M60 1028 Q90 983 70 923 Q55 873 40 843" stroke={color} strokeWidth="2" fill="none" />

      {/* ── Bottom-right cluster ── */}
      <Rose cx={734} cy={1063} r={35} color={color} />
      <Flower cx={674} cy={1093} r={18} color={color} rot={15} />
      <Flower cx={764} cy={1003} r={16} color={color} rot={-10} />
      <Leaf cx={704} cy={1028} size={22} rot={-40} color={color} />
      <path d="M734 1028 Q704 983 724 923 Q739 873 754 843" stroke={color} strokeWidth="2" fill="none" />

      {/* ── Left side vine with flowers ── */}
      <path d="M20 280 Q40 350 25 420 Q10 490 30 560 Q50 630 20 700 Q0 770 25 840" stroke={color} strokeWidth="2" fill="none" />
      <Flower cx={25} cy={350} r={14} color={color} rot={20} />
      <Leaf cx={40} cy={390} size={16} rot={-35} color={color} />
      <Flower cx={15} cy={490} r={12} color={color} rot={-15} />
      <Leaf cx={35} cy={530} size={14} rot={40} color={color} />
      <Flower cx={30} cy={630} r={14} color={color} rot={10} />
      <Leaf cx={15} cy={670} size={16} rot={-40} color={color} />
      <Flower cx={20} cy={770} r={12} color={color} rot={-20} />
      <Leaf cx={35} cy={810} size={14} rot={35} color={color} />

      {/* ── Right side vine with flowers ── */}
      <path d="M774 280 Q754 350 769 420 Q784 490 764 560 Q744 630 774 700 Q794 770 769 840" stroke={color} strokeWidth="2" fill="none" />
      <Flower cx={769} cy={350} r={14} color={color} rot={-20} />
      <Leaf cx={754} cy={390} size={16} rot={35} color={color} />
      <Flower cx={779} cy={490} r={12} color={color} rot={15} />
      <Leaf cx={759} cy={530} size={14} rot={-40} color={color} />
      <Flower cx={764} cy={630} r={14} color={color} rot={-10} />
      <Leaf cx={779} cy={670} size={16} rot={40} color={color} />
      <Flower cx={774} cy={770} r={12} color={color} rot={20} />
      <Leaf cx={759} cy={810} size={14} rot={-35} color={color} />

      {/* ── Scattered flowers across the page ── */}
      <Flower cx={200} cy={180} r={10} color={color} rot={25} />
      <Flower cx={600} cy={200} r={11} color={color} rot={-20} />
      <Flower cx={150} cy={400} r={9} color={color} rot={35} />
      <Flower cx={650} cy={380} r={10} color={color} rot={-30} />
      <Flower cx={200} cy={600} r={8} color={color} rot={15} />
      <Flower cx={620} cy={580} r={9} color={color} rot={-25} />
      <Flower cx={160} cy={780} r={10} color={color} rot={-10} />
      <Flower cx={640} cy={800} r={11} color={color} rot={20} />
      <Flower cx={180} cy={950} r={9} color={color} rot={30} />
      <Flower cx={610} cy={940} r={10} color={color} rot={-15} />

      {/* ── Scattered leaves ── */}
      <Leaf cx={250} cy={100} size={12} rot={-50} color={color} />
      <Leaf cx={550} cy={120} size={11} rot={45} color={color} />
      <Leaf cx={300} cy={300} size={10} rot={-35} color={color} />
      <Leaf cx={500} cy={320} size={12} rot={50} color={color} />
      <Leaf cx={280} cy={500} size={11} rot={40} color={color} />
      <Leaf cx={520} cy={510} size={10} rot={-45} color={color} />
      <Leaf cx={260} cy={700} size={12} rot={-30} color={color} />
      <Leaf cx={540} cy={710} size={11} rot={35} color={color} />
      <Leaf cx={300} cy={900} size={10} rot={45} color={color} />
      <Leaf cx={500} cy={880} size={12} rot={-40} color={color} />

      {/* ── Small buds / dots ── */}
      <circle cx={350} cy={150} r={4} fill={color} />
      <circle cx={450} cy={170} r={3} fill={color} />
      <circle cx={320} cy={450} r={4} fill={color} />
      <circle cx={480} cy={430} r={3} fill={color} />
      <circle cx={370} cy={650} r={4} fill={color} />
      <circle cx={430} cy={670} r={3} fill={color} />
      <circle cx={340} cy={850} r={4} fill={color} />
      <circle cx={460} cy={830} r={3} fill={color} />
      <circle cx={397} cy={1000} r={4} fill={color} />

      {/* ── Center large watermark flower ── */}
      <g opacity="0.4">
        <Rose cx={397} cy={561} r={60} color={color} />
      </g>
    </svg>
  );
}

/* ─── ROYAL: Ornamental scrolls, crowns, filigree across whole page ─── */
export function RoyalDecor({ color }: DecorProps) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 794 1123" fill="none" preserveAspectRatio="none" style={{ opacity: 0.07 }}>
      {/* ── Corner scrollwork (all 4 corners) ── */}
      {/* Top-left */}
      <path d="M0 60 Q0 0 60 0" stroke={color} strokeWidth="4" fill="none" />
      <path d="M0 90 Q0 10 90 0" stroke={color} strokeWidth="2.5" fill="none" />
      <path d="M0 120 Q0 20 120 0" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M60 0 Q80 15 65 35 Q50 55 70 65" stroke={color} strokeWidth="2.5" fill="none" />
      <path d="M0 60 Q15 80 35 65 Q55 50 65 70" stroke={color} strokeWidth="2.5" fill="none" />
      {/* Top-right */}
      <path d="M794 60 Q794 0 734 0" stroke={color} strokeWidth="4" fill="none" />
      <path d="M794 90 Q794 10 704 0" stroke={color} strokeWidth="2.5" fill="none" />
      <path d="M794 120 Q794 20 674 0" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M734 0 Q714 15 729 35 Q744 55 724 65" stroke={color} strokeWidth="2.5" fill="none" />
      <path d="M794 60 Q779 80 759 65 Q739 50 729 70" stroke={color} strokeWidth="2.5" fill="none" />
      {/* Bottom-left */}
      <path d="M0 1063 Q0 1123 60 1123" stroke={color} strokeWidth="4" fill="none" />
      <path d="M0 1033 Q0 1113 90 1123" stroke={color} strokeWidth="2.5" fill="none" />
      <path d="M0 1003 Q0 1103 120 1123" stroke={color} strokeWidth="1.5" fill="none" />
      {/* Bottom-right */}
      <path d="M794 1063 Q794 1123 734 1123" stroke={color} strokeWidth="4" fill="none" />
      <path d="M794 1033 Q794 1113 704 1123" stroke={color} strokeWidth="2.5" fill="none" />
      <path d="M794 1003 Q794 1103 674 1123" stroke={color} strokeWidth="1.5" fill="none" />

      {/* ── Side ornamental bars ── */}
      {/* Left bar */}
      <line x1="18" y1="140" x2="18" y2="983" stroke={color} strokeWidth="2" />
      {[140, 220, 300, 380, 460, 540, 620, 700, 780, 860, 940].map(y => (
        <path key={`ld${y}`} d={`M8 ${y} L18 ${y - 12} L28 ${y} L18 ${y + 12} Z`} fill={color} />
      ))}
      {/* Right bar */}
      <line x1="776" y1="140" x2="776" y2="983" stroke={color} strokeWidth="2" />
      {[140, 220, 300, 380, 460, 540, 620, 700, 780, 860, 940].map(y => (
        <path key={`rd${y}`} d={`M766 ${y} L776 ${y - 12} L786 ${y} L776 ${y + 12} Z`} fill={color} />
      ))}

      {/* ── Crown motifs scattered ── */}
      {/* Crown shape helper at various positions */}
      {[
        { x: 140, y: 180 }, { x: 654, y: 200 },
        { x: 120, y: 500 }, { x: 674, y: 480 },
        { x: 150, y: 800 }, { x: 644, y: 820 },
        { x: 160, y: 1000 }, { x: 634, y: 980 },
      ].map(({ x, y }, i) => (
        <g key={i}>
          <path d={`M${x - 15} ${y + 8} L${x - 15} ${y - 5} L${x - 7} ${y + 3} L${x} ${y - 12} L${x + 7} ${y + 3} L${x + 15} ${y - 5} L${x + 15} ${y + 8} Z`} fill={color} />
          <rect x={x - 16} y={y + 8} width="32" height="5" rx="1" fill={color} />
        </g>
      ))}

      {/* ── Diamond chain across top and bottom ── */}
      {Array.from({ length: 15 }).map((_, i) => {
        const x = 100 + i * 42;
        return <path key={`dt${i}`} d={`M${x} 15 L${x + 8} 25 L${x} 35 L${x - 8} 25 Z`} fill={color} />;
      })}
      {Array.from({ length: 15 }).map((_, i) => {
        const x = 100 + i * 42;
        return <path key={`db${i}`} d={`M${x} 1088 L${x + 8} 1098 L${x} 1108 L${x - 8} 1098 Z`} fill={color} />;
      })}

      {/* ── Scattered fleur-de-lis / ornaments ── */}
      {[
        { x: 250, y: 250 }, { x: 544, y: 280 },
        { x: 200, y: 560 }, { x: 594, y: 540 },
        { x: 270, y: 750 }, { x: 524, y: 770 },
        { x: 230, y: 950 }, { x: 564, y: 930 },
      ].map(({ x, y }, i) => (
        <g key={`f${i}`}>
          <path d={`M${x} ${y - 10} Q${x + 5} ${y - 3} ${x} ${y + 2} Q${x - 5} ${y - 3} ${x} ${y - 10}`} fill={color} />
          <circle cx={x} cy={y + 5} r="2.5" fill={color} />
        </g>
      ))}

      {/* ── Center crown watermark ── */}
      <g opacity="0.4">
        <path d="M337 530 L337 490 L367 510 L397 470 L427 510 L457 490 L457 530 Z" fill={color} />
        <circle cx="337" cy="485" r="10" fill={color} />
        <circle cx="397" cy="465" r="10" fill={color} />
        <circle cx="457" cy="485" r="10" fill={color} />
        <rect x="332" y="530" width="130" height="16" rx="3" fill={color} />
      </g>
    </svg>
  );
}

/* ─── ELEGANT: Filigree swirls across whole page ─── */
export function ElegantDecor({ color }: DecorProps) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 794 1123" fill="none" preserveAspectRatio="none" style={{ opacity: 0.06 }}>
      {/* ── Corner filigrees ── */}
      {/* Top-left */}
      <path d="M0 0 Q60 8 70 60 Q75 90 55 100 Q35 110 48 135" stroke={color} strokeWidth="2.5" fill="none" />
      <path d="M0 0 Q8 60 60 70 Q90 75 100 55 Q110 35 135 48" stroke={color} strokeWidth="2.5" fill="none" />
      <circle cx="70" cy="60" r="5" fill={color} />
      <circle cx="60" cy="70" r="5" fill={color} />
      {/* Top-right */}
      <path d="M794 0 Q734 8 724 60 Q719 90 739 100 Q759 110 746 135" stroke={color} strokeWidth="2.5" fill="none" />
      <path d="M794 0 Q786 60 734 70 Q704 75 694 55 Q684 35 659 48" stroke={color} strokeWidth="2.5" fill="none" />
      <circle cx="724" cy="60" r="5" fill={color} />
      <circle cx="734" cy="70" r="5" fill={color} />
      {/* Bottom-left */}
      <path d="M0 1123 Q60 1115 70 1063 Q75 1033 55 1023 Q35 1013 48 988" stroke={color} strokeWidth="2.5" fill="none" />
      <path d="M0 1123 Q8 1063 60 1053 Q90 1048 100 1068 Q110 1088 135 1075" stroke={color} strokeWidth="2.5" fill="none" />
      <circle cx="70" cy="1063" r="5" fill={color} />
      {/* Bottom-right */}
      <path d="M794 1123 Q734 1115 724 1063 Q719 1033 739 1023 Q759 1013 746 988" stroke={color} strokeWidth="2.5" fill="none" />
      <path d="M794 1123 Q786 1063 734 1053 Q704 1048 694 1068" stroke={color} strokeWidth="2.5" fill="none" />
      <circle cx="724" cy="1063" r="5" fill={color} />

      {/* ── Side scroll patterns ── */}
      {/* Left side */}
      {[200, 350, 500, 650, 800, 950].map(y => (
        <g key={`ls${y}`}>
          <path d={`M15 ${y} Q30 ${y - 20} 40 ${y} Q30 ${y + 20} 15 ${y}`} stroke={color} strokeWidth="1.5" fill="none" />
          <circle cx="40" cy={y} r="3" fill={color} />
          <path d={`M15 ${y} Q0 ${y - 15} 8 ${y - 30}`} stroke={color} strokeWidth="1" fill="none" />
          <path d={`M15 ${y} Q0 ${y + 15} 8 ${y + 30}`} stroke={color} strokeWidth="1" fill="none" />
        </g>
      ))}
      {/* Right side */}
      {[200, 350, 500, 650, 800, 950].map(y => (
        <g key={`rs${y}`}>
          <path d={`M779 ${y} Q764 ${y - 20} 754 ${y} Q764 ${y + 20} 779 ${y}`} stroke={color} strokeWidth="1.5" fill="none" />
          <circle cx="754" cy={y} r="3" fill={color} />
          <path d={`M779 ${y} Q794 ${y - 15} 786 ${y - 30}`} stroke={color} strokeWidth="1" fill="none" />
          <path d={`M779 ${y} Q794 ${y + 15} 786 ${y + 30}`} stroke={color} strokeWidth="1" fill="none" />
        </g>
      ))}

      {/* ── Scattered swirl ornaments ── */}
      {[
        { x: 180, y: 200 }, { x: 614, y: 220 },
        { x: 150, y: 420 }, { x: 644, y: 400 },
        { x: 190, y: 620 }, { x: 604, y: 640 },
        { x: 170, y: 840 }, { x: 624, y: 820 },
        { x: 200, y: 1000 }, { x: 594, y: 1020 },
      ].map(({ x, y }, i) => (
        <g key={`sw${i}`}>
          <path d={`M${x} ${y} Q${x + 10} ${y - 12} ${x + 18} ${y - 4} Q${x + 12} ${y + 6} ${x} ${y}`} stroke={color} strokeWidth="1.5" fill="none" />
          <circle cx={x + 18} cy={y - 4} r="2" fill={color} />
        </g>
      ))}

      {/* ── Decorative dots scattered ── */}
      {[
        { x: 300, y: 160 }, { x: 494, y: 180 }, { x: 350, y: 350 }, { x: 444, y: 370 },
        { x: 280, y: 520 }, { x: 514, y: 540 }, { x: 320, y: 700 }, { x: 474, y: 720 },
        { x: 340, y: 880 }, { x: 454, y: 900 }, { x: 397, y: 1060 },
      ].map(({ x, y }, i) => (
        <circle key={`d${i}`} cx={x} cy={y} r="3" fill={color} />
      ))}

      {/* ── Center swirl watermark ── */}
      <g opacity="0.4">
        <path d="M397 561 Q430 520 460 561 Q430 600 397 561" stroke={color} strokeWidth="3" fill="none" />
        <path d="M397 561 Q360 530 397 500 Q434 530 397 561" stroke={color} strokeWidth="3" fill="none" />
        <path d="M397 561 Q364 590 397 622 Q430 590 397 561" stroke={color} strokeWidth="3" fill="none" />
        <path d="M397 561 Q430 590 460 561 Q430 530 397 561" stroke={color} strokeWidth="3" fill="none" />
        <circle cx="397" cy="561" r="10" fill={color} />
      </g>
    </svg>
  );
}

/* ─── MODERN: Geometric shapes across whole page ─── */
export function ModernDecor({ color }: DecorProps) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 794 1123" fill="none" preserveAspectRatio="none" style={{ opacity: 0.05 }}>
      {/* ── Corner geometric brackets ── */}
      <path d="M30 0 L0 0 L0 30" stroke={color} strokeWidth="3" fill="none" />
      <path d="M50 0 L0 0 L0 50" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M764 0 L794 0 L794 30" stroke={color} strokeWidth="3" fill="none" />
      <path d="M744 0 L794 0 L794 50" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M30 1123 L0 1123 L0 1093" stroke={color} strokeWidth="3" fill="none" />
      <path d="M50 1123 L0 1123 L0 1073" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M764 1123 L794 1123 L794 1093" stroke={color} strokeWidth="3" fill="none" />
      <path d="M744 1123 L794 1123 L794 1073" stroke={color} strokeWidth="1.5" fill="none" />

      {/* ── Side accent lines with dots ── */}
      <line x1="15" y1="80" x2="15" y2="1043" stroke={color} strokeWidth="1.5" />
      <line x1="779" y1="80" x2="779" y2="1043" stroke={color} strokeWidth="1.5" />
      {[80, 200, 320, 440, 561, 680, 800, 920, 1043].map(y => (
        <g key={`ld${y}`}>
          <circle cx="15" cy={y} r="4" fill={color} />
          <circle cx="779" cy={y} r="4" fill={color} />
        </g>
      ))}

      {/* ── Scattered squares ── */}
      {[
        { x: 100, y: 120, s: 20 }, { x: 680, y: 140, s: 18 },
        { x: 120, y: 340, s: 16 }, { x: 660, y: 320, s: 20 },
        { x: 90, y: 560, s: 18 }, { x: 690, y: 540, s: 16 },
        { x: 110, y: 760, s: 20 }, { x: 670, y: 780, s: 18 },
        { x: 100, y: 960, s: 16 }, { x: 680, y: 940, s: 20 },
      ].map(({ x, y, s }, i) => (
        <rect key={`sq${i}`} x={x - s / 2} y={y - s / 2} width={s} height={s} stroke={color} strokeWidth="1.5" fill="none"
          transform={`rotate(45 ${x} ${y})`} />
      ))}

      {/* ── Scattered circles ── */}
      {[
        { x: 200, y: 200, r: 12 }, { x: 594, y: 180, r: 10 },
        { x: 180, y: 450, r: 10 }, { x: 614, y: 470, r: 12 },
        { x: 210, y: 680, r: 12 }, { x: 584, y: 660, r: 10 },
        { x: 190, y: 900, r: 10 }, { x: 604, y: 920, r: 12 },
      ].map(({ x, y, r }, i) => (
        <circle key={`ci${i}`} cx={x} cy={y} r={r} stroke={color} strokeWidth="1.5" fill="none" />
      ))}

      {/* ── Horizontal line accents ── */}
      {[250, 500, 750, 1000].map(y => (
        <g key={`hl${y}`}>
          <line x1="60" y1={y} x2="150" y2={y} stroke={color} strokeWidth="0.8" />
          <line x1="644" y1={y} x2="734" y2={y} stroke={color} strokeWidth="0.8" />
          <circle cx="150" cy={y} r="2" fill={color} />
          <circle cx="644" cy={y} r="2" fill={color} />
        </g>
      ))}

      {/* ── Scattered small dots ── */}
      {[
        { x: 300, y: 150 }, { x: 494, y: 170 }, { x: 350, y: 380 }, { x: 444, y: 360 },
        { x: 280, y: 560 }, { x: 514, y: 580 }, { x: 330, y: 760 }, { x: 464, y: 740 },
        { x: 310, y: 930 }, { x: 484, y: 950 },
      ].map(({ x, y }, i) => (
        <circle key={`dot${i}`} cx={x} cy={y} r="2.5" fill={color} />
      ))}

      {/* ── Center geometric watermark ── */}
      <g opacity="0.35">
        <rect x="347" y="511" width="100" height="100" stroke={color} strokeWidth="2.5" fill="none" transform="rotate(45 397 561)" />
        <rect x="362" y="526" width="70" height="70" stroke={color} strokeWidth="1.5" fill="none" transform="rotate(45 397 561)" />
        <circle cx="397" cy="561" r="20" stroke={color} strokeWidth="2" fill="none" />
        <circle cx="397" cy="561" r="6" fill={color} />
      </g>
    </svg>
  );
}

/* ─── TRADITIONAL: Mandala, paisley, kolam across whole page ─── */
export function TraditionalDecor({ color }: DecorProps) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 794 1123" fill="none" preserveAspectRatio="none" style={{ opacity: 0.06 }}>
      {/* ── Corner paisleys ── */}
      <path d="M30 100 Q10 60 30 30 Q50 5 75 20 Q95 35 80 65 Q65 90 40 95 Z" fill={color} />
      <circle cx="50" cy="50" r="6" fill={color} opacity="0.5" />
      <g transform="translate(794,0) scale(-1,1)">
        <path d="M30 100 Q10 60 30 30 Q50 5 75 20 Q95 35 80 65 Q65 90 40 95 Z" fill={color} />
        <circle cx="50" cy="50" r="6" fill={color} opacity="0.5" />
      </g>
      <g transform="translate(0,1123) scale(1,-1)">
        <path d="M30 100 Q10 60 30 30 Q50 5 75 20 Q95 35 80 65 Q65 90 40 95 Z" fill={color} />
        <circle cx="50" cy="50" r="6" fill={color} opacity="0.5" />
      </g>
      <g transform="translate(794,1123) scale(-1,-1)">
        <path d="M30 100 Q10 60 30 30 Q50 5 75 20 Q95 35 80 65 Q65 90 40 95 Z" fill={color} />
        <circle cx="50" cy="50" r="6" fill={color} opacity="0.5" />
      </g>

      {/* ── Side kolam/rangoli dots pattern ── */}
      {[150, 250, 350, 450, 550, 650, 750, 850, 950].map(y => (
        <g key={`kl${y}`}>
          <circle cx="20" cy={y} r="4" fill={color} />
          <circle cx="35" cy={y - 15} r="3" fill={color} />
          <circle cx="35" cy={y + 15} r="3" fill={color} />
          <path d={`M20 ${y} L35 ${y - 15} L35 ${y + 15} Z`} stroke={color} strokeWidth="1" fill="none" />
        </g>
      ))}
      {[150, 250, 350, 450, 550, 650, 750, 850, 950].map(y => (
        <g key={`kr${y}`}>
          <circle cx="774" cy={y} r="4" fill={color} />
          <circle cx="759" cy={y - 15} r="3" fill={color} />
          <circle cx="759" cy={y + 15} r="3" fill={color} />
          <path d={`M774 ${y} L759 ${y - 15} L759 ${y + 15} Z`} stroke={color} strokeWidth="1" fill="none" />
        </g>
      ))}

      {/* ── Scattered mini paisleys ── */}
      {[
        { x: 130, y: 250, s: 0.5 }, { x: 664, y: 230, s: 0.5 },
        { x: 150, y: 500, s: 0.45 }, { x: 644, y: 520, s: 0.45 },
        { x: 120, y: 750, s: 0.5 }, { x: 674, y: 730, s: 0.5 },
        { x: 140, y: 950, s: 0.45 }, { x: 654, y: 970, s: 0.45 },
      ].map(({ x, y, s }, i) => (
        <g key={`sp${i}`} transform={`translate(${x},${y}) scale(${s})`}>
          <path d="M0 40 Q-15 15 0 -5 Q15 -20 30 -10 Q40 0 30 20 Q20 38 5 40 Z" fill={color} />
          <circle cx="10" cy="10" r="4" fill={color} opacity="0.5" />
        </g>
      ))}

      {/* ── Om/sacred dots pattern scattered ── */}
      {[
        { x: 250, y: 180 }, { x: 544, y: 160 },
        { x: 300, y: 400 }, { x: 494, y: 420 },
        { x: 270, y: 640 }, { x: 524, y: 620 },
        { x: 310, y: 860 }, { x: 484, y: 880 },
      ].map(({ x, y }, i) => (
        <g key={`od${i}`}>
          <circle cx={x} cy={y} r="5" stroke={color} strokeWidth="1.5" fill="none" />
          <circle cx={x} cy={y} r="2" fill={color} />
        </g>
      ))}

      {/* ── Center mandala watermark ── */}
      <g opacity="0.4">
        <circle cx="397" cy="561" r="100" stroke={color} strokeWidth="2" fill="none" />
        <circle cx="397" cy="561" r="90" stroke={color} strokeWidth="1" fill="none" />
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse key={i} cx="397" cy="561" rx="10" ry="45" fill={color} opacity="0.3"
            transform={`rotate(${i * 30} 397 561)`} />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse key={`in${i}`} cx="397" cy="561" rx="7" ry="28" fill={color} opacity="0.4"
            transform={`rotate(${i * 30 + 15} 397 561)`} />
        ))}
        <circle cx="397" cy="561" r="45" stroke={color} strokeWidth="1.5" fill="none" />
        <circle cx="397" cy="561" r="16" fill={color} opacity="0.3" />
        <circle cx="397" cy="561" r="6" fill={color} opacity="0.5" />
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * 15 * Math.PI) / 180;
          return <circle key={`md${i}`} cx={397 + 95 * Math.cos(a)} cy={561 + 95 * Math.sin(a)} r="2.5" fill={color} />;
        })}
      </g>
    </svg>
  );
}

/* ─── LUXURY: Damask, fleur-de-lis, scrollwork across whole page ─── */
export function LuxuryDecor({ color }: DecorProps) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 794 1123" fill="none" preserveAspectRatio="none" style={{ opacity: 0.06 }}>
      {/* ── Corner scrollwork ── */}
      {/* Top-left */}
      <path d="M50 0 Q50 25 30 40 Q10 55 25 75 Q40 95 20 110" stroke={color} strokeWidth="2.5" fill="none" />
      <path d="M0 50 Q25 50 40 30 Q55 10 75 25 Q95 40 110 20" stroke={color} strokeWidth="2.5" fill="none" />
      <path d="M35 35 Q55 35 55 55 Q55 75 35 75 Q22 65 35 55 Q48 45 35 35 Z" fill={color} opacity="0.5" />
      <circle cx="25" cy="75" r="4" fill={color} />
      <circle cx="75" cy="25" r="4" fill={color} />
      {/* Top-right */}
      <path d="M744 0 Q744 25 764 40 Q784 55 769 75 Q754 95 774 110" stroke={color} strokeWidth="2.5" fill="none" />
      <path d="M794 50 Q769 50 754 30 Q739 10 719 25 Q699 40 684 20" stroke={color} strokeWidth="2.5" fill="none" />
      <path d="M759 35 Q739 35 739 55 Q739 75 759 75 Q772 65 759 55 Q746 45 759 35 Z" fill={color} opacity="0.5" />
      <circle cx="769" cy="75" r="4" fill={color} />
      {/* Bottom-left */}
      <path d="M50 1123 Q50 1098 30 1083 Q10 1068 25 1048 Q40 1028 20 1013" stroke={color} strokeWidth="2.5" fill="none" />
      <path d="M0 1073 Q25 1073 40 1093 Q55 1113 75 1098" stroke={color} strokeWidth="2.5" fill="none" />
      <circle cx="25" cy="1048" r="4" fill={color} />
      {/* Bottom-right */}
      <path d="M744 1123 Q744 1098 764 1083 Q784 1068 769 1048 Q754 1028 774 1013" stroke={color} strokeWidth="2.5" fill="none" />
      <path d="M794 1073 Q769 1073 754 1093 Q739 1113 719 1098" stroke={color} strokeWidth="2.5" fill="none" />
      <circle cx="769" cy="1048" r="4" fill={color} />

      {/* ── Side damask leaf repeating pattern ── */}
      {[120, 220, 320, 420, 520, 620, 720, 820, 920, 1020].map(y => (
        <g key={`dl${y}`}>
          <path d={`M15 ${y} Q28 ${y - 18} 15 ${y - 40} Q2 ${y - 18} 15 ${y}`} fill={color} />
          <circle cx="15" cy={y - 20} r="2.5" fill={color} opacity="0.7" />
        </g>
      ))}
      {[120, 220, 320, 420, 520, 620, 720, 820, 920, 1020].map(y => (
        <g key={`dr${y}`}>
          <path d={`M779 ${y} Q792 ${y - 18} 779 ${y - 40} Q766 ${y - 18} 779 ${y}`} fill={color} />
          <circle cx="779" cy={y - 20} r="2.5" fill={color} opacity="0.7" />
        </g>
      ))}

      {/* ── Scattered fleur-de-lis motifs ── */}
      {[
        { x: 130, y: 250 }, { x: 664, y: 230 },
        { x: 150, y: 480 }, { x: 644, y: 500 },
        { x: 120, y: 700 }, { x: 674, y: 680 },
        { x: 140, y: 920 }, { x: 654, y: 940 },
      ].map(({ x, y }, i) => (
        <g key={`fl${i}`}>
          <path d={`M${x} ${y - 15} Q${x + 5} ${y - 5} ${x} ${y} Q${x - 5} ${y - 5} ${x} ${y - 15}`} fill={color} />
          <path d={`M${x} ${y} Q${x + 10} ${y - 5} ${x + 15} ${y - 15}`} stroke={color} strokeWidth="1.5" fill="none" />
          <path d={`M${x} ${y} Q${x - 10} ${y - 5} ${x - 15} ${y - 15}`} stroke={color} strokeWidth="1.5" fill="none" />
          <circle cx={x} cy={y + 3} r="2.5" fill={color} />
        </g>
      ))}

      {/* ── Scattered diamond dots ── */}
      {[
        { x: 260, y: 170 }, { x: 534, y: 190 }, { x: 300, y: 380 }, { x: 494, y: 360 },
        { x: 280, y: 580 }, { x: 514, y: 600 }, { x: 320, y: 780 }, { x: 474, y: 760 },
        { x: 290, y: 960 }, { x: 504, y: 980 },
      ].map(({ x, y }, i) => (
        <path key={`dd${i}`} d={`M${x} ${y - 5} L${x + 5} ${y} L${x} ${y + 5} L${x - 5} ${y} Z`} fill={color} />
      ))}

      {/* ── Center fleur-de-lis watermark ── */}
      <g opacity="0.35">
        <path d="M397 510 Q410 540 397 560 Q384 540 397 510" fill={color} />
        <path d="M397 560 Q420 548 442 525 Q435 555 415 570 Q397 580 397 560" fill={color} />
        <path d="M397 560 Q374 548 352 525 Q359 555 379 570 Q397 580 397 560" fill={color} />
        <path d="M397 580 Q402 610 397 640 Q392 610 397 580" fill={color} />
        <path d="M382 592 Q370 605 365 625 L397 610 Z" fill={color} opacity="0.6" />
        <path d="M412 592 Q424 605 429 625 L397 610 Z" fill={color} opacity="0.6" />
        <circle cx="397" cy="575" r="7" fill={color} />
      </g>
    </svg>
  );
}

/** Returns the correct full-page decoration based on template category */
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
