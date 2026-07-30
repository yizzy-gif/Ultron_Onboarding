// Scroll-direction hook with a dead zone so small deltas (iOS rubber-band,
// trackpad noise) don't toggle the mobile header. Returns:
//   - 'up'   after scrolling up with |delta| > deadZonePx
//   - 'down' after scrolling down with |delta| > deadZonePx *and*
//            scrollY > topThresholdPx (so the header never hides while
//            the user is still near the top)
//   - null until the first meaningful scroll event (initial render state)

import { useEffect, useRef, useState } from 'react';

export type ScrollDirection = 'up' | 'down' | null;

/** Slack for "landed exactly on the end" — scroll positions and content heights
 *  are fractional, so a clamp rarely lands on an exact integer. */
const CLAMP_EPSILON_PX = 2;

export interface UseScrollDirectionOptions {
  /** Minimum |delta| in px before a direction change fires. Default 8. */
  deadZonePx?: number;
  /** Don't return 'down' until scrollY exceeds this. Default 20. */
  topThresholdPx?: number;
  /** Element to observe. Default: every scroller in the document (see below). */
  target?: HTMLElement | null;
}

export function useScrollDirection({
  deadZonePx = 8,
  topThresholdPx = 20,
  target,
}: UseScrollDirectionOptions = {}): ScrollDirection {
  const [direction, setDirection] = useState<ScrollDirection>(null);
  // Baseline per scroller: the position last judged from, and the scrollable
  // range as it stood at that same moment. Without an explicit target the hook
  // hears from many elements, so each keeps its own baseline — mixing them would
  // read a switch between scrollers as a huge phantom delta. The range travels
  // with the position because the two are only comparable over the same interval
  // (see the clamp check below), and a held baseline can span many events.
  const baselinesRef = useRef(new WeakMap<EventTarget, { y: number; max: number }>());

  useEffect(() => {
    const baselines = baselinesRef.current;

    const elOf = (t: EventTarget): HTMLElement | null =>
      t === document || t === window
        ? (document.scrollingElement as HTMLElement | null)
        : (t as HTMLElement);

    const measure = (t: EventTarget): { y: number; max: number } => {
      const el = elOf(t);
      return el
        ? { y: el.scrollTop, max: el.scrollHeight - el.clientHeight }
        : { y: 0, max: 0 };
    };

    const onScroll = (e: Event) => {
      const t = target ?? e.target;
      if (!t) return;
      const now = measure(t);
      const base = baselines.get(t);
      if (!base) {
        // First sighting of this scroller — record a baseline, judge nothing.
        baselines.set(t, now);
        return;
      }
      const delta = now.y - base.y;
      // Hold the baseline through sub-threshold noise so a slow, continuous
      // scroll still accumulates into a real delta. The baseline's range is held
      // with it, so the comparison below stays over one interval.
      if (Math.abs(delta) < deadZonePx) return;

      // A scroller sitting at its end, whose range shrank over this same span by
      // at least as much as the position moved back, was clamped — the content or
      // the viewport resized and dragged the position with it. Reading that as an
      // upward gesture is what let the mobile header oscillate: hiding it hands
      // its box back to the page, which lengthens the page's scroller, which
      // clamps a thread parked at its end, which looks like scrolling up, which
      // shows the header again. Re-baseline and judge nothing.
      const clamped = delta < 0 &&
        now.y >= now.max - CLAMP_EPSILON_PX &&
        base.max - now.max >= -delta - CLAMP_EPSILON_PX;
      if (clamped) {
        baselines.set(t, now);
        return;
      }

      if (delta > 0 && now.y > topThresholdPx) {
        setDirection('down');
      } else if (delta < 0) {
        setDirection('up');
      }
      baselines.set(t, now);
    };

    // An explicit target is observed directly. Otherwise listen on the document
    // in the CAPTURE phase: scroll events don't bubble, but capture still visits
    // the document first — the one place that hears every scroller. That matters
    // here because the mobile shell's pages each scroll an inner column (the
    // welcome thread, the case feed), so the window itself never scrolls.
    if (target) {
      target.addEventListener('scroll', onScroll, { passive: true });
      return () => target.removeEventListener('scroll', onScroll);
    }
    if (typeof document === 'undefined') return;
    document.addEventListener('scroll', onScroll, { passive: true, capture: true });
    return () => document.removeEventListener('scroll', onScroll, { capture: true });
  }, [deadZonePx, topThresholdPx, target]);

  return direction;
}
