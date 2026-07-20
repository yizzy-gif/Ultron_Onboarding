/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — TypingText.
   Reveals a string one character at a time, with a blinking caret while it
   types, then settles to the full static text. Used for the secondary-nav row
   of a case Ultron has just detected — the title "types in" as the risk lands.
   Types once per `text`; honours prefers-reduced-motion (shows it in full).
   ───────────────────────────────────────────────────────────────────────────── */

import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

/** Per-character reveal cadence. */
const TYPE_MS = 45;

interface TypingTextProps {
  text: string;
  className?: string;
  /** Allow the text to wrap across lines (for paragraphs). Default false keeps
   *  the single-line nav behaviour. */
  wrap?: boolean;
  /** Per-character cadence in ms. Defaults to the nav row's 45ms; pass a smaller
   *  value to stream longer copy faster. */
  speedMs?: number;
  /** Fired once the full text has been revealed (also fires immediately under
   *  prefers-reduced-motion). Lets callers chain several TypingTexts in order. */
  onDone?: () => void;
}

export function TypingText({ text, className, wrap = false, speedMs = TYPE_MS, onDone }: TypingTextProps) {
  const [n, setN] = useState(0);
  // Held in a ref so changing the handler doesn't restart the type-out.
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    const reduced = (() => {
      try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch { return false; }
    })();
    if (reduced) { setN(text.length); onDoneRef.current?.(); return; }
    setN(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setN(i);
      if (i >= text.length) { clearInterval(id); onDoneRef.current?.(); }
    }, speedMs);
    return () => clearInterval(id);
  }, [text, speedMs]);

  const done = n >= text.length;
  return (
    <Type className={className} $wrap={wrap}>
      {text.slice(0, n)}
      {!done && <Caret aria-hidden="true">|</Caret>}
    </Type>
  );
}

// ── Styled ───────────────────────────────────────────────────────────────────

const Type = styled.span<{ $wrap?: boolean }>`
  white-space: ${p => (p.$wrap ? 'normal' : 'nowrap')};
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`;

/* Thin caret that blinks while the title types out. Inherits the row's color. */
const Caret = styled.span`
  display: inline-block;
  margin-left: 1px;
  font-weight: var(--font-weight-regular);
  animation: ${blink} 1s steps(1) infinite;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;
