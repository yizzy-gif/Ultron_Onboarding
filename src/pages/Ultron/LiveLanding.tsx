/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — Live landing.
   The default page state: Ultron's resting presence. A large Orbit identity
   mark (cells riding tilted rings around a luminous core) sits near the top of
   the page, over the Ultron name and a status line that cycles through what
   Ultron is watching (reusing the slide-up + blinking-ellipsis motion of the
   identity card). Below it, a live feed of event cards: a fixed set of rows,
   where one row at a time pops in (scale + fade) with the next event — no
   sliding, no layout shift. The user lands here; selecting a case in the
   sidebar leaves it, and clicking the identity returns to it.
   DEMO ONLY.
   ───────────────────────────────────────────────────────────────────────────── */

import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { AgentMark } from './AgentMark';
import type { ThreadItem } from './types';

/** What Ultron is doing while it rests on the Live landing — cycled below the
 *  mark, matching the secondary-nav identity card's copy. */
const STATUS_MESSAGES = [
  'Monitoring 142 active shifts',
  'Scanning for coverage risks',
  'Analyzing attendance trends',
  'Optimizing open orders',
];

const STATUS_INTERVAL_MS = 2800;

/** Rendered px of the Orbit hero mark — large enough to read as the page's
 *  hero, scaled down on short/narrow viewports via the responsive override. */
const MARK_SIZE = 200;

/** How many event cards the feed shows at once, how often a new one arrives,
 *  and how long the enter/leave motion runs (kept shorter than the interval so
 *  each transition settles before the next event lands). */
const FEED_WINDOW = 6;
const FEED_INTERVAL_MS = 2200;
const FEED_ANIM_MS = 520;

/** Lifecycle phase of a feed card, driving its CSS transition. */
type CardPhase = 'entering' | 'in' | 'leaving';

interface FeedCard {
  key: number;
  thread: ThreadItem;
  phase: CardPhase;
}

interface LiveLandingProps {
  /** The cases Ultron is tracking — rendered as the live event feed below the
   *  hero: a conveyor where each card pops + fades in at the bottom, the stack
   *  slides up, and the top card fades out as it leaves. */
  threads: ThreadItem[];
}

export function LiveLanding({ threads }: LiveLandingProps) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI(x => (x + 1) % STATUS_MESSAGES.length), STATUS_INTERVAL_MS);
    return () => clearInterval(t);
  }, []);

  // The feed is a conveyor of cards. Each tick appends the next event at the
  // bottom (entering → it expands + pops + fades in, sliding the stack up) and
  // retires the oldest (leaving → it collapses + fades out at the top), then
  // drops the retired card once its exit motion finishes.
  const windowSize = Math.min(FEED_WINDOW, threads.length);
  const [cards, setCards] = useState<FeedCard[]>([]);
  const keyRef = useRef(0);
  const cursorRef = useRef(0);

  useEffect(() => {
    if (threads.length === 0) {
      setCards([]);
      return;
    }
    // Seed a full window already settled in place, then start the conveyor.
    keyRef.current = 0;
    setCards(
      Array.from({ length: windowSize }, (_, r) => ({
        key: keyRef.current++,
        thread: threads[r % threads.length],
        phase: 'in' as CardPhase,
      })),
    );
    cursorRef.current = windowSize;

    const timers: ReturnType<typeof setTimeout>[] = [];
    const t = setInterval(() => {
      const thread = threads[cursorRef.current % threads.length];
      cursorRef.current += 1;
      const newKey = keyRef.current++;

      setCards(prev => {
        const live = prev.filter(c => c.phase !== 'leaving');
        const retireKey = live.length >= windowSize ? live[0].key : null;
        const updated = prev.map(c =>
          c.key === retireKey ? { ...c, phase: 'leaving' as CardPhase } : c,
        );
        return [...updated, { key: newKey, thread, phase: 'entering' as CardPhase }];
      });

      // Promote the new card to its resting phase shortly after it mounts so
      // the collapsed → open transition actually animates (a short timeout is
      // used over rAF, which can stall when the page isn't actively painting).
      timers.push(
        setTimeout(() => {
          setCards(prev =>
            prev.map(c => (c.key === newKey ? { ...c, phase: 'in' as CardPhase } : c)),
          );
        }, 40),
      );

      // Remove cards once their exit motion has played out.
      timers.push(
        setTimeout(() => {
          setCards(prev => prev.filter(c => c.phase !== 'leaving'));
        }, FEED_ANIM_MS),
      );
    }, FEED_INTERVAL_MS);

    return () => {
      clearInterval(t);
      timers.forEach(clearTimeout);
    };
  }, [threads.length, windowSize]);

  return (
    <Stage>
      <Hero>
        <Mark>
          <AgentMark mark="orbit" size={MARK_SIZE} tone="auto" state="active" aria-label="Ultron" />
        </Mark>
        <Name>Ultron</Name>
        <Status role="status" aria-live="polite">
          {/* Text + dots share one keyed line so they slide up + fade in together
              on each swap; the dots keep their own blink inside. */}
          <StatusLine key={i}>
            <StatusText>{STATUS_MESSAGES[i]}</StatusText>
            <Dots aria-hidden="true"><span>.</span><span>.</span><span>.</span></Dots>
          </StatusLine>
        </Status>
      </Hero>

      {cards.length > 0 && (
        <Feed aria-label="Live event feed">
          {cards.map(c => (
            // The Row wrapper carries the lifecycle phase: it animates its
            // height (slide), opacity (fade) and scale (pop) as the phase moves
            // entering → in → leaving. The inner Clip hides the card while the
            // row is collapsed.
            <Row key={c.key} data-phase={c.phase} aria-hidden={c.phase === 'leaving' || undefined}>
              <Clip>
                <EventCard>
                  <EventCap>{c.thread.capability}</EventCap>
                  <EventTitle>{c.thread.title}</EventTitle>
                </EventCard>
              </Clip>
            </Row>
          ))}
        </Feed>
      )}
    </Stage>
  );
}

