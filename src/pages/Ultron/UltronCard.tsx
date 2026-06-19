/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — single case card.
   Renders one thread: header (avatar + title + status), the optional past-
   activity trail (resolved), and the case body (prompt + records + action pills,
   or live execution activities, or the resolved outcome). One card per feed row.
   DEMO ONLY — state lives in the shared store hook.
   ───────────────────────────────────────────────────────────────────────────── */

import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  Avatar, Button, Save01Icon, MinusIcon, ChevronSelectorVerticalIcon, CheckIcon, LinkExternal01Icon, XCloseIcon,
} from 'alloy-design-system';
import type { ThreadItem } from './types';
import {
  THREAD_SUBJECTS, threadAvatarUrl, THREAD_PROMPTS, threadDisplayTitle, threadMeta,
  THREAD_FOLLOWUPS, THREAD_RECORDS, THREAD_RESOLVED_RECORDS, activityForThread, analyzingSteps,
} from './fixtures';
import { RecordCard } from './RecordCard';
import {
  isPurpleRow, isRefinementAction, OutcomeBlock, toneFor, UNRESOLVED_ACTIONS,
  hasMultipleCtas, DO_IT_ALL_LABEL,
} from './ultronShared';
import { ACTIVITY_STEP_MS } from './store';
import { ActivityTrail, ActivityTrailCards } from './ActivityTrail';
import { AgentMark } from './AgentMark';

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
  const actionable = needsDecision || thread.status === 'unresolved';
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
  // When the question bundles several actions, collapse to a single combined
  // "Yes, do it all" primary plus the "Other" escape hatch.
  const multiCta = needsDecision && hasMultipleCtas(prompt);
  const primaryLabel = multiCta ? DO_IT_ALL_LABEL : actions[actions.length - 1];
  const secondaryLabels = multiCta ? [] : actions.slice(0, -1);
  const purple = isPurpleRow(thread);
  return { needsDecision, actionable, onFollowUp, followUp, prompt, records, primaryLabel, secondaryLabels, purple };
}

