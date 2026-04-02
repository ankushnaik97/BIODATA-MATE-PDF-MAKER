"use client";

/**
 * Full-page wallpaper-style SVG background decorations for each template category.
 * LARGE elements tiled across the entire 794×1123 biodata page.
 */

interface DecorProps {
  color: string;
}

/* ─── Helper: Large 6-petal flower ─── */
function BigFlower({ cx, cy, r, color, rot = 0 }: { cx: number; cy: number; r: number; color: string; rot?: number }) {
  return (
    <g transform={`rotate(${rot} ${cx} ${cy})`}>
      {[0, 60, 120, 180, 240, 300].map(a => (
        <ellipse key={a} cx={cx} cy={cy} rx={r * 0.45} ry={r} fill={color}
          transform={`rotate(${a} ${cx} ${cy})`} />
      ))}
      {[30, 90, 150, 210, 270, 330].map(a => (
        <ellipse key={`i${a}`} cx={cx} cy={cy} rx={r * 0.3} ry={r * 0.65} fill={color} opacity="0.5"
          transform={`rotate(${a} ${cx} ${cy})`} />
      ))}
      <circle cx={cx} cy={cy} r={r * 0.3} fill={color} opacity="0.6" />
      <circle cx={cx} cy={cy} r={r * 0.15} fill={color} opacity="0.8" />
    </g>
  );
}

/* ─── Helper: 5-petal flower ─── */
function Flower5({ cx, cy, r, color, rot = 0 }: { cx: number; cy: number; r: number; color: string; rot?: number }) {
  return (
    <g transform={`rotate(${rot} ${cx} ${cy})`}>
      {[0, 72, 144, 216, 288].map(a => (
        <ellipse key={a} cx={cx} cy={cy} rx={r * 0.42} ry={r} fill={color}
          transform={`rotate(${a} ${cx} ${cy})`} />
      ))}
      <circle cx={cx} cy={cy} r={r * 0.28} fill={color} opacity="0.7" />
    </g>
  );
}

/* ─── Helper: Leaf ─── */
function Leaf({ cx, cy, size, rot, color }: { cx: number; cy: number; size: number; rot: number; color: string }) {
  return (
    <g transform={`rotate(${rot} ${cx} ${cy})`}>
      <ellipse cx={cx} cy={cy} rx={size * 0.35} ry={size} fill={color} />
      <line x1={cx} y1={cy - size} x2={cx} y2={cy + size} stroke={color} strokeWidth="1" opacity="0.5" />
    </g>
  );
}

