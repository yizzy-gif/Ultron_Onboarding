/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — single case card.
   Renders one thread: header (avatar + title + status), the optional past-
   activity trail (resolved), and the case body (prompt + records + action pills,
   or live execution activities, or the resolved outcome). One card per feed row.
   DEMO ONLY — state lives in the shared store hook.
   ───────────────────────────────────────────────────────────────────────────── */

import { useEffect, useState, Fragment, type ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  Avatar, Button, Save01Icon, MinusIcon, ChevronSelectorVerticalIcon, ChevronRightIcon, CheckIcon, LinkExternal01Icon, AlertTriangleIcon,
} from 'alloy-design-system';
import type { ChatMessage, ThreadItem } from './types';
import {
  THREAD_SUBJECTS, threadAvatarUrl, avatarUrl, THREAD_PROMPTS, threadDisplayTitle, threadMeta,
  THREAD_FOLLOWUPS, THREAD_RECORDS, activityForThread, analyzingSteps,
  WORKING_ACTIVITIES, THREAD_TASKS, casePlan, THREAD_FLAGS, actionAck,
} from './fixtures';
import type { ActivityMilestone, WorkingMilestone, PlanTask, AnalyzingStep, EventFlag } from './fixtures';
import { RecordCard } from './RecordCard';
import {
  isPurpleRow, isRefinementAction, toneFor, UNRESOLVED_ACTIONS,
  hasMultipleCtas, DO_IT_ALL_LABEL, AFFIRMATIVE_LABEL, deriveStepLabels,
} from './ultronShared';
import { ACTIVITY_STEP_MS } from './store';
import { ActivityTrail, ActivityTrailCards, SessionActions, synthClock } from './ActivityTrail';
import { AgentMark } from './AgentMark';

/** How soon the first work step appears after the operator's reply — a short
 *  beat so the response feels acknowledged immediately, before the remaining
 *  steps pace in at the slower ACTIVITY_STEP_MS cadence. */
const POST_REPLY_MS = 450;

interface UltronCardProps {
  thread: ThreadItem;
  stage: number;
  /** Whether this card is the one expanded in the feed (accordion). */
  expanded: boolean;
  /** Toggle this card open/closed — the feed collapses any other open card. */
  onToggle: () => void;
  /** When set, the header button becomes a Close control: it dismisses the case
   *  detail and returns to the Live landing (paged view only). */
  onClose?: () => void;
  /** When true, the recommendation prompt + action buttons are NOT rendered here
   *  — they live in a separate <UltronActionCard> snapped to the page bottom.
   *  The event card keeps its header + context records. */
  detachActionable?: boolean;
  /** When true, the "Ultron is analyzing…" block is NOT rendered here — it lives
   *  in a separate <UltronAnalyzingCard> placed directly below this card. */
  detachAnalyzing?: boolean;
  /** When true, the resolved activity trail is NOT rendered here — it lives in
   *  separate per-step cards (<UltronTrailCards>) placed below this card. */
  detachTrail?: boolean;
  /** DEMO ONLY — advance an analyzing case to Needs approval. */
  onDecide: (threadId: string) => void;
  onAction: (threadId: string, label: string) => void;
  onRefinement: (label: string) => void;
  onSaveWorkflow: (thread: ThreadItem) => void;
}

/** Derive the decision shape of a case: the prompt question, the context
 *  records it references, and the action labels (primary / secondary / purple),
 *  honouring the follow-up stage. Shared by the event card and the detached
 *  <UltronActionCard>. */
function deriveCase(thread: ThreadItem, stage: number) {
  const needsDecision = thread.status === 'needs_approval' || thread.status === 'recommended';
  // `monitoring` is a Working-group case that has surfaced a needs-attention
  // prompt (e.g. the escalated attendance case): it stays in Working but asks
  // the operator for a decision, so it's actionable too.
  const actionable = needsDecision || thread.status === 'unresolved' || thread.status === 'monitoring';
  const followUp = THREAD_FOLLOWUPS[thread.id];
  const onFollowUp = stage === 1 && !!followUp;
  const prompt = onFollowUp ? followUp!.prompt : (THREAD_PROMPTS[thread.id] ?? thread.recommendation);
  // The record(s) the question references (worker / shift / candidates …).
  const recordRef = onFollowUp ? followUp!.record : THREAD_RECORDS[thread.id];
  const records = recordRef ? (Array.isArray(recordRef) ? recordRef : [recordRef]) : [];
  // Unresolved cases share one generic set of resolution options.
  const actions = thread.status === 'unresolved'
    ? UNRESOLVED_ACTIONS
    : onFollowUp ? followUp!.actions : thread.actions;
  // A multi-step case collapses its actions to a single "Approve all" primary
  // plus the "Other" escape hatch. It's multi-step when the base prompt has an
  // authored task breakdown of 2+ steps, or — for cases without one — when the
  // prompt itself conjoins clauses ("X and Y"). Follow-ups stay single-action.
  const multiCta = needsDecision && (
    (!onFollowUp && (THREAD_TASKS[thread.id]?.length ?? 0) > 1) || hasMultipleCtas(prompt)
  );
  const primaryLabel = multiCta ? DO_IT_ALL_LABEL : actions[actions.length - 1];
  const secondaryLabels = multiCta ? [] : actions.slice(0, -1);
  const purple = isPurpleRow(thread);
  return { needsDecision, actionable, onFollowUp, followUp, prompt, records, primaryLabel, secondaryLabels, purple };
}

