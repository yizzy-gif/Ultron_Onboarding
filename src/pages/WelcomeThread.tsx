/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — Welcome thread.
   The first page the admin lands on right after onboarding. It opens as a chat
   thread: Ultron greets, recaps what it just turned on from the site/questions
   as a summary card, then finishes the setup IN the conversation — it asks for
   the roster file, "imports" it and shows what came in as a card, then asks for
   the schedule and turns it into a week of shifts, and only then asks what to
   take on next. The composer takes attachments, so both documents land as chat
   messages. All of it is scripted — no file is ever read or uploaded — but the
   sequence is what makes "nothing's lost" land as an outcome. One-time handoff —
   any nav action drops to Ultron's normal home. DEMO ONLY, in-memory.
   ───────────────────────────────────────────────────────────────────────────── */

import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import type { ComponentType, FormEvent, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styled, { createGlobalStyle, css, keyframes } from 'styled-components';
import {
  Button, ComposerAttachment, ComposerSendButton, CheckCircleIcon, Dialog, XCloseIcon,
  Users03Icon, ClockIcon, File04Icon, Tag,
  AlertTriangleIcon, ChevronDownIcon, UploadCloud01Icon, FileUploader,
} from 'alloy-design-system';
import { mockUltronReply } from './Ultron/fixtures';
import type { ActivityMilestone } from './Ultron/fixtures';
import { ActivityTrailCards } from './Ultron/ActivityTrail';
import { AgentMark } from './Ultron/AgentMark';
import { IntroBackdrop } from './Onboarding/IntroBackdrop';
import { TeambridgeMark } from './Onboarding/TeambridgeMark';
import { liquidGlass } from './Onboarding/glass';
import { MouseGlow } from '../components/MouseGlow';
import { useIsMobile } from '../hooks/useMediaQuery';
import {
  MERIDIAN_ROSTER, planWeekProblems, generateWeekShifts, scheduleShapesFor,
  schedulePreviewFor, calloutDayName,
} from './Onboarding/sampleRoster';
import type { WeekProblem, WeekDay } from './Onboarding/sampleRoster';

/** What onboarding collected. Mirrors the onboarding flow's `IntroAnswers`
 *  (kept as a local shape so this page only depends on the onboarding module
 *  for the shared sample-data generators). */
export interface WelcomeAnswers {
  companyWebsite?: string;
  workforceType?: string;
  pay?: string;
  billing?: string;
  worksite?: string;
}

interface Msg {
  role: 'operator' | 'ultron';
  text: string;
  /** Names of files sent with the message. DEMO ONLY — the files themselves
   *  are never read or uploaded anywhere; only their names travel. */
  attachments?: string[];
  /** A rich block delivered as its own Ultron message — the roster import
   *  result, or the built week. Rendered full-width in the thread. */
  card?: 'roster' | 'week' | 'scheduleCta';
  /** The activity group Ultron worked through to produce this turn — rendered
   *  as a collapsed "thinking" trail directly above the message. Set on the
   *  FIRST part of a turn only, so a multi-part turn carries one group rather
   *  than one per part. */
  activity?: ActivityMilestone[];
}

interface IntakeFile {
  name: string;
  type?: string;
  size?: number;
}

interface IntakeUpload {
  file: IntakeFile;
  state: 'uploading' | 'complete';
  progress: number;
}

/** One beat of Ultron's opening turn, delivered on landing one at a time. A
 *  'text' beat types itself in like a chat message; the 'rosterCta' beat is the
 *  roster drop zone, which fades in as its own beat. */
type OpeningBeat = { kind: 'text'; text: string } | { kind: 'rosterCta' };

/** Landing choreography: the opening turn starts immediately and types itself
 *  in beat by beat, then the composer + suggestions arrive. */
type IntroPhase = 'delivering' | 'ready';

/** Where the in-chat setup stands: Ultron is waiting on the roster, then the
 *  schedule, then the setup is done and the thread becomes a normal
 *  conversation while the test-run event is surfaced automatically. */
type SetupStage = 'roster' | 'schedule' | 'done';
type AccessModalMode = 'grant' | 'waitlist';

const REPLY_DELAY_MS = 1100;

// ── Landing choreography timing ────────────────────────────────────────────
/** Typing-indicator beat shown before each inbound message lands. */
const THINK_MS = 440;
/** Cadence of the typewriter pass on a text beat. Timers clamp at ~4ms and each
 *  tick costs a render, so the chunk size — not the interval — is what actually
 *  sets the speed; two characters a tick reads noticeably quicker than one
 *  without turning into a dump. */
const TYPE_CHAR_MS = 4;
const TYPE_CHARS_PER_TICK = 2;
/** How long a freshly revealed character takes to fade up, and how many
 *  characters that leaves in flight behind the caret. Anything older than one
 *  fade has finished, so only this many need elements of their own. */
const TYPE_FADE_MS = 150;
const TYPE_FADE_CHARS = Math.ceil(TYPE_FADE_MS / TYPE_CHAR_MS) * TYPE_CHARS_PER_TICK;
/** Breath between one delivered beat and the next. */
const BEAT_GAP_MS = 320;
/** How long the recap card takes to land before the turn continues. */
const SUMMARY_HOLD_MS = 720;

// ── In-conversation turn timing ────────────────────────────────────────────
/** The believable "working" hold while Ultron reads a submitted file in (or
 *  builds a week) — long enough to read as real work, short enough to not drag. */
const WORKING_MS = 2000;
/** Gap between the parts of one multi-message Ultron turn (text → card → ask). */
const TURN_GAP_MS = 950;

/** How long the "you're set" confirmation shows before the modal closes itself. */
const GRANT_CONFIRM_HOLD_MS = 1600;

// ── Header morph ─────────────────────────────────────────────────────────────
// The welcome identity lands as a hero lockup and settles to an app-bar once the
// operator scrolls into the thread. These heights are shared with the header's
// own CSS (see PageHeaderInner) so the scroll maths and the rendered height
// cannot drift apart.
const HEADER_HERO_PX = 249;
const HEADER_BAR_PX = 68;
const HEADER_HERO_SM_PX = 229;
const HEADER_BAR_SM_PX = 47;
/** Scrolled past this, a downward gesture settles the header to the bar. */
const HEADER_CONDENSE_AT_PX = 56;
/** Back within this of the top, an upward gesture restores the hero. */
const HEADER_EXPAND_AT_PX = 8;
/** Condensing hands the hero's ~180px back to the thread, which shortens the
 *  scroll by the same amount. If the thread has less overflow than that, the
 *  collapse would leave nothing to scroll — and with no scroll there is no way
 *  to scroll back up, so the header would stick small with the hero unreachable.
 *  Requiring more overflow than the hero's FULL height clears the reclaimed
 *  space with margin at both breakpoints, so there is always scroll left to
 *  carry the operator back to the top. */
const HEADER_CONDENSE_MIN_OVERFLOW_PX = HEADER_HERO_PX;
/** Slack for "already at the end" — sub-pixel scroll positions and fractional
 *  layout heights mean the bottom rarely lands on an exact integer. */
const SCROLL_END_EPSILON_PX = 8;

// ── The scripted import results ──────────────────────────────────────────────
// The spec's numbers verbatim (mirroring the old onboarding steps); the demo
// never reads the file, so the story is the same believable one every time.
const ROSTER_TOTAL = 84;
const ROSTER_CLEAN = 81;
/** How many sample teammates the no-roster path generates. */
const SAMPLE_COUNT = 48;

/** The roster uploader's people-first empty-state visual. The sequence repeats
 *  once so the horizontal loop can wrap without a visible jump. */
const ROSTER_FLOW_PEOPLE = [
  { name: 'Dana Okafor', photo: 'https://i.pravatar.cc/96?u=dana.okafor' },
  { name: 'Marcus Webb', photo: 'https://i.pravatar.cc/96?u=marcus.webb' },
  { name: 'Priya Raman', photo: 'https://i.pravatar.cc/96?u=priya.raman' },
  { name: 'Sofia Delgado', photo: 'https://i.pravatar.cc/96?u=sofia.delgado' },
] as const;
// The three rows the import held back for review — each a real-world mess an
// ops admin recognises. They're kept, not dropped: the import lands the other
// 81 and leaves these flagged, so the user is never blocked on a cleanup.
const QUARANTINE_ROWS: { where: string; reason: string }[] = [
  { where: 'Row 34 · "J. & M. Alvarez"', reason: 'Two people in one row — we split them out for you to confirm.' },
  { where: 'Row 51 · Dana Whitfield', reason: 'Home location was blank — pick a site when you get a sec.' },
  { where: 'Row 72 · start date "13/40/24"', reason: "That date didn't read — everything else came in fine." },
];

// ── Ultron's scripted lines ──────────────────────────────────────────────────

const ROSTER_ASK =
  "Let's start with your people. Drop your team roster into this chat — a " +
  'spreadsheet, a PDF, even a photo of a printed one works. No need to clean it ' +
  "up first; I'll read it, tidy it, and bring everyone in.";

const ROSTER_NUDGE =
  "Happy to get to that — right after your people are in. Attach your roster here " +
  '(the paperclip takes spreadsheets, PDFs, or a photo), or tap "Use sample ' +
  'teammates" below to start with a stand-in crew.';

const SCHEDULE_ASK =
  'Next: your schedule. Drop your current one into this chat — any format — and ' +
  "I'll turn it into shifts. Or just tell me the shape of your week and I'll " +
  'build a realistic one.';

const TEST_RUN_ASK =
  "Time for a test run, so you can see how I work? Let's simulate a last minute call out.";

// ── Ultron's activity groups ─────────────────────────────────────────────────
// Every inbound turn is introduced by the activity group Ultron worked through
// to produce it — the same collapsed thinking trail the case threads carry
// (<ActivityTrailCards>, folded to a one-line recap the operator can open).
//
// The collapsed line IS the headlines joined (see ActivityTrail's foldedSummary),
// so headlines stay two or three words — the recap has to summarize at a glance,
// not wrap or truncate. Everything concrete (the file name, the shape they typed,
// the flagged rows, the counts) lives in each step's block, which is what the
// operator opens the group to read.

/** The opening turn — Ultron arrives straight out of the site read, so its
 *  first group is the read itself and the workspace it stood up from it. */
function openingActivity(company: string | null, answers: WelcomeAnswers): ActivityMilestone[] {
  const shape = [
    answers.workforceType && `Workforce: ${answers.workforceType}`,
    answers.worksite && `Worksites: ${answers.worksite}`,
    answers.pay && `Pay: ${answers.pay}`,
    answers.billing && `Billing: ${answers.billing}`,
  ].filter(Boolean) as string[];
  return [
    {
      icon: 'chart',
      headline: 'Read your site',
      blocks: [{
        text: `Went through ${company ? `the ${company} site` : 'your site'} end to end — the `
          + 'services you run, the places you run them, and the kind of work you staff. '
          + 'Every page, not just the homepage.',
      }],
    },
    {
      icon: 'clock',
      headline: 'Mapped your operation',
      blocks: shape.length
        ? [{ label: 'What I settled on', bullets: shape }]
        : [{ text: 'Inferred the roles you hire, where they work, and how the week '
            + 'is likely to run, so nothing here starts from a blank slate.' }],
    },
    {
      icon: 'edit',
      headline: 'Set up your workspace',
      blocks: [{
        text: 'Turned on the modules that fit the operation, pre-filled their settings, '
          + 'and left the rest out of your way until you need them.',
      }],
    },
    {
      icon: 'send',
      headline: "Planned what's next",
      blocks: [{
        label: 'Left to collect',
        bullets: [
          'Your roster — so I know who I am scheduling',
          'Your schedule — so I can turn it into real shifts',
        ],
      }],
    },
  ];
}

/** A roster file (or pasted table) landed — read it, map it, write the people in. */
function rosterImportActivity(fileName: string): ActivityMilestone[] {
  return [
    {
      icon: 'clock',
      headline: 'Read your roster',
      blocks: [{
        text: `Opened ${fileName} and took every row and header as written — no cleanup `
          + 'asked of you first, and nothing skipped for being messy.',
      }],
    },
    {
      icon: 'chart',
      headline: 'Mapped the columns',
      blocks: [{
        label: 'How the columns landed',
        bullets: [
          'Names, roles and licenses mapped straight across',
          'Home locations resolved against your worksites',
          "3 columns I didn't recognize kept verbatim on each record",
        ],
      }],
    },
    {
      icon: 'alert',
      headline: `Flagged ${ROSTER_TOTAL - ROSTER_CLEAN} rows`,
      blocks: [{
        label: 'Held for you, none dropped',
        bullets: QUARANTINE_ROWS.map(r => `${r.where} — ${r.reason}`),
      }],
    },
    {
      icon: 'edit',
      headline: `Added ${ROSTER_CLEAN} teammates`,
      blocks: [{
        text: 'Each one carries their role, licenses, home location and contact details, '
          + 'so they are schedulable the moment the week exists.',
      }],
    },
  ];
}

/** No roster handy — Ultron generates a stand-in crew off the site read. */
function rosterSampleActivity(signal: string): ActivityMilestone[] {
  return [
    {
      icon: 'clock',
      headline: 'Reused your site read',
      blocks: [{
        text: signal
          ? `Took "${signal}" as the brief, so the stand-in crew looks like the people `
            + 'you actually staff rather than generic filler.'
          : 'Took the roles and worksites I read off your site as the brief, so the '
            + 'stand-in crew looks like the people you actually staff.',
      }],
    },
    {
      icon: 'chart',
      headline: 'Modeled a matching crew',
      blocks: [{
        label: 'What I balanced',
        bullets: [
          'Role mix weighted the way your operation reads',
          'Licenses and certifications appropriate to each role',
          'Home locations spread across your worksites',
        ],
      }],
    },
    {
      icon: 'edit',
      headline: `Generated ${SAMPLE_COUNT} teammates`,
      blocks: [{
        text: 'Full records — role, license, location, availability — so every downstream '
          + 'step behaves exactly as it will with your real people.',
      }],
    },
    {
      icon: 'done',
      headline: 'Tagged them Sample',
      blocks: [{
        text: 'One tap clears the whole set the moment your real roster lands. Nothing '
          + 'you build on top of them is lost in the swap.',
      }],
    },
  ];
}

/** A schedule landed as a document — read the pattern out of it and build the week. */
function weekFromFileActivity(fileName: string, problemCount: number, shiftCount: number, dayCount: number): ActivityMilestone[] {
  return [
    {
      icon: 'clock',
      headline: 'Read your schedule',
      blocks: [{
        text: `Opened ${fileName} and took the grid as laid out — whatever the format, `
          + 'the pattern is the part that matters.',
      }],
    },
    {
      icon: 'chart',
      headline: 'Found your pattern',
      blocks: [{
        label: 'What the file told me',
        bullets: [
          'Recurring start and end times per day',
          'Which roles each shift needs, and how many',
          'The days that run light and the days that run heavy',
        ],
      }],
    },
    buildStep(shiftCount, dayCount),
    coverageStep(problemCount),
  ];
}

/** The operator described their week instead of uploading one. */
function weekFromShapeActivity(shape: string, problemCount: number, shiftCount: number, dayCount: number): ActivityMilestone[] {
  return [
    {
      icon: 'clock',
      headline: 'Took your week shape',
      blocks: [{
        text: `Read "${shape}" as the rhythm to build to, then filled in the detail your `
          + 'site and roster already imply.',
      }],
    },
    {
      icon: 'chart',
      headline: 'Modeled demand',
      blocks: [{
        label: 'What I reasoned about',
        bullets: [
          'How that shape distributes hours over the week',
          'Coverage each worksite needs to stay staffed',
          'Which roles have to be on at the same time',
        ],
      }],
    },
    buildStep(shiftCount, dayCount),
    coverageStep(problemCount),
  ];
}

/** The two steps both week paths share once the pattern is settled. */
function buildStep(shiftCount: number, dayCount: number): ActivityMilestone {
  return {
    icon: 'edit',
    headline: `Built ${shiftCount} shifts`,
    blocks: [{
      text: `Laid out across ${dayCount} days, assigned from your roster where the fit `
        + 'was obvious and left open where it was not, rather than guessing at coverage.',
    }],
  };
}

function coverageStep(problemCount: number): ActivityMilestone {
  return {
    icon: 'alert',
    headline: 'Checked coverage',
    blocks: [{
      text: 'Cross-referenced every shift with licenses, availability and hours. '
        + `${problemCount} things need you — they are called out on the week below.`,
    }],
  };
}

/** The operator said something while Ultron is still waiting on a document. */
function nudgeActivity(wanted: 'roster' | 'schedule'): ActivityMilestone[] {
  return [
    { icon: 'clock', headline: 'Read your message' },
    {
      icon: 'alert',
      headline: `Found no ${wanted}`,
      blocks: [{
        text: `Nothing in it parsed as ${wanted} data, so I held the setup here rather `
          + 'than building on a guess.',
      }],
    },
  ];
}

/** Setup is done — the thread is a normal conversation and every reply still
 *  shows the thinking behind it. */
function chatReplyActivity(): ActivityMilestone[] {
  return [
    { icon: 'clock', headline: 'Read your message' },
    {
      icon: 'chart',
      headline: 'Checked your workspace',
      blocks: [{
        text: 'Looked at your people, your week and what is already open before answering, '
          + 'so the reply reflects your setup rather than a generic one.',
      }],
    },
    { icon: 'send', headline: 'Drafted a reply' },
  ];
}

/** One line of the setup recap — something Ultron actually turned on. */
/** Title-cased company name derived from the pasted website (mirrors the
 *  onboarding helper), or null when no site was given. Exported for the app
 *  shell, which names the welcome nav entry after the company. */
export function companyName(website?: string): string | null {
  if (!website) return null;
  const clean = website.trim().replace(/\s+/g, '');
  const withProto = /^https?:\/\//i.test(clean) ? clean : `https://${clean}`;
  let host = clean;
  try { host = new URL(withProto).hostname; } catch { /* keep clean */ }
  host = host.replace(/^www\./, '');
  const root = host.split('.')[0] || host;
  const name = root
    .split(/[-_]/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  return name || host;
}

/** Multi-line / tabular text pasted into the composer reads as a copied block
 *  of spreadsheet cells, not a chat message — treat it as a document landing. */
function looksLikePastedTable(text: string): boolean {
  return text.includes('\t') || text.trim().includes('\n');
}

/** Whether the thread has enough overflow that settling the header to the bar
 *  still leaves it scrollable — see HEADER_CONDENSE_MIN_OVERFLOW_PX. */
function threadOutgrowsHero(el: HTMLElement): boolean {
  return el.scrollHeight - el.clientHeight > HEADER_CONDENSE_MIN_OVERFLOW_PX;
}

// Two-letter initials for the teammate avatar tiles.
function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

/** Deterministic stock headshot for a teammate row (same pravatar source as
 *  the roster drop zone's people flow). Name seeds (`u=`) hash into a small
 *  image pool, so distinct names can land on the same face — pick by row
 *  index instead, strided across the ~70-image pool so every visible row
 *  gets its own photo. Initials stay underneath as the fallback while it
 *  loads or if it fails. DEMO ONLY. */
function avatarPhoto(index: number): string {
  return `https://i.pravatar.cc/64?img=${((index * 7) % 70) + 1}`;
}

/** The typewriter's output for the beat being typed: the settled run of text
 *  plus the fading head. Characters land transparent and fade up, so the reveal
 *  reads as ink soaking in behind the caret rather than letters snapping on.
 *  Only the head gets elements of its own — characters older than one fade have
 *  finished animating and ride along in the plain prefix, which keeps the tick
 *  cheap on a long beat. Keys are absolute indices, so a character that is still
 *  fading keeps its element (and its progress) as the head moves past it. */
function TypedRun({ text }: { text: string }) {
  const settled = Math.max(0, text.length - TYPE_FADE_CHARS);
  return (
    <>
      {text.slice(0, settled)}
      {Array.from(text.slice(settled), (char, i) => (
        <FadingChar key={settled + i}>{char}</FadingChar>
      ))}
    </>
  );
}

/** Keeps completed upload states in the conversation, but portals the current
 *  phone intake to `body` so `position: fixed` is relative to the viewport.
 *  The surrounding message reveal uses transforms, which would otherwise turn
 *  an inline fixed child into a card pinned halfway up the screen. */
function MobileUploaderSurface({
  active,
  open,
  closeLabel,
  onClose,
  onScrollToEnd,
  showScrollCue = false,
  onInsetChange,
  children,
}: {
  active: boolean;
  open: boolean;
  closeLabel: string;
  onClose: () => void;
  /** Drives the thread down to its true end — see the cue below. */
  onScrollToEnd?: () => void;
  /** Whether that cue has anywhere to go: false once the thread is already
   *  parked at its end, where the button would be a no-op. */
  showScrollCue?: boolean;
  /** Reports how tall this sheet stands (0 when it isn't one), so the thread
   *  can pad its foot clear of it. */
  onInsetChange?: (px: number) => void;
  children: ReactNode;
}) {
  const sheeted = active && open;
  const shellRef = useRef<HTMLDivElement>(null);

  // The sheet's height is content-driven (the intake grows and shrinks through
  // its states), so it's measured rather than assumed. Reports 0 on the way out
  // so the thread drops the padding the moment the sheet stops being one.
  useEffect(() => {
    const el = shellRef.current;
    if (!sheeted || !el || !onInsetChange) return;
    const report = () => onInsetChange(el.getBoundingClientRect().height);
    report();
    const observer = new ResizeObserver(report);
    observer.observe(el);
    return () => {
      observer.disconnect();
      onInsetChange(0);
    };
  }, [sheeted, onInsetChange]);

  const surface = (
    <MobileUploaderShell ref={shellRef} $open={open}>
      {/* The sheet stands over the foot of the thread, so the last turns can't
          be reached by scrolling alone — the thread ends before them. It pads
          itself by the height measured above; this drives the scroll down into
          that padding, which lands the end of the conversation just clear of
          the card's top edge. */}
      {sheeted && showScrollCue && onScrollToEnd && (
        <MobileUploaderScrollCue
          type="button"
          aria-label="Scroll to the end of the conversation"
          onClick={onScrollToEnd}
        >
          <ChevronDownIcon size={18} />
        </MobileUploaderScrollCue>
      )}
      <MobileUploaderDock $open={open}>
        {/* The close affordance belongs to the sheet, not the card: once the
            intake has settled back into the thread there's nothing left to
            dismiss. */}
        {sheeted && (
          <MobileUploaderClose type="button" aria-label={closeLabel} onClick={onClose}>
            <XCloseIcon size={18} />
          </MobileUploaderClose>
        )}
        {children}
      </MobileUploaderDock>
    </MobileUploaderShell>
  );

  return sheeted && typeof document !== 'undefined'
    ? createPortal(surface, document.body)
    : surface;
}

/** Stable empty-answers fallback. Referenced as the `answers` default so an
 *  omitted prop keeps the same object identity across renders — a fresh `{}`
 *  each render would churn the memoized beats and restart the landing timers. */
const NO_ANSWERS: WelcomeAnswers = {};

interface WelcomeThreadProps {
  /** Whether this kept-alive thread is the currently visible app surface. */
  active?: boolean;
  /** Everything onboarding collected — drives the recap card and the
   *  vertical-appropriate sample data (shapes, problems, sample crew). */
  answers?: WelcomeAnswers;
  /** Fired once, on the operator's first message — the welcome stopped being a
   *  static recap and became a working conversation (the app moves its nav
   *  entry from New to Working on this signal). */
  onContinued?: () => void;
  /** Fired once the post-schedule test-run invitation lands. The app uses this
   *  moment to reveal the Maria Ellis shift-drop event after a short beat. */
  onTestRunReady?: () => void;
  /** Incremented after the authored event finishes. The Welcome thread stays
   *  mounted while the user works the event, so it owns the portaled phone
   *  dialog without resetting the setup conversation. */
  realWorkPromptSignal?: number;
}

export function WelcomeThread({
  active = true,
  answers = NO_ANSWERS,
  onContinued,
  onTestRunReady,
  realWorkPromptSignal = 0,
}: WelcomeThreadProps) {
  // Phones drop this page's two decorative layers entirely (see the render).
  const isMobile = useIsMobile();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [draft, setDraft] = useState('');
  // Files staged for the next message — chips above the input until sent.
  const [attachments, setAttachments] = useState<string[]>([]);
  // Ultron's reply state: null = idle; '' = the bare typing mark; a non-empty
  // string = dots plus a shimmering working label ("Bringing your people in…").
  const [replying, setReplying] = useState<string | null>(null);
  // Where the in-chat setup stands (roster ask → schedule ask → done).
  const [stage, setStage] = useState<SetupStage>('roster');
  // Which way the roster came in — drives the roster card's variant.
  const [rosterSample, setRosterSample] = useState(false);
  // Collapse the roster intake the moment either a file or sample crew is
  // committed; the conversational import can continue after the surface folds.
  const [rosterCommitted, setRosterCommitted] = useState(false);
  // Keep each intake card mounted while it moves empty → uploading → complete.
  // That continuity avoids the abrupt drop-zone-to-summary-card replacement.
  const [rosterUpload, setRosterUpload] = useState<IntakeUpload | null>(null);
  const [scheduleUpload, setScheduleUpload] = useState<IntakeUpload | null>(null);
  // The built week (problems + calendar), generated once when the schedule
  // lands and held stable across re-renders.
  const [weekData, setWeekData] = useState<{ problems: WeekProblem[]; week: WeekDay[] } | null>(null);
  // Which shape the shown week was built to, so the try-another pills under the
  // card can mark the current one. Null when the schedule arrived as a document
  // (no described shape) — then no pill is selected until one is tried.
  const [weekShape, setWeekShape] = useState<string | null>(null);
  // Sales reach-out — the number the admin leaves for the grant unlock.
  // DEMO ONLY: held in memory, never sent anywhere.
  const [phone, setPhone] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [waitlistJoined, setWaitlistJoined] = useState(false);
  const [accessModalMode, setAccessModalMode] = useState<AccessModalMode>('grant');
  // The grant ask lives in a blocking modal: opens once the authored test event
  // has fully completed, closes via the X / backdrop / Escape, and closes itself
  // shortly after a successful unlock.
  const [grantOpen, setGrantOpen] = useState(false);
  // The welcome identity starts as a prominent hero lockup. It only settles
  // into the compact app-header size after an intentional user scroll.
  const [headerCondensed, setHeaderCondensed] = useState(false);

  // Landing choreography. Ultron's opening turn starts immediately and types
  // itself in one beat at a time; the composer and suggestions hold back until
  // that whole first batch has landed.
  const [phase, setPhase] = useState<IntroPhase>('delivering');
  const [revealed, setRevealed] = useState(0);       // beats fully delivered
  const [activeIdx, setActiveIdx] = useState(-1);    // beat currently arriving
  const [typed, setTyped] = useState('');            // partial text of the active beat
  const [showDots, setShowDots] = useState(false);   // typing indicator before a beat
  // Honor reduced-motion: skip the whole reveal and land the turn at once.
  const [prefersReduced] = useState(
    () => typeof window !== 'undefined'
      && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
  );
  const [mobileManualAdvance, setMobileManualAdvance] = useState(
    () => typeof window !== 'undefined'
      && !!window.matchMedia?.('(max-width: 600px)').matches,
  );
  // On phones, the currently requested intake owns the bottom of the screen
  // until it's retired — either because the operator closed it, or because what
  // it was asking for arrived. Each stage gets one fresh presentation: retiring
  // Roster restores the composer, then Schedule opens independently when that
  // later ask lands.
  const [dismissedMobileUploader, setDismissedMobileUploader] = useState({
    roster: false,
    schedule: false,
  });
  /* The sheet exists to collect one thing; once it has it, it has no further
     ask to make. Retiring it here means the working state that follows (reading
     the file in, generating the crew, building the week) plays inline in the
     thread alongside Ultron's narration, rather than under a drawer the
     operator has to dismiss to watch. */
  const retireMobileUploader = (which: 'roster' | 'schedule') =>
    setDismissedMobileUploader(value => ({ ...value, [which]: true }));
  const currentUploaderDismissed = stage === 'roster'
    ? dismissedMobileUploader.roster
    : stage === 'schedule'
      ? dismissedMobileUploader.schedule
      : true;
  const mobileUploaderOpen =
    mobileManualAdvance
    && phase === 'ready'
    && stage !== 'done'
    && !currentUploaderDismissed;

  // Every conversation timer (working holds, turn gaps) — cleared on unmount.
  const timers = useRef<number[]>([]);
  const turnTimer = useRef<number | null>(null);
  const turnAdvance = useRef<(() => void) | null>(null);
  const grantTimer = useRef<number | null>(null);
  const handledRealWorkPrompt = useRef(realWorkPromptSignal);
  const endRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  // How far the open mobile intake sheet reaches up the viewport. The thread
  // pads its foot by this, so its last turns can be scrolled out from under the
  // sheet instead of ending behind it. 0 whenever no sheet is standing.
  const [mobileSheetInset, setMobileSheetInset] = useState(0);
  // Past the very end of the content — including the padding above, which is
  // the point. endRef.scrollIntoView would stop at the last message and leave
  // that padding (and the message) below the fold, still behind the sheet.
  const scrollThreadToEnd = () => {
    const el = scrollRef.current;
    el?.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  };
  // Whether the thread is already parked at its end. The scroll cue has nothing
  // to offer there — which is its resting state, since the thread auto-follows
  // — so it only appears once the operator has scrolled back up into history.
  // Starts true so it never flashes on open.
  const [threadAtEnd, setThreadAtEnd] = useState(true);
  const syncThreadAtEnd = (el: HTMLElement) => {
    setThreadAtEnd(el.scrollHeight - el.scrollTop - el.clientHeight <= SCROLL_END_EPSILON_PX);
  };

  // The signal the sample data derives from — what they typed for their
  // workforce, falling back to the company name from their website — so a
  // home-care operator gets caregivers and 12-hour rotations, not generic fill.
  const signal = useMemo(
    () => answers.workforceType?.trim() || companyName(answers.companyWebsite) || '',
    [answers],
  );
  const shapeChips = useMemo(() => scheduleShapesFor(signal), [signal]);
  const schedulePreview = useMemo(() => schedulePreviewFor(signal), [signal]);

  // Ultron's opening turn, split into the beats it delivers on landing: the
  // greeting, then the roster ask — the first document the in-chat setup
  // collects.
  const openingBeats = useMemo<OpeningBeat[]>(() => {
    // First-run greeting — warm and guided: name the workspace, say who Ultron
    // is, and preview the walk-through before asking for anything.
    const co = companyName(answers.companyWebsite);
    const greeting =
      `Welcome to your ${co ? `${co} ` : ''}workspace — I'm Ultron, and I'll be ` +
      "doing the heavy lifting around here. Together we'll bring in your team, " +
      'shape your schedule, and line up the day-to-day work I can take off your ' +
      'plate.';
    const beats: OpeningBeat[] = [{ kind: 'text', text: greeting }];
    beats.push({ kind: 'text', text: ROSTER_ASK });
    // The roster ask lands with its own upload card — a direct CTA so the
    // first action is one tap away.
    beats.push({ kind: 'rosterCta' });
    return beats;
  }, [answers]);

  const after = (ms: number, fn: () => void) => {
    timers.current.push(window.setTimeout(fn, ms));
  };
  useEffect(() => () => {
    timers.current.forEach(id => window.clearTimeout(id));
    if (turnTimer.current) window.clearTimeout(turnTimer.current);
    if (grantTimer.current) window.clearTimeout(grantTimer.current);
  }, []);

  // ── Header morph ───────────────────────────────────────────────────────────
  /** The header follows where the thread actually sits: hero at the top, app-bar
   *  once the thread is scrolled into. Position alone drives it — the earlier
   *  version only reacted to wheel/touch gestures, which meant the thread could
   *  auto-scroll (every new message ends with a scrollIntoView) and run right
   *  under a hero that never settled.
   *
   *  This is safe from the bounce that gesture gate was guarding against because
   *  of the overflow rule below. Collapsing shortens the thread by the height it
   *  reclaims, and the resize emits its own scroll event; if that landed back at
   *  the top the header would expand, re-lengthen the thread and oscillate.
   *  Condensing only when the thread outgrows the hero keeps the post-collapse
   *  scroll well clear of the expand threshold, so the resize's scroll event
   *  finds the header already settled and nothing flips back. */
  const resolveHeaderForScroll = (el: HTMLElement) => {
    const scrollTop = el.scrollTop;
    setHeaderCondensed(condensed => (condensed
      // Hold the bar until the operator is genuinely back at the top.
      ? scrollTop > HEADER_EXPAND_AT_PX
      // Settle to the bar once scrolled in — but only when the thread has the
      // length to spare, so there is always scroll left to carry them back up.
      : scrollTop > HEADER_CONDENSE_AT_PX && threadOutgrowsHero(el)));
  };
  useEffect(() => {
    const query = window.matchMedia?.('(max-width: 600px)');
    if (!query) return;
    const sync = () => setMobileManualAdvance(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  // The roster intake holds while Ultron reads the document. The schedule
  // upload, however, completes independently so it can settle to its compact
  // checked row while the longer week-building step continues below it.
  const animateRosterUpload = (file: IntakeFile) => {
    setRosterUpload({ file, state: 'uploading', progress: 8 });
    if (prefersReduced) {
      setRosterUpload({ file, state: 'uploading', progress: 92 });
      return;
    }
    after(180, () => setRosterUpload({ file, state: 'uploading', progress: 38 }));
    after(460, () => setRosterUpload({ file, state: 'uploading', progress: 74 }));
    after(780, () => setRosterUpload({ file, state: 'uploading', progress: 92 }));
  };

  const animateScheduleUpload = (file: IntakeFile) => {
    setScheduleUpload({ file, state: 'uploading', progress: 8 });
    if (prefersReduced) {
      setScheduleUpload({ file, state: 'complete', progress: 100 });
      return;
    }
    after(180, () => setScheduleUpload({ file, state: 'uploading', progress: 38 }));
    after(460, () => setScheduleUpload({ file, state: 'uploading', progress: 74 }));
    after(780, () => setScheduleUpload({ file, state: 'complete', progress: 100 }));
  };

  // The landing sequence: deliver each opening beat immediately — the typing mark,
  // then a typewriter pass (text) or a fade-in (recap card) — and finally flip
  // to 'ready', which brings in the composer and suggestions. Reduced-motion
  // lands everything at once.
  useEffect(() => {
    if (prefersReduced) {
      setRevealed(openingBeats.length);
      setActiveIdx(-1);
      setPhase('ready');
      return;
    }

    const localTimers: number[] = [];
    let charTimer: number | null = null;
    const later = (ms: number, fn: () => void) => {
      localTimers.push(window.setTimeout(fn, ms));
    };

    const deliver = (i: number) => {
      if (i >= openingBeats.length) {
        setShowDots(false);
        setPhase('ready');
        return;
      }
      setShowDots(true);
      later(THINK_MS, () => {
        setShowDots(false);
        setActiveIdx(i);
        const beat = openingBeats[i];
        if (beat.kind !== 'text') {
          // Card beats (the recap, the roster CTA) land as one beat — reveal,
          // hold, move on.
          later(SUMMARY_HOLD_MS, () => {
            setRevealed(i + 1);
            setActiveIdx(-1);
            later(BEAT_GAP_MS, () => deliver(i + 1));
          });
          return;
        }
        // Type the message in, a couple of characters at a time.
        setTyped('');
        const full = beat.text;
        let n = 0;
        charTimer = window.setInterval(() => {
          n = Math.min(full.length, n + TYPE_CHARS_PER_TICK);
          setTyped(full.slice(0, n));
          if (n >= full.length) {
            if (charTimer) window.clearInterval(charTimer);
            charTimer = null;
            later(BEAT_GAP_MS, () => {
              setRevealed(i + 1);
              setActiveIdx(-1);
              setTyped('');
              later(BEAT_GAP_MS, () => deliver(i + 1));
            });
          }
        }, TYPE_CHAR_MS);
      });
    };

    setPhase('delivering');
    deliver(0);

    return () => {
      localTimers.forEach(id => window.clearTimeout(id));
      if (charTimer) window.clearInterval(charTimer);
    };
  }, [openingBeats, prefersReduced]);

  // The completed Welcome event is the production trigger for this prompt.
  // The signal can arrive while this keep-alive page is visually hidden; Alloy
  // portals the Dialog to body, so it still appears over the resolved event.
  useEffect(() => {
    if (realWorkPromptSignal <= handledRealWorkPrompt.current) return;
    handledRealWorkPrompt.current = realWorkPromptSignal;
    if (grantTimer.current) window.clearTimeout(grantTimer.current);
    setPhone('');
    setUnlocked(false);
    setWaitlistJoined(false);
    setGrantOpen(true);
  }, [realWorkPromptSignal]);

  // Demo shortcut: M opens whichever access-modal variant was selected last.
  // Ignore editable controls so typing a phone number or message never triggers it.
  useEffect(() => {
    const openFromKeyboard = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const editing = target?.isContentEditable
        || target?.tagName === 'INPUT'
        || target?.tagName === 'TEXTAREA'
        || target?.tagName === 'SELECT';
      if (!active || editing || event.metaKey || event.ctrlKey || event.altKey || event.key.toLowerCase() !== 'm') return;
      event.preventDefault();
      setGrantOpen(true);
    };
    document.addEventListener('keydown', openFromKeyboard);
    return () => document.removeEventListener('keydown', openFromKeyboard);
  }, [active]);

  const unlock = () => {
    setUnlocked(true);
    // Let the confirmation land, then hand the screen back to the thread.
    if (grantTimer.current) window.clearTimeout(grantTimer.current);
    grantTimer.current = window.setTimeout(() => setGrantOpen(false), GRANT_CONFIRM_HOLD_MS);
  };

  const joinWaitlist = () => {
    setWaitlistJoined(true);
    if (grantTimer.current) window.clearTimeout(grantTimer.current);
    grantTimer.current = window.setTimeout(() => setGrantOpen(false), GRANT_CONFIRM_HOLD_MS);
  };
  useEffect(() => {
    if (!active) return;
    // With a sheet standing, follow the scroll to the true end rather than to
    // the last message: the thread is padded by the sheet's height, and
    // scrollIntoView would stop at the message and leave that padding below the
    // fold — parking each new turn behind the card as it arrives, and undoing
    // the scroll cue on the very next keystroke of the typewriter.
    if (mobileSheetInset > 0) scrollThreadToEnd();
    else endRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }, [active, messages, replying, phase, revealed, activeIdx, typed, showDots, mobileSheetInset]);

  // A normal navigation away from Welcome closes a manually opened dialog. The
  // event-completion signal arrives later, while `active` is already false, and
  // deliberately reopens the portal over the resolved event.
  useEffect(() => {
    if (!active) setGrantOpen(false);
  }, [active]);

  const canSend = (draft.trim().length > 0 || attachments.length > 0) && replying === null;

  // Stage picked files as pending chips, deduped by name (re-picking a file
  // that's already staged is a no-op). DEMO ONLY: only names are kept — the
  // files are never read or uploaded anywhere.
  const addFiles = (files: FileList) => {
    const names = Array.from(files, f => f.name);
    setAttachments(a => [...a, ...names.filter(n => !a.includes(n))]);
  };
  const removeFile = (name: string) => setAttachments(a => a.filter(n => n !== name));

  // ── Ultron's turns ─────────────────────────────────────────────────────────

  /** Deliver one Ultron turn: an optional labeled "working" hold, then each
   *  part with a typing-mark breath between. `then` fires as the last part
   *  lands (stage advances there, so mid-turn state can't race). */
  const deliverTurn = (
    parts: Msg[],
    opts: { workingLabel?: string; workingMs?: number; then?: () => void } = {},
  ) => {
    const workingMs = prefersReduced ? 300 : opts.workingMs ?? REPLY_DELAY_MS;
    const gap = prefersReduced ? 200 : TURN_GAP_MS;
    setReplying(opts.workingLabel ?? '');
    let nextPart = 0;

    const revealNext = () => {
      if (turnTimer.current) {
        window.clearTimeout(turnTimer.current);
        turnTimer.current = null;
      }

      const part = parts[nextPart];
      if (!part) return;

      const last = nextPart === parts.length - 1;
      nextPart += 1;
      setMessages(m => [...m, part]);

      if (last) {
        setReplying(null);
        turnAdvance.current = null;
        opts.then?.();
        return;
      }

      setReplying('');
      turnTimer.current = window.setTimeout(revealNext, gap);
    };

    turnAdvance.current = revealNext;
    turnTimer.current = window.setTimeout(revealNext, workingMs);
  };

  /** Mobile users can tap the active reading card to reveal the next part of
   *  the turn immediately. Desktop keeps the existing automatic pacing. */
  const advanceMobileTurn = () => {
    if (!mobileManualAdvance) return;
    turnAdvance.current?.();
  };

  /** Post one operator message into the thread (first one flips the nav entry). */
  const postOperator = (text: string, files: string[] = []) => {
    if (!messages.some(m => m.role === 'operator')) onContinued?.();
    setMessages(m => [...m, { role: 'operator', text, ...(files.length ? { attachments: files } : {}) }]);
  };

  // The roster landed (a file, a pasted table, or the sample offer) → the
  // believable import: a working hold, what came in, the result card, then
  // straight into the schedule ask.
  //
  // `cardFile` is set ONLY when the drop zone itself took the file — that's the
  // one case where the intake card should show it reading in. A file sent
  // through the composer is a chat attachment: it already shows as a chip on
  // the operator's message, so the card just holds its working row rather than
  // adopting a document it never received.
  const runRosterImport = (fileName: string, cardFile?: IntakeFile) => {
    setRosterSample(false);
    setRosterCommitted(true);
    retireMobileUploader('roster');
    if (cardFile) animateRosterUpload(cardFile);
    deliverTurn(
      [
        {
          role: 'ultron',
          activity: rosterImportActivity(fileName),
          text: `Got it — read ${fileName}: ${ROSTER_TOTAL} people, licenses, home locations. ` +
            "3 columns I didn't recognize; I kept them so nothing's lost.",
        },
        { role: 'ultron', text: '', card: 'roster' },
        { role: 'ultron', text: `That's ${ROSTER_CLEAN} people in. ${SCHEDULE_ASK}` },
        { role: 'ultron', text: '', card: 'scheduleCta' },
      ],
      {
        workingLabel: 'Bringing your people in…',
        workingMs: WORKING_MS,
        then: () => setStage('schedule'),
      },
    );
  };

  const runRosterSample = () => {
    setRosterSample(true);
    setRosterCommitted(true);
    retireMobileUploader('roster');
    deliverTurn(
      [
        {
          role: 'ultron',
          activity: rosterSampleActivity(signal),
          text: `Done — I spun up ${SAMPLE_COUNT} sample teammates that look like your operation. ` +
            'Every one is tagged "Sample" — one tap to remove them when your real roster lands.',
        },
        { role: 'ultron', text: '', card: 'roster' },
        { role: 'ultron', text: SCHEDULE_ASK },
        { role: 'ultron', text: '', card: 'scheduleCta' },
      ],
      {
        workingLabel: 'Generating sample teammates…',
        workingMs: WORKING_MS,
        then: () => setStage('schedule'),
      },
    );
  };

  // The schedule landed (a file / pasted table) or was described (a shape) →
  // build the week, show it, then invite the operator to watch Ultron handle a
  // live event. Once that invitation lands, the app reveals the event
  // automatically after a short beat.
  // `cardFile` follows the same rule as the roster's (see runRosterImport): only
  // a file the schedule drop zone took itself drives that card's upload state.
  /** Rebuild the shown week to a different sample shape, in place. This is a
   *  try-it-out control on the delivered card, not a new turn — Ultron doesn't
   *  re-narrate, the calendar just switches to the selected pattern. */
  const applyWeekShape = (shape: string) => {
    const week = generateWeekShifts(signal, shape);
    setWeekData({ problems: planWeekProblems(signal, calloutDayName(week)), week });
    setWeekShape(shape);
  };

  const runWeekBuild = (source: { fileName?: string; cardFile?: IntakeFile; shape?: string }) => {
    retireMobileUploader('schedule');
    if (source.cardFile) animateScheduleUpload(source.cardFile);
    // The described shape drives the layout — a 9-to-5 week runs weekdays only,
    // a weekend-heavy one stacks Fri→Sun, a rotation runs all seven evenly — so
    // each chip produces a visibly different calendar rather than one fixture.
    const week = generateWeekShifts(signal, source.shape);
    const problems = planWeekProblems(signal, calloutDayName(week));
    setWeekData({ problems, week });
    setWeekShape(source.shape ?? null);
    // Counts read off the built week, since they now vary by shape.
    const shiftCount = week.reduce((n, day) => n + day.shifts.length, 0);
    const dayCount = week.filter(day => day.shifts.length > 0).length;
    const lead = source.fileName
      ? `Read ${source.fileName} — turned it into next week's shifts. A few columns I ` +
        "didn't recognize, kept so nothing's lost."
      : `Built you a realistic week — ${source.shape!.toLowerCase()}. Here's what's in it.`;
    const activity = source.fileName
      ? weekFromFileActivity(source.fileName, problems.length, shiftCount, dayCount)
      : weekFromShapeActivity(source.shape!.toLowerCase(), problems.length, shiftCount, dayCount);
    deliverTurn(
      [
        { role: 'ultron', activity, text: lead },
        { role: 'ultron', text: '', card: 'week' },
        { role: 'ultron', text: TEST_RUN_ASK },
      ],
      {
        workingLabel: source.fileName ? 'Turning it into shifts…' : 'Building your week…',
        workingMs: WORKING_MS,
        then: () => {
          setStage('done');
          onTestRunReady?.();
        },
      },
    );
  };

  // Route one operator message by where the setup stands. Shared by the
  // composer and the one-tap pills.
  const post = (text: string, files: string[] = []) => {
    if ((!text && files.length === 0) || replying !== null) return;
    postOperator(text, files);

    // A composer attachment reads as a document sent in conversation, so it
    // travels as the chip on the operator's message and nothing more — no
    // `cardFile`, so the intake card is left alone rather than showing a file
    // it never took.
    if (stage === 'roster') {
      if (files.length > 0) runRosterImport(files[0]);
      else if (looksLikePastedTable(text)) runRosterImport('your pasted roster');
      else deliverTurn([{ role: 'ultron', activity: nudgeActivity('roster'), text: ROSTER_NUDGE }]);
      return;
    }

    if (stage === 'schedule') {
      if (files.length > 0) runWeekBuild({ fileName: files[0] });
      else if (looksLikePastedTable(text)) runWeekBuild({ fileName: 'your pasted schedule' });
      // Any typed answer here is the shape of their week — build around it.
      else runWeekBuild({ shape: text });
      return;
    }

    // Setup complete — the welcome thread now behaves like a normal conversation.
    const replyCount = messages.filter(m => m.role === 'ultron').length;
    deliverTurn([{ role: 'ultron', activity: chatReplyActivity(), text: mockUltronReply(text, replyCount) }]);
  };

  const send = () => {
    const text = draft.trim();
    if ((!text && attachments.length === 0) || replying !== null) return;
    post(text, attachments);
    setDraft('');
    setAttachments([]);
  };

  // The roster drop zone's picker — the file was handed to the card, so the card
  // is what shows it reading in (`cardFile`). Only live while the setup is still
  // waiting on the roster.
  const pickRosterFiles = (files: FileList | File[] | null) => {
    if (!files || files.length === 0 || stage !== 'roster' || replying !== null) return;
    const picked = Array.from(files);
    const names = picked.map(f => f.name);
    postOperator('', names);
    runRosterImport(names[0], {
      name: picked[0].name,
      type: picked[0].type,
      size: picked[0].size,
    });
  };

  // The schedule drop zone's picker — same contract as the roster one: the card
  // took the file, so the card carries the upload.
  const pickScheduleFiles = (files: FileList | File[] | null) => {
    if (!files || files.length === 0 || stage !== 'schedule' || replying !== null) return;
    const picked = Array.from(files);
    const names = picked.map(f => f.name);
    postOperator('', names);
    runWeekBuild({
      fileName: names[0],
      cardFile: {
        name: picked[0].name,
        type: picked[0].type,
        size: picked[0].size,
      },
    });
  };

  // ── One-tap pills, by stage ────────────────────────────────────────────────
  // Roster: the sample-crew stand-in. Schedule: the vertical-appropriate week
  // shapes. Both dock inside their drop zone. Once setup is done the thread is
  // a plain conversation — no suggestion row above the composer.
  const pills: { icon?: ComponentType<{ size?: number }>; label: string; onTap: () => void }[] =
    replying !== null
      ? []
      : stage === 'roster'
      ? [
          { icon: Users03Icon, label: 'No roster handy? Use sample teammates', onTap: () => { postOperator('Use sample teammates'); runRosterSample(); } },
        ]
      : stage === 'schedule'
      ? shapeChips.map(s => ({
          icon: ClockIcon,
          label: s,
          onTap: () => { postOperator(s); runWeekBuild({ shape: s }); },
        }))
      : [];

  // While the setup is collecting a document, the stage's pills dock inside
  // the drop zone itself, under its browse button (FileUploader's footerSlot).
  const cardPills = stage !== 'done' && pills.length > 0 ? (
    <CardPills aria-label="Suggestions">
      {pills.map(({ icon: Icon, label, onTap }) => (
        // $browseSized: these dock directly under the drop zone's Browse button,
        // so they take its dimensions rather than the compact pill's.
        <SuggestionPill key={label} type="button" $browseSized onClick={onTap}>
          {Icon && <Icon size={14} />}
          {label}
        </SuggestionPill>
      ))}
    </CardPills>
  ) : null;

  const placeholder =
    stage === 'roster'
      ? 'Attach your roster, or ask Ultron anything…'
      : stage === 'schedule'
      ? 'Attach your schedule, or describe your week…'
      : 'Tell Ultron what to take on next…';
  const isWaitlistModal = accessModalMode === 'waitlist';
  const accessConfirmed = isWaitlistModal ? waitlistJoined : unlocked;
  const phoneReady = phone.length >= 10;

  return (
    <Root>
      {/* Continue onboarding's ambient visual language into this one-time
          handoff only. Both layers are decorative and stay beneath the thread.

          Desktop only. The aurora wash and the cursor glow are both authored
          for a wide canvas with room around the thread: on a phone the thread
          takes the full width, so the colour sits directly behind the messages
          as a tint rather than reading as light in the space beside them — and
          the glow has no cursor to follow in the first place. The page keeps
          its plain surface there. Mounting is gated rather than hidden in CSS
          so neither layer runs its rAF loop on a phone. */}
      {!isMobile && (
        <>
          <IntroBackdrop links={1} />
          <MouseGlow />
        </>
      )}

      {/* Page header — the event page's header lockup (title over a muted
          one-line subtitle), with the case avatar swapped for the page's
          document icon and no trailing open-record control. */}
      <PageHeader $condensed={headerCondensed}>
        <PageHeaderInner $condensed={headerCondensed}>
          {/* The leading artwork is Ultron's magnetic globe — the same identity
              the onboarding flow built cell by cell, now held compactly in the
              header while the welcome messages begin immediately. */}
          <PageHeaderIcon $condensed={headerCondensed} role="img" aria-label="Ultron">
            {/* Keep both canvases at a native render size and cross-fade them.
                Scaling the detailed 140px canvas through fractional sizes made
                its particles shimmer while the header was moving. The hero holds
                the full 3D sphere; the condensed bar takes the 2D (flat-on) form
                of the same mark, which is what reads at 36px — the same call the
                secondary nav's rows make. */}
            <PageHeaderMarkLayer $show={!headerCondensed} aria-hidden="true">
              <AgentMark mark="magnetic" size={140} tone="auto" state="active" />
            </PageHeaderMarkLayer>
            <PageHeaderMarkLayer $show={headerCondensed} $compact aria-hidden="true">
              <AgentMark mark="magnetic2d" size={36} tone="auto" state="active" />
            </PageHeaderMarkLayer>
          </PageHeaderIcon>
          <PageHeaderText $condensed={headerCondensed}>
            <PageHeaderTitle $condensed={headerCondensed}>Welcome</PageHeaderTitle>
            <PageHeaderSubtitle $condensed={headerCondensed}>
              Finish your setup, right in the chat
            </PageHeaderSubtitle>
          </PageHeaderText>
        </PageHeaderInner>
      </PageHeader>
      <Scroll
        ref={scrollRef}
        onScroll={event => {
          resolveHeaderForScroll(event.currentTarget);
          syncThreadAtEnd(event.currentTarget);
        }}
      >
        <Thread $bottomInset={mobileSheetInset}>
            {/* Opening turn — Ultron greets, then asks for the roster.
                Delivered one beat at a time: text beats type in, the roster
                drop zone fades in as its own beat. */}
            <Row data-from="ultron">
              <Stack>
                {/* The work behind the greeting — the site read that stood this
                    workspace up. Lands with the turn's first beat, so the group
                    introduces the message rather than preceding an empty column. */}
                {(activeIdx >= 0 || revealed > 0) && (
                  <ActivityGroupSlot>
                    <ActivityTrailCards milestones={openingActivity(companyName(answers.companyWebsite), answers)} collapsed hideActions />
                  </ActivityGroupSlot>
                )}
                {openingBeats
                  .slice(0, activeIdx >= 0 ? activeIdx + 1 : revealed)
                  .map((beat, i) => {
                    if (beat.kind === 'rosterCta') {
                      // The roster intake — a full Alloy drop zone (drag & drop
                      // or browse, with the stage's one-tap pills docked under
                      // its browse button) while the roster is still wanted.
                      // Once handed over it holds a working state — the upload
                      // card reading the file in, or a spinner row while the
                      // sample crew generates — and settles to the compact
                      // checked row when Ultron's reply lands.
                      const waiting = stage === 'roster' && !rosterCommitted;
                      return (
                        <Fragment key={`beat-${i}`}>
                          <BeatReveal>
                            <MobileUploaderSurface
                              // `active` here also gates the portal, so it has to
                              // include the page's own visibility: the sheet escapes
                              // to body and the keep-alive wrapper that hides this
                              // thread can't reach it, so a stage-only test left the
                              // sheet standing over whatever page was opened next.
                              active={active && stage === 'roster'}
                              open={mobileUploaderOpen && stage === 'roster'}
                              closeLabel="Close roster uploader"
                              onClose={() => retireMobileUploader('roster')}
                              onScrollToEnd={scrollThreadToEnd}
                              showScrollCue={!threadAtEnd}
                              onInsetChange={setMobileSheetInset}
                            >
                              {!rosterCommitted ? (
                                <RosterUploaderStage>
                                  {waiting && !rosterUpload && (
                                    <RosterAvatarViewport aria-hidden="true">
                                      <RosterAvatarTrack>
                                        {[...ROSTER_FLOW_PEOPLE, ...ROSTER_FLOW_PEOPLE].map((person, index) => (
                                          <RosterFlowAvatar key={`${person.name}-${index}`}>
                                            <img src={person.photo} alt="" />
                                          </RosterFlowAvatar>
                                        ))}
                                      </RosterAvatarTrack>
                                    </RosterAvatarViewport>
                                  )}
                                  <IntakeUploader
                                    data-roster-flow={waiting && !rosterUpload ? '' : undefined}
                                    variant="area"
                                    browseButtonVariant="primary"
                                    accept=".csv,.xlsx,.xls,.pdf,image/*"
                                    title="Drop your roster here, or browse your files"
                                    description="Spreadsheet, PDF, or a photo of a printed one"
                                    state={rosterUpload?.state ?? 'empty'}
                                    progress={rosterUpload?.progress ?? 0}
                                    file={rosterUpload?.file ?? null}
                                    disabled={replying !== null && !rosterUpload}
                                    footerSlot={waiting && phase === 'ready' ? cardPills : undefined}
                                    onFileSelect={file => pickRosterFiles([file])}
                                    onClear={() => {}}
                                  />
                                </RosterUploaderStage>
                              ) : stage === 'roster' ? (
                                rosterUpload ? (
                                  <IntakeUploader
                                    variant="area"
                                    accept=".csv,.xlsx,.xls,.pdf,image/*"
                                    title="Drop your roster here, or browse your files"
                                    description="Spreadsheet, PDF, or a photo of a printed one"
                                    state={rosterUpload.state}
                                    progress={rosterUpload.progress}
                                    file={rosterUpload.file}
                                    onFileSelect={() => {}}
                                    onClear={() => {}}
                                  />
                                ) : (
                                  <SummaryItemCard>
                                    <RowIcon aria-hidden="true"><Users03Icon size={16} /></RowIcon>
                                    <RowText>
                                      <RowLabel>Roster</RowLabel>
                                      {/* Ultron's working label, falling back to the
                                          quiet in-between-parts state — which reads
                                          off how the roster arrived, since this row
                                          now also carries composer attachments and
                                          pasted tables, not just the sample crew. */}
                                      <RowDetail>
                                        {replying || (rosterSample ? 'Generating sample teammates…' : 'Reading your roster…')}
                                      </RowDetail>
                                    </RowText>
                                    <RowStatus aria-hidden="true">
                                      <RowSpinner />
                                    </RowStatus>
                                  </SummaryItemCard>
                                )
                              ) : (
                                <SummaryItemCard $done>
                                  <RowIcon aria-hidden="true"><UploadCloud01Icon size={16} /></RowIcon>
                                  <RowText>
                                    <RowLabel>Roster</RowLabel>
                                    <RowDetail>Spreadsheet, PDF, or a photo of a printed one</RowDetail>
                                  </RowText>
                                  <RowStatus aria-hidden="true">
                                    <CheckCircleIcon size={18} />
                                  </RowStatus>
                                </SummaryItemCard>
                              )}
                            </MobileUploaderSurface>
                          </BeatReveal>
                        </Fragment>
                      );
                    }
                    const isActive = i === activeIdx;
                    return (
                      <Bubble key={`beat-${i}`} data-from="ultron">
                        {isActive ? <TypedRun text={typed} /> : beat.text}
                      </Bubble>
                    );
                  })}
                {showDots && (
                  <DotsRow>
                    <Typing role="status" aria-label="Ultron is typing">
                      <AgentMark mark="lines" size={30} tone="auto" state="active" coreHalo={false} aria-hidden="true" />
                    </Typing>
                  </DotsRow>
                )}
              </Stack>
            </Row>

            {messages.map((m, i) => {
              // The turn's activity group — the thinking/working trail that
              // produced this message, folded to a one-line recap above it.
              // Only the first part of a turn carries one (see Msg.activity).
              const activity = m.activity ? (
                <ActivityGroupSlot>
                  <ActivityTrailCards milestones={m.activity} collapsed hideActions />
                </ActivityGroupSlot>
              ) : null;
              // Result cards span the thread column, like the recap card above.
              if (m.card) {
                return (
                  <Row key={i} data-from="ultron">
                    <Stack>
                      {activity}
                      <BeatReveal $pop={m.card === 'week'}>
                        {m.card === 'roster' ? (
                          <RosterResultCard sample={rosterSample} />
                        ) : m.card === 'scheduleCta' ? (
                          /* The schedule intake — the roster drop zone's twin,
                             delivered with the schedule ask (its one-tap week
                             shapes docked under the browse button). Handed a
                             file it holds the upload card while the week
                             builds; described a shape, a spinner row carries
                             the working beat. It settles to the compact
                             checked row once the week lands. */
                          <MobileUploaderSurface
                            // Page visibility gates the portal — see the roster twin.
                            active={active && stage === 'schedule'}
                            open={mobileUploaderOpen && stage === 'schedule'}
                            closeLabel="Close schedule uploader"
                            onClose={() => retireMobileUploader('schedule')}
                            onScrollToEnd={scrollThreadToEnd}
                            showScrollCue={!threadAtEnd}
                            onInsetChange={setMobileSheetInset}
                          >
                            {stage === 'schedule' ? (
                              scheduleUpload ? (
                                <IntakeUploader
                                  variant="area"
                                  accept=".csv,.xlsx,.xls,.pdf,image/*"
                                  title="Drop your schedule here, or browse your files"
                                  description="Spreadsheet, PDF, or a photo — any format works"
                                  state={scheduleUpload.state}
                                  progress={scheduleUpload.progress}
                                  file={scheduleUpload.file}
                                  onFileSelect={() => {}}
                                  onClear={() => {}}
                                />
                              ) : replying !== null ? (
                                <ScheduleGeneratingReveal>
                                  <SummaryItemCard>
                                    <RowIcon aria-hidden="true"><ClockIcon size={16} /></RowIcon>
                                    <RowText>
                                      <RowLabel>Schedule</RowLabel>
                                      <RowDetail>{replying || 'Building your week…'}</RowDetail>
                                    </RowText>
                                    <RowStatus aria-hidden="true">
                                      <RowSpinner />
                                    </RowStatus>
                                  </SummaryItemCard>
                                </ScheduleGeneratingReveal>
                              ) : (
                                <ScheduleUploaderStage>
                                  <SchedulePreview
                                    role="img"
                                    aria-label={`${schedulePreview.label}: ${schedulePreview.shape}`}
                                  >
                                    <SchedulePreviewGrid>
                                      {schedulePreview.week.map((day, dayIndex) => {
                                        const offset = schedulePreview.week
                                          .slice(0, dayIndex)
                                          .reduce((total, item) => total + item.shifts.length, 0);
                                        return (
                                          <SchedulePreviewDay key={day.label}>
                                            <SchedulePreviewDayHead>{day.label.slice(0, 1)}</SchedulePreviewDayHead>
                                            {day.shifts.length ? day.shifts.map((shift, shiftIndex) => (
                                              <SchedulePreviewShift
                                                key={`${shift.time}-${shiftIndex}`}
                                                $sequence={offset + shiftIndex}
                                                $flag={shift.flag}
                                              />
                                            )) : (
                                              <SchedulePreviewEmpty />
                                            )}
                                          </SchedulePreviewDay>
                                        );
                                      })}
                                    </SchedulePreviewGrid>
                                  </SchedulePreview>
                                  <IntakeUploader
                                    data-schedule-flow=""
                                    variant="area"
                                    browseButtonVariant="primary"
                                    accept=".csv,.xlsx,.xls,.pdf,image/*"
                                    title="Drop your schedule here, or browse your files"
                                    description="Spreadsheet, PDF, or a photo — any format works"
                                    state="empty"
                                    progress={0}
                                    file={null}
                                    footerSlot={cardPills}
                                    onFileSelect={file => pickScheduleFiles([file])}
                                    onClear={() => {}}
                                  />
                                </ScheduleUploaderStage>
                              )
                            ) : (
                              <SummaryItemCard $done>
                                <RowIcon aria-hidden="true"><UploadCloud01Icon size={16} /></RowIcon>
                                <RowText>
                                  <RowLabel>Schedule</RowLabel>
                                  <RowDetail>Spreadsheet, PDF, or a photo — any format works</RowDetail>
                                </RowText>
                                <RowStatus aria-hidden="true">
                                  <CheckCircleIcon size={18} />
                                </RowStatus>
                              </SummaryItemCard>
                            )}
                          </MobileUploaderSurface>
                        ) : weekData ? (
                          <>
                            <WeekResultCard problems={weekData.problems} week={weekData.week} />
                            {/* Try the other patterns against the same roster —
                                each rebuilds the card above in place. */}
                            <WeekShapeRow aria-label="Try another schedule">
                              {shapeChips.map(shape => (
                                <SuggestionPill
                                  key={shape}
                                  type="button"
                                  $active={shape === weekShape}
                                  aria-pressed={shape === weekShape}
                                  onClick={() => applyWeekShape(shape)}
                                >
                                  <ClockIcon size={14} />
                                  {shape}
                                </SuggestionPill>
                              ))}
                            </WeekShapeRow>
                          </>
                        ) : null}
                      </BeatReveal>
                    </Stack>
                  </Row>
                );
              }
              const group = (
                <MsgGroup data-from={m.role}>
                  {m.text && <Bubble data-from={m.role}>{m.text}</Bubble>}
                  {m.attachments && (
                    <SentFiles>
                      {m.attachments.map(name => (
                        <FileChip key={name}>
                          <File04Icon size={14} />
                          {name}
                        </FileChip>
                      ))}
                    </SentFiles>
                  )}
                </MsgGroup>
              );
              return (
                <Row key={i} data-from={m.role}>
                  {/* An introduced turn stacks its activity group over the message,
                      full-width like the result cards; a bare message keeps the
                      80%-capped group on its own. */}
                  {activity ? (
                    <Stack>
                      {activity}
                      {group}
                    </Stack>
                  ) : group}
                </Row>
              );
            })}
            {replying !== null && (
              <Row data-from="ultron">
                <LoadingAdvanceButton
                  type="button"
                  onClick={advanceMobileTurn}
                  disabled={!mobileManualAdvance}
                  aria-label={replying ? `${replying} Tap to continue.` : 'Ultron is replying. Tap to continue.'}
                >
                  <TypingCluster>
                    <Typing aria-hidden="true">
                      <AgentMark mark="lines" size={30} tone="auto" state="active" coreHalo={false} aria-hidden="true" />
                    </Typing>
                    {replying && (
                      <WorkingLabel role="status" aria-live="polite">{replying}</WorkingLabel>
                    )}
                  </TypingCluster>
                </LoadingAdvanceButton>
              </Row>
            )}
            <div ref={endRef} />
        </Thread>
      </Scroll>

      {/* Composer + one-tap pills hold back until the opening turn has fully
          delivered, then arrive together. */}
      {phase === 'ready' && !mobileUploaderOpen && (
      <ComposerWrap>
        {/* Ultron's presence mark above the composer — the resting magnetic form,
            and ONLY that: it marks stand-by. While a reply is in flight the working
            presence is the lines mark in the thread, so this one fades out rather
            than doubling it up. The row keeps its box either way, so the composer
            doesn't shift as the mark comes and goes. */}
        <FootMarkRow role="img" aria-label="Ultron" aria-hidden={replying !== null}>
          <MarkMorphBox aria-hidden="true">
            <MarkFormLayer $show={replying === null}>
              <AgentMark mark="magnetic2d" size={24} tone="auto" state="idle" motionSpeed={2.5} coreHalo={false} aria-hidden="true" />
            </MarkFormLayer>
          </MarkMorphBox>
        </FootMarkRow>
        <Composer onSubmit={(e: FormEvent) => { e.preventDefault(); send(); }}>
          {attachments.length > 0 && (
            <PendingFiles aria-label="Files to send">
              {attachments.map(name => (
                <FileChip key={name}>
                  <File04Icon size={14} />
                  {name}
                  <ChipRemove
                    type="button"
                    aria-label={`Remove ${name}`}
                    onClick={() => removeFile(name)}
                  >
                    <XCloseIcon size={12} />
                  </ChipRemove>
                </FileChip>
              ))}
            </PendingFiles>
          )}
          <InputRow>
            <ActionSlot>
              <ComposerAttachment state="idle" onSelect={addFiles} />
            </ActionSlot>
            <Field
              rows={1}
              value={draft}
              placeholder={placeholder}
              aria-label="Message Ultron"
              inputMode="text"
              autoComplete="off"
              onChange={e => setDraft(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
              }}
              onPaste={e => {
                // A file pasted straight into the composer stages as a chip,
                // same as picking it with the paperclip.
                const files = e.clipboardData?.files;
                if (files && files.length > 0) {
                  e.preventDefault();
                  addFiles(files);
                }
              }}
            />
            <ActionSlot>
              <ComposerSendButton state={canSend ? 'ready' : 'disabled-invalid'} onSend={send} />
            </ActionSlot>
          </InputRow>
        </Composer>
      </ComposerWrap>
      )}

      {/* Sales reach-out — one number unlocks the usage grant. The thread's
          single high-emphasis conversion moment, so it blocks the screen as a
          centered modal (Alloy Dialog: portal, scrim, Escape/backdrop close)
          over a blurred backdrop, on the inverse surface. */}
      <GrantOverlayBlur />
      <Dialog
        open={grantOpen}
        onClose={() => setGrantOpen(false)}
        size="lg"
        aria-label={`${isWaitlistModal ? 'Join waitlist' : 'Unlock grant'} — Ultron access`}
      >
        <GrantCard>
          <GrantBrandWatermark aria-hidden="true">
            <TeambridgeMark size={300} />
          </GrantBrandWatermark>
          <GrantClose type="button" aria-label="Close" onClick={() => setGrantOpen(false)}>
            <XCloseIcon size={18} />
          </GrantClose>

          <GrantEyebrow>
            <GrantSpark aria-hidden="true" />
            {isWaitlistModal ? 'Ultron early access' : 'Your welcome grant'}
          </GrantEyebrow>
          {!isWaitlistModal && (
            <GrantOffer aria-label="$1,000 of work on us">
              <GrantAmount><GrantCurrency>$</GrantCurrency>1,000</GrantAmount>
              <GrantOfferLabel>of work<br /><strong>on us</strong></GrantOfferLabel>
            </GrantOffer>
          )}

          <GrantTitle $prominent={isWaitlistModal}>
            {isWaitlistModal ? 'Be first when access opens.' : 'Ready to see the real work?'}
          </GrantTitle>
          <GrantBody>
            {isWaitlistModal
              ? 'Ultron is opening access in waves. Leave your number and we’ll text the moment your workspace is unblocked.'
              : 'Bring Ultron into your operation. Leave your mobile number and we’ll get the real workspace ready—your first 100,000 credits are covered.'}
          </GrantBody>

          <GrantPerks aria-label={isWaitlistModal ? 'Waitlist benefits' : 'Grant benefits'}>
            {isWaitlistModal ? (
              <>
                <GrantPerk>Priority access</GrantPerk>
                <GrantPerk>One text when ready</GrantPerk>
                <GrantPerk>No commitment</GrantPerk>
              </>
            ) : (
              <>
                <GrantPerk>100,000 credits</GrantPerk>
                <GrantPerk>Up to 3 months</GrantPerk>
                <GrantPerk>You approve every action</GrantPerk>
              </>
            )}
          </GrantPerks>

          {accessConfirmed ? (
            <GrantConfirmed role="status">
              <CheckCircleIcon size={20} />
              {isWaitlistModal
                ? 'You’re on the list — we’ll text as soon as your access opens.'
                : 'You’re set — we’ll text you when your real workspace is ready. Your $1,000 grant is live.'}
            </GrantConfirmed>
          ) : (
            <GrantForm
              onSubmit={(e: FormEvent) => {
                e.preventDefault();
                if (phoneReady) {
                  if (isWaitlistModal) joinWaitlist();
                  else unlock();
                }
              }}
            >
                <GrantFormLabel htmlFor="welcome-grant-phone">
                  {isWaitlistModal
                    ? 'Where should we send your access text?'
                    : 'Where should we text your invite?'}
                </GrantFormLabel>
                <GrantFormRow>
                  <GrantField
                    id="welcome-grant-phone"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    minLength={10}
                    maxLength={15}
                    value={phone}
                    placeholder="Your phone number"
                    aria-label="Mobile number"
                    autoComplete="tel"
                    onChange={e => setPhone(e.target.value.replace(/\D/g, ''))}
                  />
                <GrantButton type="submit" variant="tertiary" size="lg" disabled={!phoneReady}>
                  {isWaitlistModal ? 'Join waitlist' : 'Unlock $1,000'}
                </GrantButton>
              </GrantFormRow>
            </GrantForm>
          )}
          <GrantFinePrint>
            {isWaitlistModal
              ? 'Access updates only — never spam. Msg & data rates may apply. Reply STOP to opt out.'
              : 'Proposals only — never spam. Msg & data rates may apply. Reply STOP to opt out.'}
          </GrantFinePrint>
        </GrantCard>
        <ModalDemoSwitch
          type="button"
          onClick={() => {
            if (grantTimer.current) window.clearTimeout(grantTimer.current);
            setAccessModalMode(mode => mode === 'grant' ? 'waitlist' : 'grant');
          }}
        >
          Demo: show {isWaitlistModal ? 'welcome grant' : 'waitlist'}
        </ModalDemoSwitch>
      </Dialog>
    </Root>
  );
}

// ── Result cards ─────────────────────────────────────────────────────────────

/** The roster import result, delivered as its own Ultron message. Import
 *  variant: the "81 of 84" confidence stat, a preview of the people who came
 *  in clean, and the quarantined rows collapsed behind a review toggle.
 *  Sample variant: the generated crew, every row visibly tagged "Sample". */
function RosterResultCard({ sample }: { sample: boolean }) {
  // Collapsed by default — the count + alert toggle carry the signal, and the
  // detail expands only when the admin wants to look.
  const [reviewOpen, setReviewOpen] = useState(false);
  // The people list starts expanded (it's the reveal), but the whole card
  // header is a toggle — the chevron on its top right collapses the list back
  // to just the headline once the admin has seen it.
  const [peopleOpen, setPeopleOpen] = useState(true);
  const preview = MERIDIAN_ROSTER.slice(0, 6);
  const more = (sample ? SAMPLE_COUNT : ROSTER_CLEAN) - preview.length;

  return (
    <ResultCard aria-label={sample ? 'Sample teammates' : 'Roster import result'}>
      <PeopleToggle
        type="button"
        aria-expanded={peopleOpen}
        aria-controls="welcome-roster-people"
        onClick={() => setPeopleOpen(o => !o)}
      >
        {sample ? (
          <CardHead>
            <CardHeadText>{SAMPLE_COUNT} sample teammates, ready to run a full week</CardHeadText>
          </CardHead>
        ) : (
          <CleanStat>
            <CleanNumber>
              {ROSTER_CLEAN} <CleanOf>/{ROSTER_TOTAL}</CleanOf>
            </CleanNumber>
            <CleanLabel>
              <CheckCircleIcon size={16} /> imported clean
            </CleanLabel>
          </CleanStat>
        )}
        <ReviewChevron $open={peopleOpen} aria-hidden="true">
          <ChevronDownIcon size={16} />
        </ReviewChevron>
      </PeopleToggle>

      {peopleOpen && (
      <PeopleList id="welcome-roster-people" aria-label={sample ? 'Sample teammates' : 'Imported teammates'}>
        {preview.map((w, i) => (
          <PersonRow key={w.name} $i={i}>
            <PersonAvatar aria-hidden="true">
              {initials(w.name)}
              <img
                src={avatarPhoto(i)}
                alt=""
                loading="lazy"
                onError={e => { e.currentTarget.style.display = 'none'; }}
              />
            </PersonAvatar>
            <PersonWho>
              <PersonName>{w.name}</PersonName>
              <PersonMeta>{w.role} · {w.tenure}</PersonMeta>
            </PersonWho>
            {w.credentialStatus === 'expiring' ? (
              <Tag size="sm" variant="subtle" color="yellow" dot>
                {w.credential} · {w.expiresInDays}d
              </Tag>
            ) : (
              <Tag size="sm" variant="subtle" color="green">{w.credential}</Tag>
            )}
            {sample && <Tag size="sm" variant="outline" color="purple">Sample</Tag>}
          </PersonRow>
        ))}
        <PeopleMore>
          {sample
            ? `+ ${more} more · every one tagged “Sample”`
            : `+ ${more} more imported clean`}
        </PeopleMore>
      </PeopleList>
      )}

      {/* The messy rows quarantine at the bottom of the card — flagged for
          review, never blocking the import. Only the real-import variant has
          them; a generated crew has nothing to hold back. */}
      {!sample && (
        <ReviewList>
          <ReviewToggle
            type="button"
            aria-expanded={reviewOpen}
            aria-controls="welcome-roster-review-rows"
            onClick={() => setReviewOpen(o => !o)}
          >
            <ReviewHead>{QUARANTINE_ROWS.length} rows kept for review</ReviewHead>
            <ReviewTrail>
              <ReviewAlert aria-hidden="true"><AlertTriangleIcon size={15} /></ReviewAlert>
              <ReviewChevron $open={reviewOpen} aria-hidden="true">
                <ChevronDownIcon size={16} />
              </ReviewChevron>
            </ReviewTrail>
          </ReviewToggle>
          {reviewOpen && (
            <ReviewRows id="welcome-roster-review-rows" aria-label="Rows held for review">
              {QUARANTINE_ROWS.map(row => (
                <ReviewRow key={row.where}>
                  <ReviewRowIcon aria-hidden="true"><AlertTriangleIcon size={15} /></ReviewRowIcon>
                  <ReviewText>
                    <ReviewWhere>{row.where}</ReviewWhere>
                    <ReviewReason>{row.reason}</ReviewReason>
                  </ReviewText>
                </ReviewRow>
              ))}
            </ReviewRows>
          )}
        </ReviewList>
      )}
    </ResultCard>
  );
}

/** The built week, delivered as its own Ultron message: the days · shifts ·
 *  to-handle stat line, the planted problems collapsed behind a toggle, and
 *  the seven-day calendar of shifts. */
function WeekResultCard({ problems, week }: { problems: WeekProblem[]; week: WeekDay[] }) {
  const [waitingOpen, setWaitingOpen] = useState(false);
  // Sequence shift entrances down each day before moving to the next column,
  // so the calendar fills top-to-bottom, then left-to-right.
  const shiftOffsets = week.map((_, dayIndex) =>
    week.slice(0, dayIndex).reduce((total, day) => total + day.shifts.length, 0),
  );
  // Counted off the week rather than fixed: the shape the operator described
  // decides how many days run and how many shifts land on them.
  const dayCount = week.filter(day => day.shifts.length > 0).length;
  const shiftCount = week.reduce((total, day) => total + day.shifts.length, 0);

  return (
    <ResultCard aria-label="Your week">
      {/* Card header — the stat line leads, with the waiting-problems toggle
          tucked into the top-right corner: just the alert + chevron (its
          aria-label/title carry the "N things waiting" count). */}
      <WeekHeadRow>
        <WeekStat>
          <WeekStatItem><WeekStatNum>{dayCount}</WeekStatNum> days</WeekStatItem>
          <WeekStatDot aria-hidden="true">·</WeekStatDot>
          <WeekStatItem><WeekStatNum>{shiftCount}</WeekStatNum> shifts</WeekStatItem>
        </WeekStat>
        <WaitingToggle
          type="button"
          aria-expanded={waitingOpen}
          aria-controls="welcome-week-waiting-rows"
          aria-label={`${problems.length} things waiting in your week`}
          title={`${problems.length} things waiting in your week`}
          onClick={() => setWaitingOpen(o => !o)}
        >
          <ReviewAlert aria-hidden="true"><AlertTriangleIcon size={15} /></ReviewAlert>
          <ReviewChevron $open={waitingOpen} aria-hidden="true">
            <ChevronDownIcon size={16} />
          </ReviewChevron>
        </WaitingToggle>
      </WeekHeadRow>

      {/* The planted problems — collapsed by default behind the header toggle;
          they expand above the calendar so the work Ultron's about to take on
          comes first. */}
      {waitingOpen && (
        <WaitingRows id="welcome-week-waiting-rows" aria-label="Waiting in your week">
          {problems.map((p, i) => (
            <ReviewRow key={`${p.worker}-${i}`}>
              <ProblemIcon $kind={p.kind} aria-hidden="true">
                {p.kind === 'missing' ? <ClockIcon size={15} /> : <AlertTriangleIcon size={15} />}
              </ProblemIcon>
              <ReviewText>
                <ProblemWho>{p.worker} · {p.role}</ProblemWho>
                <ProblemDetail>{p.detail}</ProblemDetail>
              </ReviewText>
            </ReviewRow>
          ))}
        </WaitingRows>
      )}

      {/* The week itself — a calendar of shifts across the seven days. */}
      <CalScroll>
        <CalGrid role="table" aria-label="Next week's shifts">
          {week.map((day, dayIndex) => (
            <CalDay key={day.label} role="column">
              <CalDayHead>{day.label}</CalDayHead>
              {day.shifts.map((s, i) => (
                <ShiftChip
                  key={`${day.label}-${i}`}
                  $flag={s.flag}
                  $sequence={shiftOffsets[dayIndex] + i}
                >
                  <ShiftTime>{s.time}</ShiftTime>
                  <ShiftWho>{s.who}</ShiftWho>
                </ShiftChip>
              ))}
            </CalDay>
          ))}
        </CalGrid>
      </CalScroll>
    </ResultCard>
  );
}

// ── Styled ───────────────────────────────────────────────────────────────────

const Root = styled.div`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  /* Own the full height and cancel the shell's ContentMain bottom padding (as the
     event page's Page does) so the composer snaps to the very foot. */
  height: calc(100% + var(--space-8));
  margin-bottom: calc(-1 * var(--space-8));
  /* Grow as well as measure. On the mobile shell this page's ancestors take
     their height from flex rather than from a definite value, so the percentage
     above falls back to content height and the backdrop would stop at the last
     message instead of covering the viewport. Growing fills the column whatever
     the parent's height came from; on desktop the percentage already resolves,
     the free space is zero, and this changes nothing. */
  flex: 1 1 auto;
  min-height: 0;

  /* The mobile shell's content column has no bottom padding to cancel, so the
     bleed above would just hang 32px past the viewport as stray scroll. */
  @media (max-width: 767px) {
    height: 100%;
    margin-bottom: 0;
  }
  overflow: hidden;
  background: var(--color-bg-primary);
`;

/* ── Page header ─────────────────────────────────────────────────────────────
   Mirrors the event page's card header (UltronCard's CardHeader lockup: Alloy
   label/md title over a muted one-line subtitle, avatar-led), with the case
   avatar swapped for the page's document icon on a recessed square and the
   trailing open-record link dropped. Aligned to the thread column. */
/* ── Shared glass-bar surface ────────────────────────────────────────────────
   The frosted surface behind a pinned bar, in two layers. Chromium does not
   apply mask-image to backdrop-filter, so blurring an alpha-masked overhang
   leaves a hard line where the blur rect ends (the tint fades, the blur
   doesn't). Instead: the blur + tint cover exactly the bar (::before), and the
   thread-facing overhang is a pure gradient tint (::after) that fades out over
   the scrolling content with no blur edge. The header's settings are the
   source of truth; the footer mirrors them ('down' fades past the bottom
   edge, 'up' past the top). */
const GLASS_BAR_TINT = 'color-mix(in srgb, var(--color-bg-primary) 60%, transparent)';

const glassBarFrost = css`
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background: ${GLASS_BAR_TINT};
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  pointer-events: none;
`;

const glassBarFade = (fade: 'down' | 'up') => css`
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  ${fade === 'down' ? 'top: 100%;' : 'bottom: 100%;'}
  height: var(--space-10);
  z-index: 0;
  background: linear-gradient(${fade === 'down' ? 'to bottom' : 'to top'}, ${GLASS_BAR_TINT}, transparent);
  pointer-events: none;
`;

const PageHeader = styled.header<{ $condensed: boolean }>`
  flex-shrink: 0;
  position: relative;
  isolation: isolate;
  /* Sit above the scroll area so the fade below paints over its content. */
  z-index: 2;
  background: transparent;

  /* The glass bar only exists in the condensed state: the large welcome lockup
     floats directly on the scene with no frost or fade, and the bar eases in
     as the header condenses over scrolling content. */
  &::before {
    ${glassBarFrost}
    opacity: ${p => (p.$condensed ? 1 : 0)};
    transition: opacity 220ms var(--ease-out);
  }
  &::after {
    ${glassBarFade('down')}
    opacity: ${p => (p.$condensed ? 1 : 0)};
    transition: opacity 220ms var(--ease-out);
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      transition: none;
    }
  }
`;

const HEADER_MORPH_MS = '320ms';
const HEADER_MORPH_EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

const PageHeaderInner = styled.div<{ $condensed: boolean }>`
  position: relative;
  z-index: 1;
  width: 100%;
  height: ${p => (p.$condensed ? HEADER_BAR_PX : HEADER_HERO_PX)}px;
  /* Match the thread column exactly: 720px of content plus the same side
     padding, so the header lockup left-aligns with the bubbles and composer. */
  max-width: calc(720px + var(--space-6) * 2);
  margin: 0 auto;
  transition: height ${HEADER_MORPH_MS} ${HEADER_MORPH_EASE};

  @media (max-width: 600px) {
    height: ${p => (p.$condensed ? HEADER_BAR_SM_PX : HEADER_HERO_SM_PX)}px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* The leading artwork — Ultron's magnetic globe in the event header. A compact
   bloom keeps the mark legible without recreating the removed center splash. */
const PageHeaderIcon = styled.span<{ $condensed: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: absolute;
  /* Condensed: centred on the text lockup rather than on the bar, since the
     lockup itself sits slightly below the bar's middle. The block runs from the
     title's top (15) through the subtitle's bottom (15 + 14×1.5 + 14×1.5 = 57),
     so its centre is 36 and a 36px mark starts at 18. */
  top: ${p => p.$condensed ? '18px' : '24px'};
  left: ${p => p.$condensed ? 'var(--space-6)' : '50%'};
  width: ${p => p.$condensed ? '36px' : '140px'};
  height: ${p => p.$condensed ? '36px' : '140px'};
  transform: ${p => p.$condensed ? 'translateX(0)' : 'translateX(-50%)'};
  opacity: 1;
  visibility: visible;
  transition:
    top ${HEADER_MORPH_MS} ${HEADER_MORPH_EASE},
    left ${HEADER_MORPH_MS} ${HEADER_MORPH_EASE},
    width ${HEADER_MORPH_MS} ${HEADER_MORPH_EASE},
    height ${HEADER_MORPH_MS} ${HEADER_MORPH_EASE},
    transform ${HEADER_MORPH_MS} ${HEADER_MORPH_EASE};

  &::before {
    content: '';
    position: absolute;
    inset: -18%;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      var(--color-bg-secondary) 0%,
      transparent 72%
    );
    pointer-events: none;
  }

  @media (max-width: 600px) {
    /* Same centring at the small scale: a 7 → 41 block (14×1.5 title over a
       12×1.2 subtitle) against a 32px mark. */
    top: ${p => p.$condensed ? '8px' : '16px'};
    left: ${p => p.$condensed ? 'var(--space-4)' : '50%'};
    width: ${p => p.$condensed ? '32px' : '140px'};
    height: ${p => p.$condensed ? '32px' : '140px'};
  }

  /* Short viewports drop the condensed subtitle (see PageHeaderSubtitle), which
     leaves the title alone as the lockup — a 7 → 28 block, centre 17.5. */
  @media (max-width: 600px) and (max-height: 700px) {
    top: ${p => p.$condensed ? '1.5px' : '16px'};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const PageHeaderMarkLayer = styled.span<{ $show: boolean; $compact?: boolean }>`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  display: block;
  opacity: ${p => p.$show ? 1 : 0};
  transform: translate(-50%, -50%);
  transform-origin: center;
  pointer-events: none;
  transition: opacity ${p => p.$show ? '190ms 55ms' : '130ms'} var(--ease-out);
  will-change: opacity;

  @media (max-width: 600px) {
    transform: translate(-50%, -50%) scale(${p => p.$compact ? 0.8889 : 1});
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const PageHeaderText = styled.div<{ $condensed: boolean }>`
  display: contents;
`;

/* The page identity uses the original responsive title scale, in solid black. */
const PageHeaderTitle = styled.span<{ $condensed: boolean }>`
  position: absolute;
  top: ${p => p.$condensed ? '15px' : '180px'};
  left: ${p => p.$condensed ? '72px' : '50%'};
  transform: ${p => p.$condensed ? 'translateX(0)' : 'translateX(-50%)'};
  max-width: ${p => p.$condensed ? 'calc(100% - 96px)' : 'calc(100% - 48px)'};
  font-family: var(--font-sans);
  font-size: ${p => p.$condensed ? 'var(--text-sm)' : 'clamp(24px, 3vw, 30px)'};
  line-height: ${p => p.$condensed ? 'var(--line-height-relaxed)' : 'var(--line-height-tight)'};
  font-weight: var(--font-weight-semibold);
  letter-spacing: ${p => p.$condensed ? 'var(--tracking-wide)' : 'var(--tracking-tight)'};
  color: #000;
  white-space: nowrap;
  transition:
    top ${HEADER_MORPH_MS} ${HEADER_MORPH_EASE},
    left ${HEADER_MORPH_MS} ${HEADER_MORPH_EASE},
    transform ${HEADER_MORPH_MS} ${HEADER_MORPH_EASE},
    font-size ${HEADER_MORPH_MS} ${HEADER_MORPH_EASE},
    line-height ${HEADER_MORPH_MS} ${HEADER_MORPH_EASE},
    letter-spacing ${HEADER_MORPH_MS} ${HEADER_MORPH_EASE};

  @media (max-width: 600px) {
    top: ${p => p.$condensed ? '7px' : '168px'};
    left: ${p => p.$condensed ? '56px' : '50%'};
    max-width: ${p => p.$condensed ? 'calc(100% - 72px)' : 'calc(100% - 32px)'};
    font-size: ${p => p.$condensed ? 'var(--text-sm)' : '24px'};
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`;

/* One-line muted subtitle — the event header's CardSubtitle, with the muted
   tone drawn from the neutral family (this header sits on the primary surface,
   not the card's tonal fill). */
const PageHeaderSubtitle = styled.span<{ $condensed: boolean }>`
  position: absolute;
  top: ${p => p.$condensed ? '36px' : '213px'};
  left: ${p => p.$condensed ? '72px' : '50%'};
  transform: ${p => p.$condensed ? 'translateX(0)' : 'translateX(-50%)'};
  max-width: ${p => p.$condensed ? 'calc(100% - 96px)' : 'calc(100% - 48px)'};
  font-family: var(--font-sans);
  font-size: ${p => p.$condensed ? 'var(--text-sm)' : 'var(--text-md)'};
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition:
    top ${HEADER_MORPH_MS} ${HEADER_MORPH_EASE},
    left ${HEADER_MORPH_MS} ${HEADER_MORPH_EASE},
    transform ${HEADER_MORPH_MS} ${HEADER_MORPH_EASE},
    font-size ${HEADER_MORPH_MS} ${HEADER_MORPH_EASE},
    line-height ${HEADER_MORPH_MS} ${HEADER_MORPH_EASE};

  @media (max-width: 600px) {
    top: ${p => p.$condensed ? '27px' : '197px'};
    left: ${p => p.$condensed ? '56px' : '50%'};
    max-width: ${p => p.$condensed ? 'calc(100% - 72px)' : 'calc(100% - 32px)'};
    font-size: ${p => p.$condensed ? 'var(--text-xs)' : 'var(--text-sm)'};
    line-height: ${p => p.$condensed ? 'var(--line-height-snug)' : 'var(--line-height-relaxed)'};
  }

  @media (max-width: 600px) and (max-height: 700px) {
    display: ${p => p.$condensed ? 'none' : 'block'};
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`;

const Scroll = styled.div`
  position: relative;
  z-index: 1;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

/* The opening turn (and any dynamic replies) fade + rise in as they mount, so
   the handoff reads as Ultron arriving rather than a static dump. */
const turnIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* The schedule generation beat has a little more presence than an ordinary
   reply: it fades up from the composer edge, briefly overshoots, then settles
   into the thread. The same motion lands the completed week card. */
const schedulePopIn = keyframes`
  0%   { opacity: 0; transform: translateY(12px) scale(0.94); }
  68%  { opacity: 1; transform: translateY(-2px) scale(1.018); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;

/* Individual shifts populate the finished calendar in reading order. */
const shiftPopIn = keyframes`
  0%   { opacity: 0; transform: translateY(-8px) scale(0.9); }
  72%  { opacity: 1; transform: translateY(1px) scale(1.035); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;

/* Wraps a beat that arrives without a typewriter pass (the recap and result
   cards) so it fades + rises in as its own moment. */
const BeatReveal = styled.div<{ $pop?: boolean }>`
  animation: ${p => p.$pop ? schedulePopIn : turnIn}
    ${p => p.$pop ? '520ms' : 'var(--duration-slow, 420ms)'}
    ${p => p.$pop ? 'cubic-bezier(0.22, 1, 0.36, 1)' : 'var(--ease-out)'}
    both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

/* This wrapper mounts only when the schedule prompt turns into its generating
   state, ensuring the entrance plays even though the surrounding message card
   has already been in the thread for several beats. */
const ScheduleGeneratingReveal = styled.div`
  transform-origin: center bottom;
  animation: ${schedulePopIn} 480ms cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const uploadContentIn = keyframes`
  from { opacity: 0; transform: translateY(5px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const rosterPeopleFlow = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-192px); }
`;

const RosterUploaderStage = styled.div`
  position: relative;
  width: 100%;
`;

const ScheduleUploaderStage = styled(RosterUploaderStage)``;

/* On desktop the intake keeps its conversational, inline placement. On phones
   only the active intake becomes a bottom sheet; after that stage completes,
   its compact done state returns to the thread as ordinary history. */
const mobileUploaderIn = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* When the intake is a sheet this is the fixed box that owns the viewport
   placement, and the dock below becomes just its card. The split exists for the
   scroll cue: the card clips its own overflow (it scrolls), so anything sitting
   above its top edge has to be a sibling rather than a child.

   `display: contents` in every other case — desktop, and a dismissed intake
   back inline in the thread — so the wrapper adds no box and that placement
   lays out exactly as if it weren't here. */
const MobileUploaderShell = styled.div<{ $open: boolean }>`
  display: contents;

  @media (max-width: 600px) {
    ${p => p.$open && css`
      position: fixed;
      z-index: 30;
      /* Inset a uniform 12px rather than sitting flush: the sheet reads as a
         card lifted off the page, so it carries a border and a radius on all
         four sides. The bottom offset takes the larger of that margin and the
         home-indicator inset, which also means the inner padding no longer has
         to clear the safe area itself. */
      left: var(--space-3);
      right: var(--space-3);
      bottom: max(var(--space-3), env(safe-area-inset-bottom));
      display: flex;
      flex-direction: column;
      align-items: stretch;
      /* The gap the cue keeps above the card. */
      gap: var(--space-2);
      /* Deliberately no transform here — the entrance animation lives on the
         two children instead. A transformed element becomes the backdrop root
         for everything inside it, so animating this wrapper would leave the
         card's backdrop-filter with nothing but the wrapper's own (empty)
         backdrop to blur, and the thread behind it would read sharp. */
    `}
  }
`;

/* Jump-to-end affordance, floating just above the sheet. Same glass as the card
   under it, so the pair reads as one floating unit. Sized to the touch minimum
   rather than to its 18px glyph. */
const MobileUploaderScrollCue = styled.button`
  align-self: center;
  flex: 0 0 auto;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  color: var(--color-content-secondary);
  border-radius: var(--radius-full);
  cursor: pointer;
  ${liquidGlass}
  /* Denser than the sheet's own glass. The card is large enough that a 50% fill
     still reads as a surface, but at 44px the thread's prose runs straight
     behind the chevron and turns it to mud — this stays glass (same blur, same
     edge) while giving the glyph a field to sit on. */
  background: color-mix(in srgb, var(--color-bg-primary) 88%, transparent);
  /* Rises with the card rather than with a shared wrapper — see the shell. */
  animation: ${mobileUploaderIn} 320ms cubic-bezier(0.22, 1, 0.36, 1) both;

  &:hover {
    color: var(--color-content-primary);
  }

  /* Opacity, not a transform: the entrance animation above owns this element's
     transform for the life of the sheet (fill mode "both"), so a pressed state
     written as translateY would never paint. */
  &:active {
    opacity: 0.7;
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const MobileUploaderDock = styled.div<{ $open: boolean }>`
  position: relative;
  width: 100%;

  @media (max-width: 600px) {
    /* Dismissing the sheet doesn't dismiss the intake — the card just stops
       being a sheet and settles back into the thread, where it stays reachable
       as the ordinary inline uploader (its desktop placement). Only one copy
       exists either way: while open, the surface is portaled to body instead of
       rendering here. */
    display: block;

    ${p => p.$open && css`
      /* Placement is the shell's; the card only sizes itself. min-height: 0 so
         the flex column can shrink it to the cap below rather than to content. */
      min-height: 0;
      max-height: min(82dvh, 680px);
      overflow-y: auto;
      overscroll-behavior: contain;
      /* Top padding is derived from the close button rather than picked off the
         scale: the button is absolutely positioned, so it takes no space of its
         own, and a flat --space-10 (40px) landed the card exactly on its lower
         edge. Clear its inset plus its height, then add the card's own 12px
         gutter — so the gap under the button matches the inset on every other
         side of the content. Keep in step with MobileUploaderClose below. */
      padding: calc(var(--space-2) + var(--space-8) + var(--space-3)) var(--space-3) var(--space-3);
      /* The sheet is the onboarding flow's glass, carried into the handoff: a
         translucent pane that blurs the thread running underneath it rather than
         an opaque card that hides it. Brings its own tint, border, and edge
         highlight — the fill is deliberately see-through, and legibility comes
         from the blur, not from opacity. */
      ${liquidGlass}
      border-radius: var(--radius-2xl);
      /* Lighter than the slab shadow this replaced (was 0 -16px 48px / 24%):
         the glass already separates itself from the page, so the shadow only has
         to seat the sheet rather than do the lifting on its own. Still cast
         upward — it rises from the bottom edge, so there is no light below it.
         Declared after the mixin, whose own box-shadow this supersedes; the
         inset edge highlight is restated here so it isn't lost. */
      box-shadow:
        inset 0 1px 0 color-mix(in srgb, white 45%, transparent),
        0 -8px 28px rgb(0 0 0 / 10%);
      animation: ${mobileUploaderIn} 320ms cubic-bezier(0.22, 1, 0.36, 1) both;
    `}
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const MobileUploaderClose = styled.button`
  display: none;

  @media (max-width: 600px) {
    position: absolute;
    z-index: 4;
    top: var(--space-2);
    right: var(--space-2);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--space-8);
    height: var(--space-8);
    padding: 0;
    color: var(--color-content-secondary);
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border-opaque);
    border-radius: var(--radius-full);
    cursor: pointer;

    &:hover {
      color: var(--color-content-primary);
      background: var(--color-bg-tertiary);
    }

    &:focus-visible {
      outline: 2px solid var(--color-border-focus);
      outline-offset: 2px;
    }
  }
`;

/* Four teammates stay in frame while the repeated track advances one profile
   at a time. The mask makes each face gently arrive from the left and dissolve
   at the right instead of clipping against the viewport. */
const RosterAvatarViewport = styled.div`
  position: absolute;
  z-index: 2;
  top: var(--space-10);
  left: 50%;
  width: 184px;
  height: 44px;
  overflow: hidden;
  transform: translateX(-50%);
  pointer-events: none;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0,
    rgb(0 0 0 / 10%) 8%,
    rgb(0 0 0 / 35%) 16%,
    rgb(0 0 0 / 70%) 24%,
    black 34%,
    black 66%,
    rgb(0 0 0 / 70%) 76%,
    rgb(0 0 0 / 35%) 84%,
    rgb(0 0 0 / 10%) 92%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0,
    rgb(0 0 0 / 10%) 8%,
    rgb(0 0 0 / 35%) 16%,
    rgb(0 0 0 / 70%) 24%,
    black 34%,
    black 66%,
    rgb(0 0 0 / 70%) 76%,
    rgb(0 0 0 / 35%) 84%,
    rgb(0 0 0 / 10%) 92%,
    transparent 100%
  );

  @media (max-width: 600px) {
    top: var(--space-6);
  }
`;

const RosterAvatarTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: max-content;
  animation: ${rosterPeopleFlow} 18s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const RosterFlowAvatar = styled.span`
  display: block;
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  overflow: hidden;
  border: 2px solid var(--color-bg-primary);
  border-radius: var(--radius-full);
  background: var(--color-bg-secondary);
  box-shadow: 0 2px 8px rgb(15 23 42 / 14%);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const schedulePreviewShiftIn = keyframes`
  0%, 5%    { opacity: 0.28; transform: translateY(-3px) scale(0.92); }
  15%, 88%  { opacity: 1; transform: translateY(0) scale(1); }
  97%, 100% { opacity: 0.28; transform: translateY(1px) scale(0.97); }
`;

/* A compact full-week coverage schedule takes the upload glyph's place. Three
   bands fill every day so the intake animation reads as a complete week rather
   than a partially empty result calendar. The actual generated week still
   follows the operator's selected schedule shape. */
const SchedulePreview = styled.div`
  position: absolute;
  z-index: 2;
  top: var(--space-4);
  left: 50%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 236px;
  /* No min-height: the card hugs the week. The grid holds the floor (its own
     min-height reserves the day columns while the shift bars are still drawing
     themselves in), so nothing collapses mid-animation. */
  padding: 7px 10px 8px;
  overflow: hidden;
  transform: translateX(-50%);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--color-bg-primary) 88%, transparent);
  box-shadow: var(--shadow-below-low);
  pointer-events: none;

  @media (max-width: 600px) {
    top: var(--space-2);
    width: 218px;
    padding: 6px 8px 7px;
  }
`;

const SchedulePreviewGrid = styled.span`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`;

const SchedulePreviewDay = styled.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

const SchedulePreviewDayHead = styled.span`
  display: block;
  padding-bottom: 2px;
  border-bottom: 1px solid var(--color-border-opaque);
  font-family: var(--font-sans);
  font-size: 8px;
  font-weight: var(--font-weight-medium);
  line-height: 1;
  text-align: center;
  color: var(--color-content-tertiary);
`;

const SchedulePreviewShift = styled.span<{ $sequence: number; $flag?: 'open' | 'watch' }>`
  display: block;
  width: 100%;
  height: 6px;
  border-radius: 2px;
  background: ${p => p.$flag === 'open'
    ? 'var(--color-error-bg)'
    : p.$flag === 'watch'
      ? 'var(--color-warning-bg)'
      : 'var(--color-bg-tertiary)'};
  border: 1px ${p => p.$flag === 'open' ? 'dashed' : 'solid'} ${p =>
    p.$flag === 'open'
      ? 'var(--color-error-content)'
      : p.$flag === 'watch'
        ? 'var(--color-warning-border)'
        : 'var(--color-border-transparent)'};
  transform-origin: top center;
  animation: ${schedulePreviewShiftIn} 5.6s var(--ease-out) infinite both;
  animation-delay: calc(${p => p.$sequence} * 70ms);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const SchedulePreviewEmpty = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  margin-top: 5px;
  background: var(--color-border-opaque);
  opacity: 0.55;
`;

/* One persistent intake surface across empty → uploading → complete. Alloy's
   FileUploader supplies the states; these overrides make its height, padding,
   border, and newly mounted state content glide together instead of snapping
   between unrelated cards. */
const IntakeUploader = styled(FileUploader)`
  && {
    min-height: 164px;
    /* One step up from Alloy's default 6px (--radius-button, which suits the
       controls this component usually sits among). This drop zone is a card in
       the thread, not a control, so it takes the card radius. */
    border-radius: var(--radius-md);
    overflow: hidden;
    transition:
      min-height 420ms var(--ease-out),
      padding 420ms var(--ease-out),
      gap 420ms var(--ease-out),
      border-color var(--duration-base) var(--ease-out),
      border-style var(--duration-base) var(--ease-out),
      background var(--duration-base) var(--ease-out);
  }

  &&[data-roster-flow][data-state='empty'] {
    min-height: 208px;
    /* Clears the absolutely-positioned people flow above the text block, plus
       a fuller breath beneath it (avatars occupy ~24-68px of the surface). */
    padding-top: 104px;
    gap: var(--space-4);
  }

  &&[data-schedule-flow][data-state='empty'] {
    min-height: 204px;
    padding-top: 82px;
    gap: var(--space-4);
  }

  /* The custom roster and schedule previews replace Alloy's upload glyph. */
  &&:is([data-roster-flow], [data-schedule-flow])[data-state='empty'] > span.alloy-icon-slot {
    display: none;
  }

  &&[data-state='uploading'] {
    min-height: 104px;
    padding: var(--space-5);
    gap: var(--space-3);
    border-style: solid;
  }

  &&[data-state='complete'] {
    min-height: 64px;
    padding: var(--space-4);
    gap: var(--space-2);
    border-style: solid;
    border-color: var(--color-success-border);
  }

  /* The drop zone's headline carries the ask, so it leads at body size rather
     than Alloy's default caption scale. */
  &&[data-state='empty'] p:first-of-type {
    font-size: var(--text-md);
    font-weight: var(--font-weight-semibold);
  }

  /* Keep the welcome intake action visually consistent with the rounded
     suggestion controls below it without affecting footer actions. Alloy's
     primary fill (--color-bg-inverse-primary) resolves to the page surface
     inside this card, so the button disappears against the dark drop zone —
     pin the inverse pair to the content/bg tokens, which flip correctly with
     the theme (white fill on dark, dark fill on light). */
  &&[data-state='empty'] > button {
    min-width: 112px;
    padding-inline: var(--space-4);
    border-radius: var(--radius-full);
    background: var(--color-content-primary);
    color: var(--color-bg-primary);
  }

  &&[data-state='empty'] > button:hover:not(:disabled) {
    background: var(--color-content-secondary);
  }

  & > *:not(input) {
    animation: ${uploadContentIn} 300ms var(--ease-out) both;
  }

  /* Processing begins immediately in this guided flow, so removing the file
     after selection would be misleading. The completed check remains visible. */
  button[aria-label='Remove file'] {
    display: none;
  }

  @media (max-width: 600px) {
    && {
      min-height: 144px;
      padding: var(--space-5) var(--space-4);
      gap: var(--space-3);
    }

    &&[data-roster-flow][data-state='empty'] {
      min-height: 166px;
      padding: 76px var(--space-4) var(--space-4);
      gap: var(--space-2);
    }

    &&[data-schedule-flow][data-state='empty'] {
      min-height: 176px;
      padding: 70px var(--space-4) var(--space-4);
      gap: var(--space-2);
    }

    &&[data-state='uploading'] {
      min-height: 88px;
      padding: var(--space-4);
      gap: var(--space-2);
    }

    &&[data-state='complete'] {
      min-height: 56px;
      padding: var(--space-3);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    && {
      transition: none;
    }

    & > *:not(input) {
      animation: none;
    }
  }
`;

/* Left-aligns the typing mark within the opening stack (the stack stretches
   its children full-width; the mark should hug its content on the left). */
const DotsRow = styled.div`
  display: flex;
  justify-content: flex-start;
  animation: ${turnIn} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

/* One character of the typewriter's head, fading up as the reveal leaves it
   behind (see TypedRun) — the soft edge is the only cue that text is still
   arriving, which is why there's no caret. No display of its own: these have to
   stay inline text so words still wrap mid-fade, and the Bubble's `pre-line`
   reaches them so a space or newline inside the head lays out as it will once
   settled. */
const charFadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const FadingChar = styled.span`
  animation: ${charFadeIn} ${TYPE_FADE_MS}ms linear both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

/* Holds an inbound turn's activity group above the message it introduces. The
   trail ships with its own vertical padding (sized for the case pages' denser
   stack); the thread already spaces its rows, so the slot pulls that padding
   back in and keeps the recap line tight against the prose under it. */
const ActivityGroupSlot = styled.div`
  width: 100%;
  margin-bottom: calc(var(--space-2) * -1);
`;

/* The thread column. Its max-width leaves room for the side padding so the
   inner content runs exactly as wide as the 720px composer below — the recap
   cards and bubbles line up edge to edge with it. */
const Thread = styled.div<{ $bottomInset?: number }>`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: calc(720px + var(--space-6) * 2);
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);

  @media (max-width: 600px) {
    gap: var(--space-2);
    padding: var(--space-3) var(--space-4) var(--space-4);

    /* Scrollable room the height of the open intake sheet, so the conversation
       can be pulled out from under it (the sheet's own scroll cue does exactly
       that). Without this the thread simply ends behind the card and its last
       turns are unreachable. Only while a sheet stands — 0 collapses it. */
    ${p => p.$bottomInset ? css`
      padding-bottom: calc(${p.$bottomInset}px + var(--space-4));
    ` : ''}
  }
`;

const Row = styled.div`
  display: flex;
  animation: ${turnIn} var(--duration-slow, 420ms) var(--ease-out) both;

  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

/* Ultron's opening turn stacks a greeting, the recap card, and the ask as one
   left-aligned column spanning the full thread column, so the recap cards run
   exactly as wide as the composer. */
const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;

  @media (max-width: 600px) {
    gap: var(--space-2);
  }
`;

const Bubble = styled.div`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
  white-space: pre-line;

  /* Outbound (operator) — slate bubble, right side (matches the event page).
     Width is capped by the enclosing MsgGroup. */
  &[data-from='operator'] {
    max-width: 100%;
    padding: var(--space-2) var(--space-4);
    background: var(--color-bg-secondary);
    border-radius: var(--radius-xl);
    font-weight: var(--font-weight-medium);
  }

  /* Inbound (Ultron) — no bubble wrap, just prose (matches the event page). */
  &[data-from='ultron'] {
    max-width: 100%;
  }

  @media (max-width: 600px) {
    /* One step up from the desktop --text-sm. The thread is the whole screen on
       a phone and its prose is the longest read in the flow — 14px is a UI size,
       fine in a dense sidebar next to other chrome, but thin for paragraphs held
       at arm's length. 16px is the phone's reading size. Line height comes down
       a touch from --line-height-relaxed to stop the taller type from spreading
       each turn out. */
    font-size: var(--text-base);
    line-height: 1.45;

    &[data-from='operator'] {
      padding: var(--space-2) var(--space-3);
    }
  }
`;

/* One set-up item as its own card — mirrors the Ultron thread's workflow
   offer/saved card surface (UltronCard's OfferCard): primary bg, opaque
   border, lg radius, low shadow, and the same small hover lift. */
const SummaryItemCard = styled.div<{ $done?: boolean }>`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-below-low);
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out),
              opacity var(--duration-base) var(--ease-out);

  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-below-md);
  }

  /* Settled state — the step is done, so the row recedes: liquid glass instead
     of the opaque fill, dimmed, and no lift on hover. It stays legible as a
     record of what happened without competing with the live beat below it.
     Declared after the base :hover so it wins at equal specificity. */
  ${p => p.$done && css`
    ${liquidGlass}
    opacity: 0.6;
    box-shadow: none;

    &:hover {
      transform: none;
      box-shadow: none;
      opacity: 1;
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: opacity var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
  }
`;

const RowIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`;

const RowText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`;

const RowLabel = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`;

const RowDetail = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-snug, 1.35);
  color: var(--color-content-primary);
`;

/* Trailing status — the green turned-on check, in a fixed 32px square
   (mirroring RowIcon's box on the row's other end) so it centers in the same
   footprint. */
/* In-card working state — a small ring spinning where the check will land,
   shown while Ultron processes the handed-over document or request. */
const rowSpin = keyframes`
  to { transform: rotate(360deg); }
`;

const RowSpinner = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-full);
  /* 2px is the ring's stroke width, not a spacing value. */
  border: 2px solid var(--color-border-opaque);
  border-top-color: var(--color-content-secondary);
  animation: ${rowSpin} 700ms linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 1600ms;
  }
`;

const RowStatus = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
`;

/* The roster CTA card's picker input — visually absent; the card's button
   drives it. (Not display:none purely for a11y-tool friendliness.) */
/* ── Result cards (roster import / built week) ────────────────────────────────
   Ported from the onboarding steps' liquid-glass surfaces onto the app's
   standard card surface — same family as the recap item cards above (primary
   bg, opaque border, lg radius, low shadow), sized to the thread column. */

const ResultCard = styled.div`
  width: 100%;
  padding: var(--space-4) var(--space-5);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-below-low);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  text-align: left;
`;

/* Header line for the sample-crew variant (no confidence stat to lead with). */
/* The card's header row as a toggle — headline on the lead, a chevron on the
   top right that collapses/expands the people list (same pattern as the review
   rows' toggle below). */
const PeopleToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;
  border-radius: var(--radius-sm);

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }
`;

const CardHead = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

const CardHeadText = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`;

/* Confidence summary — "81 of 84 imported clean". */
const CleanStat = styled.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`;

const CleanNumber = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`;

const CleanOf = styled.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-regular);
  color: var(--color-content-tertiary);
`;

const CleanLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-success-content);

  svg { flex-shrink: 0; }
`;

/* The teammate preview list — the people who came in (or the sample crew). */
const PeopleList = styled.div`
  display: flex;
  flex-direction: column;
`;

/* Each teammate fades + pops in on a per-row delay, so the crew cascades in
   top to bottom once the card lands. `$i` is the row's position; `both` holds
   the hidden start state through the delay so nothing flashes early. */
const PersonRow = styled.div<{ $i?: number }>`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;
  animation: ${turnIn} var(--duration-base, 240ms) var(--ease-out) both;
  animation-delay: calc(120ms + ${p => p.$i ?? 0} * 80ms);

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

/* Photo avatar with the initials underneath — the photo paints over them once
   it loads, so a slow or failed fetch degrades to the initials tile. */
const PersonAvatar = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);
  overflow: hidden;
  background: var(--color-bg-tertiary);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-secondary);

  & > img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PersonWho = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  margin-right: auto;
