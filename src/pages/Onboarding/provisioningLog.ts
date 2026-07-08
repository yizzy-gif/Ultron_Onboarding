// Provisioning mutation log — the single source of truth for stages 3–5.
//
// Design contract:
//   • The log is an append-only, ordered list of MutationEntry.
//   • Each entry only GAINS fields as it moves through stages; it is never
//     rewritten in place. Optional fields = "not reached that stage yet".
//   • Every consumer is a pure fold over this list:
//       - Augment draft tree  = fold(entries) ignoring undone
//       - Undo                = mark last active entry `undone`, re-fold
//       - Gate summary         = groupBy(entry.risk) + resolution filter
//       - Provisioning run     = replay entries where exec is runnable
//   • Replay is idempotent: an entry records the IDs it created, so re-running
//     a partially-applied step creates only what is missing.

// ── Stage 3: DRAFTED ────────────────────────────────────────────────
// Written the moment the AI (or the admin) proposes a change on the canvas.

export type MutationOp = 'add' | 'update' | 'remove';

// What part of the account this touches. Drives both the draft-tree renderer
// and the risk classifier. Extend as the account schema grows.
export type MutationDomain =
  | 'role'
  | 'rateRule'        // fallback chain / OT / holiday / differential structure
  | 'rateValue'       // actual money — always high-risk
  | 'policy'
  | 'customField'
  | 'scheduling'
  | 'scoringRule'
  | 'evaluation'
  | 'permission'      // access — always high-risk
  | 'user';           // provisioning real people — always high-risk

export interface MutationTarget {
  domain: MutationDomain;
  // Stable ID so a later instruction ("make night multiplier 1.4") can target
  // this exact entry and re-diff it. Mirrors your node-ID-for-AI-targeting pattern.
  ref: string;
  // Human label shown in the draft row and gate summary, e.g. "Shift-incentive scoring".
  label: string;
}

// ── Stage 3: CLASSIFIED ─────────────────────────────────────────────
// Assigned at draft time so risk tags are visible on the canvas immediately.

export type RiskTier = 'low' | 'medium' | 'high';

// low    → build silently
// medium → build, but flag in the gate summary ("built · flagged")
// high   → do not build until resolved ("needs sign-off")
export type GateBehavior = 'auto' | 'notify' | 'gate';

// ── Stage 4: REVIEWED ───────────────────────────────────────────────
// Only high-risk (gate) entries need this. low/medium are 'not-required'.

export type ResolutionState =
  | 'not-required'    // low/medium — nothing for the admin to do
  | 'unresolved'      // high — blocks the Provision button
  | 'resolved';       // high — admin set rates / confirmed access

// ── Stage 5: EXECUTED ───────────────────────────────────────────────
// Layered on during the provisioning run.

export type ExecState =
  | 'pending'
  | 'running'
  | 'succeeded'
  | 'failed'
  | 'skipped';

export interface ExecResult {
  state: ExecState;
  // The real endpoint this entry drove — the "same endpoints the front end uses".
  endpoint?: string;         // e.g. "POST /roles"
  // IDs created by this entry. Presence makes replay idempotent: a retry
  // creates only the objects not already in this array.
  createdIds?: string[];
  // Translated, admin-readable failure — never a raw stack/only a code.
  error?: { code: string; message: string };
}

// ── The entry, across its whole life ────────────────────────────────

export interface MutationEntry {
  // Stage 3 — drafted
  id: string;                    // entry ID (distinct from target.ref)
  seq: number;                   // order in the log; drives fold + replay order
  op: MutationOp;
  target: MutationTarget;
  payload: unknown;              // the change itself (typed per domain in practice)
  source: 'ai' | 'admin' | 'template';
  undone?: boolean;              // set by undo; folds skip these

  // Stage 3 — classified
  risk: RiskTier;
  gateBehavior: GateBehavior;

  // Stage 4 — reviewed (only meaningful when gateBehavior === 'gate')
  resolution: ResolutionState;

  // Stage 5 — executed (absent until the provisioning run touches it)
  exec?: ExecResult;
}

export type ProvisioningLog = MutationEntry[];

// ── Derived selectors (the folds every screen uses) ─────────────────

export const activeEntries = (log: ProvisioningLog) =>
  log.filter(e => !e.undone).sort((a, b) => a.seq - b.seq);

// Stage 4 gate: the Provision button watches this.
export const canProvision = (log: ProvisioningLog) =>
  activeEntries(log).every(e => e.resolution !== 'unresolved');

// Stage 4 gate: the three count-strip buckets.
export const gateBuckets = (log: ProvisioningLog) => {
  const a = activeEntries(log);
  return {
    auto:   a.filter(e => e.gateBehavior === 'auto'),
    notify: a.filter(e => e.gateBehavior === 'notify'),
    gate:   a.filter(e => e.gateBehavior === 'gate'),
  };
};

// Stage 5: what the run should (re)attempt, in order. Succeeded/skipped are done.
export const runnable = (log: ProvisioningLog) =>
  activeEntries(log).filter(
    e => !e.exec || e.exec.state === 'pending' || e.exec.state === 'failed',
  );

// ── Example classifier (rule table + model backstop) ────────────────
// Keep the money/access rules hard-coded so they can't be argued down;
// let the model assign only within the remaining space, never above it.
export const classify = (domain: MutationDomain): { risk: RiskTier; gateBehavior: GateBehavior } => {
  switch (domain) {
    case 'rateValue':
    case 'rateRule':
    case 'permission':
    case 'user':
      return { risk: 'high', gateBehavior: 'gate' };
    case 'scoringRule':
    case 'evaluation':
      return { risk: 'medium', gateBehavior: 'notify' };
    default:
      return { risk: 'low', gateBehavior: 'auto' };
  }
};
