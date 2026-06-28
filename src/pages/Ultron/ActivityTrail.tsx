/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — past-activity trail.
   A vertical timeline of milestones with a connector line. Milestones that
   carry detail blocks are individually collapsible (paragraph / labeled bullet
   list / labeled check list).
   ───────────────────────────────────────────────────────────────────────────── */

import { useState, useEffect, useRef, useLayoutEffect, type ReactNode, type ComponentType } from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';
import {
  Avatar, Button, ChevronRightIcon, XCloseIcon,
  AIMessageActions, ThumbsUpIcon, ThumbsDownIcon, RefreshCw04Icon,
  SearchMdIcon, MessageCircle02Icon, TriangleUpIcon, CheckVerified01Icon,
  Edit01Icon, LineChartUp01Icon, ClockIcon, EyeIcon,
} from 'alloy-design-system';
import type { ActivityMilestone, RecordRef, ActivityUsage, UsageEntry, UsageIconKey } from './fixtures';
import { avatarUrl, aggregateUsage } from './fixtures';

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
};
import { AgentMark } from './AgentMark';
import { RecordCard } from './RecordCard';

/* The live agent mark's footprint (36px) and the gap it leaves below the last
   step when it settles into its resting magnetic state. Used both to position
   the floating mark (computed transforms) and to reserve room for it. */
const MARK_PX = 36;
const REST_GAP_PX = 8; // var(--space-2)

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
export function ActivityTrailCards({ milestones, typingIndex, collapsed, workingIndex, settled, hideActions, running }: {
  milestones: ActivityMilestone[];
  typingIndex?: number;
  collapsed?: boolean;
  workingIndex?: number;
  settled?: boolean;
  /** Suppress the group's own feedback row — used when the group sits inside an
   *  <UltronResponse> set, which lifts the feedback below the reply text instead. */
  hideActions?: boolean;
  /** Whether Ultron is actively running this group right now — drives the header's
   *  live status (Thinking → Bridging → … → Crossing) instead of the settled
   *  "Thought for X" recap. */
  running?: boolean;
}) {
  return (
    <ActivitySession
      milestones={milestones}
      typingIndex={typingIndex}
      workingIndex={workingIndex}
      settled={settled}
      hideActions={hideActions}
      running={running}
      defaultCollapsed={collapsed}
    />
  );
}