export function UltronCard({ thread, stage, expanded, detachActionable, detachAnalyzing, detachTrail, onToggle, onClose, onDecide, onAction, onRefinement, onSaveWorkflow }: UltronCardProps) {
  const [savedWorkflow, setSavedWorkflow] = useState(false);

  const { actionable, prompt, records, primaryLabel, purple } = deriveCase(thread, stage);
  // Intermediate state: the event has arrived and Ultron is still thinking — no
  // actionables or questions decided yet.
  const analyzing = thread.status === 'analyzing';
  // The analyzing block renders in-card unless it's been detached to a separate
  // card placed below (see <UltronAnalyzingCard>).
  const showAnalyzing = analyzing && !detachAnalyzing;
  const isResolved = thread.status === 'resolved' || thread.status === 'auto_resolved';

  // When the actionable block is detached (rendered at the page bottom), the
  // prompt, context records, and action buttons all move there — the event card
  // is left with just its header (plus any resolved/analyzing activity).
  const showActions = !detachActionable && (actionable || purple);

  // The resolved activity trail renders in-card (above the body) unless it's been
  // detached into separate per-step cards below.
  const showInCardTrail = isResolved && !detachTrail;

  // Whether the card has any body content. Monitoring / in-progress threads carry
  // no in-card body (their live activity renders below as <UltronWorkingCards>),
  // so we skip the body wrapper rather than render an empty white box. Resolved
  // cases no longer carry an outcome line in the body, so they only get a body
  // when they have actions to offer (e.g. Save as workflow).
  const hasBody = detachActionable
    ? showAnalyzing
    : (actionable || showAnalyzing || showActions);

  // A header-only case (monitoring / in-progress, whose activity streams below
  // as separate cards) has no in-card body to expand into, so it always reads as
  // a collapsed event row — flat tonal chrome + meta subtitle, no gradient border
  // ring — matching the rest of the feed instead of a glowing bordered pill. The
  // in-card trail counts as expandable content too.
  const effectiveExpanded = expanded && (hasBody || showInCardTrail);

  // Card tone (shared with the sidebar dots): green / orange / slate.
  const tone = toneFor(thread);

  // Glanceable sub-context under the title (Role · Shift time · Location). The
  // structured meta shows in every state — it's useful context whether the case
  // is collapsed, working, or resolved. Only the prose-assessment fallback (for
  // cases with no structured meta) is limited to the collapsed state, where it
  // stands in for the body.
  const metaLine = threadMeta(thread.id);
  const subtitle = metaLine || (!effectiveExpanded ? thread.assessment : '');

  const trigger = (label: string) => {
    if (isRefinementAction(label)) onRefinement(label);
    else onAction(thread.id, label);
  };

  // The deconstructed (transparent, flat) treatment follows the focused/detail
  // card — `expanded` — not whether it has in-card body content, so removing the
  // analysis-result banner doesn't snap it back to the collapsed tonal fill.
  return (
    <Card data-tone={tone} $expanded={expanded}>
      <CardHeader>
        <HeaderToggle
          type="button"
          aria-expanded={effectiveExpanded}
          aria-label={effectiveExpanded ? 'Collapse case' : 'Expand case'}
          onClick={onToggle}
        >
          <Avatar
            size="md"
            src={threadAvatarUrl(thread.id)}
            name={THREAD_SUBJECTS[thread.id]}
            alt={THREAD_SUBJECTS[thread.id] ?? ''}
          />
          <HeaderText>
            <CardTitle>{threadDisplayTitle(thread)}</CardTitle>
            {/* Glanceable case IA — Role · Shift time · Location — so the row
                scans at a glance across every status (working, resolved, …).
                Falls back to Ultron's prose read only when a case carries no
                structured metadata and the card is collapsed. */}
            {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
          </HeaderText>
        </HeaderToggle>
        <Button
          variant="ghost"
          size="xs"
          iconOnly
          aria-label={onClose ? 'Close case and return to Live' : effectiveExpanded ? 'Collapse case' : 'Expand case'}
          tabIndex={onClose ? undefined : -1}
          onClick={onClose ?? onToggle}
        >
          {onClose ? <LinkExternal01Icon size={16} /> : effectiveExpanded ? <ChevronSelectorVerticalIcon size={16} /> : <MinusIcon size={16} />}
        </Button>
      </CardHeader>

      {effectiveExpanded && showInCardTrail && (
        <TrailRegion>
          <TrailInner>
            <ActivityTrail milestones={activityForThread(thread)} />
          </TrailInner>
        </TrailRegion>
      )}

      {effectiveExpanded && hasBody && (
      <CardBody>
        {actionable && !detachActionable && <Prompt>{prompt}</Prompt>}

        {actionable && !detachActionable && records.length > 0 && (
          <RecordList>
            {records.map((r, i) => <RecordCard key={i} record={r} />)}
          </RecordList>
        )}


        {showAnalyzing && (
          <Analyzing role="status" aria-live="polite">
            <AnalyzingBody thread={thread} onDecide={onDecide} />
          </Analyzing>
        )}

        {showActions && (
          <Actions>
            {actionable && primaryLabel && (
              <Pill variant="primary" size="sm" onClick={() => trigger(AFFIRMATIVE_LABEL)}>
                {AFFIRMATIVE_LABEL}
              </Pill>
            )}
            {actionable && (
              <Pill variant="tertiary" size="sm" onClick={() => onRefinement('No')}>
                No
              </Pill>
            )}
            {actionable && (
              <OtherPill variant="tertiary" size="sm" onClick={() => onRefinement('Other')}>
                Other
              </OtherPill>
            )}
            {purple && (
              savedWorkflow ? (
                <Button
                  variant="secondary" size="sm"
                  leadingArtwork={<CheckIcon size={14} />}
                  trailingArtwork={<LinkExternal01Icon size={14} />}
                  onClick={() => onSaveWorkflow(thread)}
                >
                  Saved
                </Button>
              ) : (
                <Button
                  variant="secondary" size="sm"
                  leadingArtwork={<Save01Icon size={14} />}
                  onClick={() => { onSaveWorkflow(thread); setSavedWorkflow(true); }}
                >
                  Save as workflow
                </Button>
              )
            )}
          </Actions>
        )}
      </CardBody>
      )}
    </Card>
  );
}

// ── Actionable card ─────────────────────────────────────────────────────────────
// The detached decision surface: the recommendation prompt + action buttons,
// rendered as its own card (snapped to the page bottom by the feed). Mirrors the
// in-card Actions block; shares deriveCase with the event card.
interface UltronActionCardProps {
  thread: ThreadItem;
  stage: number;
  onAction: (threadId: string, label: string) => void;
  onRefinement: (label: string) => void;
  onSaveWorkflow: (thread: ThreadItem) => void;
}

export function UltronActionCard({ thread, stage, onAction, onRefinement, onSaveWorkflow }: UltronActionCardProps) {
  const [savedWorkflow, setSavedWorkflow] = useState(false);
  const { actionable, onFollowUp, prompt, records, primaryLabel, purple } = deriveCase(thread, stage);

  // Cases with a task breakdown render their plan as discrete step cards (the
  // bundled "do A and B" prompt as its steps) instead of a flat candidate-card
  // list. Authored tasks win; otherwise a bundled prompt is split into steps on
  // the fly (so detected/spawned cases get step cards too). Only on the base
  // prompt — a follow-up keeps the plain record list.
  const tasks = actionable && !onFollowUp
    ? (THREAD_TASKS[thread.id] ?? deriveStepLabels(prompt).map(label => ({ label })))
    : undefined;

  // Every resolved case can be saved as a workflow — purple rows surface it
  // explicitly, but any resolved/auto-resolved outcome offers it too.
  const isResolved = thread.status === 'resolved' || thread.status === 'auto_resolved';
  const offerWorkflow = purple || isResolved;

  const trigger = (label: string) => {
    if (isRefinementAction(label)) onRefinement(label);
    else onAction(thread.id, label);
  };

  // The person the decision is about (a follow-up's single candidate). Their
  // avatar rides the card's top-right corner instead of a full record card.
  const person = actionable && !(tasks && tasks.length > 0) && records.length > 0 ? records[0] : undefined;

  return (
    <ActionCard data-tone={toneFor(thread)}>
      {actionable && (
        <ActionHeader>
          <Prompt>{prompt}</Prompt>
          {person && (
            <CardAvatar>
              <Avatar size="md" src={avatarUrl(person.avatarSeed)} name={person.title} alt={person.title} />
            </CardAvatar>
          )}
        </ActionHeader>
      )}
      {/* Workflow-ready / resolved rows aren't a decision — they just offer to
          save the resolved play. Ask for it explicitly above the Save button. */}
      {offerWorkflow && !actionable && <Prompt>Want me to save this as a reusable workflow?</Prompt>}
      {tasks && tasks.length > 0 ? (
        <PlanTaskList tasks={tasks} />
      ) : null}
      <Actions>
        {actionable && primaryLabel && (
          <Pill variant="primary" size="sm" onClick={() => trigger(AFFIRMATIVE_LABEL)}>
            {AFFIRMATIVE_LABEL}
          </Pill>
        )}
        {actionable && (
          <Pill variant="tertiary" size="sm" onClick={() => onRefinement('No')}>
            No
          </Pill>
        )}
        {actionable && (
          <OtherPill variant="tertiary" size="sm" onClick={() => onRefinement('Other')}>
            Other
          </OtherPill>
        )}
        {/* Trailing low-emphasis "save this play" affordance — a ghost button
            pushed to the right end of the decision row (pill-radius to match the
            Yes/No choices) so it floats apart without competing with them. */}
        {actionable && (
          <SaveWorkflowPill
            $trailing
            variant="ghost" size="sm"
            aria-pressed={savedWorkflow}
            data-on={savedWorkflow || undefined}
            leadingArtwork={savedWorkflow ? <CheckIcon size={14} /> : <Save01Icon size={14} />}
            onClick={() => setSavedWorkflow(on => { if (!on) onSaveWorkflow(thread); return !on; })}
          >
            Save as future workflow
          </SaveWorkflowPill>
        )}
        {offerWorkflow && !actionable && (
          <SaveWorkflowPill
            variant="ghost" size="sm"
            aria-pressed={savedWorkflow}
            data-on={savedWorkflow || undefined}
            leadingArtwork={savedWorkflow ? <CheckIcon size={14} /> : <Save01Icon size={14} />}
            onClick={() => setSavedWorkflow(on => { if (!on) onSaveWorkflow(thread); return !on; })}
          >
            {savedWorkflow ? 'Saved' : 'Save as workflow'}
          </SaveWorkflowPill>
        )}
      </Actions>
    </ActionCard>
  );
}

// ── Plan tasks ──────────────────────────────────────────────────────────────
// The decision's plan as a checklist of discrete tasks Ultron will run if
// approved.
function PlanTaskList({ tasks }: { tasks: PlanTask[] }) {
  return (
    <TaskList>
      {tasks.map((task, i) => (
        <PlanTaskRow key={i} task={task} first={i === 0} last={i === tasks.length - 1} />
      ))}
    </TaskList>
  );
}

/** A single plan step. Collapsed to just its label by default; the chevron toggles
 *  open to reveal the secondary description (clamped to two lines). The leading
 *  rail threads a dot per step into one continuous vertical line. */
function PlanTaskRow({ task, first, last }: { task: PlanTask; first: boolean; last: boolean }) {
  const [open, setOpen] = useState(false);
  const hasDetail = !!task.detail;
  return (
    <TaskRow>
      {/* Leading timeline rail: a dot per step threaded by one continuous
         vertical line (clipped at the first and last dots). */}
      <TaskRail data-first={first || undefined} data-last={last || undefined} aria-hidden="true">
        <TaskDot />
      </TaskRail>
      <TaskBody>
        <TaskHeader
          as={hasDetail ? 'button' : 'div'}
          type={hasDetail ? 'button' : undefined}
          $interactive={hasDetail}
          aria-expanded={hasDetail ? open : undefined}
          onClick={hasDetail ? () => setOpen(o => !o) : undefined}
        >
          <TaskLabel>{task.label}</TaskLabel>
          {hasDetail && (
            <TaskChevron data-open={open || undefined} aria-hidden="true"><ChevronRightIcon size={14} /></TaskChevron>
          )}
        </TaskHeader>
        {open && hasDetail && <TaskDetail>{task.detail}</TaskDetail>}
      </TaskBody>
    </TaskRow>
  );
}

// ── Analyzing ─────────────────────────────────────────────────────────────────
// The "Ultron is thinking" content (orbit mark + headline + assessment + demo
// trigger). Shared by the in-card analyzing block and the detached card below.
// Accumulating "thinking" stream: reveals one step at a time on a timer. Earlier
// steps settle to a check; the newest pulses. Each new row animates in, so the
// analyzing card grows in height as Ultron's work unfolds. The final step stays
// in-progress (Ultron is still analyzing) until the case flips to Needs approval.
function AnalyzingStream({ steps, completed }: { steps: AnalyzingStep[]; completed?: boolean }) {
  const [count, setCount] = useState(completed ? steps.length : 1);

  useEffect(() => {
    if (completed) { setCount(steps.length); return; }
    if (count >= steps.length) return;
    const t = setTimeout(() => setCount(c => c + 1), 1600);
    return () => clearTimeout(t);
  }, [count, steps.length, completed]);

  const shown = steps.slice(0, count);
  return (
    <Stream role="status" aria-live="polite">
      {shown.map((step, i) => {
        // Once analysis is complete every step reads as done (checked).
        const inProgress = !completed && i === count - 1;
        // The dashed rail connects each step down to the next revealed one; the
        // last visible row has nothing below it yet, so it drops the connector.
        const last = i === shown.length - 1;
        return (
          <StreamRow key={i}>
            <StreamIconCol>
              <StreamMark $done={!inProgress} aria-hidden="true">
                {inProgress
                  ? <WorkingMarkAbs><AgentMark mark="lines" size={36} tone="auto" state="active" motionSpeed={2} coreHalo={false} aria-label="In progress" /></WorkingMarkAbs>
                  : <CheckIcon size={16} />}
              </StreamMark>
              {!last && <StreamConnector />}
            </StreamIconCol>
            <StreamContent $last={last}>
              <StreamHeadline>{step.headline}</StreamHeadline>
              <StreamDetail>{step.detail}</StreamDetail>
            </StreamContent>
          </StreamRow>
        );
      })}
    </Stream>
  );
}

function AnalyzingBody({ thread, onDecide, analyzed, hideDetail, hideTrigger }: { thread: ThreadItem; onDecide: (threadId: string) => void; analyzed?: boolean; hideDetail?: boolean; hideTrigger?: boolean }) {
  // The thinking steps form a collapsible group, mirroring the activity-trail
  // session: the header row toggles the stream open/shut. It stays open while
  // analysis streams; once analyzed, the operator can collapse the recap.
  const [open, setOpen] = useState(true);
  return (
    <>
      {/* The mark + headline double as the group's toggle (like the session
          header), with a trailing chevron. When the event card already carries
          the assessment in its white block (the detached/paged layout), the
          detail is hidden here to avoid repeating it. */}
      <AnalyzingRow as="button" type="button" $interactive aria-expanded={open} onClick={() => setOpen(o => !o)}>
        <AgentMark mark="orbit" size={40} tone="auto" state={analyzed ? 'idle' : 'active'} coreHalo={false} aria-hidden="true" />
        <AnalyzingText>
          <AnalyzingHeadline>
            {analyzed ? (
              'Ultron analyzed this event'
            ) : (
              'Ultron is analyzing this event'
            )}
          </AnalyzingHeadline>
          {!hideDetail && <AnalyzingDetail>{thread.assessment}</AnalyzingDetail>}
        </AnalyzingText>
        <AnalyzingChevron data-open={open || undefined} aria-hidden="true"><ChevronRightIcon size={14} /></AnalyzingChevron>
      </AnalyzingRow>
      {/* Thinking stream — reveals step-by-step while analyzing; all steps read
          as complete once analyzed. Collapses with the group header above. */}
      {open && <AnalyzingStream steps={analyzingSteps(thread.id)} completed={analyzed} />}
      {/* DEMO ONLY — skip the wait and reveal the recommendation prompt. Gone
          once analysis has completed. In the paged layout the trigger is lifted
          into a bottom-fixed dock (see UltronAnalyzingTrigger), so it's hidden here. */}
      {!analyzed && !hideTrigger && (
        <DemoTrigger variant="secondary" size="sm" onClick={() => onDecide(thread.id)}>
          Trigger Needs approval (demo)
        </DemoTrigger>
      )}
    </>
  );
}

/* DEMO ONLY — the analyzing "Trigger Needs approval" control, lifted out of the
   analyzing card so the paged layout can dock it at the page bottom (mirrors the
   decision surface's dock). */
export function UltronAnalyzingTrigger({ thread, onDecide }: { thread: ThreadItem; onDecide: (threadId: string) => void }) {
  return (
    <DemoTrigger variant="secondary" size="sm" onClick={() => onDecide(thread.id)}>
      Trigger Needs approval (demo)
    </DemoTrigger>
  );
}

// The detached analyzing surface — the same thinking block, lifted out of the
// event card into its own card placed directly below it (the feed's gap sets
// the spacing). Same radius as the event card, a small drop shadow, no border.
// `analyzed` switches it to the completed summary that persists after the case
// has moved on to Needs approval.
export function UltronAnalyzingCard({ thread, onDecide, analyzed, hideTrigger }: { thread: ThreadItem; onDecide: (threadId: string) => void; analyzed?: boolean; hideTrigger?: boolean }) {
  return (
    <AnalyzingCard role="status" aria-live="polite">
      <AnalyzingBody thread={thread} onDecide={onDecide} analyzed={analyzed} hideDetail hideTrigger={hideTrigger} />
    </AnalyzingCard>
  );
}

// Unified, ACCUMULATING activity trail — one component covering the awaiting-
// decision, executing, and resolved phases. It's rendered in a single stable
// slot (keyed by the case id) so it never unmounts as the case moves between
// those phases: the revealed cards persist and the trail only ever GROWS.
//
//   · awaiting  — shows the reasoning Ultron has already completed (the settled
//                 timeline steps); the pending question lives in the docked
//                 decision surface, so it isn't repeated here.
//   · executing — once an action is taken, the remaining steps stream in BELOW
//                 the existing ones (newest types out) — nothing is cleared or
//                 restarted, so the trail accumulates continuously.
//   · resolved  — the full trail, settled.
//
// All three draw from one source (activityForThread), so moving between phases
// just reveals more of the same list — taking an action appends, never refreshes.
/** A trail entry — either one of Ultron's activity cards or the operator's
 *  sent message bubble. The trail is a single chronological stream of these. */
type TrailItem =
  | { kind: 'activity'; milestone: ActivityMilestone }
  | { kind: 'question'; text: string }
  | { kind: 'message'; text: string }
  | { kind: 'reply'; text: string };

/** Working milestones carry a flat `detail` string; activity cards take blocks. */
function workingToMilestone(w: WorkingMilestone): ActivityMilestone {
  return { icon: w.icon, headline: w.headline, blocks: w.detail ? [{ text: w.detail }] : undefined, progress: w.progress, avatars: w.avatars };
}

/** Analyzing "thinking" steps carry a headline + detail; fold them into the
 *  accumulated trail as activity milestones so the analysis reads as part of the
 *  one event-activity stream (rather than a separate card above it). The detail
 *  rides along as the step's collapsible supplemental line (revealed per-step). */
function analyzingToMilestone(s: AnalyzingStep): ActivityMilestone {
  return { icon: s.icon, headline: s.headline, blocks: s.detail ? [{ text: s.detail }] : undefined };
}

/** Build the chronological trail for a case. With no operator action yet (or a
 *  case resolved without one, e.g. autonomous/historical), it's just the full
 *  activity trail. Once the operator acts, the trail interleaves: the reasoning
 *  Ultron did BEFORE each decision, then the sent message, then the work Ultron
 *  ran as a RESULT of it — repeating per stage (first action, then follow-up). */
function buildTrail(thread: ThreadItem, outbound: string[]): { items: TrailItem[]; reasoningCount: number } {
  const eventMilestones = activityForThread(thread);
  const doneCount = thread.timeline.filter(s => s.done).length;
  const eventCount = doneCount > 0 ? Math.min(doneCount, eventMilestones.length) : eventMilestones.length;
  // The trail reads as a thinking sequence first — the analysis steps Ultron
  // worked through (Reviewed… → Determine course of action → Plan created and
  // shared) — followed by any executed work the case carries (the authored event
  // milestones, e.g. messaged matches / assigned / outcome). Thinking before
  // doing, so a resolved case reads think → plan → execute.
  const milestones = [
    ...analyzingSteps(thread.id).map(analyzingToMilestone),
    ...eventMilestones.slice(0, eventCount),
  ];
  const reasoningCount = milestones.length;

  // No action taken this session → keep the full trail as-is (no messages).
  if (outbound.length === 0) {
    const items: TrailItem[] = milestones.map(m => ({ kind: 'activity', milestone: m }));
    // A case already executing autonomously (working state, no operator action
    // this session) continues the trail with the work Ultron is running — no
    // sent-message bubble, since the operator didn't kick it off here. A case
    // that has since escalated to `monitoring` keeps that completed work shown.
    if (thread.status === 'in_progress' || thread.status === 'monitoring') {
      (WORKING_ACTIVITIES[thread.id] ?? []).map(workingToMilestone)
        .forEach(m => items.push({ kind: 'activity', milestone: m }));
    }
    return { items, reasoningCount };
  }

  // The execution sequence Ultron runs after each decision: stage 0 is the
  // case's own working sequence, stage 1 the follow-up's.
  const followUp = THREAD_FOLLOWUPS[thread.id];
  const segments: ActivityMilestone[][] = [
    (WORKING_ACTIVITIES[thread.id] ?? []).map(workingToMilestone),
    (followUp?.working ?? []).map(workingToMilestone),
  ];

  // The question Ultron asked at each stage — kept in the trail (above the
  // operator's answer) once answered, so the resolved thread still carries the
  // context of what was being decided.
  const questionFor = (stage: number) =>
    stage === 1 && followUp ? followUp.prompt : (THREAD_PROMPTS[thread.id] ?? thread.recommendation);

  const items: TrailItem[] = milestones
    .slice(0, reasoningCount)
    .map(m => ({ kind: 'activity', milestone: m } as TrailItem));
  outbound.forEach((text, stage) => {
    // The answered prompt collapses to just its question text, sitting above the
    // operator's reply as the context for their answer.
    items.push({ kind: 'question', text: questionFor(stage) });
    items.push({ kind: 'message', text });
    // The work runs first, then Ultron closes with a short text reply beneath it —
    // so each activity group sits above its response to the operator's action.
    (segments[stage] ?? []).forEach(m => items.push({ kind: 'activity', milestone: m }));
    items.push({ kind: 'reply', text: actionAck(stage) });
  });
  return { items, reasoningCount };
}

export function UltronActivityCards({ thread, outbound = [], chat = [], replying = false, analyzing = false, actionCard }: { thread: ThreadItem; outbound?: string[]; chat?: ChatMessage[]; replying?: boolean; analyzing?: boolean; actionCard?: ReactNode }) {
  // `monitoring` (escalated Working case) reveals its full completed trail, like
  // an executing/resolved case rather than stalling at the reasoning steps.
  const executing = thread.status === 'in_progress' || thread.status === 'monitoring';
  const resolved = thread.status === 'resolved' || thread.status === 'auto_resolved';

  const { items, reasoningCount } = buildTrail(thread, outbound);

  // Revealed-item count: seeded with the reasoning steps, then only ever grows
  // toward the full trail. Because this component stays mounted across phases,
  // the count persists — so acting on a case appends new entries rather than
  // clearing and re-growing the trail from scratch. While analyzing, it streams
  // the reasoning in from the first step (so the group runs live, like Ultron
  // thinking) rather than appearing all at once.
  const [count, setCount] = useState(analyzing ? Math.min(1, reasoningCount) : reasoningCount);
  // Once the operator has acted, every available entry (their message + the
  // resulting work) streams in; otherwise only the reasoning shows until the
  // case actually executes/resolves.
  const target = outbound.length > 0
    ? items.length
    : (executing || resolved ? items.length : reasoningCount);

  useEffect(() => {
    if (count >= target) return;
    const cur = items[count];
    const prev = items[count - 1];
    // The answered question and the operator's sent message pop in immediately
    // (they're context for an already-made decision, not live work).
    if (cur?.kind === 'question' || cur?.kind === 'message') {
      const t = setTimeout(() => setCount(c => c + 1), 0);
      return () => clearTimeout(t);
    }
    // Ultron's trailing reply (and its feedback row) lands a short beat after the
    // work has finished streaming.
    if (cur?.kind === 'reply') {
      const t = setTimeout(() => setCount(c => c + 1), POST_REPLY_MS);
      return () => clearTimeout(t);
    }
    // Activity steps stream in one at a time — each appears in its loading state
    // (spinner) and settles to a check as the next reveals. This drives both the
    // analysis reasoning and the post-approval work; the first work step follows
    // the operator's message after a short beat, then the rest pace out.
    const delay = prev?.kind === 'message' ? POST_REPLY_MS : ACTIVITY_STEP_MS;
    const t = setTimeout(() => setCount(c => c + 1), delay);
    return () => clearTimeout(t);
  }, [count, target]); // eslint-disable-line react-hooks/exhaustive-deps

  // Group the revealed stream into runs of consecutive activity cards split by
  // message bubbles, so each run renders as one flush activity block and the
  // messages sit between them.
  const revealed = items.slice(0, count);
  const groups: ({ type: 'acts'; milestones: ActivityMilestone[] } | { type: 'question'; text: string } | { type: 'msg'; text: string } | { type: 'reply'; text: string })[] = [];
  for (const it of revealed) {
    if (it.kind === 'question') { groups.push({ type: 'question', text: it.text }); continue; }
    if (it.kind === 'message') { groups.push({ type: 'msg', text: it.text }); continue; }
    if (it.kind === 'reply') { groups.push({ type: 'reply', text: it.text }); continue; }
    const last = groups[groups.length - 1];
    if (last && last.type === 'acts') last.milestones.push(it.milestone);
    else groups.push({ type: 'acts', milestones: [it.milestone] });
  }

  // The newest activity card types its headline out while Ultron is actively
  // working and the stream is still growing — never re-typing settled cards.
  const streaming = count < items.length;
  const newestIsActivity = revealed.length > 0 && revealed[revealed.length - 1].kind === 'activity';
  // Ultron has caught up with everything available for the current phase.
  const atRest = count >= target;
  // The newest activity always runs its own type-in (blink + typewriter) before
  // the group settles — including the final 'done' step. That last step is
  // revealed with the stream already at its end (streaming=false), so without
  // this it would skip straight to the settled state. Hold a one-beat typing
  // window open once the last revealed item is a fresh activity in a live
  // (working/analyzing) phase; when it elapses the group settles to standby.
  const [newestTyping, setNewestTyping] = useState(false);
  useEffect(() => {
    if (!(atRest && newestIsActivity && (executing || analyzing) && !resolved)) {
      setNewestTyping(false);
      return;
    }
    setNewestTyping(true);
    const t = setTimeout(() => setNewestTyping(false), ACTIVITY_STEP_MS);
    return () => clearTimeout(t);
  }, [atRest, newestIsActivity, count, executing, analyzing, resolved]);
  const typingOn = (executing || analyzing) && (streaming || newestTyping) && newestIsActivity;
  let lastActsIdx = -1;
  groups.forEach((g, i) => { if (g.type === 'acts') lastActsIdx = i; });

  // The step Ultron is actively working is the newest revealed activity — but
  // only when it's genuinely the latest item in the trail (the last group is an
  // activity run, not a just-sent message awaiting its first execution card).
  const lastIdx = groups.length - 1;

  // Ultron has caught up with everything available for the current phase (done
  // streaming the reasoning, the working steps, etc.). When it has — and the case
  // isn't resolved — its mark rests at the foot of the trail as a "monitoring"
  // presence, the magnetic form, just below the last completed activity. It stays
  // there across the wait (operator decision, follow-up) until the case resolves.
  // (atRest is computed above, alongside the typing window.)
  // While analyzing, the live working mark rides the reasoning (see below), so the
  // resting "monitoring" mark holds off until analysis settles into a decision.
  // While executing, the working group settles its OWN mark in place (it glides
  // down + morphs lines → magnetic), so the separate foot mark stays out of the
  // way — otherwise the in-trail mark would vanish and this one would pop in below.
  // The activity wrapper shows only Ultron's activities (the "Thought for X"
  // trails) and the docked decision surface — no prose narration. Work groups
  // still need to know where the operator's first message sits in the trail.
  const firstMsgIdx = groups.findIndex(g => g.type === 'msg');


  // Per-group live-state flags — whether a group is the live working/analysis run,
  // mid-stream, or settling its own in-trail mark. Keyed by the group's original
  // index so the lastActsIdx / lastIdx semantics carry across the units pass below.
  const activityFlags = (gi: number) => {
    const isAnalyzingGroup = analyzing && gi === lastActsIdx;
    // A case executing autonomously (no operator message this session) makes its
    // single trail group the live working group too.
    const isAutonomousWorking = executing && outbound.length === 0 && gi === lastActsIdx;
    // Work groups follow the operator's first message; reasoning precedes it.
    const afterMsg = firstMsgIdx !== -1 && gi > firstMsgIdx;
    const isWorkingGroup = isAnalyzingGroup || isAutonomousWorking || (executing && afterMsg && gi === lastIdx);
    const isStreamingGroup = isWorkingGroup && (streaming || newestTyping || isAnalyzingGroup);
    const groupSettling = isWorkingGroup && !isAnalyzingGroup && !streaming && !newestTyping && !resolved;
    return { isAnalyzingGroup, isStreamingGroup, groupSettling };
  };

  // Render one activity group (the "Thought for X" trail). When it sits inside a
  // response set (`inResponse`), its own feedback row is suppressed (the set lifts
  // it below the reply text) and it never settles its own mark below the steps —
  // the set's trailing mark carries the resting presence instead. `hideActions`
  // defaults to `inResponse` but can be forced on independently — used to lift the
  // feedback row below the trailing decision card (so it closes out the turn).
  const renderActivity = (gi: number, inResponse: boolean, hideActions: boolean = inResponse) => {
    const g = groups[gi] as { type: 'acts'; milestones: ActivityMilestone[] };
    const { groupSettling } = activityFlags(gi);
    const settled = inResponse ? false : groupSettling;
    // The mark only rests at the foot once the group settles — it no longer rides
    // the active icon while streaming; that step now carries an inline loading
    // spinner instead (see MilestoneIcon).
    const markIndex = settled ? g.milestones.length - 1 : undefined;
    // The group reads as live — header cycling Thinking → Bridging → … → Crossing
    // — while Ultron is genuinely running it: the reasoning group during analysis,
    // and the latest work group while the case executes. It settles to "Thought
    // for X" once analysis concludes / the case resolves (or while it monitors).
    const running = (analyzing || thread.status === 'in_progress') && gi === lastActsIdx;
    return (
      <ActivityTrailCards
        milestones={g.milestones}
        typingIndex={gi === lastActsIdx && typingOn ? g.milestones.length - 1 : undefined}
        /* Every group opens expanded by default so the operator sees the steps
           without a click; the header still toggles it shut. */
        collapsed={false}
        workingIndex={markIndex}
        settled={settled}
        hideActions={hideActions}
        running={running}
      />
    );
  };

  // Fold the trail's groups into render units. A work activity group immediately
  // followed by Ultron's reply collapses into one `response` unit — the whole set
  // (activity group + text message + action buttons + agent mark). Reasoning
  // groups and operator messages stay standalone.
  type RenderUnit =
    | { kind: 'acts'; gi: number }
    | { kind: 'question'; text: string }
    | { kind: 'msg'; text: string }
    | { kind: 'response'; gi: number; text: string };
  const units: RenderUnit[] = [];
  for (let i = 0; i < groups.length; i++) {
    const g = groups[i];
    if (g.type === 'question') { units.push({ kind: 'question', text: g.text }); continue; }
    if (g.type === 'msg') { units.push({ kind: 'msg', text: g.text }); continue; }
    if (g.type === 'reply') { units.push({ kind: 'response', gi: -1, text: g.text }); continue; }
    const next = groups[i + 1];
    if (next && next.type === 'reply') { units.push({ kind: 'response', gi: i, text: next.text }); i++; }
    else units.push({ kind: 'acts', gi: i });
  }

  // Does the trailing rendered element already carry its own agent mark (a response
  // set, or the chat's pending reply)? If so, the thread-level foot mark would
  // double it — hold it back so the set's own mark is the sole trailing presence.
  const lastChat = chat[chat.length - 1];
  const lastUnit = units[units.length - 1];
  // A response set normally carries the trailing mark — UNLESS it carries the
  // decision card too, in which case its mark stands down and the foot mark drops
  // below the card instead (so the mark sits after the last Ultron output).
  const trailingHasMark = chat.length > 0
    ? (lastChat.role === 'ultron' || replying)
    : (!!lastUnit && lastUnit.kind === 'response' && !(actionCard && lastUnit.gi >= 0));

  // Ultron's identity mark lives at the foot of the thread for the pre-reply
  // states (reasoning, plan, work-in-flight) — it animates while Ultron runs work
  // and rests idle otherwise. Once a response set trails the thread, that set
  // carries the mark instead, so this one stands down.
  const showFootMark = revealed.length > 0 && !analyzing && !trailingHasMark;
  const footActive = replying || executing;

  // The decision / save-as-workflow surface sits directly under the LATEST activity
  // group — so each ask reads as Ultron's current question right after its most
  // recent thinking. For the first decision that's the reasoning group; for a
  // follow-up it's the work group Ultron just finished (e.g. "messaged Renee →
  // she replied yes"), so the follow-up prompt lands beneath that, not back up
  // under the original reasoning. A `response` unit carries an activity group too,
  // so it counts as an anchor.
  const lastActivityUnitIdx = (() => {
    for (let i = units.length - 1; i >= 0; i--) {
      const u = units[i];
      if (u.kind === 'acts' || (u.kind === 'response' && u.gi >= 0)) return i;
    }
    return -1;
  })();

  return (
    <>
      {units.map((u, ui) => {
        // The pending decision anchors under the latest activity-bearing unit.
        const trailingCard = ui === lastActivityUnitIdx ? actionCard : null;
        if (u.kind === 'question') return <UltronAskedQuestion key={`q${ui}`} text={u.text} />;
        if (u.kind === 'msg') return <UltronOutboundMessages key={`m${ui}`} messages={[u.text]} />;
        if (u.kind === 'acts') {
          // When this group carries the trailing decision card, lift its feedback
          // row below the card so the thumbs/rerun close out the whole turn (the
          // reasoning + the ask) rather than splitting the two.
          const actsMilestones = (groups[u.gi] as { milestones: ActivityMilestone[] }).milestones;
          const card = renderActivity(u.gi, false, !!trailingCard);
          return (
            <Fragment key={`a${ui}`}>
              {card}
              {trailingCard}
              {trailingCard && <SessionActions time={synthClock(actsMilestones)} />}
            </Fragment>
          );
        }
        // A response unit — the whole set: the work activity group, Ultron's reply
        // text, the feedback action buttons, and the trailing agent mark.
        const hasWork = u.gi >= 0;
        const workMilestones = hasWork ? (groups[u.gi] as { milestones: ActivityMilestone[] }).milestones : [];
        const streamingGroup = hasWork && activityFlags(u.gi).isStreamingGroup;
        const isLast = ui === units.length - 1;
        // Only one mark trails the whole thread. A response set carries it solely
        // when it's the thread's tail — the last unit with nothing rendered after
        // it (no chat thread, not mid-reply). Earlier response sets stand down so
        // the single mark sits at the foot of the last group.
        const isThreadTail = isLast && chat.length === 0 && !replying;
        return (
          <Fragment key={`resp${ui}`}>
            <UltronResponse
              activity={hasWork ? renderActivity(u.gi, true) : undefined}
              text={u.text}
              // When this set carries the trailing decision card, its feedback row
              // lifts below the card (rendered after it) so the thumbs/rerun close
              // out the whole turn rather than sitting above the next ask.
              feedbackTime={trailingCard ? undefined : synthClock(workMilestones)}
              // While the work group still rides its own in-trail mark, suppress the
              // set's mark; once it settles, the tail set's mark provides the presence
              // — active while the case is still executing/monitoring. When this set
              // carries the trailing decision card, its mark stands down so the single
              // foot mark sits below the card (after the last Ultron output).
              active={footActive && isThreadTail && !streamingGroup && !trailingCard}
              showMark={isThreadTail && !streamingGroup && !trailingCard}
            />
            {trailingCard}
            {trailingCard && <SessionActions time={synthClock(workMilestones)} />}
          </Fragment>
        );
      })}
      {/* The free-text conversation at the foot — the operator's typed messages as
          sent bubbles, Ultron's replies as full response sets. */}
      <UltronChatThread messages={chat} replying={replying} />
      {/* Thread-level identity mark — only when the trailing element isn't already
          a response set carrying its own. */}
      {showFootMark && (
        <ChatFootMark role={footActive ? 'status' : 'img'} aria-label={replying ? 'Ultron is replying' : footActive ? 'Ultron is working' : 'Ultron'}>
          <AgentMark mark="circle" size={28} tone="auto" state={footActive ? 'active' : 'idle'} coreHalo={false} aria-hidden="true" />
        </ChatFootMark>
      )}
      {/* Fallback: if there's no activity trail to anchor under, the card trails. */}
      {lastActivityUnitIdx < 0 && actionCard}
    </>
  );
}

// A complete Ultron response — the whole set bundled as one block, in the slot
// order of Alloy's <AIInboundMessage>: the activity group it worked through, the
// text message (its prose reply), the action button group (feedback), then the
// trailing agent mark. Used for every response Ultron generates — the post-action
// reply and free-text chat replies — so a generated reply always arrives as one
// coherent unit rather than scattered pieces (a global foot mark, feedback buried
// in the activity group, a bare text bubble).
function UltronResponse({ activity, text, feedbackTime, active = false, showMark = true }: {
  /** Ultron activity group — the "Thought for X" trail (an <ActivityTrailCards>). */
  activity?: ReactNode;
  /** Text message — Ultron's prose reply. */
  text?: ReactNode;
  /** Timestamp for the feedback row; omit to drop the action buttons. */
  feedbackTime?: string;
  /** Mark animates + shows typing dots while the reply is still composing. */
  active?: boolean;
  /** Suppress the trailing mark while the activity group rides its own in-trail
   *  working mark, so the two don't double up mid-stream. */
  showMark?: boolean;
}) {
  return (
    <ResponseSet>
      {activity}
      {/* Reply prose is no longer shown — the activity trail + action buttons carry
          the response. The feedback group (thumbs up/down + rerun) trails the set. */}
      {feedbackTime && <SessionActions time={feedbackTime} />}
      {/* Agent mark — trails the set so the response carries its own presence
          rather than borrowing a single thread-level foot mark. */}
      {showMark && (
        <ResponseMark role={active ? 'status' : 'img'} aria-label={active ? 'Ultron is working' : 'Ultron'}>
          <AgentMark mark="circle" size={28} tone="auto" state={active ? 'active' : 'idle'} coreHalo={false} aria-hidden="true" />
        </ResponseMark>
      )}
    </ResponseSet>
  );
}

/** A lightweight synthesized activity group for a free-text chat reply, so a chat
 *  response carries the same "Thought for X" group as the post-action flow.
 *  DEMO ONLY — a single reasoning beat, collapsed by default. */
function chatReplyMilestones(): ActivityMilestone[] {
  return [{ icon: 'clock', headline: 'Reviewed your message' }];
}

// Ultron's plan, shown as a persistent inbound message directly after the
// reasoning group — the prose statement of what it intends to do, which the
// operator then approves (or adjusts) in the docked decision surface. Its
// identity mark is no longer attached here; a single mark rests at the foot of
// the whole thread instead.
function UltronPlanMessage({ paragraphs, flag }: { paragraphs: string[]; flag?: EventFlag }) {
  if (!paragraphs.length) return null;
  return (
    <PlanBlock>
      <PlanBody>
        {paragraphs.map((p, i) => (
          <Fragment key={i}>
            <PlanText>{p}</PlanText>
            {/* The "what's off" card sits right after the opening beat — Ultron
                names the event in prose, then lays out the off-kilter facts before
                walking through its reasoning and plan. */}
            {i === 0 && flag && <FlagCard flag={flag} />}
          </Fragment>
        ))}
      </PlanBody>
    </PlanBlock>
  );
}

/** An info-circle glyph for the neutral tone — drawn inline (Alloy's
 *  InfoCircleIcon isn't reliably re-exported) on the same 24px icon grid. */
function InfoGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={1.75} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" />
      <path d="M12 11v5M12 8h.01" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** The badge glyph per tone: a warning triangle for problems, a check for
 *  resolved/healthy events, an info circle for routine ones. */
const FLAG_TONE_ICON = {
  warning: AlertTriangleIcon,
  positive: CheckIcon,
  neutral: InfoGlyph,
} as const;

/** A compact card surfacing the key facts of an event: a tonal badge + event
 *  header, then a divider and a list of labelled facts — the salient ones (what's
 *  off on a problem, what's confirmed on a resolution) drawn in the tone colour so
 *  they read at a glance. Modelled on Ultron's record/context cards. */
function FlagCard({ flag }: { flag: EventFlag }) {
  const tone = flag.tone ?? 'warning';
  const ToneIcon = FLAG_TONE_ICON[tone];
  return (
    <FlagShell role="group" aria-label={flag.eyebrow} data-tone={tone}>
      <FlagHeader>
        <FlagBadge aria-hidden="true"><ToneIcon size={16} /></FlagBadge>
        <FlagHeadings>
          <FlagTitle>{flag.title}</FlagTitle>
          <FlagSubtitle>{flag.subtitle}</FlagSubtitle>
        </FlagHeadings>
      </FlagHeader>
      <FlagDivider aria-hidden="true" />
      <FlagRows>
        {flag.rows.map((r, i) => (
          <FlagRowEl key={i}>
            <FlagRowLabel>{r.label}</FlagRowLabel>
            <FlagRowValue data-alert={r.alert || undefined}>{r.value}</FlagRowValue>
          </FlagRowEl>
        ))}
      </FlagRows>
    </FlagShell>
  );
}

// The free-text conversation — the operator's typed messages (right, dark
// bubbles) interleaved with Ultron's replies. Each Ultron reply is a full
// response set (activity group + text message + action buttons + agent mark), so
// a generated chat reply arrives as the same whole set as a post-action reply.
export function UltronChatThread({ messages, replying = false }: { messages: ChatMessage[]; replying?: boolean }) {
  if (!messages.length && !replying) return null;
  // The single trailing mark belongs to the last Ultron reply — unless Ultron is
  // mid-reply, where the pending set below carries it. Earlier replies stand down.
  const lastUltronIdx = messages.reduce((acc, m, i) => (m.role === 'ultron' ? i : acc), -1);
  return (
    <ChatList>
      {messages.map((m, i) =>
        m.role === 'operator' ? (
          <OutboundRow key={i}>
            <OutboundBubble>
              <OutboundText>{m.text}</OutboundText>
            </OutboundBubble>
          </OutboundRow>
        ) : (
          <UltronResponse
            key={i}
            activity={<ActivityTrailCards milestones={chatReplyMilestones()} collapsed hideActions />}
            text={m.text}
            feedbackTime={synthClock(chatReplyMilestones())}
            showMark={!replying && i === lastUltronIdx}
          />
        ),
      )}
      {/* While Ultron is mid-reply, a pending set holds the place: just the agent
          mark, animating with typing dots, until the reply lands as a full set. */}
      {replying && <UltronResponse active />}
    </ChatList>
  );
}

// The answered prompt, collapsed to its question text. Once the operator responds,
// the interactive card (plan steps + CTAs) gives way to just the question Ultron
// asked — left in the thread, above the operator's reply, so the resolved
// conversation keeps the context of what was being decided.
function UltronAskedQuestion({ text }: { text: string }) {
  return <AskedQuestion>{text}</AskedQuestion>;
}

// Outbound messages — the operator's replies in the thread. Each label the user
// approved from the prompt card lands here as a right-aligned sent bubble,
// placed directly under the existing activities so the middle space reads as a
// conversation between the operator and Ultron.
export function UltronOutboundMessages({ messages }: { messages: string[] }) {
  if (!messages.length) return null;
  return (
    <OutboundList>
      {messages.map((text, i) => (
        <OutboundRow key={i}>
          <OutboundBubble>
            <OutboundText>{text}</OutboundText>
          </OutboundBubble>
        </OutboundRow>
      ))}
    </OutboundList>
  );
}


// ── Styled ───────────────────────────────────────────────────────────────────

const Card = styled.div<{ $expanded: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  overflow: hidden;
  /* The expanded event card is deconstructed: transparent, no tonal fill, no
     shadow/border — its content sits flat on the page. Collapsed list cards keep
     their solid surface + flat tonal status fill, and lift on hover. */
  background: ${p => (p.$expanded ? 'transparent' : 'var(--color-bg-primary)')};
  box-shadow: none;
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);

  ${p => (p.$expanded ? '' : `
  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-below-md);
  }`)}

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
  }

  /* Semantic card tone: high severity → orange, resolved-family → green,
     actively-working (in_progress / monitoring) → blue, everything else
     (medium / low / none) → slate. Only collapsed cards take the flat tonal
     fill; the expanded event card stays transparent. */
  &[data-tone='orange'] { ${p => (p.$expanded ? '' : `background-color: var(--color-orange-bg-tertiary);`)} }
  &[data-tone='green']  { ${p => (p.$expanded ? '' : `background-color: var(--color-green-bg-tertiary);`)} }
  &[data-tone='blue']   { ${p => (p.$expanded ? '' : `background-color: var(--color-blue-bg-tertiary);`)} }
  &[data-tone='slate']  { ${p => (p.$expanded ? '' : `background-color: var(--color-slate-bg-tertiary);`)} }
