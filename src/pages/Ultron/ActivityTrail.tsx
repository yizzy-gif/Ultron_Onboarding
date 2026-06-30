/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — past-activity trail.
   A vertical timeline of milestones with a connector line. Milestones that
   carry detail blocks are individually collapsible (paragraph / labeled bullet
   list / labeled check list).
   ───────────────────────────────────────────────────────────────────────────── */

import { useState, useEffect, useRef, type ReactNode, type ComponentType } from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes, css } from 'styled-components';
import {
  Avatar, Button, ChevronRightIcon, XCloseIcon,
  AIMessageActions, ThumbsUpIcon, ThumbsDownIcon, RefreshCw04Icon,
  SearchMdIcon, MessageCircle02Icon, TriangleUpIcon, CheckVerified01Icon,
  Edit01Icon, LineChartUp01Icon, ClockIcon, EyeIcon, CheckIcon, Bell01Icon,
} from 'alloy-design-system';
import type { ActivityMilestone, RecordRef, ActivityUsage, UsageEntry, UsageIconKey } from './fixtures';
import { avatarUrl } from './fixtures';

/** Maps a usage entry's icon key to its Alloy glyph — each capability fronts its
 *  Run-details row with an icon that reads its kind at a glance. */
type UsageIcon = ComponentType<{ size?: number }>;
const USAGE_ICONS: Record<UsageIconKey, UsageIcon> = {
  search: SearchMdIcon,
  message: MessageCircle02Icon,
  policy: TriangleUpIcon,
  shield: CheckVerified01Icon,
  schedule: Edit01Icon,
  analytics: LineChartUp01Icon,
  clock: ClockIcon,
  monitor: EyeIcon,
  bell: Bell01Icon,
};
import { RecordCard } from './RecordCard';

export function ActivityTrail({ milestones }: { milestones: ActivityMilestone[] }) {
  return (
    <Trail>
      {milestones.map((m, i) => (
        <MilestoneRow key={i} milestone={m} last={i === milestones.length - 1} />
      ))}
    </Trail>
  );
}

/** A "session": one chunk of Ultron's activity — the run of milestones that
 *  happened together (the reasoning before a prompt answer, or the work that
 *  followed one). Rendered as a single collapsible card.
 *   · collapsed — a one-line summary of the activities it collected.
 *   · expanded  — every activity in full (icon + headline + sub-context), with
 *                 no per-activity chevron; the whole session toggles as a unit.
 *  `typingIndex` types out that activity's headline (the one Ultron is mid-thought
 *  on); `workingIndex` marks the step the live agent mark currently rides (the
 *  mark glides down to it as each step completes); `settled` drops the mark just
 *  below the last step and morphs it into the resting magnetic mark once the work
 *  is done; `collapsed` starts the session shut (used for reasoning the operator
 *  has already acted past — the active session streams open). */
export function ActivityTrailCards({ milestones, typingIndex, collapsed, hideActions, running, animateIn }: {
  milestones: ActivityMilestone[];
  typingIndex?: number;
  collapsed?: boolean;
  /** Suppress the group's own feedback row — used when the group sits inside an
   *  <UltronResponse> set, which lifts the feedback below the reply text instead. */
  hideActions?: boolean;
  /** Whether Ultron is actively running this group right now — drives the header's
   *  live status (Thinking → Bridging → … → Crossing) instead of the settled
   *  "Thought for X" recap. */
  running?: boolean;
  /** Whether to play the card's slide-in entrance. False when the group merely folds
   *  into a response set after it already streamed in standalone, so the already-shown
   *  trail doesn't replay its entrance and blink. Defaults to true. */
  animateIn?: boolean;
}) {
  return (
    <ActivitySession
      milestones={milestones}
      typingIndex={typingIndex}
      hideActions={hideActions}
      running={running}
      defaultCollapsed={collapsed}
      animateIn={animateIn}
    />
  );
}

function ActivitySession({ milestones, typingIndex, hideActions, running, defaultCollapsed, animateIn = true }: {
  milestones: ActivityMilestone[];
  typingIndex?: number;
  hideActions?: boolean;
  running?: boolean;
  defaultCollapsed?: boolean;
  animateIn?: boolean;
}) {
  const [open, setOpen] = useState(!defaultCollapsed);
  // Once the operator acts past a session it settles shut — one-way, so they can
  // still reopen it; the active session stays open as it streams.
  useEffect(() => { if (defaultCollapsed) setOpen(false); }, [defaultCollapsed]);

  // The group's live working indicator no longer rides the trail — Ultron's single
  // presence mark lives in the fixed slot above the composer (see UltronActivityCards'
  // footSlot), morphing Lines → Magnetic as the work goes from running to settled.

  // The session header is identical whether open or shut: a meta summary of the
  // activities — how many, and how long Ultron "thought" — plus a trailing
  // chevron. Toggling only rotates the chevron and reveals/hides the list below.
  const count = milestones.length;
  // Synthesised thinking time for the demo, derived deterministically from the
  // activities so it stays stable across renders (no Math.random).
  const thinkSecs = count * 6 + (milestones.reduce((s, m) => s + m.headline.length, 0) % 18);
  const thought = thinkSecs < 60 ? `${thinkSecs} sec` : `${Math.round(thinkSecs / 60)} min`;
  const summary = `Thought for ${thought}`;
  // While Ultron is actively running this group the summary shows a live status
  // that advances Thinking → Bridging → … → Crossing; once the group is done it
  // settles to the completed "Thought for X" recap.

  return (
    <SessionShell $animate={animateIn}>
      <SessionHeader type="button" aria-expanded={open} onClick={() => setOpen(o => !o)}>
        <SummaryText $running={running}>{running ? <RunningLabel /> : summary}</SummaryText>
        <Chevron data-open={open || undefined} aria-hidden="true"><ChevronRightIcon size={14} /></Chevron>
      </SessionHeader>

      {open && (
        <SessionBody>
          {milestones.map((m, i) => (
            <RowAnchor key={i}>
              {i < milestones.length - 1 && <SessionConnector aria-hidden="true" />}
              <MilestoneContent
                milestone={m}
                last
                /* Each step is its own accordion — collapsed to its headline, with
                   a chevron that reveals the step's supplemental line. */
                collapsible
                typing={i === typingIndex}
                /* Each executed step carries its own "tools used" trigger — the
                   actual tools that step drove (Policy Engine, Engage), with detail
                   normalized to this case — revealed when the operator opens the step.
                   Steps that drove no tool (reasoning, record-only edits) carry none. */
                extra={m.usage?.length ? <UsageSummary usage={m.usage} title={m.headline} /> : undefined}
                icon={
                  <MilestoneIcon
                    icon={m.icon}
                    /* The step Ultron is mid-thought on spins; settled steps check. */
                    loading={typingIndex === i}
                  />
                }
              />
            </RowAnchor>
          ))}
          {/* Feedback row for the whole group — thumbs up/down, rerun, and a
              timestamp (revealed on hover of the group). */}
          {!hideActions && <SessionActions time={synthClock(milestones)} />}
        </SessionBody>
      )}
    </SessionShell>
  );
}

