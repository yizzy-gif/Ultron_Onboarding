/* ─────────────────────────────────────────────────────────────────────────────
   Ultron demo fixtures
   Sourced from the activity-feed seed data (20 simulated events). Each event
   carries a trigger, Ultron's silent investigation (the "Analyzing event"
   steps), the recommended plan ("What I'd do"), the one-tap question ("Ask:"),
   and an outcome state.

   The seed data's own state field (action · wait · none) describes whether
   Ultron can act, needs a person, or has nothing to do. For a realistic demo
   the cases are spread across the three lifecycle groups instead — New (needs
   attention), Working, and Done — so every component path is exercised:
     · New  → analyzing / needs_approval / recommended
     · Working → in_progress / monitoring
     · Done → resolved / auto_resolved / workflow_available / unresolved
   The "no action needed" (none) events land in Done as clean auto-resolutions.

   Notes:
   · `status` drives deck membership / row treatment; it is the only field that
     diverges from the seed data's own state, by design (see above).
   · A resolved case with a non-null `workflowOpportunity` renders purple
     (save-as-workflow). `workflow_available` always renders purple.
   · Array order is authored most-recent-first; recency sorting relies on it.
   ───────────────────────────────────────────────────────────────────────────── */

import type { ThreadItem, ThreadSeverity } from './types';

export const ultronThreads: ThreadItem[] = [
  // ── New · Needs attention (needs_approval) ─────────────────────────────────
  {
    id: 'shift_drop_maria',
    name: 'Shift Drop Recovery',
    title: 'Maria Ellis dropped her 2pm shift at Riverside Clinic',
    capability: 'Coverage Recovery',
    status: 'needs_approval',
    severity: 'high',
    event: 'Maria dropped her 2:00 PM RN shift at Riverside Clinic.',
    assessment: 'Urgent fill — the shift starts in under 12 hours and still has no replacement.',
    analysisResult: '8 available RNs match, with no overtime or do-not-return conflicts.',
    recommendation: 'Find a qualified replacement and fill it.',
    outcome: null,
    workflowOpportunity: 'Automate urgent shift-drop recovery.',
    timeline: [
      { state: 'detected', headline: 'RN dropped this afternoon’s shift', done: true },
      { state: 'assessment', headline: 'Starts in under 12 hours — urgent fill', done: true },
      { state: 'recommendation', headline: '8 qualified RNs identified', done: true },
      { state: 'approval', headline: 'Approval required before outreach', done: false },
    ],
    actions: ['Message replacements', 'Assign first yes', 'Notify scheduler'],
    timestamp: '8:02 AM',
  },
  {
    id: 'timeoff_sofia',
    name: 'Time-Off Coverage Check',
    title: 'Sofia Marin requested time off next Thursday–Friday',
    capability: 'Time Off',
    status: 'needs_approval',
    severity: 'medium',
    event: 'Sofia requested time off next Thursday and Friday.',
    assessment: 'Two assigned shifts fall inside the window — Thursday is covered, Friday is thin.',
    analysisResult: 'PTO balance covers it; only one backup is available for Friday.',
    recommendation: 'Approve Thursday and hold Friday for your call.',
    outcome: null,
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: 'Time-off request for Thu–Fri', done: true },
      { state: 'assessment', headline: 'Friday coverage is thin', done: true },
      { state: 'recommendation', headline: 'Approve Thursday, hold Friday', done: true },
      { state: 'approval', headline: 'Approval required for the split decision', done: false },
    ],
    actions: ['Approve Thursday', 'Hold Friday for you'],
    timestamp: '10:12 AM',
  },
  {
    id: 'document_kenji',
    name: 'Document Filing',
    title: 'Kenji Tanaka uploaded a document to his profile',
    capability: 'Compliance',
    status: 'needs_approval',
    severity: 'low',
    event: 'Kenji uploaded a document to his profile.',
    assessment: 'Read as a valid CPR certification that expires in 3 weeks.',
    analysisResult: 'Name matches the uploader; the credential is valid but expires soon.',
    recommendation: 'File it as a CPR cert and flag the renewal.',
    outcome: null,
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: 'New document on Kenji’s profile', done: true },
      { state: 'assessment', headline: 'Valid CPR cert, expires in 3 weeks', done: true },
      { state: 'recommendation', headline: 'File the cert + flag the renewal', done: true },
      { state: 'approval', headline: 'Approval required before filing', done: false },
    ],
    actions: ['File as CPR cert', 'Mark verified', 'Flag renewal'],
    timestamp: '11:48 AM',
  },

  // ── New · Needs attention (recommended) ────────────────────────────────────
  {
    id: 'application_priya',
    name: 'New Lead Screening',
    title: 'New application: Priya R. — status New Lead',
    capability: 'Recruiting',
    status: 'recommended',
    severity: 'low',
    event: 'Priya R. submitted an application — status New Lead.',
    assessment: 'Strong match for the linked CNA Night Shift role downtown.',
    analysisResult: 'CNA license valid, availability matches — scored a 92% match.',
    recommendation: 'Screen the lead and reach out if qualified.',
    outcome: null,
    workflowOpportunity: 'Auto-screen and advance qualified leads.',
    timeline: [
      { state: 'detected', headline: 'New application received', done: true },
      { state: 'assessment', headline: '92% match for CNA · Night · Downtown', done: true },
      { state: 'recommendation', headline: 'Screen and reach out', done: false },
    ],
    actions: ['Mark qualified', 'Send intro', 'Ask screening questions'],
    timestamp: '8:41 AM',
  },
  {
    id: 'new_shift_forklift',
    name: 'Shift Offer',
    title: 'New shift created: Forklift Op, Friday 6am, Bay 4',
    capability: 'Fill Optimization',
    status: 'recommended',
    severity: 'low',
    event: 'A Forklift Op shift was created for Friday 6:00 AM, Bay 4.',
    assessment: 'Certified-only shift with a healthy pool of available workers.',
    analysisResult: '11 certified, available workers — top 6 ranked by proximity and reliability.',
    recommendation: 'Offer it to the best-matched workers.',
    outcome: null,
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: 'New forklift shift created', done: true },
      { state: 'assessment', headline: '11 certified workers available', done: true },
      { state: 'recommendation', headline: 'Offer to the top 6 matches', done: false },
    ],
    actions: ['Offer to top matches', 'Assign first claim', 'Confirm and update calendar'],
    timestamp: '9:30 AM',
  },
  {
    id: 'new_user_luis',
    name: 'Candidate Onboarding',
    title: 'New user created — Candidate: Luis M.',
    capability: 'Onboarding',
    status: 'recommended',
    severity: 'low',
    event: 'A new Candidate record was created for Luis M.',
    assessment: 'No tasks yet — ready for the standard intake set.',
    analysisResult: 'Pulled the 5 standard intake tasks; nothing pre-fillable on file.',
    recommendation: 'Kick off onboarding.',
    outcome: null,
    workflowOpportunity: 'Auto-start onboarding for new candidates.',
    timeline: [
      { state: 'detected', headline: 'New candidate record created', done: true },
      { state: 'assessment', headline: '5 standard intake tasks ready', done: true },
      { state: 'recommendation', headline: 'Send welcome + assign intake', done: false },
    ],
    actions: ['Send welcome', 'Assign intake tasks', 'Follow up to completion'],
    timestamp: '1:40 PM',
  },

  // ── New · Needs attention (needs_approval) ─────────────────────────────────
  {
    id: 'missed_clockin_james',
    name: 'Missed Clock-In',
    title: 'James Okoro never started his 9am shift',
    capability: 'Attendance Recovery',
    status: 'needs_approval',
    severity: 'high',
    event: 'James never clocked in for his 9:00 AM shift.',
    assessment: 'The grace window has elapsed with no release on file — needs a quick check before it’s a no-show.',
    analysisResult: 'No time-off on file and the 5-minute grace elapsed — an unexplained gap.',
    recommendation: 'Check if he’s on the way and update the shift.',
    outcome: null,
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: '9am start passed with no clock-in', done: true },
      { state: 'assessment', headline: 'No release on file — grace window elapsed', done: true },
      { state: 'recommendation', headline: 'Check in with James and update the shift', done: true },
      { state: 'approval', headline: 'Approval required before outreach', done: false },
    ],
    actions: ['Text James', 'Update shift', 'Flag scheduling inbox'],
    timestamp: '9:03 AM',
  },
  {
    id: 'thread_cancel_wed',
    name: 'Informal Cancellation',
    title: 'Worker replied “I can’t make tomorrow” in a thread',
    capability: 'Coverage Recovery',
    status: 'needs_approval',
    severity: 'high',
    event: 'A worker replied “I can’t make tomorrow” in an Engage thread.',
    assessment: 'Matched to her assigned Wed 7:00 AM shift at Pier 9 — no formal release was filed.',
    analysisResult: 'An informal cancellation with no release on file — it needs to be recorded as a drop.',
    recommendation: 'Treat it as a drop and start a fill, with a heads-up.',
    outcome: null,
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: 'Inbound message reads as a cancellation', done: true },
      { state: 'assessment', headline: 'Matched to the assigned Wed shift', done: true },
      { state: 'recommendation', headline: 'Log the release and start a fill', done: true },
      { state: 'approval', headline: 'Approval required before recording it', done: false },
    ],
    actions: ['Log the release', 'Acknowledge reply', 'Start replacement search'],
    timestamp: '4:30 PM',
  },

  // ── New · Needs attention (needs_approval — moved from Working) ─────────────
  {
    id: 'job_event_staff',
    name: 'Bulk Fill',
    title: 'New job: Event Staff — 20 openings, Saturday',
    capability: 'Marketplace Optimization',
    status: 'needs_approval',
    severity: 'medium',
    event: 'An Event Staff job was created with 20 openings for Saturday 4:00 PM.',
    assessment: '63 eligible workers ranked; 9 double-booked candidates filtered out.',
    analysisResult: '63 eligible workers ranked and 9 double-bookings filtered out — ready to invite the top matches.',
    recommendation: 'Match the pool and invite the best candidates.',
    outcome: null,
    workflowOpportunity: 'Automate bulk-fill invitations.',
    timeline: [
      { state: 'detected', headline: 'New job · 20 openings · Saturday', done: true },
      { state: 'assessment', headline: '63 eligible workers ranked', done: true },
      { state: 'recommendation', headline: 'Invite the top matches to claim slots', done: true },
      { state: 'approval', headline: 'Approval required before inviting', done: false },
    ],
    actions: ['Invite top matches', 'Track responses', 'Keep a standby list'],
    timestamp: '1:05 PM',
  },
  {
    id: 'missed_clockout_bianca',
    name: 'Open Timesheet',
    title: 'Bianca Rossi missed her clock-out — no end time on the timesheet',
    capability: 'Payroll Operations',
    status: 'needs_approval',
    severity: 'medium',
    event: 'Bianca’s shift ended with no clock-out — her timesheet is open.',
    assessment: 'Last geofence ping puts her off-site ~6:05 PM; held from payroll for a real end time.',
    analysisResult: 'Held from payroll — the open punch needs a confirmed end time before the run.',
    recommendation: 'Confirm her real end time and fix the timesheet.',
    outcome: null,
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: 'Shift ended with no clock-out', done: true },
      { state: 'assessment', headline: 'Held from payroll — needs a real end time', done: true },
      { state: 'recommendation', headline: 'Confirm her end time and fix the timesheet', done: true },
      { state: 'approval', headline: 'Approval required before payroll', done: false },
    ],
    actions: ['Text Bianca', 'Update timesheet', 'Flag payroll'],
    timestamp: '3:10 PM',
  },

  // ── New · Needs attention (recommended — moved from Working) ────────────────
  {
    id: 'payroll_acme_invoice',
    name: 'Invoice Roll-Up',
    title: 'Shift marked payroll approved — Acme Logistics',
    capability: 'Payroll Operations',
    status: 'recommended',
    severity: 'low',
    event: 'A shift was marked payroll approved for Acme Logistics.',
    assessment: 'Bill rate read and matched to Acme’s open, net-30 draft invoice.',
    analysisResult: 'No duplicate line exists — the approved shift is safe to add to the open invoice.',
    recommendation: 'Roll it onto the client’s open invoice.',
    outcome: null,
    workflowOpportunity: 'Automate approved-shift invoicing.',
    timeline: [
      { state: 'detected', headline: 'Shift marked payroll approved', done: true },
      { state: 'assessment', headline: 'Matched to Acme’s open invoice', done: true },
      { state: 'recommendation', headline: 'Roll it onto the open invoice', done: false },
    ],
    actions: ['Add line item', 'Recalculate total'],
    timestamp: '11:00 AM',
  },
  {
    id: 'schedule_published',
    name: 'Schedule Confirmation',
    title: 'It’s Friday — next week’s schedule is published',
    capability: 'Scheduling',
    status: 'recommended',
    severity: 'medium',
    event: 'Next week’s schedule was published — 84 shifts across 31 workers.',
    assessment: '22 shifts are still unconfirmed, heaviest on Monday and Tuesday.',
    analysisResult: '22 of 84 shifts are unconfirmed — confirming now de-risks Monday and Tuesday.',
    recommendation: 'Confirm everyone before the weekend.',
    outcome: null,
    workflowOpportunity: 'Automate weekly schedule confirmations.',
    timeline: [
      { state: 'detected', headline: 'Next week’s schedule published', done: true },
      { state: 'assessment', headline: '22 shifts unconfirmed', done: true },
      { state: 'recommendation', headline: 'Confirm everyone before the weekend', done: false },
    ],
    actions: ['Confirm all shifts', 'Chase the unconfirmed', 'Send Monday-readiness summary'],
    timestamp: '8:00 AM',
  },

  // ── New · needs attention (coverage) ───────────────────────────────────────
  {
    id: 'shift_release_jenny',
    name: 'Shift Release Recovery',
    title: 'Jenny Park released her Saturday shift at Lakeside',
    capability: 'Coverage Recovery',
    status: 'needs_approval',
    severity: 'medium',
    event: 'Jenny released her Saturday 8:00 AM caregiver shift at Lakeside.',
    assessment: 'More than 12 hours out — standard fill path with 5 qualified caregivers.',
    recommendation: 'Find a qualified replacement and fill it.',
    outcome: null,
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: 'Saturday caregiver shift released', done: true },
      { state: 'assessment', headline: '5 qualified caregivers available', done: true },
      { state: 'recommendation', headline: 'Best matches identified', done: true },
      { state: 'approval', headline: 'Approval required before outreach', done: false },
    ],
    actions: ['Message replacements', 'Assign first yes'],
    timestamp: '2:22 PM',
  },
  {
    id: 'birthday_tomas',
    name: 'Birthday Greeting',
    title: 'Tomas Greco has a birthday today',
    capability: 'Engagement',
    status: 'needs_approval',
    severity: 'low',
    event: 'Today is Tomas’s birthday.',
    assessment: 'Active employee; preferred channel is in-app chat — a send is appropriate.',
    recommendation: 'Send a happy birthday from the team.',
    outcome: null,
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: 'Birthday matched to today', done: true },
      { state: 'assessment', headline: 'Active employee · in-app chat', done: true },
      { state: 'recommendation', headline: 'A warm note drafted', done: true },
      { state: 'approval', headline: 'Approval required before sending', done: false },
    ],
    actions: ['Send Birthday Note'],
    timestamp: '9:12 AM',
  },
  {
    id: 'weekly_fill_report',
    name: 'Scheduled Report',
    title: 'Next week’s fill-rate report is ready for review',
    capability: 'Reporting',
    status: 'needs_approval',
    severity: 'medium',
    event: 'The weekly fill-rate report ran — 22 shifts are under target for next week.',
    assessment: 'Coverage gaps cluster on Monday and Tuesday; scheduling should see them before the week starts.',
    recommendation: 'Publish the report and flag the gaps to scheduling.',
    outcome: null,
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: 'Weekly report generated', done: true },
      { state: 'assessment', headline: '22 shifts under target', done: true },
      { state: 'recommendation', headline: 'Gaps flagged for scheduling', done: true },
      { state: 'approval', headline: 'Approval required before sharing', done: false },
    ],
    actions: ['Publish & flag gaps'],
    timestamp: '5:00 PM',
  },

  // ── New · needs attention (attendance & records) ───────────────────────────
  {
    id: 'clockin_devon',
    name: 'Clock-In Approval',
    title: 'Devon Pierce’s clock-in is ready for payroll approval',
    capability: 'Attendance',
    status: 'needs_approval',
    severity: 'low',
    event: 'Devon clocked in at Eastgate Warehouse — the punch is clean and inside the geofence.',
    assessment: 'All required fields are present, so it’s ready to approve for the payroll run.',
    recommendation: 'Approve the clock-in for payroll.',
    outcome: null,
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: 'Clock-in at Eastgate Warehouse', done: true },
      { state: 'assessment', headline: 'Inside geofence · all fields present', done: true },
      { state: 'recommendation', headline: 'Ready for payroll approval', done: true },
      { state: 'approval', headline: 'Approval required before payroll', done: false },
    ],
    actions: ['Approve clock-in'],
    timestamp: '8:15 AM',
  },
  {
    id: 'phone_aisha',
    name: 'Profile Update',
    title: 'Aisha Bello changed her phone number',
    capability: 'Users',
    status: 'needs_approval',
    severity: 'low',
    event: 'Aisha updated her phone number on file.',
    assessment: 'It’s her notification contact, so it’s worth a quick verification before it goes live.',
    recommendation: 'Verify the new number and update her notification contact.',
    outcome: null,
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: 'Phone number updated', done: true },
      { state: 'assessment', headline: 'Used as her notification contact', done: true },
      { state: 'recommendation', headline: 'Verification ready to send', done: true },
      { state: 'approval', headline: 'Approval required before verifying', done: false },
    ],
    actions: ['Verify & update'],
    timestamp: '12:30 PM',
  },
  {
    id: 'fill_confirmed_maria',
    name: 'Autonomous Fill',
    title: 'The fill agent lined up a replacement for Maria’s shift',
    capability: 'Autonomous Operations',
    status: 'needs_approval',
    severity: 'high',
    event: 'The fill agent found Sarah Quinn for Maria’s open RN shift at Riverside Clinic.',
    assessment: 'Sarah clears policy and is available — the assignment just needs your confirmation.',
    recommendation: 'Confirm the assignment and notify the scheduler.',
    outcome: null,
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: 'Replacement found for Maria’s shift', done: true },
      { state: 'assessment', headline: 'Sarah Quinn clears policy · available', done: true },
      { state: 'recommendation', headline: 'Assignment ready to confirm', done: true },
      { state: 'approval', headline: 'Approval required before assigning', done: false },
    ],
    actions: ['Confirm assignment'],
    timestamp: '3:55 PM',
  },
  {
    id: 'invoice_paid_4821',
    name: 'Invoice Reconciliation',
    title: 'Client marked invoice #4821 as paid',
    capability: 'Invoicing',
    status: 'needs_approval',
    severity: 'low',
    event: 'A client marked invoice #4821 paid outside Teambridge.',
    assessment: 'The payment needs reconciling against the open balance before the invoice can close.',
    recommendation: 'Reconcile the payment and close the invoice.',
    outcome: null,
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: 'Invoice #4821 marked paid', done: true },
      { state: 'assessment', headline: 'Payment recorded outside Teambridge', done: true },
      { state: 'recommendation', headline: 'Ready to reconcile and close', done: true },
      { state: 'approval', headline: 'Approval required before closing', done: false },
    ],
    actions: ['Reconcile & close'],
    timestamp: '11:25 AM',
  },

  // ── New · needs attention (compliance — recurring pattern) ─────────────────
  {
    id: 'cred_expired_nadia',
    name: 'Credential Lapse',
    title: 'Nadia Haddad’s CPR cert expired overnight',
    capability: 'Compliance',
    status: 'needs_approval',
    severity: 'high',
    event: 'Nadia’s CPR certification expired overnight.',
    assessment: 'A blocking policy flagged the lapse — CPR is required for her role.',
    recommendation: 'Pull her from non-compliant shifts and start renewal.',
    outcome: null,
    workflowOpportunity: 'Monitor credential lapses and auto-start renewals.',
    timeline: [
      { state: 'detected', headline: 'CPR cert expired overnight', done: true },
      { state: 'assessment', headline: '3 upcoming shifts now at risk', done: true },
      { state: 'recommendation', headline: 'Renewal + backfills lined up', done: true },
      { state: 'approval', headline: 'Approval required before changes', done: false },
    ],
    actions: ['Start renewal', 'Line up backfills'],
    timestamp: '10:40 AM',
  },
];