`;

/* Detached actionable card — the prompt + decision buttons, docked at the page
   bottom. Solid surface with a neutral opaque border + small lift shadow so it
   reads above the scrolling feed without a heavy drop. */
const ActionCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-below-low);
`;

/* The prompt row: the question takes the lead, the subject's avatar (when the
   decision is about a specific person) sits in the top-right corner. */
const ActionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
`;

/* Top-right corner avatar — stands in for the removed candidate record card. */
const CardAvatar = styled.span`
  flex-shrink: 0;
  display: inline-flex;
`;

/* The whole header is the accordion toggle — a real button reset to look like
   the row it replaces. */
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  padding: var(--space-2) 0;
`;

/* The title region is the accordion toggle — a real button reset to look like
   the row it replaces. The trailing icon is a separate ghost Button (sibling),
   so neither button nests inside the other. */
const HeaderToggle = styled.button`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1;
  min-width: 0;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: var(--radius-md);
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-border-focus);
  }
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const CardTitle = styled.span`
  /* Alloy label / medium: 14px · medium · relaxed · wide tracking */
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`;

/* One-line summary of Ultron's question/suggestion — Alloy paragraph / small,
   muted (content-inverse-tertiary), truncated to a single line. */
const CardSubtitle = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-inverse-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

/* Past-activity trail, rendered on the card's tonal background ABOVE the white
   body. Only mounts while the card is expanded, so it needs no collapse anim.
   The left inset (space-4) centers the trail icons under the header avatar; the
   trail's own icon→text gap then carries the headline text out to align with
   the header title. */
const TrailRegion = styled.div`
  overflow: hidden;
