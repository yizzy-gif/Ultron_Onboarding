import styled from 'styled-components';

// The glow's home layer. Absolute (not fixed) so it lives inside a scene's
// stacking context: mounted right after the decorative backdrop and before the
// content, it lands above the connecting dots/lines but beneath every page
// element. No z-index of its own — DOM order does the layering. Clips the orb
// when it trails near the edges; never intercepts pointer events.
export const GlowLayer = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`;

// The single magnetic orb. Everything that moves per frame — position (via
// transform), opacity, hue — is written directly to the element's style by the
// rAF loop; this only carries the shared shape. A filled radial gradient
// (solid center feathering to nothing) plus a heavy blur makes it read as a
// soft pool of color drifting through the scene rather than a hard disc.
export const Orb = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    var(--glow-color, hsl(210 85% 62% / 0.85)) 0%,
    var(--glow-color, hsl(210 85% 62% / 0.85)) 35%,
    transparent 72%
  );
  filter: blur(32px);
  will-change: transform, opacity;
`;