`;

/* One line, truncating — a long name wrapping to two lines pushed the row's
   meta line down and broke the list's rhythm. Matches PersonMeta below. */
const PersonName = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PersonMeta = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PeopleMore = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border-opaque);
  /* Lands just after the last teammate row (6 rows · 80ms + the 120ms base). */
  animation: ${turnIn} var(--duration-base, 240ms) var(--ease-out) both;
  animation-delay: 600ms;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

/* Quarantined rows / waiting problems — flagged, never blocking. Collapsed by
   default behind a toggle whose trailing side carries the alert + chevron. */
const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border-opaque);
`;

/* The header row is the toggle: label on the lead, alert + chevron trailing. */
const ReviewToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: var(--radius-sm);

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }
`;

const ReviewHead = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`;

/* Trailing cluster — the warning marker beside a chevron that rotates on open. */
const ReviewTrail = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
`;

const ReviewAlert = styled.span`
  display: inline-flex;
  color: var(--color-warning-content);
`;

const ReviewChevron = styled.span<{ $open?: boolean }>`
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);
  transform: rotate(${p => (p.$open ? '180deg' : '0deg')});

  @media (prefers-reduced-motion: reduce) { transition: none; }
`;

/* The expanded detail — the rows themselves, revealed under the toggle. */
const ReviewRows = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--space-2);
  animation: ${turnIn} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

/* The week card's expanded waiting rows — same reveal as ReviewRows, but flush
   under the header divider (the toggle lives up in the card header, so there's
   no toggle row to clear): a divider of its own and no top padding. */
const WaitingRows = styled(ReviewRows)`
  padding-top: 0;
  border-top: 1px solid var(--color-border-opaque);
