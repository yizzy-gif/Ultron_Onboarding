/* ─────────────────────────────────────────────────────────────────────────────
   Stage 5 — Provisioning run.

   A THIN ADAPTER over the existing Ultron processing UI (ActivityTrailCards).
   It does NOT build a new progress view — it maps the provisioning log's
   runnable() entries into Ultron's ActivityMilestone shape and drives them
   through the same trail renderer the product already uses.

   Each mutation entry drives one real endpoint (mocked here). On failure we
   PAUSE — never roll back: completed steps stay done, and the failed step shows
   its translated (admin-readable) error inline with per-step Retry / Skip.
   Replay is idempotent — createdIds accumulate on the entry, so a retry only
   creates what's missing (see logStore.setExec).

   Ultron's positional trail has no native "failed" state, so the failed step is
   lifted out of the trail into a dedicated failure card while paused; on retry
   or skip it rejoins the trail as succeeded/skipped and the run continues.
   ───────────────────────────────────────────────────────────────────────────── */

import { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  Button, Tag,
  AlertTriangleIcon, CheckCircleIcon, CircularArrowIcon, ArrowNarrowRightIcon, ChevronLeftIcon,
} from 'alloy-design-system';
import { AgentMark } from '../../Ultron';
import { ActivityTrailCards } from '../../Ultron/ActivityTrail';
import type { ActivityMilestone, ActivityUsage, UsageIconKey, WorkingIcon } from '../../Ultron/fixtures';
import type { ProvisioningStore } from '../logStore';
import type { MutationEntry, MutationDomain } from '../provisioningLog';
import { OP_VERB, SOURCE_LABEL, DOMAIN_LABEL } from '../shared';

interface Stage5Props {
  store: ProvisioningStore;
  // Enters the live Ultron app on completion. Optional for now — the Ultron
  // event pages are disabled, so the flow rests on the completion screen and
  // the "Enter your account" CTA is hidden when this is omitted.
  onDone?: () => void;
  onBack: () => void;
}

// How long each step "runs" before it settles — a touch quicker than Ultron's
// live cadence so the whole account provisions at a watchable pace.
const STEP_MS = 1200;

type RunPhase = 'running' | 'paused' | 'done';

// ── Endpoint / icon maps — the real product surfaces each domain drives ───────

const ENDPOINT: Record<MutationDomain, string> = {
  role: 'POST /roles',
  rateRule: 'POST /rate-rules',
  rateValue: 'PATCH /pay-rates',
  policy: 'POST /policies',
  customField: 'POST /custom-fields',
  scheduling: 'PATCH /scheduling',
  scoringRule: 'POST /scoring-rules',
  evaluation: 'POST /evaluations',
  permission: 'POST /permissions',
  user: 'POST /users',
};

const TRAIL_ICON: Record<MutationDomain, WorkingIcon> = {
  role: 'edit', user: 'edit', customField: 'edit',
  rateRule: 'rate', rateValue: 'rate',
  permission: 'alert',
  policy: 'done',
  scheduling: 'clock',
  scoringRule: 'chart', evaluation: 'chart',
};

const USAGE_ICON: Record<MutationDomain, UsageIconKey> = {
  role: 'record', user: 'record', customField: 'record',
  rateRule: 'analytics', rateValue: 'analytics', scoringRule: 'analytics', evaluation: 'analytics',
  permission: 'shield',
  policy: 'policy',
  scheduling: 'schedule',
};

// Translated, admin-readable failures — never a raw code/stack.
const ERROR_FOR: Partial<Record<MutationDomain, { code: string; message: string }>> = {
  permission: {
    code: 'PERMISSION_CONFLICT',
    message: 'A conflicting approval permission already exists for this role. Retry to merge it, or skip and resolve it later in Settings.',
  },
};
const DEFAULT_ERROR = {
  code: 'PROVISION_TIMEOUT',
  message: 'This step timed out talking to the account service. Your other changes are safe — retry this one, or skip it for now.',
};

