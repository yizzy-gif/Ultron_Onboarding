/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — Agent Mark.
   The Teambridge AI agent's generative identity mark, ported from the "Ultron
   Motion Identity" canvas study. A small <canvas> that draws a 3D sphere of
   cells riding tilted rings (orbit), a connected presence sphere (circle), a
   radial spark (lines), and more. Used for the loaders (orbit) and identity
   slots (circle) in place of the generic AILoader.

   `tone="auto"` is the default — it follows the page theme: the light palette
   (dark-slate cells, glow off — pal('light')) on light surfaces, and the dark
   palette (glowing light cells — pal('dark')) on dark ones. The choice is made
   at draw time by sampling the resolved --color-bg-primary luminance off the
   canvas element, so it honours both the prefers-color-scheme media query and
   any manual .light/.dark override. Pass an explicit tone to force a palette.
   ───────────────────────────────────────────────────────────────────────────── */

import { useEffect, useRef, useState } from 'react';

export type AgentMarkKind = 'orbit' | 'orbit2d' | 'circle' | 'lines' | 'magnetic' | 'magnetic2d' | 'pulse' | 'bands';
/** `auto` (default) follows the page theme: the light palette (dark cells, no
 *  glow) on light surfaces, the dark palette (glowing light cells) on dark
 *  ones. The explicit tones force a fixed palette regardless of theme. */
export type AgentMarkTone = 'auto' | 'light' | 'dark' | 'onblack' | 'tint';
export type AgentMarkState = 'active' | 'idle' | 'static';

interface AgentMarkProps {
  /** Which mark to draw. `orbit` = processing/live, `circle` = presence/identity. */
  mark?: AgentMarkKind;
  /** Rendered px (square). */
  size?: number;
  /** Palette. `light` (default) = dark cells, no glow — for light surfaces. */
  tone?: AgentMarkTone;
  /** `active` animates, `idle` slows, `static` paints one frozen frame. */
  state?: AgentMarkState;
  /** Animation speed multiplier (0.4–2). */
  motionSpeed?: number;
  /** Accent for glow tones. */
  accent?: string;
  /** Overrides the mark's cell/core fill with any CSS color (hex, rgb(), or a
   *  `var(--token)`). Resolved to RGB for the canvas. Use to tint a mark to a
   *  semantic token — e.g. a settled case in `var(--color-content-disabled)`. */
  color?: string;
  /** Soft halo / drop-shadow behind the core (default true). Set false for dense
   *  nav rows where the glow muddies the mark against the row background. */
  coreHalo?: boolean;
  /** When true, the core blooms into a blurred warm→magenta→violet gradient
   *  instead of the mono fill — an alert state (e.g. a risk just detected). */
  coreGradient?: boolean;
  /** `circle` mark only — how many connection streams (the hairline links that
   *  arc between cells) to draw. Omit for the default (5 hero / 4 nav). `0`
   *  leaves just the core, cell sphere, and flowing particle swarm — no lines. */
  streamCount?: number;
  /** `magnetic` mark only — progressive build: how many of the globe's cells are
   *  revealed. `0` leaves just the breathing core; raising the number appends
   *  cells one after another, each emerging from the core and settling onto the
   *  sphere surface. Omit for the classic full globe (all cells, no build). */
  cellCount?: number;
  'aria-label'?: string;
  className?: string;
}

type Pal = { dot: string; core: string; accent: string; glow: boolean };

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const smooth01 = (x: number) => { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); };
// smaller marks need proportionally larger cells to stay legible
const cellK = (sz: number) => (sz >= 48 ? 1 : sz >= 32 ? 1.2 : sz >= 24 ? 1.5 : sz >= 20 ? 1.85 : 2.3);

// Deterministic pseudo-random in [0,1) — gives every particle a stable layout
// across frames and mounts (no Math.random), so the marks animate smoothly and
// paint identically every frame / on every instance.
function hash(n: number): number {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function hexRGB(hex: string) {
  const h = (hex || '#96B9FF').replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  return ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255);
}

// Resolve any CSS color (hex, rgb(), or var(--token)) to an "r,g,b" string for
// the canvas. CSS variables are looked up off the element; the result is then
// normalised through the 2D context's color parser.
function cssToRGB(ctx: CanvasRenderingContext2D, el: HTMLElement, color: string): string {
  let value = color.trim();
  const varMatch = value.match(/var\(\s*(--[^,)]+)/);
  if (varMatch) value = getComputedStyle(el).getPropertyValue(varMatch[1]).trim() || value;
  if (value.startsWith('#')) return hexRGB(value);
  // Let the canvas normalise named/rgb()/hsl() colors, then pull the channels.
  ctx.fillStyle = '#000';
  ctx.fillStyle = value;
  const resolved = ctx.fillStyle as string;
  if (resolved.startsWith('#')) return hexRGB(resolved);
  const nums = resolved.match(/[\d.]+/g);
  return nums && nums.length >= 3 ? `${+nums[0]},${+nums[1]},${+nums[2]}` : '26,30,38';
}

