// An ambient glow field with a magnetic cursor orb.
//
// The cursor orb is a soft pool of colored light pulled after the pointer like
// iron filings after a magnet — each frame it eases a fraction of the way
// toward the cursor, so it trails lazily behind sweeps and settles gently
// underneath a resting pointer. Around it, a handful of ambient pools of the
// same light wander the layer on their own — each rides layered sinusoids at
// incommensurate speeds, so the field flows slowly and never repeats. No
// silhouette is ever a plain circle: the eight border-radius values each ride
// their own slow sinusoid, so every pool continuously morphs through organic
// rounded shapes. It renders as an absolute layer meant to sit *inside* a
// scene — above that scene's decorative backdrop (the connecting dots/lines)
// but beneath the page content — so the color reads as light diffusing
// between background and UI.
//
// The pools are gooey: when any two drift near each other — ambient to
// ambient, or ambient to the cursor orb — a bridge of the same light fades in
// between them, stretched along the axis and pinched across it, so the two
// shapes read as melding into one blob and pulling apart again. Bridges share
// the morph and wandering palette, phase-shifted per pair so the meld looks
// organic rather than mirrored.
//
// When the orb drifts near an edge of the layer, that edge answers: a bloom of
// the same light fades in, anchored to the nearest point on the edge and
// hanging mostly past the bounds (the layer clips it), so it reads as light
// bleeding in from outside. Blooms share the orb's morph, hue, and opacity —
// phase-shifted a touch so the two shapes visibly meld rather than mirror.
// Corners light both adjacent edges at once.
//
// Deliberately calm: no spawning, no per-move animation. The orb brightens a
// touch while the pointer travels and relaxes back to a faint resting presence
// once it stops; the ambient pools breathe slowly between faint and a little
// fainter. Every fill is a two-stop gradient whose hues wander the color wheel
// on randomly-seeded noise curves — smoothly but unpredictably, never tied to
// movement. All motion lives in one rAF loop that writes
// transform/opacity/gradient/border-radius directly to element styles —
// nothing re-renders per frame.
//
// Honors prefers-reduced-motion: the ambient field paints one static frame
// (frozen pools, frozen bridges) and the cursor orb never activates.

import { useEffect, useRef } from 'react';
import { GlowLayer, Blob } from './MouseGlow.styles';

// Fraction of the remaining distance the orb covers per frame — the strength
// of the magnetic pull. Lower = lazier trailing.
const PULL = 0.025;
// Orb / edge-bloom diameters (px) — the box the morphing blob lives in.
const SIZE = 560;
const EDGE_SIZE = 480;
// How close (px) the orb's center must be to an edge before that edge's bloom
// starts to show; intensity ramps smoothly from 0 to full over this range.
const EDGE_RANGE = 260;
// Resting / travelling opacity targets, and how fast opacity eases between
// them. The glow never fully disappears once the pointer has entered.
const IDLE_OPACITY = 0.08;
const MOVE_OPACITY = 0.18;
const OPACITY_EASE = 0.06;
// How long after the last pointer movement the glow counts as "travelling" (ms).
const MOVE_WINDOW_MS = 350;
// Baseline hue drift speed (degrees per second) — a slow amble around the
// color wheel that the random wander rides on top of.
const HUE_SPEED = 9;

// The ambient field: how many free-wandering pools, their diameter range, and
// their breathing opacity (a faint resting glow that swells slightly).
const AMBIENT_COUNT = 5;
const AMBIENT_MIN = 360;
const AMBIENT_MAX = 560;
const AMBIENT_IDLE = 0.055;
const AMBIENT_BREATHE = 0.03;
// Bridge element size (px). Bridges stretch along the axis between two pools
// via transform scale, so the box just needs room for the blur to breathe.
const BRIDGE_SIZE = 320;
// How generously two pools reach for each other: a pair starts bridging when
// their center distance drops under REACH × (sum of their diameters) / 2.
const REACH = 0.84;