`;

const ReviewRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }
`;

/* Leading tile — the person list's avatar slot, here carrying the warning glyph. */
const ReviewRowIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);
  background: var(--color-warning-bg);
  color: var(--color-warning-content);
`;

const ReviewText = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`;

const ReviewWhere = styled.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
`;

const ReviewReason = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;

/* Week-card header row — the stat line on the lead, the waiting-problems
   toggle on the trailing edge. */
const WeekHeadRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
`;

/* The waiting-problems toggle, reduced to its trailing cluster (alert +
   chevron) — the count and label ride the button's aria-label/title. A quiet
   ghost hit-area in the card's corner. */
const WaitingToggle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-2);
  border: none;
  background: transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-default);

  &:hover { background: var(--color-bg-secondary); }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 1px;
  }
`;

/* Built-week summary line — days · shifts · things to handle. */
const WeekStat = styled.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
`;

const WeekStatItem = styled.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--space-1);
`;

const WeekStatNum = styled.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`;

const WeekStatDot = styled.span`
  color: var(--color-content-tertiary);
`;

/* Leading tile for a waiting problem — colour tracks the kind (callout /
   expiry / punch). */
const ProblemIcon = styled.span<{ $kind: WeekProblem['kind'] }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);

  ${p => p.$kind === 'callout' && css`
    background: var(--color-error-bg);
    color: var(--color-error-content);
  `}
  ${p => p.$kind === 'expiring' && css`
    background: var(--color-warning-bg);
    color: var(--color-warning-content);
  `}
  ${p => p.$kind === 'missing' && css`
    background: var(--color-info-bg);
    color: var(--color-info-content);
  `}
