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

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import type { FormEvent, KeyboardEvent } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  Button, ArrowNarrowUpIcon, CheckCircleIcon, XCloseIcon,
} from 'alloy-design-system';

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

interface PhoneCaptureCardProps {
  /** The number has been accepted; settle into the inline confirmation. */
  captured?: boolean;
  /** Receive the entered digits. */
  onSubmit: (phone: string) => void;
  /** Close the card — declining the ask, or dismissing the confirmation. Either
   *  way the surface it was holding back is released. */
  onDismiss: () => void;
}

/** Prominent conversion surface, shown on the first live event's own page: it
 *  stands where that event's activity trail will be, so the ask is made against
 *  the work it is offering to follow, and closing it (or answering it) releases
 *  the run underneath. */
export function PhoneCaptureCard({
  captured = false,
  onSubmit,
  onDismiss,
}: PhoneCaptureCardProps) {
  const [phone, setPhone] = useState('');
  const phoneRef = useRef<HTMLInputElement>(null);
  const phoneReady = phone.length >= 10;

  useEffect(() => {
    if (captured) return;
    // Not on a phone: this card stands over the event the operator just opened,
    // and summoning the keyboard would cover the very thing the ask is about.
    if (window.matchMedia?.('(max-width: 600px)').matches) return;
    const frame = window.requestAnimationFrame(() => phoneRef.current?.focus());
    return () => window.cancelAnimationFrame(frame);
  }, [captured]);

  const submitPhone = (event: FormEvent) => {
    event.preventDefault();
    if (!phoneReady || captured) return;
    onSubmit(phone);
  };

  return (
    <PhoneCallout onSubmit={submitPhone} aria-label="See Ultron handle real work">
      <CalloutGlow aria-hidden="true" />
      {/* Closable from the start, not only once answered: the ask sits on top of
          the event the operator came here to read, so declining it has to be one
          click away. */}
      <PhoneCloseButton
        type="button"
        aria-label={captured ? 'Close phone number confirmation' : 'Close — go straight to the event'}
        onClick={onDismiss}
      >
        <XCloseIcon size={18} />
      </PhoneCloseButton>
      <CalloutCopy>
        <CalloutEyebrow><LivePulse aria-hidden="true" /> YOUR FIRST LIVE EVENT</CalloutEyebrow>
        <CalloutTitle>Ready to see the real work?</CalloutTitle>
        <CalloutBody>
          Ultron just caught a last-minute callout. Add your mobile number to follow
          it from detection through resolution — and to get the next one wherever
          you are.
        </CalloutBody>
      </CalloutCopy>

      {captured ? (
        <PhoneConfirmed role="status">
          <CheckCircleIcon size={22} />
          <span>Activating demo event now</span>
        </PhoneConfirmed>
      ) : (
        <>
          <PhoneRow>
            <PhoneFieldShell>
              <PhonePrefix aria-hidden="true">+1</PhonePrefix>
              <PhoneField
                ref={phoneRef}
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                pattern="[0-9]*"
                minLength={10}
                maxLength={15}
                value={phone}
                placeholder="Mobile number"
                aria-label="Mobile number"
                onChange={event => setPhone(event.target.value.replace(/\D/g, ''))}
              />
            </PhoneFieldShell>
            <PhoneButton type="submit" variant="tertiary" size="lg" disabled={!phoneReady}>
              Launch
            </PhoneButton>
          </PhoneRow>
          <PhoneFinePrint>
            One setup text, never spam. Msg &amp; data rates may apply. Reply STOP to opt out.
          </PhoneFinePrint>
        </>
      )}
    </PhoneCallout>
  );
}

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

const phoneCalloutIn = keyframes`
  from { opacity: 0; transform: translateY(18px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;

const livePulse = keyframes`
  0%, 100% { opacity: 0.55; transform: scale(0.82); box-shadow: 0 0 0 0 rgb(110 231 183 / 0%); }
  50% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 7px rgb(110 231 183 / 0%); }