/** The live status shown in a group's header while Ultron is running it: advances
 *  Thinking → Bridging → Reinforcing → Inspecting → Crossing on a timer and holds
 *  on the last beat (with an animated ellipsis) until the work catches up, at
 *  which point the header swaps to the settled "Thought for X" recap. The verbs
 *  trace the bridge metaphor: reason, connect people to the need, shore up
 *  coverage, verify, then bring it home. */
const RUN_PHASES = ['Thinking', 'Bridging', 'Reinforcing', 'Inspecting', 'Crossing'];

function RunningLabel() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    if (phase >= RUN_PHASES.length - 1) return; // hold on the final beat
    const t = setTimeout(() => setPhase(p => p + 1), 1600);
    return () => clearTimeout(t);
  }, [phase]);
  return (
    <>
      {RUN_PHASES[phase]}
      <Ellipsis aria-hidden="true"><span>.</span><span>.</span><span>.</span></Ellipsis>
    </>
  );
}

/** A deterministic "h:mm AM/PM" clock label for a group, derived from its
 *  activities so it stays stable across renders (no Date/Math.random in the
 *  demo). Anchored at 9:41 AM and nudged by the combined headline length. */
export function synthClock(milestones: ActivityMilestone[]): string {
  const offset = milestones.reduce((s, m) => s + m.headline.length, 0) % 200;
  const total = 9 * 60 + 41 + offset; // base 9:41 AM
  const h24 = Math.floor(total / 60) % 24;
  const min = total % 60;
  const period = h24 < 12 ? 'AM' : 'PM';
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${String(min).padStart(2, '0')} ${period}`;
}

/** The AI action cluster beneath a finished activity group: a thumbs up/down
 *  rating, a rerun, and a trailing timestamp. The thumbs are a single toggle —
 *  picking one clears the other, clicking the active one clears it. Local,
 *  self-contained state (demo feedback only). */
export function SessionActions({ time }: { time: string }) {
  const [vote, setVote] = useState<'up' | 'down' | null>(null);
  const toggle = (v: 'up' | 'down') => setVote(c => (c === v ? null : v));
  return (
    <ActionsRow data-feedback-actions>
      <AIMessageActions visibility="always" time={time}>
        <RateButton
          variant="ghost" size="xs" iconOnly
          aria-label="Good response" aria-pressed={vote === 'up'}
          data-active={vote === 'up' || undefined}
          onClick={() => toggle('up')}
        >
          <ThumbsUpIcon size={14} />
        </RateButton>
        <RateButton
          variant="ghost" size="xs" iconOnly
          aria-label="Bad response" aria-pressed={vote === 'down'}
          data-active={vote === 'down' || undefined}
          onClick={() => toggle('down')}
        >
          <ThumbsDownIcon size={14} />
        </RateButton>
        <Button variant="ghost" size="xs" iconOnly aria-label="Rerun">
          <RefreshCw04Icon size={14} />
        </Button>
      </AIMessageActions>
    </ActionsRow>
  );
}

/** A trigger summarising what a single step drew on — "{N} tools used" — that
 *  opens the run-details drawer on the right, scoped to that step. The toolkit is
 *  derived from the step's own kind, so each step surfaces the actual tools it drove
 *  (Policy Engine, Engage) rather than a fixed canned set. `title` is the step's
 *  headline, shown as the drawer title above the tool summary. */
function UsageSummary({ usage, title }: { usage: ActivityUsage; title?: string }) {
  const [open, setOpen] = useState(false);

  // Close the drawer on Escape while it's open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  if (!usage.length) return null;
  return (
    <UsageWrap>
      <Button
        variant="tertiary"
        size="xs"
        trailingArtwork={<ChevronRightIcon size={12} />}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        {usage.length} {usage.length === 1 ? 'tool' : 'tools'} used
      </Button>
      {open && createPortal(
        <UsageOverlay role="dialog" aria-modal="true" aria-label="Run details">
          <UsageScrim onClick={() => setOpen(false)} />
          <UsageDrawer>
            <UsageDrawerHeader>
              <UsageDrawerHeadings>
                <UsageDrawerTitle>{title ?? 'Run details'}</UsageDrawerTitle>
                <UsageDrawerSubtitle>
                  {usage.length} {usage.length === 1 ? 'tool' : 'tools'} used · {usage.map(u => u.name).join(', ')}
                </UsageDrawerSubtitle>
              </UsageDrawerHeadings>
              <UsageClose type="button" aria-label="Close" onClick={() => setOpen(false)}>
                <XCloseIcon size={18} />
              </UsageClose>
            </UsageDrawerHeader>
            <UsageDrawerBody>
              <ToolList>
                {usage.map((it, i) => (
                  <UsageRow key={it.name} entry={it} first={i === 0} />
                ))}
              </ToolList>
            </UsageDrawerBody>
          </UsageDrawer>
        </UsageOverlay>,
        document.body,
      )}
    </UsageWrap>
  );
}

/** One tool row in the run-details drawer — a compact line (icon + name +
 *  description) that expands into a detail shaped to the tool: the Policy Engine
 *  shows the policies it evaluated and the eligible workers it returned; Engage
 *  shows the message threads it opened. */
function UsageRow({ entry, first }: { entry: UsageEntry; first: boolean }) {
  const Icon = USAGE_ICONS[entry.icon];
  const { policies, eligible, threads, notification } = entry;
  const eligibleMore = eligible ? eligible.total - eligible.items.length : 0;
  const threadsMore = threads ? threads.total - threads.items.length : 0;
  // Each tool's detail starts expanded — the drawer shows every tool's work at a
  // glance — and can be collapsed independently of the others.
  const [open, setOpen] = useState(true);
  return (
    <ToolRow data-first={first || undefined}>
      <ToolHeader type="button" aria-expanded={open} onClick={() => setOpen(o => !o)}>
        <ToolTile aria-hidden="true"><Icon size={16} /></ToolTile>
        <ToolHeadings>
          <ToolName>{entry.name}</ToolName>
          <ToolDesc>{entry.description}</ToolDesc>
        </ToolHeadings>
        <ToolChevron data-open={open || undefined} aria-hidden="true"><ChevronRightIcon size={16} /></ToolChevron>
      </ToolHeader>
      {open && (
        <ToolDetail>
          {/* Policy Engine — the policies it checked against, each a green tick. */}
          {policies && (
            <ToolField>
              <ToolFieldLabel>Policies evaluated · {policies.total}</ToolFieldLabel>
              <PolicyList>
                {policies.items.map((p, k) => (
                  <li key={k}><PolicyCheck aria-hidden="true"><CheckIcon size={14} /></PolicyCheck><span>{p}</span></li>
                ))}
              </PolicyList>
            </ToolField>
          )}
          {/* Policy Engine — the eligible workers it returned, ranked by match. */}
          {eligible && (
            <ToolField>
              <ToolFieldLabel>Returned · {eligible.total} {eligible.unit}</ToolFieldLabel>
              <CandidateList>
                {eligible.items.map((c, k) => (
                  <CandidateRow key={k}>
                    <CandidateName>{c.name}</CandidateName>
                    <CandidateMeta>{c.match} · {c.distance}</CandidateMeta>
                  </CandidateRow>
                ))}
              </CandidateList>
              {eligibleMore > 0 && <MoreLine>+{eligibleMore} more {eligible.moreNoun}</MoreLine>}
            </ToolField>
          )}
          {/* Engage — the message threads it opened, one row per recipient. */}
          {threads && (
            <ToolField>
              <ToolFieldLabel>Threads · {threads.total}</ToolFieldLabel>
              <ThreadList>
                {threads.items.map((t, k) => (
                  <ThreadRow key={k}>
                    <Avatar size="md" src={avatarUrl(t.seed)} name={t.name} alt="" />
                    <ThreadBody>
                      <ThreadName>{t.name}</ThreadName>
                      <ThreadPreview>{t.preview}</ThreadPreview>
                    </ThreadBody>
                    <ThreadStatus $tone={t.tone}>{t.status}</ThreadStatus>
                    <ThreadChevron aria-hidden="true"><ChevronRightIcon size={16} /></ThreadChevron>
                  </ThreadRow>
                ))}
              </ThreadList>
              {threadsMore > 0 && <MoreLine>+{threadsMore} more {threads.moreNoun}</MoreLine>}
            </ToolField>
          )}
          {/* Engage notification — a single recipient and the message body sent. */}
          {notification && (
            <>
              <ToolField>
                <ToolFieldLabel>Recipient</ToolFieldLabel>
                <ThreadRow>
                  <Avatar size="md" src={avatarUrl(notification.seed)} name={notification.name} alt="" />
                  <ThreadBody>
                    <ThreadName>{notification.name}</ThreadName>
                    <ThreadPreview>{notification.role} · {notification.channel}</ThreadPreview>
                  </ThreadBody>
                </ThreadRow>
              </ToolField>
              <ToolField>
                <ToolFieldLabel>Message</ToolFieldLabel>
                <MessageBox>{notification.message}</MessageBox>
              </ToolField>
            </>
          )}
        </ToolDetail>
      )}
    </ToolRow>
  );
}

function MilestoneRow({ milestone, last }: { milestone: ActivityMilestone; last: boolean }) {
  return (
    <Row>
      <IconCol>
        <MilestoneIcon icon={milestone.icon} />
        {!last && <Connector />}
      </IconCol>
      <MilestoneContent milestone={milestone} last={last} />
    </Row>
  );
}

/** A block's referenced records as record cards. Shows a few by default with a
 *  "Show more" toggle to reveal the full set (and "Show less" to collapse). */
function BlockRecords({ records, initial = 3 }: { records: RecordRef[]; initial?: number }) {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? records : records.slice(0, initial);
  const hidden = records.length - initial;
  return (
    <RecordCardList>
      {shown.map((r, k) => <RecordCard key={k} record={r} />)}
      {hidden > 0 && (
        <ShowMore type="button" onClick={() => setShowAll(v => !v)}>
          {showAll ? 'Show less' : `Show ${hidden} more`}
        </ShowMore>
      )}
    </RecordCardList>
  );
}

function MilestoneIcon({ slotRef, hidden, loading }: {
  icon: ActivityMilestone['icon'];
  slotRef?: (el: HTMLElement | null) => void;
  hidden?: boolean;
  loading?: boolean;
}) {
  // A step in progress shows a spinning ring; once it completes the ring closes
  // into a full circle and the checkmark draws on — one continuous SVG so the
  // loader morphs into the check instead of hard-swapping. `slotRef` lets the
  // resting agent mark measure this icon's position; `hidden` keeps the icon's
  // layout while that mark covers it, so geometry stays measurable.
  return (
    <IconBadge ref={slotRef} aria-hidden="true" $hidden={hidden} $loading={loading}>
      <StatusMark viewBox="0 0 24 24" $loading={loading}>
        <circle className="ring" cx="12" cy="12" r="9" />
        <path className="check" d="M7.5 12.4l3 3 6-6.4" />
      </StatusMark>
    </IconBadge>
  );
}

/** A milestone's headline + (collapsible) detail blocks. Shared by the inline
 *  trail row and the standalone step card. While `typing`, the headline pulses
 *  (a live "thinking" blink) and the secondary text types out beneath it —
 *  Ultron mid-thought. */
function MilestoneContent({ milestone, last, typing, icon, collapsible = true, extra }: { milestone: ActivityMilestone; last?: boolean; typing?: boolean; icon?: ReactNode; collapsible?: boolean; extra?: ReactNode }) {
  const hasBlocks = !!milestone.blocks?.length;
  // Extra content hung under this step (the group's "tools used" trigger).
  const hasExtra = !!extra;
  // Collapsible steps start collapsed (an accordion the operator opens to reveal
  // the supplemental line); always-on steps stay expanded.
  const [open, setOpen] = useState(!collapsible);

  // A collapsible step toggles its own supplemental sub-context via a trailing
  // chevron (the prompt-card step accordion). While typing it's inert — the
  // chevron only appears once the step has settled. It's expandable when it has
  // hidden content to reveal: detail blocks, or the usage trigger itself.
  const interactive = collapsible && !typing && (hasBlocks || hasExtra);
  // Blocks reveal immediately (even while typing) so the secondary text can type
  // out in place rather than popping in after the headline.
  const showBlocks = hasBlocks && (collapsible ? open : true);
  // The usage trigger lives inside the step's accordion — revealed only when the
  // operator opens the step, so it reads as detail tucked under the activity
  // rather than a permanently-on inline control.
  const showExtra = hasExtra && (collapsible ? open : true);

  return (
    <Content $last={last}>
      <Header
        as={interactive ? 'button' : 'div'}
        type={interactive ? 'button' : undefined}
        $interactive={interactive}
        aria-expanded={interactive ? open : undefined}
        onClick={interactive ? () => setOpen(o => !o) : undefined}
      >
        {/* Card layout rides the icon inline here, so it centers against the
            title (top row: icon + title); the connected trail leaves it out
            (the icon lives in the left rail instead). */}
        {icon}
        <Headline $blink={!!typing}>{milestone.headline}</Headline>
        {interactive && (
          <Chevron data-open={open || undefined} aria-hidden="true"><ChevronRightIcon size={14} /></Chevron>
        )}
      </Header>

      {/* Running progress sub-row — a live status line that cycles through the
          step's progress beats (each pops in as it replaces the last) while the
          step is working, then settles to the final result in the success tone. */}
      {milestone.progress?.length ? (
        <ProgressWrap $indent={!!icon}>
          <MilestoneProgress steps={milestone.progress} avatars={milestone.avatars} live={!!typing} />
        </ProgressWrap>
      ) : null}

      {showBlocks && (
        <Blocks $indent={!!icon}>
          {milestone.blocks!.map((b, j) => (
            <Block key={j}>
              {b.text && <BlockText>{typing ? <Typewriter text={b.text} /> : b.text}</BlockText>}
              {b.label && <BlockLabel>{b.label}</BlockLabel>}
              {b.bullets && (
                <BulletList>
                  {b.bullets.map((x, k) => <li key={k}>{x}</li>)}
                </BulletList>
              )}
              {b.checks && (
                <CheckList>
                  {b.checks.map((x, k) => (
                    <li key={k}><CheckDot aria-hidden="true" /><span>{x}</span></li>
                  ))}
                </CheckList>
              )}
              {b.records && <BlockRecords records={b.records} />}
            </Block>
          ))}
        </Blocks>
      )}

      {showExtra && <ExtraSlot $indent={!!icon}>{extra}</ExtraSlot>}
    </Content>
  );
}

/** How long each running progress beat holds before the next replaces it. Sized
 *  so a short count-up sequence ticks through roughly within a step's reveal
 *  cadence (ACTIVITY_STEP_MS) before it settles to the result. */
const PROGRESS_BEAT_MS = 620;

/** A step's running-progress line. While `live`, it advances through the beats —
 *  each new beat re-mounts (via key) so it pops in, replacing the previous one —
 *  and holds on the last (the settled result). Once not live, it shows the final
 *  result straight away. The terminal beat reads in the success tone (done),
 *  earlier beats in a muted "still working" tone. The matched-user avatars (when
 *  present) ride the trailing end of the row once the step settles. */
function MilestoneProgress({ steps, avatars, live }: { steps: string[]; avatars?: string[]; live?: boolean }) {
  const last = steps.length - 1;
  const [i, setI] = useState(live ? 0 : last);

  // Once the step goes live it plays through EVERY beat in order — so the status
  // ticks up ("Reaching out to …" → "Reached N/20 …" → the settled result) and
  // keeps advancing even after the headline stops typing, rather than snapping
  // straight to the end. A step that mounts already settled (a historical /
  // resolved trail that was never live) shows the final result at once.
  const started = useRef(live);
  useEffect(() => {
    if (live && !started.current) { started.current = true; setI(0); }
  }, [live]);

  useEffect(() => {
    if (!started.current || i >= last) return;
    const t = setTimeout(() => setI(n => Math.min(n + 1, last)), PROGRESS_BEAT_MS);
    return () => clearTimeout(t);
  }, [i, last]);

  const done = i >= last;
  return (
    <ProgressRow>
      <ProgressLine key={i} $done={done} aria-live="polite">
        {steps[i]}
      </ProgressLine>
      {done && avatars?.length ? <AvatarStack seeds={avatars} /> : null}
    </ProgressRow>
  );
}

/** How long between each avatar popping in, so the cluster fills left to right. */
const AVATAR_STAGGER_MS = 90;

/** A compact overlapping cluster of the people a step reached. Shows up to five
 *  faces (leading face stacked on top); any beyond that collapse into a trailing
 *  "+N" count chip. The faces reveal one-by-one, left to right, each popping in a
 *  beat after the last so the group fills in as a flow. */
function AvatarStack({ seeds, max = 5 }: { seeds: string[]; max?: number }) {
  const shown = seeds.slice(0, max);
  const extra = seeds.length - shown.length;
  return (
    <StackRow aria-label={`${seeds.length} people reached`}>
      {shown.map((seed, i) => (
        <StackItem key={seed} style={{ zIndex: shown.length - i, animationDelay: `${i * AVATAR_STAGGER_MS}ms` }}>
          <Avatar size="sm" src={avatarUrl(seed)} name={seed} alt="" />
        </StackItem>
      ))}
      {extra > 0 && <StackMore aria-hidden="true" style={{ animationDelay: `${shown.length * AVATAR_STAGGER_MS}ms` }}>+{extra}</StackMore>}
    </StackRow>
  );
}

// ── Styled ───────────────────────────────────────────────────────────────────

const Trail = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
`;

/* Each session slides up + fades in as it's revealed, so the trail grows. */
const cardIn = keyframes`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* Shared reveal: a message group fades its feedback row in while hovered or
   focus-within. Applied by SessionShell, ResponseSet, and the decision turn. */
export const revealFeedbackOnHover = css`
  &:hover [data-feedback-actions],
  &:focus-within [data-feedback-actions] {
    opacity: 1;
    pointer-events: auto;
  }
`;

/* A session — one collapsible run of activities, sitting flush in the feed (no
   padded card frame) so its header and steps line up with the rest of the trail. */
const SessionShell = styled.div<{ $animate?: boolean }>`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
  animation: ${cardIn} var(--duration-base) var(--ease-out);
  /* Skip the entrance when the group is merely folding into a response set after it
     already streamed in — replaying it would blink the already-shown trail. */
  ${p => p.$animate === false && 'animation: none;'}

  ${revealFeedbackOnHover}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

/* The session toggle: the one-line summary row, identical whether the session
   is open or shut — only the chevron rotates and the activity list below it
   reveals. */
const SessionHeader = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`;

/* The live running label pulses (a soft opacity blink) so it reads as active,
   matching the typing-headline blink used elsewhere in the trail. */
const runningBlink = keyframes`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.45; }
`;

/* Sizes to its content (no flex-grow) so the trailing chevron sits right after
   the label rather than at the far edge of the row. While running, the label reads
   a touch stronger (secondary, not disabled) and blinks so the live status stands
   out from the settled recap. */
const SummaryText = styled.span<{ $running?: boolean }>`
  min-width: 0;
  text-align: left;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: ${p => (p.$running ? 'var(--color-content-secondary)' : 'var(--color-content-disabled)')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  animation: ${p => (p.$running ? runningBlink : 'none')} 1.1s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

/* Trailing ellipsis for the running status. Static dots — the whole label
   (text + ellipsis) pulses together via SummaryText's running blink, so the dots
   don't need their own sequential animation. */
const Ellipsis = styled.span``;

/* Condensed activity stack inside an expanded session. */
const SessionBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-top: var(--space-3);
`;

/* Wraps each step (positioning context for its connector). */
const RowAnchor = styled.div`
  min-width: 0;
  position: relative;
`;

/* Dashed vertical line linking one session step's leading icon to the next,
   running down the icon column and bridging the inter-row gap. Uses the neutral
   divider stroke so it reads on both light and dark surfaces. Inset top/bottom by
   space-1 for breathing room. */
const SessionConnector = styled.span`
  position: absolute;
  /* Centered on the 32px icon column. */
  left: calc(var(--space-8) / 2);
  top: calc(var(--space-8) + var(--space-1));
  bottom: calc(var(--space-1) - var(--space-2));
  width: 0;
  border-left: 1.5px dashed var(--color-border-opaque);
  pointer-events: none;
`;

/* The group's feedback footer — sits below the last activity with quiet top
   spacing so it reads as a trailing action row rather than another step. Hung
   under the headline (clears the inline icon column like Blocks/Usage) so the
   cluster lines up with the sub-context text above it. */
const ActionsRow = styled.div`
  padding-top: var(--space-4);
  /* Nudge the action cluster 8px further below the usage toggle. */
  margin-top: var(--space-2);
  /* Sit on the group's left rail — flush with the session summary and the
     activity icon column — rather than indented onto the content rail. */

  /* Hidden at rest — the enclosing message group reveals it on hover/focus (the
     reveal rule is shared by SessionShell, ResponseSet, and the decision turn).
     Opacity (not display) keeps the row's layout box, so the resting agent mark
     still anchors below it. */
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--duration-base) var(--ease-out);

  /* Size the action buttons (thumbs up/down + rerun) to a 24px tap target,
     keeping their icons centered. The min-width override beats the design
     system's icon-only width rule. */
  & button {
    width: 24px;
    min-width: 24px;
    height: 24px;
    padding: 0;
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`;

/* Usage summary — a quiet trigger sitting under a group's last activity that
   opens the run detail in a right-side drawer. */
const UsageWrap = styled.div`
  display: flex;
`;

/* Holds the group's "tools used" trigger beneath its last activity, indented past
   the inline icon column so it lines up under the step headlines. */
const ExtraSlot = styled.div<{ $indent?: boolean }>`
  padding-top: var(--space-2);
  padding-left: ${p => (p.$indent ? 'calc(var(--space-8) + var(--space-3))' : '0')};
`;

/* ── Usage drawer ──────────────────────────────────────────────────────────── */

/* Full-viewport overlay that anchors the drawer to the right edge. */
const usageScrimIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;
const usageDrawerIn = keyframes`
  from { transform: translateX(100%); }
  to   { transform: translateX(0); }
`;

const UsageOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
`;

const UsageScrim = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(2, 6, 23, 0.45);
  animation: ${usageScrimIn} 200ms var(--ease-out);
`;

/* The panel itself — slides in from the right, a left-projecting shadow lifts it
   above the page. */
const UsageDrawer = styled.div`
  position: relative;
  width: min(360px, 86vw);
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--color-bg-primary);
  box-shadow: -12px 0 32px rgba(2, 6, 23, 0.18);
  animation: ${usageDrawerIn} 260ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const UsageDrawerHeader = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  min-height: 48px;
  padding: var(--space-3);
  border-bottom: 1px solid var(--color-border-opaque);
