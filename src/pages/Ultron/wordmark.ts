/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — wordmark typography.
   The display lockup shared by every place the product sets its own name: the
   nav identity card, the Live landing's hero heading, and the welcome header.

   Kept in its own module rather than exported from one of those components:
   a file that exports both a React component and a plain value can't be hot
   -swapped by React Fast Refresh, so colocating this forced a full reload of
   every importer on each edit.
   ───────────────────────────────────────────────────────────────────────────── */

import { css } from 'styled-components';

/** Geist's cap height as a fraction of its font-size — measured off the rendered
 *  wordmark (12.78px of cap at 18px). Used to size anything that has to sit on
 *  the cap band rather than the line box, which includes descender room the
 *  capitals never occupy. */
export const CAP_RATIO = 0.71;

/** The wordmark treatment: caps, opened up, and carried light. The caps and the
 *  gap already give it presence, so the weight comes down two steps from
 *  semibold; at 600 the three together read shouty.
 *
 *  The tracking is deliberately past --tracking-wider (0.05em): that token is
 *  scaled for running text, and on a short run of capitals it closes up into a
 *  solid block instead of the spaced mark. Size is left to the caller — the nav
 *  sets it at --text-lg, the hero at --text-2xl.
 *
 *  No trailing-gap compensation is needed at any call site, which is worth
 *  saying because it looks like it should be: letter-spacing does leave a gap
 *  after the final letter, but the nav's wordmark is `flex: 1` so the trailing
 *  action is placed by the flex layout regardless, and the centred call sites
 *  already land their ink dead centre (all measured). */
/** The wordmark's tracking, in em. Exported because anything substituted INTO
 *  the word has to account for it by hand: letter-spacing is applied after a
 *  character, and a substituted element is an atomic inline rather than a
 *  character, so the browser does not add tracking after it. */
export const TRACKING_EM = 0.24;

export const wordmark = css`
  font-weight: var(--font-weight-regular);
  text-transform: uppercase;
  letter-spacing: ${TRACKING_EM}em;
`;
