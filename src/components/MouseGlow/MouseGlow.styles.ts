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

  /* Holographic pastel light sampled from the reference art — decorative glow,
     not UI color, so no semantic token exists for these hues. The rAF loop
     writes only the wandering hue numbers (--glow-ha/--glow-hb cool stops,
     --glow-hc warm pink→peach rim); saturation and lightness are theme knobs
     here so dark mode deepens the light instead of branching in JS. */
  --glow-sat: 86%;
  --glow-lit: 66%;
  --glow-rim-lit: 72%;

  background: radial-gradient(
    circle at var(--glow-cx, 35%) var(--glow-cy, 35%),
    hsl(var(--glow-ha, 200) var(--glow-sat) var(--glow-lit) / 0.9),
    hsl(var(--glow-hb, 245) var(--glow-sat) var(--glow-lit) / 0.8) 62%,
    hsl(var(--glow-hc, 330) var(--glow-sat) var(--glow-rim-lit) / 0.5) 88%
  );
  filter: blur(48px);
  will-change: transform, opacity, border-radius;

  /* Dark mode: the same palette read as emitted light — a touch deeper and
     less milky so the pastels don't wash grey over dark surfaces. Mirrors
     Alloy's theming (media query + .dark/.light class overrides on <html>). */
  @media (prefers-color-scheme: dark) {
    html:not(.light) & {
      --glow-sat: 78%;
      --glow-lit: 58%;
      --glow-rim-lit: 63%;
    }
  }
  html.dark & {
    --glow-sat: 78%;
    --glow-lit: 58%;
    --glow-rim-lit: 63%;
  }

  /* Neutral tone — the field rendered in the page's own secondary surface at
     half strength instead of the holographic palette, for scenes that want the
     motion without the colour. Keyed off an attribute on the layer rather than
     a prop on every blob, and it overrides the whole gradient, so the rAF loop's
     wandering hue variables simply go unread. */
  [data-glow-tone='neutral'] & {
    background: radial-gradient(
      circle at var(--glow-cx, 35%) var(--glow-cy, 35%),
      color-mix(in srgb, var(--color-bg-secondary) 50%, transparent),
      color-mix(in srgb, var(--color-bg-secondary) 50%, transparent) 62%,
      color-mix(in srgb, var(--color-bg-secondary) 25%, transparent) 88%
    );
  }
`;