/* ─── FLORAL: LARGE flowers tiled across the ENTIRE page like wallpaper ─── */
export function FloralDecor({ color }: DecorProps) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 794 1123" fill="none" preserveAspectRatio="none" style={{ opacity: 0.12 }}>
      {/* ── Row 1: Top area (y~60-120) ── */}
      <BigFlower cx={70} cy={80} r={65} color={color} rot={0} />
      <Flower5 cx={220} cy={60} r={40} color={color} rot={15} />
      <BigFlower cx={397} cy={90} r={55} color={color} rot={10} />
      <Flower5 cx={570} cy={55} r={42} color={color} rot={-12} />
      <BigFlower cx={724} cy={80} r={65} color={color} rot={5} />

      {/* ── Row 2: (y~220-280) ── */}
      <Flower5 cx={120} cy={240} r={45} color={color} rot={-8} />
      <BigFlower cx={300} cy={260} r={58} color={color} rot={12} />
      <Flower5 cx={500} cy={235} r={40} color={color} rot={20} />
      <BigFlower cx={670} cy={255} r={55} color={color} rot={-5} />

      {/* ── Row 3: (y~400-460) ── */}
      <BigFlower cx={80} cy={420} r={60} color={color} rot={8} />
      <Flower5 cx={230} cy={440} r={42} color={color} rot={-18} />
      <BigFlower cx={410} cy={410} r={62} color={color} rot={-6} />
      <Flower5 cx={580} cy={445} r={45} color={color} rot={14} />
      <BigFlower cx={730} cy={425} r={58} color={color} rot={-10} />

      {/* ── Row 4: Center (y~560-620) ── */}
      <Flower5 cx={130} cy={580} r={44} color={color} rot={22} />
      <BigFlower cx={310} cy={600} r={60} color={color} rot={-8} />
      <BigFlower cx={500} cy={575} r={65} color={color} rot={5} />
      <Flower5 cx={680} cy={595} r={42} color={color} rot={-15} />

      {/* ── Row 5: (y~720-780) ── */}
      <BigFlower cx={75} cy={740} r={58} color={color} rot={-12} />
      <Flower5 cx={240} cy={760} r={43} color={color} rot={10} />
      <BigFlower cx={420} cy={735} r={60} color={color} rot={18} />
      <Flower5 cx={590} cy={755} r={40} color={color} rot={-20} />
      <BigFlower cx={735} cy={745} r={56} color={color} rot={7} />

      {/* ── Row 6: (y~880-940) ── */}
      <Flower5 cx={140} cy={900} r={45} color={color} rot={-6} />
      <BigFlower cx={320} cy={920} r={55} color={color} rot={15} />
      <Flower5 cx={510} cy={895} r={42} color={color} rot={-22} />
      <BigFlower cx={690} cy={910} r={58} color={color} rot={-3} />

      {/* ── Row 7: Bottom (y~1040-1100) ── */}
      <BigFlower cx={70} cy={1060} r={62} color={color} rot={10} />
      <Flower5 cx={230} cy={1080} r={40} color={color} rot={-14} />
      <BigFlower cx={397} cy={1055} r={58} color={color} rot={-8} />
      <Flower5 cx={570} cy={1075} r={43} color={color} rot={16} />
      <BigFlower cx={724} cy={1060} r={62} color={color} rot={-5} />

      {/* ── Leaves scattered between flowers ── */}
      <Leaf cx={160} cy={150} size={32} rot={-40} color={color} />
      <Leaf cx={480} cy={160} size={28} rot={35} color={color} />
      <Leaf cx={650} cy={170} size={30} rot={-50} color={color} />
      <Leaf cx={190} cy={340} size={28} rot={45} color={color} />
      <Leaf cx={550} cy={330} size={32} rot={-35} color={color} />
      <Leaf cx={350} cy={340} size={26} rot={50} color={color} />
      <Leaf cx={170} cy={520} size={30} rot={-42} color={color} />
      <Leaf cx={460} cy={510} size={28} rot={38} color={color} />
      <Leaf cx={630} cy={520} size={32} rot={-48} color={color} />
      <Leaf cx={200} cy={680} size={28} rot={46} color={color} />
      <Leaf cx={350} cy={670} size={30} rot={-38} color={color} />
      <Leaf cx={520} cy={690} size={26} rot={52} color={color} />
      <Leaf cx={180} cy={850} size={30} rot={-44} color={color} />
      <Leaf cx={430} cy={840} size={28} rot={40} color={color} />
      <Leaf cx={610} cy={855} size={32} rot={-36} color={color} />
      <Leaf cx={270} cy={1000} size={28} rot={48} color={color} />
      <Leaf cx={500} cy={990} size={30} rot={-42} color={color} />
      <Leaf cx={700} cy={1005} size={26} rot={38} color={color} />

      {/* ── Vine curves connecting areas ── */}
      <path d="M0 200 Q100 180 200 220 Q300 260 400 200 Q500 140 600 200 Q700 260 794 220" stroke={color} strokeWidth="2.5" fill="none" opacity="0.5" />
      <path d="M0 500 Q120 460 250 510 Q380 560 500 500 Q620 440 794 500" stroke={color} strokeWidth="2.5" fill="none" opacity="0.5" />
      <path d="M0 820 Q100 780 220 830 Q340 880 460 820 Q580 760 700 830 Q760 860 794 840" stroke={color} strokeWidth="2.5" fill="none" opacity="0.5" />

      {/* ── Petal/bud dots sprinkled ── */}
      {[
        {x:160,y:110},{x:310,y:170},{x:460,y:130},{x:620,y:150},
        {x:180,y:300},{x:410,y:310},{x:600,y:300},{x:730,y:330},
        {x:150,y:470},{x:320,y:480},{x:530,y:460},{x:680,y:470},
        {x:200,y:650},{x:390,y:640},{x:570,y:660},{x:720,y:650},
        {x:130,y:830},{x:340,y:820},{x:510,y:840},{x:680,y:830},
        {x:190,y:980},{x:380,y:990},{x:560,y:970},{x:710,y:985},
      ].map(({x,y},i) => (
        <circle key={`b${i}`} cx={x} cy={y} r={5} fill={color} opacity="0.6" />
      ))}
    </svg>
  );
}

