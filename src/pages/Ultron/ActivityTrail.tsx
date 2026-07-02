/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — past-activity trail.
   A vertical timeline of milestones with a connector line. Milestones that
   carry detail blocks are individually collapsible (paragraph / labeled bullet
   list / labeled check list).
   ───────────────────────────────────────────────────────────────────────────── */

import { useState, useEffect, useRef, type ReactNode } from 'react';
import styled, { keyframes, css } from 'styled-components';
import {
  Avatar, Button, ChevronRightIcon,
  AIMessageActions, ThumbsUpIcon, ThumbsDownIcon, RefreshCw04Icon,
} from 'alloy-design-system';
import type { ActivityMilestone, RecordRef, ActivityUsage } from './fixtures';
import { avatarUrl } from './fixtures';
import { RecordCard } from './RecordCard';
import { RunDetailsPanel } from './RunDetailsPanel';

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
export function ActivityTrailCards({ milestones, typingIndex, focusIndex, focusBeat, collapsed, hideActions, running, animateIn, showConnectors }: {
  milestones: ActivityMilestone[];
  typingIndex?: number;
  /** While running, the index of the step Ultron is currently working. Every step
   *  in the run is shown at once, but only this focused step (and the ones already
   *  completed before it) read at full opacity; steps past it render as dimmed,
   *  blank-icon/blank-label skeleton rows until the work reaches them. */
  focusIndex?: number;
  /** Operator-controlled sub-beat for the focused step (a T-stepped demo run):
   *  which line of its `progress` sequence is showing. When set, the focused
   *  step's progress line tracks this index instead of its internal timer. */
  focusBeat?: number;
  /** A newer activity group has triggered below this one — the group is history.
   *  Its step icons demote from the green disc+check to a single muted checkmark
   *  (content-tertiary), so only the latest group carries the success accent. */
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
  /** Whether to draw the vertical connector between steps (and space the rows to
   *  bridge it). The reasoning group (above) hides it and packs tight; the work
   *  group (below) keeps it, since its line tracks the run's progress. Defaults to
   *  true. */
  showConnectors?: boolean;
}) {
  return (
    <ActivitySession
      milestones={milestones}
      typingIndex={typingIndex}
      focusIndex={focusIndex}
      focusBeat={focusBeat}
      hideActions={hideActions}
      running={running}
      defaultCollapsed={collapsed}
      animateIn={animateIn}
      showConnectors={showConnectors}
    />
  );
}

