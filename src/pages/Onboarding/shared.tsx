/* Shared presentation helpers for the provisioning log — how a MutationEntry's
   domain, op, risk, and gate behavior render across stages 3–5. Keeping these in
   one place means the draft tree, gate summary, and run all describe the same
   entry the same way. */

import type { ReactNode } from 'react';
import {
  PlusIcon, Edit01Icon, Trash01Icon,
  Lock01Icon, AlertTriangleIcon, InfoCircleIcon, CheckIcon,
} from 'alloy-design-system';
import type { MutationDomain, MutationOp, RiskTier, GateBehavior } from './provisioningLog';
import type { TagColor } from 'alloy-design-system';

// ── Domain → group label ─────────────────────────────────────────────────────

export const DOMAIN_LABEL: Record<MutationDomain, string> = {
  role: 'Roles',
  rateRule: 'Rate rules',
  rateValue: 'Pay rates',
  policy: 'Policies',
  customField: 'Custom fields',
  scheduling: 'Scheduling',
  scoringRule: 'Scoring rules',
  evaluation: 'Evaluations',
  permission: 'Permissions',
  user: 'People',
};

// Order the draft tree lists domains in (money/access grouped near the top so the
// high-risk material is seen first).
export const DOMAIN_ORDER: MutationDomain[] = [
  'role', 'rateRule', 'rateValue', 'permission', 'user',
  'policy', 'scheduling', 'customField', 'scoringRule', 'evaluation',
];

// ── Op → verb + glyph ────────────────────────────────────────────────────────

export const OP_VERB: Record<MutationOp, string> = {
  add: 'Add',
  update: 'Update',
  remove: 'Remove',
};

export function opIcon(op: MutationOp, size = 14): ReactNode {
  switch (op) {
    case 'add': return <PlusIcon size={size} />;
    case 'update': return <Edit01Icon size={size} />;
    case 'remove': return <Trash01Icon size={size} />;
  }
}

// ── Risk → tag color ─────────────────────────────────────────────────────────

export const RISK_COLOR: Record<RiskTier, TagColor> = {
  high: 'red',
  medium: 'orange',
  low: 'green',
};

export const RISK_LABEL: Record<RiskTier, string> = {
  high: 'High risk',
  medium: 'Medium',
  low: 'Low',
};

// ── Gate behavior → plain-language status ─────────────────────────────────────

export const GATE_LABEL: Record<GateBehavior, string> = {
  auto: 'Built',
  notify: 'Built · flagged',
  gate: 'Needs sign-off',
};

export function gateIcon(behavior: GateBehavior, size = 14): ReactNode {
  switch (behavior) {
    case 'auto': return <CheckIcon size={size} />;
    case 'notify': return <InfoCircleIcon size={size} />;
    case 'gate': return <AlertTriangleIcon size={size} />;
  }
}

// ── Source → attribution label ───────────────────────────────────────────────

export const SOURCE_LABEL: Record<'ai' | 'admin' | 'template', string> = {
  ai: 'Ultron',
  admin: 'You',
  template: 'Template',
};

export { Lock01Icon };