`;

const ProblemWho = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`;

const ProblemDetail = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`;

/* Keeps the complete seven-day calendar inside the result card. Every column
   can shrink evenly, so the week never needs a horizontal scrollbar. */
const CalScroll = styled.div`
  width: 100%;
  min-width: 0;
  overflow: hidden;
`;

/* The column gap matches CalDay's row gap, so the blocks sit on an even grid in
   both directions — at 4px against the rows' 8px the calendar read as columns
   crowded together rather than as a field of shifts. */
const CalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: var(--space-2);
  width: 100%;
`;

const CalDay = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
`;

const CalDayHead = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border-opaque);
`;

/* A single shift block. 'open' reads as a gap needing a fill; 'watch' carries a
   quiet flag (a punch problem) — both echo the "waiting" list above. */
const ShiftChip = styled.div<{ $flag?: 'open' | 'watch'; $sequence: number }>`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  padding: var(--space-2);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-transparent);
  transform-origin: top left;
  animation: ${shiftPopIn} 380ms cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: calc(180ms + ${p => p.$sequence} * 70ms);

  ${p => p.$flag === 'open' && css`
    background: var(--color-error-bg);
    border: 1px dashed var(--color-error-content);
  `}
  ${p => p.$flag === 'watch' && css`
    background: var(--color-warning-bg);
    border-color: var(--color-warning-content);
  `}

  @media (max-width: 700px) {
    gap: 2px;
    padding: var(--space-1);
    border-radius: var(--radius-sm);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const ShiftTime = styled.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 700px) {
    font-size: 10px;
  }
`;