/* ─── ROYAL: Large crowns, shields, ornamental motifs tiled across page ─── */
export function RoyalDecor({ color }: DecorProps) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 794 1123" fill="none" preserveAspectRatio="none" style={{ opacity: 0.1 }}>
      {/* ── Large crown motifs in a grid ── */}
      {[
        {x:100,y:90},{x:397,y:70},{x:694,y:90},
        {x:200,y:280},{x:594,y:300},
        {x:100,y:470},{x:397,y:450},{x:694,y:470},
        {x:200,y:650},{x:594,y:670},
        {x:100,y:840},{x:397,y:820},{x:694,y:840},
        {x:200,y:1030},{x:594,y:1050},
      ].map(({x,y},i) => (
        <g key={`c${i}`}>
          <path d={`M${x-30} ${y+16} L${x-30} ${y-10} L${x-14} ${y+6} L${x} ${y-24} L${x+14} ${y+6} L${x+30} ${y-10} L${x+30} ${y+16} Z`} fill={color} />
          <rect x={x-32} y={y+16} width="64" height="10" rx="2" fill={color} />
          <circle cx={x-30} cy={y-15} r="6" fill={color} />
          <circle cx={x} cy={y-28} r="7" fill={color} />
          <circle cx={x+30} cy={y-15} r="6" fill={color} />
        </g>
      ))}

      {/* ── Large ornamental scrollwork corners ── */}
      <path d="M0 100 Q0 0 100 0" stroke={color} strokeWidth="6" fill="none" />
      <path d="M0 140 Q0 10 140 0" stroke={color} strokeWidth="3.5" fill="none" />
      <path d="M0 180 Q0 20 180 0" stroke={color} strokeWidth="2" fill="none" />
      <path d="M100 0 Q120 25 100 55 Q80 85 110 100" stroke={color} strokeWidth="3" fill="none" />
      <path d="M0 100 Q25 120 55 100 Q85 80 100 110" stroke={color} strokeWidth="3" fill="none" />

      <path d="M794 100 Q794 0 694 0" stroke={color} strokeWidth="6" fill="none" />
      <path d="M794 140 Q794 10 654 0" stroke={color} strokeWidth="3.5" fill="none" />
      <path d="M794 180 Q794 20 614 0" stroke={color} strokeWidth="2" fill="none" />
      <path d="M694 0 Q674 25 694 55 Q714 85 684 100" stroke={color} strokeWidth="3" fill="none" />

      <path d="M0 1023 Q0 1123 100 1123" stroke={color} strokeWidth="6" fill="none" />
      <path d="M0 983 Q0 1113 140 1123" stroke={color} strokeWidth="3.5" fill="none" />
      <path d="M0 943 Q0 1103 180 1123" stroke={color} strokeWidth="2" fill="none" />

      <path d="M794 1023 Q794 1123 694 1123" stroke={color} strokeWidth="6" fill="none" />
      <path d="M794 983 Q794 1113 654 1123" stroke={color} strokeWidth="3.5" fill="none" />
      <path d="M794 943 Q794 1103 614 1123" stroke={color} strokeWidth="2" fill="none" />

      {/* ── Side ornamental bars with large diamonds ── */}
      <line x1="25" y1="200" x2="25" y2="923" stroke={color} strokeWidth="3" />
      <line x1="769" y1="200" x2="769" y2="923" stroke={color} strokeWidth="3" />
      {[200,290,380,470,561,650,740,830,920].map(y => (
        <g key={`d${y}`}>
          <path d={`M5 ${y} L25 ${y-20} L45 ${y} L25 ${y+20} Z`} fill={color} />
          <path d={`M749 ${y} L769 ${y-20} L789 ${y} L769 ${y+20} Z`} fill={color} />
        </g>
      ))}

      {/* ── Diamond chain across top and bottom ── */}
      {Array.from({length:13}).map((_,i) => {
        const x = 80 + i*50;
        return <path key={`dt${i}`} d={`M${x} 18 L${x+12} 35 L${x} 52 L${x-12} 35 Z`} fill={color} />;
      })}
      {Array.from({length:13}).map((_,i) => {
        const x = 80 + i*50;
        return <path key={`db${i}`} d={`M${x} 1071 L${x+12} 1088 L${x} 1105 L${x-12} 1088 Z`} fill={color} />;
      })}

      {/* ── Scattered shield / crest shapes ── */}
      {[
        {x:300,y:180},{x:500,y:200},{x:280,y:540},{x:520,y:560},
        {x:310,y:750},{x:490,y:730},{x:350,y:950},{x:450,y:970},
      ].map(({x,y},i) => (
        <g key={`s${i}`}>
          <path d={`M${x} ${y-20} L${x+18} ${y-8} L${x+18} ${y+8} Q${x} ${y+28} ${x-18} ${y+8} L${x-18} ${y-8} Z`} stroke={color} strokeWidth="2" fill="none" />
          <path d={`M${x} ${y-10} L${x} ${y+14}`} stroke={color} strokeWidth="1.5" />
          <path d={`M${x-10} ${y} L${x+10} ${y}`} stroke={color} strokeWidth="1.5" />
        </g>
      ))}
    </svg>
  );
}