export function UltronCard({ thread, stage, expanded, detachActionable, detachAnalyzing, detachTrail, onToggle, onClose, onDecide, onAction, onRefinement, onSaveWorkflow }: UltronCardProps) {
  const [savedWorkflow, setSavedWorkflow] = useState(false);

  const { needsDecision, actionable, prompt, records, primaryLabel, secondaryLabels, purple } = deriveCase(thread, stage);
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

  // Whether the card has any body content. Monitoring / in-progress threads carry
  // no in-card body (their live activity renders below as <UltronWorkingCards>),
  // so we skip the body wrapper rather than render an empty white box.
  const hasBody = detachActionable
    ? (showAnalyzing || isResolved)
    : (actionable || showAnalyzing || isResolved || showActions);

  // A header-only case (monitoring / in-progress, whose activity streams below
  // as separate cards) has no in-card body to expand into, so it always reads as
  // a collapsed event row — flat tonal chrome + meta subtitle, no gradient border
  // ring — matching the rest of the feed instead of a glowing bordered pill.
  const effectiveExpanded = expanded && hasBody;

  // Card tone (shared with the sidebar dots): green / orange / slate.
  const tone = toneFor(thread);

  const trigger = (label: string) => {
    if (isRefinementAction(label)) onRefinement(label);
    else onAction(thread.id, label);
  };

  return (
    <Card data-tone={tone} $expanded={effectiveExpanded}>
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
                scans at a glance. Falls back to Ultron's prose read when a case
                carries no structured metadata. Collapsed only; when expanded the
                prompt carries the recommendation. */}
            {!effectiveExpanded && <CardSubtitle>{threadMeta(thread.id) || thread.assessment}</CardSubtitle>}
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
          {onClose ? <MinusIcon size={16} /> : effectiveExpanded ? <ChevronSelectorVerticalIcon size={16} /> : <MinusIcon size={16} />}
        </Button>
      </CardHeader>

      {effectiveExpanded && isResolved && !detachTrail && (
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

        {isResolved && (
          <>
            <OutcomeBlock thread={thread} />
            {THREAD_RESOLVED_RECORDS[thread.id] && (
              <RecordCard record={THREAD_RESOLVED_RECORDS[thread.id]} />
            )}
          </>
        )}

        {showActions && (
          <Actions>
            {actionable && primaryLabel && (
              <Pill variant="primary" size="sm" onClick={() => trigger(primaryLabel)}>
                {primaryLabel}
              </Pill>
            )}
            {actionable && secondaryLabels.map(label => (
              <Pill key={label} variant="tertiary" size="sm" onClick={() => trigger(label)}>
                {label}
              </Pill>
            ))}
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
  /** Dismiss the decision surface (hides this card). */
  onDismiss?: (threadId: string) => void;
}

export function UltronActionCard({ thread, stage, onAction, onRefinement, onSaveWorkflow, onDismiss }: UltronActionCardProps) {
  const [savedWorkflow, setSavedWorkflow] = useState(false);
  const { actionable, prompt, records, primaryLabel, secondaryLabels, purple } = deriveCase(thread, stage);

  const trigger = (label: string) => {
    if (isRefinementAction(label)) onRefinement(label);
    else onAction(thread.id, label);
  };

  return (
    <ActionCard data-tone={toneFor(thread)}>
      {onDismiss && (
        <DismissSlot>
          <Button
            variant="ghost"
            size="xs"
            iconOnly
            aria-label="Dismiss"
            onClick={() => onDismiss(thread.id)}
          >
            <XCloseIcon size={16} />
          </Button>
        </DismissSlot>
      )}
      {actionable && <Prompt>{prompt}</Prompt>}
      {/* Workflow-ready rows aren't a decision — they just offer to save the
          resolved play. Ask for it explicitly above the Save button. */}
      {purple && !actionable && <Prompt>Want me to save this as a reusable workflow?</Prompt>}
      {actionable && records.length > 0 && (
        <RecordList>
          {records.map((r, i) => <RecordCard key={i} record={r} />)}
        </RecordList>
      )}
      <Actions>
        {actionable && primaryLabel && (
          <Pill variant="primary" size="sm" onClick={() => trigger(primaryLabel)}>
            {primaryLabel}
          </Pill>
        )}
        {actionable && secondaryLabels.map(label => (
          <Pill key={label} variant="tertiary" size="sm" onClick={() => trigger(label)}>
            {label}
          </Pill>
        ))}
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
      {/* TODO: wire ESC to skip/dismiss the case. */}
      <SkipHint>ESC to Skip</SkipHint>
    </ActionCard>
  );
}

// ── Analyzing ─────────────────────────────────────────────────────────────────
// The "Ultron is thinking" content (orbit mark + headline + assessment + demo
// trigger). Shared by the in-card analyzing block and the detached card below.
// Accumulating "thinking" stream: reveals one step at a time on a timer. Earlier
// steps settle to a check; the newest pulses. Each new row animates in, so the
// analyzing card grows in height as Ultron's work unfolds. The final step stays
// in-progress (Ultron is still analyzing) until the case flips to Needs approval.
function AnalyzingStream({ steps, completed }: { steps: string[]; completed?: boolean }) {
  const [count, setCount] = useState(completed ? steps.length : 1);

  useEffect(() => {
    if (completed) { setCount(steps.length); return; }
    if (count >= steps.length) return;
    const t = setTimeout(() => setCount(c => c + 1), 1600);
    return () => clearTimeout(t);
  }, [count, steps.length, completed]);

  return (
    <Stream role="status" aria-live="polite">
      {steps.slice(0, count).map((step, i) => {
        // Once analysis is complete every step reads as done (checked).
        const inProgress = !completed && i === count - 1;
        return (
          <StreamRow key={i}>
            <StreamMark $done={!inProgress} aria-hidden="true">
              {inProgress
                ? <AgentMark mark="magnetic" size={32} tone="auto" state="active" coreHalo={false} aria-label="In progress" />
                : <CheckIcon size={12} />}
            </StreamMark>
            <StreamText $done={!inProgress}>{step}</StreamText>
          </StreamRow>
        );
      })}
    </Stream>
  );
}

function AnalyzingBody({ thread, onDecide, analyzed }: { thread: ThreadItem; onDecide: (threadId: string) => void; analyzed?: boolean }) {
  return (
    <>
      {/* Mark centers on the headline + assessment text (not the demo button). */}
      <AnalyzingRow>
        <AgentMark mark="orbit" size={40} tone="auto" state={analyzed ? 'idle' : 'active'} coreHalo={false} aria-hidden="true" />
        <AnalyzingText>
          <AnalyzingHeadline>
            {analyzed ? (
              'Ultron analyzed this event'
            ) : (
              <>Ultron is analyzing this event<Dots aria-hidden="true"><span>.</span><span>.</span><span>.</span></Dots></>
            )}
          </AnalyzingHeadline>
          <AnalyzingDetail>{thread.assessment}</AnalyzingDetail>
        </AnalyzingText>
      </AnalyzingRow>
      {/* Thinking stream — reveals step-by-step while analyzing; all steps read
          as complete once analyzed. */}
      <AnalyzingStream steps={analyzingSteps(thread.id)} completed={analyzed} />
      {/* DEMO ONLY — skip the wait and reveal the recommendation prompt. Gone
          once analysis has completed. */}
      {!analyzed && (
        <DemoTrigger variant="secondary" size="sm" onClick={() => onDecide(thread.id)}>
          Trigger Needs approval (demo)
        </DemoTrigger>
      )}
    </>
  );
}

// The detached analyzing surface — the same thinking block, lifted out of the
// event card into its own card placed directly below it (the feed's gap sets
// the spacing). Same radius as the event card, a small drop shadow, no border.
// `analyzed` switches it to the completed summary that persists after the case
// has moved on to Needs approval.
export function UltronAnalyzingCard({ thread, onDecide, analyzed }: { thread: ThreadItem; onDecide: (threadId: string) => void; analyzed?: boolean }) {
  return (
    <AnalyzingCard role="status" aria-live="polite">
      <AnalyzingBody thread={thread} onDecide={onDecide} analyzed={analyzed} />
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
export function UltronActivityCards({ thread }: { thread: ThreadItem }) {
  const milestones = activityForThread(thread);
  const total = milestones.length;
  const executing = thread.status === 'in_progress';
  const resolved = thread.status === 'resolved' || thread.status === 'auto_resolved';

  // Completed reasoning steps shown while awaiting a decision (all milestones
  // when the timeline carries no done flags — mirrors the prior reasoning trail).
  const doneCount = thread.timeline.filter(s => s.done).length;
  const reasoningCount = doneCount > 0 ? Math.min(doneCount, total) : total;

  // Revealed-card count: seeded with the reasoning steps, then only ever grows
  // toward the full trail. Because this component stays mounted across phases,
  // the count persists — so acting on a case appends new cards rather than
  // clearing and re-growing the trail from scratch.
  const [count, setCount] = useState(reasoningCount);
  const target = executing || resolved ? total : reasoningCount;

  useEffect(() => {
    if (count >= target) return;
    const t = setTimeout(() => setCount(c => c + 1), ACTIVITY_STEP_MS);
    return () => clearTimeout(t);
  }, [count, target]);

  // The newest card types its headline out only while Ultron is actively working
  // AND only for steps revealed beyond the settled reasoning — so taking an
  // action appends-and-types new cards without re-typing the ones already shown.
  const typingIndex = executing && count > reasoningCount ? count - 1 : undefined;

  return <ActivityTrailCards milestones={milestones} revealCount={count} typingIndex={typingIndex} />;
}


// ── Styled ───────────────────────────────────────────────────────────────────

const Card = styled.div<{ $expanded: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  /* Collapsed cards sit flat (no shadow); an expanded card rests with a shadow.
     Hovering any card lifts it with an enhanced shadow + a subtle rise. */
  box-shadow: ${p => (p.$expanded ? 'var(--shadow-below-md)' : 'none')};
  overflow: hidden;
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);

  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-below-md);
  }

  /* Gradient border ring: a 1px tonal line that fades right → left (full color
     at the right edge, transparent at the left). Painted on a ::before whose
     fill is masked to just the border band, so it respects the rounded corners
     (border-image would square them off). Only the expanded card paints it
     (darker -border-secondary, per data-tone below); collapsed cards stay
     borderless. */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
    pointer-events: none;
    transition: background var(--duration-fast) var(--ease-out);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
    &::before { transition: none; }
  }

  /* Semantic card tone: high severity → orange, resolved-family → green,
     everything else (medium / low / none) → slate. */
  /* Collapsed cards take a flat tonal fill (the tone's bg-tertiary, no
     gradient); expanded cards keep the soft tonal glow layered on the base bg. */
  &[data-tone='orange'] {
    ${p => (p.$expanded
      ? `background-image:
          radial-gradient(120% 120% at 0% 0%, color-mix(in srgb, var(--color-orange-bg-secondary) 18%, transparent) 0%, transparent 60%),
          linear-gradient(color-mix(in srgb, var(--color-orange-bg-secondary) 8%, transparent), color-mix(in srgb, var(--color-orange-bg-secondary) 8%, transparent));`
      : `background-image: none;
         background-color: var(--color-orange-bg-tertiary);`)}
    &::before { background: ${p => (p.$expanded
      ? 'linear-gradient(to left, var(--color-orange-border-secondary) 0%, color-mix(in srgb, var(--color-orange-border-secondary) 35%, transparent) 100%)'
      : 'transparent')}; }
  }
  &[data-tone='green'] {
    ${p => (p.$expanded
      ? `background-image:
          radial-gradient(120% 120% at 0% 0%, color-mix(in srgb, var(--color-green-bg-secondary) 18%, transparent) 0%, transparent 60%),
          linear-gradient(color-mix(in srgb, var(--color-green-bg-secondary) 8%, transparent), color-mix(in srgb, var(--color-green-bg-secondary) 8%, transparent));`
      : `background-image: none;
         background-color: var(--color-green-bg-tertiary);`)}
    /* Resolved (green) cases never paint the tonal border — in any state. */
    &::before { background: transparent; }
  }
  &[data-tone='slate'] {
    ${p => (p.$expanded
      ? `background-image:
          radial-gradient(120% 120% at 0% 0%, color-mix(in srgb, var(--color-slate-bg-secondary) 18%, transparent) 0%, transparent 60%),
          linear-gradient(color-mix(in srgb, var(--color-slate-bg-secondary) 8%, transparent), color-mix(in srgb, var(--color-slate-bg-secondary) 8%, transparent));`
      : `background-image: none;
         background-color: var(--color-slate-bg-tertiary);`)}
    &::before { background: ${p => (p.$expanded
      ? 'linear-gradient(to left, var(--color-slate-border-secondary) 0%, color-mix(in srgb, var(--color-slate-border-secondary) 35%, transparent) 100%)'
      : 'transparent')}; }
  }
`;

/* Detached actionable card — the prompt + decision buttons, docked at the page
   bottom. Solid surface with a lift shadow so it reads above the scrolling feed.
   A left tonal accent ties it back to the event it acts on. */
const ActionCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-below-high);

  /* Reserve room so the prompt never slides under the absolute dismiss button. */
  > p { padding-right: var(--space-8); }

  &[data-tone='orange'] { border-color: var(--color-orange-border-secondary); }
  &[data-tone='green']  { border-color: var(--color-green-border-secondary); }
  &[data-tone='slate']  { border-color: var(--color-slate-border-secondary); }
`;

/* Keyboard hint under the action row — Alloy paragraph / small, muted. */
const SkipHint = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-inverse-tertiary);
`;

/* Dismiss button — pinned to the card's top-right corner, inset by the card padding. */
const DismissSlot = styled.div`
  position: absolute;
  top: var(--space-3);
  right: var(--space-3);
`;

/* The whole header is the accordion toggle — a real button reset to look like
   the row it replaces. */
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
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
  gap: var(--space-5);
  padding: var(--space-3);
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

/* Mark + text row — the orbit mark centers on the headline + assessment. */
const AnalyzingRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`;

/* Detached analyzing surface — the in-card thinking block lifted into its own
   card below the event card. Same radius as <Card>, a small drop shadow, no
   border line. */
const AnalyzingCard = styled(Analyzing)`
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-below-md);
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

/* Accumulating thinking-stream — indented to align under the headline text
   (past the 40px mark + space-3 gap). */
const Stream = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-left: calc(40px + var(--space-3));
`;

/* Each step slides up + fades in as it arrives (so the card grows). */
const streamIn = keyframes`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`;

const StreamRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  animation: ${streamIn} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const StreamMark = styled.span<{ $done?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${p => (p.$done ? 'var(--color-success-content)' : 'var(--color-content-tertiary)')};
`;

const StreamText = styled.span<{ $done?: boolean }>`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: ${p => (p.$done ? 'var(--color-content-tertiary)' : 'var(--color-content-secondary)')};
`;

/* DEMO ONLY — manual trigger to flip an analyzing case to Needs approval.
   Indented to line up under the headline/assessment (past the 40px mark). */
const DemoTrigger = styled(Button)`
  align-self: flex-start;
  margin-left: calc(40px + var(--space-3));
`;

/* Animated trailing ellipsis — three dots blink in sequence. */
const blink = keyframes`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`;

const Dots = styled.span`
  & > span {
    animation: ${blink} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`;

/* Vertical stack of context record cards (e.g. ranked candidate matches). */
const RecordList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
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
`;

const Pill = styled(Button)`
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);

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