// Watch the OS color-scheme preference so `auto` marks repaint when the theme
// flips. The actual light/dark decision is made at draw time by sampling the
// resolved surface token (which also honours manual .light/.dark overrides);
// this just supplies a re-render trigger.
function usePrefersDark(): boolean {
  const [dark, setDark] = useState(() => {
    try { return window.matchMedia('(prefers-color-scheme: dark)').matches; } catch { return false; }
  });
  useEffect(() => {
    let mq: MediaQueryList;
    try { mq = window.matchMedia('(prefers-color-scheme: dark)'); } catch { return; }
    const onChange = (e: MediaQueryListEvent) => setDark(e.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);
  return dark;
}

// Relative luminance (0 dark → 1 light) of an "r,g,b" channel string.
function luminance(rgb: string): number {
  const [r, g, b] = rgb.split(',').map(Number);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

function pal(tone: AgentMarkTone, accent: string): Pal {
  if (tone === 'light') return { dot: '26,30,38', core: '34,40,52', accent: '68,108,255', glow: false };
  if (tone === 'onblack') return { dot: '237,243,252', core: '255,255,255', accent, glow: true };
  if (tone === 'tint') return { dot: '233,240,255', core: '255,255,255', accent: '176,201,255', glow: true };
  return { dot: '228,238,252', core: '248,251,255', accent, glow: true };
}

interface Ctx {
  ctx: CanvasRenderingContext2D; w: number; h: number; dpr: number; size: number; state: AgentMarkState; coreHalo: boolean; alert?: number; streamCount?: number;
  /** `magnetic` progressive build — how many cells are revealed (undefined = all). */
  cellCount?: number;
  /** Per-cell birth stamps (wall-clock seconds), owned by the component and
   *  mutated by drawMagnetic as new cells are revealed. Undefined = no
   *  emergence animation (revealed cells paint settled — reduced motion). */
  cellBirths?: Map<number, number>;
  /** Wall-clock seconds for the current frame, driving the emergence easing on
   *  its own clock so `motionSpeed` / the synthetic first frame can't warp it. */
  emergeNow?: number;
}

// The alert palette. The core runs orange-red at the middle out to yellow at the
// edge (a hot sun). The cells/lines run the SAME red-orange → yellow sweep,
// mapped by radial distance so the whole mark shares one gradient — but a few
// shades darker, so the structure reads against the brighter core.
const ALERT_CORE = ['234,54,38', '246,112,44', '252,172,54', '255,212,76']; // center (orange-red) → edge (yellow)
const ALERT_DOT_A = '176,58,32';  // cells/lines, near core: deep red-orange
const ALERT_DOT_B = '198,158,52'; // cells/lines, at rim: deep yellow

// Linear blend of two "r,g,b" channel strings → an "r,g,b" string.
function mixRGB(a: string, b: string, t: number): string {
  const pa = a.split(',').map(Number), pb = b.split(',').map(Number);
  return pa.map((v, i) => Math.round(v + (pb[i] - v) * t)).join(',');
}

function drawCore(e: Ctx, T: number, P: Pal) {
  const { ctx, w, h } = e, cx = w / 2, cy = h / 2, R = Math.min(w, h) * 0.39;
  const coreR = R * 0.2 * (0.9 + 0.14 * Math.sin(T * 1.5));
  const small = e.size < 24;
  // Eased alert amount (0 → mono, 1 → ember). Everything below interpolates by
  // it, so the core MORPHS in place (single draw) rather than crossfading two
  // layers — which keeps the mono→orange transition smooth and flicker-free.
  const alert = clamp(e.alert ?? 0, 0, 1);
  const lerp = (a: number, b: number) => a + (b - a) * alert;
  const pulse = 0.85 + 0.15 * Math.sin(T * 2.2);

  // glow / drop-shadow halo — removed at icon sizes under 24px, or when the
  // caller opts out (coreHalo=false) for dense surfaces like nav rows. Its stops
  // blend from the mono core color toward the ember orange as the alert rises.
  if (!small && e.coreHalo) {
    ctx.save();
    if (P.glow && alert < 1) {
      // dark-surface glow halo (alert never fires here, so fade it with 1-alert)
      ctx.globalAlpha = 1 - alert;
      const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR * 3);
      cg.addColorStop(0, 'rgba(' + P.core + ',0.55)');
      cg.addColorStop(1, 'rgba(' + P.accent + ',0)');
      ctx.fillStyle = cg; ctx.beginPath(); ctx.arc(cx, cy, coreR * 3, 0, 6.2832); ctx.fill();
    } else if (!P.glow) {
      const hr = coreR * lerp(3.2, 3);
      const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, hr);
      cg.addColorStop(0, 'rgba(' + mixRGB(P.core, ALERT_CORE[1], alert) + ',' + lerp(0.34, 0.85 * pulse) + ')');
      cg.addColorStop(0.5, 'rgba(' + mixRGB(P.core, ALERT_CORE[2], alert) + ',' + lerp(0.13, 0.42 * pulse) + ')');
      cg.addColorStop(1, 'rgba(' + mixRGB(P.core, ALERT_CORE[3], alert) + ',0)');
      ctx.fillStyle = cg; ctx.beginPath(); ctx.arc(cx, cy, hr, 0, 6.2832); ctx.fill();
    }
    ctx.restore();
  }

  // Core orb — one blurred radial gradient whose stops + radius + blur all
  // interpolate from the mono fill (flat P.core) to the sun gradient. Centered
  // and lightly blurred when lit, so the orange-red middle and yellow rim read
  // as distinct bands rather than washing into a uniform orange.
  const monoA = P.glow ? 1 : 0.95;
  const cr = Math.max(0.8, coreR * lerp(1, 1.5));
  const off = coreR * 0.1 * alert; // near-centered (sun), with a faint lift
  ctx.save();
  ctx.filter = 'blur(' + Math.max(0.4, coreR * lerp(0.22, 0.3)).toFixed(2) + 'px)';
  const cg = ctx.createRadialGradient(cx - off, cy - off, 0, cx, cy, cr);
  cg.addColorStop(0, 'rgba(' + mixRGB(P.core, ALERT_CORE[0], alert) + ',' + lerp(monoA, 1) + ')');
  cg.addColorStop(0.5, 'rgba(' + mixRGB(P.core, ALERT_CORE[1], alert) + ',' + lerp(monoA, 1) + ')');
  cg.addColorStop(0.82, 'rgba(' + mixRGB(P.core, ALERT_CORE[2], alert) + ',' + lerp(monoA, 0.97) + ')');
  cg.addColorStop(1, 'rgba(' + mixRGB(P.core, ALERT_CORE[3], alert) + ',' + lerp(monoA, 0.72) + ')');
  ctx.fillStyle = cg; ctx.beginPath(); ctx.arc(cx, cy, cr, 0, 6.2832); ctx.fill();
  ctx.restore();
}

// Orbit — processing / working: cells ride tilted great-circle rings around a
// luminous core, each trailing a long comet tail that wraps most of its ring.
// The crisp, low-element UI-mark form (per the "Agent marks for UI" spec): two
// counter-rotating rings, no background swarm or guide strokes — so it reads as
// a clean orbit at icon scale and a calm globe at hero scale. Palette-driven
// (P), so it honours light/dark + color overrides.
function drawOrbit(e: Ctx, T: number, P: Pal) {
  const { ctx, w: W, h: H } = e, cx = W / 2, cy = H / 2, R = Math.min(W, H) * 0.39;
  const active = e.state !== 'idle';
  // each ring is a great circle whose plane is tilted (inc) and spun about Y (az)
  const ringDefs: [number, number][] = [[1.35, 0.3], [1.05, 2.4]];
  const yaw = T * (active ? 0.5 : 0.16);            // the whole globe spins
  const tilt = 0.42, ct = Math.cos(tilt), st = Math.sin(tilt);
  const cy0 = Math.cos(yaw), sy0 = Math.sin(yaw);
  const RR = R * 0.96;
  // project a globe-local unit point: spin about Y, then tilt about X, perspective
  const proj = (x: number, y: number, z: number) => {
    const X = x * cy0 + z * sy0, Z = -x * sy0 + z * cy0, Y = y;
    const Y2 = Y * ct - Z * st, Z2 = Y * st + Z * ct;
    const d = (Z2 + 1) / 2, persp = 0.82 + 0.18 * d;
    return { x: cx + X * RR * persp, y: cy + Y2 * RR * persp, d };
  };
  const ringPt = (theta: number, inc: number, az: number): [number, number, number] => {
    const x = Math.cos(theta), y = Math.sin(theta) * Math.cos(inc), z = Math.sin(theta) * Math.sin(inc);
    return [x * Math.cos(az) + z * Math.sin(az), y, -x * Math.sin(az) + z * Math.cos(az)];
  };

  ctx.save();
  ctx.globalCompositeOperation = P.glow ? 'lighter' : 'source-over';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  // Ring guides are drawn AS each cell's fading trail (100% at the cell → 0%
  // around the ring), so no separate guide stroke is needed.
  const SEG = e.size >= 24 ? 64 : 40;
  const cspd = active ? 0.9 : 0.3;                  // cells circle clockwise
  const NT = SEG;
  const span = 5.6;                                 // long comet tail wrapping most of the ring

  type Head = { ptOf: (a: number) => { x: number; y: number; d: number }; head: number; dir: number; hp: { x: number; y: number; d: number } };
  const heads: Head[] = [];
  for (let i = 0; i < ringDefs.length; i++) {
    const inc = ringDefs[i][0], az = ringDefs[i][1];
    const ptOf = (ang: number) => { const p3 = ringPt(ang, inc, az); return proj(p3[0], p3[1], p3[2]); };
    const dir = i % 2 ? 1 : -1;                     // adjacent rings circle opposite ways
    const head = i * 2.0 + dir * T * cspd;
    heads.push({ ptOf, head, dir, hp: ptOf(head) });
  }
  heads.sort((a, b) => a.hp.d - b.hp.d);            // far → near
  for (const h of heads) {
    const lw = Math.max(1.2, R * 0.05) * (0.75 + 0.35 * h.hp.d);
    // Fade along ARC LENGTH so the tail wraps most of the ring and still tapers
    // smoothly. Drawn source-over with butt caps + shared endpoints, so the fine
    // segments meet exactly — no beading, no jumping.
    const base = 0.66 * (0.45 + 0.55 * h.hp.d);
    ctx.save();
    ctx.globalCompositeOperation = 'source-over';
    ctx.lineCap = 'butt';
    ctx.lineWidth = lw;
    let pPrev = h.ptOf(h.head);
    for (let s = 1; s <= NT; s++) {
      const f = s / NT;                             // 0 at head .. 1 at tail
      const fade = 1 - f;
      const la = base * fade * fade;                // smooth quadratic falloff by arc length
      const p = h.ptOf(h.head - h.dir * f * span);
      if (la > 0.004) {
        ctx.strokeStyle = 'rgba(' + P.dot + ',' + la + ')';
        ctx.beginPath(); ctx.moveTo(pPrev.x, pPrev.y); ctx.lineTo(p.x, p.y); ctx.stroke();
      }
      pPrev = p;
    }
    ctx.restore();
    const r = Math.max(0.9, R * 0.062 * cellK(e.size) * (0.65 + 0.5 * h.hp.d));
    const al = 0.45 + 0.55 * h.hp.d;
    if (P.glow) {
      const bg = ctx.createRadialGradient(h.hp.x, h.hp.y, 0, h.hp.x, h.hp.y, r * 4.5);
      bg.addColorStop(0, 'rgba(' + P.accent + ',' + (0.3 * al) + ')');
      bg.addColorStop(1, 'rgba(' + P.accent + ',0)');
      ctx.fillStyle = bg; ctx.beginPath(); ctx.arc(h.hp.x, h.hp.y, r * 4.5, 0, 6.2832); ctx.fill();
    }
    ctx.fillStyle = 'rgba(' + P.dot + ',' + Math.min(1, al + 0.1) + ')';
    ctx.beginPath(); ctx.arc(h.hp.x, h.hp.y, r, 0, 6.2832); ctx.fill();
  }

  drawCore(e, T, P);
  ctx.restore();
}

// Orbit 2D — the flat-on variant of the orbit mark: a single concentric ring seen
// head-on, the cell circling in-plane (no globe tilt). Reads cleaner than the
// tilted globe at tiny sizes and in dense rows. Ported from the "Agent marks for
// UI" study. Palette-driven (P), so it honours light/dark + color overrides.
function drawOrbit2d(e: Ctx, T: number, P: Pal) {
  const { ctx, w: W, h: H } = e, cx = W / 2, cy = H / 2, R = Math.min(W, H) * 0.39;
  const active = e.state !== 'idle';
  const ringR = [R * 0.92];                          // single flat ring
  const rings = ringR.length;
  const perRing = 1;                                 // one head per ring
  const cspd = active ? 0.9 : 0.3;
  const NT = e.size >= 24 ? 56 : 36;
  ctx.save();
  ctx.globalCompositeOperation = P.glow ? 'lighter' : 'source-over';
  for (let i = 0; i < rings; i++) {
    const rad = ringR[i];
    const dir = i % 2 ? 1 : -1;                       // adjacent rings spin opposite ways
    const gapAng = 6.2832 / perRing;
    const span = Math.min(5.6, gapAng * 0.92);
    for (let j = 0; j < perRing; j++) {
      const head = i * 2.0 + dir * T * cspd + j * gapAng;
      const hx = cx + Math.cos(head) * rad, hy = cy + Math.sin(head) * rad;
      // fading trail along the ring (source-over butt segments, quadratic falloff)
      ctx.save();
      ctx.globalCompositeOperation = 'source-over';
      ctx.lineCap = 'butt';
      ctx.lineWidth = Math.max(1.2, R * 0.05);
      let px = hx, py = hy;
      for (let s = 1; s <= NT; s++) {
        const f = s / NT, la = 0.62 * (1 - f) * (1 - f);
        const a = head - dir * f * span;
        const x = cx + Math.cos(a) * rad, y = cy + Math.sin(a) * rad;
        if (la > 0.004) { ctx.strokeStyle = 'rgba(' + P.dot + ',' + la + ')'; ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(x, y); ctx.stroke(); }
        px = x; py = y;
      }
      ctx.restore();
      const r = Math.max(0.9, R * 0.062 * cellK(e.size));
      if (P.glow) {
        const bg = ctx.createRadialGradient(hx, hy, 0, hx, hy, r * 4.5);
        bg.addColorStop(0, 'rgba(' + P.accent + ',0.3)'); bg.addColorStop(1, 'rgba(' + P.accent + ',0)');
        ctx.fillStyle = bg; ctx.beginPath(); ctx.arc(hx, hy, r * 4.5, 0, 6.2832); ctx.fill();
      }
      ctx.fillStyle = 'rgba(' + P.dot + ',1)';
      ctx.beginPath(); ctx.arc(hx, hy, r, 0, 6.2832); ctx.fill();
    }
  }
  drawCore(e, T, P);
  ctx.restore();
}

function drawCircle(e: Ctx, T: number, P: Pal) {
  const { ctx, w, h, dpr } = e, cx = w / 2, cy = h / 2, R = Math.min(w, h) * 0.39;
  const active = e.state !== 'idle';
  // Cells + links run the core's red-orange→yellow sweep, keyed to each point's
  // radial distance from center (near core → red-orange, at rim → yellow), in a
  // darker scale. 0 alert → palette mono. `dotAt` returns the "r,g,b" for a point.
  const alertAmt = clamp(e.alert ?? 0, 0, 1);
  const rr = R * 0.82;
  const dotAt = (px: number, py: number) =>
    mixRGB(P.dot, mixRGB(ALERT_DOT_A, ALERT_DOT_B, clamp(Math.hypot(px - cx, py - cy) / rr, 0, 1)), alertAmt);
  // Hero scale (the Live-landing identity) paints the full, lush Circle: a dense
  // cell sphere with extra link streams, an atmospheric halo, and an orbiting
  // particle swarm. Smaller (nav) sizes keep the clean, lighter mark unchanged.
  const hero = e.size >= 120;
  const N = hero ? 22 : e.size >= 32 ? 10 : (e.size >= 20 ? 7 : 5);
  const yaw = active ? T * 0.55 : T * 0.22, cyaw = Math.cos(yaw), syaw = Math.sin(yaw);
  const tilt = 0.42, ct = Math.cos(tilt), stt = Math.sin(tilt);
  ctx.save();
  ctx.globalCompositeOperation = P.glow ? 'lighter' : 'source-over';
  // Faint atmospheric halo behind the sphere (glow palettes / dark surfaces only).
  if (hero && P.glow) {
    const halo = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 1.02);
    halo.addColorStop(0, 'rgba(' + P.accent + ',0.10)');
    halo.addColorStop(1, 'rgba(' + P.accent + ',0)');
    ctx.fillStyle = halo; ctx.beginPath(); ctx.arc(cx, cy, R * 1.02, 0, 6.2832); ctx.fill();
  }
  const cells: { x: number; y: number; d: number; k: number; vec: number[] }[] = [];
  for (let k = 0; k < N; k++) {
    const yy = 1 - (k + 0.5) / N * 2, ringr = Math.sqrt(Math.max(0, 1 - yy * yy)), phi = k * 2.39996;
    const px = Math.cos(phi) * ringr, py = yy, pz = Math.sin(phi) * ringr;
    const X = px * cyaw + pz * syaw, Zr = -px * syaw + pz * cyaw;
    const Y2 = py * ct - Zr * stt, Z2 = py * stt + Zr * ct;
    const d = (Z2 + 1) / 2, persp = 0.82 + 0.18 * d;
    cells.push({ x: cx + X * rr * persp, y: cy + Y2 * rr * persp, d, k, vec: [X, Y2, Z2] });
  }
  cells.sort((p, q) => p.d - q.d);
  const projV = (v: number[]) => { const dd = (v[2] + 1) / 2, ps = 0.82 + 0.18 * dd; return { x: cx + v[0] * rr * ps, y: cy + v[1] * rr * ps, d: dd }; };
  const slerp = (a: number[], b: number[], tt: number) => {
    let dot = a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; dot = clamp(dot, -1, 1);
    const om = Math.acos(dot);
    if (om < 1e-3) return [a[0], a[1], a[2]];
    const s = Math.sin(om), w0 = Math.sin((1 - tt) * om) / s, w1 = Math.sin(tt * om) / s;
    return [a[0] * w0 + b[0] * w1, a[1] * w0 + b[1] * w1, a[2] * w0 + b[2] * w1];
  };
  const byK: Record<number, { x: number; y: number; d: number; k: number; vec: number[] }> = {};
  for (const c of cells) byK[c.k] = c;
  const hopRate = active ? 1.4 : 0.5;
  const phase = T * hopRate, hopN = Math.floor(phase), frac = phase - hopN;
  const VIS = 5, ARC = 12;
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  // Connection streams — the hairline links arcing between cells. Callers can
  // cap how many draw via `streamCount` (0 → none, for the "core + particles"
  // look); omitting it keeps the default of 5 (hero) / 4 (nav).
  const STREAM_SEEDS = [1.7, 9.3, 21.5, 34.8, 48.2];
  const streamN = clamp(Math.round(e.streamCount ?? (hero ? 5 : 4)), 0, STREAM_SEEDS.length);
  const streams = STREAM_SEEDS.slice(0, streamN).map(seed => ({ seed }));
  for (const stream of streams) {
    const ix = (i: number) => { const x = Math.sin(i * 12.9898 + stream.seed) * 43758.5453; return Math.floor((x - Math.floor(x)) * N); };
    const nodeAt = (i: number) => { let a = ix(i); if (a === ix(i - 1)) a = (a + 1) % N; return byK[a]; };
    for (let a = VIS - 1; a >= 0; a--) {
      const i = hopN - a; if (i < 0) continue;
      const A = nodeAt(i), Bn = nodeAt(i + 1); if (!A || !Bn || A === Bn) continue;
      const p = (a === 0) ? frac : 1;
      const tip = projV(slerp(A.vec, Bn.vec, p));
      const dmid = (A.d + tip.d) / 2;
      const ageFade = (a === 0) ? 1 : clamp(1 - (a - 1 + frac) / (VIS - 1), 0, 1);
      const la = (P.glow ? 0.6 : 0.72) * ageFade * (0.4 + 0.6 * dmid);
      if (la < 0.02) continue;
      const lg = ctx.createLinearGradient(A.x, A.y, tip.x, tip.y);
      lg.addColorStop(0, 'rgba(' + dotAt(A.x, A.y) + ',0)');
      lg.addColorStop(1, 'rgba(' + dotAt(tip.x, tip.y) + ',' + la + ')');
      ctx.strokeStyle = lg;
      // Hero matches the identity file's hairline links (R*0.018); nav keeps its
      // heavier line so the mark still reads at small sizes.
      ctx.lineWidth = (hero ? Math.max(1.1 * dpr, R * 0.018) : Math.max(1.2, R * 0.045)) * (0.7 + 0.4 * dmid);
      ctx.beginPath();
      for (let s = 0; s <= ARC; s++) {
        const v = projV(slerp(A.vec, Bn.vec, p * (s / ARC)));
        if (s === 0) ctx.moveTo(v.x, v.y); else ctx.lineTo(v.x, v.y);
      }
      ctx.stroke();
    }
  }
  for (const c of cells) {
    const tw = 0.5 + 0.5 * Math.sin(T * 2.0 - c.k * 0.9);
    const b = (0.18 + 0.82 * c.d) * (0.62 + 0.38 * tw);
    // Hero matches the identity file's small dpr-based cells; nav keeps its
    // larger R-relative dots so the sphere reads at small sizes.
    const r = hero
      ? Math.max(0.5, (0.9 + 0.9 * c.d) * dpr * (0.85 + 0.15 * tw))
      : R * 0.058 * cellK(e.size) * (0.6 + 0.5 * c.d);
    if (P.glow) {
      const bloomR = r * 4;
      const g = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, bloomR);
      g.addColorStop(0, 'rgba(' + P.accent + ',' + (0.24 * b) + ')');
      g.addColorStop(1, 'rgba(' + P.accent + ',0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(c.x, c.y, bloomR, 0, 6.2832); ctx.fill();
    }
    ctx.fillStyle = 'rgba(' + dotAt(c.x, c.y) + ',' + (0.32 + 0.68 * b) + ')';
    ctx.beginPath(); ctx.arc(c.x, c.y, Math.max(0.9, r), 0, 6.2832); ctx.fill();
  }

  // Orbiting particle swarm — hero only (shared with the Lines mark so the two
  // identity forms read as one family).
  if (hero) drawSwarm(e, T, P, dotAt);

  drawCore(e, T, P);
  ctx.restore();
}

