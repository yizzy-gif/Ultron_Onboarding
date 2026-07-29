/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — logotype.
   The wordmark with Ultron's own Circle mark standing in for its O. Shared by
   the secondary-nav identity card and the mobile header's module crumb, so the
   substitution and its typographic fitting live in exactly one place.

   Callers style it as a normal element (it forwards `className`, so
   `styled(UltronWordmark)` works) and set the size; the glyph's own geometry is
   in `em`, so it tracks whatever font-size lands on it. Only MARK_SIZE is fixed
   px — it is tuned for the --text-lg both current call sites use.
   ───────────────────────────────────────────────────────────────────────────── */

import styled from 'styled-components';
import { AgentMark } from './AgentMark';
import { wordmark, CAP_RATIO, TRACKING_EM } from './wordmark';

/** Canvas the mark draws on in its letter slot. The `circle` kind inks about 70%
 *  of its canvas, so this lands ~15.5px of figure at the wordmark's 18px, against
 *  a 12.8px cap height — the mark reads a little larger than the letters rather
 *  than matching them, which suits it carrying the identity. The canvas is
 *  centred on the letter slot and overflows it into the side room; the mark fades
 *  well before its edges, so the neighbouring letters aren't crowded. */
const MARK_SIZE = 24;

/** Room either side of the mark, in em so it scales with the type. */
const GLYPH_GAP = 0.25;

/** Correction added to the RIGHT margin so the two gaps read even. Two effects
 *  push the same way, and both are measured rather than eyeballed:
 *
 *   · Tracking. letter-spacing follows a character, and the mark is an atomic
 *     inline, not a character — so the browser adds the wordmark's tracking
 *     after R but NOT after the mark. Without this the N side is a full
 *     0.24em tighter, which is most of what made the pair look lopsided.
 *   · Side bearings. R gives back 1.12px on its right where N gives back 1.66px
 *     on its left (at 18px), so the N side already carries 0.54px — 0.03em —
 *     more air, and needs that much less margin back. */
const GLYPH_GAP_SKEW = TRACKING_EM - 0.03;

/** The logotype. Decorative to assistive tech: the split letters would be read
 *  as "ULTRN", and every current host gives its own accessible name (the nav
 *  card's button label, the crumb button's ariaLabel). */
export function UltronWordmark({ className }: { className?: string }) {
  return (
    <Lockup className={className} aria-hidden="true">
      Ultr
      <MarkGlyph>
        <AgentMark mark="circle" size={MARK_SIZE} tone="auto" state="active" />
      </MarkGlyph>
      n
    </Lockup>
  );
}

const Lockup = styled.span`
  ${wordmark}
`;

/* The mark in its letter position. The box reserves only the space a capital
   takes; the canvas is larger and centred on it, overflowing into the side room
   either side, which is empty. Sizing to the CAP band rather than the line box
   matters: a line box includes descender room the capitals never use, so a mark
   centred on it floats high. */
const MarkGlyph = styled.span`
  display: inline-block;
  position: relative;
  /* The slot IS the cap band: one cap-height square whose bottom rests on the
     baseline (an inline-block's baseline is its bottom margin edge). That makes
     it occupy exactly the space a capital does, so no nudging is needed — the
     mark's centre lands on the caps' centre by construction. */
  width: ${CAP_RATIO}em;
  height: ${CAP_RATIO}em;
  vertical-align: baseline;
  /* Side room. The margins are deliberately unequal — see GLYPH_GAP_SKEW; the
     right side has to buy back the tracking the browser doesn't apply after an
     atomic inline. Equal margins here look plainly lopsided. */
  margin-left: ${GLYPH_GAP}em;
  margin-right: ${GLYPH_GAP + GLYPH_GAP_SKEW}em;

  > canvas {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
