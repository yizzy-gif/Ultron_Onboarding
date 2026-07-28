import styled, { css, keyframes } from 'styled-components';

export const SECONDARY_NAV_WIDTH = 270;
export const SECONDARY_NAV_MIN_WIDTH = 220;
export const SECONDARY_NAV_MAX_WIDTH = 520;

export const SecondaryNavRoot = styled.nav<{ $isVisible: boolean; $width: number; $isResizing: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${p => (p.$isVisible ? `${p.$width}px` : '0px')};
  height: 100%;
  flex-shrink: 0;
  background: var(--color-bg-primary, white);
  overflow: hidden;
  /* Skip the width transition during an active drag so the panel tracks
     the cursor exactly; keep it for visibility toggles. */
  transition: ${p => (p.$isResizing ? 'none' : 'width 200ms ease')};
`;

// ── Part 1: Top (sticky header + search) ──────────────────────────────────

export const NavTop = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg-primary, white);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`;

export const HeadingRow = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px 12px 6px 12px;
`;

export const NavHeading = styled.h2`
  margin: 0;
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-medium, 500);
  line-height: var(--line-height-relaxed, 1.5);
  letter-spacing: var(--tracking-wide, 0.02em);
  color: var(--color-content-tertiary, #475569);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SearchRow = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 0 12px 8px;

  /* The SearchField root sits in the first slot — flex it so the input
     fills whatever room is left after the fixed-size filter button,
     even when the secondary nav is dragged down to its min width. */
  > div {
    flex: 1;
    min-width: 0;
  }
`;

export const FilterBtn = styled.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 6px;
  cursor: pointer;
  background: var(--color-bg-primary, white);
  border: 1px solid var(--color-border-opaque, #e8eaee);
  color: var(--color-content-secondary, #1c222a);
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-secondary, #f6f7f9);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #1969fe);
    outline-offset: 1px;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

// ── Part 2: Middle (scrollable menu items) ────────────────────────────────

export const NavMiddle = styled.div`
  flex: 1;
  overflow-y: auto;
  min-height: 0;
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: var(--color-border-opaque, #e8eaee);
    border-radius: 99px;
  }
`;

/** Group accordion row — layout matches ListItem with --li-px:0 */
export const GroupRow = styled.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 32px;
  padding: 0 4px;
  /* Chevron→label gap matches the menu rows' --li-gap so group labels and child
     labels share one indentation. */
  gap: 12px;
  border-radius: 6px;
  cursor: pointer;
  color: var(--color-content-tertiary, #475569);
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-transparent, rgba(21, 21, 21, 0.05));
  }

  &:focus-visible {
    box-shadow: inset 0 0 0 2px var(--color-border-focus, #1969fe);
    border-radius: 6px;
  }
`;

/** 32×32 icon slot — matches SecNavIconSlot for visual alignment */
export const GroupIconSlot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  padding: 8px;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const GroupLabel = styled.span`
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: var(--color-content-tertiary, #475569);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const GroupChevron = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* 32px chevron slot — same width as the menu-item icon slot (SecNavIconSlot)
     so the chevron column and the case-row icon column align, and group labels
     land at the same x as menu-item labels (one shared indentation). */
  width: 32px;
  height: 16px;
  flex-shrink: 0;
  color: var(--color-content-tertiary, #475569);

  svg {
    width: 16px;
    height: 16px;
  }
`;

/* A row slides down + fades in as it mounts into a group — i.e. when a case
   moves between states (→ Working, → Done) as Ultron progresses it. */
const rowEnter = keyframes`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/**
 * Children container — indented so child labels align with the group label.
 */
export const GroupChildren = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* Align children flush with the group header / top-level items so the
     selected-row background lines up with the upper-level menu items. */
  padding-left: 0;

  /* Animate each row in on mount — the visible half of a case moving groups. */
  & > * {
    animation: ${rowEnter} var(--duration-base, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1)) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & > * { animation: none; }
  }
`;

const spotlightFade = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const spotlightGlowLoop = keyframes`
  0%, 100% {
    box-shadow:
      0 0 0 2px rgb(255 255 255 / 92%),
      0 0 24px rgb(255 255 255 / 28%);
  }
  50% {
    box-shadow:
      0 0 0 2px rgb(255 255 255 / 100%),
      0 0 0 5px color-mix(in srgb, var(--color-orange-content-tertiary, #f97316) 30%, transparent),
      0 0 38px color-mix(in srgb, var(--color-orange-content-tertiary, #f97316) 46%, transparent);
  }
`;

const spotlightRippleLoop = keyframes`
  0% {
    opacity: 0.72;
    box-shadow: 0 0 0 0 color-mix(
      in srgb,
      var(--color-orange-content-tertiary, #f97316) 72%,
      white
    );
  }
  72%, 100% {
    opacity: 0;
    box-shadow: 0 0 0 14px transparent;
  }
`;

/** Handwriting stack for the spotlight cue, so the coach-mark reads as a note
 *  pencilled onto the screen rather than more product chrome. Deliberately no
 *  webfont: these are handwriting faces the host OS already ships, ordered
 *  macOS → Windows and ending in the generic `cursive` so every platform lands
 *  on something written rather than falling back to the UI sans. */
const handwrittenStack = `'Bradley Hand', 'Segoe Print', 'Marker Felt',
  'Chalkboard SE', 'Comic Sans MS', cursive`;

/* The cue arrives in the order someone would actually draw it: the shaft strokes
   itself from the note back toward the row, the barbs snap on at the tip, then
   the handwriting pops in beside it. Each path carries pathLength="1", so one
   dash rule covers all three regardless of their real lengths. */
const sketchDraw = keyframes`
  from { stroke-dashoffset: 1; }
  to   { stroke-dashoffset: 0; }
`;

/* Overshoots just past full size and settles back, with a degree of rotation
   shed on the way — the note lands like it was jotted, not placed. */
const notePop = keyframes`
  0%   { opacity: 0; transform: scale(0.82) rotate(-2deg); }
  55%  { opacity: 1; transform: scale(1.06) rotate(0.8deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
`;

/** Timings for the cue's entrance, shared so the note starts as the shaft
 *  finishes and the whole thing reads as one gesture. */
const SHAFT_MS = 420;
const BARB_MS = 180;
const NOTE_DELAY_MS = SHAFT_MS - 60;

/** Full-screen scrim used by the post-setup guided handoff. It is a backdrop
 *  button: clicking outside the elevated event row dismisses the spotlight. */
export const SpotlightScrim = styled.button`
  appearance: none;
  position: fixed;
  inset: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  cursor: default;
  background: rgb(2 6 12 / 78%);
  backdrop-filter: blur(2px);
  animation: ${spotlightFade} 260ms var(--ease-out, ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/** Holds the event row's place in the menu while its interactive copy is
 *  rendered at document level, safely above every app-shell stacking context. */
export const SpotlightPlaceholder = styled.div`
  width: 100%;
  visibility: hidden;
  pointer-events: none;
`;

/** Fixed, portal-rendered event row that sits definitively above the scrim. */
export const SpotlightRow = styled.div<{ $mobile?: boolean }>`
  position: fixed;
  z-index: 1001;
  border-radius: 8px;
  background: var(--color-bg-primary, #fff);
  box-shadow:
    0 0 0 2px rgb(255 255 255 / 92%),
    0 0 24px rgb(255 255 255 / 28%);
  animation: ${spotlightGlowLoop} 2.4s ease-in-out infinite;

  /* The measured mobile rectangle already includes the row's selected-state
     inset. Remove the copied button's own outer margin inside the portal so its
     icon, label, radius, width, and height land exactly over the original. */
  ${p => p.$mobile && css`
    & > button {
      width: 100%;
      height: 100%;
      margin: 0;
    }
  `}

  /* Two evenly spreading rings keep the surfaced event gently radiating until
     the user opens it. Shadow spread moves every edge by the same distance, so
     the row itself never scales or stretches. */
  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    animation: ${spotlightRippleLoop} 2.4s ease-out infinite;
  }

  &::after {
    animation-delay: 1.2s;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;

    &::before,
    &::after {
      display: none;
    }
  }
`;

/** Portal-rendered guidance follows the measured row even when the secondary
 *  navigation has been resized. */
export const SpotlightPrompt = styled.div<{ $placement?: 'right' | 'above' }>`
  position: fixed;
  z-index: 1002;
  display: flex;
  flex-direction: ${p => (p.$placement === 'above' ? 'column' : 'row')};
  align-items: center;
  gap: ${p => (p.$placement === 'above' ? 'var(--space-1, 4px)' : 'var(--space-2, 8px)')};
  width: max-content;
  max-width: min(360px, calc(100vw - 32px));
  /* The sketched arrow leads in from the left and the note sits beside it, so
     the two align on the arrow's shaft rather than on their boxes. */
  align-items: center;
  transform: ${p => (p.$placement === 'above' ? 'translateY(-100%)' : 'translateY(-50%)')};
  text-align: ${p => (p.$placement === 'above' ? 'center' : 'left')};
  pointer-events: none;
  /* Sits on the dimmed scrim in both themes, so the white stays literal — a
     theme-flipping token would go dark-on-dark. */
  color: #fff;
  /* Handwritten rather than the UI sans — this is an aside to the operator, not
     part of the interface. Handwriting faces run small and loose for their point
     size, so it takes a step up the scale and a tighter line height to hold
     together against the sans around it. */
  font-family: ${handwrittenStack};
  font-size: var(--text-lg, 18px);
  font-weight: var(--font-weight-bold, 700);
  line-height: var(--line-height-snug, 1.25);
  letter-spacing: 0.01em;
  text-wrap: balance;
  text-shadow: 0 2px 12px rgb(0 0 0 / 65%);
  /* The container only positions — the arrow and the note carry their own
     entrances (see SpotlightArrow / SpotlightNote), so the translateY that
     centres this on the row stays put and never fights their transforms. */

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/** The sketched arrow, stroking itself on from the note back toward the row. */
export const SpotlightArrow = styled.svg`
  flex: 0 0 auto;
  overflow: visible;

  path {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: ${sketchDraw} ${SHAFT_MS}ms var(--ease-out, ease-out) both;
  }

  /* The barbs are struck once the shaft has arrived at the tip. */
  path + path {
    animation-duration: ${BARB_MS}ms;
    animation-delay: ${SHAFT_MS - 40}ms;
  }

  @media (prefers-reduced-motion: reduce) {
    path,
    path + path {
      stroke-dashoffset: 0;
      animation: none;
    }
  }
`;

/** The handwritten note, popping in as the arrow lands. */
export const SpotlightNote = styled.span`
  display: inline-block;
  transform-origin: left center;
  animation: ${notePop} 420ms ${NOTE_DELAY_MS}ms
    cubic-bezier(0.34, 1.56, 0.64, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: ${spotlightFade} 200ms both;
    transform: none;
  }
`;

/** "Show N more" / "Show less" toggle row inside a group's children. Text
 *  aligns under the child labels (past the 32px icon slot + gaps). */
export const ShowMoreRow = styled.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 32px;
  /* Left inset aligns the toggle text under the child labels (li-px 4 + icon
     slot 32 + --li-gap 12). */
  padding: 0 8px 0 48px;
  border-radius: 6px;
  cursor: pointer;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: var(--color-content-inverse-tertiary, #87919f);
  transition: background 150ms ease-in-out, color 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-transparent, rgba(21, 21, 21, 0.05));
    color: var(--color-content-tertiary, #475569);
  }

  &:focus-visible {
    outline: none;
    box-shadow: inset 0 0 0 2px var(--color-border-focus, #1969fe);
  }
`;

/** Wrapper for GroupRow + GroupChildren — keeps internal gap tight. When
 *  `$outlined`, the whole group (header + items) is boxed to stand out. */
export const MenuGroupWrapper = styled.div<{ $outlined?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${p => p.$outlined && css`
    border: 1px solid var(--color-border-opaque);
    border-radius: 12px;
    padding: 4px;
  `}
`;

/** Quiet section label inside the menu body (e.g. "My apps") */
export const MenuSectionLabel = styled.div`
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: var(--color-content-inverse-tertiary, #87919f);
  padding: 4px 4px 2px;
`;

// ── Part 3: Bottom (page entries, bottom-aligned) ─────────────────────────

export const NavBottom = styled.div`
  flex-shrink: 0;
  width: 100%;
  padding: 0 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

// 4px-wide invisible drag handle anchored to the right edge of the
// SecondaryNavRoot. The visible affordance is just a slightly wider
// hit area; the actual visual divider is the existing border-right.
export const ResizeHandle = styled.div<{ $isResizing: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 6px;
  height: 100%;
  cursor: col-resize;
  z-index: 10;
  /* Translate half the width over the border so the cursor zone straddles
     the existing 1px border-right. */
  transform: translateX(3px);
  background: ${p =>
    p.$isResizing
      ? 'var(--color-border-focus, #1969fe)'
      : 'transparent'};
  transition: background var(--duration-fast, 120ms) var(--ease-default, ease);

  &:hover {
    background: var(--color-border-focus, #1969fe);
  }
`;

export const BottomDivider = styled.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
`;

/* Inline divider between menu entries (e.g. above the Done group). */
export const MenuDivider = styled.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  margin: var(--space-1) 0;
  background: var(--color-border-opaque, #e8eaee);
`;

export const BottomItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  color: var(--color-content-inverse-tertiary, #87919f);
`;

// ── Shared icon slot for single-level menu items ──────────────────────────

export const SecNavIconSlot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  /* Centered, no horizontal padding: the 8px inset that gives the hover/selected
     background breathing room comes from the row's --li-px, so the icon centers
     in the full 32px slot and aligns with the group chevron column. */
  padding: 8px 0;
  color: var(--color-content-tertiary, #475569);

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const TrailingIconBtn = styled.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-transparent, rgba(21, 21, 21, 0.05));
  }

  svg {
    width: 16px;
    height: 16px;
    color: var(--color-content-tertiary, #475569);
  }
`;