`;

const TrailInner = styled.div`
  padding: var(--space-1) var(--space-4) var(--space-3);
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  /* 8px padding all around for a tight body. A 4px margin all around insets the
     body as a framed panel within the card. */
  padding: var(--space-2);
  margin: var(--space-1);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
`;

/* Intermediate "Ultron is thinking" block — the orbit mark beside a processing
   headline + the event assessment, with the demo trigger below. No prompt,
   records, or actions yet. */
const Analyzing = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  font-family: var(--font-sans);
`;

/* Mark + text row — the orbit mark centers on the headline + assessment. Doubles
   as the collapsible group's toggle (reset button chrome), so it sits flush like
   the activity-trail session header with a trailing chevron. */
const AnalyzingRow = styled.div<{ $interactive?: boolean }>`
  all: ${p => (p.$interactive ? 'unset' : 'revert')};
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

/* Chevron points right when collapsed, rotates down when expanded — matches the
   activity-trail session header's disclosure affordance. Pushed to the far right. */
const AnalyzingChevron = styled.span`
  display: inline-flex;
  margin-left: auto;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;

/* Detached analyzing surface — the in-card thinking block lifted into its own
   card below the event card. Flat white surface (no shadow, no border), matching
   the activity-trail step cards and message bubbles it threads into below. */