/* ─── ELEGANT: Large filigree swirls, ornate frames tiled across page ─── */
export function ElegantDecor({ color }: DecorProps) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 794 1123" fill="none" preserveAspectRatio="none" style={{ opacity: 0.1 }}>
      {/* ── Large corner filigrees ── */}
      <path d="M0 0 Q80 10 100 80 Q110 130 80 150 Q50 170 70 210" stroke={color} strokeWidth="3.5" fill="none" />
      <path d="M0 0 Q10 80 80 100 Q130 110 150 80 Q170 50 210 70" stroke={color} strokeWidth="3.5" fill="none" />
      <path d="M40 40 Q65 35 75 60 Q85 85 60 90 Q35 95 45 70 Q55 45 40 40 Z" fill={color} opacity="0.4" />
      <circle cx="100" cy="80" r="8" fill={color} opacity="0.5" />
      <circle cx="80" cy="100" r="8" fill={color} opacity="0.5" />

      <path d="M794 0 Q714 10 694 80 Q684 130 714 150 Q744 170 724 210" stroke={color} strokeWidth="3.5" fill="none" />
      <path d="M794 0 Q784 80 714 100 Q664 110 644 80 Q624 50 584 70" stroke={color} strokeWidth="3.5" fill="none" />
      <circle cx="694" cy="80" r="8" fill={color} opacity="0.5" />

      <path d="M0 1123 Q80 1113 100 1043 Q110 993 80 973 Q50 953 70 913" stroke={color} strokeWidth="3.5" fill="none" />
      <path d="M0 1123 Q10 1043 80 1023 Q130 1013 150 1043 Q170 1073 210 1053" stroke={color} strokeWidth="3.5" fill="none" />

      <path d="M794 1123 Q714 1113 694 1043 Q684 993 714 973 Q744 953 724 913" stroke={color} strokeWidth="3.5" fill="none" />
      <path d="M794 1123 Q784 1043 714 1023 Q664 1013 644 1043" stroke={color} strokeWidth="3.5" fill="none" />

      {/* ── Large S-curve swirls on left & right sides ── */}
      {[250,450,650,850].map(y => (
        <g key={`ls${y}`}>
          <path d={`M10 ${y-40} Q45 ${y-20} 40 ${y+5} Q35 ${y+30} 55 ${y+40} Q75 ${y+50} 50 ${y+65} Q25 ${y+80} 10 ${y+60}`} stroke={color} strokeWidth="2.5" fill="none" />
          <circle cx="40" cy={y+5} r="5" fill={color} />
          <circle cx="55" cy={y+40} r="4" fill={color} />
        </g>
      ))}
      {[250,450,650,850].map(y => (
        <g key={`rs${y}`}>
          <path d={`M784 ${y-40} Q749 ${y-20} 754 ${y+5} Q759 ${y+30} 739 ${y+40} Q719 ${y+50} 744 ${y+65} Q769 ${y+80} 784 ${y+60}`} stroke={color} strokeWidth="2.5" fill="none" />
          <circle cx="754" cy={y+5} r="5" fill={color} />
          <circle cx="739" cy={y+40} r="4" fill={color} />
        </g>
      ))}

      {/* ── Large decorative swirls scattered across page ── */}
      {[
        {x:200,y:180,s:1},{x:600,y:200,s:1.1},{x:350,y:350,s:0.9},{x:450,y:380,s:1},
        {x:180,y:520,s:1.1},{x:620,y:540,s:0.9},{x:300,y:560,s:1},{x:500,y:520,s:1},
        {x:220,y:720,s:1},{x:580,y:700,s:1.1},{x:400,y:730,s:0.9},
        {x:190,y:900,s:1},{x:600,y:880,s:1},{x:350,y:920,s:1.1},{x:500,y:900,s:0.9},
      ].map(({x,y,s},i) => (
        <g key={`sw${i}`} transform={`translate(${x},${y}) scale(${s})`}>
          <path d="M0 0 Q15 -18 28 -8 Q18 8 0 0" stroke={color} strokeWidth="2" fill="none" />
          <path d="M0 0 Q-15 18 -28 8 Q-18 -8 0 0" stroke={color} strokeWidth="2" fill="none" />
          <circle cx="0" cy="0" r="3.5" fill={color} />
        </g>
      ))}

      {/* ── Decorative dots in arches ── */}
      {[150,350,550,750,950].map(y => (
        <g key={`da${y}`}>
          {Array.from({length:9}).map((_,i) => {
            const x = 150 + i*60;
            return <circle key={i} cx={x} cy={y} r={3.5} fill={color} opacity="0.5" />;
          })}
        </g>
      ))}
    </svg>
  );
}

