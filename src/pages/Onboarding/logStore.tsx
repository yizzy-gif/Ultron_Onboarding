/* ─────────────────────────────────────────────────────────────────────────────
   Onboarding — shared provisioning-log store hook.

   The single source of truth for stages 3–5. Every screen is a pure FOLD over
   this append-only log (see provisioningLog.ts). There is no parallel state:
   the draft tree, the gate summary, and the provisioning run are all derived
   from `log` via the exported selectors.

   Called once at the top of the onboarding flow (OnboardingApp) so every stage
   shares one log. DEMO ONLY — in-memory, no backend (stage 5's server-side
   persistence is stubbed as a no-op comment where the write would go).
   ───────────────────────────────────────────────────────────────────────────── */

import { useCallback, useMemo, useState } from 'react';
import {
  type ProvisioningLog,
  type MutationEntry,
  type MutationOp,
  type MutationTarget,
  type ResolutionState,
  type ExecResult,
  classify,
  activeEntries,
  canProvision,
  gateBuckets,
  runnable,
} from './provisioningLog';

// The shape a caller supplies when proposing a change on the canvas. Everything
// the classifier/fold layer adds (id, seq, risk, gateBehavior, resolution) is
// derived here so callers only describe the change itself.
export interface DraftInput {
  op: MutationOp;
  target: MutationTarget;
  payload?: unknown;
  source?: MutationEntry['source'];
}

export interface ProvisioningStore {
  log: ProvisioningLog;

  // ── Derived folds (every screen consumes these, never `log` raw) ──────────
  active: MutationEntry[];
  buckets: ReturnType<typeof gateBuckets>;
  provisionReady: boolean;
  toRun: MutationEntry[];

  // ── Stage 3 — draft + undo ────────────────────────────────────────────────
  /** Append a proposed change. Returns the created entry so the caller can
   *  reference its id/ref for a follow-up re-target. Risk + gate behavior come
   *  from classify() — money/access/user are hard-pinned high and cannot be
   *  argued down. */
  append: (input: DraftInput) => MutationEntry;
  /** Undo the most recent active entry (mark `undone`; folds skip it). */
  undo: () => void;
  /** Undo a specific entry by id (the per-row revert control). */
  undoEntry: (id: string) => void;
  /** Is there anything to undo? */
  canUndo: boolean;

  // ── Stage 4 — review / sign-off ───────────────────────────────────────────
  /** Resolve (or re-open) a high-risk gate entry — the sign-off block writes
   *  this when the admin sets rates / confirms access. */
  setResolution: (id: string, resolution: ResolutionState) => void;

  // ── Stage 5 — execution ───────────────────────────────────────────────────
  /** Layer an execution result onto an entry as the provisioning run touches it.
   *  Merges into any existing exec so a retry preserves prior createdIds
   *  (idempotent replay). */
  setExec: (id: string, exec: Partial<ExecResult>) => void;
  /** Reset the whole log (start over). */
  reset: () => void;
}

let seqCounter = 0;
let idCounter = 0;
const nextSeq = () => seqCounter++;
const nextId = () => `m${(idCounter++).toString(36)}`;

/** Build a fully-classified entry from a bare draft. This is the ONE place risk
 *  is assigned, so the money/access/user hard-pin lives in exactly one spot. */
export function draftEntry(input: DraftInput): MutationEntry {
  const { risk, gateBehavior } = classify(input.target.domain);
  return {
    id: nextId(),
    seq: nextSeq(),
    op: input.op,
    target: input.target,
    payload: input.payload ?? null,
    source: input.source ?? 'ai',
    risk,
    gateBehavior,
    // High-risk (gate) entries block the Provision button until reviewed;
    // low/medium have nothing for the admin to do.
    resolution: gateBehavior === 'gate' ? 'unresolved' : 'not-required',
  };
}

export function useProvisioningLog(seed: DraftInput[] = []): ProvisioningStore {
  const [log, setLog] = useState<ProvisioningLog>(() => seed.map(draftEntry));

  const append = useCallback((input: DraftInput) => {
    const entry = draftEntry(input);
    setLog(prev => [...prev, entry]);
    return entry;
  }, []);

  const undoEntry = useCallback((id: string) => {
    setLog(prev => prev.map(e => (e.id === id ? { ...e, undone: true } : e)));
  }, []);

  const undo = useCallback(() => {
    setLog(prev => {
      const active = prev.filter(e => !e.undone).sort((a, b) => a.seq - b.seq);
      const last = active[active.length - 1];
      if (!last) return prev;
      return prev.map(e => (e.id === last.id ? { ...e, undone: true } : e));
    });
  }, []);

  const setResolution = useCallback((id: string, resolution: ResolutionState) => {
    setLog(prev => prev.map(e => (e.id === id ? { ...e, resolution } : e)));
  }, []);

  const setExec = useCallback((id: string, exec: Partial<ExecResult>) => {
    // Persist server-side here once stage 5 starts — a partial-failure pause may
    // outlive the session (DEMO: in-memory only).
    setLog(prev =>
      prev.map(e => {
        if (e.id !== id) return e;
        const prevExec = e.exec ?? { state: 'pending' as const };
        return {
          ...e,
          exec: {
            ...prevExec,
            ...exec,
            // Union createdIds so a retry only adds the missing objects.
            createdIds: [
              ...(prevExec.createdIds ?? []),
              ...(exec.createdIds ?? []),
            ].filter((v, i, a) => a.indexOf(v) === i),
          },
        };
      }),
    );
  }, []);

  const reset = useCallback(() => setLog([]), []);

  // Folds — recomputed from the log on every change. These ARE the screens'
  // state; nothing derived is stored.
  const active = useMemo(() => activeEntries(log), [log]);
  const buckets = useMemo(() => gateBuckets(log), [log]);
  const provisionReady = useMemo(() => canProvision(log) && active.length > 0, [log, active.length]);
  const toRun = useMemo(() => runnable(log), [log]);

  return {
    log,
    active,
    buckets,
    provisionReady,
    toRun,
    append,
    undo,
    undoEntry,
    canUndo: active.length > 0,
    setResolution,
    setExec,
    reset,
  };
}