`;

const UsageDrawerHeadings = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const UsageDrawerTitle = styled.h2`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`;

/* Tools summary beneath the drawer title — "{N} tools used · Policy Engine, Engage",
   the names of the tools the step actually drove. */
const UsageDrawerSubtitle = styled.p`
  margin: var(--space-1) 0 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-snug);
  color: var(--color-content-tertiary);
`;

const UsageClose = styled.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  color: var(--color-content-secondary);
  cursor: pointer;

  &:hover { background: var(--color-bg-secondary); }
  &:focus-visible { box-shadow: 0 0 0 2px var(--color-border-focus); }
`;

const UsageDrawerBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: 0;
  overflow-y: auto;
`;

const ToolList = styled.div`
  display: flex;
  flex-direction: column;
`;

/* One tool/skill/data row — a single-line header plus its (collapsible) detail.
   Each row carries its own 12px left/right gutter (rather than the list wrapper) so
   it owns its inset. A hairline divider separates each from the last — inset on the
   left to start at the title (row gutter + icon tile column + header gap, matching
   ToolDetail) and held off the right gutter, so it reads as a row separator under
   the text rather than a full-bleed rule. */
const ToolRow = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 var(--space-3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    /* gutter + tile + header gap — the ::before is anchored to the padding box, so
       the row's own left gutter is added back in to land on the title. */
    left: calc(var(--space-3) + var(--space-8) + var(--space-3));
    /* Runs flush to the row's right edge — no right gutter. */
    right: 0;
    border-top: 1px solid var(--color-border-opaque);
  }

  &[data-first]::before { display: none; }
`;