// Orbiting particle swarm — the Circle identity's signature drift of cells
// around the core. Hero scale only; deterministic (hash, no RNG) so it animates
// smoothly and paints identically across frames and instances. Shared by the
// Circle and Lines marks (`dotAt` supplies each point's fill so Circle's alert
// sweep keeps working; Lines passes its flat palette dot). Expects the caller's
// save/composite state — call inside the mark's own ctx.save() block.
function drawSwarm(e: Ctx, T: number, P: Pal, dotAt: (x: number, y: number) => string) {
  const { ctx, w, h, dpr } = e, cx = w / 2, cy = h / 2, R = Math.min(w, h) * 0.39;
  const active = e.state !== 'idle';
  const sw = active ? 1 : 0.4;
  for (let k = 0; k < 46; k++) {
    const dir = hash(k * 5.1) < 0.5 ? -1 : 1;
    const ang = hash(k * 1.7) * 6.2832 + T * (0.3 + hash(k * 3.1) * 0.6) * dir * sw;
    const wob = R * (0.04 + 0.05 * hash(k * 4.7)) * Math.sin(T * (0.8 + hash(k * 6) * 1.0) + hash(k * 7) * 6.28);
    const off = R * (0.5 + hash(k * 2.3) * 0.5) + wob;
    const x = cx + Math.cos(ang) * off, y = cy + Math.sin(ang) * off;
    const tw = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(T * (1.4 + hash(k) * 2) + hash(k * 2) * 6.28));
    const r = Math.max(0.5, (0.4 + hash(k * 8) * 1.0) * dpr * (0.55 + 0.6 * tw));
    if (P.glow) {
      const bloomR = r * 6;
      const bg = ctx.createRadialGradient(x, y, 0, x, y, bloomR);
      bg.addColorStop(0, 'rgba(' + P.accent + ',' + (tw * 0.18) + ')');
      bg.addColorStop(1, 'rgba(' + P.accent + ',0)');
      ctx.fillStyle = bg; ctx.beginPath(); ctx.arc(x, y, bloomR, 0, 6.2832); ctx.fill();
    }
    ctx.fillStyle = 'rgba(' + dotAt(x, y) + ',' + (tw * (P.glow ? 0.8 : 0.42)) + ')';
    ctx.beginPath(); ctx.arc(x, y, r, 0, 6.2832); ctx.fill();
  }
}