export function Stage5Provision({ store, onDone, onBack }: Stage5Props) {
  // Snapshot the run order once — the run replays THIS list; exec state layers on
  // via the log store so the folds stay the source of truth.
  const [steps] = useState<MutationEntry[]>(() => store.toRun);
  const [cursor, setCursor] = useState(0);
  const [phase, setPhase] = useState<RunPhase>(steps.length ? 'running' : 'done');

  // Steps that have already had their (single) scripted failure — so a retry
  // succeeds. Demo device only; a real run fails on the real endpoint's result.
  const attempted = useRef<Set<string>>(new Set());
  // Inject one failure to exercise the pause/Retry/Skip path — the first access
  // (permission) step, else the 3rd step, else none.
  const failIndex = useMemo(() => {
    const p = steps.findIndex(s => s.target.domain === 'permission');
    return p >= 0 ? p : steps.length > 2 ? 2 : -1;
  }, [steps]);

  const { setExec } = store;

  // The driver — advances the run one step at a time. Re-runs when the phase or
  // cursor changes; setExec is stable so it doesn't retrigger on log updates.
  useEffect(() => {
    if (phase !== 'running') return;
    if (cursor >= steps.length) { setPhase('done'); return; }
    const step = steps[cursor];
    setExec(step.id, { state: 'running', endpoint: ENDPOINT[step.target.domain] });
    const t = window.setTimeout(() => {
      const willFail = cursor === failIndex && !attempted.current.has(step.id);
      if (willFail) {
        attempted.current.add(step.id);
        setExec(step.id, {
          state: 'failed',
          error: ERROR_FOR[step.target.domain] ?? DEFAULT_ERROR,
        });
        setPhase('paused');
      } else {
        setExec(step.id, {
          state: 'succeeded',
          createdIds: [`${step.target.domain}_${step.id}`],
        });
        setCursor(c => c + 1);
      }
    }, STEP_MS);
    return () => window.clearTimeout(t);
  }, [phase, cursor, steps, failIndex, setExec]);

  const retry = (id: string) => { setExec(id, { state: 'pending' }); setPhase('running'); };
  const skip = (id: string) => { setExec(id, { state: 'skipped' }); setCursor(c => c + 1); setPhase('running'); };

  // Live entries (exec state updates as the run proceeds).
  const liveById = useMemo(() => new Map(store.log.map(e => [e.id, e])), [store.log]);

  // Which steps feed the Ultron trail: everything resolved so far, plus the
  // running step. The failed step is lifted out into the failure card below.
  const trailSteps =
    phase === 'done' ? steps
    : phase === 'running' ? steps.slice(0, cursor + 1)
    : steps.slice(0, cursor); // paused → exclude the failed current step
  const milestones: ActivityMilestone[] = trailSteps.map(s => toMilestone(s, liveById.get(s.id)));
  const focusIndex = phase === 'running' ? cursor : undefined;

  const failedStep = phase === 'paused' ? steps[cursor] : null;
  const failedEntry = failedStep ? liveById.get(failedStep.id) : null;

  const doneCount = steps.filter(s => {
    const st = liveById.get(s.id)?.exec?.state;
    return st === 'succeeded' || st === 'skipped';
  }).length;

  return (
    <Wrap>
      <Head>
        <HeadInner>
          <TitleRow>
            <Title>
              {phase === 'done'
                ? <CheckCircleIcon size={20} />
                : (
                  // Ultron's own identity — the lines mark — in place of the
                  // generic AI sparkle: animating while the run works, idling
                  // while it's paused on the admin.
                  <AgentMark
                    mark="lines"
                    size={22}
                    tone="auto"
                    state={phase === 'paused' ? 'idle' : 'active'}
                    aria-label="Ultron"
                  />
                )}
              {phase === 'done' ? 'Your account is ready' : phase === 'paused' ? 'Paused on a step that needs you' : 'Provisioning your account'}
            </Title>
            <Tag size="sm" variant="subtle" color={phase === 'paused' ? 'red' : phase === 'done' ? 'green' : 'blue'}>
              {doneCount} of {steps.length} done
            </Tag>
          </TitleRow>
          <Sub>
            {phase === 'done'
              ? 'Every change has been applied to your live account.'
              : 'Ultron is applying each change through the same endpoints the product uses. Completed steps are safe if anything pauses.'}
          </Sub>
        </HeadInner>
      </Head>

      <Scroll>
        <ScrollInner>
          {/* Reused Ultron processing UI */}
          {milestones.length > 0 && (
            <ActivityTrailCards
              milestones={milestones}
              focusIndex={focusIndex}
              running={phase === 'running'}
              hideActions
            />
          )}

          {/* Failure card — pause, don't roll back. */}
          {failedStep && failedEntry && (
            <FailureCard>
              <FailHead>
                <FailIcon><AlertTriangleIcon size={18} /></FailIcon>
                <FailTitleBlock>
                  <FailTitle>{OP_VERB[failedStep.op]} {failedStep.target.label} — couldn't complete</FailTitle>
                  <FailMeta>
                    {DOMAIN_LABEL[failedStep.target.domain]} · {ENDPOINT[failedStep.target.domain]} · drafted by {SOURCE_LABEL[failedStep.source]}
                  </FailMeta>
                </FailTitleBlock>
              </FailHead>
              <FailMessage>{failedEntry.exec?.error?.message}</FailMessage>
              <FailCode>{failedEntry.exec?.error?.code}</FailCode>
              <FailActions>
                <Button variant="primary" size="sm" leadingArtwork={<CircularArrowIcon size={16} />} onClick={() => retry(failedStep.id)}>
                  Retry
                </Button>
                <Button variant="secondary" size="sm" onClick={() => skip(failedStep.id)}>
                  Skip for now
                </Button>
              </FailActions>
            </FailureCard>
          )}
        </ScrollInner>
      </Scroll>

      <Foot>
        <Button variant="tertiary" size="md" leadingArtwork={<ChevronLeftIcon size={16} />} onClick={onBack}>
          Back to build
        </Button>
        {phase === 'done' && onDone && (
          <Button variant="primary" size="lg" trailingArtwork={<ArrowNarrowRightIcon size={18} />} onClick={onDone}>
            Enter your account
          </Button>
        )}
      </Foot>
    </Wrap>
  );
}