/* The always-visible row: rounded icon tile + a two-line name/description block +
   disclosure chevron. The description rides under the name (rather than hiding
   behind the expand) so every tool reads at a glance. */
const ToolHeader = styled.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  padding: var(--space-3) 0;
  cursor: pointer;

  &:focus-visible { box-shadow: 0 0 0 2px var(--color-border-focus); border-radius: var(--radius-sm); }
`;

/* Rounded icon tile keyed to the section's kind — 32px (space-8). */
const ToolTile = styled.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`;

/* The name + description stack — takes the row's flexible width between the tile
   and the chevron. */
const ToolHeadings = styled.span`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  text-align: left;
`;

const ToolName = styled.span`
  min-width: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`;

const ToolDesc = styled.span`
  /* Alloy paragraph / small */
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-snug);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
`;

/* Disclosure chevron — points right when collapsed, rotates down when open.
   Sits in a 32px square slot so its tap target matches the leading icon tile and
   the glyph stays centered as it rotates. */
const ToolChevron = styled.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;

/* Expanded detail — hung under the name, clearing the icon tile column (tile
   width space-8, plus the header gap space-3). */
const ToolDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: 0 0 var(--space-4);
  padding-left: calc(var(--space-8) + var(--space-3));
`;

/* One labeled field inside the expanded detail — an eyebrow label over its value
   (the query block or the summary text). */
const ToolField = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

/* Field eyebrow — "QUERY" / "SUMMARY", matching the section label treatment.
   A touch below --text-xs (12px) since the uppercase + wide tracking lets it read
   fine smaller as a quiet eyebrow. */
const ToolFieldLabel = styled.span`
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`;

/* ── Policy Engine detail ──────────────────────────────────────────────────── */

/* The evaluated-policies list — each line a green tick + the policy it checked. */
const PolicyList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);

  & li {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-family: var(--font-sans);
    font-size: var(--text-sm);
    line-height: var(--line-height-snug);
    color: var(--color-content-primary);
  }
`;