function drawLines(e: Ctx, T: number, P: Pal) {
  const { ctx, w, h, dpr } = e, cx = w / 2, cy = h / 2, R = Math.min(w, h) * 0.39;
  const active = e.state !== 'idle';
  const N = e.size >= 32 ? 11 : 7;
  const inner = R * 0.12, gap = R * 0.12;
  const breath = smooth01(0.5 + 0.5 * Math.sin(T * (active ? 1.0 : 0.55)));
  const ev = active ? (0.34 + 0.66 * breath) : (0.5 + 0.12 * breath);
  const lw = Math.max(1 * dpr, R * 0.052);
  const yaw = -T * (active ? 0.5 : 0.16), cyaw = Math.cos(yaw), syaw = Math.sin(yaw);
  const tilt = 0.42, ct = Math.cos(tilt), stt = Math.sin(tilt);
  ctx.save();
  ctx.globalCompositeOperation = P.glow ? 'lighter' : 'source-over';
  ctx.lineCap = 'round';
  const L = R * (0.52 + 0.44 * ev), Ls = Math.max(inner + lw, L - gap);
  const spokes: { x0: number; y0: number; x1: number; y1: number; cx2: number; cy2: number; d: number; shim: number }[] = [];
  for (let k = 0; k < N; k++) {
    const yy = 1 - (k + 0.5) / N * 2, rr = Math.sqrt(Math.max(0, 1 - yy * yy)), phi = k * 2.39996;
    const dx = Math.cos(phi) * rr, dy = yy, dz = Math.sin(phi) * rr;
    const X = dx * cyaw + dz * syaw, Zr = -dx * syaw + dz * cyaw;
    const Y2 = dy * ct - Zr * stt, Z2 = dy * stt + Zr * ct;
    const d = (Z2 + 1) / 2, persp = 0.82 + 0.18 * d;
    const shim = 0.5 + 0.5 * Math.sin(T * 1.6 + k * 1.3);
    spokes.push({ x0: cx + X * inner * persp, y0: cy + Y2 * inner * persp, x1: cx + X * Ls * persp, y1: cy + Y2 * Ls * persp, cx2: cx + X * L * persp, cy2: cy + Y2 * L * persp, d, shim });
  }
  spokes.sort((a, b) => a.d - b.d);
  for (const s of spokes) {
    const la = (active ? (0.4 + 0.45 * ev) : 0.6) * (0.4 + 0.6 * s.d) * (0.78 + 0.22 * s.shim);
    const lg = ctx.createLinearGradient(s.x0, s.y0, s.x1, s.y1);
    lg.addColorStop(0, 'rgba(' + P.dot + ',' + la + ')');
    lg.addColorStop(1, 'rgba(' + P.accent + ',0)');
    ctx.strokeStyle = lg; ctx.lineWidth = lw * (0.7 + 0.5 * s.d);
    ctx.beginPath(); ctx.moveTo(s.x0, s.y0); ctx.lineTo(s.x1, s.y1); ctx.stroke();
    const tipR = Math.max(0.9, R * 0.058 * cellK(e.size) * (0.85 + 0.3 * ev) * (0.6 + 0.5 * s.d));
    if (P.glow) {
      const bg = ctx.createRadialGradient(s.cx2, s.cy2, 0, s.cx2, s.cy2, tipR * 5);
      bg.addColorStop(0, 'rgba(' + P.accent + ',' + (0.26 * la) + ')');
      bg.addColorStop(1, 'rgba(' + P.accent + ',0)');
      ctx.fillStyle = bg; ctx.beginPath(); ctx.arc(s.cx2, s.cy2, tipR * 5, 0, 6.2832); ctx.fill();
    }
    ctx.fillStyle = 'rgba(' + P.dot + ',' + Math.min(1, la + 0.1) + ')';
    ctx.beginPath(); ctx.arc(s.cx2, s.cy2, tipR, 0, 6.2832); ctx.fill();
  }

  // Hero scale carries the Circle identity's flowing particle swarm, so the
  // Lines (processing) form reads as the same being — spokes swapped in, the
  // ambient drift unchanged. Nav sizes keep the clean spoke-only mark.
  if (e.size >= 120) drawSwarm(e, T, P, () => P.dot);

  drawCore(e, T, P);
  ctx.restore();
}