const ShiftWho = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 700px) {
    font-size: 10px;
  }
`;

/* ── Grant modal (sales reach-out) ────────────────────────────────────────────
   The one deliberately inverse surface on the page — the inverse token family
   keeps it maximally contrasted against the scrim in either theme (dark card on
   light, light card on dark), so the conversion moment reads as its own moment
   rather than another bubble. Layout mirrors the wireframe — headline, body,
   phone field beside the action, fine print — wrapped in Alloy's Dialog, which
   supplies the portal, centering, radius clip, and close behaviors. */

/* The gentle deceleration curve the intro flow uses (easeOutQuint) — glides to
   rest instead of Alloy's snappier default, so the modal reads smooth. */
const GRANT_SMOOTH = 'cubic-bezier(0.22, 1, 0.36, 1)';

/* Entrance: the scrim's blur has to be animated explicitly — backdrop-filter
   doesn't fade with the element's opacity, so without this the blur snaps on
   at full strength one frame in. */
const grantScrimIn = keyframes`
  from {
    opacity: 0;
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
  }
  to {
    opacity: 1;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
  }
`;

const grantScrimOut = keyframes`
  from {
    opacity: 1;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
  }
  to {
    opacity: 0;
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
  }
`;

const grantCardIn = keyframes`
  0%   { opacity: 0; transform: scale(0.88) translateY(36px) rotate(-1deg); }
  70%  { opacity: 1; transform: scale(1.018) translateY(-2px) rotate(0); }
  100% { opacity: 1; transform: scale(1) translateY(0) rotate(0); }
