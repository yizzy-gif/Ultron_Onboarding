/* Onboarding demo fixtures — templates, signal suggestions, and the mocked AI
   that turns stage-3 chat instructions into provisioning-log mutations.
   DEMO ONLY — no real model; a keyword interpreter stands in for one. */

import type { Signal, Template } from './types';
import type { DraftInput } from './logStore';
import type { MutationDomain } from './provisioningLog';
import { classify } from './provisioningLog';

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

// ── Granular recommendation templates ────────────────────────────────────────
// Ultron recommends at the SUBVERTICAL level, not the top-level industry:
// "healthcare staffing" is never the template — "anesthesia staffing",
// "long-term care nursing", "travel nursing" are. Each niche carries its own
// display copy (subvertical name, vertical, rationale, tags) and references a
// base TEMPLATES entry for the account seed + preview breakdown it lays down, so
// the recommendation reads at niche granularity while the underlying
// provisioning reuses the vetted seed for that vertical.

export interface RecTemplate {
  id: string;
  /** The subvertical — the actual template name (e.g. "Long-Term Care Nursing"). */
  name: string;
  /** The top-level vertical this niche rolls up to (shown as the kicker). */
  vertical: string;
  /** 0–100 confidence the niche matches the mapped operation. */
  match: number;
  /** Plain-language reason this niche fits. */
  rationale: string;
  /** Signal-mirroring tags. */
  tags: string[];
  /** TEMPLATES id supplying the seed mutations + preview sections. */
  baseId: string;
}

const HC = 'Healthcare staffing';
const HOSP = 'Hospitality';
const CON = 'Construction';
const STAFF = 'Staffing';
const ENT = 'Enterprise multi-site';

