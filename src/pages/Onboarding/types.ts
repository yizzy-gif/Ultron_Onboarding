/* Onboarding-local types. The provisioning mutation model lives in
   provisioningLog.ts; these describe the stage-1/2 intake + template layer that
   feeds it. */

import type { MutationDomain } from './provisioningLog';

// ── Wizard spine ────────────────────────────────────────────────────────────

export type StageId = 1 | 2 | 3 | 4 | 5;

export interface StageDef {
  id: StageId;
  key: string;
  title: string;
  // Short label shown in the stepper spine.
  short: string;
}

export const STAGES: StageDef[] = [
  { id: 1, key: 'signals',  title: 'Tell us about your operation', short: 'Signals' },
  { id: 2, key: 'template', title: 'Pick a starting point',         short: 'Template' },
  { id: 3, key: 'augment',  title: 'Shape your account',            short: 'Augment' },
  { id: 4, key: 'confirm',  title: 'Review & sign off',             short: 'Confirm' },
  { id: 5, key: 'provision',title: 'Provisioning your account',     short: 'Provision' },
];

// ── Stage 1 — signals intake ─────────────────────────────────────────────────

export type SignalKind = 'text' | 'url' | 'file';

// A signal is either hard evidence (something the admin supplied directly:
// pasted text, a scraped URL, an uploaded file) or an AI inference drawn from
// that evidence. Solid chip = evidence, outlined chip = inference.
export type SignalEvidence = 'evidence' | 'inference';

export interface Signal {
  id: string;
  kind: SignalKind;
  evidence: SignalEvidence;
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
