/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — chat composer.
   The message input docked at the foot of the event page: a rounded bar with an
   auto-growing textarea and a circular send button. Submitting (Enter, or the
   send button) appends the text as the operator's outbound bubble in the thread,
   turning the event page into a complete chat interface — free-text replies
   alongside the approve/adjust decision pills.

   Local composition: Alloy has no chat-composer primitive, so this hand-builds
   one from a styled <textarea> + the Alloy Button. Flagged for promotion to Alloy.
   DEMO ONLY — wiring lives in the shared store hook (sendMessage).
   ───────────────────────────────────────────────────────────────────────────── */

import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import type { FormEvent, KeyboardEvent } from 'react';
import styled from 'styled-components';
import { Button, ArrowNarrowUpIcon } from 'alloy-design-system';

export interface UltronComposerHandle {
  /** Focus the input — the prompt card's "Other" answer hands off here so the
   *  operator can type their own answer. */
  focus: () => void;
}

interface UltronComposerProps {
  /** Send the typed message. Returns nothing — the input clears on submit. */
  onSend: (text: string) => void;
  /** True while Ultron is composing a reply to the last sent message — flips the
   *  send button into a stop control. */
  working?: boolean;
  /** Interrupt Ultron's in-flight reply (the stop button). */
  onStop?: () => void;
  /** Placeholder copy; defaults to a Message-Ultron prompt. */
  placeholder?: string;
  /** Compact bar — sized to the 32px sm-pill row it sits under (the decision
   *  card's inline composer): tighter padding + an xs send button. */
  compact?: boolean;
}

/** An outlined rounded square — the stop glyph the send button shows while Ultron
 *  is replying (the chat-composer convention for interrupting a response).
 *  Alloy has no stop icon, so it's drawn inline on the 24px icon grid, stroked to
 *  match the other line icons. */
function StopGlyph({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6" y="6" width="12" height="12" rx="3" stroke="currentColor" strokeWidth={1.75} />
    </svg>
  );
}

/** Cap the auto-grow so a long draft scrolls internally instead of pushing the
 *  thread off-screen — roughly six lines before the textarea starts scrolling. */
const MAX_HEIGHT = 160;

export const UltronComposer = forwardRef<UltronComposerHandle, UltronComposerProps>(function UltronComposer(
  { onSend, working = false, onStop, placeholder = 'Message Ultron…', compact = false }, ref,
) {
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const canSend = value.trim().length > 0;

  useImperativeHandle(ref, () => ({
    focus: () => textareaRef.current?.focus(),
  }), []);

  // Auto-grow: reset to content height each keystroke, capped at MAX_HEIGHT.
  const resize = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, MAX_HEIGHT)}px`;
  };

  const submit = () => {
    if (!canSend || working) return;
    onSend(value);
    setValue('');
    // Collapse back to the single-line resting height after sending.
    requestAnimationFrame(() => {
      const el = textareaRef.current;
      if (el) el.style.height = 'auto';
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    submit();
  };

  // Enter sends; Shift+Enter inserts a newline (standard chat-composer behaviour).
  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <Bar onSubmit={onSubmit} $compact={compact}>
      <Field
        ref={textareaRef}
        rows={1}
        value={value}
        placeholder={placeholder}
        aria-label="Message Ultron"
        $compact={compact}
        onChange={e => { setValue(e.target.value); resize(); }}
        onKeyDown={onKeyDown}
      />
      {/* While Ultron is replying the send button becomes a stop control — it
          stays enabled so the operator can interrupt the in-flight response. */}
      {working ? (
        <SendButton
          $float
          type="button"
          variant="primary"
          size={compact ? 'xs' : 'sm'}
          iconOnly
          aria-label="Stop"
          onClick={onStop}
        >
          <StopGlyph size={compact ? 16 : 20} />
        </SendButton>
      ) : (
        <SendButton
          type="submit"
          variant="primary"
          size={compact ? 'xs' : 'sm'}
          iconOnly
          disabled={!canSend}
          aria-label="Send message"
        >
          <ArrowNarrowUpIcon size={compact ? 14 : 18} />
        </SendButton>
      )}
    </Bar>
  );
});

// ── Styled ───────────────────────────────────────────────────────────────────

/* The composer bar — a rounded surface that frames the textarea + send button,
   lifting it off the page foot. Focus-within draws the Alloy focus ring around
   the whole bar so it reads as one input. */
const Bar = styled.form<{ $compact?: boolean }>`
  display: flex;
  align-items: flex-end;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-below-low);
  /* Compact: 5px vertical padding sets the resting bar to 36px (24px xs button
     + 2×5px + 2×1px border), with a tighter 8px radius to match its smaller
     scale. Declared after the base padding/radius so it overrides them. */
  ${p => p.$compact && `
  padding: 5px 5px 5px var(--space-3);
  border-radius: var(--radius-md);`}
  transition: box-shadow var(--duration-slow) var(--ease-default),
              border-color var(--duration-slow) var(--ease-default);

  /* Active (focused) state: just the 1px border switching to the focus color —
     no thicker ring — so the bar stays a single hairline outline throughout. */
  &:focus-within {
    border-color: var(--color-border-focus);
  }
`;

/* Borderless auto-growing textarea — the bar above supplies the chrome. */
const Field = styled.textarea<{ $compact?: boolean }>`
  flex: 1;
  min-width: 0;
  /* Size a single line to exactly the 32px send button (space-8) so, with the
     bar's flex-end alignment, the resting input and button share one centered
     row; extra lines then grow upward while the button stays pinned at the foot.
     Compact bars center on the 24px xs button (space-6) instead. */
  padding: calc((${p => (p.$compact ? 'var(--space-6)' : 'var(--space-8)')} - 1lh) / 2) 0;
  border: none;
  background: transparent;
  resize: none;
  outline: none;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
  /* Compact bars step the type down with the rest of the control (the 1lh
     padding math above follows the smaller line box automatically). */
  ${p => p.$compact && `
  font-size: var(--text-xs);`}

  &::placeholder { color: var(--color-content-inverse-tertiary); }
`;

/* Circular send button — the inverse-surface primary fill shared with the
   decision pills, so it flips with the theme. */
const SendButton = styled(Button)<{ $float?: boolean }>`
  flex-shrink: 0;
  border-radius: var(--radius-full);

  &[data-variant='primary'] {
    background: var(--color-bg-inverse-primary) !important;
    color: var(--color-content-inverse-primary) !important;
  }

  /* Disabled (empty draft) — drops to the neutral disabled surface + muted glyph
     rather than a dimmed inverse fill, so it reads clearly as not-yet-sendable. */
  &[data-variant='primary']:disabled {
    background: var(--color-bg-disabled) !important;
    color: var(--color-content-disabled) !important;
  }

  /* Float style — the processing/stop control reads as a quiet inline glyph
     rather than a solid send pill: transparent surface, content-primary icon. */
  ${p => p.$float && `
  &[data-variant='primary'] {
    background: transparent !important;
    color: var(--color-content-primary) !important;
  }`}
`;