function ActivitySession({ milestones, typingIndex, focusIndex, focusBeat, hideActions, running, animateIn = true, showConnectors = true, defaultCollapsed = false }: {
  milestones: ActivityMilestone[];
  typingIndex?: number;
  focusIndex?: number;
  focusBeat?: number;
  hideActions?: boolean;
  running?: boolean;
  /** The group is history — a newer activity group has triggered below it. The
   *  session stays fully expanded (it no longer collapses), but its settled step
   *  icons demote to a single muted checkmark so the success accent stays with
   *  the latest group. */
  defaultCollapsed?: boolean;
  animateIn?: boolean;
  showConnectors?: boolean;
}) {
  // The group has no header — no "Thought for X" recap and no in-trail running label
  // (Ultron's live working status lives in the fixed presence mark above the composer,
  // see UltronActivityCards' footSlot). The activity list renders on its own.

  return (
    <SessionShell $animate={animateIn}>
      <SessionBody>
          {milestones.map((m, i) => {
            // The whole run is shown at once. The focused step (the one Ultron is
            // currently working) and every step already completed before it read at
            // full opacity; steps past the focus are "upcoming" — dimmed skeleton
            // rows with a blank leading icon and a blank label until the work
            // reaches them, at which point they light up in turn.
            const upcoming = running && typeof focusIndex === 'number' && i > focusIndex;
            const isFocus = running && typeof focusIndex === 'number' && i === focusIndex;
            // The connector below this step links it to the next activity, and its look
            // tracks whether that NEXT activity is done yet: once the lower activity
            // completes, the segment fills solid green; the segment feeding into the
            // currently-working step draws green on a loop; segments at/below the working
            // step are not-yet-reached (a faint dashed track). A settled session fills
            // every segment solid green.
            const connectorState: 'done' | 'working' | 'upcoming' =
              !running || typeof focusIndex !== 'number'
                ? 'done'
                : i < focusIndex - 1 ? 'done'       // the activity below this line is already complete
                : i === focusIndex - 1 ? 'working'  // this line draws into the currently-working step
                : 'upcoming';                        // at/below the working step — not yet reached
            // Rows with a persistent sub-context line (a running/settled progress line)
            // earn the larger inter-row gap so the heading + its sub-line read as one
            // unit; a headline-only step has no sub-line, so it packs tighter. When the
            // group draws no connector (the reasoning group above), the rows pack in
            // closer still since there's no line to bridge.
            const hasSecondary = !!m.progress?.length;
            const isLast = i === milestones.length - 1;
            return (
              <RowAnchor key={i} $tight={!hasSecondary} $last={isLast} $connected={showConnectors}>
                {showConnectors && !isLast && <SessionConnector aria-hidden="true" $state={connectorState} $tight={!hasSecondary} $superseded={defaultCollapsed} />}
                <MilestoneContent
                  milestone={m}
                  last
                  /* Each step is its own accordion — collapsed to its headline, with
                     a chevron that reveals the step's supplemental line. */
                  collapsible
                  /* Not-yet-reached step: render as a dull, blank-icon/blank-label
                     placeholder rather than its real content. */
                  placeholder={upcoming}
                  /* The currently-working step reads bolder than the settled ones. */
                  focused={isFocus}
                  /* In a T-stepped run, the focused step's progress line is driven
                     by the operator's beat index rather than its internal timer. */
                  progressBeat={isFocus ? focusBeat : undefined}
                  /* A superseded group (a newer activity group has triggered below
                     it) quiets its settled sub-task lines to the disabled tone, so
                     the success green stays with the latest group. */
                  superseded={defaultCollapsed}
                  typing={i === typingIndex}
                  /* Each executed step carries its own "tools used" trigger — the
                     actual tools that step drove (Policy Engine, Engage), with detail
                     normalized to this case — revealed when the operator opens the step.
                     Steps that drove no tool (reasoning, record-only edits) carry none.
                     Upcoming placeholder rows carry none yet. */
                  extra={!upcoming && m.usage?.length ? <UsageSummary usage={m.usage} title={m.headline} /> : undefined}
                  icon={
                    <MilestoneIcon
                      icon={m.icon}
                      /* The focused step spins; completed steps check; upcoming steps
                         show a blank placeholder dot. While running with a focus index,
                         the spinner rides the focused step (not the last) so the work
                         visibly advances down the list. */
                      loading={typingIndex === i || isFocus || (running && typeof focusIndex !== 'number' && i === milestones.length - 1)}
                      placeholder={upcoming}
                      /* A superseded group demotes its settled checks to the muted
                         content-tertiary mark, so the success accent stays with the
                         latest group. */
                      muted={defaultCollapsed}
                    />
                  }
                />
              </RowAnchor>
            );
          })}
          {/* Feedback row for the whole group — thumbs up/down, rerun, and a
              timestamp (revealed on hover of the group). */}
          {!hideActions && !running && <SessionActions time={synthClock(milestones)} />}
      </SessionBody>
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

export function RunningLabel() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    if (phase >= RUN_PHASES.length - 1) return; // hold on the final beat
    const t = setTimeout(() => setPhase(p => p + 1), 3200);
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
 *  self-contained state (demo feedback only). Only rendered once the group has
 *  settled — a running group hides it entirely (there's nothing to rate or rerun
 *  until the work is done). */
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
 *  opens the rebuilt run-details panel on the right (see RunDetailsPanel). The
 *  panel renders directly off this step's own `usage` (normalized per-event by
 *  usageForThread), so each step's drawer reflects the actual tools it drove.
 *  `title` is the
 *  step's headline, shown as the panel title. */
function UsageSummary({ usage, title }: { usage: ActivityUsage; title?: string }) {
  const [open, setOpen] = useState(false);

  // Close the panel on Escape while it's open.
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
      <RunDetailsPanel
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        usage={usage}
      />
    </UsageWrap>
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

function MilestoneIcon({ slotRef, hidden, loading, placeholder, muted }: {
  icon: ActivityMilestone['icon'];
  slotRef?: (el: HTMLElement | null) => void;
  hidden?: boolean;
  loading?: boolean;
  /** A not-yet-reached step: show an empty placeholder dot instead of the
   *  loader/check, so the row reads as queued until the work reaches it. */
  placeholder?: boolean;
  /** The step belongs to a superseded group (a newer activity group has triggered
   *  below it): the settled mark demotes from the green disc+check to a bare
   *  checkmark in the muted content-tertiary tone. */
  muted?: boolean;
}) {
  // A step in progress shows a spinning ring; once it completes the ring closes
  // into a full circle and the checkmark draws on — one continuous SVG so the
  // loader morphs into the check instead of hard-swapping. `slotRef` lets the
  // resting agent mark measure this icon's position; `hidden` keeps the icon's
  // layout while that mark covers it, so geometry stays measurable.
  if (placeholder) {
    return (
      <IconBadge ref={slotRef} aria-hidden="true" $hidden={hidden} $placeholder>
        <PlaceholderDot />
      </IconBadge>
    );
  }
  return (
    <IconBadge ref={slotRef} aria-hidden="true" $hidden={hidden} $loading={loading}>
      <StatusMark viewBox="0 0 24 24" $loading={loading} $muted={muted && !loading}>
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
function MilestoneContent({ milestone, last, typing, icon, collapsible = true, extra, placeholder, focused, progressBeat, superseded }: { milestone: ActivityMilestone; last?: boolean; typing?: boolean; icon?: ReactNode; collapsible?: boolean; extra?: ReactNode; placeholder?: boolean; focused?: boolean; progressBeat?: number; superseded?: boolean }) {
  // A not-yet-reached step renders dull, with a blank leading icon — but it shows
  // its real label text so the operator can read what's queued; the icon fills in
  // (loader → check) once the work reaches it.
  if (placeholder) {
    return (
      <Content $last={last} $dim>
        <Header as="div">
          {icon}
          <Headline>{milestone.headline}</Headline>
        </Header>
      </Content>
    );
  }
  const hasBlocks = !!milestone.blocks?.length;
  // Extra content hung under this step (the group's "tools used" trigger).
  const hasExtra = !!extra;
  // Collapsible steps start collapsed (an accordion the operator opens to reveal
  // the supplemental line); always-on steps stay expanded. A step flagged
  // `defaultOpen` (the folded analysis line, whose bullets are its content)
  // starts open but stays collapsible.
  const [open, setOpen] = useState(!collapsible || !!milestone.defaultOpen);

  // Whether this step CAN toggle (has hidden content to reveal). This drives the
  // element TYPE (button vs div) and stays stable across the step's lifecycle — it
  // must NOT flip as the step settles, or the Header (and the icon nested in it)
  // would re-mount, snapping the leading loader→check morph to its end state instead
  // of animating. That re-mount was why only the last step (whose typing dropped
  // before it settled) appeared to animate.
  const canToggle = collapsible && (hasBlocks || hasExtra);
  // A collapsible step toggles its own supplemental sub-context via a trailing
  // chevron (the prompt-card step accordion). While typing it's inert — the chevron
  // and click only activate once the step has settled (but the element stays a button
  // throughout, per canToggle, so nothing re-mounts).
  const interactive = canToggle && !typing;
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
        as={canToggle ? 'button' : 'div'}
        type={canToggle ? 'button' : undefined}
        $interactive={interactive}
        aria-expanded={interactive ? open : undefined}
        onClick={interactive ? () => setOpen(o => !o) : undefined}
      >
        {/* Card layout rides the icon inline here, so it centers against the
            title (top row: icon + title); the connected trail leaves it out
            (the icon lives in the left rail instead). */}
        {icon}
        {/* The title stays static — only the sub-context (progress line / typewriter)
            animates while the step runs. */}
        <Headline $focused={!!focused}>{milestone.headline}</Headline>
        {interactive && (
          <Chevron data-open={open || undefined} aria-hidden="true"><ChevronRightIcon size={14} /></Chevron>
        )}
      </Header>

      {/* Running progress sub-row — a live status line that keeps cycling through the
          step's progress beats (each pops in as it replaces the last) for the WHOLE
          time the step is the running/focused one, then settles to the final result in
          the success tone. Driven by `focused` (not just the brief typing window) so
          the context keeps updating while the activity runs. */}
      {milestone.progress?.length ? (
        <ProgressWrap $indent={!!icon}>
          <MilestoneProgress
            steps={milestone.progress}
            avatars={milestone.avatars}
            avatarsOnSettle={milestone.avatarsOnSettle}
            reached={milestone.reached}
            live={!!(typing || focused)}
            beat={progressBeat}
            superseded={superseded}
            /* The trailing matched-user avatars show while the step is running (as the
               people are reached) and whenever it's expanded. Once it settles and
               collapses they tuck away, leaving just the status line — reopening the
               step brings them back. */
            showAvatars={open || typing || focused}
          />
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
const PROGRESS_BEAT_MS = 1350;

/** A step's running-progress line. While `live`, it advances through the beats —
 *  each new beat re-mounts (via key) so it pops in, replacing the previous one —
 *  and holds on the last (the settled result). Once not live, it shows the final
 *  result straight away. The terminal beat reads in the success tone (done),
 *  earlier beats in a muted "still working" tone. The matched-user avatars (when
 *  present) ride the trailing end of the row once the step settles.
 *
 *  `beat` switches the line to CONTROLLED mode (a T-stepped demo run): the shown
 *  beat tracks that operator-driven index and the internal timer stands down —
 *  the line only advances when the operator presses T. */
function MilestoneProgress({ steps, avatars, avatarsOnSettle, reached, live, showAvatars, beat, superseded }: { steps: string[]; avatars?: string[]; avatarsOnSettle?: boolean; reached?: number; live?: boolean; showAvatars?: boolean; beat?: number; superseded?: boolean }) {
  const last = steps.length - 1;
  const controlled = typeof beat === 'number';
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
    if (controlled || !started.current || i >= last) return;
    const t = setTimeout(() => setI(n => Math.min(n + 1, last)), PROGRESS_BEAT_MS);
    return () => clearTimeout(t);
  }, [i, last, controlled]);

  // Controlled mode keeps the internal index in step with the operator's beat, so
  // when control releases (focus moves to the next activity / the run settles) the
  // line holds where the operator left it — the final beat — instead of snapping
  // back to an earlier one.
  useEffect(() => {
    if (typeof beat === 'number') setI(Math.min(beat, last));
  }, [beat, last]);

  const idx = typeof beat === 'number' ? Math.min(beat, last) : i;
  const done = idx >= last;
  // The green "settled" tone waits until the step is no longer live (focused) — the
  // same moment the leading loader morphs into its checkmark — rather than the instant
  // the beats reach the last line. While the step is still running (`live`), even its
  // final beat stays muted, so the text greens in lockstep with the check rather than
  // flipping green seconds ahead of it.
  const settled = done && !live;
  return (
    <ProgressRow>
      <ProgressLine key={idx} $done={settled} $live={live} $superseded={superseded} aria-live="polite">
        {/* While live, each beat types itself out (no caret) as it lands, rather than
            popping in whole — so the running status reads as being written in real
            time. A settled/historical line shows its final text straight away. */}
        {live ? <Typewriter text={steps[idx]} caret={false} speed={26} /> : steps[idx]}
      </ProgressLine>
      {/* Show the matched-user cluster whenever the step is running (`live`) — not
          just once its beats reach the settled result — so multi-beat steps (whose
          `done` lands after focus has moved on) still surface their avatar group
          during the run. Settled steps show it on the final beat / when expanded.
          `avatarsOnSettle` opts out of the live reveal: the cluster waits for the
          final beat (`done`), for faces that only become true at the end (e.g. a
          confirmation that lands on the last progress line). */}
      {showAvatars && (avatarsOnSettle ? done : (done || live)) && avatars?.length ? <AvatarStack seeds={avatars} total={reached} /> : null}
    </ProgressRow>
  );
}

/** How long between each avatar popping in, so the cluster fills left to right. */
const AVATAR_STAGGER_MS = 90;

/** A compact overlapping cluster of the people a step reached. Shows up to five
 *  faces (leading face stacked on top); the remainder collapse into a trailing
 *  "+N" count chip. The overflow is measured against `total` (the true number of
 *  people reached) when it's larger than the faces provided — so a step that
 *  messaged 20 RNs but only carries 5 face seeds still reads as "5 faces + 15",
 *  summing to the full count. Without a `total`, the remainder is just the seeds
 *  beyond the five shown. The faces reveal one-by-one, left to right, each popping
 *  in a beat after the last so the group fills in as a flow. */
function AvatarStack({ seeds, total, max = 5 }: { seeds: string[]; total?: number; max?: number }) {
  const shown = seeds.slice(0, max);
  // Count everyone reached against `total` when it outstrips the seeds we have
  // faces for; otherwise fall back to the seed count itself.
  const reached = Math.max(total ?? 0, seeds.length);
  const extra = reached - shown.length;
  return (
    <StackRow aria-label={`${reached} people reached`}>
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

/* Trailing ellipsis for the running status (used by RunningLabel, which still drives
   the presence mark above the composer). Static dots — the label that hosts it pulses
   as a whole, so the dots don't need their own sequential animation. */
const Ellipsis = styled.span``;

/* The activity stack — rendered directly (the group has no header). Row spacing is
   set per-row (see RowAnchor) rather than by a uniform container gap: a row with a
   sub-context line gets a generous gap (space-5) so its heading + sub-line read as
   one unit, while a headline-only step packs tighter (space-3) against the next. */
const SessionBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Symmetric breathing room above and below the activity stack. */
  padding-top: var(--space-3);
  padding-bottom: var(--space-3);
`;

/* Wraps each step (positioning context for its connector). Carries the inter-row
   gap as a bottom margin. A connected group (the work group, which draws the vertical
   line) spaces generously so the line bridges cleanly: space-3 headline-only, space-5
   with a sub-context line. A group with no connector (the reasoning group above) packs
   flush — headline-only rows sit at their natural 32px pitch (0) — with space-3 only
   after a row that shows a sub-context line. The last row drops it. */
const RowAnchor = styled.div<{ $tight?: boolean; $last?: boolean; $connected?: boolean }>`
  min-width: 0;
  position: relative;
  margin-bottom: ${p =>
    p.$last
      ? '0'
      : p.$connected
        ? (p.$tight ? 'var(--space-3)' : 'var(--space-5)')
        : (p.$tight ? '0' : 'var(--space-3)')};
`;

/* A bright segment sweeps top → bottom on a loop, reading as the connection being
   drawn from the previous activity down to the next while Ultron works the step. */
const connectorDraw = keyframes`
  0%   { background-position: 0 -100%; }
  100% { background-position: 0 200%; }
`;

/* Vertical line linking one work step's leading icon to the next, running down the
   icon column and bridging the inter-row gap. Only the work group draws it (the
   reasoning group above hides it). Inset top/bottom by space-1 for breathing room.
   Its look tracks the work:
   · done     — a solid, full green (success) line, static (the draw motion lived
                in the 'working' state; on completion the line just solidifies).
   · working  — a green (success) segment drawing top→bottom on a loop over a faint
                track, so the link reads as being drawn into the working activity.
   · upcoming — a faint dashed track (not yet reached). */
const SessionConnector = styled.span<{ $state?: 'done' | 'working' | 'upcoming'; $tight?: boolean; $superseded?: boolean }>`
  position: absolute;
  /* Centered on the 32px icon column. */
  left: calc(var(--space-8) / 2);
  top: calc(var(--space-8) + var(--space-1));
  /* Extend down across the inter-row gap — matched to this connected row's gap (tight
     vs generous) — stopping a touch short of the next step's icon so it reads as
     connecting the two. */
  bottom: ${p => (p.$tight ? 'calc(var(--space-1) - var(--space-3))' : 'calc(var(--space-1) - var(--space-5))')};
  pointer-events: none;

  ${p => p.$state === 'working'
    ? css`
        width: 1.5px;
        /* Faint track behind, with a brand-coloured segment sweeping down it. */
        background-color: var(--color-border-opaque);
        background-image: linear-gradient(
          to bottom,
          transparent 0%,
          var(--color-success-content) 50%,
          transparent 100%
        );
        background-size: 100% 55%;
        background-repeat: no-repeat;
        animation: ${connectorDraw} 1.25s linear infinite;
      `
    : p.$state === 'upcoming'
    ? css`
        width: 0;
        border-left: 1.5px dashed var(--color-border-opaque);
      `
    : css`
        /* done — a full, solid green line. Static: the drawing motion belongs to
           the 'working' state (the looping sweep). Once the step completes, the
           line simply solidifies rather than re-drawing from zero.
           A superseded group (a newer activity group has triggered below it)
           demotes the line to the slate scale, so the success green stays with
           the latest group. */
        width: 1.5px;
        background-color: ${p.$superseded ? 'var(--color-slate-border-secondary)' : 'var(--color-success-content)'};
      `};

  @media (prefers-reduced-motion: reduce) { animation: none; }
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

  /* Tighten the gap before the trailing chevron — 4px right padding. */
  & > button {
    padding-right: var(--space-1);
  }
`;

/* Holds the group's "tools used" trigger beneath its last activity, indented past
   the inline icon column so it lines up under the step headlines. */
const ExtraSlot = styled.div<{ $indent?: boolean }>`
  padding-top: var(--space-2);
  padding-left: ${p => (p.$indent ? 'calc(var(--space-8) + var(--space-2))' : '0')};
`;


/* A thumbs button that lights up when it's the active rating; otherwise it
   matches the tertiary chrome of the rest of the cluster. */
const RateButton = styled(Button)`
  &[data-active] { color: var(--color-content-brand); }
`;

/* Types a string out character-by-character with a blinking caret. The full
   text is always laid out (the un-typed tail is rendered transparent) so the
   line never re-wraps as it fills in — the reveal stays smooth and jump-free. */
export function Typewriter({ text, onDone, speed = 30, caret = true }: { text: string; onDone?: () => void; speed?: number; caret?: boolean }) {
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
      {/* `caret={false}` types the text out with no blinking indicator — used by the
         running-progress line, which wants the type-on reveal without a cursor. */}
      {caret && <Caret $blink={done} aria-hidden="true" />}
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
const IconBadge = styled.span<{ $hidden?: boolean; $loading?: boolean; $placeholder?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
  visibility: ${p => (p.$hidden ? 'hidden' : 'visible')};
`;

/* The leading marker for an upcoming (not-yet-reached) step — a hollow, muted ring
   that stands in for the loader/check until the work reaches the step. Sized to the
   16px icon slot so the row's geometry matches a real step's. */
const skeletonPulse = keyframes`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
`;

const PlaceholderDot = styled.span`
  width: var(--space-4);
  height: var(--space-4);
  border-radius: var(--radius-full);
  box-sizing: border-box;
  /* An outlined muted circle marks the step's leading slot until the work reaches it. */
  border: 1.5px solid var(--color-border-opaque);
  animation: ${skeletonPulse} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
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

const StatusMark = styled.svg<{ $loading?: boolean; $muted?: boolean }>`
  width: var(--space-4);
  height: var(--space-4);
  overflow: visible;

  .ring {
    /* Loading: hollow (transparent) spinner arc. Done: the circle fills solid
       success green — a filled badge, not an outline. Transparent (not none) so
       the fill eases in rather than popping. Muted (a superseded group's settled
       step): the disc fades out entirely, leaving just the bare check. */
    fill: ${p => (p.$loading || p.$muted ? 'transparent' : 'var(--color-success-fill)')};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-dasharray: ${RING_C};
    transform-origin: center;
    /* loading: leave ~30% of the circle drawn as the spinner arc */
    stroke-dashoffset: ${p => (p.$loading ? RING_C * 0.7 : 0)};
    stroke: ${p => (p.$loading ? 'var(--color-content-tertiary)' : p.$muted ? 'transparent' : 'var(--color-success-fill)')};
    /* A slow, patient spin (2s/rev) — the work behind a step can take 10–20 min in
       real life, so a calm rotation reads as steady progress rather than an
       about-to-finish quick spinner. */
    animation: ${spin} 2s linear infinite;
    /* Arc closes + fills on one eased settle curve (easeOutCubic) over the same
       duration, so the ring glides shut and colours in rather than braking abruptly. */
    transition:
      stroke-dashoffset 0.55s cubic-bezier(0.33, 1, 0.68, 1),
      stroke 0.55s cubic-bezier(0.33, 1, 0.68, 1),
      fill 0.55s cubic-bezier(0.33, 1, 0.68, 1);
  }

  .check {
    fill: none;
    /* White check on the filled green disc; a muted (superseded) step keeps just
       the check glyph in the quiet content-tertiary tone. */
    stroke: ${p => (p.$muted ? 'var(--color-content-tertiary)' : 'var(--color-content-inverse-primary)')};
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
       off cleanly instead of overlapping. The stroke colour transitions with no
       delay: it carries the white→tertiary demotion when a group is superseded,
       easing alongside the ring's fade rather than waiting on the draw-on beat. */
    transition:
      stroke-dashoffset 0.4s cubic-bezier(0.33, 1, 0.68, 1) 0.42s,
      opacity 0.26s ease 0.42s,
      transform 0.42s cubic-bezier(0.34, 1.4, 0.64, 1) 0.42s,
      stroke 0.55s cubic-bezier(0.33, 1, 0.68, 1);
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

const Content = styled.div<{ $last?: boolean; $dim?: boolean }>`
  flex: 1;
  min-width: 0;
  padding-bottom: ${p => (p.$last ? '0' : 'var(--space-4)')};
  /* Upcoming (not-yet-reached) steps read dull until the work focuses on them. */
  opacity: ${p => (p.$dim ? 0.45 : 1)};
  transition: opacity var(--duration-base) var(--ease-out);
`;

const Header = styled.div<{ $interactive?: boolean }>`
  all: unset;
  display: flex;
  align-items: center;
  /* Tight 8px lead — the title hugs its loader/checkmark. The sub-content
     indents (ProgressWrap / Blocks / ExtraSlot) mirror this value. */
  gap: var(--space-2);
  width: 100%;
  box-sizing: border-box;
  cursor: ${p => (p.$interactive ? 'pointer' : 'default')};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`;

/* The step title — always static (no blink). The currently-working step reads
   bolder; its live pulse is carried by the sub-context line, not the title.
   Settled titles rest in the quieter tertiary tone and warm to full primary
   when the operator hovers the step row; the focused (running) step holds
   primary throughout. */
const Headline = styled.span<{ $focused?: boolean }>`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-size: var(--text-sm); /* 14px */
  font-weight: ${p => (p.$focused ? 'var(--font-weight-bold)' : 'var(--font-weight-medium)')};
  color: ${p => (p.$focused ? 'var(--color-content-primary)' : 'var(--color-content-tertiary)')};
  line-height: var(--line-height-snug);
  transition: color var(--duration-base) var(--ease-out);

  ${Header}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`;

/* Chevron points right when collapsed, rotates to point down when expanded. */
const Chevron = styled.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;

/* Running-progress sub-row — sits directly under the headline. Hangs under the
   title (clears the inline icon column like Blocks) when the icon rides inline;
   in the connected trail the row is already offset so no indent is needed. */
const ProgressWrap = styled.div<{ $indent?: boolean }>`
  padding-left: ${p => (p.$indent ? 'calc(var(--space-8) + var(--space-2))' : '0')};
`;

/* Holds the status line and the trailing matched-user avatar group on one row —
   the line takes the lead, the avatars sit flush to the right edge. */
const ProgressRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`;

/* While a step is running, its status line breathes — a gentle opacity pulse that
   signals live, in-flight work. It stops the instant the step settles (see $live
   below), leaving the final result solid. */
const progressBlink = keyframes`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.45; }
`;

/* The status line itself — Alloy paragraph / medium, in the muted content-tertiary
   tone for both the in-flight beats and the settled result. */
const ProgressLine = styled.div<{ $done?: boolean; $live?: boolean; $superseded?: boolean }>`
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-loose);
  letter-spacing: var(--tracking-normal);
  /* Settled (done) sub-text reads in the success green — matching the completed
     step's check — while in-flight beats stay muted. Once a newer activity group
     triggers below, the whole superseded group's sub-text quiets to the disabled
     tone, so the green stays with the latest work. */
  color: ${p => (p.$superseded ? 'var(--color-content-disabled)' : p.$done ? 'var(--color-success-content)' : 'var(--color-content-tertiary)')};
  /* The live reveal is carried by the type-on (see MilestoneProgress → Typewriter),
     so the line itself no longer fades/pops in — that avoided a stray flash when a
     settled line re-mounts (e.g. as the finished group folds into a response set).
     While the step is still running it blinks to read as actively-working; a settled
     line holds solid. */
  ${p => p.$live && css`animation: ${progressBlink} 1.4s ease-in-out infinite;`}

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
  /* Asymmetric padding: a wide left pad (12px, exceeding the 8px overlap) keeps the
     leading "+" clear of the face beside it, with a tighter right pad so the chip
     stays compact. */
  padding: 0 var(--space-2) 0 var(--space-3);
  margin-left: calc(-1 * var(--space-2));
  border-radius: var(--radius-full);
  box-shadow: 0 0 0 2px var(--color-bg-primary);
  background: var(--color-bg-tertiary);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
  animation: ${avatarPop} 300ms var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

/* The sub-context eases in once the headline finishes typing, rather than
   popping in — a soft fade + small upward settle. */
const blocksIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const Blocks = styled.div<{ $indent?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
  /* Breathing room below the revealed sub-context so it doesn't butt against the
     next step (the tighter headline-only gap leaves little room otherwise). */
  padding-bottom: var(--space-2);
  /* Card layout: hang the sub-context under the title by clearing the inline
     icon column (icon width --space-8 + header gap --space-2). */
  padding-left: ${p => (p.$indent ? 'calc(var(--space-8) + var(--space-2))' : '0')};
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
    /* Lighter than the standard tertiary detail tone — the bullets are deep
       sub-context, so they sit a step quieter than the step's other text. */
    color: var(--color-content-disabled);
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
