import { useMemo } from 'react';

const BAUBLES = ['#ff4d5e', '#ff9a3c', '#45cdff', '#7ff0c0', '#ffffff'];
const TIERS = [
  [44, 104, 42],
  [78, 156, 58],
  [112, 210, 75],
  [146, 262, 92],
];

function makeRng(seed) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function build(lightCount, seed, full) {
  const rand = makeRng(seed);
  let n = 0;
  const nextColor = () => BAUBLES[n++ % BAUBLES.length];

  // Garland swags: one on the top tier, two on each tier below.
  const swags = [];
  TIERS.forEach((t, i) => {
    const fractions = i === 0 ? [0.7] : [0.38, 0.78];
    fractions.forEach((f) => {
      const y = t[0] + (t[1] - t[0]) * f;
      const hy = f * t[2] * 0.92;
      const x1 = 100 - hy;
      const x2 = 100 + hy;
      const cy = y + 16;
      const d = `M${x1.toFixed(1)},${y.toFixed(1)} Q100,${cy.toFixed(1)} ${x2.toFixed(1)},${y.toFixed(1)}`;
      swags.push({ d, x1, x2, y, cy });
    });
  });

  // Baubles hanging along each swag.
  const baubles = [];
  swags.forEach((s) => {
    [0.12, 0.5, 0.88].forEach((u) => {
      const a = (1 - u) * (1 - u);
      const b = 2 * (1 - u) * u;
      const c = u * u;
      const bx = a * s.x1 + b * 100 + c * s.x2;
      const by = a * s.y + b * s.cy + c * s.y;
      baubles.push({ x: bx, y: by + 4, r: full ? 4.8 : 4.4, color: nextColor() });
    });
  });

  // Loose baubles inside the branches.
  const extra = full ? 8 : 4;
  for (let e = 0; e < extra; e++) {
    const t = TIERS[1 + Math.floor(rand() * 3)];
    const y = t[0] + 30 + rand() * (t[1] - t[0] - 38);
    const half = ((y - t[0]) / (t[1] - t[0])) * t[2] * 0.7;
    const x = 100 + (rand() * 2 - 1) * half;
    const r = 3.6 + rand() * 1.6;
    baubles.push({ x, y, r, color: nextColor() });
  }

  // Star points.
  let star = '';
  for (let i = 0; i < 10; i++) {
    const ang = -Math.PI / 2 + (i * Math.PI) / 5;
    const rad = i % 2 ? 6 : 14;
    star += `${(100 + Math.cos(ang) * rad).toFixed(1)},${(30 + Math.sin(ang) * rad).toFixed(1)} `;
  }

  // Twinkling lights.
  const lights = [];
  for (let j = 0; j < lightCount; j++) {
    const tt = TIERS[Math.floor(rand() * TIERS.length)];
    const ly = tt[0] + 14 + rand() * (tt[1] - tt[0] - 20);
    const lh = ((ly - tt[0]) / (tt[1] - tt[0])) * tt[2] * 0.82;
    const lx = 100 + (rand() * 2 - 1) * lh;
    const r = 1.6 + rand() * 1.2;
    const delay = rand() * 2.6;
    const dur = 1.8 + rand() * 1.8;
    lights.push({ cx: lx, cy: ly, r, delay, dur, tone: j % 2 ? 'g' : 'i' });
  }

  return { swags, baubles, star: star.trim(), lights };
}

function Gift({ x, y, w, h, color, ribbon }) {
  return (
    <>
      <rect x={x} y={y} width={w} height={h} rx="2" fill={color} />
      <rect x={x + w / 2 - 2} y={y} width="4" height={h} fill={ribbon} />
      <rect x={x} y={y + h * 0.34} width={w} height="3" fill={ribbon} />
    </>
  );
}

export default function ChristmasTree({ width = '100%', lights = 22, seed = 7, full = false }) {
  const data = useMemo(() => build(lights, seed, full), [lights, seed, full]);

  return (
    <svg viewBox="0 0 200 300" width={width} role="presentation" focusable="false">
      <rect className="t-trunk" x="92" y="256" width="16" height="22" rx="2" />
      {TIERS.map((t) => (
        <polygon
          key={t[0]}
          className="t-body"
          points={`100,${t[0]} ${100 + t[2]},${t[1]} ${100 - t[2]},${t[1]}`}
        />
      ))}
      {full && (
        <>
          <Gift x={30} y={264} w={34} h={24} color="#ff4d5e" ribbon="#ffffff" />
          <Gift x={134} y={270} w={30} h={18} color="#45cdff" ribbon="#ff6b5a" />
          <Gift x={168} y={278} w={22} h={10} color="#7ff0c0" ribbon="#ffffff" />
        </>
      )}
      {data.swags.map((s) => (
        <g key={s.d}>
          <path className="ribbon" d={s.d} />
          <path className="ribbon-hi" d={s.d} />
        </g>
      ))}
      {data.baubles.map((b, i) => (
        <g key={i}>
          <rect x={(b.x - 1.3).toFixed(1)} y={(b.y - b.r - 2.2).toFixed(1)} width="2.6" height="2.6" rx="0.6" fill="#d7e6ff" />
          <circle cx={b.x.toFixed(1)} cy={b.y.toFixed(1)} r={b.r.toFixed(1)} fill={b.color} />
          <circle
            className="bauble-hi"
            cx={(b.x - b.r * 0.32).toFixed(1)}
            cy={(b.y - b.r * 0.32).toFixed(1)}
            r={(b.r * 0.28).toFixed(1)}
          />
        </g>
      ))}
      {full && (
        <>
          <ellipse className="bow" cx="90" cy="52" rx="10" ry="5" transform="rotate(-24 90 52)" />
          <ellipse className="bow" cx="110" cy="52" rx="10" ry="5" transform="rotate(24 110 52)" />
          <circle className="bow-knot" cx="100" cy="54" r="3.4" />
        </>
      )}
      <polygon className="t-star" points={data.star} />
      {data.lights.map((l, i) => (
        <circle
          key={i}
          className={`light ${l.tone}`}
          cx={l.cx.toFixed(1)}
          cy={l.cy.toFixed(1)}
          r={l.r.toFixed(1)}
          style={{ animationDelay: `${l.delay.toFixed(2)}s`, animationDuration: `${l.dur.toFixed(2)}s` }}
        />
      ))}
    </svg>
  );
}
