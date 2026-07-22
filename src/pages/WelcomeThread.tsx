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
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import {
  Button, ComposerAttachment, ComposerSendButton, CheckCircleIcon, Dialog, XCloseIcon,
  Building02Icon, Building05Icon, BankNote01Icon, ReceiptCheckIcon,
  Users03Icon, ClockIcon, File04Icon, CheckVerified01Icon,
} from 'alloy-design-system';
import { mockUltronReply } from './Ultron/fixtures';
import { DocumentIcon } from '../components/PrimaryNav/NavIcons';

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
  /** Names of files sent with the message. DEMO ONLY — the files themselves
   *  are never read or uploaded anywhere; only their names travel. */
  attachments?: string[];
}

const REPLY_DELAY_MS = 1100;

/** One-tap next steps above the composer — the same offers as Ultron's closing
 *  ask, so the admin can hand one over without typing. A tap sends the label as
 *  the operator's message; the row retires once the conversation starts. */
const NEXT_STEP_SUGGESTIONS: { icon: ComponentType<{ size?: number }>; label: string }[] = [
  { icon: Users03Icon, label: 'Build out coverage' },
  { icon: ClockIcon, label: 'Chase open shifts' },
  { icon: CheckVerified01Icon, label: 'Tidy compliance' },
];

/** How long after landing the grant modal opens — lets Ultron's greeting and
 *  the recap card animate in before the conversion ask takes the screen. */
const GRANT_OPEN_DELAY_MS = 1200;
/** How long the "you're set" confirmation shows before the modal closes itself. */
const GRANT_CONFIRM_HOLD_MS = 1600;

/** One line of the setup recap — something Ultron actually turned on. Skipped
 *  pieces don't get a row; Ultron asks for them in the chat instead. */
interface SummaryItem {
  icon: ComponentType<{ size?: number }>;
  label: string;
  detail: string;
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

/** Build the recap rows from what onboarding gathered. Only what was actually
 *  turned on gets a row — skipped uploads are left out entirely (Ultron asks
 *  for those documents in the chat instead). */
function buildSummary(a: WelcomeAnswers): SummaryItem[] {
  const items: SummaryItem[] = [];

  const company = companyName(a.companyWebsite);
  if (company) {
    items.push({ icon: Building02Icon, label: 'Workspace', detail: `${company} is set up and ready` });
  } else if (a.workforceType) {
    items.push({ icon: Building02Icon, label: 'Workspace', detail: `Set up for ${a.workforceType.toLowerCase()}` });
  }
  if (a.pay) items.push({ icon: BankNote01Icon, label: 'Pay', detail: `Turned on for ${a.pay} workers` });
  if (a.billing) items.push({ icon: ReceiptCheckIcon, label: 'Billing', detail: `Set to bill ${a.billing.toLowerCase()}` });
  if (a.worksite) items.push({ icon: Building05Icon, label: 'Sites', detail: a.worksite });

  if (a.rosterFile) {
    items.push({ icon: Users03Icon, label: 'Roster', detail: `Brought your people in from ${a.rosterFile.name}` });
  }
  if (a.scheduleFile) {
    items.push({ icon: ClockIcon, label: 'Schedule', detail: `Turned ${a.scheduleFile.name} into shifts` });
  }

  return items;
}

/** The follow-up ask for whatever documents were skipped during onboarding —
 *  delivered as a chat bubble (the composer takes attachments, so the admin
 *  can answer it in place). Null when nothing was skipped. */
function missingDocsAsk(a: WelcomeAnswers): string | null {
  const missingRoster = !a.rosterFile;
  const missingSchedule = !a.scheduleFile;
  if (missingRoster && missingSchedule) {
    return 'Two things I still need: your roster and your current schedule. Drop them ' +
      'into this chat whenever you’re ready — I’ll bring your people in and turn the ' +
      'schedule into shifts.';
  }
  if (missingRoster) {
    return 'One thing I still need: your roster. Drop it into this chat whenever ' +
      'you’re ready and I’ll bring your people in.';
  }
  if (missingSchedule) {
    return 'One thing I still need: your current schedule. Drop it into this chat ' +
      'whenever you’re ready and I’ll turn it into shifts.';
  }
  return null;
}

interface WelcomeThreadProps {
  /** Everything onboarding collected — drives the recap card. */
  answers?: WelcomeAnswers;
  /** Fired once, on the operator's first message — the welcome stopped being a
   *  static recap and became a working conversation (the app moves its nav
   *  entry from New to Working on this signal). */
  onContinued?: () => void;
}

export function WelcomeThread({ answers = {}, onContinued }: WelcomeThreadProps) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [draft, setDraft] = useState('');
  // Files staged for the next message — chips above the input until sent.
  const [attachments, setAttachments] = useState<string[]>([]);
  const [replying, setReplying] = useState(false);
  // Sales reach-out — the number the admin leaves for the grant unlock.
  // DEMO ONLY: held in memory, never sent anywhere.
  const [phone, setPhone] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  // The grant ask lives in a blocking modal: opens a beat after the thread
  // lands, closes via the X / backdrop / Escape, and closes itself shortly
  // after a successful unlock.
  const [grantOpen, setGrantOpen] = useState(false);
  const timer = useRef<number | null>(null);
  const grantTimer = useRef<number | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const summary = buildSummary(answers);
  const docsAsk = missingDocsAsk(answers);

