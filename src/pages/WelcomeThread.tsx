/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — Welcome thread.
   The first page the admin lands on right after onboarding (the schedule upload
   hands off here). It opens as a chat thread: Ultron greets, recaps what it just
   turned on from the documents submitted + questions answered as a summary card,
   then asks what to take on next. The composer turns it into a conversation
   (Ultron mocks a reply a beat later, same as NewPage). One-time handoff — any
   nav action drops to Ultron's normal home. DEMO ONLY, in-memory.
   ───────────────────────────────────────────────────────────────────────────── */

import { useEffect, useRef, useState } from 'react';
import type { ComponentType, FormEvent } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  Button, ComposerSendButton, CheckCircleIcon,
  Building02Icon, Building05Icon, BankNote01Icon, ReceiptCheckIcon,
  Users03Icon, ClockIcon,
} from 'alloy-design-system';
import { AgentMark } from './Ultron/AgentMark';
import { mockUltronReply } from './Ultron/fixtures';

/** What onboarding collected. Mirrors the onboarding flow's `IntroAnswers`
 *  (kept as a local shape so this app page carries no dependency on the
 *  onboarding module). */
export interface WelcomeAnswers {
  companyWebsite?: string;
  workforceType?: string;
  pay?: string;
  billing?: string;
  worksite?: string;
  rosterFile?: { name: string };
  scheduleFile?: { name: string };
}

interface Msg {
  role: 'operator' | 'ultron';
  text: string;
}

const REPLY_DELAY_MS = 1100;

/** One line of the setup recap. `done` rows show a green check (turned on);
 *  pending rows are the pieces the admin skipped and can add later. */
interface SummaryItem {
  icon: ComponentType<{ size?: number }>;
  label: string;
  detail: string;
  done: boolean;
}

/** Title-cased company name derived from the pasted website (mirrors the
 *  onboarding helper), or null when no site was given. */