// ── Styled ───────────────────────────────────────────────────────────────────

/* Fills the page: the hero sits near the top, the event feed flows beneath it
   (the feed auto-scrolls itself, so the stage doesn't scroll). Centered
   horizontally; content starts from the top (orbit moved up from the old
   vertical center to make room for the feed). */
const Stage = styled.div`
  flex: 1;
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
  padding: var(--space-10) var(--space-6) 0;
  text-align: center;
  font-family: var(--font-sans);
`;

/* Landing entrance — the orbit and the list fade in while sliding up into
   place. Plays on mount, so it runs right after the case detail closes (the
   card eases down + out, then the landing rises in). */
const landingIn = keyframes`
  from { opacity: 0; transform: translateY(var(--space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* The identity block — orbit mark, name, status — held together at the top. */
const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  animation: ${landingIn} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* Soft halo behind the mark — a faint radial bloom so the sphere reads as lit
   on the flat page rather than floating in a void. */
const Mark = styled.div`
  display: grid;
  place-items: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -20%;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      var(--color-bg-secondary, rgba(70, 108, 255, 0.06)) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  /* Canvas sits above the bloom. */
  & > canvas {
    position: relative;
    z-index: 1;
  }

  @media (max-height: 640px), (max-width: 560px) {
    & > canvas {
      width: 168px !important;
      height: 168px !important;
    }
  }
`;

const Name = styled.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`;

const Status = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  min-height: var(--space-4);
`;

/* Each status line slides up + fades in as it swaps (keyed remount). The text
   AND its trailing dots ride this one element, so they move together. */
const statusIn = keyframes`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`;

const StatusLine = styled.span`
  display: inline-flex;
  align-items: baseline;
  animation: ${statusIn} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const StatusText = styled.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;

/* Animated trailing ellipsis — three dots blink in sequence (typing). */
const blink = keyframes`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`;

const Dots = styled.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);

  & > span {
    animation: ${blink} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`;

// ── Event feed ─────────────────────────────────────────────────────────────

/* Feed viewport — the conveyor window below the hero. Both edges are masked to
   transparent so cards fade in as they rise into the bottom and fade out as
   they leave the top, on top of each card's own enter/leave fade. */
const Feed = styled.div`
  position: relative;
  flex: 1;
  min-height: 0;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-align: left;
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 12%, #000 80%, transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0%, #000 12%, #000 80%, transparent 100%);
  /* Rises in just after the hero (slight stagger) so the orbit leads and the
     list follows on the landing's entrance. */
  animation: ${landingIn} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  animation-delay: 90ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* Conveyor row. Drives all three motions off the data-phase attribute:
     • height  — grid-template-rows 1fr → 0fr collapses the row, so adding one
       at the bottom and collapsing one at the top slides the whole stack up;
     • opacity — fades the card in on entry and out on exit;
     • transform — a slight scale (+ lift on entry) for the pop.
   'in' is the resting state (full height, opaque, no transform). */
const Row = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transform: scale(1);
  transition:
    grid-template-rows ${FEED_ANIM_MS}ms var(--ease-out, ease),
    opacity ${FEED_ANIM_MS}ms var(--ease-out, ease),
    transform ${FEED_ANIM_MS}ms var(--ease-out, ease);

  &[data-phase='entering'] {
    grid-template-rows: 0fr;
    opacity: 0;
    transform: scale(0.92) translateY(var(--space-2));
  }

  &[data-phase='leaving'] {
    grid-template-rows: 0fr;
    opacity: 0;
    transform: scale(0.98);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: opacity ${FEED_ANIM_MS}ms linear;
    &[data-phase='entering'],
    &[data-phase='leaving'] {
      transform: none;
    }
  }
`;

/* Clips the card while its row is collapsed, so height changes read cleanly.
   Bottom spacing lives here (inside the clip) so a collapsed row leaves no
   residual gap. */
const Clip = styled.div`
  overflow: hidden;
  padding-bottom: var(--space-3);
`;

/* Borderless card on the Alloy secondary surface, resting at 50% opacity.
   Hover lifts a card to full opacity. */
const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
  opacity: 0.5;
  transition: opacity var(--duration-fast, 120ms) var(--ease-out, ease);

  &:hover { opacity: 1; }
`;

/* Capability eyebrow above the event title. */
const EventCap = styled.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-slate-content-tertiary);
`;

const EventTitle = styled.span`
  font-size: var(--text-sm);
  color: var(--color-slate-content-secondary);
`;
