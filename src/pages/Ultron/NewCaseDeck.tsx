/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — New-case deck (Live-landing "T" overlay).

   Pressing T on the Live landing (Ultron's top-level resting page) surfaces every
   New case as a stacked deck. The cards animate in one at a time (a 5-second beat
   between each), building the stack from the front.

   At any moment exactly ONE card is expanded — the front card — fusing the
   triggering header with the case's question, plan, and CTAs in a single combined
   card (see UltronDeckCard). Every card behind it sits collapsed, showing just the
   triggering header (the same header seen on each individual case page). Acting on
   the front card animates it out; the next collapsed card then expands into the
   front. DEMO ONLY.
   ───────────────────────────────────────────────────────────────────────────── */

import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Button, Eyebrow, Badge, XCloseIcon } from 'alloy-design-system';
import type { ThreadItem } from './types';
import { SEVERITY_RANK } from './ultronShared';
import { UltronDeckCard } from './UltronCard';

/** Beat between each card animating in. */
const REVEAL_MS = 5000;
/** The deck mirrors the New group — only the top-N priority cases. */
const DECK_MAX = 5;
/** How long the front card's exit motion plays before it commits + leaves. Kept
 *  in sync with the `data-exiting` transition on Row below. */
const EXIT_MS = 320;

/** A New case awaiting a decision — the statuses that carry a question + plan. */
const isDeckCase = (t: ThreadItem) =>
  t.status === 'needs_approval' || t.status === 'recommended';

interface NewCaseDeckProps {
  threads: ThreadItem[];
  stageById: Record<string, number>;
  onAction: (threadId: string, label: string) => void;
  onRefinement: (label: string) => void;
  onSaveWorkflow: (thread: ThreadItem) => void;
  onToggleSaveWorkflow: (threadId: string) => void;
  pendingWorkflowIds: string[];
  savedWorkflowIds: string[];
  /** Report that a card has animated in — the sidebar New group fills in lockstep
   *  with the reveal. */
  onReveal?: (threadId: string) => void;
  /** Dismiss the deck and return to the resting Live landing. */
  onClose: () => void;
}