// Map one mutation entry into the Ultron trail's milestone shape.
function toMilestone(entry: MutationEntry, live?: MutationEntry): ActivityMilestone {
  const domain = entry.target.domain;
  const endpoint = ENDPOINT[domain];
  const skipped = live?.exec?.state === 'skipped';
  const createdIds = live?.exec?.createdIds ?? [];
  const usage: ActivityUsage = [
    {
      name: `${OP_VERB[entry.op]} ${entry.target.label}`,
      description: `${DOMAIN_LABEL[domain]} · ${endpoint}`,
      icon: USAGE_ICON[domain] ?? 'record',
      summary: skipped
        ? 'Skipped — resolve later in Settings.'
        : `Applied via ${endpoint}.`,
      recordDetails: [
        { label: 'Endpoint', value: endpoint },
        { label: 'Change', value: `${OP_VERB[entry.op]} ${entry.target.label}` },
        { label: 'Attributed to', value: SOURCE_LABEL[entry.source] },
        ...(createdIds.length ? [{ label: 'Created', value: createdIds.join(', '), emphasis: 'success' as const }] : []),
      ],
    },
  ];
  return {
    icon: TRAIL_ICON[domain] ?? 'edit',
    headline: `${OP_VERB[entry.op]} ${entry.target.label}${skipped ? ' · skipped' : ''}`,
    blocks: [{ text: `${DOMAIN_LABEL[domain]} · ${endpoint}` }],
    progress: [skipped ? 'Skipped' : `Applied via ${endpoint}`],
    usage,
  };
}

// ── Styled ───────────────────────────────────────────────────────────────────

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;

const Head = styled.div`
  flex-shrink: 0;
  border-bottom: 1px solid var(--color-border-opaque);
`;

const HeadInner = styled.div`
  max-width: 760px;
  margin: 0 auto;
  width: 100%;
  padding: var(--space-6) var(--space-6) var(--space-5);
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`;

const Sub = styled.p`
  margin: var(--space-2) 0 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`;

const Scroll = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`;

const ScrollInner = styled.div`
  max-width: 760px;
  margin: 0 auto;
  width: 100%;
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`;

const FailureCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-5);
  background: var(--color-error-bg);
  border: 1px solid var(--color-error-border);
  border-radius: var(--radius-lg);
`;

const FailHead = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
`;

const FailIcon = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-error-content);
`;

const FailTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

const FailTitle = styled.div`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`;

const FailMeta = styled.div`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`;

const FailMessage = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`;

const FailCode = styled.code`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-error-content);
`;

const FailActions = styled.div`
  display: flex;
  gap: var(--space-2);
  padding-top: var(--space-1);
`;

const Foot = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-6);
  border-top: 1px solid var(--color-border-opaque);
  background: var(--color-bg-primary);
`;