/** Person each case is about — drives the deck card's profile avatar (with an
 *  initials fallback when the photo can't load). Only set where the case title
 *  already leads with that person's full name, so `threadDisplayTitle` leaves
 *  the title untouched. Event-type cases (a new application, an invoice, a
 *  published schedule) intentionally have no subject and display verbatim. */
export const THREAD_SUBJECTS: Record<string, string> = {
  shift_drop_maria: 'Maria Ellis',
  timeoff_sofia: 'Sofia Marin',
  document_kenji: 'Kenji Tanaka',
  missed_clockin_james: 'James Okoro',
  missed_clockout_bianca: 'Bianca Rossi',
  shift_release_jenny: 'Jenny Park',
  birthday_tomas: 'Tomas Greco',
  clockin_devon: 'Devon Pierce',
  phone_aisha: 'Aisha Bello',
  cred_expired_nadia: 'Nadia Haddad',
};

/** Glanceable case metadata for the collapsed card subtitle: a scannable
 *  Role · Shift time · Location line in place of the prose assessment. DEMO ONLY. */
export const THREAD_META: Record<string, { role: string; shiftTime: string; location: string }> = {
  shift_drop_maria:      { role: 'RN',          shiftTime: 'Today · 2:00 PM',     location: 'Riverside Clinic' },
  timeoff_sofia:         { role: 'PTO',         shiftTime: 'Next Thu–Fri',        location: '2 assigned shifts' },
  document_kenji:        { role: 'CPR cert',    shiftTime: 'Expires in 3 weeks',  location: 'Profile upload' },
  application_priya:     { role: 'CNA',         shiftTime: 'Night Shift',         location: 'Downtown' },
  new_shift_forklift:    { role: 'Forklift Op', shiftTime: 'Fri · 6:00 AM',       location: 'Bay 4' },
  new_user_luis:         { role: 'Candidate',   shiftTime: 'Onboarding',          location: '5 intake tasks' },
  missed_clockin_james:  { role: 'Worker',      shiftTime: 'Today · 9:00 AM',     location: 'No clock-in' },
  thread_cancel_wed:     { role: 'Worker',      shiftTime: 'Wed · 7:00 AM',       location: 'Pier 9' },
  payroll_acme_invoice:  { role: 'Invoice',     shiftTime: '$48/hr · 8 hrs',      location: 'Acme Logistics' },
  job_event_staff:       { role: 'Event Staff', shiftTime: 'Sat · 4:00 PM',       location: '20 openings' },
  missed_clockout_bianca:{ role: 'Timesheet',   shiftTime: 'Ended ~6:05 PM',      location: 'Open punch' },
  schedule_published:    { role: '31 workers',  shiftTime: 'Next week',           location: '84 shifts' },
  shift_release_jenny:   { role: 'Caregiver',   shiftTime: 'Sat · 8:00 AM',       location: 'Lakeside' },
  birthday_tomas:        { role: 'Employee',    shiftTime: 'Today',               location: 'In-app chat' },
  weekly_fill_report:    { role: 'Report',      shiftTime: 'Weekly',              location: 'Home dashboard' },
  clockin_devon:         { role: 'Clock-in',    shiftTime: 'Today · 8:15 AM',     location: 'Eastgate Warehouse' },
  phone_aisha:           { role: 'Profile',     shiftTime: 'Today',               location: 'Phone updated' },
  fill_confirmed_maria:  { role: 'RN',          shiftTime: 'Replacement',         location: 'Riverside Clinic' },
  invoice_paid_4821:     { role: 'Invoice',     shiftTime: '#4821',               location: 'Marked paid' },
  cred_expired_nadia:    { role: 'CPR cert',    shiftTime: 'Expired',             location: '3 shifts at risk' },
};

/** The glanceable metadata line for a case, e.g. "RN · Today · 2:00 PM ·
 *  Riverside Clinic". Empty string when the case has no metadata. */
export function threadMeta(id: string): string {
  const m = THREAD_META[id];
  return m ? [m.role, m.shiftTime, m.location].filter(Boolean).join(' · ') : '';
}

/** Card title prefixed with the subject's name, e.g. "Marcus Lee projected
 *  overtime exceeds budget this week". Titles that already lead with the name
 *  are left untouched; a leading acronym (RN, CNA) keeps its casing. */
export function threadDisplayTitle(thread: ThreadItem): string {
  const name = THREAD_SUBJECTS[thread.id];
  if (!name || thread.title.startsWith(name)) return thread.title;
  const firstWord = thread.title.split(' ')[0] ?? '';
  const keepCase = firstWord === firstWord.toUpperCase(); // acronym like "RN" / "CNA"
  const rest = keepCase ? thread.title : thread.title.charAt(0).toLowerCase() + thread.title.slice(1);
  return `${name} ${rest}`;
}

/** Seed overrides where the default pravatar image doesn't match the person —
 *  e.g. it returns a woman's photo for a man. Maps the seed to one that resolves
 *  to a fitting image. */
const AVATAR_SEED_OVERRIDES: Record<string, string> = {
  missed_clockin_james: 'james_okoro_2', // resolves to a man
};

/** Demo placeholder profile photo, stable per case (seeded by thread id). */
export const threadAvatarUrl = (id: string): string =>
  `https://i.pravatar.cc/80?u=${AVATAR_SEED_OVERRIDES[id] ?? id}`;

/** Demo placeholder profile photo for an arbitrary person seed — stable per seed.
 *  Used for the matched-user avatar groups on activity steps. */
export const avatarUrl = (seed: string): string =>
  `https://i.pravatar.cc/80?u=${AVATAR_SEED_OVERRIDES[seed] ?? seed}`;

/** A single "thinking" step Ultron emits while analyzing a fresh event — a
 *  short headline plus a line of sub-context explaining what it found, so the
 *  stream reads like the activity trail (headline + detail) rather than a bare
 *  checklist. */
export interface AnalyzingStep {
  /** Leading icon when the step is folded into the accumulated activity trail. */
  icon: WorkingIcon;
  headline: string;
  detail: string;
}

/** Short "thinking" steps Ultron emits while analyzing a fresh event. They
 *  reveal one at a time (accumulating, growing the analyzing card) before the
 *  case flips to Needs approval. Falls back to a generic sequence. Sourced from
 *  each event's "Analyzing event" checklist in the seed data. */
export const ANALYZING_ACTIVITIES: Record<string, AnalyzingStep[]> = {
  shift_drop_maria: [
    { icon: 'clock', headline: 'Review dropped shift', detail: 'I checked out the dropped shift: RN · Riverside Clinic · 2:00–10:00pm, in the ICU unit.' },
    { icon: 'chart', headline: 'Determine course of action', detail: 'It starts in 4 hours — an urgent fill, where ranked one-by-one outreach is likely too slow. So I’ll message the top 20 matched replacements at once. That’s worked before, so no bonus incentive yet.' },
    { icon: 'done', headline: 'Share plan', detail: 'I turned that into a three-step plan — message the best-matched RNs, confirm and assign the first qualified yes, then notify the Riverside manager — and shared it below for your approval.' },
  ],
  timeoff_sofia: [
    { icon: 'clock', headline: 'Review time-off request', detail: 'I looked at Sofia’s request — Thursday and Friday off, with two assigned shifts falling inside the window.' },
    { icon: 'chart', headline: 'Determine course of action', detail: 'Her PTO covers it and there’s no blackout rule, so it’s approvable. But coverage splits: Thursday stays fully covered, Friday has just one backup and reads thin. So I’ll approve Thursday outright and hold Friday for your call.' },
    { icon: 'done', headline: 'Share plan', detail: 'I laid it out as a short plan — approve Thursday outright, hold Friday for your call, and let Sofia know where each day stands — and shared it for your go-ahead.' },
  ],
  document_kenji: [
    { icon: 'clock', headline: 'Review uploaded document', detail: 'I opened the file on Kenji’s profile and read it as a valid CPR certification.' },
    { icon: 'chart', headline: 'Determine course of action', detail: 'The name matches and the credential checks out, but it expires in 3 weeks. So I’ll file it as a CPR cert and set a renewal flag before expiry, so it doesn’t lapse and block his shifts.' },
    { icon: 'done', headline: 'Share plan', detail: 'I built the plan — file the document as a CPR cert, mark the credential verified, and set a renewal flag before it expires — and shared it for your approval.' },
  ],
  application_priya: [
    { icon: 'clock', headline: 'Review new application', detail: 'I read Priya’s application against the linked role: CNA · Night Shift · Downtown.' },
    { icon: 'chart', headline: 'Determine course of action', detail: 'Valid CNA license and her availability fits the shift — a 92% match, a strong lead. So rather than let it sit in the queue, I’ll screen it qualified and send an intro before someone else moves on her.' },
    { icon: 'done', headline: 'Share plan', detail: 'I shaped it into a plan — mark Priya qualified, send a warm intro with the two screening questions, and move her to the recruiter queue — ready for your go-ahead.' },
  ],
  new_shift_forklift: [
    { icon: 'clock', headline: 'Review new shift', detail: 'I read the new shift: Forklift Op · Friday 6:00 AM · Bay 4, certified-only.' },
    { icon: 'chart', headline: 'Determine course of action', detail: 'The pool has 11 certified, available workers — a healthy field, no coverage risk. With supply that deep I won’t widen the net; I’ll offer it to the top 6 by proximity and reliability and let the first claim take it.' },
    { icon: 'done', headline: 'Share plan', detail: 'I laid out the plan — offer the shift to the top 6 in ranked order, track claims, and assign the first that clears policy — and shared it for your approval.' },
  ],
  new_user_luis: [
    { icon: 'clock', headline: 'Review new candidate', detail: 'I read the new Candidate record for Luis M. — no tasks on it yet.' },
    { icon: 'chart', headline: 'Determine course of action', detail: 'Nothing’s pre-fillable and it’s a standard new-candidate setup. So I’ll kick off onboarding: send a welcome, assign the 5 standard intake tasks, and follow up to completion.' },
    { icon: 'done', headline: 'Share plan', detail: 'I turned it into an onboarding plan — send Luis a welcome, assign the five standard intake tasks, and follow up to completion — and shared it for your go-ahead.' },
  ],
  missed_clockin_james: [
    { icon: 'clock', headline: 'Review missed clock-in', detail: 'I saw James’s 9:00 AM start pass with no clock-in after the 5-minute grace window; his preferred channel is SMS.' },
    { icon: 'chart', headline: 'Determine course of action', detail: 'No time-off or release on file, so this is an unexplained gap — but it’s early enough that he may just be running late. Before calling it a no-show I’ll text him, update the shift with his reply, and flag the scheduling inbox if he doesn’t respond.' },
    { icon: 'done', headline: 'Share plan', detail: 'I built the plan — text James on SMS, update the shift from his reply, and flag the scheduling inbox if he doesn’t respond — and shared it for your approval.' },
  ],
  thread_cancel_wed: [
    { icon: 'clock', headline: 'Review inbound message', detail: 'I read the worker’s “I can’t make tomorrow” reply and matched it to her assigned Wed 7:00 AM shift at Pier 9.' },
    { icon: 'chart', headline: 'Determine course of action', detail: 'It’s an informal cancellation with no release on file, so the shift still reads as covered when it isn’t. To keep the record honest I’ll log a release, acknowledge her, and start a replacement search now since it’s tomorrow.' },
    { icon: 'done', headline: 'Share plan', detail: 'I laid it out — log the release on her behalf, acknowledge she’s off, and open a replacement search for the Wed 7:00 AM shift — and shared it for your go-ahead.' },
  ],
  payroll_acme_invoice: [
    { icon: 'clock', headline: 'Review approved shift', detail: 'I read the approved bill rate — $48/hr · 8 hrs — and matched it to Acme’s open, net-30 draft invoice.' },
    { icon: 'chart', headline: 'Determine course of action', detail: 'There’s no duplicate line yet, so it’s safe to add. Rather than open a new invoice, I’ll roll the approved shift onto Acme’s open invoice and recalculate the total so billing stays consolidated.' },
    { icon: 'done', headline: 'Share plan', detail: 'I shaped the plan — add the approved shift to Acme’s open invoice, recalculate the total, and keep the draft ready for your end-of-week review — and shared it for your approval.' },
  ],
  job_event_staff: [
    { icon: 'clock', headline: 'Review new job', detail: 'I read the job: Event Staff · 20 openings · Saturday 4:00 PM.' },
    { icon: 'chart', headline: 'Determine course of action', detail: 'The pool ranked 63 eligible workers, minus 9 double-booked on Saturday. With 20 slots and good supply, I’ll invite the top matches to claim first-come, track responses, and keep a standby list rather than hand-assign each opening.' },
    { icon: 'done', headline: 'Share plan', detail: 'I built the plan — invite the top matches to claim first-come, track responses against the 20 openings, and keep a standby list — and shared it for your go-ahead.' },
  ],
  missed_clockout_bianca: [
    { icon: 'clock', headline: 'Review open timesheet', detail: 'I saw Bianca’s shift end with no clock-out, leaving her timesheet open; her last geofence ping puts her off-site around 6:05 PM.' },
    { icon: 'chart', headline: 'Determine course of action', detail: 'An open punch can’t run through payroll, so I’ve held it from the run. The ping suggests an end time, but I’d rather confirm than guess — I’ll text Bianca, correct the timesheet with her real end time, and flag payroll so the run isn’t delayed.' },
    { icon: 'done', headline: 'Share plan', detail: 'I laid out the plan — text Bianca to confirm her end time, correct the timesheet from her reply, and hold it from the run with a payroll flag until she responds — and shared it for your approval.' },
  ],
  schedule_published: [
    { icon: 'clock', headline: 'Review published schedule', detail: 'I scanned next week’s schedule: 84 shifts across 31 workers.' },
    { icon: 'chart', headline: 'Determine course of action', detail: '22 shifts are still unconfirmed, heaviest Monday and Tuesday — that’s the start-of-week risk. Confirming before the weekend gives workers time to flag conflicts, so I’ll send confirmations, chase the unconfirmed, and prep a Monday-readiness summary.' },
    { icon: 'done', headline: 'Share plan', detail: 'I turned it into a plan — message everyone to confirm next week’s shifts, chase the 22 unconfirmed, and prep a Monday-readiness summary — and shared it for your go-ahead.' },
  ],
  shift_release_jenny: [
    { icon: 'clock', headline: 'Review released shift', detail: 'I read the released shift: Caregiver · Lakeside · Saturday 8:00 AM.' },
    { icon: 'chart', headline: 'Determine course of action', detail: 'It’s more than 12 hours out, so it’s a standard fill with no coverage risk. The pool has 5 qualified caregivers, so I’ll reach out in ranked order and assign the first qualified yes.' },
    { icon: 'done', headline: 'Share plan', detail: 'I laid it out — reach the 5 qualified caregivers in ranked order and assign the first qualified yes — and shared it for your approval.' },
  ],
  birthday_tomas: [
    { icon: 'clock', headline: 'Review birthday', detail: 'I matched today to Tomas Greco’s birthday — he’s an active employee on in-app chat.' },
    { icon: 'chart', headline: 'Determine course of action', detail: 'He’s active on in-app chat, so a quick, warm send fits. I’ll send a happy-birthday note from the team.' },
    { icon: 'done', headline: 'Share plan', detail: 'It’s a one-step plan — send Tomas a warm birthday note from the team over in-app chat — shared here for your go-ahead.' },
  ],
  cred_expired_nadia: [
    { icon: 'clock', headline: 'Review credential lapse', detail: 'A blocking policy flagged that Nadia’s CPR certification lapsed overnight; CPR is required for her role.' },
    { icon: 'chart', headline: 'Determine course of action', detail: 'Three CPR-gated shifts next week are now at risk, but replacements are available for all three. So I’ll pull her from the non-compliant shifts, start a renewal, and line up backfills so coverage holds while she recertifies.' },
    { icon: 'done', headline: 'Share plan', detail: 'I built the plan — pull Nadia from the three CPR-gated shifts, start a renewal task, and line up backfills so coverage holds while she recertifies — and shared it for your approval.' },
  ],
  clockin_devon: [
    { icon: 'clock', headline: 'Review clock-in', detail: 'Devon clocked in at Eastgate Warehouse; I checked it against the geofence and required fields.' },
    { icon: 'chart', headline: 'Determine course of action', detail: 'It’s a clean punch inside the geofence with every required field present, so it’s payroll-ready. Rather than let it sit before the run, I’ll approve it for payroll.' },
    { icon: 'done', headline: 'Share plan', detail: 'It’s a one-step plan — approve Devon’s clean punch for the payroll run — shared here for your go-ahead.' },
  ],
  phone_aisha: [
    { icon: 'clock', headline: 'Review profile update', detail: 'Aisha updated her phone number — it’s the contact her notifications go to.' },
    { icon: 'chart', headline: 'Determine course of action', detail: 'Since it’s her notification contact, a wrong number means missed shift alerts. So I’ll send a quick verification ping and, once it checks out, update the contact on file so alerts keep reaching her.' },
    { icon: 'done', headline: 'Share plan', detail: 'I laid it out — send a verification ping to the new number and, once it checks out, set it as her notification contact — and shared it for your approval.' },
  ],
  fill_confirmed_maria: [
    { icon: 'clock', headline: 'Review autonomous fill', detail: 'My fill for Maria’s open RN shift surfaced Sarah Quinn — available and within radius for Riverside Clinic.' },
    { icon: 'chart', headline: 'Determine course of action', detail: 'Sarah clears every policy and is available — a clean match. I’ll confirm the assignment and notify the scheduler so the roster’s accurate — pending your go-ahead, since it commits a worker to the shift.' },
    { icon: 'done', headline: 'Share plan', detail: 'I shaped the plan — confirm Sarah Quinn for Maria’s open shift and notify the scheduler so the roster’s accurate — ready for your go-ahead.' },
  ],
  weekly_fill_report: [
    { icon: 'clock', headline: 'Review scheduled report', detail: 'The weekly fill-rate report ran — 22 of next week’s shifts are under target, heaviest on Monday and Tuesday.' },
    { icon: 'chart', headline: 'Determine course of action', detail: 'The gaps cluster early in the week, so they’re fixable if scheduling sees them now. I’ll publish the report and flag the at-risk shifts so the team can act before the week starts.' },
    { icon: 'done', headline: 'Share plan', detail: 'I built the plan — publish the fill-rate report, flag the 22 at-risk shifts, and send scheduling the Monday–Tuesday gaps — and shared it for your go-ahead.' },
  ],
  invoice_paid_4821: [
    { icon: 'clock', headline: 'Review paid invoice', detail: 'A client marked invoice #4821 paid outside Teambridge; the open balance is still showing in the ledger.' },
    { icon: 'chart', headline: 'Determine course of action', detail: 'Paid out-of-band, so the record won’t close on its own. I’ll reconcile the amount against the open balance and, once it matches, close the invoice so billing stays accurate.' },
    { icon: 'done', headline: 'Share plan', detail: 'I laid it out — reconcile the payment against #4821’s open balance and close the invoice once it matches — and shared it for your go-ahead.' },
  ],
};