function drawMagnetic(e: Ctx, T: number, P: Pal) {
  const { ctx, w, h } = e, cx = w / 2, cy = h / 2, R = Math.min(w, h) * 0.39;
  const active = e.state !== 'idle';
  const N = e.size >= 32 ? 58 : (e.size >= 20 ? 32 : 18);
  const rr = R * 0.78;
  const yaw = active ? T * 0.5 : T * 0.2, cyaw = Math.cos(yaw), syaw = Math.sin(yaw);
  const tilt = 0.42, ct = Math.cos(tilt), stt = Math.sin(tilt);
  const sp = active ? 1 : 0.4;
  const mk = (th: number, ph: number) => [Math.sin(th) * Math.cos(ph), Math.cos(th), Math.sin(th) * Math.sin(ph)];
  const A = [mk(1.4 + 0.5 * Math.sin(T * 0.5 * sp), T * 0.6 * sp), mk(1.9 + 0.4 * Math.cos(T * 0.4 * sp), -T * 0.5 * sp + 2.0)];
  const sig = 0.36;

  // ── Progressive build (cellCount) ─────────────────────────────────────────
  // How many of the N cells are on the globe. Undefined keeps the classic full
  // sphere. Cells reveal in a deterministic hash-shuffled order so the surface
  // fills evenly (not pole-down), stable across frames and remounts.
  const want = e.cellCount == null ? N : clamp(Math.round(e.cellCount), 0, N);
  let rank: number[] | null = null;
  let ord: number[] | null = null;
  if (want < N || e.cellBirths) {
    ord = Array.from({ length: N }, (_, i) => i).sort((a, b) => hash(a) - hash(b));
    rank = new Array<number>(N);
    ord.forEach((k, i) => { rank![k] = i; });
  }
  // Newly revealed cells get staggered birth stamps (wall-clock seconds), so a
  // step's batch appends one after another rather than blooming all at once.
  const EMERGE_S = 0.7, STAGGER_S = 0.16;
  if (ord && e.cellBirths && e.emergeNow != null) {
    let queue = 0;
    for (let i = 0; i < want; i++) {
      const k = ord[i];
      if (!e.cellBirths.has(k)) e.cellBirths.set(k, e.emergeNow + queue++ * STAGGER_S);
    }
  }

  ctx.save();
  ctx.globalCompositeOperation = P.glow ? 'lighter' : 'source-over';
  const dots: { x: number; y: number; d: number; inf: number; g: number }[] = [];
  for (let k = 0; k < N; k++) {
    // Emergence 0→1: unborn cells skip; mid-flight cells ride out of the core.
    let g = 1;
    if (rank) {
      if (rank[k] >= want) continue;                       // not yet revealed
      if (e.cellBirths) {
        const b = e.cellBirths.get(k);
        if (b == null) continue;
        g = smooth01(((e.emergeNow ?? b + EMERGE_S) - b) / EMERGE_S);
        if (g <= 0.001) continue;                          // waiting its turn
      }
    }
    const yy = 1 - (k + 0.5) / N * 2, ringr = Math.sqrt(Math.max(0, 1 - yy * yy)), phi = k * 2.39996;
    // Scale the sphere point by g so each new cell travels core → surface.
    const px = Math.cos(phi) * ringr * g, py = yy * g, pz = Math.sin(phi) * ringr * g;
    let inf = 0;
    for (const at of A) { const dx = px - at[0], dy = py - at[1], dz = pz - at[2]; inf += Math.exp(-(dx * dx + dy * dy + dz * dz) / (2 * sig * sig)); }
    inf = clamp(inf, 0, 1);
    const X = px * cyaw + pz * syaw, Zr = -px * syaw + pz * cyaw;
    const Y2 = py * ct - Zr * stt, Z2 = py * stt + Zr * ct;
    const d = (Z2 + 1) / 2, persp = 0.82 + 0.18 * d;
    dots.push({ x: cx + X * rr * persp, y: cy + Y2 * rr * persp, d, inf, g });
  }
  dots.sort((p, q) => p.d - q.d);
  for (const dt of dots) {
    const ex = smooth01(dt.inf);
    const r = Math.max(0.6, R * (0.05 + 0.06 * ex) * cellK(e.size) * (0.55 + 0.5 * dt.d)) * (0.35 + 0.65 * dt.g);
    const al = (0.16 + 0.84 * dt.d) * (0.45 + 0.55 * ex) * dt.g;
    // Sticker squash blends in with g: a round dot in flight, flattened onto the
    // sphere (full circle facing the viewer, a sliver at the limb) once settled.
    const f = 1 - (1 - Math.abs(2 * dt.d - 1)) * dt.g;
    const ang = Math.atan2(dt.y - cy, dt.x - cx);
    ctx.fillStyle = 'rgba(' + P.dot + ',' + al + ')';
    ctx.beginPath();
    ctx.ellipse(dt.x, dt.y, Math.max(0.35, r * f), r, ang, 0, 6.2832);
    ctx.fill();
  }
  drawCore(e, T, P);
  ctx.restore();
}