/* The leading green tick on a policy line. */
const PolicyCheck = styled.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-success-content);
`;

/* The returned eligible workers — a ranked column of name + match/distance rows. */
const CandidateList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;

/* One eligible-worker row — name on the left, match score + distance trailing. */
const CandidateRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-3);
`;

const CandidateName = styled.span`
  min-width: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`;

const CandidateMeta = styled.span`
  flex-shrink: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-snug);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`;

/* "+N more …" overflow line beneath a returned/threads list. */
const MoreLine = styled.div`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-snug);
  color: var(--color-content-tertiary);
`;

/* ── Engage detail ─────────────────────────────────────────────────────────── */

/* The message-thread list — one row per recipient, hairline-separated. */
const ThreadList = styled.div`
  display: flex;
  flex-direction: column;
`;

/* One thread row: avatar + name/preview stack + status chip + chevron. A divider
   separates each from the last (inset to start under the name, like the tool rows). */
const ThreadRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;

  &:not(:first-child)::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    border-top: 1px solid var(--color-border-opaque);
  }
`;

/* The name + latest-line stack — takes the row's flexible width. */
const ThreadBody = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`;

const ThreadName = styled.span`
  min-width: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`;

/* The latest line in the thread — their reply, or the delivery state. Truncates so
   a long reply keeps the row to two lines. */
