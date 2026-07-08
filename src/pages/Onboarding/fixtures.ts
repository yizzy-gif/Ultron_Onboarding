/* Onboarding demo fixtures — templates, signal suggestions, and the mocked AI
   that turns stage-3 chat instructions into provisioning-log mutations.
   DEMO ONLY — no real model; a keyword interpreter stands in for one. */

import type { Signal, Template } from './types';
import type { DraftInput } from './logStore';
import type { MutationDomain } from './provisioningLog';

// ── Stage 1: seed signals (what the composer "ingests") ──────────────────────
// A short canned set the intake composer appends from, so the demo shows the
// solid-evidence / outlined-inference split without a real scraper/parser.

export const SIGNAL_SUGGESTIONS: Record<Signal['kind'], Signal[]> = {
  text: [
    { id: 's_text_shifts', kind: 'text', evidence: 'evidence',  category: 'scheduling', label: '24/7 shift coverage' },
    { id: 's_text_hourly', kind: 'text', evidence: 'evidence',  category: 'pay',        label: 'Hourly workforce' },
    { id: 's_infer_ot',    kind: 'text', evidence: 'inference', category: 'pay',        label: 'Overtime likely', detail: 'Inferred from 24/7 coverage' },
  ],
  url: [
    { id: 's_url_sites',   kind: 'url', evidence: 'evidence',  category: 'facility',   label: '6 locations', detail: 'Scraped from site' },
    { id: 's_infer_multi', kind: 'url', evidence: 'inference', category: 'scheduling', label: 'Multi-site scheduling', detail: 'Inferred from locations page' },
  ],
  file: [
    { id: 's_file_roles',  kind: 'file', evidence: 'evidence',  category: 'role',       label: '4 job titles', detail: 'roster.csv' },
    { id: 's_file_rates',  kind: 'file', evidence: 'evidence',  category: 'pay',        label: 'Differential pay', detail: 'roster.csv' },
    { id: 's_file_cred',   kind: 'file', evidence: 'evidence',  category: 'credential', label: 'Food-handler certs', detail: 'roster.csv' },
    { id: 's_infer_night', kind: 'file', evidence: 'inference', category: 'pay',        label: 'Night differential', detail: 'Inferred from pay columns' },
  ],
};

// Ordered, labelled sub-sections for the "What I know so far" panel.
export const SIGNAL_CATEGORY_ORDER: Signal['category'][] = [
  'role', 'pay', 'scheduling', 'facility', 'credential', 'other',
];
export const SIGNAL_CATEGORY_LABEL: Record<Signal['category'], string> = {
  company: 'Company',
  file: 'Files',
  role: 'Roles & job titles',
  pay: 'Pay',
  scheduling: 'Scheduling',
  facility: 'Facilities',
  credential: 'Credentials',
  other: 'Other',
};

// ── Stage 2: templates ───────────────────────────────────────────────────────