// Magnetic ⇄ Lines morph — one continuous shape transition instead of a hard
// swap, driven by m in (0,1): 0 = pure magnetic, 1 = pure lines. Three
// overlapping beats, each easing on its own window of m:
//   gather (0→0.55)  — the globe's spots swirl inward onto the spoke-tip
//                       positions (both marks share the same Fibonacci-sphere
//                       layout, so every spot has a natural nearest spoke);
//   dotIn  (0.3→0.7) — the Lines tip dots crystallize where the spots land,
//                       as the travelling spots hand off and fade;
//   lineIn (0.5→1)   — the spokes draw from the core outward to connect the
//                       dots, and the hero swarm drifts in.
// Played in reverse (m 1→0) the lines retract into the core, the dots dissolve
// back into spots, and the spots scatter home onto the sphere. At m=0 the frame
// is pixel-equivalent to drawMagnetic (settled), at m=1 to drawLines, so the
// component can hand back to the plain draws with no visible seam.
function drawMagneticLinesMorph(e: Ctx, T: number, P: Pal, m: number) {
  const { ctx, w, h, dpr } = e, cx = w / 2, cy = h / 2, R = Math.min(w, h) * 0.39;
  const active = e.state !== 'idle';
  const gather = smooth01(clamp(m / 0.55, 0, 1));
  const dotIn = smooth01(clamp((m - 0.3) / 0.4, 0, 1));
  const lineIn = smooth01(clamp((m - 0.5) / 0.5, 0, 1));

  // ── Lines-side geometry (the gather targets) — mirrors drawLines exactly.
  const NL = e.size >= 32 ? 11 : 7;
  const inner = R * 0.12, gap = R * 0.12;
  const breath = smooth01(0.5 + 0.5 * Math.sin(T * (active ? 1.0 : 0.55)));
  const ev = active ? (0.34 + 0.66 * breath) : (0.5 + 0.12 * breath);
  const lw = Math.max(1 * dpr, R * 0.052);
  const yawL = -T * (active ? 0.5 : 0.16), cyl = Math.cos(yawL), syl = Math.sin(yawL);
  const tilt = 0.42, ctl = Math.cos(tilt), stl = Math.sin(tilt);
  const L = R * (0.52 + 0.44 * ev), Ls = Math.max(inner + lw, L - gap);
  const spokes: { x0: number; y0: number; x1: number; y1: number; cx2: number; cy2: number; d: number; shim: number; ux: number; uy: number; uz: number }[] = [];
  for (let k = 0; k < NL; k++) {
    const yy = 1 - (k + 0.5) / NL * 2, rr0 = Math.sqrt(Math.max(0, 1 - yy * yy)), phi = k * 2.39996;
    const dx = Math.cos(phi) * rr0, dy = yy, dz = Math.sin(phi) * rr0;
    const X = dx * cyl + dz * syl, Zr = -dx * syl + dz * cyl;
    const Y2 = dy * ctl - Zr * stl, Z2 = dy * stl + Zr * ctl;
    const d = (Z2 + 1) / 2, persp = 0.82 + 0.18 * d;
    const shim = 0.5 + 0.5 * Math.sin(T * 1.6 + k * 1.3);
    spokes.push({
      x0: cx + X * inner * persp, y0: cy + Y2 * inner * persp,
      x1: cx + X * Ls * persp, y1: cy + Y2 * Ls * persp,
      cx2: cx + X * L * persp, cy2: cy + Y2 * L * persp,
      d, shim, ux: dx, uy: dy, uz: dz,
    });
  }

  ctx.save();
  ctx.globalCompositeOperation = P.glow ? 'lighter' : 'source-over';
  ctx.lineCap = 'round';

  // ── Spokes + tip dots (under the travelling spots). The stroke grows from
  //    the core toward the tip by lineIn; the tip dot crystallizes by dotIn.
  const ordered = [...spokes].sort((a, b) => a.d - b.d);
  for (const s of ordered) {
    const la = (active ? (0.4 + 0.45 * ev) : 0.6) * (0.4 + 0.6 * s.d) * (0.78 + 0.22 * s.shim);
    if (lineIn > 0.001) {
      const exx = s.x0 + (s.x1 - s.x0) * lineIn, eyy = s.y0 + (s.y1 - s.y0) * lineIn;
      const lg = ctx.createLinearGradient(s.x0, s.y0, s.x1, s.y1);
      lg.addColorStop(0, 'rgba(' + P.dot + ',' + la * lineIn + ')');
      lg.addColorStop(1, 'rgba(' + P.accent + ',0)');
      ctx.strokeStyle = lg; ctx.lineWidth = lw * (0.7 + 0.5 * s.d);
      ctx.beginPath(); ctx.moveTo(s.x0, s.y0); ctx.lineTo(exx, eyy); ctx.stroke();
    }
    if (dotIn > 0.001) {
      const tipR = Math.max(0.9, R * 0.058 * cellK(e.size) * (0.85 + 0.3 * ev) * (0.6 + 0.5 * s.d));
      if (P.glow) {
        const bg = ctx.createRadialGradient(s.cx2, s.cy2, 0, s.cx2, s.cy2, tipR * 5);
        bg.addColorStop(0, 'rgba(' + P.accent + ',' + (0.26 * la * dotIn) + ')');
        bg.addColorStop(1, 'rgba(' + P.accent + ',0)');
        ctx.fillStyle = bg; ctx.beginPath(); ctx.arc(s.cx2, s.cy2, tipR * 5, 0, 6.2832); ctx.fill();
      }
      ctx.fillStyle = 'rgba(' + P.dot + ',' + Math.min(1, la + 0.1) * dotIn + ')';
      ctx.beginPath(); ctx.arc(s.cx2, s.cy2, tipR * (0.6 + 0.4 * dotIn), 0, 6.2832); ctx.fill();
    }
  }

  // ── Magnetic-side spots — mirrors drawMagnetic (settled cells; the morph only
  //    ever runs between steady states), each gliding toward its nearest spoke's
  //    tip by gather and handing off to the crystallized dot by dotIn.
  const NM = e.size >= 32 ? 58 : (e.size >= 20 ? 32 : 18);
  const rr = R * 0.78;
  const yawM = active ? T * 0.5 : T * 0.2, cym = Math.cos(yawM), sym = Math.sin(yawM);
  const sp = active ? 1 : 0.4;
  const mk = (th: number, ph: number) => [Math.sin(th) * Math.cos(ph), Math.cos(th), Math.sin(th) * Math.sin(ph)];
  const A = [mk(1.4 + 0.5 * Math.sin(T * 0.5 * sp), T * 0.6 * sp), mk(1.9 + 0.4 * Math.cos(T * 0.4 * sp), -T * 0.5 * sp + 2.0)];
  const sig = 0.36;
  const want = e.cellCount == null ? NM : clamp(Math.round(e.cellCount), 0, NM);
  let rank: number[] | null = null;
  if (want < NM) {
    const ord = Array.from({ length: NM }, (_, i) => i).sort((a, b) => hash(a) - hash(b));
    rank = new Array<number>(NM);
    ord.forEach((k, i) => { rank![k] = i; });
  }
  const cellAlpha = 1 - dotIn;
  if (cellAlpha > 0.001 || gather < 1) {
    const dots: { x: number; y: number; d: number; inf: number; f: number }[] = [];
    for (let k = 0; k < NM; k++) {
      if (rank && rank[k] >= want) continue;
      const yy = 1 - (k + 0.5) / NM * 2, ringr = Math.sqrt(Math.max(0, 1 - yy * yy)), phi = k * 2.39996;
      const px = Math.cos(phi) * ringr, py = yy, pz = Math.sin(phi) * ringr;
      // Nearest spoke by pre-yaw direction — both layouts live on the same unit
      // sphere, so the dot product picks each spot's natural line to join.
      let best = 0, bestDot = -2;
      for (let j = 0; j < NL; j++) {
        const dp = px * spokes[j].ux + py * spokes[j].uy + pz * spokes[j].uz;
        if (dp > bestDot) { bestDot = dp; best = j; }
      }
      const tgt = spokes[best];
      let inf = 0;
      for (const at of A) { const dx = px - at[0], dy = py - at[1], dz = pz - at[2]; inf += Math.exp(-(dx * dx + dy * dy + dz * dz) / (2 * sig * sig)); }
      inf = clamp(inf, 0, 1);
      const X = px * cym + pz * sym, Zr = -px * sym + pz * cym;
      const Y2 = py * ctl - Zr * stl, Z2 = py * stl + Zr * ctl;
      const dm = (Z2 + 1) / 2, persp = 0.82 + 0.18 * dm;
      const xm = cx + X * rr * persp, ym = cy + Y2 * rr * persp;
      dots.push({
        x: xm + (tgt.cx2 - xm) * gather,
        y: ym + (tgt.cy2 - ym) * gather,
        d: dm + (tgt.d - dm) * gather,
        inf,
        // Sticker squash relaxes to a round dot as the spot leaves the sphere.
        f: (1 - (1 - Math.abs(2 * dm - 1))) * (1 - gather) + 1 * gather,
      });
    }
    dots.sort((p, q) => p.d - q.d);
    for (const dt of dots) {
      const ex = smooth01(dt.inf);
      const r = Math.max(0.6, R * (0.05 + 0.06 * ex) * cellK(e.size) * (0.55 + 0.5 * dt.d));
      const al = (0.16 + 0.84 * dt.d) * (0.45 + 0.55 * ex) * cellAlpha;
      if (al <= 0.003) continue;
      const ang = Math.atan2(dt.y - cy, dt.x - cx);
      ctx.fillStyle = 'rgba(' + P.dot + ',' + al + ')';
      ctx.beginPath();
      ctx.ellipse(dt.x, dt.y, Math.max(0.35, r * dt.f), r, ang, 0, 6.2832);
      ctx.fill();
    }
  }

  // Hero swarm drifts in alongside the lines (drawLines carries it at m=1).
  if (e.size >= 120 && lineIn > 0.001) {
    ctx.globalAlpha = lineIn;
    drawSwarm(e, T, P, () => P.dot);
    ctx.globalAlpha = 1;
  }

  drawCore(e, T, P);
  ctx.restore();
}