const ThreadPreview = styled.span`
  min-width: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

/* Status chip — a warm reply ("Interested"/"Read") reads green; a still-delivered
   thread reads quiet. */
const ThreadStatus = styled.span<{ $tone: 'positive' | 'muted' }>`
  flex-shrink: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: ${p => (p.$tone === 'positive' ? 'var(--font-weight-medium)' : 'var(--font-weight-regular)')};
  line-height: var(--line-height-snug);
  white-space: nowrap;
  color: ${p => (p.$tone === 'positive' ? 'var(--color-success-content)' : 'var(--color-content-tertiary)')};
`;

/* Trailing chevron on a thread row — hints the thread opens. */
const ThreadChevron = styled.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-tertiary);
`;

/* The message body of an Engage notification — the text Ultron sent, in a quiet
   bordered card so it reads as the verbatim message rather than UI copy. */
const MessageBox = styled.div`
  padding: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-primary);
`;

/* A thumbs button that lights up when it's the active rating; otherwise it
   matches the tertiary chrome of the rest of the cluster. */
const RateButton = styled(Button)`
  &[data-active] { color: var(--color-content-brand); }
`;

/* Types a string out character-by-character with a blinking caret. The full
   text is always laid out (the un-typed tail is rendered transparent) so the
   line never re-wraps as it fills in — the reveal stays smooth and jump-free. */
