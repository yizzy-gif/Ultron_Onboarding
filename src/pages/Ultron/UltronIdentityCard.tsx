/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — identity card.
   Sits at the top of the Ultron secondary-nav body. Shows the Ultron identity
   (the animated Circle mark used on the Live landing) beside the Ultron name and
   a trailing compose action — a compact presence card, no cycling status line.
   ───────────────────────────────────────────────────────────────────────────── */

import styled from 'styled-components';
import { Edit02Icon } from 'alloy-design-system';
import { UltronWordmark } from './UltronWordmark';

/** Identity row for the Ultron secondary nav: the wordmark — with Ultron's own
 *  Circle mark standing in for its O — and a trailing pencil that opens a new
 *  (empty) Ultron page. The card itself is a button (returns to Live), so the
 *  pencil is a focusable role="button" span rather than a nested <button>, and
 *  it stops propagation so it doesn't also trigger the card's Live navigation. */
export function UltronIdentityCard({ onNew }: { onNew?: () => void }) {
  return (
    <Card>
      <Name />
      <AddButton
        role="button"
        tabIndex={0}
        aria-label="New page"
        onClick={e => { e.stopPropagation(); onNew?.(); }}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.stopPropagation();
            onNew?.();
          }
        }}
      >
        <Edit02Icon size={16} />
      </AddButton>
    </Card>
  );
}

// ── Styled ───────────────────────────────────────────────────────────────────

/* With the mark now inside the word, the card is the logotype plus its trailing
   action — no leading icon slot, so the wordmark starts at the card's own edge. */
const Card = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
  font-family: var(--font-sans);
`;

/* The logotype, sized and coloured for this card and flexed to push the compose
   action to the far edge. */
const Name = styled(UltronWordmark)`
  min-width: 0;
  flex: 1;
  font-size: var(--text-lg);
  color: var(--color-content-primary);
`;

/* Trailing compose (pencil) action. A role="button" span (the card wrapping it
   is already a button, so a nested <button> would be invalid) — still
   keyboard-focusable. */
const AddButton = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-6);
  height: var(--space-6);
  border-radius: var(--radius-md);
  /* Rests a step lighter than supporting text — it's a quiet affordance on the
     identity card, not a peer of the wordmark. Hover still takes it to primary,
     so dropping the resting tone widens that step rather than flattening it. */
  color: var(--color-content-tertiary);
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-default),
              color var(--duration-fast) var(--ease-default);

  &:hover {
    background: var(--color-bg-tertiary);
    color: var(--color-content-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }
`;
