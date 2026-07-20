/* ─────────────────────────────────────────────────────────────────────────────
   Intro backdrop — the ambient layer behind the intro flow: a full-viewport
   field of slowly drifting particles that echoes the Ultron identity's swarm
   motion, over a soft slate wash that falls from the corner toward the center.

   Two states, driven by `links` (0→1):
     · 0  — just the flowing particles (the opening's resting presence);
     · >0 — connection lines fade in between nearby particles, pair by pair in
            a deterministic-random order, so the network "builds up" as the
            admin progresses (mirroring the identity forming its first line).

   Follows AgentMark's conventions: deterministic hash-based layout (no RNG, so
   every frame/mount paints identically), theme resolved at draw time by
   sampling the page tokens off the element, prefers-reduced-motion paints one
   static frame. Purely decorative — aria-hidden, pointer-events none.
   ───────────────────────────────────────────────────────────────────────────── */

import { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface IntroBackdropProps {
  /** How built-up the connection network is (0 none → 1 full). Glided toward
   *  each frame, so step changes ease rather than snap. */
  links?: number;
}

/** Field density + how close two particles must be (px) to link. */
const COUNT = 72;
const LINK_DIST = 240;
/** A random subset of pairs reach much farther, drawing the occasional long
 *  thread across the field to a distant dot. `LONG_FRAC` = share of pairs
 *  eligible for the longer reach. */
const LONG_LINK_DIST = 640;
const LONG_FRAC = 0.13;
/** Central fraction of the viewport WIDTH kept clear of particles — a vertical
 *  channel down the middle for the chat thread. Particles get squeezed out into
 *  the left/right side bands (full height), so the field hugs the edges instead
 *  of drifting under the conversation. */
const CENTER_GUTTER = 0.58;

// Deterministic pseudo-random in [0,1) — same generator as AgentMark, so the
// field lays out identically on every mount and paints smoothly.
function hash(n: number): number {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

// Smoothstep — eases the arc tip's travel so it accelerates out and glides in.
function smooth01(x: number): number {
  x = Math.max(0, Math.min(1, x));
  return x * x * (3 - 2 * x);
}

// Resolve a CSS var to "r,g,b" channels via the canvas color parser (mirrors
// AgentMark's cssToRGB, trimmed to the var-only case used here).
function tokenRGB(ctx: CanvasRenderingContext2D, el: HTMLElement, token: string, fallback: string): string {
  const value = getComputedStyle(el).getPropertyValue(token).trim();
  if (!value) return fallback;
  ctx.fillStyle = '#000';
  ctx.fillStyle = value;
  const resolved = ctx.fillStyle as string;
  if (resolved.startsWith('#')) {
    const h = resolved.slice(1);
    const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
    return ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255);
  }
  const nums = resolved.match(/[\d.]+/g);
  return nums && nums.length >= 3 ? `${+nums[0]},${+nums[1]},${+nums[2]}` : fallback;
}

const luminance = (rgb: string): number => {
  const [r, g, b] = rgb.split(',').map(Number);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
};

export function IntroBackdrop({ links = 0 }: IntroBackdropProps) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  // Eased link amount — the paint loop glides it toward the target so the
  // network fades in/out rather than snapping (same pattern as AgentMark's alert).
  const linkRef = useRef(0);
  const linkTargetRef = useRef(links);
  linkTargetRef.current = Math.max(0, Math.min(1, links));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = el.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    let W = 0;
    let H = 0;

    const resize = () => {
      W = el.clientWidth;
      H = el.clientHeight;
      el.width = Math.max(2, Math.round(W * dpr));
      el.height = Math.max(2, Math.round(H * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    // Theme: dark slate cells on light surfaces, light cells on dark ones —
    // decided by sampling the resolved page surface, like AgentMark's `auto`.
    const surface = tokenRGB(ctx, el, '--color-bg-primary', '255,255,255');
    const darkSurface = luminance(surface) < 0.5;
    const dot = tokenRGB(ctx, el, '--color-content-tertiary', darkSurface ? '148,163,184' : '71,85,105');

    // Field layout — most particles spread evenly; a third cluster toward the
    // top-right corner so the field reads denser where the slate wash sits.
    const parts = Array.from({ length: COUNT }, (_, k) => {
      const corner = k % 3 === 0;
      const bx = corner ? 1 - 0.5 * Math.pow(hash(k * 3.1), 1.6) : hash(k * 3.1);
      const by = corner ? 0.5 * Math.pow(hash(k * 5.7), 1.6) : hash(k * 5.7);
      return {
        bx, by,
        // slow directional drift (fraction of the viewport per second)
        vx: (hash(k * 7.3) - 0.5) * 0.008,
        vy: (hash(k * 9.9) - 0.5) * 0.008,
        // wobble — the identity swarm's orbital sway, flattened onto the page
        wA: 6 + hash(k * 4.7) * 10,
        wS: 0.25 + hash(k * 6.1) * 0.5,
        wP: hash(k * 8.2) * 6.2832,
        r: 0.8 + hash(k * 2.3) * 1.6,
        twS: 0.8 + hash(k) * 1.4,
        twP: hash(k * 11.4) * 6.2832,
      };
    });

    const posAt = (p: (typeof parts)[number], T: number) => {
      // drift wraps around the viewport; wobble sways in place
      const nx = ((p.bx + p.vx * T) % 1 + 1) % 1;
      const ny = ((p.by + p.vy * T) % 1 + 1) % 1;
      // Push horizontally away from the center: the x offset keeps its side
      // (left/right) but its magnitude is squeezed into the outer band, so the
      // middle CENTER_GUTTER fraction of the WIDTH stays clear — a vertical
      // channel for the chat thread — while y spans the full height. The field
      // ends up clustered along the left and right edges. Applied per-frame, so
      // drifting particles skirt the channel continuously.
      const ox = nx - 0.5;
      const ax = Math.abs(ox) * 2; // 0 center → 1 side edge
      const k = ax < 1e-4 ? 1 : (CENTER_GUTTER + (1 - CENTER_GUTTER) * ax) / ax;
      return {
        x: (0.5 + ox * k) * W + Math.cos(T * p.wS + p.wP) * p.wA,
        y: ny * H + Math.sin(T * p.wS * 0.8 + p.wP) * p.wA,
      };
    };

    const reduced = (() => {
      try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch { return false; }
    })();

    const paint = (T: number) => {
      // Glide the network amount toward its target.
      linkRef.current += (linkTargetRef.current - linkRef.current) * 0.04;
      if (Math.abs(linkRef.current - linkTargetRef.current) < 0.001) linkRef.current = linkTargetRef.current;
      const lk = linkRef.current;

      ctx.clearRect(0, 0, W, H);
      const pts = parts.map(p => posAt(p, T));

      // Connection links — random pairs (each with a fixed threshold, so as `lk`
      // rises they join the network in a stable, random-looking order) linked by
      // a straight line along the segment. Each active link lives on its own
      // desynced cycle: the tip TRAVELS from one particle to the other (drawing
      // the line in behind it, with a bright stream head), holds, fades out,
      // rests, then redraws — echoing the identity's hopping link streams.
      // Reduced motion paints every active link complete.
      if (lk > 0.01) {
        ctx.lineWidth = 1;
        ctx.lineCap = 'round';
        for (let i = 0; i < COUNT; i++) {
          for (let j = i + 1; j < COUNT; j++) {
            const pr = hash(i * 97.7 + j * 13.3);
            if (pr > lk * 0.5) continue;
            const a = pts[i], b = pts[j];
            const dx = b.x - a.x, dy = b.y - a.y;
            const d = Math.hypot(dx, dy);
            // A random subset of pairs reaches far across the field; the rest
            // only link to near neighbours as before.
            const long = hash(i * 5.1 + j * 23.9) < LONG_FRAC;
            const maxD = long ? LONG_LINK_DIST : LINK_DIST;
            if (d > maxD || d < 1) continue;

            // Bias the network toward horizontal threads — drop near-vertical
            // pairs and dim whatever slant remains, so links run mostly sideways.
            const horiz = Math.abs(dx) / d; // 1 = horizontal, 0 = vertical
            if (horiz < 0.55) continue;

            // Life cycle — draw-in (0–0.3) → hold (0.3–0.62) → fade (0.62–0.78)
            // → rest. Period + phase are per-pair, so links redraw out of sync.
            const dur = 7 + hash(i * 3.3 + j * 41.1) * 6; // 7–13s per cycle
            const ph = reduced ? 0.5 : (T / dur + hash(i * 17.9 + j * 7.7)) % 1;
            let prog = 1;
            let fade = 1;
            if (ph >= 0.78) continue; // resting between redraws
            if (ph < 0.3) prog = smooth01(ph / 0.3);
            else if (ph > 0.62) fade = 1 - (ph - 0.62) / 0.16;

            // Near links fall off sharply (square); long threads decay gently
            // (linear) and dimmer, so a distant dot still reads as connected.
            const fall = 1 - d / maxD;
            const shape = long ? fall : fall * fall;
            const base = (darkSurface ? 0.45 : 0.34) * (long ? 0.62 : 1);
            const la = shape * base * lk * fade * horiz;
            if (la < 0.01 || prog < 0.02) continue;

            // Tip travels straight along the chord from a → b.
            const tx = a.x + dx * prog;
            const ty = a.y + dy * prog;

            const lg = ctx.createLinearGradient(a.x, a.y, tx, ty);
            lg.addColorStop(0, 'rgba(' + dot + ',0)');
            lg.addColorStop(1, 'rgba(' + dot + ',' + la + ')');
            ctx.strokeStyle = lg;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(tx, ty);
            ctx.stroke();

            // Bright head while the tip is travelling — the stream's cell.
            if (prog < 1) {
              ctx.fillStyle = 'rgba(' + dot + ',' + Math.min(1, la * 2.4) + ')';
              ctx.beginPath();
              ctx.arc(tx, ty, 1.4, 0, 6.2832);
              ctx.fill();
            }
          }
        }
      }

      // Particles — twinkling cells, echoing the identity swarm.
      for (let k = 0; k < COUNT; k++) {
        const p = parts[k];
        const tw = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(T * p.twS + p.twP));
        ctx.fillStyle = 'rgba(' + dot + ',' + (tw * (darkSurface ? 0.55 : 0.42)) + ')';
        ctx.beginPath();
        ctx.arc(pts[k].x, pts[k].y, p.r * (0.7 + 0.3 * tw), 0, 6.2832);
        ctx.fill();
      }
    };

    if (reduced) {
      // One static frame, network snapped to its target.
      linkRef.current = linkTargetRef.current;
      paint(1.15);
      return () => ro.disconnect();
    }

    paint(1.15);
    let raf = 0;
    const loop = (now: number) => { paint(now / 1000); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    <Layer aria-hidden="true">
      <canvas ref={ref} />
    </Layer>
  );
}

// ── Styled ───────────────────────────────────────────────────────────────────

/* Sits behind the intro content: the slate wash falls from the top-right corner
   toward the center (token-based, so it flips with the theme), with the particle
   canvas painting over it. Purely decorative — never intercepts input. */
const Layer = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  background: radial-gradient(
    120% 90% at 100% 0%,
    var(--color-bg-secondary) 0%,
    transparent 55%
  );

  & > canvas {
    width: 100%;
    height: 100%;
    display: block;
  }
`;