const GENERIC_ANALYZING: AnalyzingStep[] = [
  { icon: 'alert', headline: 'Read the event', detail: 'Parsing what changed and which people, shifts, and policies it touches.' },
  { icon: 'clock', headline: 'Gather related records', detail: 'Pulling the schedules, availability, and history relevant to this case.' },
  { icon: 'chart', headline: 'Weigh the options', detail: 'Comparing the viable responses by cost, coverage, and disruption.' },
  { icon: 'done',  headline: 'Prepare recommendation', detail: 'Shaping the strongest option into a plan you can approve in one step.' },
];

/** The analyzing step sequence for a case (thread-specific or generic). */
export const analyzingSteps = (id: string): AnalyzingStep[] =>
  ANALYZING_ACTIVITIES[id] ?? GENERIC_ANALYZING;

/** The recommendation phrased as a question — a clear call to action that the
 *  decision buttons answer. Shown as the card prompt (falls back to the
 *  imperative `recommendation` if missing). Sourced from each event's "Ask:". */
export const THREAD_PROMPTS: Record<string, string> = {
  shift_drop_maria: 'Want me to reach out to the best replacements and get this shift filled?',
  timeoff_sofia: 'Friday’s coverage is thin — want me to approve Thursday and hold Friday for your call?',
  document_kenji: 'It’s a valid CPR cert expiring in 3 weeks — want me to file it and flag the renewal?',
  application_priya: 'Want me to screen this lead and reach out if they qualify?',
  new_shift_forklift: 'Want me to offer this shift to the best workers and get it claimed?',
  new_user_luis: 'Want me to kick off onboarding for Luis with a welcome and intake tasks?',
  missed_clockin_james: 'Want me to check in with James and update the shift?',
  thread_cancel_wed: 'She’s canceling tomorrow informally — want me to log the release and start a fill?',
  payroll_acme_invoice: 'Want me to roll this approved shift onto the client’s open invoice?',
  job_event_staff: 'Want me to invite the best-matched workers to fill these 20 openings?',
  missed_clockout_bianca: 'Want me to confirm Bianca’s end time and fix the timesheet before payroll?',
  schedule_published: 'Want me to confirm next week’s schedule and chase down the 22 unconfirmed shifts?',
  shift_release_jenny: 'Want me to reach out to the best replacements and get this shift filled?',
  birthday_tomas: 'Want me to send Tomas a happy birthday message from the team?',
  weekly_fill_report: '22 shifts are under target next week — want me to publish the report and flag the gaps to scheduling?',
  clockin_devon: 'Devon’s clock-in is clean and inside the geofence — want me to approve it for payroll?',
  phone_aisha: 'She changed her notification number — want me to verify it and update her contact?',
  fill_confirmed_maria: 'Sarah Quinn is a clean match — want me to confirm the assignment and notify the scheduler?',
  invoice_paid_4821: 'The client paid #4821 outside Teambridge — want me to reconcile it and close the invoice?',
  cred_expired_nadia: 'Her CPR lapsed — want me to start the renewal and line up backfills for the 3 shifts?',
};

/** Real, scenario-specific milestones shown one-by-one while a thread executes
 *  (Live stream): outreach → monitoring → acceptance. Three per case to match
 *  the execution timing. Falls back to generic labels if a case has none. */
/** `icon` is a key mapped to an Alloy icon in the view (fixtures can't hold JSX). */
export type WorkingIcon = 'send' | 'clock' | 'done' | 'rate' | 'chart' | 'edit' | 'alert';

export interface WorkingMilestone {
  icon: WorkingIcon;
  headline: string;
  detail: string;
  /** Concrete specifics shown as a bulleted list beneath the detail when the step
   *  is expanded — the "what exactly" behind the one-line summary (criteria used,
   *  names/counts, checks run), so the collapsed detail reads thorough. */
  bullets?: string[];
  /** Running progress beats shown as a sub-row under the headline: while the step
   *  is live they cycle one-by-one (each pops in as it replaces the last); the
   *  final entry is the settled result, shown in the success tone once the step
   *  completes. Omit for steps that need no live status line. */
  progress?: string[];
  /** Avatar seeds for the people this step reached/matched — rendered as a small
   *  overlapping group at the trailing end of the progress result line. */
  avatars?: string[];
  /** Hold the avatar cluster back until the step settles on its final beat, rather
   *  than showing it the moment the step goes live. Use for steps whose avatar only
   *  becomes true at the end (e.g. a confirmation that lands on the last progress
   *  beat) — otherwise the face reads as present before it's earned. */
  avatarsOnSettle?: boolean;
  /** The true total of people this step reached, when it's larger than the handful
   *  of `avatars` faces shown (e.g. 20 RNs messaged but only 5 faces rendered). The
   *  avatar cluster shows the first few faces then a trailing "+N" chip carrying the
   *  remainder, so the group reads as the full count. Omit when the faces already
   *  represent everyone. */
  reached?: number;
  /** Which tools this specific step drove — overrides the per-icon default in
   *  DEFAULT_TOOLS. Use it when a step's kind doesn't match what it actually ran
   *  (e.g. a record-only edit drove no tool → [], or a notify-only send drove just
   *  Engage → ['engage']). Each tool still renders only if the case supplies its
   *  context (see THREAD_USAGE). */
  tools?: UsageToolKind[];
}