`;

const grantCardOut = keyframes`
  from { opacity: 1; transform: scale(1) translateY(0); }
  to   { opacity: 0; transform: scale(0.97) translateY(10px); }
`;

/* Blurs this dialog's scrim and smooths its motion. Alloy's Dialog owns the
   overlay (a CSS-module class portaled to <body>), so the one stable hook is
   the overlay's own dialog semantics — scoped to this modal via its aria-label.
   The extra [data-state] in each selector out-specifies Alloy's own animation
   rules regardless of stylesheet injection order. Exit durations must stay
   under the Dialog's 180ms unmount timer or the animation gets cut off. */
const GrantOverlayBlur = createGlobalStyle`
  [role='dialog'][aria-label$='Ultron access'][data-state] {
    background: color-mix(in srgb, black 58%, transparent);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    animation: ${grantScrimIn} 440ms ${GRANT_SMOOTH} both;

    & > div {
      position: relative;
      overflow: visible;
      border: 0;
      background: transparent;
      box-shadow: 0 32px 90px rgba(3, 11, 25, 0.56);
      animation: ${grantCardIn} 560ms ${GRANT_SMOOTH} both;
    }
  }

  @media (max-width: 620px) {
    [role='dialog'][aria-label$='Ultron access'][data-state] {
      padding:
        max(var(--space-4), env(safe-area-inset-top))
        max(var(--space-4), env(safe-area-inset-right))
        max(var(--space-4), env(safe-area-inset-bottom))
        max(var(--space-4), env(safe-area-inset-left));

      & > div {
        width: 100%;
        max-height: calc(
          100dvh
          - max(var(--space-4), env(safe-area-inset-top))
          - max(var(--space-4), env(safe-area-inset-bottom))
          - 40px
        );
        border-radius: var(--radius-xl);
      }
    }
  }

  [role='dialog'][aria-label$='Ultron access'][data-state='closed'] {
    animation: ${grantScrimOut} 170ms var(--ease-default, ease) forwards;

    & > div {
      animation: ${grantCardOut} 170ms var(--ease-default, ease) forwards;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [role='dialog'][aria-label$='Ultron access'][data-state],
    [role='dialog'][aria-label$='Ultron access'][data-state] > div {
      animation: none;
    }
  }
`;

const GrantCard = styled.section`
  position: relative;
  width: 100%;
  min-height: 0;
  padding: var(--space-10);
  overflow-x: hidden;
  overflow-y: auto;
  background:
    radial-gradient(75% 90% at 100% 0%, color-mix(in srgb, var(--Alloy-blue-500) 38%, transparent), transparent 68%),
    radial-gradient(70% 80% at 0% 100%, color-mix(in srgb, var(--Alloy-purple-500) 30%, transparent), transparent 72%),
    linear-gradient(145deg, var(--Alloy-slate-950), var(--Alloy-purple-950));
  border: none;
  border-radius: var(--radius-xl);
  box-shadow: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);

  & > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 620px) {
    padding:
      var(--space-8)
      var(--space-6)
      max(var(--space-6), env(safe-area-inset-bottom));
    gap: var(--space-4);
  }