function companyName(website?: string): string | null {
  if (!website) return null;
  const clean = website.trim().replace(/\s+/g, '');
  const withProto = /^https?:\/\//i.test(clean) ? clean : `https://${clean}`;
  let host = clean;
  try { host = new URL(withProto).hostname; } catch { /* keep clean */ }
  host = host.replace(/^www\./, '');
  const root = host.split('.')[0] || host;
  const name = root
    .split(/[-_]/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  return name || host;
}

/** Build the recap rows from what onboarding gathered. Answered questions and
 *  submitted documents become "turned on" rows; skipped uploads become quiet
 *  "add later" rows so the recap still reads complete. */
function buildSummary(a: WelcomeAnswers): SummaryItem[] {
  const items: SummaryItem[] = [];

  const company = companyName(a.companyWebsite);
  if (company) {
    items.push({ icon: Building02Icon, label: 'Workspace', detail: `${company} is set up and ready`, done: true });
  } else if (a.workforceType) {
    items.push({ icon: Building02Icon, label: 'Workspace', detail: `Set up for ${a.workforceType.toLowerCase()}`, done: true });
  }
  if (a.pay) items.push({ icon: BankNote01Icon, label: 'Pay', detail: `Turned on for ${a.pay} workers`, done: true });
  if (a.billing) items.push({ icon: ReceiptCheckIcon, label: 'Billing', detail: `Set to bill ${a.billing.toLowerCase()}`, done: true });
  if (a.worksite) items.push({ icon: Building05Icon, label: 'Sites', detail: a.worksite, done: true });

  items.push(
    a.rosterFile
      ? { icon: Users03Icon, label: 'Roster', detail: `Brought your people in from ${a.rosterFile.name}`, done: true }
      : { icon: Users03Icon, label: 'Roster', detail: 'Add your team whenever you’re ready', done: false },
  );
  items.push(
    a.scheduleFile
      ? { icon: ClockIcon, label: 'Schedule', detail: `Turned ${a.scheduleFile.name} into shifts`, done: true }
      : { icon: ClockIcon, label: 'Schedule', detail: 'Bring in your schedule whenever you’re ready', done: false },
  );

  return items;
}

interface WelcomeThreadProps {
  /** Everything onboarding collected — drives the recap card. */
  answers?: WelcomeAnswers;
}

export function WelcomeThread({ answers = {} }: WelcomeThreadProps) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [draft, setDraft] = useState('');
  const [replying, setReplying] = useState(false);
  // Sales reach-out — the number the admin leaves for the grant unlock.
  // DEMO ONLY: held in memory, never sent anywhere.
  const [phone, setPhone] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const timer = useRef<number | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const summary = buildSummary(answers);

  useEffect(() => () => { if (timer.current) window.clearTimeout(timer.current); }, []);
  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }, [messages, replying]);

  const canSend = draft.trim().length > 0 && !replying;

  const send = () => {
    const text = draft.trim();
    if (!text || replying) return;
    const replyCount = messages.filter(m => m.role === 'ultron').length;
    setMessages(m => [...m, { role: 'operator', text }]);
    setDraft('');
    setReplying(true);
    timer.current = window.setTimeout(() => {
      setMessages(m => [...m, { role: 'ultron', text: mockUltronReply(text, replyCount) }]);
      setReplying(false);
      timer.current = null;
    }, REPLY_DELAY_MS);
  };

  return (
    <Root>
      <Scroll>
        <Thread>
          {/* Opening turn — Ultron greets, lays out the recap card, then asks
              for the first task. Rendered as one Ultron-side group. */}
          <Row data-from="ultron">
            <Stack>
              <Bubble data-from="ultron">
                Your workspace is live — I turned on the essentials from what you shared.
              </Bubble>

              <SummaryCard aria-label="What Ultron set up">
                <SummaryHead>
                  <SummaryMark aria-hidden="true">
                    <AgentMark mark="circle" size={28} tone="auto" state="active" aria-label="Ultron" />
                  </SummaryMark>
                  <SummaryHeadText>Here’s what I set up</SummaryHeadText>
                </SummaryHead>
                <SummaryList>
                  {summary.map(item => {
                    const Icon = item.icon;
                    return (
                      <SummaryRow key={item.label} data-done={item.done || undefined}>
                        <RowIcon aria-hidden="true"><Icon size={16} /></RowIcon>
                        <RowText>
                          <RowLabel>{item.label}</RowLabel>
                          <RowDetail>{item.detail}</RowDetail>
                        </RowText>
                        <RowStatus aria-hidden="true">
                          {item.done ? <CheckCircleIcon size={18} /> : <PendingDot />}
                        </RowStatus>
                      </SummaryRow>
                    );
                  })}
                </SummaryList>
              </SummaryCard>

              <Bubble data-from="ultron">
                What would you like me to take on next? I can build out coverage, chase down
                open shifts, tidy compliance, or anything else on your plate.
              </Bubble>

              {/* Sales reach-out — one number unlocks the usage grant. The
                  thread's single high-emphasis conversion moment, so it sits on
                  the inverse surface. */}
              <GrantCard aria-label="Unlock your grant">
                <GrantTitle>Turn it on and your first $1,000 of work is free.</GrantTitle>
                <GrantBody>
                  Give me one number to reach you. I propose before I act — you always
                  say go — and confirming your number unlocks your grant.
                </GrantBody>
                {unlocked ? (
                  <GrantConfirmed role="status">
                    <CheckCircleIcon size={20} />
                    You’re set — I’ll text before I act. Your $1,000 grant is live.
                  </GrantConfirmed>
                ) : (
                  <GrantForm
                    onSubmit={(e: FormEvent) => {
                      e.preventDefault();
                      if (phone.trim()) setUnlocked(true);
                    }}
                  >
                    <GrantField
                      type="tel"
                      value={phone}
                      placeholder="(214) 555-0148"
                      aria-label="Mobile number"
                      autoComplete="tel"
                      onChange={e => setPhone(e.target.value)}
                    />
                    <Button type="submit" variant="tertiary" size="lg" disabled={!phone.trim()}>
                      Unlock &amp; turn on
                    </Button>
                  </GrantForm>
                )}
                <GrantFinePrint>
                  You’ll get 100,000 credits — 3 months of work performed, on us. Ultron
                  only texts when it has a proposal. Msg &amp; data rates may apply. Reply
                  STOP to opt out.
                </GrantFinePrint>
              </GrantCard>
            </Stack>
          </Row>

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
      </Scroll>

      <ComposerWrap>
        <Composer onSubmit={(e: FormEvent) => { e.preventDefault(); send(); }}>
          <Field
            rows={1}
            value={draft}
            placeholder="Tell Ultron what to take on next…"
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

/* The opening turn (and any dynamic replies) fade + rise in as they mount, so
   the handoff reads as Ultron arriving rather than a static dump. */
const turnIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
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
  animation: ${turnIn} var(--duration-slow, 420ms) var(--ease-out) both;

  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

/* Ultron's opening turn stacks a greeting, the recap card, and the ask as one
   left-aligned column. */
const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 92%;
`;

const Bubble = styled.div`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);

  /* Outbound (operator) — slate bubble, right side (matches the event page). */
  &[data-from='operator'] {
    max-width: 80%;
    padding: var(--space-2) var(--space-4);
    background: var(--color-bg-secondary);
    border-radius: var(--radius-xl);
    font-weight: var(--font-weight-medium);
  }

  /* Inbound (Ultron) — no bubble wrap, just prose (matches the event page). */
  &[data-from='ultron'] {
    max-width: 100%;
  }