export const WORKING_ACTIVITIES: Record<string, WorkingMilestone[]> = {
  shift_drop_maria: [
    { icon: 'send',  headline: 'Message the top replacements', detail: 'Pushed the full shift brief to the 20 best-matched RNs at once. This close to start time an urgent fill lands faster blasted in parallel than worked one name at a time, so I skipped the ranked one-by-one outreach.', bullets: ['Matched on ICU credential, distance from Riverside, and reliability score', 'All 20 reached on their preferred channel (SMS or in-app)', 'No bonus incentive attached yet — the qualified pool is deep enough to fill without it'], progress: ['Reaching out to Aisha Karim…', 'Reaching out to Renee Wallace…', 'Reaching out to Carl Jensen…', 'Reaching out to Tina Boyd…', 'Reached all 20 matched RNs'], avatars: ['aisha_karim', 'renee_wallace', 'carl_jensen', 'tina_boyd', 'marcus_idris'], reached: 20, tools: ['engage'] },
    { icon: 'clock', headline: 'Collect confirmations', detail: 'Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.', bullets: ['3 RNs replied in the first few minutes', 'Aisha Karim is the first clean yes — ICU-cleared, no overtime or double-booking conflict', 'Kept the other repliers warm as backup in case she falls through'], progress: ['Waiting on replies…', '3 RNs replied — checking fit…', 'Aisha Karim confirmed for the shift'], avatars: ['aisha_karim'], avatarsOnSettle: true, tools: ['engage'] },
    { icon: 'done',  headline: 'Fill shift', detail: 'Assigned Aisha to the 2:00–10:00 PM ICU shift and pushed the change everywhere it needs to land so the record stays honest.', bullets: ['Aisha Karim assigned · ICU credential re-checked at assignment', 'Calendar and her timesheet updated', 'Riverside’s scheduler notified the gap is closed'], progress: ['Assigning the 2:00 PM ICU shift…', 'Aisha Karim assigned · scheduler notified'], avatars: ['aisha_karim', 'priya_nair'], tools: ['policy', 'update', 'notify-scheduler'] },
    { icon: 'send',  headline: 'Notify the location manager', detail: 'Sent the Riverside location manager a heads-up on the reassignment so the floor lead has the change without needing to chase it — informational only, no action on their side.', bullets: ['Dana Brooks notified — Riverside location manager', 'Sent over push + email', 'Flagged as no action needed'], progress: ['Notifying the location manager…', 'Dana Brooks notified'], avatars: ['scheduler_dana'], tools: ['notify'] },
  ],
  timeoff_sofia: [
    { icon: 'done',  headline: 'Approve Thursday', detail: 'Thursday clears on its own — her PTO balance covers it and the one shift inside is already backfilled, so I approved it outright rather than routing it for review.', bullets: ['PTO balance checked — enough to cover the day', 'Thursday’s single shift already has coverage', 'Approved without escalation'], progress: ['Checking the PTO balance…', 'Thursday approved · coverage holds'] },
    { icon: 'edit',  headline: 'Hold Friday for you', detail: 'Friday’s coverage is thin enough that I won’t auto-approve it — only one backup is available, so I held it for your call rather than risk an uncovered shift.', bullets: ['Friday coverage scanned — only 1 backup free', 'Approving would leave little margin', 'Held pending your decision, not denied'], progress: ['Scanning Friday coverage…', '1 backup available — held for review'] },
    { icon: 'send',  headline: 'Notify Sofia', detail: 'Closed the loop with Sofia so she knows Thursday is locked and Friday is still pending — no ambiguity about which days she can plan around.', bullets: ['Told her Thursday is approved', 'Flagged Friday as pending your review', 'Sent on her preferred channel'], progress: ['Messaging Sofia…', 'Sofia notified'], avatars: ['timeoff_sofia'], tools: ['engage'] },
  ],
  document_kenji: [
    { icon: 'edit',  headline: 'File as a CPR cert', detail: 'Read the upload, recognized it as a CPR certification, and filed it on Kenji’s profile with the expiry captured — a loose document doesn’t protect anyone until it’s typed and dated.', bullets: ['Classified as CPR certification', 'Expiry date parsed and saved', 'Attached to Kenji Tanaka’s profile'], progress: ['Reading the document…', 'Filed as CPR cert · expiry saved'] },
    { icon: 'done',  headline: 'Mark the credential verified', detail: 'The cert is valid and current, so I marked the credential verified on his profile — his CPR-gated shifts now read as compliant rather than unconfirmed.', bullets: ['Document checks out as valid', 'Credential status set to verified', 'CPR-gated shifts now clear compliance'], progress: ['Updating his profile…', 'Credential verified'] },
    { icon: 'alert', headline: 'Flag the renewal', detail: 'It expires in 3 weeks — I surfaced it now so the renewal can be planned with runway instead of scrambling once the cert lapses and his shifts go at-risk.', bullets: ['Expiry window checked — 3 weeks out', 'Flagged ahead of the lapse, not after', 'Gives time to renew before shifts are blocked'], progress: ['Checking the expiry window…', 'Renewal due in 3 weeks — flagged'] },
  ],
  application_priya: [
    { icon: 'edit',  headline: 'Mark Priya qualified', detail: 'Her application clears the bar at a 92% match, so I set the status to qualified — strong enough to move forward rather than sit in the unscreened pile.', bullets: ['Scored 92% against the CNA role', 'Credentials and availability check out', 'Application status set to qualified'], progress: ['Reviewing her application…', 'Marked qualified · 92% match'] },
    { icon: 'send',  headline: 'Send a warm intro', detail: 'Reached out to confirm she’s still interested and asked the two screening questions up front, so the recruiter inherits a screened lead rather than a cold one.', bullets: ['Confirmed her interest in the role', 'Asked both screening questions', 'Sent on her preferred channel'], progress: ['Drafting the intro…', 'Intro sent · 2 screening questions asked'], avatars: ['application_priya'], tools: ['engage'] },
    { icon: 'done',  headline: 'Move to the recruiter queue', detail: 'Handed her to the recruiter queue so the moment she answers, a human can pick her up without re-doing the qualifying work.', bullets: ['Placed in the recruiter queue', 'Match score and screening attached', 'Will advance once she replies'], progress: ['Handing off to the recruiter…', 'In the recruiter queue'] },
  ],
  new_shift_forklift: [
    { icon: 'send',  headline: 'Offer to the top matches', detail: 'Sent the Bay 4 shift to the best-matched certified operators in ranked order. Supply is deep and the shift is far enough out that a ranked offer-and-claim fills it cleanly without widening the net.', bullets: ['Certified-only pool, ranked by proximity to Bay 4 and reliability', 'Offered to the top 12 of 11+ eligible, claim-first', 'No incentive added — first clean claim takes it'], progress: ['Ranking the matches…', 'Offered to the top 12 in order'], avatars: ['forklift_dane', 'forklift_omar', 'forklift_priya', 'forklift_luis', 'forklift_nina'], reached: 12 },
    { icon: 'clock', headline: 'Track claims', detail: 'Held the offer open and checked each claim against policy as it came in, so the shift goes to the first one that actually clears rather than just the fastest tap.', bullets: ['2 claims in within the first window', 'Checked forklift certification currency and no overlapping shift', 'First clean claim cleared all gates'], progress: ['Watching for claims…', '2 claims in — checking policy…', 'First clean claim found'] },
    { icon: 'done',  headline: 'Claim shift', detail: 'Assigned the first qualified claim and locked the rest of the offer so no one else can claim a filled slot.', bullets: ['Operator assigned · certification verified', 'Calendar updated and the open offer closed', 'Remaining matches released'], progress: ['Assigning the claim…', 'Shift claimed · calendar updated'] },
  ],
  new_user_luis: [
    { icon: 'send',  headline: 'Send Luis a welcome', detail: 'Kicked off Luis’s onboarding with a welcome the moment his record landed — momentum is highest right after a new hire signs on, so I didn’t let it sit.', bullets: ['Welcome sent to Luis Mendez', 'Onboarding flow started', 'Delivered on his preferred channel'], progress: ['Drafting the welcome…', 'Welcome sent · onboarding started'], avatars: ['new_user_luis'] },
    { icon: 'edit',  headline: 'Assign intake tasks', detail: 'Built out his intake list with the 5 required tasks so nothing’s left to memory — every step he owes is on the record from day one.', bullets: ['5 required intake tasks assigned', 'Each set against Luis’s profile', 'Covers the full pre-start checklist'], progress: ['Building the intake list…', '5 intake tasks assigned'] },
    { icon: 'done',  headline: 'Follow up', detail: 'Set reminders and I’ll track each of the 5 tasks through to done, so a stalled item surfaces instead of quietly blocking his start.', bullets: ['Reminders set on all 5 tasks', 'Tracking each to completion', 'Will flag any that stall'], progress: ['Setting reminders…', 'Tracking all 5 tasks to done'] },
  ],
  missed_clockin_james: [
    { icon: 'send',  headline: 'Text James', detail: 'Reached out on SMS — his preferred channel — before treating the gap as a no-show, since it’s early enough that he may just be running late.', bullets: ['Sent to his preferred channel (SMS)', 'Asked if he’s on his way and an ETA', 'No time-off or release on file, so the shift still reads as his'], progress: ['Texting James…', 'Message delivered'], avatars: ['missed_clockin_james'], tools: ['engage'] },
    { icon: 'clock', headline: 'Await his reply', detail: 'Held the shift open and watched for his response, ready to reflect whatever he says straight onto the record — then check with you before marking it.', bullets: ['James replied — about 15 minutes out', 'Reads as a late start, not an absence', 'Will mark the shift from his reply rather than guess'], progress: ['Waiting on his reply…', 'James replied — 15 min out'], tools: ['engage'] },
  ],
  thread_cancel_wed: [
    { icon: 'edit',  headline: 'Record the release', detail: 'Logged the Wed 7:00 AM shift as released on her behalf so the record stops showing it as covered when it isn’t — an informal “I can’t make it” doesn’t move the schedule on its own.', bullets: ['Release filed against her Pier 9 · Wed 7:00 AM shift', 'Reason noted as a worker-initiated cancellation', 'Shift now reads open, not covered'], progress: ['Filing the release…', 'Wed shift released'], tools: ['update'] },
    { icon: 'send',  headline: 'Acknowledge her', detail: 'Replied to close the loop so she knows the cancellation registered and she’s officially off — no ambiguity about whether she’s still expected.', bullets: ['Confirmed she’s released from the Wed shift', 'Thanked her for the heads-up', 'Left the channel open for a reschedule'], progress: ['Messaging her…', 'Confirmed she’s off the shift'], avatars: ['thread_cancel_wed'], tools: ['engage'] },
    { icon: 'send',  headline: 'Message the top replacements', detail: 'Sent the Wed 7:00 AM brief to the 8 qualified, available workers at once — the shift is tomorrow, so a parallel blast beats working one name at a time.', bullets: ['Matched on Pier 9 site clearance, availability, and rest window', 'All 8 reached on their preferred channel (SMS or in-app)', 'No incentive attached — the qualified pool covers it'], progress: ['Reaching out to Theo Park…', 'Reaching out to Gina Holt…', 'Reaching out to Renata Cruz…', 'Reached all 8 qualified workers'], avatars: ['theo_park', 'gina_holt', 'renata_cruz', 'marcus_idris', 'tina_boyd'], reached: 8, tools: ['policy', 'engage-offer'] },
    { icon: 'clock', headline: 'Collect confirmations', detail: 'Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.', bullets: ['2 workers replied in the first few minutes', 'Theo Park is the first clean yes — site-cleared, no overlap or rest-window conflict', 'Kept the other repliers warm as backup in case he falls through'], progress: ['Waiting on replies…', '2 replies in — checking fit…', 'Theo Park confirmed for Wed'], avatars: ['theo_park'], avatarsOnSettle: true, tools: ['engage-offer'] },
    { icon: 'done',  headline: 'Fill the Wed shift', detail: 'Assigned Theo to the Wed 7:00 AM shift at Pier 9 and updated the record so the schedule reads covered again.', bullets: ['Theo Park assigned · site clearance re-checked at assignment', 'Calendar and his timesheet updated', 'Coverage restored for Wed 7:00 AM'], progress: ['Assigning the Wed shift…', 'Theo Park assigned · coverage restored'], avatars: ['theo_park'], tools: ['policy', 'update-close'] },
  ],
  payroll_acme_invoice: [
    { icon: 'edit',  headline: 'Add the line item', detail: 'Posted the approved shift to Acme’s open invoice as a new line — billable work belongs on the invoice the moment it’s approved, not at month-end when details get fuzzy.', bullets: ['Only the approved shift posted', 'Added to Acme’s current open invoice', 'Hours and rate carried from the timesheet'], progress: ['Posting the shift…', 'Line item added to Acme’s invoice'] },
    { icon: 'rate',  headline: 'Recalculate the total', detail: 'Rolled the new line into the invoice total and re-applied Acme’s net terms, so the draft reflects what they actually owe rather than a stale figure.', bullets: ['Invoice total recomputed with the new line', 'Net payment terms re-applied', 'Due date adjusted accordingly'], progress: ['Recalculating…', 'Total and net terms updated'] },
    { icon: 'done',  headline: 'Save draft', detail: 'Saved it as a draft rather than sending — kept ready for your end-of-week review so you sign off before it reaches the client.', bullets: ['Held as a draft, not sent', 'Queued for your end-of-week review', 'Nothing leaves until you approve'], progress: ['Saving the draft…', 'Draft ready for review'] },
  ],
  job_event_staff: [
    { icon: 'send',  headline: 'Invite the top 40 matches', detail: 'Sent slot invitations to the 40 best-matched workers in ranked order — inviting double the 20 openings gives enough headroom to fill cleanly even with the usual drop-off.', bullets: ['Ranked by event-skill match and availability', 'Top 40 invited for the 20 openings', 'Claim-first — best fits hear about it first'], progress: ['Ranking the matches…', 'Invited the top 40 in order'], avatars: ['event_jamal', 'event_sara', 'event_dmitri', 'event_lena', 'event_kofi'], reached: 40 },
    { icon: 'clock', headline: 'Track responses', detail: 'Held the invites open and filled the 20 openings first-come as acceptances landed, so the slots go to whoever commits rather than waiting on a full ranked pass.', bullets: ['20 openings filled first-come', 'Watched acceptances roll in past the halfway mark', 'Closed each slot as it was claimed'], progress: ['Watching responses…', '14 of 20 slots filled…', 'All 20 openings filled'] },
    { icon: 'done',  headline: 'Keep standby list', detail: 'Kept the workers I didn’t place on a standby list and I’ll ping you at 80% filled, so there’s instant backup for the inevitable last-minute drop.', bullets: ['Unplaced invitees parked on standby', 'Alert set to fire at 80% filled', 'Ready to backfill cancellations fast'], progress: ['Building the standby list…', 'Standby list kept'] },
  ],
  missed_clockout_bianca: [
    { icon: 'send',  headline: 'Text Bianca', detail: 'She left without clocking out, so I texted her to confirm her actual end time rather than guess — a wrong end time on the timesheet costs either her hours or the client’s money.', bullets: ['No clock-out on the open timesheet', 'Asked her to confirm her real end time', 'Geofence shows her off-site around 6:05 PM'], progress: ['Texting Bianca…', 'Asked her to confirm her end time'], avatars: ['missed_clockout_bianca'] },
    { icon: 'edit',  headline: 'Update the timesheet', detail: 'Staged the timesheet so the moment she confirms, I apply her real end time and close the entry — no manual re-keying, no delay into the payroll run.', bullets: ['Timesheet held open, ready to update', 'Will write her confirmed end time on reply', 'Closes the entry once corrected'], progress: ['Standing by for her reply…', 'Timesheet ready to update'] },
    { icon: 'alert', headline: 'Hold for payroll', detail: 'Kept the entry out of payroll until it’s right — if she doesn’t reply before the cutoff I’ll flag payroll rather than let an unverified end time pay out.', bullets: ['Held back from the current payroll run', 'Watching the cutoff time', 'Will escalate to payroll if no reply lands'], progress: ['Watching the payroll cutoff…', 'Holding — will flag if no reply'] },
  ],
  schedule_published: [
    { icon: 'send',  headline: 'Message workers to confirm', detail: 'The schedule went live, so I asked every worker to confirm their shifts — an unconfirmed shift is a no-show risk I’d rather catch this week than Monday morning.', bullets: ['Confirmation request sent to the whole team', 'Each message lists that worker’s shifts', 'Sent on each worker’s preferred channel'], progress: ['Messaging the team…', 'Confirmation request sent to all'], avatars: ['sched_amy', 'sched_ben', 'sched_chloe', 'sched_dev', 'sched_eli'] },
    { icon: 'clock', headline: 'Chase the unconfirmed', detail: 'Tracked the replies and sent reminders to the 22 still outstanding, so the silent ones get a nudge before they quietly become Monday’s gaps.', bullets: ['22 workers still unconfirmed', 'Reminder sent to each holdout', 'Confirmed ones left alone'], progress: ['Tracking confirmations…', 'Reminders sent to the 22 outstanding'], tools: ['engage'] },
    { icon: 'done',  headline: 'Queue readiness summary', detail: 'Queued a Monday-readiness summary for end of day so you get one clear picture of who’s confirmed and where the gaps are before the week starts.', bullets: ['Summary lands by end of day', 'Rolls up confirmed vs. outstanding', 'Highlights any uncovered shifts'], progress: ['Queuing the summary…', 'Readiness summary lands by EOD'] },
  ],
  shift_release_jenny: [
    { icon: 'send',  headline: 'Message the best matches', detail: 'Sent the released shift to the qualified caregivers in ranked order, so the strongest fits hear about it first rather than blasting the whole pool.', bullets: ['Ranked by credential match, proximity, and reliability', 'Reached the top qualified caregivers on their preferred channel', 'Held the wider pool in reserve'], progress: ['Drafting the offer…', 'Reached the qualified caregivers'], avatars: ['renee_wallace', 'carl_jensen', 'tina_boyd', 'jenny_park'] },
    { icon: 'clock', headline: 'Collect confirmations', detail: 'Tracked replies and checked each against policy, taking the first qualified yes rather than the first reply.', bullets: ['Renee Wallace is the first clean yes', 'Credential and availability re-checked before locking in', 'Other repliers kept as backup'], progress: ['Waiting on replies…', 'Renee Wallace confirmed'] },
    { icon: 'done',  headline: 'Fill shift', detail: 'Assigned Renee and pushed the change to the schedule so the released shift no longer reads as a gap.', bullets: ['Renee Wallace assigned · credential verified', 'Schedule and timesheet updated', 'Open offer closed and remaining matches released'], progress: ['Assigning the shift…', 'Renee Wallace assigned · schedule updated'] },
  ],
  birthday_tomas: [
    { icon: 'send',  headline: 'Send the birthday note', detail: 'Sent Tomas a warm birthday note from the team over in-app chat — small recognition like this is cheap to do and lands better same-day than a belated one.', bullets: ['Personalized note from the team', 'Delivered via in-app chat', 'Sent on the day, not after'], progress: ['Writing the note…', 'Birthday note sent'], avatars: ['birthday_tomas'] },
  ],
  weekly_fill_report: [
    { icon: 'send',  headline: 'Publish the report', detail: 'Compiled next week’s fill-rate numbers and posted the report to the Home dashboard, so the whole team sees the same coverage picture in one place.', bullets: ['Fill rate computed across next week', 'Published to the Home dashboard', 'Broken down by day and location'], progress: ['Compiling the numbers…', 'Report published to Home'] },
    { icon: 'alert', headline: 'Flag the at-risk shifts', detail: 'Pulled out the 22 shifts sitting under target and surfaced them to scheduling — a fill-rate average hides the specific shifts that’ll actually go uncovered.', bullets: ['22 shifts below the fill target', 'Each flagged to the scheduling team', 'Sorted worst-coverage first'], progress: ['Scanning the week…', '22 under-target shifts flagged'] },
    { icon: 'done',  headline: 'Notify scheduling', detail: 'Sent scheduling the Mon–Tue gaps specifically — those land first, so acting on them now buys the most lead time before the week opens.', bullets: ['Mon–Tue gaps sent to scheduling', 'Prioritized for earliest impact', 'Time to fill before the week starts'], progress: ['Notifying scheduling…', 'Mon–Tue gaps sent'] },
  ],
  clockin_devon: [
    { icon: 'edit',  headline: 'Confirm the punch', detail: 'Re-ran Devon’s clock-in against the geofence and the required fields and it checks out clean — verifying before payroll beats clawing back a bad punch after.', bullets: ['Punch location inside the geofence', 'All required fields present', 'No edits or overrides on the entry'], progress: ['Re-checking the geofence…', 'Punch confirmed · fields clean'] },
    { icon: 'done',  headline: 'Approve for payroll', detail: 'With the punch clean, I released it straight into the payroll run — no reason to hold a verified clock-in for manual review.', bullets: ['Clean entry approved automatically', 'Released into the current payroll run', 'No manual review needed'], progress: ['Releasing to payroll…', 'Approved for the payroll run'] },
  ],
  phone_aisha: [
    { icon: 'send',  headline: 'Send a verification ping', detail: 'Texted the new number first to prove it actually reaches her — swapping her contact to an unverified number could black out every shift alert she gets.', bullets: ['Test ping sent to the new number', 'Confirms it’s reachable before the swap', 'Old number left active until verified'], progress: ['Texting the new number…', 'Ping delivered'], avatars: ['phone_aisha'] },
    { icon: 'edit',  headline: 'Update the contact', detail: 'Her reply confirmed the line, so I set the verified number as her notification contact — only swapping once I knew it lands.', bullets: ['Reply confirmed the number works', 'Set as her notification contact', 'Old number retired'], progress: ['Verifying the reply…', 'Contact updated'] },
    { icon: 'done',  headline: 'Confirm alerts', detail: 'Re-routed her shift notifications to the new number and confirmed they land, so she won’t miss an offer or an urgent fill.', bullets: ['Shift alerts now route to the new number', 'Delivery confirmed end-to-end', 'No gap in coverage during the switch'], progress: ['Re-routing alerts…', 'Alerts now reach the new number'] },
  ],
  fill_confirmed_maria: [
    { icon: 'edit',  headline: 'Confirm Sarah Quinn', detail: 'Locked Sarah into Maria’s open RN shift — she was the strongest match and a clean fit, so I assigned rather than re-opening the search.', bullets: ['Re-checked RN credential and ICU clearance at assignment', 'No overtime or double-booking conflict', 'Highest-ranked of the available matches'], progress: ['Assigning the shift…', 'Sarah Quinn confirmed'], avatars: ['sarah_quinn'] },
    { icon: 'clock', headline: 'Update the roster', detail: 'Posted the assignment to the live schedule so every downstream view reflects the fill, not the gap.', bullets: ['Calendar and roster updated', 'Sarah’s timesheet opened for the shift', 'The original open slot closed'], progress: ['Posting the change…', 'Roster updated'] },
    { icon: 'done',  headline: 'Notify scheduler', detail: 'Closed the loop with the scheduler so they don’t double-fill or chase coverage that’s already handled.', bullets: ['Scheduler notified the shift is covered', 'Confirmation sent to Sarah', 'Case marked resolved'], progress: ['Notifying the scheduler…', 'Coverage confirmed'], tools: ['engage'] },
  ],
  invoice_paid_4821: [
    { icon: 'rate',  headline: 'Reconcile the payment', detail: 'The client paid #4821 outside Teambridge, so I matched the amount against its open balance to confirm it’s the same invoice before touching anything.', bullets: ['Payment matched to invoice #4821', 'Amount ties out to the open balance', 'Confirmed as an off-platform payment'], progress: ['Matching the payment…', 'Reconciled against #4821'] },
    { icon: 'edit',  headline: 'Close the invoice', detail: 'With the balance fully covered, I marked #4821 paid-in-full — leaving a settled invoice open just invites a duplicate chase.', bullets: ['Balance cleared to zero', 'Status set to paid-in-full', 'Payment date recorded'], progress: ['Clearing the balance…', 'Invoice marked paid-in-full'] },
    { icon: 'done',  headline: 'Update ledger', detail: 'Posted the payment to the ledger so billing reflects reality and the client doesn’t show an outstanding balance they’ve already settled.', bullets: ['Payment posted to the ledger', 'Client balance now reads settled', 'No open AR remaining on #4821'], progress: ['Updating the ledger…', 'Ledger updated'] },
  ],
  cred_expired_nadia: [
    { icon: 'alert', headline: 'Flag the 3 shifts at-risk', detail: 'Scanned Nadia’s upcoming schedule and flagged every shift her lapsed CPR cert now blocks her from legally working, so nothing slips through staffed-but-non-compliant.', bullets: ['3 of her upcoming shifts are CPR-gated', 'Each marked at-risk pending renewal', 'Compliance can’t clear them until the cert is current'], progress: ['Scanning her schedule…', '3 CPR-gated shifts flagged'], tools: ['update'] },
    { icon: 'edit',  headline: 'Assign a renewal task', detail: 'Created a renewal task on Nadia’s profile with the upload step, so the path back to compliant is explicit and tracked rather than left to memory.', bullets: ['Task assigned to Nadia with a CPR-cert upload step', 'Due before her next gated shift', 'Auto-clears the flags once a valid cert is verified'], progress: ['Creating the task…', 'Renewal task assigned to Nadia'], tools: ['task', 'engage-offer'] },
    { icon: 'done',  headline: 'Line up backfills', detail: 'Lined up qualified backfills for the shifts she can’t cover, so the renewal can take its time without leaving the shifts exposed.', bullets: ['Offered the 3 gated shifts to CPR-current workers', 'Ranked by proximity and reliability', 'Will assign on confirmation, or release if Nadia renews first'], progress: ['Finding backfills…', 'Backfills lined up'], avatars: ['carl_jensen', 'tina_boyd', 'marcus_idris'], tools: ['policy', 'engage'] },
  ],
};

/** Multi-step cases: after the first action's work completes, Ultron asks a
 *  follow-up question (the case returns to "Needs attention") before the
 *  second action resolves it. */
/** A record the question references (a worker, shift, location, policy…),
 *  shown as a context card under the prompt. */
export interface RecordRef {
  eyebrow: string;
  title: string;
  meta: string[];
  avatarSeed: string;
}

export interface ThreadFollowUp {
  prompt: string;
  actions: string[];
  working: WorkingMilestone[];
  record?: RecordRef;
}

export const THREAD_FOLLOWUPS: Record<string, ThreadFollowUp> = {
  // NOTE: shift_drop_maria has no follow-up — its working sequence already fills
  // the shift (Aisha Karim assigned), so a "assign Renee instead" prompt would
  // contradict the resolved outcome. The case resolves straight after the fill.
  missed_clockin_james: {
    prompt: 'James says he’s 15 minutes out. Update the shift as confirmed-late?',
    actions: ['Review', 'Confirm late'],
    working: [
      { icon: 'edit',  headline: 'Updating the shift', detail: 'James says he’s about 15 minutes out, so I marked the shift confirmed-late from his own word rather than logging a no-show that isn’t one.', bullets: ['Status set to confirmed-late', 'Based on his SMS, ~15 min out', 'No-show flag cleared'], progress: ['Updating the shift…', 'Marked confirmed-late'], tools: ['update'] },
      { icon: 'send',  headline: 'Notifying the site', detail: 'Gave the location a heads-up to expect him shortly, so they’re not scrambling to backfill a shift that’s about to be covered.', bullets: ['Site told to expect him ~15 min late', 'Heads off an unnecessary backfill', 'Sent to the site’s point of contact'], progress: ['Messaging the site…', 'Site notified'], tools: ['engage'] },
      { icon: 'done',  headline: 'Update shift', detail: 'Closed it out with no replacement search — he’s on his way, so coverage holds and there’s nothing left to chase.', bullets: ['Coverage holds — no replacement needed', 'No fill opened', 'Case resolved'], progress: ['Closing it out…', 'Coverage holds — no replacement needed'], tools: ['update-close'] },
    ],
    record: { eyebrow: 'Worker', title: 'James Okoro', meta: ['On his way', '~15 min late', 'Replied via SMS'], avatarSeed: 'missed_clockin_james' },
  },
  application_priya: {
    prompt: 'Priya answered the screening questions and qualifies. Move her to the recruiter’s queue?',
    actions: ['Review', 'Move to queue'],
    working: [
      { icon: 'edit',  headline: 'Moving Priya to the queue', detail: 'She answered the screening questions and qualifies, so I moved her into the recruiter queue as Qualified — a screened lead shouldn’t wait in the general pile.', bullets: ['Screening answers received and passed', 'Status set to Qualified', 'Placed in the recruiter queue'], progress: ['Handing her off…', 'Moved to the recruiter queue'] },
      { icon: 'send',  headline: 'Notifying the recruiter', detail: 'Handed the recruiter her answers and the 92% match in one note, so they pick up a ready-to-act lead instead of re-screening from scratch.', bullets: ['Screening answers shared', '92% match score attached', 'Recruiter pinged directly'], progress: ['Sharing her answers…', 'Recruiter notified · 92% match'] },
      { icon: 'done',  headline: 'In the recruiter’s queue', detail: 'She’s queued and fully briefed, so the recruiter can take the next step the moment they’re free — nothing left blocking her.', bullets: ['Sitting in the recruiter queue', 'Full context attached', 'Ready for the next step'], progress: ['Finalizing…', 'Ready for the next step'] },
    ],
    record: { eyebrow: 'CNA', title: 'Priya Raman', meta: ['92% match', 'Screened', 'Night Shift'], avatarSeed: 'application_priya' },
  },
};

/** Stage-0 record(s) referenced by each thread's question. A single record for
 *  most cases; a short ranked list where the question is about choosing among
 *  candidates (rendered as a vertical stack of record cards). */
export const THREAD_RECORDS: Record<string, RecordRef | RecordRef[]> = {
  shift_drop_maria: [
    { eyebrow: 'RN', title: 'Renee Wallace', meta: ['94% match', 'Available now', 'CPR current'], avatarSeed: 'renee_wallace' },
    { eyebrow: 'RN', title: 'Carl Jensen',   meta: ['90% match', 'Available now', 'Within radius'], avatarSeed: 'carl_jensen' },
    { eyebrow: 'RN', title: 'Tina Boyd',     meta: ['87% match', 'Available now', 'No OT conflict'], avatarSeed: 'tina_boyd' },
  ],
  timeoff_sofia:        { eyebrow: 'PTO request', title: 'Sofia Marin', meta: ['Thu–Fri', '2 shifts inside', 'Balance OK'], avatarSeed: 'timeoff_sofia' },
  document_kenji:       { eyebrow: 'Document', title: 'CPR Certification', meta: ['Kenji Tanaka', 'Expires in 3 weeks', 'Valid'], avatarSeed: 'document_kenji' },
  application_priya:    { eyebrow: 'CNA · New Lead', title: 'Priya Raman', meta: ['92% match', 'Night Shift', 'Downtown'], avatarSeed: 'application_priya' },
  new_user_luis:        { eyebrow: 'Candidate', title: 'Luis Mendez', meta: ['New record', '5 intake tasks', 'No tasks yet'], avatarSeed: 'new_user_luis' },
  missed_clockin_james: { eyebrow: 'Worker', title: 'James Okoro', meta: ['9:00 AM shift', 'No clock-in', 'Grace elapsed'], avatarSeed: 'missed_clockin_james' },
  thread_cancel_wed:    { eyebrow: 'Open Wed shift', title: 'Wed · 7:00 AM', meta: ['Pier 9', 'Informal cancel', 'No release filed'], avatarSeed: 'thread_cancel_wed' },
  missed_clockout_bianca:{ eyebrow: 'Open timesheet', title: 'Bianca Rossi', meta: ['No clock-out', 'Off-site ~6:05 PM', 'Held from payroll'], avatarSeed: 'missed_clockout_bianca' },
  cred_expired_nadia:   { eyebrow: 'Policy', title: 'Nadia Haddad', meta: ['CPR expired', '3 shifts at risk', 'Backfills ready'], avatarSeed: 'cred_expired_nadia' },
  shift_release_jenny: [
    { eyebrow: 'Caregiver', title: 'Renee Wallace', meta: ['94% match', 'Available now', 'Within radius'], avatarSeed: 'renee_wallace' },
    { eyebrow: 'Caregiver', title: 'Carl Jensen',   meta: ['90% match', 'Available now', 'No OT conflict'], avatarSeed: 'carl_jensen' },
    { eyebrow: 'Caregiver', title: 'Tina Boyd',     meta: ['87% match', 'Available now', 'CPR current'], avatarSeed: 'tina_boyd' },
  ],
  fill_confirmed_maria: { eyebrow: 'RN', title: 'Sarah Quinn', meta: ['Clears policy', 'Available now', 'Within radius'], avatarSeed: 'sarah_quinn' },
};

