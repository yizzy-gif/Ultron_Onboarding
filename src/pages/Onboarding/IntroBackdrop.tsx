/* ─────────────────────────────────────────────────────────────────────────────
   Intro backdrop — the ambient layer behind the intro flow: a full-viewport
   field of slowly drifting particles that echoes the Ultron identity's swarm
   motion, over a soft slate wash that falls from the corner toward the center.

   The `links` value now only adjusts the particle field's presence; the
   connecting-line layer has intentionally been removed.

   Follows AgentMark's conventions: deterministic hash-based layout (no RNG, so
   every frame/mount paints identically), theme resolved at draw time by
   sampling the page tokens off the element, prefers-reduced-motion paints one
   static frame. Purely decorative — aria-hidden, pointer-events none.
   ───────────────────────────────────────────────────────────────────────────── */

import { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface IntroBackdropProps {
  /** Ambient particle-field strength (0 resting → 1 full). Glided toward
   *  each frame, so step changes ease rather than snap. */
  links?: number;
}

/** Field density. */
const COUNT = 72;
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
  const presenceRef = useRef(0);
  const presenceTargetRef = useRef(links);
  presenceTargetRef.current = Math.max(0, Math.min(1, links));

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
      presenceRef.current += (presenceTargetRef.current - presenceRef.current) * 0.04;
      if (Math.abs(presenceRef.current - presenceTargetRef.current) < 0.001) {
        presenceRef.current = presenceTargetRef.current;
      }

      ctx.clearRect(0, 0, W, H);
      const pts = parts.map(p => posAt(p, T));

      // Particles — twinkling cells, echoing the identity swarm.
      for (let k = 0; k < COUNT; k++) {
        const p = parts[k];
        const tw = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(T * p.twS + p.twP));
        const presence = 0.82 + presenceRef.current * 0.18;
        ctx.fillStyle = 'rgba(' + dot + ',' + (tw * presence * (darkSurface ? 0.55 : 0.42)) + ')';
        ctx.beginPath();
        ctx.arc(pts[k].x, pts[k].y, p.r * (0.7 + 0.3 * tw), 0, 6.2832);
        ctx.fill();
      }
    };

    if (reduced) {
      // One static frame, presence snapped to its target.
      presenceRef.current = presenceTargetRef.current;
      paint(1.15);
      return () => ro.disconnect();
    }

    paint(1.15);
    let raf = 0;
    // Continue time from the initial frame — rAF timestamps start near 0 on a
    // fresh load, so painting `now / 1000` directly would snap every particle
    // backwards from T=1.15 one frame after mount.
    const start = performance.now();
    const loop = (now: number) => { paint(1.15 + (now - start) / 1000); raf = requestAnimationFrame(loop); };
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