export const TEMPLATES: Template[] = [
  {
    id: 'tpl_medical_staffing',
    name: 'Medical Staffing',
    industry: 'Healthcare',
    match: 94,
    rationale:
      'You run credentialed teams around the clock with shift differentials — this template ships the clinical roles, an overtime + evening/night/weekend differential rate structure, license tracking, and multi-unit scheduling out of the box.',
    tags: ['24/7 shifts', 'Credentialed', 'Shift differentials', 'Multi-unit'],
    sections: [
      {
        key: 'roles',
        title: 'Roles',
        lines: [
          { domain: 'role', label: 'Charge Nurse', detail: 'Credentialed · manager tier' },
          { domain: 'role', label: 'Registered Nurse', detail: 'Credentialed' },
          { domain: 'role', label: 'LPN', detail: 'Credentialed' },
          { domain: 'role', label: 'CNA', detail: 'Hourly' },
        ],
      },
      {
        key: 'rates',
        title: 'Rate rules',
        lines: [
          { domain: 'rateRule', label: 'Overtime', detail: 'After 40h/week' },
          { domain: 'rateRule', label: 'Shift differential', detail: 'Evening / night / weekend' },
          { domain: 'rateValue', label: 'Base hourly rate', locked: true },
          { domain: 'rateValue', label: 'Differential rate', locked: true },
        ],
      },
      {
        key: 'policies',
        title: 'Policies',
        lines: [
          { domain: 'customField', label: 'License / credential tracking' },
          { domain: 'policy', label: 'Meal & rest breaks', detail: 'State default' },
          { domain: 'permission', label: 'Charge-nurse approvals' },
        ],
      },
    ],
    seed: [
      { op: 'add', domain: 'role', ref: 'role.charge_nurse', label: 'Charge Nurse' },
      { op: 'add', domain: 'role', ref: 'role.rn', label: 'Registered Nurse' },
      { op: 'add', domain: 'role', ref: 'role.lpn', label: 'LPN' },
      { op: 'add', domain: 'role', ref: 'role.cna', label: 'CNA' },
      { op: 'add', domain: 'rateRule', ref: 'rate.ot', label: 'Overtime — after 40h/week' },
      { op: 'add', domain: 'rateRule', ref: 'rate.differential', label: 'Shift differential — evening / night / weekend' },
      { op: 'add', domain: 'rateValue', ref: 'rate.base', label: 'Base hourly rate' },
      { op: 'add', domain: 'rateValue', ref: 'rate.diff', label: 'Differential rate' },
      { op: 'add', domain: 'customField', ref: 'cf.credentials', label: 'License / credential tracking' },
      { op: 'add', domain: 'policy', ref: 'policy.breaks', label: 'Meal & rest breaks' },
      { op: 'add', domain: 'permission', ref: 'perm.charge_approvals', label: 'Charge-nurse approvals' },
      { op: 'add', domain: 'scheduling', ref: 'sched.multiunit', label: 'Multi-unit scheduling' },
    ],
  },
  {
    id: 'tpl_stadium_events',
    name: 'Live Event & Stadium',
    industry: 'Live events & venues',
    match: 82,
    rationale:
      'Event-day surges staffed by large, mostly-hourly crews — this template ships the game-day roles, an event-day premium + overtime rate structure, certification tracking for security and alcohol service, and event-based scheduling.',
    tags: ['Event-based', 'Large crews', 'Event premium', 'Certified'],
    sections: [
      {
        key: 'roles',
        title: 'Roles',
        lines: [
          { domain: 'role', label: 'Event Manager', detail: 'Manager tier' },
          { domain: 'role', label: 'Usher', detail: 'Hourly' },
          { domain: 'role', label: 'Ticket Scanner', detail: 'Hourly' },
          { domain: 'role', label: 'Concessions', detail: 'Hourly + tips' },
          { domain: 'role', label: 'Event Security', detail: 'Certified' },
        ],
      },
      {
        key: 'rates',
        title: 'Rate rules',
        lines: [
          { domain: 'rateRule', label: 'Overtime', detail: 'After 40h/week' },
          { domain: 'rateRule', label: 'Event-day premium', detail: 'Game / show days' },
          { domain: 'rateValue', label: 'Base hourly rate', locked: true },
          { domain: 'rateValue', label: 'Event premium rate', locked: true },
        ],
      },
      {
        key: 'policies',
        title: 'Policies',
        lines: [
          { domain: 'customField', label: 'Certification tracking', detail: 'Security · alcohol service' },
          { domain: 'policy', label: 'Meal & rest breaks', detail: 'State default' },
          { domain: 'permission', label: 'Manager approvals' },
        ],
      },
    ],
    seed: [
      { op: 'add', domain: 'role', ref: 'role.event_manager', label: 'Event Manager' },
      { op: 'add', domain: 'role', ref: 'role.usher', label: 'Usher' },
      { op: 'add', domain: 'role', ref: 'role.ticket_scanner', label: 'Ticket Scanner' },
      { op: 'add', domain: 'role', ref: 'role.concessions', label: 'Concessions' },
      { op: 'add', domain: 'role', ref: 'role.event_security', label: 'Event Security' },
      { op: 'add', domain: 'rateRule', ref: 'rate.ot', label: 'Overtime — after 40h/week' },
      { op: 'add', domain: 'rateRule', ref: 'rate.event_premium', label: 'Event-day premium' },
      { op: 'add', domain: 'rateValue', ref: 'rate.base', label: 'Base hourly rate' },
      { op: 'add', domain: 'rateValue', ref: 'rate.event_rate', label: 'Event premium rate' },
      { op: 'add', domain: 'customField', ref: 'cf.certifications', label: 'Certification tracking' },
      { op: 'add', domain: 'policy', ref: 'policy.breaks', label: 'Meal & rest breaks' },
      { op: 'add', domain: 'permission', ref: 'perm.manager_approvals', label: 'Manager approvals' },
      { op: 'add', domain: 'scheduling', ref: 'sched.event', label: 'Event-based scheduling' },
    ],
  },
  {
    id: 'tpl_retail',
    name: 'Retail & Storefront',
    industry: 'Retail',
    match: 61,
    rationale:
      'A leaner storefront template — hourly associates, a single overtime rule, and standard break policies. A good fit if scheduling is simpler and there is no shift-differential structure.',
    tags: ['Hourly', 'Storefront', 'Overtime'],
    sections: [
      {
        key: 'roles',
        title: 'Roles',
        lines: [
          { domain: 'role', label: 'Store Manager', detail: 'Salaried' },
          { domain: 'role', label: 'Sales Associate', detail: 'Hourly' },
        ],
      },
      {
        key: 'rates',
        title: 'Rate rules',
        lines: [
          { domain: 'rateRule', label: 'Overtime', detail: 'After 40h/week' },
          { domain: 'rateValue', label: 'Base hourly rate', locked: true },
        ],
      },
      {
        key: 'policies',
        title: 'Policies',
        lines: [{ domain: 'policy', label: 'Meal & rest breaks', detail: 'State default' }],
      },
    ],
    seed: [
      { op: 'add', domain: 'role', ref: 'role.store_manager', label: 'Store Manager' },
      { op: 'add', domain: 'role', ref: 'role.sales_associate', label: 'Sales Associate' },
      { op: 'add', domain: 'rateRule', ref: 'rate.ot', label: 'Overtime — after 40h/week' },
      { op: 'add', domain: 'rateValue', ref: 'rate.base', label: 'Base hourly rate' },
      { op: 'add', domain: 'policy', ref: 'policy.breaks', label: 'Meal & rest breaks' },
    ],
  },
];