export const REC_TEMPLATES: Record<string, RecTemplate> = {
  // Healthcare staffing → subverticals (all seed from the medical staffing base).
  anesthesia: { id: 'rec_anesthesia', name: 'Anesthesia Staffing', vertical: HC, match: 91, baseId: 'tpl_medical_staffing',
    rationale: 'CRNA and anesthesiologist coverage with case-based scheduling, stipends, and tight credential gating — the roles, differential structure, and license tracking ship configured for the OR.',
    tags: ['Case-based', 'CRNA / MD', 'Credential-gated', 'Stipends'] },
  ltc: { id: 'rec_ltc', name: 'Long-Term Care Nursing', vertical: HC, match: 94, baseId: 'tpl_medical_staffing',
    rationale: 'Resident-facing care around the clock with hard staffing ratios — 24/7 rotating shifts, evening/night/weekend differentials, and CNA/med-tech certification tracking out of the box.',
    tags: ['24/7 ratios', 'CNA / med tech', 'Shift differentials', 'Certification tracking'] },
  travel: { id: 'rec_travel', name: 'Travel Nursing', vertical: HC, match: 93, baseId: 'tpl_medical_staffing',
    rationale: 'Contract clinicians on 8–13 week assignments across facilities — per-assignment pay packages, multi-facility credential holds, and float-pool scheduling ship configured.',
    tags: ['Contract', 'Multi-facility', 'Pay packages', 'Credential holds'] },
  allied: { id: 'rec_allied', name: 'Allied Health Per-Diem', vertical: HC, match: 88, baseId: 'tpl_medical_staffing',
    rationale: 'Per-diem techs and therapists self-scheduling open shifts — light-touch onboarding, competency gating, and shift differentials tuned for a large, uneven float pool.',
    tags: ['Per-diem', 'Self-scheduling', 'Competency-gated', 'Float pool'] },
  federal: { id: 'rec_federal', name: 'Federal / Military Healthcare', vertical: HC, match: 82, baseId: 'tpl_medical_staffing',
    rationale: 'Contract clinicians on government sites — clearance and contract-compliance tracking, prevailing-wage rates, and site-based scheduling ship configured.',
    tags: ['Cleared', 'Contract-compliant', 'Prevailing wage', 'Site-based'] },
  homehealth: { id: 'rec_homehealth', name: 'Home Health', vertical: HC, match: 92, baseId: 'tpl_medical_staffing',
    rationale: 'Field clinicians on visit-based routes — drive-time and mileage, an on-call after-hours pool, and RN/LPN license + CPR tracking ship configured for in-home care.',
    tags: ['Visit-based', 'Drive-time', 'On-call pool', 'License tracking'] },

  // Hospitality → subverticals (seed from the event/venue base).
  hotel: { id: 'rec_hotel', name: 'Hotel Multi-Property', vertical: HOSP, match: 90, baseId: 'tpl_stadium_events',
    rationale: 'Housekeeping, front desk, and F&B across properties — occupancy-driven scheduling, cross-property coverage, and tip handling ship configured.',
    tags: ['Multi-property', 'Occupancy-driven', 'Cross-coverage', 'Tips'] },
  fnb: { id: 'rec_fnb', name: 'Food & Beverage', vertical: HOSP, match: 87, baseId: 'tpl_stadium_events',
    rationale: 'Front- and back-of-house crews on demand-based shifts — tip pooling, alcohol-service certification, and split shifts ship configured.',
    tags: ['Demand-based', 'Tip pooling', 'Certified', 'Split shifts'] },
  events: { id: 'rec_events', name: 'Events / Banquet', vertical: HOSP, match: 89, baseId: 'tpl_stadium_events',
    rationale: 'Event-day surges staffed by large hourly crews — event-based scheduling, event-day premiums, and certification tracking ship configured.',
    tags: ['Event-based', 'Large crews', 'Event premium', 'Certified'] },

  // Construction → subverticals (seed from the crew-based event base).
  trades: { id: 'rec_trades', name: 'Trades Subcontracting', vertical: CON, match: 85, baseId: 'tpl_stadium_events',
    rationale: 'Skilled trades dispatched to job sites — certification tracking, per-site scheduling, and overtime rules ship configured for subcontracted crews.',
    tags: ['Job-site', 'Certified trades', 'Per-site', 'Overtime'] },
  crews: { id: 'rec_crews', name: 'Project-Based Crews', vertical: CON, match: 83, baseId: 'tpl_stadium_events',
    rationale: 'Crews assigned to projects with start/end dates — project-based scheduling, crew rosters, and coverage rules ship configured.',
    tags: ['Project-based', 'Crew rosters', 'Coverage', 'Overtime'] },
  union: { id: 'rec_union', name: 'Union / Prevailing-Wage', vertical: CON, match: 80, baseId: 'tpl_stadium_events',
    rationale: 'Union crews on prevailing-wage jobs — wage-scale rates, certified-payroll tracking, and classification-based scheduling ship configured.',
    tags: ['Prevailing wage', 'Certified payroll', 'Classifications', 'Union'] },

  // Staffing (general) → subverticals (seed from the hourly-crew base).
  light: { id: 'rec_light', name: 'Light Industrial', vertical: STAFF, match: 86, baseId: 'tpl_stadium_events',
    rationale: 'Warehouse and production crews against client orders — order-based scheduling, attendance tracking, and overtime-risk rules ship configured.',
    tags: ['Order-based', 'Attendance', 'Overtime risk', 'High volume'] },
  clerical: { id: 'rec_clerical', name: 'Clerical / Admin', vertical: STAFF, match: 81, baseId: 'tpl_stadium_events',
    rationale: 'Office and admin placements on client assignments — assignment scheduling, timesheet approvals, and skills tracking ship configured.',
    tags: ['Assignment-based', 'Timesheets', 'Skills', 'Placements'] },
  warehouse: { id: 'rec_warehouse', name: 'Warehouse / Logistics', vertical: STAFF, match: 84, baseId: 'tpl_stadium_events',
    rationale: 'Dock and fulfillment crews across shifts — shift-based scheduling, dock coverage rules, and overtime handling ship configured.',
    tags: ['Shift-based', 'Dock coverage', 'Overtime', 'High volume'] },

  // Enterprise multi-site → subverticals (seed from the retail base).
  retail: { id: 'rec_retail', name: 'Retail Chains', vertical: ENT, match: 85, baseId: 'tpl_retail',
    rationale: 'Store teams across a chain — traffic-driven scheduling, per-store coverage, and labor-budget rules ship configured.',
    tags: ['Multi-store', 'Traffic-driven', 'Labor budget', 'Coverage'] },
  franchise: { id: 'rec_franchise', name: 'Franchise Networks', vertical: ENT, match: 82, baseId: 'tpl_retail',
    rationale: 'Independently-run locations under one brand — per-location scheduling with shared standards and roll-up reporting ship configured.',
    tags: ['Per-location', 'Shared standards', 'Roll-up', 'Distributed'] },
  distributed: { id: 'rec_distributed', name: 'Distributed Facilities', vertical: ENT, match: 80, baseId: 'tpl_retail',
    rationale: 'Cleaning and building-services crews across many sites — route-based scheduling, per-site coverage, and quality checks ship configured.',
    tags: ['Route-based', 'Many sites', 'Coverage', 'Quality checks'] },
};