const AnalyzingCard = styled(Analyzing)`
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
`;

const AnalyzingText = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`;

const AnalyzingHeadline = styled.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`;

/* Alloy paragraph / small. */
const AnalyzingDetail = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
`;

/* Accumulating thinking-stream — its 32px mark column sits flush at the card's
   content-left edge so the steps align with the activity-trail step cards below
   (their leading icon rides the same rail). */
const Stream = styled.div`
  display: flex;
  flex-direction: column;
`;

/* Each step slides up + fades in as it arrives (so the card grows). */
const streamIn = keyframes`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* Mirrors the activity trail's row: a left icon rail (mark + dashed connector)
   beside a content column (headline + sub-context). */
const StreamRow = styled.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-4);
  animation: ${streamIn} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const StreamIconCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`;

/* Dashed vertical line linking one step's mark down to the next, matching the
   activity trail's connector. */
const StreamConnector = styled.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`;

const StreamContent = styled.div<{ $last?: boolean }>`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-bottom: ${p => (p.$last ? '0' : 'var(--space-4)')};
`;

const StreamHeadline = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`;

const StreamDetail = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`;

const StreamMark = styled.span<{ $done?: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${p => (p.$done ? 'var(--color-success-content)' : 'var(--color-content-tertiary)')};
`;

/* In-progress agent mark — overlaid (absolutely centered) on the 32px slot so the
   larger mark can spill past it without growing the row or shifting the headline,
   matching the activity trail's working step. */
const WorkingMarkAbs = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  pointer-events: none;
`;

/* Resting agent mark — the magnetic form parked at the foot of the trail once
   Ultron has caught up, marking it as present/monitoring below the last activity.
   Left-aligned to sit roughly under the trail's icon column. */
/* DEMO ONLY — manual trigger to flip an analyzing case to Needs approval.
   Sits at the content-left edge, on the same rail as the thinking-stream marks. */
const DemoTrigger = styled(Button)`
  align-self: flex-start;
`;

/* Vertical stack of context record cards (e.g. ranked candidate matches). */
const RecordList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

/* Plan tasks — the decision broken into discrete steps, each a bordered row
   matching the candidate cards' weight. */
const TaskList = styled.div`
  display: flex;
  flex-direction: column;
`;

/* The header's fixed line height — the click row a collapsed step occupies, and
   the box the leading dot centers against (so the dot stays put when the row
   expands to reveal its description). */
const TASK_HEAD_H = 'var(--space-8)';

const TaskRow = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  gap: var(--space-3);
`;

/* Leading timeline rail — a fixed column carrying the step's dot, with a vertical
   line running the full row height. The dot sits at the header's vertical centre
   (not the row's), so it stays anchored to the label when the row expands.
   Consecutive rows abut (no list gap), so the lines join into one continuous
   thread; the first row starts the line at its dot and the last row ends it. */
const TaskRail = styled.div`
  position: relative;
  flex-shrink: 0;
  width: var(--space-5);
  display: flex;
  align-items: flex-start;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    bottom: 0;
    width: 1.5px;
    background: var(--color-border-opaque);
  }
  /* Clip the thread to the dot's centre (half the header height) at the ends. */
  &[data-first]::before { top: calc(${TASK_HEAD_H} / 2); }
  &[data-last]::before { bottom: calc(100% - ${TASK_HEAD_H} / 2); }
  &[data-first][data-last]::before { display: none; }