/** A discrete step in a decision's plan — what Ultron will run, in order, if the
 *  operator approves. Replaces the flat candidate-card list on the decision
 *  surface so a bundled "do A and B" prompt reads as its constituent tasks. */
export interface PlanTask {
  label: string;
  /** A secondary line under the label — what the step actually does, in a
   *  sentence (shown muted beneath the task title). */
  detail?: string;
  /** When set, the task surfaces the thread's candidate records as a stacked
   *  avatar group (the people it would contact) instead of plain text. */
  showsCandidates?: boolean;
  /** A single person the task acts on (e.g. the manager to notify) — shown as
   *  one avatar + name in the trailing slot. */
  person?: { name: string; avatarSeed: string };
}

/** Per-thread task breakdown for the docked decision surface. A thread with an
 *  entry here renders its plan as tasks; others keep the candidate-card list.
 *  Sourced from each event's "What I'd do" steps. */
export const THREAD_TASKS: Record<string, PlanTask[]> = {
  shift_drop_maria: [
    { label: 'Message the best-matched replacements', detail: 'Reach out to the top qualified RNs (max 20 — based on 24 active scheduling policies) with the shift details.', showsCandidates: true },
    { label: 'Confirm and assign shift', detail: 'Communicate the need with staff, and assign them to the shift if they agree.' },
    { label: 'Notify the location manager', detail: 'Notify the location manager of the last-minute scheduling change.', person: { name: 'Dana Cole', avatarSeed: 'scheduler_dana' } },
  ],
  timeoff_sofia: [
    { label: 'Confirm the PTO balance covers it', detail: 'Check her balance against the two requested days off.' },
    { label: 'Auto-approve the Thursday portion', detail: 'Thursday stays fully covered, so approve it outright.' },
    { label: 'Flag Friday for you', detail: 'Friday’s coverage is thin — hold it for your call.', person: { name: 'You', avatarSeed: 'operator' } },
  ],
  document_kenji: [
    { label: 'Set the type to CPR Cert and save the expiry', detail: 'File the upload as a CPR certification with its expiry date.' },
    { label: 'Mark the credential verified', detail: 'Update Kenji’s profile so the record reads as valid.' },
    { label: 'Flag that it expires soon', detail: 'Set a renewal reminder ahead of the 3-week expiry.' },
  ],
  application_priya: [
    { label: 'Update the status to Qualified', detail: 'Move the application forward off the strong 92% match.' },
    { label: 'Send a warm intro message', detail: 'Reach out to confirm her interest in the role.' },
    { label: 'Ask the two screening questions', detail: 'Cover the basics before the recruiter handoff.' },
    { label: 'Move to the recruiter’s queue on reply', detail: 'Hand off to the recruiter once she responds.' },
  ],
  new_shift_forklift: [
    { label: 'Offer to the top matches in ranked order', detail: 'Send the shift to the 6 best certified workers by proximity and reliability.', showsCandidates: true },
    { label: 'Assign the first claim that clears policy', detail: 'Take the first claim that passes the certification check.' },
    { label: 'Confirm and update the calendar', detail: 'Lock in the assignment and reflect it on the schedule.' },
  ],
  new_user_luis: [
    { label: 'Send Luis a welcome message', detail: 'Kick off onboarding for the new candidate.', person: { name: 'Luis Mendez', avatarSeed: 'new_user_luis' } },
    { label: 'Assign the required intake tasks', detail: 'Add the 5 standard intake tasks to his record.' },
    { label: 'Follow up until everything’s completed', detail: 'Track each task through to completion.' },
  ],
  missed_clockin_james: [
    { label: 'Text James to ask if he’s on his way', detail: 'Reach him on SMS, his preferred channel, before calling it a no-show.', person: { name: 'James Okoro', avatarSeed: 'missed_clockin_james' } },
    { label: 'Update the shift’s confirmation status', detail: 'Reflect whatever he replies on the shift record.' },
    { label: 'Flag the scheduling inbox if he’s a no-show', detail: 'Escalate to scheduling if he doesn’t respond.' },
  ],
  thread_cancel_wed: [
    { label: 'Record the shift as released on her behalf', detail: 'Log the informal cancellation as a formal release.' },
    { label: 'Reply to acknowledge she’s off it', detail: 'Confirm to her that she’s off the Wed shift.' },
    { label: 'Message the best-matched replacements', detail: 'Reach out to the top qualified workers (max 8 — based on 16 active scheduling policies) with the shift details.', showsCandidates: true },
    { label: 'Confirm and fill the Wed shift', detail: 'Assign the first clean confirmation and update the schedule.' },
  ],
  payroll_acme_invoice: [
    { label: 'Add the shift as a line item', detail: 'Post the approved $48/hr · 8 hr shift to Acme’s open invoice.' },
    { label: 'Recalculate the invoice total and terms', detail: 'Update the total and keep the net-30 terms.' },
    { label: 'Keep the draft ready for your review', detail: 'Hold it for your end-of-week review.' },
  ],
  job_event_staff: [
    { label: 'Invite the top 40 matches', detail: 'Send slot invitations to the best-ranked eligible workers.', showsCandidates: true },
    { label: 'Fill the 20 openings first-come', detail: 'Assign slots as claims arrive until all 20 are filled.' },
    { label: 'Keep a standby list and notify you at 80%', detail: 'Hold backups in reserve and ping you once 16 slots fill.' },
  ],
  missed_clockout_bianca: [
    { label: 'Text Bianca to confirm her actual end time', detail: 'Verify the end time rather than guess from the geofence ping.', person: { name: 'Bianca Rossi', avatarSeed: 'missed_clockout_bianca' } },
    { label: 'Update the timesheet from her reply', detail: 'Correct the open punch with her real end time.' },
    { label: 'Flag payroll if she doesn’t respond', detail: 'Escalate so the run isn’t delayed.' },
  ],
  schedule_published: [
    { label: 'Message all workers to confirm', detail: 'Send confirmations across next week’s 84 shifts before the weekend.' },
    { label: 'Chase the unconfirmed with a reminder', detail: 'Follow up on the 22 still-unconfirmed shifts.' },
    { label: 'Give you a Monday-readiness summary', detail: 'Report where start-of-week coverage stands.' },
  ],
  shift_release_jenny: [
    { label: 'Message the best-matched replacements', detail: 'Reach out to the 5 qualified caregivers in ranked order.', showsCandidates: true },
    { label: 'Assign the first qualified yes', detail: 'Take the first replacement who clears policy.' },
    { label: 'Confirm the fill and update the schedule', detail: 'Lock in the assignment and update the roster.' },
  ],
  weekly_fill_report: [
    { label: 'Publish the report to the Home dashboard', detail: 'Make the weekly fill-rate report visible to the team.' },
    { label: 'Flag the 22 under-target shifts', detail: 'Highlight the gaps, heaviest on Monday and Tuesday.' },
    { label: 'Notify scheduling of the Mon–Tue gaps', detail: 'Hand the at-risk shifts to scheduling to act on.', person: { name: 'Dana Cole', avatarSeed: 'scheduler_dana' } },
  ],
  clockin_devon: [
    { label: 'Re-check the geofence and required fields', detail: 'Confirm the punch is inside the geofence with all fields present.' },
    { label: 'Approve the clock-in for payroll', detail: 'Clear it for the upcoming payroll run.' },
  ],
  phone_aisha: [
    { label: 'Send a verification ping to the new number', detail: 'Confirm the updated number actually reaches her.', person: { name: 'Aisha Bello', avatarSeed: 'phone_aisha' } },
    { label: 'Update her notification contact on reply', detail: 'Save the new number once it checks out.' },
    { label: 'Confirm shift alerts route to it', detail: 'Make sure shift alerts keep reaching her.' },
  ],
  fill_confirmed_maria: [
    { label: 'Confirm Sarah Quinn for the shift', detail: 'Commit Sarah to the open RN shift at Riverside.', person: { name: 'Sarah Quinn', avatarSeed: 'sarah_quinn' } },
    { label: 'Update the roster', detail: 'Reflect the coverage on the schedule.' },
    { label: 'Notify the scheduler', detail: 'Let the scheduler know the shift is covered.', person: { name: 'Dana Cole', avatarSeed: 'scheduler_dana' } },
  ],
  invoice_paid_4821: [
    { label: 'Reconcile the payment against the open balance', detail: 'Match the out-of-band payment to invoice #4821.' },
    { label: 'Close the invoice once it clears', detail: 'Mark it paid so the record is accurate.' },
    { label: 'Update the ledger', detail: 'Clear the open balance from the books.' },
  ],
  cred_expired_nadia: [
    { label: 'Flag her 3 upcoming shifts as at-risk', detail: 'Mark the CPR-gated shifts her lapse now blocks.' },
    { label: 'Assign Nadia a renewal task with the upload', detail: 'Start her recertification with a document upload.', person: { name: 'Nadia Haddad', avatarSeed: 'cred_expired_nadia' } },
    { label: 'Offer to backfill the shifts she can’t work', detail: 'Line up available replacements so coverage holds.' },
  ],
};

/** One labelled fact about the event, shown as a label → value row in the flag
 *  card. `alert` marks the values that are *what's off* — the anomalous ones,
 *  rendered in the warning tone (e.g. the imminent start time, the missing
 *  coverage) so the problem reads at a glance. */
export interface FlagRow {
  label: string;
  value: string;
  alert?: boolean;
}

/** A compact facts card Ultron surfaces alongside its plan: a header naming the
 *  event, then a few labelled facts with the salient ones flagged. The tone sets
 *  the accent — `warning` highlights what's off, `positive` what's confirmed,
 *  `neutral` the routine read. */
export interface EventFlag {
  /** Accessible label for the card (the visible eyebrow text is omitted). */
  eyebrow: string;
  /** Accent + badge glyph. Defaults to `warning`. */
  tone?: 'warning' | 'positive' | 'neutral';
  title: string;
  subtitle: string;
  rows: FlagRow[];
}

/** Per-thread facts cards — one per event, surfaced inside Ultron's plan message.
 *  Problem cases lead with what's off (warning); resolved/healthy ones with what's
 *  confirmed (positive); routine ones read neutral. */
export const THREAD_FLAGS: Record<string, EventFlag> = {
  // ── New · needs attention ──
  shift_drop_maria: {
    eyebrow: 'What’s off', tone: 'warning',
    title: 'Uncovered shift · Maria Ellis',
    subtitle: 'Today · 2:00–10:00 PM',
    rows: [
      { label: 'Role', value: 'RN · ICU' },
      { label: 'Location', value: 'Riverside Clinic' },
      { label: 'Starts in', value: '4 hours', alert: true },
      { label: 'Coverage', value: 'None lined up', alert: true },
    ],
  },
  timeoff_sofia: {
    eyebrow: 'What’s off', tone: 'warning',
    title: 'Time-off request · Sofia Marin',
    subtitle: 'Next Thu–Fri',
    rows: [
      { label: 'PTO balance', value: 'Covers it' },
      { label: 'Thursday', value: 'Fully covered' },
      { label: 'Friday', value: 'Thin — 1 backup', alert: true },
    ],
  },
  document_kenji: {
    eyebrow: 'What’s off', tone: 'warning',
    title: 'CPR certification · Kenji Tanaka',
    subtitle: 'Profile upload',
    rows: [
      { label: 'Name match', value: 'Verified' },
      { label: 'Credential', value: 'Valid' },
      { label: 'Expires', value: 'In 3 weeks', alert: true },
    ],
  },
  application_priya: {
    eyebrow: 'What stands out', tone: 'positive',
    title: 'New application · Priya R.',
    subtitle: 'CNA · Night Shift · Downtown',
    rows: [
      { label: 'License', value: 'Valid' },
      { label: 'Availability', value: 'Matches shift' },
      { label: 'Match', value: '92%', alert: true },
    ],
  },
  new_shift_forklift: {
    eyebrow: 'What stands out', tone: 'neutral',
    title: 'New shift · Forklift Op',
    subtitle: 'Fri · 6:00 AM · Bay 4',
    rows: [
      { label: 'Requirement', value: 'Certified-only' },
      { label: 'Available pool', value: '11 certified', alert: true },
      { label: 'Coverage risk', value: 'None' },
    ],
  },
  new_user_luis: {
    eyebrow: 'What stands out', tone: 'neutral',
    title: 'New candidate · Luis M.',
    subtitle: 'Onboarding',
    rows: [
      { label: 'Record', value: 'Candidate' },
      { label: 'Tasks on file', value: 'None yet' },
      { label: 'Intake set', value: '5 standard', alert: true },
    ],
  },
  missed_clockin_james: {
    eyebrow: 'What’s off', tone: 'warning',
    title: 'Missed clock-in · James Okoro',
    subtitle: 'Today · 9:00 AM',
    rows: [
      { label: 'Grace window', value: 'Elapsed', alert: true },
      { label: 'Release on file', value: 'None' },
      { label: 'Channel', value: 'SMS' },
    ],
  },
  thread_cancel_wed: {
    eyebrow: 'What’s off', tone: 'warning',
    title: 'Informal cancellation · Wed shift',
    subtitle: 'Wed · 7:00 AM · Pier 9',
    rows: [
      { label: 'Message', value: '“Can’t make tomorrow”' },
      { label: 'Formal release', value: 'None', alert: true },
      { label: 'Record', value: 'Still shows covered', alert: true },
    ],
  },
  job_event_staff: {
    eyebrow: 'What stands out', tone: 'neutral',
    title: 'New job · Event Staff',
    subtitle: 'Sat · 4:00 PM',
    rows: [
      { label: 'Openings', value: '20' },
      { label: 'Eligible', value: '63 ranked', alert: true },
      { label: 'Filtered out', value: '9 double-booked' },
    ],
  },
  missed_clockout_bianca: {
    eyebrow: 'What’s off', tone: 'warning',
    title: 'Open timesheet · Bianca Rossi',
    subtitle: 'Shift ended ~6:05 PM',
    rows: [
      { label: 'Clock-out', value: 'Missing', alert: true },
      { label: 'Last ping', value: 'Off-site ~6:05 PM' },
      { label: 'Payroll', value: 'Held' },
    ],
  },
  payroll_acme_invoice: {
    eyebrow: 'What stands out', tone: 'neutral',
    title: 'Payroll approved · Acme Logistics',
    subtitle: '$48/hr · 8 hrs',
    rows: [
      { label: 'Invoice', value: 'Open · net-30' },
      { label: 'Duplicate line', value: 'None' },
      { label: 'Action', value: 'Roll onto invoice', alert: true },
    ],
  },
  schedule_published: {
    eyebrow: 'What’s off', tone: 'warning',
    title: 'Schedule published · Next week',
    subtitle: '84 shifts · 31 workers',
    rows: [
      { label: 'Unconfirmed', value: '22 shifts', alert: true },
      { label: 'Heaviest', value: 'Mon–Tue', alert: true },
      { label: 'Workers', value: '31' },
    ],
  },
  // ── New · needs attention (formerly Done) ──
  shift_release_jenny: {
    eyebrow: 'What’s off', tone: 'warning',
    title: 'Released shift · Jenny Park',
    subtitle: 'Sat · 8:00 AM · Lakeside',
    rows: [
      { label: 'Notice', value: 'More than 12 hours' },
      { label: 'Qualified', value: '5 caregivers' },
      { label: 'Coverage', value: 'None yet', alert: true },
    ],
  },
  birthday_tomas: {
    eyebrow: 'What stands out', tone: 'neutral',
    title: 'Birthday · Tomas Greco',
    subtitle: 'Today',
    rows: [
      { label: 'Employee', value: 'Active' },
      { label: 'Channel', value: 'In-app chat' },
      { label: 'Message', value: 'Not sent yet', alert: true },
    ],
  },
  weekly_fill_report: {
    eyebrow: 'What’s off', tone: 'warning',
    title: 'Fill-rate report · Next week',
    subtitle: '84 shifts · 31 workers',
    rows: [
      { label: 'Under target', value: '22 shifts', alert: true },
      { label: 'Heaviest', value: 'Mon–Tue', alert: true },
      { label: 'Status', value: 'Not shared yet' },
    ],
  },
  clockin_devon: {
    eyebrow: 'What stands out', tone: 'neutral',
    title: 'Clock-in · Devon Pierce',
    subtitle: 'Eastgate Warehouse',
    rows: [
      { label: 'Geofence', value: 'Inside' },
      { label: 'Required fields', value: 'Complete' },
      { label: 'Payroll', value: 'Awaiting approval', alert: true },
    ],
  },
  phone_aisha: {
    eyebrow: 'What stands out', tone: 'neutral',
    title: 'Phone change · Aisha Bello',
    subtitle: 'Today',
    rows: [
      { label: 'Field', value: 'Phone number' },
      { label: 'Used for', value: 'Shift alerts' },
      { label: 'Verification', value: 'Pending', alert: true },
    ],
  },
  fill_confirmed_maria: {
    eyebrow: 'What’s off', tone: 'warning',
    title: 'Open RN shift · Maria’s shift',
    subtitle: 'Riverside Clinic',
    rows: [
      { label: 'Candidate', value: 'Sarah Quinn' },
      { label: 'Policy', value: 'Clears · available' },
      { label: 'Assignment', value: 'Unconfirmed', alert: true },
    ],
  },
  invoice_paid_4821: {
    eyebrow: 'What stands out', tone: 'neutral',
    title: 'Paid invoice · #4821',
    subtitle: 'Marked paid by client',
    rows: [
      { label: 'Payment', value: 'Recorded out-of-band' },
      { label: 'Balance', value: 'Still open', alert: true },
      { label: 'Invoice', value: 'Not closed yet' },
    ],
  },
  cred_expired_nadia: {
    eyebrow: 'What’s off', tone: 'warning',
    title: 'Credential lapsed · Nadia Haddad',
    subtitle: 'CPR certification',
    rows: [
      { label: 'Status', value: 'Expired', alert: true },
      { label: 'Policy', value: 'Blocking' },
      { label: 'Shifts at risk', value: '3', alert: true },
    ],
  },
};