function ActivitySession({ milestones, typingIndex, workingIndex, settled, hideActions, running, defaultCollapsed }: {
  milestones: ActivityMilestone[];
  typingIndex?: number;
  workingIndex?: number;
  settled?: boolean;
  hideActions?: boolean;
  running?: boolean;
  defaultCollapsed?: boolean;
}) {
  const [open, setOpen] = useState(!defaultCollapsed);
  // Once the operator acts past a session it settles shut — one-way, so they can
  // still reopen it; the active session stays open as it streams.
  useEffect(() => { if (defaultCollapsed) setOpen(false); }, [defaultCollapsed]);

  // ── Live agent mark ──
  // A single persistent mark rides the icon column rather than swapping between
  // per-step icon slots: it parks over the active step's icon and, because its
  // position animates, glides down to the next step as each one completes. When
  // the work settles it leaves the icons behind, dropping just below the last
  // step where it morphs from the working "lines" mark into a resting "magnetic"
  // field. We measure the live geometry (icons + last row) so the glide lands
  // exactly on the icon centers regardless of how tall each step renders.
  const showMark = open && workingIndex != null;
  const activeRow = workingIndex ?? -1;
  const bodyRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLElement | null)[]>([]);
  const rowRefs = useRef<(HTMLElement | null)[]>([]);
  // The feedback row, when shown — the settled mark rests just below it (rather
  // than below the last step, which the feedback row now sits under).
  const actionsRef = useRef<HTMLDivElement>(null);
  const [markPos, setMarkPos] = useState<{ x: number; y: number; ready: boolean }>({ x: 0, y: 0, ready: false });

  // Keep the mark mounted briefly after it should hide (the work caught up and
  // the resting magnetic mark takes over below) so it fades out in place rather
  // than vanishing — the two cross-fade. It holds its last measured position
  // while fading since the measure effect bails when showMark is false.
  const [linger, setLinger] = useState(false);
  useEffect(() => {
    if (showMark) { setLinger(true); return; }
    if (!linger) return;
    const t = setTimeout(() => setLinger(false), 280);
    return () => clearTimeout(t);
  }, [showMark]); // eslint-disable-line react-hooks/exhaustive-deps
  const renderMark = showMark || linger;

  // The mark's first appearance should just fade in at its spot — not glide in
  // from the corner (its pre-measure 0,0 origin). So the gliding transform
  // transition stays OFF for the initial placement and switches ON one frame
  // after the mark is first positioned, leaving step-to-step moves animated.
  const [glide, setGlide] = useState(false);
  useEffect(() => {
    if (!renderMark) { setGlide(false); return; }
    if (!markPos.ready) return;
    const r = requestAnimationFrame(() => setGlide(true));
    return () => cancelAnimationFrame(r);
  }, [renderMark, markPos.ready]);

  useLayoutEffect(() => {
    const body = bodyRef.current;
    if (!body || !showMark) return;
    const measure = () => {
      const bRect = body.getBoundingClientRect();
      const lastIcon = iconRefs.current[milestones.length - 1] ?? iconRefs.current.find(Boolean) ?? null;
      const refIcon = settled ? lastIcon : iconRefs.current[activeRow];
      const ic = refIcon?.getBoundingClientRect();
      // Horizontal: center on the icon column (the same x whether riding a step
      // or resting below the trail).
      const x = ic ? ic.left - bRect.left + ic.width / 2 : MARK_PX / 2;
      // Vertical: the active icon's center, or — when settled — a small gap below
      // the last step's full height.
      let y: number;
      if (settled) {
        // Rest just below the trail's full content — beneath the feedback row when
        // it's present, else the last step — so the mark glides down to the foot in
        // one continuous move rather than landing on top of the feedback row.
        const anchor = actionsRef.current ?? rowRefs.current[milestones.length - 1];
        const ar = anchor?.getBoundingClientRect();
        y = (ar ? ar.bottom - bRect.top : 0) + REST_GAP_PX + MARK_PX / 2;
      } else {
        y = ic ? ic.top - bRect.top + ic.height / 2 : 0;
      }
      setMarkPos({ x, y, ready: true });
    };
    measure();
    // Re-measure when a step expands/collapses or the card reflows, so the glide
    // (and the resting position) track the live layout.
    const ro = new ResizeObserver(measure);
    ro.observe(body);
    return () => ro.disconnect();
  }, [showMark, settled, activeRow, milestones.length, open]);

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
    <SessionShell>
      <SessionHeader type="button" aria-expanded={open} onClick={() => setOpen(o => !o)}>
        <SummaryText $running={running}>{running ? <RunningLabel /> : summary}</SummaryText>
        <Chevron data-open={open || undefined} aria-hidden="true"><ChevronRightIcon size={14} /></Chevron>
      </SessionHeader>

      {open && (
        <SessionBody ref={bodyRef} $reserve={!!settled}>
          {milestones.map((m, i) => (
            <RowAnchor key={i} ref={el => { rowRefs.current[i] = el; }}>
              {i < milestones.length - 1 && <SessionConnector aria-hidden="true" />}
              <MilestoneContent
                milestone={m}
                last
                /* Each step is its own accordion — collapsed to its headline, with
                   a chevron that reveals the step's supplemental line. */
                collapsible
                typing={i === typingIndex}
                /* The run's "tools used" trigger lives under the LAST activity's
                   expanded content — revealed only when the operator opens that
                   step — once the group has settled. Its toolkit is derived from
                   the group's own activities, so it fits the work that was done. */
                extra={i === milestones.length - 1 && (workingIndex == null || settled)
                  ? <UsageSummary usage={aggregateUsage(milestones.map(m => m.icon))} />
                  : undefined}
                icon={
                  <MilestoneIcon
                    icon={m.icon}
                    slotRef={el => { iconRefs.current[i] = el; }}
                    /* The icon the mark is currently riding hides behind it so it
                       reappears (as the completed step's icon) once the mark glides on. */
                    hidden={showMark && !settled && i === activeRow}
                    /* The step Ultron is mid-thought on spins; settled steps check. */
                    loading={typingIndex === i}
                  />
                }
              />
            </RowAnchor>
          ))}
          {/* Feedback row for the whole group — thumbs up/down, rerun, and a
              timestamp. Shown once the group is no longer actively streaming (no
              live mark riding it), so it reads as actions on a finished response. */}
          {!hideActions && (workingIndex == null || settled) && (
            <div ref={actionsRef}><SessionActions time={synthClock(milestones)} /></div>
          )}
          {renderMark && (
            <FloatingMark
              role="img"
              aria-label={settled ? 'Ultron monitoring' : 'Ultron is working'}
              $glide={glide}
              style={{
                transform: `translate(${markPos.x - MARK_PX / 2}px, ${markPos.y - MARK_PX / 2}px)`,
                opacity: showMark && markPos.ready ? 1 : 0,
              }}
            >
              <AgentMark
                mark={settled ? 'magnetic' : 'lines'}
                size={MARK_PX}
                tone="auto"
                state="active"
                motionSpeed={settled ? 1.2 : 2}
                coreHalo={false}
                aria-hidden="true"
              />
            </FloatingMark>
          )}
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
    <ActionsRow>
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

/** A trigger summarising what a group's activities drew on — "{N} tools used" —
 *  that opens the Run details drawer on the right. The toolkit is derived from
 *  the group's own activities (their kinds), so each group surfaces the
 *  capabilities that actually applied to its work rather than a fixed canned set. */
function UsageSummary({ usage }: { usage: ActivityUsage }) {
  const [open, setOpen] = useState(false);
  // Single-open accordion: only one row's detail is expanded at a time. Tracks the
  // open row's index (null = all collapsed) so opening one collapses the others.
  const [openIdx, setOpenIdx] = useState<number | null>(null);

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
        onClick={() => { setOpen(true); setOpenIdx(null); }}
      >
        {usage.length} {usage.length === 1 ? 'tool' : 'tools'} used
      </Button>
      {open && createPortal(
        <UsageOverlay role="dialog" aria-modal="true" aria-label="Run details">
          <UsageScrim onClick={() => setOpen(false)} />
          <UsageDrawer>
            <UsageDrawerHeader>
              <UsageDrawerHeadings>
                <UsageDrawerTitle>Run details</UsageDrawerTitle>
              </UsageDrawerHeadings>
              <UsageClose type="button" aria-label="Close" onClick={() => setOpen(false)}>
                <XCloseIcon size={18} />
              </UsageClose>
            </UsageDrawerHeader>
            <UsageDrawerBody>
              <ToolList>
                {usage.map((it, i) => (
                  <UsageRow
                    key={it.name}
                    entry={it}
                    first={i === 0}
                    open={openIdx === i}
                    onToggle={() => setOpenIdx(cur => (cur === i ? null : i))}
                  />
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

/** One capability row in the Run details drawer — a compact line (icon + name +
 *  description) that expands to reveal the query it ran (when there is one) and a
 *  plain-language summary of what it returned. */
function UsageRow({ entry, first, open, onToggle }: { entry: UsageEntry; first: boolean; open: boolean; onToggle: () => void }) {
  const Icon = USAGE_ICONS[entry.icon];
  return (
    <ToolRow data-first={first || undefined}>
      <ToolHeader type="button" aria-expanded={open} onClick={onToggle}>
        <ToolTile aria-hidden="true"><Icon size={16} /></ToolTile>
        <ToolHeadings>
          <ToolName>{entry.name}</ToolName>
          <ToolDesc>{entry.description}</ToolDesc>
        </ToolHeadings>
        <ToolChevron data-open={open || undefined} aria-hidden="true"><ChevronRightIcon size={16} /></ToolChevron>
      </ToolHeader>
      {open && (
        <ToolDetail>
          {entry.query && (
            <ToolField>
              <ToolFieldLabel>Query</ToolFieldLabel>
              <ToolQuery>{entry.query}</ToolQuery>
            </ToolField>
          )}
          <ToolField>
            <ToolFieldLabel>Summary</ToolFieldLabel>
            <ToolSummary>{entry.summary}</ToolSummary>
          </ToolField>
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

/* A session — one collapsible run of activities, sitting flush in the feed (no
   padded card frame) so its header and steps line up with the rest of the trail. */
const SessionShell = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
  animation: ${cardIn} var(--duration-base) var(--ease-out);

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

/* Condensed activity stack inside an expanded session. Positioned so the live
   agent mark can be absolutely placed over the icon column; when the mark settles
   it rests below the last step, so we reserve room for it (animated, so the trail
   eases open rather than jumping). */
const SessionBody = styled.div<{ $reserve?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-top: var(--space-3);
  /* space-8 (mark) + space-2 (rest gap), via the same calc the mark box uses. */
  padding-bottom: ${p => (p.$reserve ? 'calc(var(--space-8) + var(--space-2) + var(--space-1))' : '0')};
  transition: padding-bottom var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`;

/* Wraps each step so the floating mark can measure the step's full extent (to
   land its resting position just below the last one). */
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

/* The single live agent mark. Absolutely placed within the session body and
   moved via a transform that animates, so it glides from step to step and then
   down to its resting spot. 36px = space-8 + space-1. */
const FloatingMark = styled.span<{ $glide?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(var(--space-8) + var(--space-1));
  height: calc(var(--space-8) + var(--space-1));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  /* Gentle ease-in-out so the glide between steps accelerates and settles
     smoothly rather than snapping; a softer opacity fade lets it cross-fade with
     the resting magnetic mark on handoff. The transform transition is withheld
     for the first placement ($glide false) so the mark fades in where it belongs
     instead of sliding in from the corner. */
  transition: ${p => (p.$glide ? 'transform 460ms cubic-bezier(0.4, 0, 0.2, 1), ' : '')}opacity 260ms var(--ease-out);
  will-change: transform, opacity;

  @media (prefers-reduced-motion: reduce) {
    transition: opacity 200ms var(--ease-out);
  }
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

  /* Size the action buttons (thumbs up/down + rerun) to a 32px tap target,
     keeping their icons centered. The min-width override beats the design
     system's icon-only width rule. */
  & button {
    width: 32px;
    min-width: 32px;
    height: 32px;
    padding: 0;
  }
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
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  height: 48px;
  padding: 0 var(--space-3);
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

/* The tool's query, in a code block. */
const ToolQuery = styled.pre`
  margin: 0;
  padding: var(--space-3);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-primary);
  white-space: pre-wrap;
  word-break: break-word;
`;

/* Plain-language result summary. */
const ToolSummary = styled.p`
  margin: 0;
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
function Typewriter({ text, onDone, speed = 30 }: { text: string; onDone?: () => void; speed?: number }) {
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
    transition: stroke-dashoffset 0.4s ease, stroke 0.3s ease;
  }

  .check {
    fill: none;
    stroke: var(--color-success-content);
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 15;
    /* undrawn while loading; draws in just after the ring closes */
    stroke-dashoffset: ${p => (p.$loading ? 15 : 0)};
    transition: stroke-dashoffset 0.3s ease 0.25s;
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
  padding-top: var(--space-1);
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
