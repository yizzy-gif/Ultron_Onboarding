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

import { useRef, useState } from 'react';
import type { FormEvent, KeyboardEvent } from 'react';
import styled from 'styled-components';
import { Button, ArrowNarrowUpIcon } from 'alloy-design-system';

interface UltronComposerProps {
  /** Send the typed message. Returns nothing — the input clears on submit. */
  onSend: (text: string) => void;
  /** Placeholder copy; defaults to a Message-Ultron prompt. */
  placeholder?: string;
}

/** Cap the auto-grow so a long draft scrolls internally instead of pushing the
 *  thread off-screen — roughly six lines before the textarea starts scrolling. */
const MAX_HEIGHT = 160;

export function UltronComposer({ onSend, placeholder = 'Message Ultron…' }: UltronComposerProps) {
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const canSend = value.trim().length > 0;

  // Auto-grow: reset to content height each keystroke, capped at MAX_HEIGHT.
  const resize = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, MAX_HEIGHT)}px`;
  };

  const submit = () => {
    if (!canSend) return;
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
    <Bar onSubmit={onSubmit}>
      <Field
        ref={textareaRef}
        rows={1}
        value={value}
        placeholder={placeholder}
        aria-label="Message Ultron"
        onChange={e => { setValue(e.target.value); resize(); }}
        onKeyDown={onKeyDown}
      />
      <SendButton
        type="submit"
        variant="primary"
        size="sm"
        iconOnly
        disabled={!canSend}
        aria-label="Send message"
      >
        <ArrowNarrowUpIcon size={18} />
      </SendButton>
    </Bar>
  );
}

// ── Styled ───────────────────────────────────────────────────────────────────

/* The composer bar — a rounded surface that frames the textarea + send button,
   lifting it off the page foot. Focus-within draws the Alloy focus ring around
   the whole bar so it reads as one input. */
const Bar = styled.form`
  display: flex;
  align-items: flex-end;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-below-low);
  transition: box-shadow var(--duration-slow) var(--ease-default),
              border-color var(--duration-slow) var(--ease-default);

  /* Active (focused) state: just the 1px border switching to the focus color —
     no thicker ring — so the bar stays a single hairline outline throughout. */
  &:focus-within {
    border-color: var(--color-border-focus);
  }
`;

/* Borderless auto-growing textarea — the bar above supplies the chrome. */
const Field = styled.textarea`
  flex: 1;
  min-width: 0;
  /* Pad the text down so a single line sits centered against the 32px send button. */
  padding: var(--space-2) 0;
  border: none;
  background: transparent;
  resize: none;
  outline: none;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);

  &::placeholder { color: var(--color-content-inverse-tertiary); }
`;

/* Circular send button — the inverse-surface primary fill shared with the
   decision pills, so it flips with the theme. */
const SendButton = styled(Button)`
  flex-shrink: 0;
  border-radius: var(--radius-full);

  &[data-variant='primary'] {
    background: var(--color-bg-inverse-primary) !important;
    color: var(--color-content-inverse-primary) !important;
  }
`;