`;

/* Demo-only control beneath the access card. It is deliberately quiet so the
   modal content remains the conversion surface while both variants stay easy
   to review without restarting the flow. */
const ModalDemoSwitch = styled.button`
  position: absolute;
  top: calc(100% + var(--space-2));
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);
  padding: var(--space-1) var(--space-3);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: var(--radius-full);
  background: rgba(15, 23, 42, 0.72);
  color: var(--Alloy-slate-200);
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  cursor: pointer;
  white-space: nowrap;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(30, 41, 59, 0.9);
    color: var(--color-bg-always-light);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }
`;

const GrantBrandWatermark = styled.div`
  && {
    position: absolute;
    right: -74px;
    bottom: -44px;
    z-index: 0;
    color: var(--Alloy-blue-100);
    opacity: 0.075;
    transform: rotate(-8deg);
    filter: drop-shadow(0 0 32px color-mix(in srgb, var(--Alloy-blue-300) 30%, transparent));
    pointer-events: none;
  }

  @media (max-width: 620px) {
    && {
      right: -112px;
      bottom: -34px;
      opacity: 0.06;
      transform: rotate(-8deg) scale(0.82);
    }
  }
`;

/* Ghost close, top-right — Alloy's DialogHeader close button re-cut for the
   inverse surface (the header bar itself doesn't fit this card's layout). */
const GrantClose = styled.button`
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--space-8);
  height: var(--space-8);
  padding: 0;
  border: none;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.06);
  color: var(--Alloy-slate-200);
  cursor: pointer;
  transition:
    background var(--duration-fast) var(--ease-default),
    color var(--duration-fast) var(--ease-default);

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    color: var(--color-bg-always-light);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 1px;
  }