/** Ultron's full read on a case, communicated as a short message after the
 *  (collapsed) thinking group — returned as separate paragraphs so it reads in
 *  digestible beats: the reasoning from the start (how it sized up the situation
 *  and the risk), then a closing beat. For a case awaiting a decision that closing
 *  beat is the concrete plan it's asking to approve; for a resolved / workflow-ready
 *  case it's the outcome. The reasoning is the case's own analysis narrative; the
 *  plan mirrors the task breakdown (or the recommendation). */
export function caseSummary(thread: ThreadItem): string[] {
  // Each analysis step's detail line becomes its own paragraph, in order (the
  // closing "Share plan" step carries no detail, so it drops).
  const paragraphs = analyzingSteps(thread.id).map(s => s.detail).filter(Boolean);

  const awaiting = thread.status === 'needs_approval' || thread.status === 'recommended';
  if (awaiting) {
    const tasks = THREAD_TASKS[thread.id];
    if (tasks?.length) {
      const steps = tasks.map(t => t.label.charAt(0).toLowerCase() + t.label.slice(1));
      const list = steps.length > 1
        ? `${steps.slice(0, -1).join(', ')}, and ${steps[steps.length - 1]}`
        : steps[0];
      paragraphs.push(`Here’s my plan — I’ll ${list}. Approve below and I’ll get started.`);
    } else {
      paragraphs.push(`Here’s my plan — ${thread.recommendation} Approve below and I’ll get started.`);
    }
  } else {
    // Resolved / workflow-ready: close on the outcome — unless the case needed no
    // action (its reasoning already concludes that, so an outcome line just repeats it).
    const noAction = thread.recommendation.trim().toLowerCase().startsWith('no action');
    if (!noAction && thread.outcome) paragraphs.push(thread.outcome);
  }

  return paragraphs;
}

/** Ultron's read on a case as a *persistent* message: the reasoning beats plus
 *  the plan it shaped — frozen, so it stays put through the case's lifecycle
 *  (awaiting → working → resolved) rather than being swapped for the outcome.
 *  The outcome is communicated by the trail's final step, so this message reads
 *  the same before and after the operator acts. `acted` drops the "Approve below"
 *  call-to-action once the operator has already responded. */
export function casePlan(thread: ThreadItem, acted: boolean): string[] {
  const paragraphs = analyzingSteps(thread.id).map(s => s.detail).filter(Boolean);

  const tasks = THREAD_TASKS[thread.id];
  let plan: string;
  if (tasks?.length) {
    const steps = tasks.map(t => t.label.charAt(0).toLowerCase() + t.label.slice(1));
    const list = steps.length > 1
      ? `${steps.slice(0, -1).join(', ')}, and ${steps[steps.length - 1]}`
      : steps[0];
    plan = `Here’s my plan — I’ll ${list}.`;
  } else {
    plan = `Here’s my plan — ${thread.recommendation}`;
  }
  if (!acted) plan += ' Approve below and I’ll get started.';
  paragraphs.push(plan);

  return paragraphs;
}

/** Past-activity breakdown shown (expandable) on a resolved card. A block is a
 *  paragraph, and/or a labeled bullet list, a labeled check list, and/or a list
 *  of referenced records (people/shifts) rendered as record cards. */
export interface ActivityBlock {
  text?: string;
  label?: string;
  bullets?: string[];
  checks?: string[];
  records?: RecordRef[];
}

export interface ActivityMilestone {
  icon: WorkingIcon;
  headline: string;
  blocks?: ActivityBlock[];
  /** Running progress beats shown as a sub-row under the headline (see
   *  WorkingMilestone.progress) — carried over from working milestones. */
  progress?: string[];
  /** Matched-user avatar seeds (see WorkingMilestone.avatars) — carried over. */
  avatars?: string[];
  /** Hold the avatar cluster back until the step settles (see
   *  WorkingMilestone.avatarsOnSettle) — carried over. */
  avatarsOnSettle?: boolean;
  /** True total reached when it exceeds the faces shown (see WorkingMilestone.reached)
   *  — drives the avatar cluster's trailing "+N" overflow chip. Carried over. */
  reached?: number;
  /** The tools this step drove, with detail normalized to this event's context
   *  (see usageForThread). Surfaced in the step's run-details drawer. Present on
   *  executed steps; reasoning steps carry none. */
  usage?: ActivityUsage;
  /** Start the step's accordion open, so its sub-context (bullets) reads under the
   *  headline without a click — used by the folded analysis line, whose bullets
   *  ARE the content. Still collapsible via the chevron. */
  defaultOpen?: boolean;
}

const THREAD_ACTIVITY: Record<string, ActivityMilestone[]> = {
  // New-group cases read as a tight thinking sequence: the detection facts are
  // folded into the analyzing steps (see ANALYZING_ACTIVITIES), so the event
  // trail carries no separate milestones — the reasoning IS the whole trail.
  shift_drop_maria: [],
  timeoff_sofia: [],
  document_kenji: [],
  application_priya: [],
  new_shift_forklift: [],
  new_user_luis: [],
  missed_clockin_james: [],
  thread_cancel_wed: [],
  payroll_acme_invoice: [],
  job_event_staff: [],
  missed_clockout_bianca: [],
  schedule_published: [],
  // Formerly Done — now pending New cases: the reasoning trail IS the whole
  // story (the executed work only appears after the operator approves).
  shift_release_jenny: [],
  fill_confirmed_maria: [],
  cred_expired_nadia: [],
  birthday_tomas: [],
  weekly_fill_report: [],
  clockin_devon: [],
  phone_aisha: [],
  invoice_paid_4821: [],
};

const STATE_ICON: Record<string, WorkingIcon> = {
  detected: 'clock', assessment: 'alert', recommendation: 'send',
  approval: 'edit', execution: 'edit', resolution: 'done',
  monitoring: 'clock', workflow: 'done',
};

/** Per-state detail sentence, sourced from the thread's own narrative fields so
 *  every derived milestone carries a sub-level explanation. Falls back to the
 *  assessment (always present) when the preferred field is empty. */
const STATE_DETAIL: Record<string, (t: ThreadItem) => string | null | undefined> = {
  detected:       t => t.event,
  assessment:     t => t.assessment,
  recommendation: t => t.recommendation,
  approval:       t => t.recommendation,
  execution:      t => t.recommendation,
  resolution:     t => t.outcome ?? t.recommendation,
  monitoring:     t => t.assessment,
  workflow:       t => t.workflowOpportunity ?? t.recommendation,
};

/** The activity breakdown for a thread: an authored rich version where one
 *  exists, otherwise derived from the timeline — each step gets a detail block
 *  drawn from the thread's narrative so no milestone is left bare. */
export function activityForThread(thread: ThreadItem): ActivityMilestone[] {
  // Normalize for the dedupe check below — ignore case and trailing punctuation
  // so "Two RNs called out…" and "Two RNs called out….​" count as the same line.
  const norm = (s: string) => s.trim().replace(/[.\s]+$/, '').toLowerCase();
  return THREAD_ACTIVITY[thread.id]
    ?? thread.timeline.map(s => {
      const detail = STATE_DETAIL[s.state]?.(thread) ?? thread.assessment;
      // Drop the sub-context when it just restates the headline (e.g. an
      // event-spawned case whose detected detail is the title verbatim) — a
      // repeated line reads as redundant noise.
      const redundant = detail != null && norm(detail) === norm(s.headline);
      return {
        icon: STATE_ICON[s.state] ?? 'clock',
        headline: s.headline,
        blocks: detail && !redundant ? [{ text: detail }] : undefined,
      };
    });
}

/** Which glyph fronts a usage row — mapped to an Alloy icon at render time so the
 *  data layer stays component-free. */
export type UsageIconKey =
  | 'search' | 'read' | 'message' | 'policy' | 'shield' | 'schedule'
  | 'analytics' | 'clock' | 'monitor' | 'bell' | 'record' | 'task';

/** One eligible worker the Policy Engine returned — surfaced as a ranked row in
 *  the Policy Engine detail (name + match score + distance from the site). */
export interface UsageCandidate {
  name: string;
  /** Match score, e.g. "4.9 match". */
  match: string;
  /** Distance from the site, e.g. "3.2 mi". */
  distance: string;
}

/** One Engage message thread — who it reached, the latest line in the thread, and
 *  its current status. `tone` reads the status chip: `positive` (a warm reply)
 *  shows green; `muted` (still delivered, no reply) shows quiet. */
/** One line in an Engage thread transcript — who sent it and when. */
export interface ThreadMessage {
  /** `them` = the worker; `ultron` = the outbound Engage message. */
  from: 'them' | 'ultron';
  text: string;
  /** Short clock label, e.g. "2:04 PM". */
  time: string;
}

export interface UsageThread {
  /** Avatar seed (see avatarUrl). */
  seed: string;
  name: string;
  /** Latest line in the thread — their reply, or the delivery state. */
  preview: string;
  /** Status chip text, e.g. "Interested" / "Chatting" / "Delivered". */
  status: string;
  /** Drives the status chip + sort order: `positive` (warm reply → green),
   *  `chatting` (active back-and-forth → blue), `muted` (delivered, no reply). */
  tone: 'positive' | 'chatting' | 'muted';
  /** Full back-and-forth, shown when the row is expanded. Present on warm threads
   *  (interested / chatting); absent for the delivered long tail (nothing to show). */
  conversation?: ThreadMessage[];
}

/** A one-way Engage notification — a single recipient (with their role + the
 *  channel it went out on) and the message body Ultron sent. Used for FYI sends
 *  (notify a manager / scheduler), where there's one addressee and no back-and-forth
 *  rather than a multi-recipient outreach thread list. */
export interface UsageNotification {
  /** Avatar seed (see avatarUrl). */
  seed: string;
  name: string;
  /** The recipient's role, e.g. "Location manager". */
  role: string;
  /** The channel(s) it went out on, e.g. "push + email". */
  channel: string;
  /** The message body Ultron sent. */
  message: string;
}

/** One key/value row in an UpdateData write — a field label and the value Ultron
 *  wrote. `emphasis: 'success'` renders the value text in the success green — the
 *  field the update actually changed, against plain context rows. `emphasis:
 *  'success-tag'` promotes the value from plain text to a success-toned Tag.
 *  `emphasis: 'change'` renders a field REPLACEMENT: the dropped `previousValue`
 *  struck through, then the new `value` in success green (e.g. an open shift
 *  reassigned from the person who dropped it to the person who took it). */
export interface DetailRow {
  label: string;
  value: string;
  emphasis?: 'success' | 'success-tag' | 'change';
  /** The prior value, shown struck through before the new `value` when
   *  `emphasis: 'change'`. */
  previousValue?: string;
}

/** A write Ultron committed to a Teambridge record — the resolution landing. The
 *  record it wrote to (`recordType` is open-ended, not a fixed enum — Shift today,
 *  any record tomorrow) plus the fields it set, rendered as a key/value list.
 *  A write touching SEVERAL records (e.g. three gated shifts each marked
 *  unassigned) uses `groups` instead — one field list per record, rendered as
 *  separate stacked cards under the one eyebrow. */
export interface UpdateDataResult {
  recordType: 'Shift' | 'Worker' | 'Placement' | string;
  fields?: DetailRow[];
  groups?: DetailRow[][];
}

/** One tool Ultron drove on a step. Surfaced in the run-details drawer as a
 *  collapsible row (icon + name + description) that expands into a detail shaped to
 *  the step:
 *   · Planning (the "Share plan" beat) — the intended invocation as a
 *     `query` block plus a `summary` of what it will return/do.
 *   · Execution — what actually happened: the Policy Engine shows the policies it
 *     evaluated and the eligible workers it returned; Engage shows either the message
 *     threads it opened (outreach) or a single recipient + message (a notification).
 *  Each detail section is optional, so an entry renders only the sections present. */
export interface UsageEntry {
  name: string;
  description: string;
  icon: UsageIconKey;
  /** Planning — the tool invocation Ultron will run, shown as a code block. */
  query?: string;
  /** Planning — a plain-language summary of what the invocation returns / will do. */
  summary?: string;
  /** Planning (notification) — the message body the notify will send. */
  message?: string;
  /** Policy Engine — the policies it evaluated against (total count + the checked
   *  list shown). */
  policies?: { total: number; items: string[] };
  /** Policy Engine — the eligible workers it returned (total count + the top ranked
   *  rows shown; the remainder collapses into a "+N more {moreNoun}" line). */
  eligible?: { total: number; unit: string; moreNoun: string; items: UsageCandidate[] };
  /** Incentive recommendation — the verdict on whether to attach a bonus, how much,
   *  and why. Rendered as a "Recommendation" section. */
  recommendation?: { add: boolean; amount: string; rationale: string };
  /** Engage (outreach) — the channel the outreach went out on, e.g. "SMS" /
   *  "In-app", parsed from the Engage entry's display name. */
  channel?: string;
  /** Engage (outreach) — the message threads it opened (total count + the first rows
   *  shown; the remainder collapses into a "+N more {moreNoun}" line). */
  threads?: { total: number; moreNoun: string; items: UsageThread[] };
  /** Engage (notification) — a single recipient + the message body sent. */
  notification?: UsageNotification;
  /** Read Data — the record snapshot the read pulled, as key/value rows. Rendered
   *  under a "Record details" eyebrow like an Update Data write, but read-only (no
   *  title qualifier, so the tool stays "Read data: {type}"). */
  recordDetails?: DetailRow[];
  /** Update Data — the write Ultron committed to a Teambridge record (the record
   *  type + the fields it set). Present on the resolution step that lands the change. */
  updateData?: UpdateDataResult;
  /** Tasks — the task Ultron created (assignee, steps, due), rendered as the same
   *  key/value card as an UpdateData write. */
  task?: { fields: DetailRow[] };
}

/** The capabilities an activity drew on, as one flat list. A single scannable set
 *  reads more easily than a tools/skills/data split, so the three kinds are merged
 *  into one. Keyed by the activity's icon (its kind) so every activity carries a
 *  plausible, relevant set without per-milestone authoring. */
export type ActivityUsage = UsageEntry[];

/** A tool Ultron can drive on a step:
 *   · `match` / `credential` / `incentive` — the read-only analysis sub-tools that
 *     form the plan (rank a replacement pool, vet the top match, size an incentive).
 *     Only present when the case actually matched a pool (policy.eligible).
 *   · `policy` — the Policy Engine (eligibility + rules).
 *   · `engage` — Engage outreach (worker messaging).
 *   · `notify` — an Engage notification (a one-way FYI to a single recipient).
 *   · `notify-scheduler` — a second Engage notification, to the scheduler (distinct
 *     recipient/message from `notify`, so a step can send both).
 *   · `update` — an Update Data write (committing the resolution to a record).
 *  A step lists the kinds it drove; the detail for each is normalized to the case
 *  via THREAD_USAGE. */
export type UsageToolKind = 'read' | 'match' | 'policy' | 'credential' | 'incentive' | 'engage' | 'engage-offer' | 'notify' | 'notify-scheduler' | 'update' | 'update-close' | 'task';

/* Compact constructors for the per-thread content below. */
const cand = (name: string, match: string, distance: string): UsageCandidate => ({ name, match, distance });
const thr = (seed: string, name: string, preview: string, status: string, tone: 'positive' | 'chatting' | 'muted', conversation?: ThreadMessage[]): UsageThread =>
  ({ seed, name, preview, status, tone, ...(conversation ? { conversation } : {}) });

/* Reusable Policy Engine checklists by role — the headline gates a fill runs
   against (policiesTotal counts the full active set; the list shows the top few). */
const RN_POLICIES = ['Overtime limit (≤ 40h / week)', 'Rest window (≥ 8h between shifts)', 'Active RN license & ICU certification', 'Max consecutive shifts', 'Union seniority ordering'];
const CAREGIVER_POLICIES = ['Overtime limit (≤ 40h / week)', 'Rest window (≥ 8h between shifts)', 'Active caregiver credential & CPR', 'Max consecutive shifts', 'Background check current'];
const FORKLIFT_POLICIES = ['Overtime limit (≤ 40h / week)', 'Rest window (≥ 8h between shifts)', 'Forklift certification (current)', 'Max consecutive shifts', 'Site safety clearance'];
const EVENT_POLICIES = ['Availability for the event window', 'No overlapping shift', 'Event-skill match', 'Max consecutive shifts', 'Right-to-work verified'];

/** The tool detail for one case, normalized to its context — the policies Ultron's
 *  Policy Engine evaluated (and any eligible pool it returned) and the Engage
 *  threads it opened (channel + recipients). A case omits a tool it didn't use, so
 *  a billing or timesheet case carries neither. Shared across that case's steps; a
 *  step renders only the tools its `tools`/icon selects. */
interface ThreadUsageContext {
  policy?: {
    description: string;
    policies: string[];
    policiesTotal: number;
    eligible?: { total: number; unit: string; moreNoun: string; items: UsageCandidate[] };
  };
  engage?: { name: string; description: string; message: string; total: number; threads: UsageThread[] };
  /** A second outreach — the replacement-offer blast (see the 'engage-offer' tool
   *  kind), for cases whose messaging splits in two (e.g. an acknowledgment reply
   *  to the canceller, then a shift offer to the matched pool). Mirrors
   *  notifyScheduler / updateClose. */
  engageOffer?: { name: string; description: string; message: string; total: number; threads: UsageThread[] };
  notify?: { description: string } & UsageNotification;
  /** A second notification, to the scheduler (see the 'notify-scheduler' tool kind). */
  notifyScheduler?: { description: string } & UsageNotification;
  update?: { description: string } & UpdateDataResult;
  /** A second record write — the closing close-out (see the 'update-close' tool
   *  kind), for cases whose resolution writes the record twice (e.g. a status
   *  change mid-case, then the final close-out). Mirrors notifyScheduler. */
  updateClose?: { description: string } & UpdateDataResult;
  /** A task Ultron created (see the 'task' tool kind) — the invocation plus the
   *  task's key/value detail (assignee, steps, due). */
  task?: { description: string; query: string; fields: DetailRow[] };
}

/** The outbound ICU shift offer — reused as the Engage blast body and as the
 *  opening line of every thread transcript for that case. */
const RN_OFFER = 'An ICU RN shift just opened at Riverside Clinic today at 2:00 PM. Reply YES to claim it — first to confirm takes the shift.';
const rnOffer = (time: string): ThreadMessage => ({ from: 'ultron', text: RN_OFFER, time });