`;

/* The step dot — an outlined ring sitting above the line: filled with the card
   surface (so the line doesn't show through its center) with a tertiary outline,
   and ringed in the surface so the line stops a little short of it. Nudged down to
   sit at the header line's centre. */
const TaskDot = styled.span`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  margin-top: calc((${TASK_HEAD_H} - var(--space-2)) / 2);
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-bg-primary);
  border: 1.5px solid var(--color-content-tertiary);
  box-shadow: 0 0 0 var(--space-2) var(--color-bg-primary);
`;

/* The task's flexible column — the (clickable) header line, then its optional
   description below when expanded. */
const TaskBody = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`;

/* The collapsed step row — label + trailing chevron — doubling as the toggle. */
const TaskHeader = styled.div<{ $interactive?: boolean }>`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  min-height: ${TASK_HEAD_H};
  cursor: ${p => (p.$interactive ? 'pointer' : 'default')};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`;

const TaskLabel = styled.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`;

/* Trailing disclosure chevron — points right when collapsed, rotates down open. */
const TaskChevron = styled.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);

  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`;

/* Secondary line under a step — what it does, muted and clamped to two lines so a
   long description never blows out the row height. */
const TaskDetail = styled.p`
  margin: 0;
  padding-bottom: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  color: var(--color-content-disabled);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Prompt = styled.p`
  margin: 0;
  /* Alloy "Label large" type style */
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-top: var(--space-1);
`;

const Pill = styled(Button)`
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);

  /* Primary pill rides the inverse surface token so it flips with the theme
     (dark fill in light mode, light fill in dark mode). !important is needed to
     beat Alloy's higher-specificity dark-scope rule, which otherwise forces the
     fill back to the page surface token. */
  &[data-variant='primary'] {
    background: var(--color-bg-inverse-primary) !important;
    color: var(--color-content-inverse-primary) !important;
  }

  /* Outlined (secondary) pills get a strong dark border. */
  &[data-variant='tertiary'] {
    border-color: var(--color-content-primary);
  }