// Compose a full Template (for the provisioning log) from a recommendation: the
// granular display copy over the base template's seed + preview sections.
export function buildTemplate(rec: RecTemplate): Template {
  const base = TEMPLATES.find(t => t.id === rec.baseId) ?? TEMPLATES[0];
  return {
    ...base,
    id: rec.id,
    name: rec.name,
    industry: rec.vertical,
    match: rec.match,
    rationale: rec.rationale,
    tags: rec.tags,
  };
}

// ── Stage 3: mocked AI interpreter ───────────────────────────────────────────
// Turns a free-text instruction into one or more provisioning-log drafts. A
// keyword table stands in for a real model; each match becomes a DraftInput the
// canvas appends (classified + folded like any change). Returns a spoken reply
// plus the drafts it proposes.

interface AiResponse {
  reply: string;
  drafts: DraftInput[];
  // A short trace of how Ultron read the instruction and worked it — surfaced as
  // collapsed sub-details on the settled "Drafting the change" activity card.
  work: string[];
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
  const heard = `Read your instruction: "${labelFrom(text, 'your instruction')}"`;
  if (drafts.length === 0) {
    return {
      reply: "I couldn't map that to a concrete account change yet. Try naming a role, a pay rule, a policy, or a permission — e.g. \"add a night-shift differential\" or \"create a Dispatcher role\".",
      drafts: [],
      work: [
        heard,
        'Searched the account model for a matching role, pay rule, policy, or permission.',
        "Found no concrete target — held off rather than guess at the change.",
      ],
    };
  }
  const gated = drafts.filter(d => classify(d.target.domain).gateBehavior === 'gate');
  const list = (ds: DraftInput[]) => ds.map(d => DOMAIN_NOUN[d.target.domain]).join(', ');
  const work = [
    heard,
    `Mapped it to ${drafts.length} account ${drafts.length === 1 ? 'change' : 'changes'}: ${list(drafts)}.`,
    ...(gated.length
      ? [`Held the pay & access pieces (${list(gated)}) for your sign-off before anything provisions.`]
      : []),
    'Staged the change on the account draft — nothing goes live until you review.',
  ];
  return { reply: replies.join(' '), drafts, work };
}

// Friendly nouns for each change domain — used in the activity card's "how I
// worked this" trace, where the per-draft labels (all derived from the same
// instruction text) would otherwise read as duplicates.
const DOMAIN_NOUN: Record<MutationDomain, string> = {
  role: 'a role',
  rateRule: 'a pay rule',
  rateValue: 'a pay rate',
  policy: 'a policy',
  customField: 'a custom field',
  scheduling: 'a scheduling update',
  scoringRule: 'a scoring rule',
  evaluation: 'an evaluation rule',
  permission: 'a permission',
  user: 'a user',
};

// Canned opening suggestions for the augment conversation, keyed by the picked
// template's vertical (Template.industry) so they read native to the operation —
// a long-term-care admin sees nurse roles and CPR certs, not dispatchers and
// food-handler cards. Every line is phrased to hit an interpretInstruction rule
// (role / rate / policy / certification / permission / scheduling), so tapping
// one always drafts a concrete change. The generic set is the blank-template /
// unknown-vertical fallback.
const GENERIC_SUGGESTIONS = [
  'Add a night-shift differential',
  'Create a Dispatcher role',
  'Give Shift Leads approval permission',
  'Track food-handler certifications',
];

const AUGMENT_SUGGESTIONS_BY_VERTICAL: Record<string, string[]> = {
  'Healthcare staffing': [
    'Add a night-shift differential',
    'Create a Charge Nurse role',
    'Track CPR certifications',
    'Give Charge Nurses approval permission',
  ],
  'Hospitality': [
    'Add an event-day pay premium',
    'Create a Banquet Server role',
    'Track alcohol-service certifications',
    'Add a tip-pooling policy',
  ],
  'Construction': [
    'Add prevailing-wage rates',
    'Create a Site Foreman role',
    'Track OSHA certifications',
    'Give Foremen timesheet approval permission',
  ],
  'Staffing': [
    'Create a Forklift Operator role',
    'Add weekend shift coverage',
    'Track attendance',
    'Give Supervisors approval permission',
  ],
  'Enterprise multi-site': [
    'Create a Store Manager role',
    'Add a holiday time-off policy',
    'Track food-handler certifications',
    'Adjust weekend coverage scheduling',
  ],
};

export function augmentSuggestionsFor(industry?: string): string[] {
  return (industry && AUGMENT_SUGGESTIONS_BY_VERTICAL[industry]) || GENERIC_SUGGESTIONS;
}