  useEffect(() => () => { if (timer.current) window.clearTimeout(timer.current); }, []);
  useEffect(() => {
    grantTimer.current = window.setTimeout(() => setGrantOpen(true), GRANT_OPEN_DELAY_MS);
    return () => { if (grantTimer.current) window.clearTimeout(grantTimer.current); };
  }, []);

  const unlock = () => {
    setUnlocked(true);
    // Let the confirmation land, then hand the screen back to the thread.
    if (grantTimer.current) window.clearTimeout(grantTimer.current);
    grantTimer.current = window.setTimeout(() => setGrantOpen(false), GRANT_CONFIRM_HOLD_MS);
  };
  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }, [messages, replying]);

  const canSend = (draft.trim().length > 0 || attachments.length > 0) && !replying;

  // Stage picked files as pending chips, deduped by name (re-picking a file
  // that's already staged is a no-op). DEMO ONLY: only names are kept — the
  // files are never read or uploaded anywhere.
  const addFiles = (files: FileList) => {
    const names = Array.from(files, f => f.name);
    setAttachments(a => [...a, ...names.filter(n => !a.includes(n))]);
  };
  const removeFile = (name: string) => setAttachments(a => a.filter(n => n !== name));

  // Post one operator message (and queue Ultron's mocked reply). Shared by the
  // composer and the one-tap suggestion pills.
  const post = (text: string, files: string[] = []) => {
    if ((!text && files.length === 0) || replying) return;
    // First operator message — the conversation has continued.
    if (!messages.some(m => m.role === 'operator')) onContinued?.();
    const replyCount = messages.filter(m => m.role === 'ultron').length;
    setMessages(m => [...m, { role: 'operator', text, ...(files.length ? { attachments: files } : {}) }]);
    setReplying(true);
    timer.current = window.setTimeout(() => {
      setMessages(m => [...m, { role: 'ultron', text: mockUltronReply(text, replyCount) }]);
      setReplying(false);
      timer.current = null;
    }, REPLY_DELAY_MS);
  };

  const send = () => {
    const text = draft.trim();
    if ((!text && attachments.length === 0) || replying) return;
    post(text, attachments);
    setDraft('');
    setAttachments([]);
  };

  return (
    <Root>
      {/* Page header — the event page's header lockup (title over a muted
          one-line subtitle), with the case avatar swapped for the page's
          document icon and no trailing open-record control. */}
      <PageHeader>
        <PageHeaderInner>
          <PageHeaderIcon aria-hidden="true"><DocumentIcon /></PageHeaderIcon>
          <PageHeaderText>
            <PageHeaderTitle>Welcome</PageHeaderTitle>
            <PageHeaderSubtitle>Your workspace setup, recapped</PageHeaderSubtitle>
          </PageHeaderText>
        </PageHeaderInner>
      </PageHeader>
      <Scroll>
        <Thread>
          {/* Opening turn — Ultron greets, lays out the recap card, then asks
              for the first task. Rendered as one Ultron-side group. */}
          <Row data-from="ultron">
            <Stack>
              <Bubble data-from="ultron">
                Your workspace is live — I turned on the essentials from what you shared.
              </Bubble>

              {summary.length > 0 && (
                <SummaryBlock aria-label="What Ultron set up">
                  <SummaryHead>
                    <SummaryHeadText>Here’s what I set up</SummaryHeadText>
                  </SummaryHead>
                  <SummaryList>
                    {summary.map(item => {
                      const Icon = item.icon;
                      return (
                        <SummaryItemCard key={item.label}>
                          <RowIcon aria-hidden="true"><Icon size={16} /></RowIcon>
                          <RowText>
                            <RowLabel>{item.label}</RowLabel>
                            <RowDetail>{item.detail}</RowDetail>
                          </RowText>
                          <RowStatus aria-hidden="true">
                            <CheckCircleIcon size={18} />
                          </RowStatus>
                        </SummaryItemCard>
                      );
                    })}
                  </SummaryList>
                </SummaryBlock>
              )}

              {/* Anything skipped during onboarding gets asked for here, in the
                  conversation — the composer takes attachments, so the admin
                  can hand the documents over in place. */}
              {docsAsk && <Bubble data-from="ultron">{docsAsk}</Bubble>}

              <Bubble data-from="ultron">
                What would you like me to take on next? I can build out coverage, chase down
                open shifts, tidy compliance, or anything else on your plate.
              </Bubble>
            </Stack>
          </Row>

          {messages.map((m, i) => (
            <Row key={i} data-from={m.role}>
              <MsgGroup data-from={m.role}>
                {m.text && <Bubble data-from={m.role}>{m.text}</Bubble>}
                {m.attachments && (
                  <SentFiles>
                    {m.attachments.map(name => (
                      <FileChip key={name}>
                        <File04Icon size={14} />
                        {name}
                      </FileChip>
                    ))}
                  </SentFiles>
                )}
              </MsgGroup>
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
        {/* One-tap next steps — mirror Ultron's closing offer; a tap sends the
            label as the message. Retire once the conversation has started. */}
        {messages.length === 0 && (
          <SuggestionRow aria-label="Suggested next steps">
            {NEXT_STEP_SUGGESTIONS.map(({ icon: Icon, label }) => (
              <SuggestionPill key={label} type="button" onClick={() => post(label)}>
                <Icon size={14} />
                {label}
              </SuggestionPill>
            ))}
          </SuggestionRow>
        )}
        <Composer onSubmit={(e: FormEvent) => { e.preventDefault(); send(); }}>
          {attachments.length > 0 && (
            <PendingFiles aria-label="Files to send">
              {attachments.map(name => (
                <FileChip key={name}>
                  <File04Icon size={14} />
                  {name}
                  <ChipRemove
                    type="button"
                    aria-label={`Remove ${name}`}
                    onClick={() => removeFile(name)}
                  >
                    <XCloseIcon size={12} />
                  </ChipRemove>
                </FileChip>
              ))}
            </PendingFiles>
          )}
          <InputRow>
            <ActionSlot>
              <ComposerAttachment state="idle" onSelect={addFiles} />
            </ActionSlot>
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
            <ActionSlot>
              <ComposerSendButton state={canSend ? 'ready' : 'disabled-invalid'} onSend={send} />
            </ActionSlot>
          </InputRow>
        </Composer>
      </ComposerWrap>

      {/* Sales reach-out — one number unlocks the usage grant. The thread's
          single high-emphasis conversion moment, so it blocks the screen as a
          centered modal (Alloy Dialog: portal, scrim, Escape/backdrop close)
          over a blurred backdrop, on the inverse surface. */}
      <GrantOverlayBlur />
      <Dialog
        open={grantOpen}
        onClose={() => setGrantOpen(false)}
        size="md"
        aria-label="Unlock your grant"
      >
        <GrantCard>
          <GrantClose type="button" aria-label="Close" onClick={() => setGrantOpen(false)}>
            <XCloseIcon size={18} />
          </GrantClose>
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
                if (phone.trim()) unlock();
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
      </Dialog>
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

/* ── Page header ─────────────────────────────────────────────────────────────
   Mirrors the event page's card header (UltronCard's CardHeader lockup: Alloy
   label/md title over a muted one-line subtitle, avatar-led), with the case
   avatar swapped for the page's document icon on a recessed square and the
   trailing open-record link dropped. Aligned to the thread column. */
const PageHeader = styled.header`
  flex-shrink: 0;
`;

const PageHeaderInner = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  /* Same rhythm as the event card header — air above, tight to the body. */
  padding: var(--space-4) var(--space-6) var(--space-2);
`;

/* The leading icon on a recessed neutral square — stands where the event
   header's subject avatar goes, sized to match (32px). */
const PageHeaderIcon = styled.span`
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

const PageHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

/* Alloy label / medium: 14px · medium · relaxed · wide tracking — the event
   header's CardTitle. */
const PageHeaderTitle = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`;

/* One-line muted subtitle — the event header's CardSubtitle, with the muted
   tone drawn from the neutral family (this header sits on the primary surface,
   not the card's tonal fill). */
const PageHeaderSubtitle = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

/* The thread column. Its max-width leaves room for the side padding so the
   inner content runs exactly as wide as the 720px composer below — the recap
   cards and bubbles line up edge to edge with it. */
const Thread = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: calc(720px + var(--space-6) * 2);
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
   left-aligned column spanning the full thread column, so the recap cards run
   exactly as wide as the composer. */
const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
`;

const Bubble = styled.div`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);

  /* Outbound (operator) — slate bubble, right side (matches the event page).
     Width is capped by the enclosing MsgGroup. */
  &[data-from='operator'] {
    max-width: 100%;
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

/* The recap — a header lockup over a stack of item cards listing what
   onboarding turned on. Spans the full turn width, so the cards run edge to
   edge with the prose above and below. */
const SummaryBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;

/* Unframed header line — the title sits directly on the page above the card
   stack. */
const SummaryHead = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
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
  gap: var(--space-2);
`;

/* One set-up item as its own card — mirrors the Ultron thread's workflow
   offer/saved card surface (UltronCard's OfferCard): primary bg, opaque
   border, lg radius, low shadow, and the same small hover lift. */
const SummaryItemCard = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-below-low);
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);

  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-below-md);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
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

/* Trailing status — the green turned-on check, in a fixed 32px square
   (mirroring RowIcon's box on the row's other end) so it centers in the same
   footprint. */
const RowStatus = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
`;

/* ── Grant modal (sales reach-out) ────────────────────────────────────────────
   The one deliberately inverse surface on the page — the inverse token family
   keeps it maximally contrasted against the scrim in either theme (dark card on
   light, light card on dark), so the conversion moment reads as its own moment
   rather than another bubble. Layout mirrors the wireframe — headline, body,
   phone field beside the action, fine print — wrapped in Alloy's Dialog, which
   supplies the portal, centering, radius clip, and close behaviors. */

/* The gentle deceleration curve the intro flow uses (easeOutQuint) — glides to
   rest instead of Alloy's snappier default, so the modal reads smooth. */
const GRANT_SMOOTH = 'cubic-bezier(0.22, 1, 0.36, 1)';

/* Entrance: the scrim's blur has to be animated explicitly — backdrop-filter
   doesn't fade with the element's opacity, so without this the blur snaps on
   at full strength one frame in. */
const grantScrimIn = keyframes`
  from {
    opacity: 0;
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
  }
  to {
    opacity: 1;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
  }
`;

const grantScrimOut = keyframes`
  from {
    opacity: 1;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
  }
  to {
    opacity: 0;
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
  }
`;

const grantCardIn = keyframes`
  from { opacity: 0; transform: scale(0.96) translateY(20px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`;

const grantCardOut = keyframes`
  from { opacity: 1; transform: scale(1) translateY(0); }
  to   { opacity: 0; transform: scale(0.97) translateY(10px); }
`;

/* Blurs this dialog's scrim and smooths its motion. Alloy's Dialog owns the
   overlay (a CSS-module class portaled to <body>), so the one stable hook is
   the overlay's own dialog semantics — scoped to this modal via its aria-label.
   The extra [data-state] in each selector out-specifies Alloy's own animation
   rules regardless of stylesheet injection order. Exit durations must stay
   under the Dialog's 180ms unmount timer or the animation gets cut off. */
const GrantOverlayBlur = createGlobalStyle`
  [role='dialog'][aria-label='Unlock your grant'][data-state] {
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    animation: ${grantScrimIn} 440ms ${GRANT_SMOOTH} both;

    & > div {
      animation: ${grantCardIn} 560ms ${GRANT_SMOOTH} both;
    }
  }

  [role='dialog'][aria-label='Unlock your grant'][data-state='closed'] {
    animation: ${grantScrimOut} 170ms var(--ease-default, ease) forwards;

    & > div {
      animation: ${grantCardOut} 170ms var(--ease-default, ease) forwards;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [role='dialog'][aria-label='Unlock your grant'][data-state],
    [role='dialog'][aria-label='Unlock your grant'][data-state] > div {
      animation: none;
    }
  }
`;

const GrantCard = styled.section`
  position: relative;
  width: 100%;
  padding: var(--space-8);
  background: var(--color-bg-inverse-primary);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

/* Ghost close, top-right — Alloy's DialogHeader close button re-cut for the
   inverse surface (the header bar itself doesn't fit this card's layout). */
const GrantClose = styled.button`
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--space-8);
  height: var(--space-8);
  padding: 0;
  border: none;
  border-radius: var(--radius-sm);
  background: transparent;
  color: var(--color-content-inverse-tertiary);
  cursor: pointer;
  transition:
    background var(--duration-fast) var(--ease-default),
    color var(--duration-fast) var(--ease-default);

  &:hover {
    background: color-mix(in srgb, var(--color-content-inverse-primary) 10%, transparent);
    color: var(--color-content-inverse-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 1px;
  }
`;

const GrantTitle = styled.h2`
  margin: 0;
  /* Keep the headline clear of the close button. */
  padding-right: var(--space-8);
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

/* Stacks the suggestion pills over the composer, both held to the same
   720px column. */
const ComposerWrap = styled.div`
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6) var(--space-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
`;

/* One-tap next steps above the composer — aligned to its left edge. */
const SuggestionRow = styled.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`;

/* A quiet chip on the page surface (the app context calls for the standard
   bordered surface, not the intro flow's liquid glass): icon + label, lifting
   to the secondary fill on hover. Same shape as the intro's SuggestionPill —
   both FLAGGED as one `SuggestionPill` candidate for promotion to Alloy. */
const SuggestionPill = styled.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--space-8);
  padding: 0 var(--space-3);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-full);
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
  transition: color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              border-color var(--duration-fast) var(--ease-default);

  /* Leading icon reads a step quieter than the label. */
  svg {
    color: var(--color-content-tertiary);
    flex-shrink: 0;
  }

  &:hover {
    background: var(--color-bg-secondary);
    color: var(--color-content-primary);

    svg {
      color: var(--color-content-primary);
    }
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }
`;

/* Stacks an optional pending-files row over the input row. The composer-button
   sizing vars live here so the attach and send slots share them. */
const Composer = styled.form`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-below-low);
  transition: border-color var(--duration-fast) var(--ease-default);

  &:focus-within { border-color: var(--color-border-focus); }

  --composer-btn-size: var(--space-8);
  --composer-btn-icon-attach: var(--space-4);
  --composer-btn-icon-send: var(--space-4);
`;

const InputRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-2);
`;

/* Files staged for the next message — removable chips above the input. */
const PendingFiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-1) 0;
`;

/* One attached file — name under a small file glyph. Reused for the staged
   chips in the composer and the sent chips inside operator bubbles. */
const FileChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-2);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
  white-space: nowrap;
`;

const ChipRemove = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  border-radius: var(--radius-sm);
  color: var(--color-content-tertiary);
  cursor: pointer;

  &:hover { color: var(--color-content-primary); }
  &:focus-visible { outline: 2px solid var(--color-border-focus); outline-offset: 1px; }
`;

/* One message's stack — the text bubble with any sent files as their own row
   beneath it, hugging the message's side of the thread. */
const MsgGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  max-width: 80%;

  &[data-from='operator'] { align-items: flex-end; }
  &[data-from='ultron'] { align-items: flex-start; }
`;

/* Files sent with a message — a chip row separate from the text bubble. */
const SentFiles = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--space-2);
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

const ActionSlot = styled.div`
  flex-shrink: 0;
`;