`;

/* The recap card — a framed panel listing what onboarding turned on. Sits on the
   primary surface with the standard opaque border + soft shadow (matches the
   onboarding finding cards). */
const SummaryCard = styled.div`
  width: 100%;
  max-width: 460px;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-below-low);
  overflow: hidden;
`;

const SummaryHead = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-4) var(--space-4) var(--space-3);
  border-bottom: 1px solid var(--color-border-opaque);
`;

const SummaryMark = styled.span`
  display: inline-flex;
  flex-shrink: 0;
`;

const SummaryHeadText = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`;

const SummaryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const SummaryRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }
`;

const RowIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`;

const RowText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`;

const RowLabel = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`;

const RowDetail = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-snug, 1.35);
  color: var(--color-content-primary);
`;

/* Trailing status — a green check for turned-on rows; a muted hollow dot for
   the pieces still to come. */
const RowStatus = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--color-success-content);
`;

const PendingDot = styled.span`
  width: var(--space-3);
  height: var(--space-3);
  border-radius: var(--radius-full);
  border: 1.5px dashed var(--color-border-selected, var(--color-content-tertiary));
`;

/* ── Grant card (sales reach-out) ─────────────────────────────────────────────
   The one deliberately inverse surface in the thread — the inverse token family
   keeps it maximally contrasted against the page in either theme (dark card on
   light, light card on dark), so the conversion moment reads as its own block
   rather than another bubble. Layout mirrors the wireframe — headline, body,
   phone field beside the action, fine print. */
const GrantCard = styled.section`
  width: 100%;
  margin-top: var(--space-2);
  padding: var(--space-8);
  background: var(--color-bg-inverse-primary);
  border-radius: var(--radius-2xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

const GrantTitle = styled.h2`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  color: var(--color-content-inverse-primary);
`;

const GrantBody = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-inverse-secondary);
`;

const GrantForm = styled.form`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  gap: var(--space-3);
`;

/* Dark-surface text field, hand-rolled: Alloy's Input has no inverse-surface
   variant yet — candidate for promotion into Alloy. The border is the inverse
   tertiary content mixed down so it reads as a hairline on the dark fill. */
const GrantField = styled.input`
  flex: 1;
  min-width: 200px;
  height: var(--space-12);
  padding: 0 var(--space-4);
  background: var(--color-bg-inverse-tertiary);
  border: 1px solid color-mix(in srgb, var(--color-content-inverse-tertiary) 35%, transparent);
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  font-size: var(--text-md);
  color: var(--color-content-inverse-primary);
  outline: none;
  transition: border-color var(--duration-fast) var(--ease-default);

  &::placeholder { color: var(--color-content-inverse-tertiary); }
  &:focus-visible { border-color: var(--color-border-focus); }
`;

/* Post-submit state — swaps in where the form row sat, holding its height so
   the card doesn't jump. The check carries the neon matcha accent. */
const GrantConfirmed = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--space-12);
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-inverse-primary);

  & svg {
    flex-shrink: 0;
    color: var(--color-matcha-content-tertiary);
  }
`;

const GrantFinePrint = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-inverse-tertiary);
`;

const blink = keyframes`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`;

const Typing = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-lg);
  background: var(--color-bg-secondary);
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
