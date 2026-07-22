import { css } from 'styled-components';

/* ─────────────────────────────────────────────────────────────────────────────
   Liquid glass — shared surface treatment for the onboarding flow.

   A translucent, backdrop-blurred pane so the drifting backdrop dots and the
   ambient mouse glow refract through every surface. Colors are token-derived via
   color-mix, so the glass tracks the light/dark themes rather than hard-coding
   black/white. Apply to any onboarding surface or control — cards, inputs,
   buttons, panels; the element keeps its own radius, padding, and layout. The
   inset top line is the glass edge highlight.

   `backdrop-filter` needs a translucent background to show through, so these all
   drop the opaque `--color-bg-*` fills for a color-mixed tint.
   ───────────────────────────────────────────────────────────────────────────── */

export const liquidGlass = css`
  background: color-mix(in srgb, var(--color-bg-primary) 50%, transparent);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  border: 1px solid color-mix(in srgb, var(--color-content-primary) 12%, transparent);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, white 45%, transparent),
    var(--shadow-below-low);
`;

/* Brighter glass for hover / active / selected — a touch more opaque, a stronger
   edge highlight, and a deeper drop shadow so the surface reads as lifted. */
export const liquidGlassRaised = css`
  background: color-mix(in srgb, var(--color-bg-primary) 66%, transparent);
  border-color: var(--color-border-selected);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, white 60%, transparent),
    var(--shadow-below-md);
`;

/* Diagonal specular "wet" sheen for larger glass surfaces. The host must set
   `position: relative; overflow: hidden;` and lift its contents above it
   (`& > * { position: relative; z-index: 1; }`). */
export const glassSheen = css`
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      color-mix(in srgb, white 24%, transparent) 0%,
      transparent 46%
    );
    pointer-events: none;
  }
`;