// Every pair among {cursor orb, ambient pools} can bridge; node 0 is the orb.
const NODE_COUNT = AMBIENT_COUNT + 1;
const PAIRS: Array<[number, number]> = [];
for (let i = 0; i < NODE_COUNT; i++)
  for (let j = i + 1; j < NODE_COUNT; j++) PAIRS.push([i, j]);

// A hue that shifts randomly but smoothly: the baseline amble plus two layered
// sinusoids at incommensurate frequencies, so the color speeds up, slows down,
// and doubles back unpredictably without ever jumping. `p` is a random phase
// seeded per mount, so every visit wanders its own path.
const wanderHue = (t: number, p: number) =>
  (t * HUE_SPEED + 80 * Math.sin(t * 0.23 + p) + 50 * Math.sin(t * 0.071 + p * 1.7) + 720) % 360;

// The morph: each of the eight border-radius values (4 horizontal / 4
// vertical) oscillates around 50% on its own speed and phase, so the blob
// never repeats and never collapses into a circle. Amplitude keeps every
// radius in ~34–66%, comfortably rounded. `phase` offsets the whole shape —
// used to make kin shapes (edge blooms, bridges, ambient pools) morph
// together without cloning each other.
const blobRadius = (t: number, phase: number): string => {
  const v = (speed: number, off: number) =>
    `${(50 + 16 * Math.sin(t * speed + off + phase)).toFixed(1)}%`;
  return `${v(0.9, 0)} ${v(1.3, 2.1)} ${v(1.1, 4.2)} ${v(0.8, 1.3)} / ${v(1.2, 3.1)} ${v(0.7, 0.6)} ${v(1.4, 5.0)} ${v(1.0, 2.4)}`;
};

const smooth01 = (x: number) => {
  x = Math.max(0, Math.min(1, x));
  return x * x * (3 - 2 * x);
};

// Outward normals for the four edge blooms: left, right, top, bottom.
const EDGES = [
  { nx: -1, ny: 0 },
  { nx: 1, ny: 0 },
  { nx: 0, ny: -1 },
  { nx: 0, ny: 1 },
] as const;

// A pool's footprint this frame — everything the bridge pass needs to know.
interface GlowNode {
  x: number;
  y: number;
  size: number;
  o: number;
}