/* ─── MODERN: Large geometric shapes tiled across page ─── */
export function ModernDecor({ color }: DecorProps) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 794 1123" fill="none" preserveAspectRatio="none" style={{ opacity: 0.08 }}>
      {/* ── Large corner brackets ── */}
      <path d="M60 0 L0 0 L0 60" stroke={color} strokeWidth="5" fill="none" />
      <path d="M100 0 L0 0 L0 100" stroke={color} strokeWidth="2.5" fill="none" />
      <path d="M734 0 L794 0 L794 60" stroke={color} strokeWidth="5" fill="none" />
      <path d="M694 0 L794 0 L794 100" stroke={color} strokeWidth="2.5" fill="none" />
      <path d="M60 1123 L0 1123 L0 1063" stroke={color} strokeWidth="5" fill="none" />
      <path d="M100 1123 L0 1123 L0 1023" stroke={color} strokeWidth="2.5" fill="none" />
      <path d="M734 1123 L794 1123 L794 1063" stroke={color} strokeWidth="5" fill="none" />
      <path d="M694 1123 L794 1123 L794 1023" stroke={color} strokeWidth="2.5" fill="none" />

      {/* ── Side lines with large dots ── */}
      <line x1="20" y1="120" x2="20" y2="1003" stroke={color} strokeWidth="2.5" />
      <line x1="774" y1="120" x2="774" y2="1003" stroke={color} strokeWidth="2.5" />
      {[120,220,320,420,520,620,720,820,920,1003].map(y => (
        <g key={`sd${y}`}>
          <circle cx="20" cy={y} r="7" fill={color} />
          <circle cx="774" cy={y} r="7" fill={color} />
        </g>
      ))}

      {/* ── Large rotated squares scattered ── */}
      {[
        {x:150,y:180,s:40},{x:650,y:160,s:38},{x:400,y:140,s:35},
        {x:130,y:400,s:36},{x:670,y:420,s:40},{x:350,y:380,s:34},{x:530,y:410,s:38},
        {x:160,y:600,s:40},{x:640,y:580,s:36},{x:420,y:620,s:38},
        {x:140,y:800,s:38},{x:660,y:820,s:40},{x:300,y:780,s:34},{x:520,y:810,s:36},
        {x:170,y:980,s:36},{x:630,y:960,s:38},{x:400,y:1000,s:40},
      ].map(({x,y,s},i) => (
        <rect key={`sq${i}`} x={x-s/2} y={y-s/2} width={s} height={s} stroke={color} strokeWidth="2" fill="none"
          transform={`rotate(45 ${x} ${y})`} />
      ))}

      {/* ── Large circles scattered ── */}
      {[
        {x:250,y:250,r:25},{x:550,y:270,r:22},{x:400,y:300,r:20},
        {x:220,y:500,r:22},{x:580,y:480,r:25},{x:400,y:530,r:20},
        {x:260,y:700,r:25},{x:540,y:720,r:22},{x:400,y:680,r:20},
        {x:230,y:900,r:22},{x:570,y:880,r:25},{x:400,y:930,r:20},
      ].map(({x,y,r},i) => (
        <circle key={`ci${i}`} cx={x} cy={y} r={r} stroke={color} strokeWidth="2" fill="none" />
      ))}

      {/* ── Horizontal accent lines ── */}
      {[200,400,600,800,1000].map(y => (
        <g key={`hl${y}`}>
          <line x1="60" y1={y} x2="200" y2={y} stroke={color} strokeWidth="1.5" />
          <line x1="594" y1={y} x2="734" y2={y} stroke={color} strokeWidth="1.5" />
          <circle cx="200" cy={y} r="4" fill={color} />
          <circle cx="594" cy={y} r="4" fill={color} />
        </g>
      ))}

      {/* ── Grid dots ── */}
      {[180,360,540,720,900].map(y => (
        <g key={`gd${y}`}>
          {[200,300,400,500,600].map(x => (
            <circle key={x} cx={x} cy={y} r="3.5" fill={color} opacity="0.5" />
          ))}
        </g>
      ))}
    </svg>
  );
}

