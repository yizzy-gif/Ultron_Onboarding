import styled from 'styled-components';

// The glow's home layer. Absolute (not fixed) so it lives inside a scene's
// stacking context: mounted right after the decorative backdrop and before the
// content, it lands above the connecting dots/lines but beneath every page
// element. No z-index of its own — DOM order does the layering. Clips the orb
// (and the edge blooms, which deliberately hang past the bounds) so light reads
// as bleeding in from the edges; never intercepts pointer events.
export const GlowLayer = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`;

// A morphing blob of light — used for the cursor orb, the edge blooms, the
// free-wandering ambient pools, and the gooey bridges that meld nearby pools.
// Everything that moves per frame — position (via transform), opacity, the
// gradient's two wandering hues and drifting center, and the organic
// border-radius morph — is written directly to the element's style (as CSS
// custom properties) by the rAF loop; this only carries the shared look. The
// fill is a two-stop radial gradient between independently color-shifting
// stops, whose silhouette comes entirely from the animated border-radius,
// softened by a heavy blur so it reads as a pool of color, not a hard shape.
export const Blob = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: radial-gradient(
    circle at var(--glow-cx, 35%) var(--glow-cy, 35%),
    var(--glow-a, hsl(210 85% 62% / 0.9)),
    var(--glow-b, hsl(250 85% 60% / 0.8)) 78%
  );
  filter: blur(48px);
  will-change: transform, opacity, border-radius;
`;
