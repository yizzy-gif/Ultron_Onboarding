/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — identity card.
   Sits at the top of the Ultron secondary-nav body. Shows the Ultron identity
   (the animated Circle mark used on the Live landing) beside the Ultron name and
   a trailing "+" action — a compact presence card, no cycling status line.
   ───────────────────────────────────────────────────────────────────────────── */

import styled from 'styled-components';
import { PlusIcon } from 'alloy-design-system';
import { AgentMark } from './AgentMark';

/** Rendered px of the Circle mark in the identity card — small enough to ride the
 *  nav row while still reading as Ultron's living presence (same mark shown at
 *  hero scale on the Live landing). */
const MARK_SIZE = 32;

/** Identity row for the Ultron secondary nav: the animated Circle mark, the name,
 *  and a trailing "+" action that opens a new (empty) Ultron page. The card itself
 *  is a button (returns to Live), so the "+" is a focusable role="button" span
 *  rather than a nested <button>, and it stops propagation so it doesn't also
 *  trigger the card's Live navigation. */
export function UltronIdentityCard({ onNew }: { onNew?: () => void }) {
  return (
    <Card>
      <Mark aria-hidden="true">
        <AgentMark mark="circle" size={MARK_SIZE} tone="auto" state="active" aria-label="Ultron" />
      </Mark>
      <Name>Ultron</Name>
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
        <PlusIcon size={16} />
      </AddButton>
    </Card>
  );
}

// ── Styled ───────────────────────────────────────────────────────────────────

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  min-width: 0;
  font-family: var(--font-sans);
`;

/* Holds the animated Circle mark at a fixed size so the name + badge keep a
   stable left edge as the mark breathes. */
const Mark = styled.span`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: ${MARK_SIZE}px;
  height: ${MARK_SIZE}px;
`;

const Name = styled.span`
  min-width: 0;
  flex: 1;
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`;

/* Trailing "+" action. A role="button" span (the card wrapping it is already a
   button, so a nested <button> would be invalid) — still keyboard-focusable. */
const AddButton = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-6);
  height: var(--space-6);
  border-radius: var(--radius-md);
  color: var(--color-content-secondary);
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