/* ─── TRADITIONAL: Large mandalas, paisleys tiled across page ─── */
export function TraditionalDecor({ color }: DecorProps) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 794 1123" fill="none" preserveAspectRatio="none" style={{ opacity: 0.1 }}>
      {/* ── Large corner paisleys ── */}
      <g>
        <path d="M40 160 Q15 100 40 45 Q65 5 105 25 Q140 45 120 95 Q100 140 55 155 Z" fill={color} />
        <circle cx="75" cy="80" r="10" fill={color} opacity="0.4" />
        <path d="M40 45 Q30 80 50 115" stroke={color} strokeWidth="1.5" fill="none" opacity="0.4" />
      </g>
      <g transform="translate(794,0) scale(-1,1)">
        <path d="M40 160 Q15 100 40 45 Q65 5 105 25 Q140 45 120 95 Q100 140 55 155 Z" fill={color} />
        <circle cx="75" cy="80" r="10" fill={color} opacity="0.4" />
      </g>
      <g transform="translate(0,1123) scale(1,-1)">
        <path d="M40 160 Q15 100 40 45 Q65 5 105 25 Q140 45 120 95 Q100 140 55 155 Z" fill={color} />
        <circle cx="75" cy="80" r="10" fill={color} opacity="0.4" />
      </g>
      <g transform="translate(794,1123) scale(-1,-1)">
        <path d="M40 160 Q15 100 40 45 Q65 5 105 25 Q140 45 120 95 Q100 140 55 155 Z" fill={color} />
        <circle cx="75" cy="80" r="10" fill={color} opacity="0.4" />
      </g>

      {/* ── Side kolam patterns (larger) ── */}
      {[130,230,330,430,530,630,730,830,930].map(y => (
        <g key={`kl${y}`}>
          <circle cx="25" cy={y} r="6" fill={color} />
          <circle cx="45" cy={y-22} r="5" fill={color} />
          <circle cx="45" cy={y+22} r="5" fill={color} />
          <path d={`M25 ${y} L45 ${y-22} L45 ${y+22} Z`} stroke={color} strokeWidth="1.5" fill="none" />
          <circle cx="25" cy={y} r="14" stroke={color} strokeWidth="1" fill="none" />
        </g>
      ))}
      {[130,230,330,430,530,630,730,830,930].map(y => (
        <g key={`kr${y}`}>
          <circle cx="769" cy={y} r="6" fill={color} />
          <circle cx="749" cy={y-22} r="5" fill={color} />
          <circle cx="749" cy={y+22} r="5" fill={color} />
          <path d={`M769 ${y} L749 ${y-22} L749 ${y+22} Z`} stroke={color} strokeWidth="1.5" fill="none" />
          <circle cx="769" cy={y} r="14" stroke={color} strokeWidth="1" fill="none" />
        </g>
      ))}

      {/* ── Large paisleys scattered across page ── */}
      {[
        {x:160,y:250,s:0.8,r:0},{x:640,y:230,s:0.8,r:0},
        {x:180,y:480,s:0.75,r:15},{x:620,y:500,s:0.75,r:-15},
        {x:150,y:700,s:0.8,r:-10},{x:650,y:720,s:0.8,r:10},
        {x:170,y:930,s:0.75,r:5},{x:630,y:910,s:0.75,r:-5},
        {x:300,y:300,s:0.6,r:20},{x:500,y:320,s:0.6,r:-20},
        {x:280,y:600,s:0.65,r:-12},{x:520,y:580,s:0.65,r:12},
        {x:310,y:850,s:0.6,r:8},{x:490,y:870,s:0.6,r:-8},
      ].map(({x,y,s,r},i) => (
        <g key={`p${i}`} transform={`translate(${x},${y}) scale(${s}) rotate(${r})`}>
          <path d="M0 60 Q-22 25 0 -8 Q22 -30 45 -15 Q60 0 45 30 Q30 55 8 60 Z" fill={color} />
          <circle cx="15" cy="15" r="6" fill={color} opacity="0.4" />
          <path d="M0 -8 Q-5 20 10 45" stroke={color} strokeWidth="1" fill="none" opacity="0.4" />
        </g>
      ))}

      {/* ── Mini mandalas scattered ── */}
      {[
        {x:250,y:170},{x:550,y:150},{x:400,y:200},
        {x:350,y:450},{x:450,y:430},
        {x:300,y:660},{x:500,y:680},{x:400,y:640},
        {x:350,y:960},{x:450,y:980},
      ].map(({x,y},i) => (
        <g key={`mm${i}`}>
          <circle cx={x} cy={y} r="20" stroke={color} strokeWidth="1.5" fill="none" />
          {Array.from({length:8}).map((_,j) => (
            <ellipse key={j} cx={x} cy={y} rx="4" ry="14" fill={color} opacity="0.3"
              transform={`rotate(${j*45} ${x} ${y})`} />
          ))}
          <circle cx={x} cy={y} r="5" fill={color} opacity="0.4" />
        </g>
      ))}

      {/* ── Center large mandala ── */}
      <g opacity="0.35">
        <circle cx="397" cy="561" r="120" stroke={color} strokeWidth="2.5" fill="none" />
        <circle cx="397" cy="561" r="105" stroke={color} strokeWidth="1.5" fill="none" />
        {Array.from({length:16}).map((_,i) => (
          <ellipse key={i} cx="397" cy="561" rx="12" ry="55" fill={color} opacity="0.25"
            transform={`rotate(${i*22.5} 397 561)`} />
        ))}
        {Array.from({length:16}).map((_,i) => (
          <ellipse key={`in${i}`} cx="397" cy="561" rx="8" ry="35" fill={color} opacity="0.35"
            transform={`rotate(${i*22.5+11.25} 397 561)`} />
        ))}
        <circle cx="397" cy="561" r="55" stroke={color} strokeWidth="2" fill="none" />
        <circle cx="397" cy="561" r="22" fill={color} opacity="0.25" />
        <circle cx="397" cy="561" r="8" fill={color} opacity="0.4" />
        {Array.from({length:32}).map((_,i) => {
          const a = (i*11.25*Math.PI)/180;
          return <circle key={`d${i}`} cx={397+112*Math.cos(a)} cy={561+112*Math.sin(a)} r="3.5" fill={color} />;
        })}
      </g>
    </svg>
  );
}

