// Scroll-direction hook with a dead zone so small deltas (iOS rubber-band,
// trackpad noise) don't toggle the mobile header. Returns:
//   - 'up'   after scrolling up with |delta| > deadZonePx
//   - 'down' after scrolling down with |delta| > deadZonePx *and*
//            scrollY > topThresholdPx (so the header never hides while
//            the user is still near the top)
//   - null until the first meaningful scroll event (initial render state)

import { useEffect, useRef, useState } from 'react';

export type ScrollDirection = 'up' | 'down' | null;

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
  // Baseline scroll position per scroller. Without an explicit target the hook
  // hears from many elements, so each keeps its own baseline — mixing them
  // would read a switch between scrollers as a huge phantom delta.
  const lastYsRef = useRef(new WeakMap<EventTarget, number>());

  useEffect(() => {
    const lastYs = lastYsRef.current;

    const yOf = (t: EventTarget): number =>
      t === document || t === window
        ? document.scrollingElement?.scrollTop ?? 0
        : (t as HTMLElement).scrollTop ?? 0;

    const onScroll = (e: Event) => {
      const t = target ?? e.target;
      if (!t) return;
      const y = yOf(t);
      if (!lastYs.has(t)) {
        // First sighting of this scroller — record a baseline, judge nothing.
        lastYs.set(t, y);
        return;
      }
      const delta = y - lastYs.get(t)!;
      // Hold the baseline through sub-threshold noise so a slow, continuous
      // scroll still accumulates into a real delta.
      if (Math.abs(delta) < deadZonePx) return;

      if (delta > 0 && y > topThresholdPx) {
        setDirection('down');
      } else if (delta < 0) {
        setDirection('up');
      }
      lastYs.set(t, y);
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