// Magnetic 2D — the flat-on variant of the magnetic mark: a single ring of cells
// circling the core head-on, swelling as two roving field points sweep past (no
// globe tilt, so no cells hide behind the sphere). Ported from the "Agent marks
// for UI" study. Palette-driven (P).
function drawMagnetic2d(e: Ctx, T: number, P: Pal) {
  const { ctx, w: W, h: H } = e, cx = W / 2, cy = H / 2, R = Math.min(W, H) * 0.39;
  const active = e.state !== 'idle';
  const N = e.size >= 32 ? 8 : (e.size >= 20 ? 6 : 5);
  const rad = R * 0.9;                               // one layer outside the core
  const sp = active ? 1 : 0.4;
  const rove = T * (active ? 0.3 : 0.12);            // the cells themselves rove around the core
  // two magnetic field points sweeping around the ring at their own pace
  const f1 = T * 1.0 * sp, f2 = -T * 0.7 * sp + 2.2;
  const sig = 0.72;                                  // angular reach of the field
  const angDist = (a: number, x: number) => { const d = (((a - x + Math.PI) % 6.2832) + 6.2832) % 6.2832 - Math.PI; return Math.abs(d); };
  ctx.save();
  ctx.globalCompositeOperation = P.glow ? 'lighter' : 'source-over';
  for (let k = 0; k < N; k++) {
    const a = k / N * 6.2832 + rove;
    let inf = Math.exp(-(angDist(a, f1) ** 2) / (2 * sig * sig)) + Math.exp(-(angDist(a, f2) ** 2) / (2 * sig * sig));
    inf = clamp(inf, 0, 1);
    const ex = smooth01(inf);
    const x = cx + Math.cos(a) * rad, y = cy + Math.sin(a) * rad;
    const r = Math.max(0.6, R * (0.05 + 0.07 * ex) * cellK(e.size));
    const al = 0.38 + 0.62 * ex;
    if (P.glow && ex > 0.25) {
      const bg = ctx.createRadialGradient(x, y, 0, x, y, r * 4);
      bg.addColorStop(0, 'rgba(' + P.accent + ',' + (0.24 * ex) + ')'); bg.addColorStop(1, 'rgba(' + P.accent + ',0)');
      ctx.fillStyle = bg; ctx.beginPath(); ctx.arc(x, y, r * 4, 0, 6.2832); ctx.fill();
    }
    ctx.fillStyle = 'rgba(' + P.dot + ',' + al + ')';
    ctx.beginPath(); ctx.arc(x, y, r, 0, 6.2832); ctx.fill();
  }
  drawCore(e, T, P);
  ctx.restore();
}