export function NewCaseDeck({
  threads, stageById, onAction, onRefinement, onSaveWorkflow, onToggleSaveWorkflow, pendingWorkflowIds, savedWorkflowIds, onReveal, onClose,
}: NewCaseDeckProps) {
  // Freeze the deck order at open time (severity-first, then authored recency) so
  // acting on cases — which shifts their status out of New — doesn't reshuffle the
  // stack under the operator. We keep the thread ids and re-read each thread live.
  const [order] = useState<string[]>(() =>
    threads
      .filter(isDeckCase)
      .map((t, index) => ({ t, index }))
      .sort((a, b) => (SEVERITY_RANK[a.t.severity] - SEVERITY_RANK[b.t.severity]) || (a.index - b.index))
      .slice(0, DECK_MAX)
      .map(({ t }) => t.id),
  );

  // How many cards have animated in so far — one every REVEAL_MS.
  const [revealed, setRevealed] = useState(1);
  // Cards the operator has acted on (fully gone from the deck) and cards currently
  // playing their exit motion (still in the DOM, animating out).
  const [actioned, setActioned] = useState<Set<string>>(new Set());
  const [exiting, setExiting] = useState<Set<string>>(new Set());
  const exitTimers = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  // Reveal the next card after the beat, until the whole stack is in.
  useEffect(() => {
    if (revealed >= order.length) return;
    const t = setTimeout(() => setRevealed(r => r + 1), REVEAL_MS);
    return () => clearTimeout(t);
  }, [revealed, order.length]);

  // Escape dismisses the deck.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => {
    const timers = exitTimers.current;
    return () => { timers.forEach(t => clearTimeout(t)); };
  }, []);

  // The front card — the first card not yet acted on — is the single expanded one.
  const frontIndex = order.findIndex(id => !actioned.has(id));
  // Once every card is acted on, the deck is spent — fold it away.
  useEffect(() => {
    if (order.length > 0 && frontIndex === -1) {
      const t = setTimeout(onClose, 260);
      return () => clearTimeout(t);
    }
  }, [frontIndex, order.length, onClose]);

  // Always keep the front card revealed even if the operator races ahead of the
  // 5s cadence (acting before the next card has animated in on its own).
  const shownCount = Math.max(revealed, frontIndex + 1);

  // As each card comes into view, report it up so the sidebar New group fills in
  // lockstep with the deck reveal. Idempotent on the store side.
  useEffect(() => {
    order.slice(0, shownCount).forEach(id => onReveal?.(id));
  }, [shownCount]); // eslint-disable-line react-hooks/exhaustive-deps

  const act = (thread: ThreadItem, label: string) => {
    // Play the front card's exit, then commit the action (which shifts the case
    // out of New) and drop it from the deck — the next card slides up to front and
    // expands.
    setExiting(prev => new Set(prev).add(thread.id));
    const t = setTimeout(() => {
      setExiting(prev => { const n = new Set(prev); n.delete(thread.id); return n; });
      setActioned(prev => new Set(prev).add(thread.id));
      exitTimers.current.delete(thread.id);
      onAction(thread.id, label);
    }, EXIT_MS);
    exitTimers.current.set(thread.id, t);
  };

  const remaining = order.length - actioned.size;

  return (
    <Region role="region" aria-label="New cases">
      <Head>
        <Eyebrow>Needs your decision</Eyebrow>
        <Badge>{remaining}</Badge>
        <Spacer />
        <Button variant="ghost" size="xs" iconOnly aria-label="Dismiss (Esc)" onClick={onClose}>
          <XCloseIcon size={16} />
        </Button>
      </Head>
      <Scroll>
        <Stack>
          {order.slice(0, shownCount).map((id, i) => {
            if (actioned.has(id)) return null;
            const thread = threads.find(t => t.id === id);
            if (!thread) return null;
            return (
              <Row key={id} data-exiting={exiting.has(id) || undefined}>
                <UltronDeckCard
                  thread={thread}
                  stage={stageById[id] ?? 0}
                  expanded={i === frontIndex}
                  onAction={(_id, label) => act(thread, label)}
                  onRefinement={onRefinement}
                  onSaveWorkflow={onSaveWorkflow}
                  onToggleSaveWorkflow={onToggleSaveWorkflow}
                  saveIntent={pendingWorkflowIds.includes(id)}
                  saved={savedWorkflowIds.includes(id)}
                />
              </Row>
            );
          })}
        </Stack>
      </Scroll>
    </Region>
  );
}

// ── Styled ───────────────────────────────────────────────────────────────────

/* The deck lives inside the landing's feed slot (see LiveLanding's DeckSlot), so
   it's a plain in-flow column — no scrim, no overlay — that fills that region.
   The orb hero sits above it, untouched. */
const Region = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  flex: 1;
  min-height: 0;
  width: 100%;
  /* The deck lives inside the landing Stage (which centers its text); reset to
     left so card titles / subtitles / prompts read as a normal left-aligned card. */
  text-align: left;
`;

/* The card stack scrolls within the slot; the header stays pinned above it. */
const Scroll = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  /* Bottom dissolve so a long stack fades into the page foot as it scrolls. */
  -webkit-mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
          mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

const Spacer = styled.div`
  flex: 1;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;

/* Each card animates in from collapsed + faded (the one-by-one reveal), and
   animates out — lifting + fading — when its case is acted on. */
const deckCardIn = keyframes`
  from { opacity: 0; transform: translateY(var(--space-4)) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;

const Row = styled.div`
  animation: ${deckCardIn} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  transition:
    opacity ${EXIT_MS}ms var(--ease-out, ease),
    transform ${EXIT_MS}ms var(--ease-out, ease);

  &[data-exiting] {
    opacity: 0;
    transform: translateY(calc(-1 * var(--space-3))) scale(0.98);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: opacity ${EXIT_MS}ms linear;
    &[data-exiting] { transform: none; }
  }
`;