/* ─── LUXURY: Large damask, fleur-de-lis tiled across page ─── */
export function LuxuryDecor({ color }: DecorProps) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 794 1123" fill="none" preserveAspectRatio="none" style={{ opacity: 0.09 }}>
      {/* ── Large corner scrollwork ── */}
      <path d="M80 0 Q80 40 50 65 Q20 90 40 125 Q60 160 30 185" stroke={color} strokeWidth="3.5" fill="none" />
      <path d="M0 80 Q40 80 65 50 Q90 20 125 40 Q160 60 185 30" stroke={color} strokeWidth="3.5" fill="none" />
      <path d="M50 50 Q80 45 85 75 Q90 105 60 110 Q30 115 40 85 Q50 55 50 50 Z" fill={color} opacity="0.4" />
      <circle cx="40" cy="125" r="6" fill={color} />
      <circle cx="125" cy="40" r="6" fill={color} />

      <path d="M714 0 Q714 40 744 65 Q774 90 754 125 Q734 160 764 185" stroke={color} strokeWidth="3.5" fill="none" />
      <path d="M794 80 Q754 80 729 50 Q704 20 669 40 Q634 60 609 30" stroke={color} strokeWidth="3.5" fill="none" />
      <path d="M744 50 Q714 45 709 75 Q704 105 734 110 Q764 115 754 85 Q744 55 744 50 Z" fill={color} opacity="0.4" />

      <path d="M80 1123 Q80 1083 50 1058 Q20 1033 40 998 Q60 963 30 938" stroke={color} strokeWidth="3.5" fill="none" />
      <path d="M0 1043 Q40 1043 65 1073 Q90 1103 125 1083" stroke={color} strokeWidth="3.5" fill="none" />

      <path d="M714 1123 Q714 1083 744 1058 Q774 1033 754 998 Q734 963 764 938" stroke={color} strokeWidth="3.5" fill="none" />
      <path d="M794 1043 Q754 1043 729 1073 Q704 1103 669 1083" stroke={color} strokeWidth="3.5" fill="none" />

      {/* ── Large damask leaf pattern on sides ── */}
      {[120,240,360,480,600,720,840,960].map(y => (
        <g key={`dl${y}`}>
          <path d={`M20 ${y} Q40 ${y-30} 20 ${y-65} Q0 ${y-30} 20 ${y}`} fill={color} />
          <path d={`M20 ${y} Q40 ${y+30} 20 ${y+65} Q0 ${y+30} 20 ${y}`} fill={color} opacity="0.5" />
          <circle cx="20" cy={y} r="4" fill={color} opacity="0.7" />
        </g>
      ))}
      {[120,240,360,480,600,720,840,960].map(y => (
        <g key={`dr${y}`}>
          <path d={`M774 ${y} Q794 ${y-30} 774 ${y-65} Q754 ${y-30} 774 ${y}`} fill={color} />
          <path d={`M774 ${y} Q794 ${y+30} 774 ${y+65} Q754 ${y+30} 774 ${y}`} fill={color} opacity="0.5" />
          <circle cx="774" cy={y} r="4" fill={color} opacity="0.7" />
        </g>
      ))}

      {/* ── Large fleur-de-lis motifs tiled across page ── */}
      {[
        {x:160,y:220},{x:400,y:200},{x:640,y:230},
        {x:250,y:420},{x:550,y:440},
        {x:160,y:600},{x:400,y:580},{x:640,y:610},
        {x:250,y:780},{x:550,y:800},
        {x:160,y:960},{x:400,y:940},{x:640,y:970},
      ].map(({x,y},i) => (
        <g key={`fl${i}`}>
          <path d={`M${x} ${y-25} Q${x+10} ${y-8} ${x} ${y+5} Q${x-10} ${y-8} ${x} ${y-25}`} fill={color} />
          <path d={`M${x} ${y+5} Q${x+18} ${y-4} ${x+28} ${y-22}`} stroke={color} strokeWidth="2.5" fill="none" />
          <path d={`M${x} ${y+5} Q${x-18} ${y-4} ${x-28} ${y-22}`} stroke={color} strokeWidth="2.5" fill="none" />
          <circle cx={x+28} cy={y-22} r="4" fill={color} />
          <circle cx={x-28} cy={y-22} r="4" fill={color} />
          <path d={`M${x} ${y+5} Q${x+3} ${y+25} ${x} ${y+40}`} stroke={color} strokeWidth="2" fill="none" />
          <path d={`M${x-10} ${y+15} Q${x-18} ${y+28} ${x-20} ${y+42}`} stroke={color} strokeWidth="1.5" fill="none" />
          <path d={`M${x+10} ${y+15} Q${x+18} ${y+28} ${x+20} ${y+42}`} stroke={color} strokeWidth="1.5" fill="none" />
          <circle cx={x} cy={y+8} r="5" fill={color} opacity="0.6" />
        </g>
      ))}

      {/* ── Scattered diamonds ── */}
      {[
        {x:300,y:140},{x:500,y:160},{x:350,y:340},{x:450,y:320},
        {x:280,y:520},{x:520,y:540},{x:330,y:700},{x:470,y:720},
        {x:310,y:880},{x:490,y:860},{x:400,y:1060},
      ].map(({x,y},i) => (
        <path key={`dd${i}`} d={`M${x} ${y-8} L${x+8} ${y} L${x} ${y+8} L${x-8} ${y} Z`} fill={color} />
      ))}

      {/* ── Center large fleur-de-lis watermark ── */}
      <g opacity="0.3">
        <path d="M397 490 Q415 530 397 555 Q379 530 397 490" fill={color} />
        <path d="M397 555 Q430 540 460 510 Q450 550 425 575 Q397 595 397 555" fill={color} />
        <path d="M397 555 Q364 540 334 510 Q344 550 369 575 Q397 595 397 555" fill={color} />
        <path d="M397 595 Q403 635 397 670 Q391 635 397 595" fill={color} />
        <path d="M378 610 Q360 630 352 660 L397 640 Z" fill={color} opacity="0.5" />
        <path d="M416 610 Q434 630 442 660 L397 640 Z" fill={color} opacity="0.5" />
        <circle cx="397" cy="580" r="12" fill={color} />
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