export function MouseGlow() {
  const layerRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const edgeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ambientRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bridgeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const reduced = (() => {
      try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch { return false; }
    })();

    const layer = layerRef.current;
    const orb = orbRef.current;
    if (!layer || !orb) return;

    // Random phases, seeded once per mount, that decide where each hue/center
    // wander starts — every visit drifts through its own color path.
    const ph = Array.from({ length: 4 }, () => Math.random() * Math.PI * 2);
    const rphase = () => Math.random() * Math.PI * 2;

    // The ambient pools' seeds: size, wander amplitudes/speeds/phases (two
    // layered sinusoids per axis, incommensurate speeds so paths never loop),
    // a breathing cycle, and morph/palette offsets that keep each pool kin to
    // the family without cloning it.
    const ambients = Array.from({ length: AMBIENT_COUNT }, () => ({
      size: AMBIENT_MIN + Math.random() * (AMBIENT_MAX - AMBIENT_MIN),
      ax: 0.3 + Math.random() * 0.16,
      ay: 0.3 + Math.random() * 0.16,
      sx1: 0.05 + Math.random() * 0.07, px1: rphase(),
      sx2: 0.11 + Math.random() * 0.09, px2: rphase(),
      sy1: 0.05 + Math.random() * 0.07, py1: rphase(),
      sy2: 0.11 + Math.random() * 0.09, py2: rphase(),
      bs: 0.12 + Math.random() * 0.14, bp: rphase(),
      mp: rphase(),
      cs: 0.4 + Math.random() * 2.6,
    }));
    ambients.forEach((a, i) => {
      const el = ambientRefs.current[i];
      if (!el) return;
      el.style.width = `${a.size.toFixed(0)}px`;
      el.style.height = `${a.size.toFixed(0)}px`;
    });

    // Write one blob's gradient paint: two independently wandering hue stops
    // and a slowly orbiting gradient center. `shift` offsets the whole palette
    // a touch, keeping every pool kin to the orb without cloning it.
    const paint = (el: HTMLDivElement, t: number, shift: number) => {
      el.style.setProperty('--glow-a', `hsl(${wanderHue(t, ph[0] + shift).toFixed(1)} 85% 62% / 0.9)`);
      el.style.setProperty('--glow-b', `hsl(${wanderHue(t, ph[1] + shift * 1.3).toFixed(1)} 85% 58% / 0.8)`);
      el.style.setProperty('--glow-cx', `${(35 + 14 * Math.sin(t * 0.4 + ph[2] + shift)).toFixed(1)}%`);
      el.style.setProperty('--glow-cy', `${(35 + 14 * Math.cos(t * 0.31 + ph[3] + shift)).toFixed(1)}%`);
    };

    // Advance the ambient pools to time `t`: wandering position, breathing
    // opacity, morphing silhouette, wandering palette. Returns the frame's node
    // list with slots 1..N filled (slot 0 — the orb — is the caller's).
    const placeAmbients = (t: number, w: number, h: number): (GlowNode | null)[] => {
      const nodes: (GlowNode | null)[] = new Array(NODE_COUNT).fill(null);
      for (let i = 0; i < AMBIENT_COUNT; i++) {
        const a = ambients[i];
        const el = ambientRefs.current[i];
        if (!el) continue;
        const x = w * (0.5 + a.ax * (0.68 * Math.sin(t * a.sx1 + a.px1) + 0.32 * Math.sin(t * a.sx2 + a.px2)));
        const y = h * (0.5 + a.ay * (0.68 * Math.sin(t * a.sy1 + a.py1) + 0.32 * Math.sin(t * a.sy2 + a.py2)));
        const o = AMBIENT_IDLE + AMBIENT_BREATHE * (0.5 + 0.5 * Math.sin(t * a.bs + a.bp));
        el.style.transform = `translate(${(x - a.size / 2).toFixed(1)}px, ${(y - a.size / 2).toFixed(1)}px)`;
        el.style.opacity = o.toFixed(3);
        el.style.borderRadius = blobRadius(t, a.mp);
        paint(el, t, a.cs);
        nodes[i + 1] = { x, y, size: a.size, o };
      }
      return nodes;
    };

    // The gooey pass: for every pair of pools close enough to reach each
    // other, light a bridge at their midpoint — stretched along the axis
    // between them, pinched across it, swelling and brightening as they close
    // in — so the two silhouettes read as one blob necking apart.
    const drawBridges = (t: number, nodes: (GlowNode | null)[]) => {
      for (let k = 0; k < PAIRS.length; k++) {
        const el = bridgeRefs.current[k];
        if (!el) continue;
        const [i, j] = PAIRS[k];
        const na = nodes[i];
        const nb = nodes[j];
        const minO = na && nb ? Math.min(na.o, nb.o) : 0;
        if (!na || !nb || minO <= 0.005) {
          el.style.opacity = '0';
          continue;
        }
        const dx = nb.x - na.x;
        const dy = nb.y - na.y;
        const d = Math.hypot(dx, dy);
        const reach = ((na.size + nb.size) / 2) * REACH;
        const eased = smooth01(1 - d / reach);
        if (eased <= 0.001) {
          el.style.opacity = '0';
          continue;
        }
        // The bridge spans the gap: scaled to the pair's distance along the
        // axis, pinched across it into a neck that fattens as the pools merge.
        const sx = Math.max(0.35, (d * 0.9) / BRIDGE_SIZE);
        const sy = 0.3 + 0.4 * eased;
        el.style.transform =
          `translate(${((na.x + nb.x) / 2 - BRIDGE_SIZE / 2).toFixed(1)}px, ${((na.y + nb.y) / 2 - BRIDGE_SIZE / 2).toFixed(1)}px) ` +
          `rotate(${Math.atan2(dy, dx).toFixed(3)}rad) scale(${sx.toFixed(3)}, ${sy.toFixed(3)})`;
        el.style.opacity = (minO * eased).toFixed(3);
        el.style.borderRadius = blobRadius(t, 1.1 * (k + 1));
        paint(el, t, 0.23 * (k + 1));
      }
    };

    if (reduced) {
      // One static frame: pools frozen mid-wander with whatever bridges their
      // positions call for. The cursor orb (node 0 stays null) never activates.
      const t0 = 2.4;
      const nodes = placeAmbients(t0, layer.clientWidth, layer.clientHeight);
      drawBridges(t0, nodes);
      return;
    }

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
      const t = now / 1000;
      const w = layer.clientWidth;
      const h = layer.clientHeight;

      // The ambient field flows whether or not the pointer has arrived.
      const nodes = placeAmbients(t, w, h);

      if (tx !== null && ty !== null) {
        // Magnetic pull toward the cursor, and opacity easing toward the
        // travelling/resting target.
        x += (tx - x) * PULL;
        y += (ty - y) * PULL;
        const target = now - lastMoveAt < MOVE_WINDOW_MS ? MOVE_OPACITY : IDLE_OPACITY;
        opacity += (target - opacity) * OPACITY_EASE;

        orb.style.transform = `translate(${x - SIZE / 2}px, ${y - SIZE / 2}px)`;
        orb.style.opacity = opacity.toFixed(3);
        orb.style.borderRadius = blobRadius(t, 0);
        paint(orb, t, 0);
        // The orb joins the gooey field as node 0, so ambient pools it drifts
        // past reach out and meld with it.
        nodes[0] = { x, y, size: SIZE, o: opacity };

        // Edge blooms — one per side, lit by the *orb's* proximity (not the raw
        // cursor's) so they inherit the same lazy delay. Each bloom sits on the
        // nearest edge point, mostly outside the layer, and leans further inward
        // as the orb closes in, melding with it.
        for (let i = 0; i < EDGES.length; i++) {
          const el = edgeRefs.current[i];
          if (!el) continue;
          const { nx, ny } = EDGES[i];
          const dist = nx < 0 ? x : nx > 0 ? w - x : ny < 0 ? y : h - y;
          const eased = smooth01(1 - dist / EDGE_RANGE);
          if (eased <= 0.001) {
            el.style.opacity = '0';
            continue;
          }
          // Anchor on the edge at the orb's coordinate, pushed outward so the
          // bulk hangs past the bounds; approach pulls it in and swells it.
          const cx = nx !== 0 ? (nx < 0 ? 0 : w) : x;
          const cy = ny !== 0 ? (ny < 0 ? 0 : h) : y;
          const out = EDGE_SIZE * (0.5 - 0.22 * eased);
          const scale = 0.55 + 0.45 * eased;
          el.style.transform =
            `translate(${cx + nx * out - EDGE_SIZE / 2}px, ${cy + ny * out - EDGE_SIZE / 2}px) scale(${scale.toFixed(3)})`;
          el.style.opacity = (opacity * eased).toFixed(3);
          el.style.borderRadius = blobRadius(t, 0.9 * (i + 1));
          paint(el, t, 0.35 * (i + 1));
        }
      }

      drawBridges(t, nodes);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <GlowLayer ref={layerRef} aria-hidden="true">
      {/* Bridges sit lowest — necks of light the pools above them stretch over. */}
      {PAIRS.map((_, k) => (
        <Blob
          key={`bridge-${k}`}
          ref={(el) => { bridgeRefs.current[k] = el; }}
          style={{ width: BRIDGE_SIZE, height: BRIDGE_SIZE, opacity: 0 }}
        />
      ))}
      {/* Ambient pools — sized by their per-mount seeds in the effect. */}
      {Array.from({ length: AMBIENT_COUNT }, (_, i) => (
        <Blob
          key={`ambient-${i}`}
          ref={(el) => { ambientRefs.current[i] = el; }}
          style={{ opacity: 0 }}
        />
      ))}
      {EDGES.map((_, i) => (
        <Blob
          key={i}
          ref={(el) => { edgeRefs.current[i] = el; }}
          style={{ width: EDGE_SIZE, height: EDGE_SIZE, opacity: 0 }}
        />
      ))}
      <Blob ref={orbRef} style={{ width: SIZE, height: SIZE, opacity: 0 }} />
    </GlowLayer>
  );
}