export function Typewriter({ text, onDone, speed = 30 }: { text: string; onDone?: () => void; speed?: number }) {
  const [n, setN] = useState(0);
  useEffect(() => { setN(0); }, [text]);
  useEffect(() => {
    if (n >= text.length) return;
    const t = setTimeout(() => setN(v => v + 1), speed);
    return () => clearTimeout(t);
  }, [n, text, speed]);
  const done = n >= text.length;
  useEffect(() => { if (done) onDone?.(); }, [done]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      {text.slice(0, n)}
      <Caret $blink={done} aria-hidden="true" />
      {!done && <Pending aria-hidden="true">{text.slice(n)}</Pending>}
    </>
  );
}

const caretBlink = keyframes`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`;

const Caret = styled.span<{ $blink?: boolean }>`
  display: inline-block;
  width: 1px;
  height: 1em;
  margin-left: 1px;
  /* Centre on the text rather than the line box — text-bottom anchored the caret
     to the line-box bottom (the leading/descender gap), leaving it sitting low. */
  vertical-align: middle;
  background: currentColor;
  animation: ${p => (p.$blink ? caretBlink : 'none')} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

/* The not-yet-typed tail — kept in the layout but invisible, so the headline
   reserves its full width up front and never re-wraps mid-type. */
const Pending = styled.span`
  opacity: 0;
`;

const Row = styled.div`
  display: flex;
  align-items: stretch;
  /* space-4 (not space-3) so the headline clears the icon column and lands
     under the header title while the icon stays centered under the avatar. */
  gap: var(--space-4);
`;

const IconCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`;

/* 32px leading-icon slot — the icon (16px) centers within it, giving each step
   a badge-sized icon column that lines up under the header avatar. `$hidden`
   keeps the slot's layout (so the floating mark can still measure it) while the
   mark visually stands in for it. */