// ── Stage 3: mocked AI interpreter ───────────────────────────────────────────
// Turns a free-text instruction into one or more provisioning-log drafts. A
// keyword table stands in for a real model; each match becomes a DraftInput the
// canvas appends (classified + folded like any change). Returns a spoken reply
// plus the drafts it proposes.

interface AiResponse {
  reply: string;
  drafts: DraftInput[];
}

let aiRefCounter = 0;
const aiRef = (domain: MutationDomain) => `ai.${domain}.${(aiRefCounter++).toString(36)}`;

interface Rule {
  test: RegExp;
  build: (text: string) => { reply: string; draft: DraftInput };
}

const RULES: Rule[] = [
  {
    test: /night|overnight|graveyard/i,
    build: () => ({
      reply: 'Added a night-differential rate rule. Set the multiplier during sign-off — it touches pay, so it needs your approval.',
      draft: { op: 'add', target: { domain: 'rateRule', ref: aiRef('rateRule'), label: 'Night differential rule' }, source: 'ai' },
    }),
  },
  {
    test: /\b(pay|rate|wage|\$\d|per hour|hourly rate|multiplier)\b/i,
    build: (t) => ({
      reply: 'Drafted a pay-rate change. Money is always gated — you\'ll set the value on the sign-off screen.',
      draft: { op: 'update', target: { domain: 'rateValue', ref: aiRef('rateValue'), label: labelFrom(t, 'Pay rate') }, source: 'ai' },
    }),
  },
  {
    test: /\b(role|position|job title|manager|cook|server|nurse|associate|driver)\b/i,
    build: (t) => ({
      reply: 'Added the role to your account draft.',
      draft: { op: 'add', target: { domain: 'role', ref: aiRef('role'), label: labelFrom(t, 'New role') }, source: 'ai' },
    }),
  },
  {
    test: /\b(permission|access|approve|approval|admin)\b/i,
    build: (t) => ({
      reply: 'Drafted a permission change. Access changes are gated — confirm it before we provision.',
      draft: { op: 'add', target: { domain: 'permission', ref: aiRef('permission'), label: labelFrom(t, 'Permission') }, source: 'ai' },
    }),
  },
  {
    test: /\b(pto|time off|vacation|sick|holiday|break|policy|leave)\b/i,
    build: (t) => ({
      reply: 'Added that policy to the draft.',
      draft: { op: 'add', target: { domain: 'policy', ref: aiRef('policy'), label: labelFrom(t, 'Policy') }, source: 'ai' },
    }),
  },
  {
    test: /\b(field|track|custom|license|credential|certification)\b/i,
    build: (t) => ({
      reply: 'Added a custom field to track that.',
      draft: { op: 'add', target: { domain: 'customField', ref: aiRef('customField'), label: labelFrom(t, 'Custom field') }, source: 'ai' },
    }),
  },
  {
    test: /\b(schedul|shift|coverage|rota)\b/i,
    build: (t) => ({
      reply: 'Adjusted your scheduling setup.',
      draft: { op: 'update', target: { domain: 'scheduling', ref: aiRef('scheduling'), label: labelFrom(t, 'Scheduling') }, source: 'ai' },
    }),
  },
  {
    test: /\b(score|scoring|rank|rating|evaluat|review)\b/i,
    build: (t) => ({
      reply: 'Drafted a scoring rule — it\'s built, but flagged for your review in the summary.',
      draft: { op: 'add', target: { domain: 'scoringRule', ref: aiRef('scoringRule'), label: labelFrom(t, 'Scoring rule') }, source: 'ai' },
    }),
  },
];

// Take a short human label out of the instruction, falling back to a default.
function labelFrom(text: string, fallback: string): string {
  const cleaned = text.trim().replace(/\s+/g, ' ');
  if (cleaned.length === 0) return fallback;
  const short = cleaned.length > 42 ? cleaned.slice(0, 42) + '…' : cleaned;
  // Capitalize first letter.
  return short.charAt(0).toUpperCase() + short.slice(1);
}

export function interpretInstruction(text: string): AiResponse {
  const drafts: DraftInput[] = [];
  const replies: string[] = [];
  for (const rule of RULES) {
    if (rule.test.test(text)) {
      const { reply, draft } = rule.build(text);
      drafts.push(draft);
      replies.push(reply);
    }
  }
  if (drafts.length === 0) {
    return {
      reply: "I couldn't map that to a concrete account change yet. Try naming a role, a pay rule, a policy, or a permission — e.g. \"add a night-shift differential\" or \"create a Dispatcher role\".",
      drafts: [],
    };
  }
  return { reply: replies.join(' '), drafts };
}

// A couple of canned opening suggestions for the stage-3 conversation.
export const AUGMENT_SUGGESTIONS = [
  'Add a night-shift differential',
  'Create a Dispatcher role',
  'Give Shift Leads approval permission',
  'Track food-handler certifications',
];