`;

const PhoneCallout = styled.form`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  width: 100%;
  max-width: 720px;
  padding: var(--space-6);
  overflow: hidden;
  color: var(--color-bg-always-light);
  background:
    radial-gradient(90% 180% at 100% 0%, rgb(86 112 255 / 52%), transparent 62%),
    radial-gradient(85% 140% at 0% 115%, rgb(173 70 255 / 38%), transparent 68%),
    linear-gradient(135deg, #08111f 0%, #111936 55%, #24133f 100%);
  border: 1px solid rgb(175 196 255 / 35%);
  border-radius: 12px;
  box-shadow:
    0 0 0 1px rgb(116 148 255 / 14%),
    0 -14px 48px rgb(68 83 255 / 20%),
    0 24px 60px rgb(4 8 24 / 35%);
  animation: ${phoneCalloutIn} 520ms cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (max-width: 600px) {
    gap: var(--space-3);
    padding: var(--space-5);
    border-radius: 12px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const CalloutGlow = styled.span`
  position: absolute;
  z-index: -1;
  top: -80px;
  right: -40px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: rgb(132 157 255 / 28%);
  filter: blur(38px);
  pointer-events: none;
`;

const PhoneCloseButton = styled.button`
  position: absolute;
  z-index: 1;
  top: var(--space-4);
  right: var(--space-4);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  color: rgb(226 232 255 / 76%);
  background: rgb(255 255 255 / 10%);
  border: 1px solid rgb(255 255 255 / 18%);
  border-radius: 50%;
  cursor: pointer;
  transition:
    color var(--duration-base) var(--ease-out),
    background var(--duration-base) var(--ease-out),
    border-color var(--duration-base) var(--ease-out);

  &:hover {
    color: #fff;
    background: rgb(255 255 255 / 18%);
    border-color: rgb(255 255 255 / 32%);
  }

  &:focus-visible {
    outline: 2px solid #a7f3d0;
    outline-offset: 2px;
  }
`;

const CalloutCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-right: var(--space-8);
`;

const CalloutEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: 0.08em;
  color: #a7f3d0;
`;

const LivePulse = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #6ee7b7;
  box-shadow: 0 0 14px rgb(110 231 183 / 78%);
  animation: ${livePulse} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const CalloutTitle = styled.h2`
  margin: var(--space-1) 0 0;
  font-family: var(--font-sans);
  font-size: clamp(24px, 3vw, 34px);
  font-weight: var(--font-weight-semibold);
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: #fff;
`;

const CalloutBody = styled.p`
  max-width: 620px;
  margin: var(--space-1) 0 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: rgb(226 232 255 / 78%);
`;

const PhoneRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--space-2);

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const PhoneFieldShell = styled.label`
  display: flex;
  align-items: center;
  min-width: 0;
  min-height: 48px;
  padding: 0 var(--space-4);
  background: rgb(255 255 255 / 12%);
  border: 1px solid rgb(255 255 255 / 24%);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(12px);
  transition: border-color var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);

  &:focus-within {
    border-color: rgb(191 219 254 / 92%);
    box-shadow: 0 0 0 3px rgb(96 165 250 / 22%);
  }
`;

const PhonePrefix = styled.span`
  flex: 0 0 auto;
  padding-right: var(--space-3);
  margin-right: var(--space-3);
  border-right: 1px solid rgb(255 255 255 / 22%);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-variant-numeric: tabular-nums;
  color: rgb(226 232 255 / 64%);
`;

const PhoneField = styled.input`
  flex: 1;
  min-width: 0;
  padding: var(--space-3) 0;
  border: 0;
  outline: 0;
  background: transparent;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-variant-numeric: tabular-nums;
  color: #fff;
  caret-color: #a7f3d0;

  &::placeholder { color: rgb(226 232 255 / 46%); }
`;

const PhoneButton = styled(Button)`
  && {
    min-height: 48px;
    padding-inline: var(--space-5);
    border-radius: var(--radius-lg);
    background: #fff;
    color: #111827;
    box-shadow: 0 8px 28px rgb(4 8 24 / 30%);
  }

  &&:hover:not(:disabled) {
    background: #eef2ff;
  }

  &&:disabled {
    background: rgb(255 255 255 / 16%);
    color: rgb(226 232 255 / 38%);
    opacity: 1;
  }

  @media (max-width: 520px) {
    && { width: 100%; }
  }
`;

const PhoneFinePrint = styled.p`
  margin: calc(var(--space-2) * -1) 0 0;
  font-family: var(--font-sans);
  font-size: 11px;
  line-height: var(--line-height-relaxed);
  color: rgb(226 232 255 / 48%);
`;

const PhoneConfirmed = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-height: 56px;
  padding: var(--space-3) var(--space-4);
  background: rgb(110 231 183 / 12%);
  border: 1px solid rgb(110 231 183 / 34%);
  border-radius: var(--radius-lg);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: #d1fae5;

  & svg { flex: 0 0 auto; color: #6ee7b7; }
  & strong { color: #fff; }
`;

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