`;

const OtherPill = styled(Button)`
  border-radius: var(--radius-full);
  border-style: dashed;
  color: var(--color-content-secondary);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`;

/* Trailing "save as workflow" affordance — right-aligned in the decision row,
   pill-radius to match the Yes/No choices. Acts as a toggle: the "on" state
   reads with a brand-tinted fill + leading checkmark (set in the markup). */
const SaveWorkflowPill = styled(Button)<{ $trailing?: boolean }>`
  ${p => p.$trailing && 'margin-left: auto;'}
  border-radius: var(--radius-full);

  &[data-on] {
    background: var(--color-green-bg-tertiary);
    color: var(--color-green-content-primary);
  }
`;

/* The answered prompt's residual question text — left-aligned (Ultron's voice) as
   an outlined pill, muted to read as resolved context rather than a live ask. Same
   text size as the operator's outbound bubble, so the asked/answered pair matches. */
const AskedQuestion = styled.p`
  width: fit-content;
  max-width: 80%;
  margin: var(--space-2) 0 0;
  padding: var(--space-2) var(--space-4);
  border: 1px solid var(--color-border-opaque);
  border-radius: 16px;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-secondary);
`;

/* Outbound (sent) messages — right-aligned chat bubbles, stacked below the
   activity trail. A small top gap separates them from the last activity card. */
const OutboundList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
`;

const OutboundRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

/* Each sent bubble glides up + fades in from fully transparent as it's appended. */
const bubbleIn = keyframes`
  from { opacity: 0; transform: translateY(var(--space-4)); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* Dark inverse fill, right side — the operator's voice in the thread. */
const OutboundBubble = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 80%;
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-secondary);
  border-radius: 16px;
  animation: ${bubbleIn} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const OutboundText = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;

/* The conversation block — operator + Ultron turns stacked below the trail. The
   top gap lifts it clear of the last activity card / resting mark. */
const ChatList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
`;

/* Inbound (Ultron) turn — left-aligned, the identity mark riding the bubble's
   leading edge so the reply reads as Ultron speaking back. */
const InboundRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--space-3);
`;

/* Ultron's single identity mark at the foot of the thread — left-aligned to the
   conversation's leading edge, with the typing dots beside it while it replies. */
const ChatFootMark = styled.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
`;

/* A complete Ultron response — the wrapper bundling the activity group, the reply
   text, the feedback actions, and the trailing mark into one set. Stacks its
   pieces on an 8px rhythm (matching Alloy's AIInboundMessage block) and glides in
   as a unit when the response is generated. */
const ResponseSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
  animation: ${bubbleIn} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

/* The response set's own agent mark — left-aligned at the foot of the set, with
   typing dots beside it while the reply is still composing. Mirrors the thread's
   ChatFootMark, but scoped to a single response. */
const ResponseMark = styled.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
`;

/* Ultron's voice in the thread — plain prose on its identity mark (no bubble),
   mirroring the plan message; only the operator's outbound side keeps a bubble.
   Shares the sent-bubble glide-in. */
const InboundBubble = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 80%;
  padding: var(--space-1) 0;
  animation: ${bubbleIn} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const InboundText = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;

/* Ultron's plan as plain prose (no bubble) — the paragraphs stacked with the
   identity mark resting below them, left-aligned, reading as a closing statement
   of the trail rather than a chat reply. */
const PlanBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
  animation: ${bubbleIn} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

/* The plan's paragraph column — reasoning beats stacked above the plan line. */
const PlanBody = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;

const PlanText = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;

/* The event-facts card — a bordered, rounded surface sitting between the plan's
   prose beats. A small top/bottom margin lifts it clear of the paragraphs so it
   reads as an inset reference rather than another line of text. `data-tone` sets
   the accent (badge + salient values): warning → orange (what's off), positive →
   green (confirmed), neutral → slate (routine). */
const FlagShell = styled.div`
  --flag-accent: var(--color-orange-content-secondary);
  --flag-badge-bg: var(--color-orange-bg-tertiary);

  display: flex;
  flex-direction: column;
  margin: var(--space-1) 0;
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  font-family: var(--font-sans);

  &[data-tone='positive'] {
    --flag-accent: var(--color-green-content-secondary);
    --flag-badge-bg: var(--color-green-bg-tertiary);
  }
  &[data-tone='neutral'] {
    --flag-accent: var(--color-slate-content-secondary);
    --flag-badge-bg: var(--color-slate-bg-tertiary);
  }
`;

const FlagHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`;

/* Tonal badge — a rounded square carrying the tone glyph, tinted by the card's
   accent so it matches the event's severity (orange / green / slate). */
const FlagBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--flag-badge-bg);
  color: var(--flag-accent);
`;

const FlagHeadings = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const FlagTitle = styled.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`;

const FlagSubtitle = styled.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-tertiary);
`;

/* Hairline separating the header from the labelled facts. */
const FlagDivider = styled.span`
  height: 1px;
  margin: var(--space-3) 0;
  background: var(--color-border-opaque);
`;

const FlagRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`;

/* One labelled fact — label on the left, value on the right. */
const FlagRowEl = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-3);
`;

const FlagRowLabel = styled.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;

/* The value — primary content by default; the *off* facts switch to the warning
   tone and bold so the problem stands out. */
const FlagRowValue = styled.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  text-align: right;
  color: var(--color-content-primary);

  &[data-alert] {
    font-weight: var(--font-weight-semibold);
    color: var(--flag-accent);
  }
`;