const THREAD_USAGE: Record<string, ThreadUsageContext> = {
  shift_drop_maria: {
    policy: { description: 'Evaluated scheduling policies, returned eligible RNs', policies: RN_POLICIES, policiesTotal: 24,
      eligible: { total: 20, unit: 'eligible RNs', moreNoun: 'eligible candidates', items: [cand('Jordan Pierce', '4.9 match', '3.2 mi'), cand('Aisha Karim', '4.7 match', '5.1 mi'), cand('Marcus Lewis', '4.6 match', '6.8 mi')] } },
    engage: { name: 'Engage: SMS', description: 'Sent the shift offer to 20 matched RNs', message: RN_OFFER, total: 20, threads: [
      // 2 interested (clean yes) → 5 chatting (active back-and-forth) → 13 delivered
      // no-reply, synthesized in ThreadList to reach total. Sorted for display in
      // ThreadList by tone, so order here is just for readability.
      thr('aisha_karim', 'Aisha Karim', '“Yes — I can take the 2pm.”', 'Interested', 'positive', [
        rnOffer('1:52 PM'),
        { from: 'them', text: 'Yes — I can take the 2pm.', time: '1:54 PM' },
        { from: 'ultron', text: 'You’re confirmed for the 2:00 PM ICU shift at Riverside. Check in at the 3rd-floor ICU desk for handoff.', time: '1:54 PM' },
        { from: 'them', text: 'On my way. Thanks!', time: '1:55 PM' },
      ]),
      thr('priya_nguyen', 'Priya Nguyen', '“Count me in — confirming now.”', 'Interested', 'positive', [
        rnOffer('1:52 PM'),
        { from: 'them', text: 'Count me in — confirming now.', time: '1:57 PM' },
        { from: 'ultron', text: 'Great — you’re first backup if the 2pm falls through. I’ll ping you the moment another opens.', time: '1:57 PM' },
        { from: 'them', text: 'Sounds good.', time: '1:58 PM' },
      ]),
      thr('jordan_pierce', 'Jordan Pierce', '“Is this the full ICU wing?”', 'Chatting', 'chatting', [
        rnOffer('1:52 PM'),
        { from: 'them', text: 'Is this the full ICU wing or step-down?', time: '1:56 PM' },
        { from: 'ultron', text: 'Full ICU wing — 12-hour shift, 2:00 PM start.', time: '1:56 PM' },
        { from: 'them', text: 'Checking my childcare, give me a few.', time: '1:59 PM' },
      ]),
      thr('marcus_lewis', 'Marcus Lewis', '“Any flex on the start? Could do 2:30.”', 'Chatting', 'chatting', [
        rnOffer('1:52 PM'),
        { from: 'them', text: 'Any flex on the start? Could do 2:30.', time: '1:55 PM' },
        { from: 'ultron', text: 'Start is fixed at 2:00 for handoff, but I can flag you first for the next opening.', time: '1:55 PM' },
        { from: 'them', text: 'Ok — let me see if I can make 2.', time: '1:58 PM' },
      ]),
      thr('lena_reyes', 'Lena Reyes', '“What’s the rate on this one?”', 'Chatting', 'chatting', [
        rnOffer('1:52 PM'),
        { from: 'them', text: 'What’s the rate on this one?', time: '1:53 PM' },
        { from: 'ultron', text: '$68/hr with the ICU differential included.', time: '1:53 PM' },
        { from: 'them', text: 'Tempting — give me an hour to sort a ride.', time: '1:57 PM' },
      ]),
      thr('omar_mori', 'Omar Mori', '“Is parking validated?”', 'Chatting', 'chatting', [
        rnOffer('1:52 PM'),
        { from: 'them', text: 'Is parking validated at Riverside?', time: '1:54 PM' },
        { from: 'ultron', text: 'Yes — validated parking in the north garage.', time: '1:54 PM' },
        { from: 'them', text: 'Good to know. Still deciding.', time: '1:56 PM' },
      ]),
      thr('devon_diaz', 'Devon Diaz', '“Might be a few min late.”', 'Chatting', 'chatting', [
        rnOffer('1:52 PM'),
        { from: 'them', text: 'I’m on shift til 1 — might be a few min late.', time: '1:55 PM' },
        { from: 'ultron', text: 'A few minutes is fine if you make handoff by 2:15. Want me to hold it?', time: '1:55 PM' },
        { from: 'them', text: 'Yeah, hold it — I’ll confirm by 1:30.', time: '1:59 PM' },
      ]),
    ] },
    notify: { description: 'Notified the Riverside location manager', seed: 'scheduler_dana', name: 'Dana Brooks', role: 'Location manager', channel: 'push + email', message: 'Heads up — the 2:00pm ICU shift was reassigned to Aisha Karim after Maria Ellis dropped it. No action needed.' },
    notifyScheduler: { description: 'Notified the Riverside scheduler the gap is closed', seed: 'priya_nair', name: 'Priya Nair', role: 'Scheduler', channel: 'push + email', message: 'The 2:00pm ICU shift gap is closed — Aisha Karim assigned, roster and timesheet updated. No action needed.' },
    update: { description: 'Wrote the assignment to the shift record', recordType: 'Shift', fields: [
      { label: 'Shift', value: '2:00–10:00pm · ICU' },
      { label: 'Date', value: 'Today' },
      { label: 'Location', value: 'Riverside Clinic' },
      { label: 'Assigned', value: 'Aisha Karim, RN', emphasis: 'change', previousValue: 'Maria Ellis, RN' },
    ] },
  },
  shift_release_jenny: {
    policy: { description: 'Evaluated scheduling policies, returned eligible caregivers', policies: CAREGIVER_POLICIES, policiesTotal: 22,
      eligible: { total: 5, unit: 'eligible caregivers', moreNoun: 'eligible caregivers', items: [cand('Renee Wallace', '4.9 match', '2.4 mi'), cand('Carl Jensen', '4.6 match', '4.1 mi'), cand('Tina Boyd', '4.4 match', '5.5 mi')] } },
    engage: { name: 'Engage: SMS', description: 'Sent the shift offer to the qualified caregivers', message: 'A caregiver shift at Lakeside just opened up. Reply YES to pick it up.', total: 5, threads: [thr('renee_wallace', 'Renee Wallace', '“I can cover Lakeside.”', 'Interested', 'positive'), thr('carl_jensen', 'Carl Jensen', 'Delivered · no reply yet', 'Delivered', 'muted'), thr('tina_boyd', 'Tina Boyd', 'Delivered · no reply yet', 'Delivered', 'muted')] },
  },
  new_shift_forklift: {
    policy: { description: 'Evaluated scheduling policies, returned eligible operators', policies: FORKLIFT_POLICIES, policiesTotal: 18,
      eligible: { total: 11, unit: 'eligible operators', moreNoun: 'eligible operators', items: [cand('Dane Mercer', '4.8 match', '2.1 mi'), cand('Omar Reyes', '4.6 match', '3.7 mi'), cand('Nina Patel', '4.5 match', '4.4 mi')] } },
    engage: { name: 'Engage: SMS', description: 'Offered the shift to the top 12 operators', message: 'A forklift operator shift is open at Bay 4. Reply YES to claim it.', total: 12, threads: [thr('forklift_dane', 'Dane Mercer', '“Claiming Bay 4.”', 'Interested', 'positive'), thr('forklift_omar', 'Omar Reyes', 'Delivered · no reply yet', 'Delivered', 'muted'), thr('forklift_nina', 'Nina Patel', 'Delivered · no reply yet', 'Delivered', 'muted')] },
  },
  job_event_staff: {
    policy: { description: 'Evaluated scheduling policies, returned eligible workers', policies: EVENT_POLICIES, policiesTotal: 16,
      eligible: { total: 54, unit: 'eligible workers', moreNoun: 'eligible workers', items: [cand('Jamal Carter', '4.7 match', '1.8 mi'), cand('Sara Lindqvist', '4.6 match', '2.9 mi'), cand('Dmitri Volkov', '4.5 match', '3.6 mi')] } },
    engage: { name: 'Engage: SMS', description: 'Invited the top 40 matches to claim a slot', message: 'We’re staffing an upcoming event. Reply YES to claim a slot.', total: 40, threads: [thr('event_jamal', 'Jamal Carter', '“In — sign me up.”', 'Interested', 'positive'), thr('event_sara', 'Sara Lindqvist', '“Can do.”', 'Interested', 'positive'), thr('event_dmitri', 'Dmitri Volkov', 'Delivered · no reply yet', 'Delivered', 'muted')] },
  },
  thread_cancel_wed: {
    policy: { description: 'Evaluated scheduling policies, returned eligible workers', policies: ['Availability for Wed 7:00 AM', 'No overlapping shift', 'Site clearance for Pier 9', 'Rest window (≥ 8h between shifts)'], policiesTotal: 16,
      eligible: { total: 8, unit: 'eligible workers', moreNoun: 'eligible workers', items: [cand('Theo Park', '4.7 match', '1.9 mi'), cand('Gina Holt', '4.5 match', '3.3 mi'), cand('Renata Cruz', '4.4 match', '5.0 mi')] } },
    engage: { name: 'Engage: SMS', description: 'Acknowledged her cancellation', message: 'Thanks for letting us know — your Wed 7:00 AM shift has been released. No further action needed.', total: 1, threads: [thr('thread_cancel_wed', 'Mara Lindgren', '“Thanks for understanding.”', 'Read', 'positive')] },
    update: { description: 'Filed the release on the shift record', recordType: 'Shift', fields: [
      { label: 'Time', value: 'Wed · 7:00 AM' },
      { label: 'User', value: 'Mara Lindgren' },
      { label: 'Reason', value: 'Worker-initiated cancellation' },
      { label: 'Status', value: 'Unassigned', emphasis: 'change', previousValue: 'Assigned' },
    ] },
    engageOffer: { name: 'Engage: SMS', description: 'Sent the shift offer to 8 qualified workers', message: 'The Wed 7:00 AM shift at Pier 9 just opened up. Reply YES to claim it — first to confirm takes the shift.', total: 8, threads: [thr('theo_park', 'Theo Park', '“Yes — I can take Wed.”', 'Interested', 'positive'), thr('gina_holt', 'Gina Holt', 'Delivered · no reply yet', 'Delivered', 'muted'), thr('renata_cruz', 'Renata Cruz', 'Delivered · no reply yet', 'Delivered', 'muted')] },
    updateClose: { description: 'Wrote the assignment to the shift record', recordType: 'Shift', fields: [
      { label: 'Time', value: 'Wed · 7:00 AM' },
      { label: 'Location', value: 'Pier 9' },
      { label: 'Assigned', value: 'Theo Park', emphasis: 'change', previousValue: 'Mara Lindgren' },
    ] },
  },
  cred_expired_nadia: {
    policy: { description: 'Evaluated credential policies, flagged the at-risk shifts', policies: ['Active CPR certification', 'Credential current for gated shifts', 'Coverage available for each gap'], policiesTotal: 12,
      eligible: { total: 6, unit: 'eligible backfills', moreNoun: 'eligible backfills', items: [cand('Carl Jensen', '4.7 match', '2.6 mi'), cand('Tina Boyd', '4.5 match', '3.9 mi'), cand('Marcus Idris', '4.4 match', '4.8 mi')] } },
    engage: { name: 'Engage: SMS', description: 'Offered the 3 gated shifts to CPR-current workers', message: 'A few CPR-gated shifts just opened up. Reply YES to pick one up.', total: 6, threads: [thr('carl_jensen', 'Carl Jensen', '“Happy to pick one up.”', 'Interested', 'positive'), thr('tina_boyd', 'Tina Boyd', 'Delivered · no reply yet', 'Delivered', 'muted'), thr('marcus_idris', 'Marcus Idris', 'Delivered · no reply yet', 'Delivered', 'muted')] },
    update: { description: 'Marked her 3 CPR-gated shifts unassigned pending renewal', recordType: 'Shift', groups: [
      [
        { label: 'Time', value: 'Thu · 7:00 AM' },
        { label: 'User', value: 'Nadia Haddad' },
        { label: 'Status', value: 'Unassigned', emphasis: 'change', previousValue: 'Assigned' },
      ],
      [
        { label: 'Time', value: 'Sat · 3:00 PM' },
        { label: 'User', value: 'Nadia Haddad' },
        { label: 'Status', value: 'Unassigned', emphasis: 'change', previousValue: 'Assigned' },
      ],
      [
        { label: 'Time', value: 'Mon · 7:00 AM' },
        { label: 'User', value: 'Nadia Haddad' },
        { label: 'Status', value: 'Unassigned', emphasis: 'change', previousValue: 'Assigned' },
      ],
    ] },
    engageOffer: { name: 'Engage: in-app', description: 'Sent Nadia the renewal task', message: 'A CPR renewal task was assigned to you — upload your updated certification before your next gated shift.', total: 1, threads: [thr('cred_expired_nadia', 'Nadia Haddad', 'Delivered · task on her profile', 'Delivered', 'muted')] },
    task: { description: 'Created the CPR renewal task on Nadia’s profile', query: 'tasks.create(assignee="nadia_haddad", template="credential_renewal") → task', fields: [
      { label: 'Task', value: 'Renew CPR certification' },
      { label: 'Assignee', value: 'Nadia Haddad' },
      { label: 'Step', value: 'Upload the updated cert' },
      { label: 'Due', value: 'Before next gated shift · Thu 7:00 AM' },
      { label: 'Status', value: 'Assigned', emphasis: 'success-tag' },
    ] },
  },
  timeoff_sofia: {
    policy: { description: 'Evaluated time-off policies, cleared the request', policies: ['PTO balance sufficient', 'No blackout period in the window', 'Coverage for the affected shifts', 'Notice period met'], policiesTotal: 9 },
    engage: { name: 'Engage: in-app', description: 'Notified Sofia of the decision', message: 'Your time-off request has been approved. Enjoy the time off!', total: 1, threads: [thr('timeoff_sofia', 'Sofia Marin', '“Thanks — understood.”', 'Read', 'positive')] },
  },
  document_kenji: {
    policy: { description: 'Evaluated credential policies, verified compliance', policies: ['Recognized as a CPR certification', 'Name matches the profile', 'Credential currently valid', 'Expiry date captured'], policiesTotal: 6 },
  },
  application_priya: {
    policy: { description: 'Scored the application against the CNA role', policies: ['Active CNA license', 'Availability fits Night Shift', 'Within commute range', 'References on file'], policiesTotal: 12 },
    engage: { name: 'Engage: in-app', description: 'Sent Priya a screening intro', message: 'Hi Priya — thanks for applying for the CNA Night Shift role. Still interested? Reply YES and we’ll set up a quick screen.', total: 1, threads: [thr('application_priya', 'Priya Raman', '“Yes, still interested!”', 'Interested', 'positive')] },
  },
  new_user_luis: {
    engage: { name: 'Engage: in-app', description: 'Sent Luis a welcome', message: 'Welcome to the team, Luis! Tap to finish setting up your profile.', total: 1, threads: [thr('new_user_luis', 'Luis Mendez', '“Thanks — excited to start!”', 'Read', 'positive')] },
  },
  missed_clockin_james: {
    engage: { name: 'Engage: SMS', description: 'Texted James to check on the missed start', message: 'Hi James — we didn’t see a clock-in for your 9:00 AM shift. Are you on your way?', total: 1, threads: [thr('missed_clockin_james', 'James Okoro', '“On my way — 15 min out.”', 'Replied', 'positive')] },
    update: { description: 'Marked the shift confirmed-late on his record', recordType: 'Shift', fields: [
      { label: 'Shift', value: 'Today · 9:00 AM' },
      { label: 'Worker', value: 'James Okoro' },
      { label: 'ETA', value: '~15 min out · via SMS' },
      { label: 'Status', value: 'Confirmed-late', emphasis: 'change', previousValue: 'No clock-in' },
    ] },
    updateClose: { description: 'Closed the shift out — coverage holds, no fill opened', recordType: 'Shift', fields: [
      { label: 'Time', value: 'Today · 9:00 AM' },
      { label: 'User', value: 'James Okoro' },
      { label: 'Status', value: 'Holds — no replacement needed', emphasis: 'success' },
    ] },
  },
  missed_clockout_bianca: {
    engage: { name: 'Engage: SMS', description: 'Texted Bianca to confirm her end time', message: 'Hi Bianca — we didn’t get a clock-out for today. What time did you finish?', total: 1, threads: [thr('missed_clockout_bianca', 'Bianca Rossi', '“Left at 6:00 PM.”', 'Replied', 'positive')] },
  },
  birthday_tomas: {
    engage: { name: 'Engage: in-app', description: 'Sent Tomas a birthday note', message: 'Happy birthday, Tomas! 🎉 Thanks for everything you do for the team.', total: 1, threads: [thr('birthday_tomas', 'Tomas Greco', 'Delivered · birthday note', 'Delivered', 'muted')] },
  },
  phone_aisha: {
    engage: { name: 'Engage: SMS', description: 'Sent a verification ping to the new number', message: 'Verifying your new number — reply YES to confirm this is you.', total: 1, threads: [thr('phone_aisha', 'Aisha Karim', '“Yep, this is my number.”', 'Confirmed', 'positive')] },
  },
  schedule_published: {
    engage: { name: 'Engage', description: 'Asked the team to confirm next week’s shifts', message: 'Next week’s schedule is published. Please review and confirm your shifts.', total: 31, threads: [thr('sched_amy', 'Amy Cho', '“Confirmed for all four.”', 'Confirmed', 'positive'), thr('sched_ben', 'Ben Ruiz', 'Reminder sent · no reply yet', 'Delivered', 'muted'), thr('sched_chloe', 'Chloe Tan', 'Reminder sent · no reply yet', 'Delivered', 'muted')] },
  },
  fill_confirmed_maria: {
    policy: { description: 'Re-checked Sarah against scheduling policies', policies: RN_POLICIES, policiesTotal: 24 },
    engage: { name: 'Engage: in-app', description: 'Confirmed the fill with Sarah and the scheduler', message: 'You’re confirmed for the shift — thanks for covering! See you there.', total: 2, threads: [thr('sarah_quinn', 'Sarah Quinn', '“See you at the shift.”', 'Read', 'positive'), thr('scheduler_dana', 'Dana Cole', 'Delivered · coverage confirmed', 'Delivered', 'muted')] },
  },
};

const DEFAULT_TOOLS: Record<WorkingIcon, UsageToolKind[]> = {
  send:  ['policy', 'engage'], // outreach — matched against policy, then messaged
  clock: ['policy'],           // collecting / tracking — replies run against the gates
  done:  ['policy'],           // filled / assigned — re-checked at assignment
  edit:  ['policy'],           // filed / marked — eligibility + status
  alert: ['policy'],
  rate:  ['policy'],
  chart: ['policy'],
};

/** How a step renders its tools: `planning` (the plan beat) shows the intended
 *  invocation as a query + summary; `execution` shows what actually happened. */
export type UsageMode = 'planning' | 'execution';

/** The channel slug for an Engage entry's query, parsed from its display name
 *  ("Engage: SMS" → "sms", "Engage: in-app" → "in_app"). */
const engageChannel = (name: string): string =>
  /in-app/i.test(name) ? 'in_app' : /sms/i.test(name) ? 'sms' : 'auto';

/** A human-readable channel label for an Engage entry's "Channel" section,
 *  parsed from its display name ("Engage: SMS" → "SMS", "Engage: in-app" →
 *  "In-app"). Falls back to "Preferred channel" when the name carries none. */
const engageChannelLabel = (name: string): string =>
  /in-app/i.test(name) ? 'In-app' : /sms/i.test(name) ? 'SMS' : 'Preferred channel';

/** A human-readable label for a notify channel ("push + email" → "Push, Email") —
 *  title-cased and comma-separated, so the "Channel" section reads as a clean list. */
const notifyChannelLabel = (channel: string): string =>
  channel.split(/\s*\+\s*/).map(part => part.replace(/\b\w/g, c => c.toUpperCase())).join(', ');

