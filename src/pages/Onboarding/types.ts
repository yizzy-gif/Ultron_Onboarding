/* Onboarding-local types. The provisioning mutation model lives in
   provisioningLog.ts; these describe the stage-1/2 intake + template layer that
   feeds it. */

import type { MutationDomain } from './provisioningLog';

// ── Wizard spine ────────────────────────────────────────────────────────────

// Template selection and augment happen inline on the intro build page (Ultron
// recommends a starting point, then the chat splits into the augment canvas),
// and provisioning starts straight from there — so the numbered wizard is just
// the provisioning run.
export type StageId = 1;

export interface StageDef {
  id: StageId;
  key: string;
  title: string;
  // Short label shown in the stepper spine.
  short: string;
}

export const STAGES: StageDef[] = [
  { id: 1, key: 'provision', title: 'Provisioning your account', short: 'Provision' },
];

// ── Stage 1 — signals intake ─────────────────────────────────────────────────

export type SignalKind = 'text' | 'url' | 'file';

// A signal is either hard evidence (something the admin supplied directly:
// pasted text, a scraped URL, an uploaded file) or an AI inference drawn from
// that evidence. Solid chip = evidence, outlined chip = inference.
export type SignalEvidence = 'evidence' | 'inference';

// What a signal is ABOUT — drives how it's grouped in the "What I know so far"
// panel. `company` (the scraped org identity) and `file` (an imported document)
// are special-cased into the header / files strip; the rest fold into typed
// sub-sections.
export type SignalCategory =
  | 'company'
  | 'file'
  | 'role'
  | 'pay'
  | 'facility'
  | 'credential'
  | 'scheduling'
  | 'other';

export interface Signal {
  id: string;
  kind: SignalKind;
  evidence: SignalEvidence;
  category: SignalCategory;
  label: string;
  // Optional detail (the URL, the filename, the inference rationale).
  detail?: string;
}

// ── Stage 2 — template match ─────────────────────────────────────────────────

// A single line inside a template's read-only breakdown. Rate values are shown
// empty + locked (the admin fills them during augment / sign-off).
export interface TemplateLine {
  domain: MutationDomain;
  label: string;
  // e.g. "3 roles", "OT after 40h", or a locked money placeholder.
  detail?: string;
  // Money lines render an empty, locked field rather than a value.
  locked?: boolean;
}

export interface TemplateSection {
  key: string;
  title: string;
  lines: TemplateLine[];
}

export interface Template {
  id: string;
  name: string;
  industry: string;
  // 0–100 match against the intake signals.
  match: number;
  // Plain-language reason this template fits.
  rationale: string;
  // Tags that mirror the intake signals ("night shifts", "hourly", …).
  tags: string[];
  // Read-only breakdown shown in "Preview contents".
  sections: TemplateSection[];
  // The seed mutations this template lays down when chosen (fed into the log).
  seed: TemplateSeed[];
}

// A template's contribution to the provisioning log: a bare draft the log store
// classifies + folds like any AI/admin change.
export interface TemplateSeed {
  op: 'add';
  domain: MutationDomain;
  ref: string;
  label: string;
  payload?: unknown;
}