// Pulse — waiting / ready: only the breathing core, no cells or trails.
function drawPulse(e: Ctx, T: number, P: Pal) {
  drawCore(e, T, P);
}

const DRAW: Record<AgentMarkKind, (e: Ctx, T: number, P: Pal) => void> = {
  orbit: drawOrbit, orbit2d: drawOrbit2d, circle: drawCircle, lines: drawLines, magnetic: drawMagnetic, magnetic2d: drawMagnetic2d, pulse: drawPulse, bands: drawCircle,
};

export function AgentMark({
  mark = 'orbit', size = 16, tone = 'auto', state = 'active',
  motionSpeed = 1, accent = '#96B9FF', color, coreHalo = true, coreGradient = false, streamCount, cellCount, className, 'aria-label': ariaLabel,
}: AgentMarkProps) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  // Repaint trigger when the OS theme flips (the light/dark choice itself is
  // resolved below by sampling the surface the mark actually sits on).
  const prefersDark = usePrefersDark();
  // Eased alert amount (0 → mono, 1 → colored). The paint loop glides it toward
  // its target each frame, so toggling `coreGradient` fades the colors in/out.
  const alertRef = useRef(0);
  const alertTargetRef = useRef(0);
  alertTargetRef.current = coreGradient ? 1 : 0;
  // Birth stamps for the magnetic build (cell index → wall-clock seconds).
  // Component-level so raising cellCount mid-emergence appends the new batch
  // while cells already in flight keep gliding — no restart on prop change.
  const birthsRef = useRef<Map<number, number>>(new Map());
  // Magnetic ⇄ lines morph position (0 = magnetic, 1 = lines). Component-level
  // so a mark flip mid-morph reverses from wherever the shape currently is.
  // Null until the first effect run — the initial mount snaps, never morphs.
  const morphRef = useRef<number | null>(null);
  const morphClockRef = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = el.getContext('2d');
    if (!ctx) return;

    const reduced = (() => { try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch { return false; } })();

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const W = Math.max(2, Math.round(size * dpr)), H = W;
    el.width = W; el.height = H;
    const e: Ctx = {
      ctx, w: W, h: H, dpr, size, state, coreHalo, alert: alertRef.current, streamCount,
      cellCount,
      // No animation loop → skip emergence; revealed cells paint settled.
      cellBirths: cellCount != null && !reduced && state !== 'static' ? birthsRef.current : undefined,
    };
    // `auto` follows the page theme: sample the resolved page surface token off
    // this element (which honours both the prefers-color-scheme media query and
    // any manual .light/.dark override) and pick the matching palette — light
    // cells with glow on dark surfaces, dark cells without on light ones.
    const effectiveTone: AgentMarkTone = tone === 'auto'
      ? (luminance(cssToRGB(ctx, el, 'var(--color-bg-primary)')) < 0.5 ? 'dark' : 'light')
      : tone;
    // Each tone paints directly with its palette. `light` resolves to dark-slate
    // cells with glow off (see pal()), so the mark draws crisp on the transparent
    // canvas — no render-on-black + luminance-key pass.
    const P = pal(effectiveTone, hexRGB(accent));
    // Optional explicit tint — recolors the cells/core (e.g. a settled case in
    // content-disabled) while keeping the tone's glow behaviour.
    if (color) { const rgb = cssToRGB(ctx, el, color); P.dot = rgb; P.core = rgb; }
    const draw = DRAW[mark] ?? drawOrbit;

    // Magnetic ⇄ lines morph target. A flip between those two marks glides the
    // morph position instead of hard-swapping draw functions; any other mark
    // (or the very first mount, or no-animation modes) snaps straight there.
    const MORPH_S = 1.15;
    const morphTarget = mark === 'lines' ? 1 : 0;
    const morphable = mark === 'lines' || mark === 'magnetic';
    if (morphRef.current == null || !morphable || reduced || state === 'static') {
      morphRef.current = morphTarget;
    }

    const paint = (T: number) => {
      // Glide the alert amount toward its target so the color swap eases in/out.
      alertRef.current += (alertTargetRef.current - alertRef.current) * 0.06;
      if (Math.abs(alertRef.current - alertTargetRef.current) < 0.001) alertRef.current = alertTargetRef.current;
      e.alert = alertRef.current;
      // Emergence runs on its own wall clock — immune to motionSpeed scaling and
      // the synthetic first frame's T, so birth stamps stay consistent.
      e.emergeNow = performance.now() / 1000;
      // Advance the morph toward its target on the same wall clock.
      if (morphable && morphRef.current !== morphTarget) {
        const nowS = e.emergeNow;
        const dt = clamp(nowS - (morphClockRef.current || nowS), 0, 0.1);
        morphClockRef.current = nowS;
        const dir = morphTarget > (morphRef.current ?? 0) ? 1 : -1;
        morphRef.current = clamp((morphRef.current ?? 0) + dir * dt / MORPH_S, 0, 1);
      } else {
        morphClockRef.current = e.emergeNow;
      }
      ctx.clearRect(0, 0, W, H);
      const tt = state === 'static' ? 0.62 : T;
      const mv = morphRef.current ?? morphTarget;
      if (morphable && mv > 0.001 && mv < 0.999) drawMagneticLinesMorph(e, tt, P, mv);
      else draw(e, tt, P);
    };

    const sp = clamp(motionSpeed, 0.4, 3);

    // No animation loop → snap the alert to its target so the color still applies.
    if (reduced || state === 'static') alertRef.current = alertTargetRef.current;
    // first frame immediately (rAF can be throttled before on-screen)
    paint(1.15);
    if (reduced || state === 'static') return;

    let raf = 0;
    const loop = (now: number) => { paint((now / 1000) * sp); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [mark, size, tone, state, motionSpeed, accent, color, coreHalo, coreGradient, streamCount, cellCount, prefersDark]);

  return (
    <canvas
      ref={ref}
      width={size}
      height={size}
      style={{ width: size, height: size, display: 'block', flexShrink: 0 }}
      className={className}
      role="img"
      aria-label={ariaLabel}
    />
  );
}