/** Past-tense → base-verb map for the outreach descriptions, so the plan beat can
 *  recast a "what happened" description ("Sent the offer…") as planned intent
 *  ("Will send the offer…") — these messages are drafted in the plan, not yet fired. */
const PLAN_VERB: Record<string, string> = {
  Sent: 'send', Offered: 'offer', Invited: 'invite', Texted: 'text',
  Acknowledged: 'acknowledge', Notified: 'notify', Asked: 'ask',
  Confirmed: 'confirm', Messaged: 'message',
};

/** Recast an execution description as planned intent for the plan beat. Leaves the
 *  string untouched if its leading verb isn't a known outreach past-tense. */
const asPlanned = (desc: string): string => {
  const [first, ...rest] = desc.split(' ');
  const base = PLAN_VERB[first];
  return base ? `Will ${base} ${rest.join(' ')}` : desc;
};

/** The planning-phase query + summary for a tool — the invocation Ultron will run
 *  and a plain-language read of what it returns/does, synthesized from the case
 *  context so it stays normalized per event. */
function planDetail(kind: UsageToolKind, ctx: ThreadUsageContext): { query: string; summary: string } {
  if (kind === 'policy' && ctx.policy) {
    const e = ctx.policy.eligible;
    return {
      query: 'policy.evaluate(shift=target, policies="active") → eligible[]',
      summary: e
        ? `Run the shift against ${ctx.policy.policiesTotal} active scheduling policies and return the ${e.total} ${e.unit}, ranked by match.`
        : `Run the case against ${ctx.policy.policiesTotal} active policies to confirm it clears compliance before acting.`,
    };
  }
  const planEng = kind === 'engage' ? ctx.engage : kind === 'engage-offer' ? ctx.engageOffer : undefined;
  if (planEng) {
    return {
      query: `engage.send(channel="${engageChannel(planEng.name)}", template="shift_offer", to=matched)`,
      summary: `${asPlanned(planEng.description)} — ${planEng.total} ${planEng.total === 1 ? 'recipient' : 'recipients'} on their preferred channel, with replies tracked as they land.`,
    };
  }
  const nctx = kind === 'notify' ? ctx.notify : kind === 'notify-scheduler' ? ctx.notifyScheduler : undefined;
  if (nctx) {
    return {
      query: `engage.notify(to="${nctx.name}", via="${nctx.channel.replace(/\s*\+\s*/g, '+')}")`,
      summary: `${asPlanned(nctx.description)} (${nctx.name} · ${nctx.channel}) — a one-way heads-up, no action required.`,
    };
  }
  return { query: '', summary: '' };
}

/** Builds one tool entry for a kind from a case's context, or null when the case
 *  didn't use that tool. In `planning` mode the entry carries a query + summary
 *  (the intended invocation); in `execution` mode it carries the tool-shaped detail
 *  of what happened (policies/eligible, threads, or a notification). */
function usageEntry(kind: UsageToolKind, ctx: ThreadUsageContext, mode: UsageMode, threadId: string): UsageEntry | null {
  // Read Data — the initial read of the case's record before planning, so the plan
  // works from the live record rather than assumptions. Reads the same record the
  // case ultimately writes to (its update context), so it's present whenever the
  // case touches a record. The 'record' icon has no SECTION_TITLE, so the panel
  // titles it off the tool name — "Read data: Shift".
  if (kind === 'read') {
    const recordType = ctx.update?.recordType ?? ctx.updateClose?.recordType;
    if (!recordType) return null;
    const noun = recordType.toLowerCase();
    // The record the read pulled, as a key/value snapshot — record type, the
    // shift's time and worker (from the case's meta/subject), and the clock-in it
    // was looking for (left blank — the missing punch is the whole reason to read).
    const recordDetails: DetailRow[] = [
      { label: 'Type', value: recordType },
      { label: 'Time', value: THREAD_META[threadId]?.shiftTime ?? '' },
      { label: 'User', value: THREAD_SUBJECTS[threadId] ?? '' },
      { label: 'Clock in', value: '' },
    ];
    return {
      icon: 'read',
      name: `Read data: ${recordType}`,
      description: `Pulled the current ${noun} record before planning`,
      query: `read_data(record="${recordType}") → current_state`,
      recordDetails,
      summary: `Read the ${noun}’s current state — schedule, worker, and status — so the plan works from the live record rather than assumptions.`,
    };
  }

  // Read-only analysis sub-tools of the replacement-matching flow — present only
  // when the case actually matched a pool (policy.eligible). They're what produced
  // the plan, so the content reads the same in the plan or a later recap.
  if (kind === 'match' || kind === 'credential' || kind === 'incentive') {
    const e = ctx.policy?.eligible;
    if (!e) return null;
    const role = e.unit.replace(/^eligible\s+/i, ''); // "eligible RNs" → "RNs"
    if (kind === 'match') {
      return {
        icon: 'search', name: 'Match Engine',
        description: `Ranked qualified ${role} by skill, location and availability`,
        query: 'match_staff(pool="qualified") → ranked[]',
        summary: `Ranked the qualified pool by skill, location, and availability — surfaced ${e.total} ${e.unit}.`,
      };
    }
    if (kind === 'credential') {
      return {
        icon: 'monitor', name: 'Policy Engine',
        description: 'Verified the top match’s license and certifications',
        query: 'verify_credentials(candidate="top_match") → status[]',
        summary: 'Confirmed the top match’s license and required certifications are active and current.',
      };
    }
    // incentive — a deep qualified pool fills on its own, so no bonus; a thin pool
    // this close to start time warrants an incentive to secure the fill.
    const deepPool = e.total >= 10;
    return {
      icon: 'analytics', name: 'Match Engine',
      description: 'Compared the fill against recent last-minute fills',
      query: `recommend_incentive(pool_depth=${e.total}) → suggestion`,
      summary: deepPool
        ? 'Compared against recent last-minute fills — the qualified pool is deep enough, so no bonus was attached.'
        : `Compared against recent last-minute fills — the pool is thin at this notice, so a bonus is recommended to secure the fill.`,
      recommendation: deepPool
        ? { add: false, amount: 'No bonus', rationale: `${e.total} qualified ${role} available — deep enough to fill without an incentive.` }
        : { add: true, amount: '$150 / shift', rationale: `Only ${e.total} qualified ${role} available this close to start — a bonus improves the odds of a confirmed fill.` },
    };
  }

  // Tasks — the task Ultron created. Mode-independent like the record write: the
  // invocation (query) plus the task's key/value detail.
  if (kind === 'task') {
    if (!ctx.task) return null;
    const { description, query, fields } = ctx.task;
    return { icon: 'task', name: 'Tasks', description, query, task: { fields } };
  }

  // The Update Data write — committing the resolution to a Teambridge record. Like
  // the read-only analysis tools above, the write reads the same in the plan beat or
  // a later recap, so it's mode-independent.
  if (kind === 'update' || kind === 'update-close') {
    const updateCtx = kind === 'update' ? ctx.update : ctx.updateClose;
    if (!updateCtx) return null;
    const { description, ...updateData } = updateCtx;
    return { icon: 'record', name: 'Update Data', description, updateData };
  }

  // Both notify kinds share the "Engage: Notification" shape — they differ only in
  // which recipient/message context they draw from (a step can send both). The two
  // engage kinds likewise share the message-thread shape: 'engage' reads the case's
  // primary conversation, 'engage-offer' the second outreach (the offer blast).
  const isNotify = kind === 'notify' || kind === 'notify-scheduler';
  const notifyCtx = kind === 'notify' ? ctx.notify : kind === 'notify-scheduler' ? ctx.notifyScheduler : undefined;
  const engCtx = kind === 'engage' ? ctx.engage : kind === 'engage-offer' ? ctx.engageOffer : undefined;
  const present = (kind === 'policy' && ctx.policy) || !!engCtx || !!notifyCtx;
  if (!present) return null;

  const name = kind === 'policy' ? 'Policy Engine' : isNotify ? 'Engage: Notification' : engCtx!.name;
  const description = kind === 'policy' ? ctx.policy!.description : isNotify ? notifyCtx!.description : engCtx!.description;
  const icon: UsageIconKey = kind === 'policy' ? 'shield' : isNotify ? 'bell' : 'message';

  if (mode === 'planning') {
    // Outreach is drafted in the plan, not yet fired — recast its description as
    // planned intent ("Will send…"). Policy analysis genuinely ran, so it stays.
    const plannedDesc = kind === 'policy' ? description : asPlanned(description);
    const planned = { icon, name, description: plannedDesc, ...planDetail(kind, ctx) };
    // Messaging tools carry a concrete message body — surface it in the plan too.
    if (isNotify) return { ...planned, channel: notifyChannelLabel(notifyCtx!.channel), message: notifyCtx!.message };
    if (engCtx) return { ...planned, channel: engageChannelLabel(engCtx.name), message: engCtx.message };
    // Policy Engine: the plan lists the policies it evaluated against (the gates the
    // fill runs through), so the plan shows WHAT it checks — not just the invocation.
    if (kind === 'policy') return { ...planned, policies: { total: ctx.policy!.policiesTotal, items: ctx.policy!.policies } };
    return planned;
  }
  if (kind === 'policy') {
    return { icon, name, description, policies: { total: ctx.policy!.policiesTotal, items: ctx.policy!.policies }, eligible: ctx.policy!.eligible };
  }
  if (engCtx) {
    return { icon, name, description, channel: engageChannelLabel(engCtx.name), message: engCtx.message, threads: { total: engCtx.total, moreNoun: 'threads', items: engCtx.threads } };
  }
  // notify / notify-scheduler — surface the channel as its own section (comma-joined),
  // so it reads the same as the planning entry rather than only inside the recipient row.
  const { description: _d, ...notification } = notifyCtx!;
  return { icon, name, description, channel: notifyChannelLabel(notifyCtx!.channel), notification };
}

/** The tools a step drove, with detail normalized to its case — the entries shown
 *  in that step's run-details drawer. `kinds` is the step's own selection (its
 *  `tools` override, else the per-icon default); each renders only if the case
 *  supplies that tool's context. `mode` picks the plan (query + summary) vs the
 *  execution (what happened) detail. Reasoning steps and tool-less cases yield []. */
export function usageForThread(threadId: string, kinds: UsageToolKind[], mode: UsageMode = 'execution'): ActivityUsage {
  const ctx = THREAD_USAGE[threadId];
  if (!ctx) return [];
  return kinds.map(k => usageEntry(k, ctx, mode, threadId)).filter((e): e is UsageEntry => e !== null);
}

/** The tool kinds a working step drove — its explicit `tools` override, else the
 *  per-icon default. */
export const stepTools = (m: WorkingMilestone): UsageToolKind[] => m.tools ?? DEFAULT_TOOLS[m.icon] ?? ['policy'];

// ── Live landing — incoming signal stream ──────────────────────────────────
// The Live landing feed is a conveyor of incoming operational signals Ultron is
// watching. Each carries a trailing identifier: most are routine ("No action
// required"), but some are real risks ("Risk detected") — those show the orange
// Pulse mark and, the moment they surface, escalate into a fresh New case.

/** One signal in the Live landing feed. */
export interface IncomingEvent {
  id: string;
  /** Capability eyebrow shown above the title. */
  capability: string;
  /** Event headline shown in the feed card. */
  title: string;
  /** Short case name used as the New-group nav label when a risk escalates. */
  name: string;
  /** A real risk: shows the orange Pulse mark and escalates into the New group
   *  as a fresh analyzing case. Routine signals (false) read "No action required". */
  risk: boolean;
  severity?: ThreadSeverity;
  assessment?: string;
  recommendation?: string;
}

/** The signal stream cycled through the Live landing feed (interleaved risk /
 *  routine so the conveyor reads as a live mix). Drawn from the same seed-data
 *  vocabulary as the cases above. */
export const INCOMING_EVENTS: IncomingEvent[] = [
  {
    id: 'riverside_shift_drop',
    capability: 'Coverage Recovery',
    title: 'An RN dropped this afternoon’s shift at Riverside Clinic',
    name: 'Shift Drop Recovery',
    risk: true,
    severity: 'high',
    assessment: 'Urgent fill — the shift starts in under 12 hours with no replacement.',
    recommendation: 'Reach out to the best-matched RNs and fill it.',
  },
  {
    id: 'eastgate_clockin',
    capability: 'Attendance',
    title: 'Clean clock-in at Eastgate Warehouse',
    name: 'Clean Clock-In',
    risk: false,
  },
  {
    id: 'missed_clockin_signal',
    capability: 'Attendance Recovery',
    title: 'A worker never started their 9am shift',
    name: 'Missed Clock-In',
    risk: true,
    severity: 'high',
    assessment: 'The start passed with no clock-in and the grace window has elapsed.',
    recommendation: 'Check if they’re on the way and update the shift.',
  },
  {
    id: 'schedule_published_signal',
    capability: 'Scheduling',
    title: 'Next week’s schedule published',
    name: 'Schedule Published',
    risk: false,
  },
  {
    id: 'cpr_lapse_signal',
    capability: 'Compliance',
    title: 'A CPR certification expired overnight',
    name: 'Credential Lapse',
    risk: true,
    severity: 'medium',
    assessment: 'CPR is required for the role and upcoming shifts would be non-compliant.',
    recommendation: 'Pull from the affected shifts and start renewal.',
  },
  {
    id: 'invoice_paid_signal',
    capability: 'Invoicing',
    title: 'Client marked an invoice as paid',
    name: 'Invoice Paid',
    risk: false,
  },
  {
    id: 'open_timesheet_signal',
    capability: 'Payroll Operations',
    title: 'A timesheet has no clock-out before the payroll run',
    name: 'Open Timesheet',
    risk: true,
    severity: 'medium',
    assessment: 'The shift ended with no clock-out — the open punch is held from payroll.',
    recommendation: 'Confirm the real end time and fix the timesheet.',
  },
  {
    id: 'birthday_signal',
    capability: 'Engagement',
    title: 'An employee’s birthday is today',
    name: 'Birthday Greeting',
    risk: false,
  },
];

/** Build a fresh analyzing case from a detected risk signal — the case that
 *  lands in the New group (orbit/working mark, typing title) the moment Ultron
 *  flags the risk. Minimal but complete enough to flow through the case
 *  pipeline (analyzing → Needs approval → …) via the generic fallbacks. */
export function spawnThreadFromEvent(ev: IncomingEvent): ThreadItem {
  return {
    id: `detected_${ev.id}`,
    name: ev.name,
    title: ev.title,
    capability: ev.capability,
    status: 'analyzing',
    severity: ev.severity ?? 'high',
    event: ev.title.endsWith('.') ? ev.title : `${ev.title}.`,
    assessment: ev.assessment ?? 'Assessing impact and weighing options before recommending a plan.',
    recommendation: ev.recommendation ?? 'Prepare a recommended plan for your approval.',
    outcome: null,
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: ev.title, done: true },
      { state: 'assessment', headline: 'Assessing impact and options', done: false },
    ],
    actions: ['Review plan', 'Approve plan'],
    timestamp: 'Just now',
  };
}

/** Outcome populated when an actioned thread auto-completes (demo lifecycle:
 *  Needs attention → Live stream → Resolved). */
export const RESOLVE_OUTCOMES: Record<string, string> = {
  shift_drop_maria: 'Aisha Karim took Maria’s 2:00 PM shift at Riverside Clinic — first of 20 RNs reached to confirm. Scheduler notified.',
  timeoff_sofia: 'Sofia’s Thursday PTO approved. Friday’s thin — held for your call since only one backup covers it.',
  document_kenji: 'Kenji’s upload filed as a CPR cert and his credential verified. It expires in 3 weeks — flagged for renewal.',
  application_priya: 'Priya Raman cleared screening at a 92% match and moved to the recruiter’s queue with a warm intro sent.',
  new_shift_forklift: 'Forklift shift claimed — offered to the top 12 matches in ranked order. Calendar updated.',
  new_user_luis: 'Luis’s onboarding kicked off — welcome sent and all 5 intake tasks assigned and tracking.',
  missed_clockin_james: 'James replied he’s ~15 min out — shift marked confirmed-late and the site notified to expect him. Coverage holds.',
  thread_cancel_wed: 'Theo Park took the Wed 7:00 AM shift at Pier 9 — first of 8 qualified workers reached to confirm. Release logged and coverage restored.',
  payroll_acme_invoice: 'Approved shift posted to Acme’s open invoice and the total recalculated. Draft ready for your review.',
  job_event_staff: 'Invited the top 40 matches for Saturday’s 20 openings — filling first-come, with a standby list kept.',
  missed_clockout_bianca: 'Bianca confirmed her ~6:05 PM end time — timesheet corrected before the payroll run.',
  schedule_published: 'Next week’s confirmations sent to the whole team — chasing the 22 still unconfirmed; readiness summary by EOD.',
  shift_release_jenny: 'Renee Wallace took Jenny’s released shift — coverage restored and the schedule updated.',
  birthday_tomas: 'Sent Tomas Greco a birthday note from the team via in-app chat.',
  weekly_fill_report: 'Fill-rate report published to Home — 22 under-target shifts flagged and the Mon–Tue gaps sent to scheduling.',
  clockin_devon: 'Devon Pierce’s clock-in cleared the geofence and required fields — approved into the payroll run.',
  phone_aisha: 'Aisha’s new number verified and set as her notification contact — shift alerts now route there.',
  fill_confirmed_maria: 'Sarah Quinn confirmed for Maria’s open RN shift at Riverside Clinic — roster updated and scheduler notified.',
  invoice_paid_4821: 'The client’s off-platform payment reconciled against #4821 — invoice closed paid-in-full and the ledger updated.',
  cred_expired_nadia: 'Nadia Haddad’s CPR renewal assigned — her 3 CPR-gated shifts flagged with backfills lined up to cover them.',
};

// ── Ultron chat replies ───────────────────────────────────────────────────────
// DEMO ONLY — canned responses Ultron gives to a free-text message typed into the
// composer. There's no backend or real generation: the reply cycles through this
// pool (indexed by how many times Ultron has answered in the thread) so a short
// back-and-forth reads naturally instead of repeating the same line.
const ULTRON_REPLIES = [
  'Got it — I’ll factor that in and update my recommendation.',
  'Understood. Let me re-check the coverage with that in mind and flag anything that shifts.',
  'Thanks for the context — I’ll adjust the plan and keep you posted as it runs.',
  'Noted. I’ll hold that step for now and keep monitoring in the meantime.',
];

/** Pick Ultron's mocked reply to an operator message. `index` is the count of
 *  replies Ultron has already given in this thread, so consecutive answers walk
 *  through the pool rather than echoing one another. */
export function mockUltronReply(_text: string, index: number): string {
  return ULTRON_REPLIES[index % ULTRON_REPLIES.length];
}

/** Ultron's short text reply after it runs the work for an approved action — it
 *  sits beneath the activity group, closing the loop on the operator's message.
 *  Stage 0 is the first action, stage 1 the follow-up that wraps the case. */
export function actionAck(stage: number): string {
  return stage === 0
    ? 'That’s underway now — I’ll keep you posted as it runs.'
    : 'All done — I’ll keep monitoring and flag anything new.';
}
