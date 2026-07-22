/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — New page.
   A blank Ultron page created from the "+" in the identity card. Starts empty:
   the resting Ultron mark, a short prompt, and a composer. The first message
   turns it into a conversation (Ultron mocks a reply a beat later). DEMO ONLY —
   in-memory, per-page; unmounting the page clears it.
   ───────────────────────────────────────────────────────────────────────────── */

import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import styled, { keyframes } from 'styled-components';
import { ComposerSendButton } from 'alloy-design-system';
import { AgentMark } from './AgentMark';

export interface NewPageMessage {
  role: 'operator' | 'ultron';
  text: string;
}

/** Controlled: the conversation lives in App (keyed by page id) so it survives
 *  navigating away and back. This component owns only the draft. */
export function NewPage({
  messages,
  replying,
  onSend,
}: {
  messages: NewPageMessage[];
  replying: boolean;
  onSend: (text: string) => void;
}) {
  const [draft, setDraft] = useState('');
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }, [messages, replying]);

  const canSend = draft.trim().length > 0 && !replying;
  const empty = messages.length === 0;

  const send = () => {
    const text = draft.trim();
    if (!text || replying) return;
    onSend(text);
    setDraft('');
  };

  return (
    <Root>
      <Scroll>
        {empty ? (
          <Hero>
            <Mark aria-hidden="true">
              <AgentMark mark="circle" size={96} tone="auto" state="active" aria-label="Ultron" />
            </Mark>
            <HeroTitle>New page</HeroTitle>
            <HeroSub>Ask Ultron to set something up, look into a risk, or draft a change.</HeroSub>
          </Hero>
        ) : (
          <Thread>
            {messages.map((m, i) => (
              <Row key={i} data-from={m.role}>
                <Bubble data-from={m.role}>{m.text}</Bubble>
              </Row>
            ))}
            {replying && (
              <Row data-from="ultron">
                <Typing aria-label="Ultron is replying">
                  <Dot /><Dot /><Dot />
                </Typing>
              </Row>
            )}
            <div ref={endRef} />
          </Thread>
        )}
      </Scroll>

      <ComposerWrap>
        <Composer onSubmit={(e: FormEvent) => { e.preventDefault(); send(); }}>
          <Field
            rows={1}
            value={draft}
            placeholder="Ask Ultron anything…"
            aria-label="Message Ultron"
            onChange={e => setDraft(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
            }}
          />
          <SendSlot>
            <ComposerSendButton state={canSend ? 'ready' : 'disabled-invalid'} onSend={send} />
          </SendSlot>
        </Composer>
      </ComposerWrap>
    </Root>
  );
}

// ── Styled ───────────────────────────────────────────────────────────────────

const Root = styled.div`
  display: flex;
  flex-direction: column;
  /* Own the full height and cancel the shell's ContentMain bottom padding (as the
     event page's Page does) so the composer snaps to the very foot. */
  height: calc(100% + var(--space-8));
  margin-bottom: calc(-1 * var(--space-8));
  min-height: 0;
  overflow: hidden;
  background: var(--color-bg-primary);
`;

const Scroll = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const Hero = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  padding: var(--space-8) var(--space-6);
  text-align: center;
`;

const Mark = styled.span`
  display: grid;
  place-items: center;
  width: 96px;
  height: 96px;
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`;

const HeroSub = styled.p`
  margin: 0;
  max-width: 420px;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`;

const Thread = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
`;

const Row = styled.div`
  display: flex;
  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }
`;

// Matches the event-page chat (see UltronCard): the operator's turn is a slate
// bubble on the right; Ultron's reply is bubble-less prose on the left.
const Bubble = styled.div`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);

  /* Outbound (operator) — slate bubble, right side. */
  &[data-from='operator'] {
    max-width: 80%;
    padding: var(--space-2) var(--space-4);
    background: var(--color-bg-secondary);
    border-radius: var(--radius-xl);
    font-weight: var(--font-weight-medium);
  }

  /* Inbound (Ultron) — no bubble wrap, just prose. */
  &[data-from='ultron'] {
    max-width: 100%;
  }
`;

const blink = keyframes`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`;

const Typing = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2) 0;
`;

const Dot = styled.span`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-content-tertiary);
  animation: ${blink} 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const ComposerWrap = styled.div`
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6) var(--space-6);
  display: flex;
  justify-content: center;
`;

const Composer = styled.form`
  width: 100%;
  max-width: 720px;
  display: flex;
  align-items: flex-end;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-below-low);
  transition: border-color var(--duration-fast) var(--ease-default);

  &:focus-within { border-color: var(--color-border-focus); }
`;

const Field = styled.textarea`
  flex: 1;
  min-width: 0;
  padding: calc((var(--space-8) - 1lh) / 2) 0;
  border: none;
  background: transparent;
  resize: none;
  outline: none;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);

  &::placeholder { color: var(--color-content-disabled); }
`;

const SendSlot = styled.div`
  flex-shrink: 0;
  --composer-btn-size: var(--space-8);
  --composer-btn-icon-attach: var(--space-4);
  --composer-btn-icon-send: var(--space-4);
`;
