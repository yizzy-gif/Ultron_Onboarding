// A magnetic cursor glow: a single soft pool of colored light that is pulled
// after the pointer like iron filings after a magnet — each frame it eases a
// fraction of the way toward the cursor, so it trails behind fast sweeps and
// settles gently underneath a resting pointer. It renders as an absolute layer
// meant to sit *inside* a scene — above that scene's decorative backdrop (the
// connecting dots/lines) but beneath the page content — so the color reads as
// light diffusing between background and UI.
//
// Deliberately calm: one orb, no spawning, no per-move animation. The glow
// brightens a touch while the pointer travels and relaxes back to a faint
// resting presence once it stops, and its hue drifts slowly around the wheel
// over time rather than changing with movement. All motion lives in one rAF
// loop that writes transform/opacity/color directly to the orb's style —
// nothing re-renders per frame.
//
// Honors prefers-reduced-motion by not activating at all.

import { useEffect, useRef } from 'react';
import { GlowLayer, Orb } from './MouseGlow.styles';

// Fraction of the remaining distance the orb covers per frame — the strength
// of the magnetic pull. Lower = lazier trailing.
const PULL = 0.085;
// Orb diameter (px).
const SIZE = 380;
// Resting / travelling opacity targets, and how fast opacity eases between
// them. The glow never fully disappears once the pointer has entered.
const IDLE_OPACITY = 0.14;
const MOVE_OPACITY = 0.32;
const OPACITY_EASE = 0.06;
// How long after the last pointer movement the glow counts as "travelling" (ms).
const MOVE_WINDOW_MS = 350;
// Hue drift speed (degrees per second) — a slow amble around the color wheel.
const HUE_SPEED = 9;

export function MouseGlow() {
  const layerRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = (() => {
      try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch { return false; }
    })();
    if (reduced) return;

    const layer = layerRef.current;
    const orb = orbRef.current;
    if (!layer || !orb) return;

    // Cursor target in layer coords, seeded by the first pointer move (so a
    // page entered by keyboard never shows a glow pinned to a phantom point).
    let tx: number | null = null;
    let ty: number | null = null;
    let lastMoveAt = -Infinity;
    // The orb's own eased position/opacity — snapped to the cursor on first
    // contact, magnetically pulled toward it afterwards.
    let x = 0;
    let y = 0;
    let opacity = 0;

    const onMove = (e: PointerEvent) => {
      // The layer may not start at the viewport origin (it's absolute inside a
      // scene, and the page can scroll), so convert from pointer coords.
      const rect = layer.getBoundingClientRect();
      const first = tx === null;
      tx = e.clientX - rect.left;
      ty = e.clientY - rect.top;
      lastMoveAt = e.timeStamp;
      if (first) {
        x = tx;
        y = ty;
      }
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    let raf = 0;
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (tx === null || ty === null) return;

      // Magnetic pull toward the cursor, and opacity easing toward the
      // travelling/resting target.
      x += (tx - x) * PULL;
      y += (ty - y) * PULL;
      const target = now - lastMoveAt < MOVE_WINDOW_MS ? MOVE_OPACITY : IDLE_OPACITY;
      opacity += (target - opacity) * OPACITY_EASE;

      const hue = Math.floor((now / 1000) * HUE_SPEED) % 360;
      orb.style.transform = `translate(${x - SIZE / 2}px, ${y - SIZE / 2}px)`;
      orb.style.opacity = opacity.toFixed(3);
      orb.style.setProperty('--glow-color', `hsl(${hue} 85% 62% / 0.85)`);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <GlowLayer ref={layerRef} aria-hidden="true">
      <Orb ref={orbRef} style={{ width: SIZE, height: SIZE, opacity: 0 }} />
    </GlowLayer>
  );
}
