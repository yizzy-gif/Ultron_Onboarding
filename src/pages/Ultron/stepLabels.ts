/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — plan-step labels
   Each execution step's title shifts with its lifecycle, the same way the sidebar
   case labels do (see caseLabels.ts):
     · plan     — the imperative, as authored ("Message the top replacements")
     · working  — the gerund, while it runs ("Messaging the top replacements")
     · done     — the past tense, once complete ("Messaged the top replacements")

   Keyed by the fixture headline. Steps with no entry (reasoning bullets, event
   headlines, outcome lines) fall through to their authored text unchanged.
   ───────────────────────────────────────────────────────────────────────────── */

export type StepState = 'plan' | 'working' | 'done';

interface StepLabelSet {
  working: string;
  done: string;
}

const STEP_LABELS: Record<string, StepLabelSet> = {
  'Acknowledge her':            { working: 'Acknowledging her',            done: 'Acknowledged her' },
  'Add the line item':          { working: 'Adding the line item',         done: 'Added the line item' },
  'Approve Thursday':           { working: 'Approving Thursday',            done: 'Approved Thursday' },
  'Approve for payroll':        { working: 'Approving for payroll',         done: 'Approved for payroll' },
  'Assign a renewal task':      { working: 'Assigning a renewal task',      done: 'Assigned a renewal task' },
  'Assign intake tasks':        { working: 'Assigning intake tasks',        done: 'Assigned intake tasks' },
  'Await his reply':            { working: 'Awaiting his reply',            done: 'Got his reply' },
  'Chase the unconfirmed':      { working: 'Chasing the unconfirmed',       done: 'Chased the unconfirmed' },
  'Claim shift':                { working: 'Claiming shift',                done: 'Claimed shift' },
  'Close the invoice':          { working: 'Closing the invoice',          done: 'Closed the invoice' },
  'Collect confirmations':      { working: 'Collecting confirmations',      done: 'Collected confirmations' },
  'Confirm Sarah Quinn':        { working: 'Confirming Sarah Quinn',        done: 'Confirmed Sarah Quinn' },
  'Confirm alerts':             { working: 'Confirming alerts',             done: 'Confirmed alerts' },
  'Confirm the punch':          { working: 'Confirming the punch',          done: 'Confirmed the punch' },
  'File as a CPR cert':         { working: 'Filing as a CPR cert',          done: 'Filed as a CPR cert' },
  'Fill shift':                 { working: 'Filling shift',                 done: 'Filled shift' },
  'Fill the Wed shift':         { working: 'Filling the Wed shift',         done: 'Filled the Wed shift' },
  'Flag the 3 shifts at-risk':  { working: 'Flagging the 3 shifts at-risk', done: 'Flagged the 3 shifts at-risk' },
  'Flag the at-risk shifts':    { working: 'Flagging the at-risk shifts',   done: 'Flagged the at-risk shifts' },
  'Flag the renewal':           { working: 'Flagging the renewal',          done: 'Flagged the renewal' },
  'Follow up':                  { working: 'Following up',                  done: 'Followed up' },
  'Hold Friday for you':        { working: 'Holding Friday for you',        done: 'Held Friday for you' },
  'Hold for payroll':           { working: 'Holding for payroll',           done: 'Held for payroll' },
  'Invite the top 40 matches':  { working: 'Inviting the top 40 matches',   done: 'Invited the top 40 matches' },
  'Keep standby list':          { working: 'Keeping standby list',          done: 'Kept standby list' },
  'Line up backfills':          { working: 'Lining up backfills',           done: 'Lined up backfills' },
  'Mark Priya qualified':       { working: 'Marking Priya qualified',       done: 'Marked Priya qualified' },
  'Mark the credential verified':{ working: 'Marking the credential verified', done: 'Marked the credential verified' },
  'Message the best matches':   { working: 'Messaging the best matches',    done: 'Messaged the best matches' },
  'Message the top replacements':{ working: 'Messaging the top replacements', done: 'Messaged the top replacements' },
  'Message workers to confirm': { working: 'Messaging workers to confirm',  done: 'Messaged workers to confirm' },
  'Move to the recruiter queue':{ working: 'Moving to the recruiter queue', done: 'Moved to the recruiter queue' },
  'Notify Sofia':               { working: 'Notifying Sofia',               done: 'Notified Sofia' },
  'Notify scheduler':           { working: 'Notifying scheduler',           done: 'Notified scheduler' },
  'Notify scheduling':          { working: 'Notifying scheduling',          done: 'Notified scheduling' },
  'Notify the location manager':{ working: 'Notifying the location manager', done: 'Notified the location manager' },
  'Offer to the top matches':   { working: 'Offering to the top matches',   done: 'Offered to the top matches' },
  'Publish the report':         { working: 'Publishing the report',         done: 'Published the report' },
  'Queue readiness summary':    { working: 'Queueing readiness summary',    done: 'Queued readiness summary' },
  'Recalculate the total':      { working: 'Recalculating the total',       done: 'Recalculated the total' },
  'Reconcile the payment':      { working: 'Reconciling the payment',       done: 'Reconciled the payment' },
  'Record the release':         { working: 'Recording the release',         done: 'Recorded the release' },
  'Save draft':                 { working: 'Saving draft',                  done: 'Saved draft' },
  'Send Luis a welcome':        { working: 'Sending Luis a welcome',        done: 'Sent Luis a welcome' },
  'Send a verification ping':   { working: 'Sending a verification ping',   done: 'Sent a verification ping' },
  'Send a warm intro':          { working: 'Sending a warm intro',          done: 'Sent a warm intro' },
  'Send the birthday note':     { working: 'Sending the birthday note',     done: 'Sent the birthday note' },
  'Text Bianca':                { working: 'Texting Bianca',                done: 'Texted Bianca' },
  'Text James':                 { working: 'Texting James',                 done: 'Texted James' },
  'Track claims':               { working: 'Tracking claims',               done: 'Tracked claims' },
  'Track responses':            { working: 'Tracking responses',            done: 'Tracked responses' },
  'Update ledger':              { working: 'Updating ledger',               done: 'Updated ledger' },
  'Update the contact':         { working: 'Updating the contact',          done: 'Updated the contact' },
  'Update the roster':          { working: 'Updating the roster',           done: 'Updated the roster' },
  'Update the timesheet':       { working: 'Updating the timesheet',        done: 'Updated the timesheet' },
};

/** The lifecycle-appropriate title for a plan step. Falls back to the authored
 *  headline for the `plan` state and for any unmapped step. */
export function stepLabel(headline: string, state: StepState): string {
  const set = STEP_LABELS[headline];
  if (!set || state === 'plan') return headline;
  return state === 'done' ? set.done : set.working;
}
