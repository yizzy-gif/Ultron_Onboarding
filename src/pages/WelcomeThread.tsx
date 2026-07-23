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
import type { ComponentType, FormEvent } from 'react';
import styled, { createGlobalStyle, css, keyframes } from 'styled-components';
import {
  Button, ComposerAttachment, ComposerSendButton, CheckCircleIcon, Dialog, XCloseIcon,
  Building02Icon, Building05Icon, BankNote01Icon, ReceiptCheckIcon,
  Users03Icon, ClockIcon, File04Icon, CheckVerified01Icon, Tag,
  AlertTriangleIcon, ChevronDownIcon, UploadCloud01Icon, FileUploader,
} from 'alloy-design-system';
import { mockUltronReply } from './Ultron/fixtures';
import { AgentMark } from './Ultron/AgentMark';
import { IntroBackdrop } from './Onboarding/IntroBackdrop';
import { TeambridgeMark } from './Onboarding/TeambridgeMark';
import { MouseGlow } from '../components/MouseGlow';
import {
  MERIDIAN_ROSTER, planWeekProblems, generateWeekShifts, scheduleShapesFor,
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
 *  'text' beat types itself in like a chat message; the 'summary' beat is the
 *  recap card, which fades in as its own beat. */
type OpeningBeat = { kind: 'text'; text: string } | { kind: 'summary' } | { kind: 'rosterCta' };

/** Landing choreography: the opening turn starts immediately and types itself
 *  in beat by beat, then the composer + suggestions arrive. */
type IntroPhase = 'delivering' | 'ready';

/** Where the in-chat setup stands: Ultron is waiting on the roster, then the
 *  schedule, then the setup is done and the thread becomes a normal
 *  conversation (mocked replies, next-step suggestions, the grant ask). */
type SetupStage = 'roster' | 'schedule' | 'done';

const REPLY_DELAY_MS = 1100;

// ── Landing choreography timing ────────────────────────────────────────────
/** Typing-dots beat shown before each inbound message lands. */
const THINK_MS = 440;
/** Per-character cadence of the typewriter pass on a text beat. */
const TYPE_CHAR_MS = 26;
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

/** One-tap next steps above the composer once setup is done — the same offers
 *  as Ultron's closing ask, so the admin can hand one over without typing. A
 *  tap sends the label as the operator's message; the row retires once used. */
const NEXT_STEP_SUGGESTIONS: { icon: ComponentType<{ size?: number }>; label: string }[] = [
  { icon: Users03Icon, label: 'Build out coverage' },
  { icon: ClockIcon, label: 'Chase open shifts' },
  { icon: CheckVerified01Icon, label: 'Tidy compliance' },
];

/** How long after the setup completes (the closing ask lands) the grant modal
 *  opens — lets the week card breathe before the conversion ask takes over. */
const GRANT_OPEN_DELAY_MS = 900;
/** How long the "you're set" confirmation shows before the modal closes itself. */
const GRANT_CONFIRM_HOLD_MS = 1600;

// ── The scripted import results ──────────────────────────────────────────────
// The spec's numbers verbatim (mirroring the old onboarding steps); the demo
// never reads the file, so the story is the same believable one every time.
const ROSTER_TOTAL = 84;
const ROSTER_CLEAN = 81;
/** How many sample teammates the no-roster path generates. */
const SAMPLE_COUNT = 48;
/** The scripted shape of a built week — plausible for any shift operation. */
const WEEK_DAYS = 7;
const WEEK_SHIFTS = 24;

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

const CLOSING_ASK =
  "That's the essentials in place. What would you like me to take on next? I can " +
  'build out coverage, chase down open shifts, tidy compliance, or anything else ' +
  'on your plate.';

/** One line of the setup recap — something Ultron actually turned on. */
interface SummaryItem {
  icon: ComponentType<{ size?: number }>;
  label: string;
  detail: string;
}

/** Title-cased company name derived from the pasted website (mirrors the
 *  onboarding helper), or null when no site was given. */
function companyName(website?: string): string | null {
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

/** Build the recap rows from what onboarding gathered. Only what was actually
 *  turned on gets a row. The roster and schedule aren't recapped here — Ultron
 *  collects those next, in this very conversation. */
function buildSummary(a: WelcomeAnswers): SummaryItem[] {
  const items: SummaryItem[] = [];

  const company = companyName(a.companyWebsite);
  if (company) {
    items.push({ icon: Building02Icon, label: 'Workspace', detail: `${company} is set up and ready` });
  } else if (a.workforceType) {
    items.push({ icon: Building02Icon, label: 'Workspace', detail: `Set up for ${a.workforceType.toLowerCase()}` });
  }
  if (a.pay) items.push({ icon: BankNote01Icon, label: 'Pay', detail: `Turned on for ${a.pay} workers` });
  if (a.billing) items.push({ icon: ReceiptCheckIcon, label: 'Billing', detail: `Set to bill ${a.billing.toLowerCase()}` });
  if (a.worksite) items.push({ icon: Building05Icon, label: 'Sites', detail: a.worksite });

  return items;
}

/** Multi-line / tabular text pasted into the composer reads as a copied block
 *  of spreadsheet cells, not a chat message — treat it as a document landing. */
function looksLikePastedTable(text: string): boolean {
  return text.includes('\t') || text.trim().includes('\n');
}

// Two-letter initials for the teammate avatar tiles.
function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

/** Stable empty-answers fallback. Referenced as the `answers` default so an
 *  omitted prop keeps the same object identity across renders — a fresh `{}`
 *  each render would churn the memoized beats and restart the landing timers. */
const NO_ANSWERS: WelcomeAnswers = {};

interface WelcomeThreadProps {
  /** Everything onboarding collected — drives the recap card and the
   *  vertical-appropriate sample data (shapes, problems, sample crew). */
  answers?: WelcomeAnswers;
  /** Fired once, on the operator's first message — the welcome stopped being a
   *  static recap and became a working conversation (the app moves its nav
   *  entry from New to Working on this signal). */
  onContinued?: () => void;
}

export function WelcomeThread({ answers = NO_ANSWERS, onContinued }: WelcomeThreadProps) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [draft, setDraft] = useState('');
  // Files staged for the next message — chips above the input until sent.
  const [attachments, setAttachments] = useState<string[]>([]);
  // Ultron's reply state: null = idle; '' = plain typing dots; a non-empty
  // string = dots plus a shimmering working label ("Bringing your people in…").
  const [replying, setReplying] = useState<string | null>(null);
  // Where the in-chat setup stands (roster ask → schedule ask → done).
  const [stage, setStage] = useState<SetupStage>('roster');
  // Which way the roster came in — drives the roster card's variant.
  const [rosterSample, setRosterSample] = useState(false);
  // Keep each intake card mounted while it moves empty → uploading → complete.
  // That continuity avoids the abrupt drop-zone-to-summary-card replacement.
  const [rosterUpload, setRosterUpload] = useState<IntakeUpload | null>(null);
  const [scheduleUpload, setScheduleUpload] = useState<IntakeUpload | null>(null);
  // The built week (problems + calendar), generated once when the schedule
  // lands and held stable across re-renders.
  const [weekData, setWeekData] = useState<{ problems: WeekProblem[]; week: WeekDay[] } | null>(null);
  // Once the admin hands over a first post-setup task, the next-step pills retire.
  const [nextStepUsed, setNextStepUsed] = useState(false);
  // Sales reach-out — the number the admin leaves for the grant unlock.
  // DEMO ONLY: held in memory, never sent anywhere.
  const [phone, setPhone] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  // The grant ask lives in a blocking modal: opens once the in-chat setup has
  // fully completed, closes via the X / backdrop / Escape, and closes itself
  // shortly after a successful unlock.
  const [grantOpen, setGrantOpen] = useState(false);

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

  // Every conversation timer (working holds, turn gaps) — cleared on unmount.
  const timers = useRef<number[]>([]);
  const grantTimer = useRef<number | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const summary = useMemo(() => buildSummary(answers), [answers]);

  // The signal the sample data derives from — what they typed for their
  // workforce, falling back to the company name from their website — so a
  // home-care operator gets caregivers and 12-hour rotations, not generic fill.
  const signal = useMemo(
    () => answers.workforceType?.trim() || companyName(answers.companyWebsite) || '',
    [answers],
  );
  const shapeChips = useMemo(() => scheduleShapesFor(signal), [signal]);

  // Ultron's opening turn, split into the beats it delivers on landing: the
  // greeting, the recap card, then the roster ask — the first document the
  // in-chat setup collects.
  const openingBeats = useMemo<OpeningBeat[]>(() => {
    // First-run greeting — warm and guided: name the workspace, say who Ultron
    // is, and preview the walk-through before asking for anything.
    const co = companyName(answers.companyWebsite);
    const greeting =
      `Welcome to your ${co ? `${co} ` : ''}workspace — I'm Ultron, and I'll be ` +
      "doing the heavy lifting around here. Together we'll bring in your team, " +
      'shape your schedule, and line up the day-to-day work I can take off your ' +
      'plate.' +
      (summary.length > 0 ? " Here's what I already turned on from what you shared:" : '');
    const beats: OpeningBeat[] = [{ kind: 'text', text: greeting }];
    if (summary.length > 0) beats.push({ kind: 'summary' });
    beats.push({ kind: 'text', text: ROSTER_ASK });
    // The roster ask lands with its own upload card — a direct CTA in the same
    // surface as the recap cards above, so the first action is one tap away.
    beats.push({ kind: 'rosterCta' });
    return beats;
  }, [summary, answers]);

  const after = (ms: number, fn: () => void) => {
    timers.current.push(window.setTimeout(fn, ms));
  };
  useEffect(() => () => { timers.current.forEach(id => window.clearTimeout(id)); }, []);

  const animateRosterUpload = (file: IntakeFile) => {
    setRosterUpload({ file, state: 'uploading', progress: 8 });
    if (prefersReduced) {
      setRosterUpload({ file, state: 'complete', progress: 100 });
      return;
    }
    after(180, () => setRosterUpload({ file, state: 'uploading', progress: 38 }));
    after(460, () => setRosterUpload({ file, state: 'uploading', progress: 74 }));
    after(780, () => setRosterUpload({ file, state: 'complete', progress: 100 }));
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

  // The landing sequence: deliver each opening beat immediately — typing dots,
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
        // Type the message in a character at a time.
        setTyped('');
        const full = beat.text;
        let n = 0;
        charTimer = window.setInterval(() => {
          n += 1;
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

  // Bring up the grant ask once the in-chat setup has fully completed.
  useEffect(() => {
    if (stage !== 'done') return;
    grantTimer.current = window.setTimeout(() => setGrantOpen(true), GRANT_OPEN_DELAY_MS);
    return () => { if (grantTimer.current) window.clearTimeout(grantTimer.current); };
  }, [stage]);

  const unlock = () => {
    setUnlocked(true);
    // Let the confirmation land, then hand the screen back to the thread.
    if (grantTimer.current) window.clearTimeout(grantTimer.current);
    grantTimer.current = window.setTimeout(() => setGrantOpen(false), GRANT_CONFIRM_HOLD_MS);
  };
  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }, [messages, replying, phase, revealed, activeIdx, typed, showDots]);

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
   *  part with a typing-dots breath between. `then` fires as the last part
   *  lands (stage advances there, so mid-turn state can't race). */
  const deliverTurn = (
    parts: Msg[],
    opts: { workingLabel?: string; workingMs?: number; then?: () => void } = {},
  ) => {
    const workingMs = prefersReduced ? 300 : opts.workingMs ?? REPLY_DELAY_MS;
    const gap = prefersReduced ? 200 : TURN_GAP_MS;
    setReplying(opts.workingLabel ?? '');
    let t = workingMs;
    parts.forEach((p, i) => {
      const last = i === parts.length - 1;
      after(t, () => {
        setMessages(m => [...m, p]);
        setReplying(last ? null : '');
        if (last) opts.then?.();
      });
      t += gap;
    });
  };

  /** Post one operator message into the thread (first one flips the nav entry). */
  const postOperator = (text: string, files: string[] = []) => {
    if (!messages.some(m => m.role === 'operator')) onContinued?.();
    setMessages(m => [...m, { role: 'operator', text, ...(files.length ? { attachments: files } : {}) }]);
  };

  // The roster landed (a file, a pasted table, or the sample offer) → the
  // believable import: a working hold, what came in, the result card, then
  // straight into the schedule ask.
  const runRosterImport = (fileName: string, uploadFile?: IntakeFile) => {
    setRosterSample(false);
    if (uploadFile) animateRosterUpload(uploadFile);
    deliverTurn(
      [
        {
          role: 'ultron',
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
    deliverTurn(
      [
        {
          role: 'ultron',
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

  const skipRoster = () => {
    deliverTurn(
      [
        {
          role: 'ultron',
          text: `No problem — we can bring your people in later. ${SCHEDULE_ASK}`,
        },
        { role: 'ultron', text: '', card: 'scheduleCta' },
      ],
      { then: () => setStage('schedule') },
    );
  };

  // The schedule landed (a file / pasted table) or was described (a shape) →
  // build the week, show it, then close the setup with the "what next" ask.
  const runWeekBuild = (source: { fileName?: string; file?: IntakeFile; shape?: string }) => {
    if (source.file) animateScheduleUpload(source.file);
    setWeekData({ problems: planWeekProblems(signal), week: generateWeekShifts(signal) });
    const lead = source.fileName
      ? `Read ${source.fileName} — turned it into next week's shifts. A few columns I ` +
        "didn't recognize, kept so nothing's lost."
      : `Built you a realistic week — ${source.shape!.toLowerCase()}. Here's what's in it.`;
    deliverTurn(
      [
        { role: 'ultron', text: lead },
        { role: 'ultron', text: '', card: 'week' },
        { role: 'ultron', text: CLOSING_ASK },
      ],
      {
        workingLabel: source.fileName ? 'Turning it into shifts…' : 'Building your week…',
        workingMs: WORKING_MS,
        then: () => setStage('done'),
      },
    );
  };

  const skipSchedule = () => {
    deliverTurn(
      [
        {
          role: 'ultron',
          text: "No problem — drop a schedule in anytime and I'll turn it into shifts.",
        },
        { role: 'ultron', text: CLOSING_ASK },
      ],
      { then: () => setStage('done') },
    );
  };

  // Route one operator message by where the setup stands. Shared by the
  // composer and the one-tap pills.
  const post = (text: string, files: string[] = []) => {
    if ((!text && files.length === 0) || replying !== null) return;
    postOperator(text, files);

    if (stage === 'roster') {
      if (files.length > 0) runRosterImport(files[0], { name: files[0] });
      else if (looksLikePastedTable(text)) runRosterImport('your pasted roster');
      else deliverTurn([{ role: 'ultron', text: ROSTER_NUDGE }]);
      return;
    }

    if (stage === 'schedule') {
      if (files.length > 0) runWeekBuild({ fileName: files[0], file: { name: files[0] } });
      else if (looksLikePastedTable(text)) runWeekBuild({ fileName: 'your pasted schedule' });
      // Any typed answer here is the shape of their week — build around it.
      else runWeekBuild({ shape: text });
      return;
    }

    // Setup done — a normal conversation turn (Ultron mocks a reply a beat later).
    setNextStepUsed(true);
    const replyCount = messages.filter(m => m.role === 'ultron').length;
    deliverTurn([{ role: 'ultron', text: mockUltronReply(text, replyCount) }]);
  };

  const send = () => {
    const text = draft.trim();
    if ((!text && attachments.length === 0) || replying !== null) return;
    post(text, attachments);
    setDraft('');
    setAttachments([]);
  };

  // The roster drop zone's picker — a file chosen there lands exactly like one
  // sent through the composer: an operator message with the attachment, then
  // the import runs. Only live while the setup is still waiting on the roster.
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

  // The schedule drop zone's picker — same contract as the roster one: a chosen
  // file posts as an operator message with the attachment, then the week
  // builds. Only live while the setup is still waiting on the schedule.
  const pickScheduleFiles = (files: FileList | File[] | null) => {
    if (!files || files.length === 0 || stage !== 'schedule' || replying !== null) return;
    const picked = Array.from(files);
    const names = picked.map(f => f.name);
    postOperator('', names);
    runWeekBuild({
      fileName: names[0],
      file: {
        name: picked[0].name,
        type: picked[0].type,
        size: picked[0].size,
      },
    });
  };

  // ── One-tap pills, by stage ────────────────────────────────────────────────
  // Roster: the sample-crew stand-in + skip. Schedule: the vertical-appropriate
  // week shapes + skip. Done: the next-step offers (until one is used).
  const pills: { icon?: ComponentType<{ size?: number }>; label: string; onTap: () => void }[] =
    replying !== null
      ? []
      : stage === 'roster'
      ? [
          { icon: Users03Icon, label: 'No roster handy? Use sample teammates', onTap: () => { postOperator('Use sample teammates'); runRosterSample(); } },
          { label: 'Skip for now', onTap: () => { postOperator('Skip for now'); skipRoster(); } },
        ]
      : stage === 'schedule'
      ? [
          ...shapeChips.map(s => ({
            icon: ClockIcon,
            label: s,
            onTap: () => { postOperator(s); runWeekBuild({ shape: s }); },
          })),
          { label: 'Skip for now', onTap: () => { postOperator('Skip for now'); skipSchedule(); } },
        ]
      : nextStepUsed
      ? []
      : NEXT_STEP_SUGGESTIONS.map(({ icon, label }) => ({ icon, label, onTap: () => post(label) }));

  // While the setup is collecting a document, the stage's pills sit directly
  // under the intake drop zone in the thread; only the post-setup next-step
  // suggestions stay with the composer.
  const pillRow = pills.length > 0 ? (
    <SuggestionRow aria-label="Suggestions">
      {pills.map(({ icon: Icon, label, onTap }) => (
        <SuggestionPill key={label} type="button" onClick={onTap}>
          {Icon && <Icon size={14} />}
          {label}
        </SuggestionPill>
      ))}
    </SuggestionRow>
  ) : null;

  const placeholder =
    stage === 'roster'
      ? 'Attach your roster, or ask Ultron anything…'
      : stage === 'schedule'
      ? 'Attach your schedule, or describe your week…'
      : 'Tell Ultron what to take on next…';

  return (
    <Root>
      {/* Continue onboarding's ambient visual language into this one-time
          handoff only. Both layers are decorative and stay beneath the thread. */}
      <IntroBackdrop links={1} />
      <MouseGlow />

      {/* Page header — the event page's header lockup (title over a muted
          one-line subtitle), with the case avatar swapped for the page's
          document icon and no trailing open-record control. */}
      <PageHeader>
        <PageHeaderInner>
          {/* The leading artwork is Ultron's magnetic globe — the same identity
              the onboarding flow built cell by cell, now held compactly in the
              header while the welcome messages begin immediately. */}
          <PageHeaderIcon>
            <AgentMark
              mark="magnetic"
              size={44}
              tone="light"
              state="active"
              aria-label="Ultron"
            />
          </PageHeaderIcon>
          <PageHeaderText>
            <PageHeaderTitle>Welcome</PageHeaderTitle>
            <PageHeaderSubtitle>Finish your setup, right in the chat</PageHeaderSubtitle>
          </PageHeaderText>
        </PageHeaderInner>
      </PageHeader>
      <Scroll>
        <Thread>
            {/* Opening turn — Ultron greets, lays out the recap card, then asks
                for the roster. Delivered one beat at a time: text beats type
                in, the recap card fades in as its own beat. */}
            <Row data-from="ultron">
              <Stack>
                {openingBeats
                  .slice(0, activeIdx >= 0 ? activeIdx + 1 : revealed)
                  .map((beat, i) => {
                    if (beat.kind === 'summary') {
                      return (
                        <BeatReveal key={`beat-${i}`}>
                          <SummaryBlock aria-label="What Ultron set up">
                            <SummaryHead>
                              <SummaryHeadText>Here’s what I set up</SummaryHeadText>
                            </SummaryHead>
                            <SummaryList>
                              {summary.map(item => {
                                const Icon = item.icon;
                                return (
                                  <SummaryItemCard key={item.label}>
                                    <RowIcon aria-hidden="true"><Icon size={16} /></RowIcon>
                                    <RowText>
                                      <RowLabel>{item.label}</RowLabel>
                                      <RowDetail>{item.detail}</RowDetail>
                                    </RowText>
                                    <RowStatus aria-hidden="true">
                                      <CheckCircleIcon size={18} />
                                    </RowStatus>
                                  </SummaryItemCard>
                                );
                              })}
                            </SummaryList>
                          </SummaryBlock>
                        </BeatReveal>
                      );
                    }
                    if (beat.kind === 'rosterCta') {
                      // The roster intake — a full Alloy drop zone (drag & drop
                      // or browse) while the roster is still wanted, settling to
                      // the compact checked row once it's in. The stage's
                      // one-tap pills sit directly below it.
                      const waiting = stage === 'roster';
                      return (
                        <Fragment key={`beat-${i}`}>
                          <BeatReveal>
                            {waiting || rosterUpload ? (
                              <IntakeUploader
                                variant="area"
                                accept=".csv,.xlsx,.xls,.pdf,image/*"
                                title="Drop your roster here, or browse your files"
                                description="Spreadsheet, PDF, or a photo of a printed one"
                                state={rosterUpload?.state ?? 'empty'}
                                progress={rosterUpload?.progress ?? 0}
                                file={rosterUpload?.file ?? null}
                                disabled={replying !== null && !rosterUpload}
                                onFileSelect={file => pickRosterFiles([file])}
                                onClear={() => {}}
                              />
                            ) : (
                              <SummaryItemCard>
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
                          </BeatReveal>
                          {waiting && phase === 'ready' && <BeatReveal>{pillRow}</BeatReveal>}
                        </Fragment>
                      );
                    }
                    const isActive = i === activeIdx;
                    return (
                      <Bubble key={`beat-${i}`} data-from="ultron">
                        {isActive ? typed : beat.text}
                        {isActive && <Caret aria-hidden="true" />}
                      </Bubble>
                    );
                  })}
                {showDots && (
                  <DotsRow>
                    <Typing aria-label="Ultron is typing">
                      <Dot /><Dot /><Dot />
                    </Typing>
                  </DotsRow>
                )}
              </Stack>
            </Row>

            {messages.map((m, i) => {
              // Result cards span the thread column, like the recap card above.
              if (m.card) {
                return (
                  <Row key={i} data-from="ultron">
                    <Stack>
                      <BeatReveal>
                        {m.card === 'roster' ? (
                          <RosterResultCard sample={rosterSample} />
                        ) : m.card === 'scheduleCta' ? (
                          /* The schedule intake — the roster drop zone's twin,
                             delivered with the schedule ask; settles to the
                             compact checked row once the week is built. */
                          stage === 'schedule' || scheduleUpload ? (
                            <IntakeUploader
                              variant="area"
                              accept=".csv,.xlsx,.xls,.pdf,image/*"
                              title="Drop your schedule here, or browse your files"
                              description="Spreadsheet, PDF, or a photo — any format works"
                              state={scheduleUpload?.state ?? 'empty'}
                              progress={scheduleUpload?.progress ?? 0}
                              file={scheduleUpload?.file ?? null}
                              disabled={replying !== null && !scheduleUpload}
                              onFileSelect={file => pickScheduleFiles([file])}
                              onClear={() => {}}
                            />
                          ) : (
                            <SummaryItemCard>
                              <RowIcon aria-hidden="true"><UploadCloud01Icon size={16} /></RowIcon>
                              <RowText>
                                <RowLabel>Schedule</RowLabel>
                                <RowDetail>Spreadsheet, PDF, or a photo — any format works</RowDetail>
                              </RowText>
                              <RowStatus aria-hidden="true">
                                <CheckCircleIcon size={18} />
                              </RowStatus>
                            </SummaryItemCard>
                          )
                        ) : weekData ? (
                          <WeekResultCard problems={weekData.problems} week={weekData.week} />
                        ) : null}
                      </BeatReveal>
                      {m.card === 'scheduleCta' && stage === 'schedule' && (
                        <BeatReveal>{pillRow}</BeatReveal>
                      )}
                    </Stack>
                  </Row>
                );
              }
              return (
                <Row key={i} data-from={m.role}>
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
                </Row>
              );
            })}
            {replying !== null && (
              <Row data-from="ultron">
                <TypingCluster>
                  <Typing aria-label="Ultron is replying">
                    <Dot /><Dot /><Dot />
                  </Typing>
                  {replying && (
                    <WorkingLabel role="status" aria-live="polite">{replying}</WorkingLabel>
                  )}
                </TypingCluster>
              </Row>
            )}
            <div ref={endRef} />
        </Thread>
      </Scroll>

      {/* Composer + one-tap pills hold back until the opening turn has fully
          delivered, then arrive together. */}
      {phase === 'ready' && (
      <ComposerWrap>
        {/* One-tap offers above the composer — only the post-setup next-step
            suggestions; the stand-ins and skips render under their intake
            drop zones in the thread while documents are being collected. */}
        {stage === 'done' && pillRow}
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
        aria-label="Unlock your grant"
      >
        <GrantCard>
          <GrantBrandWatermark aria-hidden="true">
            <TeambridgeMark size={300} />
          </GrantBrandWatermark>
          <GrantClose type="button" aria-label="Close" onClick={() => setGrantOpen(false)}>
            <XCloseIcon size={18} />
          </GrantClose>

          <GrantEyebrow><GrantSpark aria-hidden="true" /> Your welcome grant</GrantEyebrow>
          <GrantOffer aria-label="$1,000 of work on us">
            <GrantAmount><GrantCurrency>$</GrantCurrency>1,000</GrantAmount>
            <GrantOfferLabel>of work<br /><strong>on us</strong></GrantOfferLabel>
          </GrantOffer>

          <GrantTitle>Turn Ultron loose.</GrantTitle>
          <GrantBody>
            Ultron proposes the work. You call the shots. Your first 100,000
            credits are covered.
          </GrantBody>

          <GrantPerks aria-label="Grant benefits">
            <GrantPerk>100,000 credits</GrantPerk>
            <GrantPerk>Up to 3 months</GrantPerk>
            <GrantPerk>You approve every action</GrantPerk>
          </GrantPerks>

          {unlocked ? (
            <GrantConfirmed role="status">
              <CheckCircleIcon size={20} />
              You’re set — I’ll text before I act. Your $1,000 grant is live.
            </GrantConfirmed>
          ) : (
            <GrantForm
              onSubmit={(e: FormEvent) => {
                e.preventDefault();
                if (phone.trim()) unlock();
              }}
            >
                <GrantFormLabel htmlFor="welcome-grant-phone">
                  Where should Ultron send proposals?
                </GrantFormLabel>
                <GrantFormRow>
                  <GrantField
                    id="welcome-grant-phone"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={15}
                    value={phone}
                    placeholder="2145550148"
                    aria-label="Mobile number"
                    autoComplete="tel"
                    onChange={e => setPhone(e.target.value.replace(/\D/g, ''))}
                  />
                <GrantButton type="submit" variant="tertiary" size="lg" disabled={!phone.trim()}>
                  Unlock $1,000
                </GrantButton>
              </GrantFormRow>
            </GrantForm>
          )}
          <GrantFinePrint>
            Proposals only — never spam. Msg &amp; data rates may apply. Reply STOP to opt out.
          </GrantFinePrint>
        </GrantCard>
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
            <PersonAvatar aria-hidden="true">{initials(w.name)}</PersonAvatar>
            <PersonWho>
              <PersonName>{w.name}</PersonName>
              <PersonMeta>{w.role} · {w.location} · {w.tenure}</PersonMeta>
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

  return (
    <ResultCard aria-label="Your week">
      {/* Card header — the stat line leads, with the waiting-problems toggle
          tucked into the top-right corner: just the alert + chevron (its
          aria-label/title carry the "N things waiting" count). */}
      <WeekHeadRow>
        <WeekStat>
          <WeekStatItem><WeekStatNum>{WEEK_DAYS}</WeekStatNum> days</WeekStatItem>
          <WeekStatDot aria-hidden="true">·</WeekStatDot>
          <WeekStatItem><WeekStatNum>{WEEK_SHIFTS}</WeekStatNum> shifts</WeekStatItem>
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
          {week.map(day => (
            <CalDay key={day.label} role="column">
              <CalDayHead>{day.label}</CalDayHead>
              {day.shifts.map((s, i) => (
                <ShiftChip key={`${day.label}-${i}`} $flag={s.flag}>
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
  min-height: 0;
  overflow: hidden;
  background: var(--color-bg-primary);
`;

/* ── Page header ─────────────────────────────────────────────────────────────
   Mirrors the event page's card header (UltronCard's CardHeader lockup: Alloy
   label/md title over a muted one-line subtitle, avatar-led), with the case
   avatar swapped for the page's document icon on a recessed square and the
   trailing open-record link dropped. Aligned to the thread column. */
const PageHeader = styled.header`
  flex-shrink: 0;
  position: relative;
  isolation: isolate;
  /* Sit above the scroll area so the fade below paints over its content. */
  z-index: 2;
  background: transparent;

  /* One continuous white surface under the header, alpha-masked at its lower
     edge. Unlike a gradient strip, this reveals the ambient glow progressively
     and cannot leave a hard seam where the fade meets the header. */
  &::before {
    content: '';
    position: absolute;
    inset: 0 0 calc(-1 * var(--space-10));
    z-index: 0;
    background: var(--color-bg-always-light);
    -webkit-mask-image: linear-gradient(
      to bottom,
      black 0,
      black calc(100% - var(--space-10)),
      transparent 100%
    );
    mask-image: linear-gradient(
      to bottom,
      black 0,
      black calc(100% - var(--space-10)),
      transparent 100%
    );
    pointer-events: none;
  }
`;

const PageHeaderInner = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  /* Match the thread column exactly: 720px of content plus the same side
     padding, so the header lockup left-aligns with the bubbles and composer. */
  max-width: calc(720px + var(--space-6) * 2);
  margin: 0 auto;
  /* Same rhythm as the event card header — air above, tight to the body. */
  padding: var(--space-4) var(--space-6) var(--space-2);
`;

/* The leading artwork — Ultron's magnetic globe in the event header. A compact
   bloom keeps the mark legible without recreating the removed center splash. */
const PageHeaderIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  width: 36px;
  height: 36px;
  opacity: 1;
  visibility: visible;

  &::before {
    content: '';
    position: absolute;
    inset: -18%;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      var(--Alloy-slate-50) 0%,
      transparent 72%
    );
    pointer-events: none;
  }

  & > canvas {
    position: relative;
    z-index: 1;
  }
`;

const PageHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

/* Alloy label / medium: 14px · medium · relaxed · wide tracking — the event
   header's CardTitle. */
const PageHeaderTitle = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--Alloy-slate-950);
`;

/* One-line muted subtitle — the event header's CardSubtitle, with the muted
   tone drawn from the neutral family (this header sits on the primary surface,
   not the card's tonal fill). */
const PageHeaderSubtitle = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--Alloy-slate-500);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

/* Wraps a beat that arrives without a typewriter pass (the recap and result
   cards) so it fades + rises in as its own moment. */
const BeatReveal = styled.div`
  animation: ${turnIn} var(--duration-slow, 420ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const uploadContentIn = keyframes`
  from { opacity: 0; transform: translateY(5px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* One persistent intake surface across empty → uploading → complete. Alloy's
   FileUploader supplies the states; these overrides make its height, padding,
   border, and newly mounted state content glide together instead of snapping
   between unrelated cards. */
const IntakeUploader = styled(FileUploader)`
  && {
    min-height: 164px;
    overflow: hidden;
    transition:
      min-height 420ms var(--ease-out),
      padding 420ms var(--ease-out),
      gap 420ms var(--ease-out),
      border-color var(--duration-base) var(--ease-out),
      border-style var(--duration-base) var(--ease-out),
      background var(--duration-base) var(--ease-out);
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

  & > *:not(input) {
    animation: ${uploadContentIn} 300ms var(--ease-out) both;
  }

  /* Processing begins immediately in this guided flow, so removing the file
     after selection would be misleading. The completed check remains visible. */
  button[aria-label='Remove file'] {
    display: none;
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

/* Left-aligns the typing-dots pill within the opening stack (the stack stretches
   its children full-width; the pill should hug its content on the left). */
const DotsRow = styled.div`
  display: flex;
  justify-content: flex-start;
  animation: ${turnIn} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

/* The typewriter caret trailing the text as it types in. */
const caretBlink = keyframes`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`;

const Caret = styled.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  margin-left: 2px;
  vertical-align: -0.15em;
  background: var(--color-content-tertiary);
  animation: ${caretBlink} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

/* The thread column. Its max-width leaves room for the side padding so the
   inner content runs exactly as wide as the 720px composer below — the recap
   cards and bubbles line up edge to edge with it. */
const Thread = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: calc(720px + var(--space-6) * 2);
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
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
`;

const Bubble = styled.div`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);

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
`;

/* The recap — a header lockup over a stack of item cards listing what
   onboarding turned on. Spans the full turn width, so the cards run edge to
   edge with the prose above and below. */
const SummaryBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;

/* Unframed header line — the title sits directly on the page above the card
   stack. */
const SummaryHead = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

const SummaryHeadText = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`;

const SummaryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

/* One set-up item as its own card — mirrors the Ultron thread's workflow
   offer/saved card surface (UltronCard's OfferCard): primary bg, opaque
   border, lg radius, low shadow, and the same small hover lift. */
const SummaryItemCard = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-below-low);
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);

  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-below-md);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
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

const PersonAvatar = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-secondary);
`;

const PersonWho = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  margin-right: auto;
`;

const PersonName = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
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

const CalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: var(--space-1);
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
const ShiftChip = styled.div<{ $flag?: 'open' | 'watch' }>`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  padding: var(--space-2);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-transparent);

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
  [role='dialog'][aria-label='Unlock your grant'][data-state] {
    background: color-mix(in srgb, black 58%, transparent);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    animation: ${grantScrimIn} 440ms ${GRANT_SMOOTH} both;

    & > div {
      border: 0;
      background: transparent;
      box-shadow: 0 32px 90px rgba(3, 11, 25, 0.56);
      animation: ${grantCardIn} 560ms ${GRANT_SMOOTH} both;
    }
  }

  [role='dialog'][aria-label='Unlock your grant'][data-state='closed'] {
    animation: ${grantScrimOut} 170ms var(--ease-default, ease) forwards;

    & > div {
      animation: ${grantCardOut} 170ms var(--ease-default, ease) forwards;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [role='dialog'][aria-label='Unlock your grant'][data-state],
    [role='dialog'][aria-label='Unlock your grant'][data-state] > div {
      animation: none;
    }
  }
`;

const GrantCard = styled.section`
  position: relative;
  width: 100%;
  padding: var(--space-10);
  overflow: hidden;
  background:
    radial-gradient(75% 90% at 100% 0%, color-mix(in srgb, var(--Alloy-blue-500) 38%, transparent), transparent 68%),
    radial-gradient(70% 80% at 0% 100%, color-mix(in srgb, var(--Alloy-purple-500) 30%, transparent), transparent 72%),
    linear-gradient(145deg, var(--Alloy-slate-950), var(--Alloy-purple-950));
  border: none;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);

  & > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 620px) {
    padding: var(--space-7) var(--space-6);
    gap: var(--space-4);
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
`;

const GrantAmount = styled.div`
  font-family: var(--font-sans);
  font-size: clamp(64px, 13vw, 96px);
  font-weight: var(--font-weight-bold);
  line-height: 0.82;
  letter-spacing: -0.075em;
  color: var(--color-bg-always-light);
  text-shadow: 0 0 44px color-mix(in srgb, var(--Alloy-blue-300) 36%, transparent);
  font-variant-numeric: tabular-nums;
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
`;

const GrantTitle = styled.h2`
  margin: 0;
  /* Keep the headline clear of the close button. */
  padding-right: var(--space-8);
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-bg-always-light);
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

const blink = keyframes`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`;

const Typing = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-lg);
  background: var(--color-bg-secondary);
`;

const Dot = styled.span`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-content-tertiary);
  animation: ${blink} 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

/* The typing dots plus, while Ultron is "working" a submitted document, a
   shimmering label naming the work ("Bringing your people in…"). */
const TypingCluster = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
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

  /* A single footer surface sits behind both pills and composer, then fades
     upward through an alpha mask. Because the surface continues beneath the
     controls there is no join line, and the glow remains visible through the
     transparent portion instead of being blurred or clipped. */
  &::before {
    content: '';
    position: absolute;
    inset: calc(-1 * var(--space-10)) 0 0;
    z-index: 0;
    background: var(--color-bg-primary);
    -webkit-mask-image: linear-gradient(
      to bottom,
      transparent 0,
      black var(--space-10),
      black 100%
    );
    mask-image: linear-gradient(
      to bottom,
      transparent 0,
      black var(--space-10),
      black 100%
    );
    pointer-events: none;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  /* Mounts only once the opening turn lands — rise it in so it arrives rather
     than pops. */
  animation: ${turnIn} var(--duration-slow, 420ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

/* One-tap offers above the composer — aligned to its left edge. */
const SuggestionRow = styled.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`;

/* A quiet chip on the page surface (the app context calls for the standard
   bordered surface, not the intro flow's liquid glass): icon + label, lifting
   to the secondary fill on hover. Same shape as the intro's SuggestionPill —
   both FLAGGED as one `SuggestionPill` candidate for promotion to Alloy. */
const SuggestionPill = styled.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--space-8);
  padding: 0 var(--space-3);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-full);
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
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
  transition: border-color var(--duration-fast) var(--ease-default);

  &:focus-within { border-color: var(--color-border-focus); }

  --composer-btn-size: var(--space-8);
  --composer-btn-icon-attach: var(--space-4);
  --composer-btn-icon-send: var(--space-4);
`;

const InputRow = styled.div`
  display: flex;
  align-items: flex-end;
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
const MsgGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  max-width: 80%;

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

  &::placeholder { color: var(--color-content-disabled); }
`;

const ActionSlot = styled.div`
  flex-shrink: 0;
`;