`;

const GrantEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  width: fit-content;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--Alloy-blue-200);
`;

const GrantSpark = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--Alloy-matcha-400);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--Alloy-matcha-400) 14%, transparent),
              0 0 20px var(--Alloy-matcha-400);
`;

const GrantOffer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-4);
  margin: var(--space-1) 0;

  @media (max-width: 620px) {
    gap: var(--space-2);
  }
`;

const GrantAmount = styled.div`
  font-family: 'Geist', var(--font-sans), sans-serif;
  font-size: clamp(64px, 13vw, 96px);
  font-weight: var(--font-weight-bold);
  line-height: 0.82;
  letter-spacing: -0.05em;
  color: var(--color-bg-always-light);
  text-shadow: 0 0 44px color-mix(in srgb, var(--Alloy-blue-300) 36%, transparent);
  font-variant-numeric: tabular-nums;

  @media (max-width: 620px) {
    font-size: clamp(48px, 17vw, 64px);
  }
`;

const GrantCurrency = styled.span`
  display: inline-block;
  margin-right: 0.03em;
  font-size: 0.52em;
  vertical-align: 0.42em;
  color: var(--Alloy-matcha-400);
`;

const GrantOfferLabel = styled.span`
  padding-bottom: var(--space-1);
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-tight);
  color: var(--Alloy-slate-300);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);

  strong {
    color: var(--Alloy-matcha-400);
    font-weight: var(--font-weight-bold);
  }

  @media (max-width: 620px) {
    font-size: var(--text-xs);
  }
`;

const GrantTitle = styled.h2<{ $prominent?: boolean }>`
  margin: 0;
  /* Keep the headline clear of the close button. */
  padding-right: var(--space-8);
  font-family: var(--font-sans);
  font-size: ${p => p.$prominent ? 'clamp(36px, 6vw, 48px)' : 'var(--text-3xl)'};
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-bg-always-light);

  @media (max-width: 620px) {
    font-size: ${p => p.$prominent ? 'clamp(32px, 10vw, 40px)' : 'var(--text-3xl)'};
  }
`;

const GrantBody = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-200);
  max-width: 520px;
`;

const GrantPerks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`;

const GrantPerk = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: var(--space-8);
  padding: 0 var(--space-3);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.065);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--Alloy-slate-200);
`;

const GrantForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`;

const GrantFormLabel = styled.label`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--Alloy-slate-300);
`;

const GrantFormRow = styled.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-3);

  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

/* Dark-surface text field, hand-rolled: Alloy's Input has no inverse-surface
   variant yet — candidate for promotion into Alloy. The border is the inverse
   tertiary content mixed down so it reads as a hairline on the dark fill. */
const GrantField = styled.input`
  flex: 1;
  min-width: 200px;
  height: var(--space-12);
  padding: 0 var(--space-4);
  background: rgba(255, 255, 255, 0.075);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  font-size: var(--text-md);
  color: var(--color-bg-always-light);
  outline: none;
  transition:
    border-color var(--duration-fast) var(--ease-default),
    background var(--duration-fast) var(--ease-default);

  &::placeholder { color: var(--Alloy-slate-400); }
  &:focus-visible {
    border-color: var(--Alloy-blue-300);
    background: rgba(255, 255, 255, 0.11);
  }

  @media (max-width: 520px) {
    width: 100%;
    min-width: 0;
  }
`;

const GrantButton = styled(Button)`
  && {
    min-width: 156px;
    color: var(--Alloy-slate-950);
    background: var(--Alloy-matcha-400);
    border-color: transparent;
    font-weight: var(--font-weight-bold);
    box-shadow: 0 8px 28px color-mix(in srgb, var(--Alloy-matcha-400) 24%, transparent);
  }

  &&:hover:not(:disabled) {
    background: var(--Alloy-matcha-300);
    transform: translateY(-1px);
  }

  &&:disabled {
    color: var(--Alloy-slate-600);
    background: var(--Alloy-slate-300);
    box-shadow: none;
  }

  @media (max-width: 520px) {
    && {
      width: 100%;
    }
  }
`;

/* Post-submit state — swaps in where the form row sat, holding its height so
   the card doesn't jump. The check carries the neon matcha accent. */
const GrantConfirmed = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--space-12);
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-medium);
  color: var(--color-bg-always-light);

  & svg {
    flex-shrink: 0;
    color: var(--Alloy-matcha-400);
  }
`;

const GrantFinePrint = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-400);
`;

/* Ultron's working presence while a reply is in flight — the lines mark, the
   same form the composer presence morphs into. It carries its own motion, so
   no bubble chrome around it. */
const Typing = styled.div`
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) 0;

  @media (max-width: 600px) {
    padding: 0;
  }
`;

/* The typing mark plus, while Ultron is "working" a submitted document, a
   shimmering label naming the work ("Bringing your people in…"). */
const TypingCluster = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
`;

/* The automatic reading beat becomes an optional manual stepper on mobile.
   Keeping it a native button gives touch users a generous target and preserves
   focus/activation semantics for assistive technology. */
const LoadingAdvanceButton = styled.button`
  display: inline-flex;
  padding: 0;
  border: 0;
  border-radius: var(--radius-lg);
  background: transparent;
  color: inherit;
  text-align: left;
  pointer-events: none;

  /* Mobile still advances the turn on tap, but wears no chrome for it: the
     mark + working label read exactly as they do on desktop. Only the hit
     target comes back, sized to the row rather than drawn as a card. */
  @media (max-width: 600px) {
    min-height: 44px;
    align-items: center;
    cursor: pointer;
    pointer-events: auto;
    -webkit-tap-highlight-color: transparent;

    &:active {
      opacity: 0.6;
    }

    &:focus-visible {
      outline: 2px solid var(--color-border-focus);
      outline-offset: 2px;
    }
  }
`;

/* Light sweep travelling across the working label. */
const shimmer = keyframes`
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`;

const WorkingLabel = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  background: linear-gradient(
    90deg,
    var(--color-content-tertiary) 0%,
    var(--color-content-primary) 50%,
    var(--color-content-tertiary) 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: ${shimmer} 2.4s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: none;
    color: var(--color-content-secondary);
    -webkit-text-fill-color: currentColor;
  }
`;

/* Stacks the suggestion pills over the composer, both held to the same
   720px column. */
const ComposerWrap = styled.div`
  position: relative;
  isolation: isolate;
  z-index: 1;
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6) var(--space-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);

  /* The same glass surface as the page header, mirrored — the frost sits
     behind both pills and composer, and the tint fades upward over the thread. */
  &::before {
    ${glassBarFrost}
  }
  &::after {
    ${glassBarFade('up')}
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  /* Mounts only once the opening turn lands — rise it in so it arrives rather
     than pops. */
  animation: ${turnIn} var(--duration-slow, 420ms) var(--ease-out) both;

  @media (max-width: 600px) {
    gap: var(--space-2);
    padding:
      var(--space-2)
      var(--space-4)
      max(var(--space-3), env(safe-area-inset-bottom));
  }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

/* Ultron's presence above the composer — the same resting/working mark morph
   the case pages pin over their composers (UltronCard's ChatFootMark), held
   to the composer's 720px column and its left edge. */
const FootMarkRow = styled.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  justify-content: flex-start;
`;

/* Reserves the mark's box so the composer holds its position while the stand-by
   presence fades in and out (it only shows when Ultron is idle). */
const MarkMorphBox = styled.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

const MarkFormLayer = styled.span<{ $show?: boolean }>`
  position: absolute;
  inset: 0;
  /* Center the canvas in the reserved box so the mark holds its place. */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${p => (p.$show ? 1 : 0)};
  transition: opacity var(--duration-base) var(--ease-out);
`;

/* Try-another-shape pills under the delivered week card. Left-aligned with the
   card's own edge, wrapping rather than scrolling — there are only ever three. */
const WeekShapeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding-top: var(--space-3);
`;

/* The stage's one-tap pills, docked inside the drop zone under its browse
   button (FileUploader's footerSlot) — centered to match the zone's stack. */
const CardPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
`;

/* A quiet chip on the page surface (the app context calls for the standard
   bordered surface, not the intro flow's liquid glass): icon + label, lifting
   to the secondary fill on hover. Same shape as the intro's SuggestionPill —
   both FLAGGED as one `SuggestionPill` candidate for promotion to Alloy. */
/* `$browseSized` matches Alloy's Browse-File action in the drop zone — 32px tall,
   16px sides, --text-xs — and holds those at every width, since that button does
   not shrink on narrow screens the way the compact pill does. */
const SuggestionPill = styled.button<{ $active?: boolean; $browseSized?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--space-8);
  padding: 0 ${p => (p.$browseSized ? 'var(--space-4)' : 'var(--space-3)')};
  background: ${p => (p.$active ? 'var(--color-bg-secondary)' : 'var(--color-bg-primary)')};
  border: 1px solid ${p => (p.$active ? 'var(--color-border-focus)' : 'var(--color-border-opaque)')};
  border-radius: var(--radius-full);
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: ${p => (p.$browseSized ? 'var(--text-xs)' : 'var(--text-sm)')};
  font-weight: var(--font-weight-medium);
  color: ${p => (p.$active ? 'var(--color-content-primary)' : 'var(--color-content-secondary)')};
  transition: color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              border-color var(--duration-fast) var(--ease-default);

  /* Leading icon reads a step quieter than the label. */
  svg {
    color: var(--color-content-tertiary);
    flex-shrink: 0;
  }

  &:hover {
    background: var(--color-bg-secondary);
    color: var(--color-content-primary);

    svg {
      color: var(--color-content-primary);
    }
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }

  @media (max-width: 600px) {
    /* The compact pill tightens on narrow screens; a browse-sized one holds its
       dimensions, because the Browse button it sits under doesn't shrink. */
    min-height: ${p => (p.$browseSized ? 'var(--space-8)' : '28px')};
    padding: 0 ${p => (p.$browseSized ? 'var(--space-4)' : 'var(--space-2)')};
    gap: var(--space-1);
    flex: 0 0 auto;
    font-size: var(--text-xs);
    white-space: nowrap;
  }
`;

/* Stacks an optional pending-files row over the input row. The composer-button
   sizing vars live here so the attach and send slots share them. */
const Composer = styled.form`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-below-low);
  transition:
    border-color var(--duration-base) var(--ease-out),
    box-shadow var(--duration-slow) var(--ease-out);

  &:focus-within {
    border-color: var(--color-border-focus);
    box-shadow: var(--shadow-below-low);
  }

  --composer-btn-size: var(--space-8);
  --composer-btn-icon-attach: var(--space-4);
  --composer-btn-icon-send: var(--space-4);

  @media (max-width: 600px) {
    --composer-btn-size: var(--space-10);
    --composer-btn-icon-attach: var(--space-5);
    --composer-btn-icon-send: var(--space-5);
    gap: var(--space-2);
    padding: var(--space-2);
    border-radius: var(--radius-xl);
  }
`;

/* Centred, not bottom-aligned: the field is a fixed single line (rows=1, no
   auto-grow — long messages scroll inside it), so there is no tall-field case
   for flex-end to protect. Against the 40px action slots it just sat the text
   4px low. */
const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

/* Files staged for the next message — removable chips above the input. */
const PendingFiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-1) 0;
`;

/* One attached file — name under a small file glyph. Reused for the staged
   chips in the composer and the sent chips inside operator bubbles. */
const FileChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-2);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
  white-space: nowrap;
`;

const ChipRemove = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  border-radius: var(--radius-sm);
  color: var(--color-content-tertiary);
  cursor: pointer;

  &:hover { color: var(--color-content-primary); }
  &:focus-visible { outline: 2px solid var(--color-border-focus); outline-offset: 1px; }
`;

/* One message's stack — the text bubble with any sent files as their own row
   beneath it, hugging the message's side of the thread. */
/* Spans the thread column edge to edge, so Ultron's prose wraps on the same
   measure as the composer and the result cards instead of breaking early at an
   80% cap. The operator's bubble still hugs its own content — it's sized by
   align-items on the cross axis, not by this width. */
const MsgGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;

  &[data-from='operator'] { align-items: flex-end; }
  &[data-from='ultron'] { align-items: flex-start; }
`;

/* Files sent with a message — a chip row separate from the text bubble. */
const SentFiles = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--space-2);
`;

const Field = styled.textarea`
  flex: 1;
  min-width: 0;
  padding: calc((var(--space-8) - 1lh) / 2) 0;
  border: none;
  background: transparent;
  resize: none;
  outline: none;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);

  &::placeholder {
    color: var(--color-content-disabled);
  }

  @media (max-width: 600px) {
    font-size: var(--text-md);
    line-height: var(--line-height-relaxed);
  }
`;

const ActionSlot = styled.div`
  flex-shrink: 0;
`;
