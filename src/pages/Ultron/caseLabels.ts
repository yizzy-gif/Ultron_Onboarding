/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — case labels
   Sidebar rows read as plain-language, action-oriented labels that change with
   the case's lifecycle group. Each case name maps to three phrasings:
     · new     — the ask ("what's needed")        e.g. "Shift Replacement Needed"
     · working — what Ultron is doing (verb-ing)   e.g. "Finding Shift Replacement"
     · done    — what got done (past tense)        e.g. "Shift Replacement Found"

   Keyed by the fixture `name`. A case with no entry falls back to its raw name
   (covers live-detected cases whose names come from the incoming event).
   ───────────────────────────────────────────────────────────────────────────── */

import type { UltronSection } from './UltronPage';

interface CaseLabelSet {
  new: string;
  working: string;
  done: string;
}

const CASE_LABELS: Record<string, CaseLabelSet> = {
  'Shift Drop Recovery':    { new: 'Shift Replacement Needed',   working: 'Finding Shift Replacement',  done: 'Shift Replacement Found' },
  'Shift Release Recovery': { new: 'Released Shift Needs Filling', working: 'Filling Released Shift',    done: 'Released Shift Filled' },
  'Time-Off Coverage Check':{ new: 'Time-Off Decision Needed',    working: 'Checking Time-Off Coverage', done: 'Time-Off Handled' },
  'Document Filing':        { new: 'Document Needs Filing',       working: 'Filing Document',            done: 'Document Filed' },
  'New Lead Screening':     { new: 'New Lead to Screen',          working: 'Screening New Lead',         done: 'Lead Screened' },
  'Shift Offer':            { new: 'Shift Ready to Offer',        working: 'Offering Shift',             done: 'Shift Offered' },
  'Candidate Onboarding':   { new: 'Onboarding to Start',         working: 'Onboarding Candidate',       done: 'Candidate Onboarded' },
  'Missed Clock-In':        { new: 'Missed Clock-In to Check',    working: 'Checking Missed Clock-In',   done: 'Clock-In Resolved' },
  'Informal Cancellation':  { new: 'Cancellation Needs Coverage', working: 'Covering Cancellation',      done: 'Cancellation Covered' },
  'Bulk Fill':              { new: 'Shifts Need Filling',         working: 'Filling Shifts',             done: 'Shifts Filled' },
  'Open Timesheet':         { new: 'Timesheet Needs Fixing',      working: 'Fixing Timesheet',           done: 'Timesheet Fixed' },
  'Invoice Roll-Up':        { new: 'Charge Needs Billing',        working: 'Adding Charge to Invoice',   done: 'Charge Billed' },
  'Schedule Confirmation':  { new: 'Schedule Needs Confirming',   working: 'Confirming Schedule',        done: 'Schedule Confirmed' },
  'Birthday Greeting':      { new: 'Birthday to Send',            working: 'Sending Birthday Wish',      done: 'Birthday Sent' },
  'Scheduled Report':       { new: 'Report Needs Publishing',     working: 'Publishing Report',          done: 'Report Published' },
  'Clock-In Approval':      { new: 'Clock-In Needs Approval',     working: 'Approving Clock-In',         done: 'Clock-In Approved' },
  'Profile Update':         { new: 'Profile Needs Updating',      working: 'Updating Profile',           done: 'Profile Updated' },
  'Autonomous Fill':        { new: 'Auto-Fill Needs Confirming',  working: 'Confirming Auto-Fill',       done: 'Shift Auto-Filled' },
  'Invoice Reconciliation': { new: 'Payment Needs Reconciling',   working: 'Reconciling Payment',        done: 'Payment Reconciled' },
  'Credential Lapse':       { new: 'Expired Credential to Fix',   working: 'Renewing Credential',        done: 'Credential Renewed' },
};

/** The lifecycle-appropriate sidebar label for a case. Falls back to the raw
 *  name for unmapped (e.g. live-detected) cases. `live` shares `working` copy. */
export function caseLabel(name: string, section: UltronSection): string {
  const set = CASE_LABELS[name];
  if (!set) return name;
  return section === 'done' ? set.done : section === 'new' ? set.new : set.working;
}