const IconBadge = styled.span<{ $hidden?: boolean; $loading?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
  visibility: ${p => (p.$hidden ? 'hidden' : 'visible')};
`;

/* In-progress step indicator that resolves to the success check. A single SVG
   holds both the ring and the checkmark so the loader *morphs* into the check
   rather than hard-swapping:

   • Loading — the ring shows a ~30% arc (dashoffset) spinning continuously in
     the neutral divider stroke, reading as "working"; the check is undrawn.
   • Done — the arc closes to a full circle and the stroke warms to success
     green (transitioned dashoffset + color), then the checkmark strokes itself
     on a beat later. The ring keeps its silent spin even when full, so there's
     no rotation snap at the hand-off; a full circle spinning is invisible.

   Circumference for r=9 is 2·π·9 ≈ 56.5 (the dash unit below). */
const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const RING_C = 56.5;

const StatusMark = styled.svg<{ $loading?: boolean }>`
  width: var(--space-4);
  height: var(--space-4);
  overflow: visible;

  .ring {
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-dasharray: ${RING_C};
    transform-origin: center;
    /* loading: leave ~30% of the circle drawn as the spinner arc */
    stroke-dashoffset: ${p => (p.$loading ? RING_C * 0.7 : 0)};
    stroke: ${p => (p.$loading ? 'var(--color-content-tertiary)' : 'var(--color-success-content)')};
    animation: ${spin} 0.75s linear infinite;
    /* Arc closes + warms on one eased settle curve (easeOutCubic) over the same
       duration, so the ring glides shut rather than braking abruptly. */
    transition:
      stroke-dashoffset 0.55s cubic-bezier(0.33, 1, 0.68, 1),
      stroke 0.55s cubic-bezier(0.33, 1, 0.68, 1);
  }

  .check {
    fill: none;
    stroke: var(--color-success-content);
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 15;
    /* undrawn + slightly shrunk + transparent while loading; on done it draws on
       while fading + settling to full scale, so the check eases in rather than
       popping. transform-box keeps the scale centred on the glyph itself. */
    stroke-dashoffset: ${p => (p.$loading ? 15 : 0)};
    opacity: ${p => (p.$loading ? 0 : 1)};
    transform: ${p => (p.$loading ? 'scale(0.7)' : 'scale(1)')};
    transform-box: fill-box;
    transform-origin: center;
    /* Starts ~0.42s in — as the ring finishes closing — so the two motions hand
       off cleanly instead of overlapping. */
    transition:
      stroke-dashoffset 0.4s cubic-bezier(0.33, 1, 0.68, 1) 0.42s,
      opacity 0.26s ease 0.42s,
      transform 0.42s cubic-bezier(0.34, 1.4, 0.64, 1) 0.42s;
  }

  @media (prefers-reduced-motion: reduce) {
    .ring { animation: none; }
    .ring, .check { transition: none; }
  }
`;

/* Dashed vertical line connecting one milestone's icon to the next. Multiply
   blend lets the light slate dashes darken against the card's tonal background
   instead of sitting on top as a flat gray. */
const Connector = styled.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`;

const Content = styled.div<{ $last?: boolean }>`
  flex: 1;
  min-width: 0;
  padding-bottom: ${p => (p.$last ? '0' : 'var(--space-4)')};
`;

const Header = styled.div<{ $interactive?: boolean }>`
  all: unset;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  box-sizing: border-box;
  cursor: ${p => (p.$interactive ? 'pointer' : 'default')};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`;

/* While the row is the one Ultron is mid-thought on, the label pulses (a soft
   opacity blink) to read as live, then settles solid once the row finishes. */
const labelBlink = keyframes`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.4; }
`;

const Headline = styled.span<{ $blink?: boolean }>`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-size: var(--text-sm); /* 14px */
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
  line-height: var(--line-height-snug);
  animation: ${p => (p.$blink ? labelBlink : 'none')} 1.1s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

/* Chevron points right when collapsed, rotates to point down when expanded. */
const Chevron = styled.span`
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;

/* Running-progress sub-row — sits directly under the headline. Hangs under the
   title (clears the inline icon column like Blocks) when the icon rides inline;
   in the connected trail the row is already offset so no indent is needed. */
const ProgressWrap = styled.div<{ $indent?: boolean }>`
  padding-top: var(--space-1);
  padding-left: ${p => (p.$indent ? 'calc(var(--space-8) + var(--space-3))' : '0')};
`;

/* Each progress beat pops in as it replaces the last — a quick fade + small
   upward settle, so a status change reads as a fresh line landing. */
const progressPop = keyframes`
  from { opacity: 0; transform: translateY(var(--space-1)); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* Holds the status line and the trailing matched-user avatar group on one row —
   the line takes the lead, the avatars sit flush to the right edge. */
const ProgressRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`;

/* The status line itself — Alloy paragraph / medium, in the muted content-tertiary
   tone for both the in-flight beats and the settled result. */
const ProgressLine = styled.div<{ $done?: boolean }>`
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-loose);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
  animation: ${progressPop} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

/* Trailing overlapping avatar cluster — the matched people the step reached. The
   faces tuck under one another (negative gap) and each carries a surface-coloured
   ring so the stack reads cleanly against the trail. The container is static; the
   faces themselves stagger in (see avatarPop) so the group fills left to right. */
const StackRow = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

/* Each face pops in from a slightly tucked, scaled-down start — paired with the
   per-item animation-delay set in the markup, the cluster reveals left to right. */
const avatarPop = keyframes`
  from { opacity: 0; transform: translateX(calc(-1 * var(--space-2))) scale(0.6); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
`;

const StackItem = styled.span`
  display: inline-flex;
  border-radius: var(--radius-full);
  /* White ring + overlap, so the faces fan out as one cluster. */
  box-shadow: 0 0 0 2px var(--color-bg-primary);
  /* "both" fill holds the from-state through the stagger delay so faces stay
     hidden until their turn, rather than flashing in then animating. */
  animation: ${avatarPop} 300ms var(--ease-out) both;

  &:not(:first-child) { margin-left: calc(-1 * var(--space-2)); }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

/* Overflow count chip when more people were reached than faces shown. */
const StackMore = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--space-6);
  min-width: var(--space-6);
  padding: 0 var(--space-1);
  margin-left: calc(-1 * var(--space-2));
  border-radius: var(--radius-full);
  box-shadow: 0 0 0 2px var(--color-bg-primary);
  background: var(--color-slate-bg-secondary);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
  animation: ${avatarPop} 300ms var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

/* The sub-context eases in once the headline finishes typing, rather than
   popping in — a soft fade + small upward settle. */
const blocksIn = keyframes`
  from { opacity: 0; transform: translateY(calc(-1 * var(--space-1))); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Blocks = styled.div<{ $indent?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
  /* Card layout: hang the sub-context under the title by clearing the inline
     icon column (icon width --space-8 + header gap --space-3). */
  padding-left: ${p => (p.$indent ? 'calc(var(--space-8) + var(--space-3))' : '0')};
  animation: ${blocksIn} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`;

const BlockText = styled.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`;

const BlockLabel = styled.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`;

/* Referenced records (people/shifts) rendered as compact record cards. */
const RecordCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`;

/* Inline text toggle to reveal the rest of a long record list. */
const ShowMore = styled.button`
  align-self: flex-start;
  margin: 0;
  padding: var(--space-1) 0;
  background: none;
  border: none;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
  cursor: pointer;

  &:hover { color: var(--color-content-primary); }
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`;

const BulletList = styled.ul`
  margin: 0;
  padding-left: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  list-style: disc;

  & li {
    font-size: var(--text-xs);
    line-height: var(--line-height-normal);
    color: var(--color-content-tertiary);
  }
`;

const CheckList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);

  & li {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-xs);
    line-height: var(--line-height-normal);
    color: var(--color-content-tertiary);
  }
`;

/* The leading marker for a check-list item — a small dot in place of a check
   glyph, matching the disc bullets used elsewhere in the trail. */
const CheckDot = styled.span`
  flex-shrink: 0;
  width: 4px;
  height: 4px;
  border-radius: var(--radius-full);
  background: currentColor;
`;
