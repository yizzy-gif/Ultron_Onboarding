/* ─────────────────────────────────────────────────────────────────────────────
   Intro flow — the opening layer that sits ABOVE the provisioning wizard.

   Three internal steps, played in sequence before the numbered wizard begins:
     1. greeting  — Ultron's identity mark + a co-pilot greeting, whose elements
                     pop in one-by-one; once settled it holds for 3s, then
                     auto-advances.
     2. intent    — "What brings you to Teambridge today?" — three selectable
                     block cards. Choosing one advances.
     3. questions — a one-at-a-time question run (currently just "where do you
                     work?"), designed to grow.
     4. build     — a chat thread with Ultron that BOTH the pasted-site and the
                     typed-company-name paths converge on. Site path: Ultron reads
                     the site and posts what it found. Name path: Ultron asks a
                     short run (workforce type, size, roles, facilities). Either
                     way it ends on a pre-filled build brief; sending it calls
                     onComplete and drops the admin into wizard stage 1.

   Local components: the selectable intent cards and the URL composer have no
   Alloy primitive (checked the inventory — Radio / ToggleButton / DataCard don't
   cover an icon+title+description selection card, and there's no chat composer).
   Both are built here from tokens + Alloy icons/controls and FLAGGED for
   promotion to Alloy (a `SelectableCard` and a `Composer`). */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { ComponentType, FormEvent } from 'react';
import styled, { css, keyframes } from 'styled-components';
import {
  Button, Badge, ComposerActions, ComposerAttachment, ComposerSendButton, Tag,
  ArrowNarrowRightIcon, ArrowUpRightIcon, ChevronDownIcon, ChevronLeftIcon, File04Icon, Map01Icon, Users03Icon,
  RefreshCw04Icon,
  PlusIcon, PuzzlePiece01Icon, ZapIcon, Link01Icon, Building02Icon,
  Microphone02Icon, MedicalCrossIcon, Bell01Icon, HeartHandIcon, PackageIcon,
  Tool01Icon, Building05Icon, User01Icon,
} from 'alloy-design-system';
import { AgentMark } from '../Ultron';
import { ActivityTrailCards } from '../Ultron/ActivityTrail';
import type { ActivityMilestone } from '../Ultron/fixtures';
import { IntroBackdrop } from './IntroBackdrop';
import { TeambridgeMark } from './TeambridgeMark';
import { AccountDraftPane } from './AccountDraftPane';
import { REC_TEMPLATES, buildTemplate, interpretInstruction, augmentSuggestionsFor } from './fixtures';
import type { RecTemplate } from './fixtures';
import type { ProvisioningStore } from './logStore';
import type { Template } from './types';

// ── Public shape ─────────────────────────────────────────────────────────────

export type IntroIntent = 'build' | 'solve' | 'explore';

export interface IntroAnswers {
  intent?: IntroIntent;
  /** Company website the admin pasted (when they have one). */
  companyWebsite?: string;
  /** Company name they typed instead (no website). */
  companyName?: string;
  /** What they pasted when the website didn't resolve — the submission still
   *  passes through; Ultron owns the miss in-thread and runs the name path. */
  failedWebsite?: string;
  /** The build brief confirmed at the end of the analyze step (website path). */
  workforcePrompt?: string;
  /** The starting-point template the admin picked from Ultron's recommendation
   *  on the build page — seeds the account when the wizard opens. */
  template?: Template;
}

interface IntroFlowProps {
  /** The shared provisioning log — seeded when a template is picked, then driven
   *  by the inline augment canvas on the build step. */
  store: ProvisioningStore;
  /** Seed the log with the chosen starting-point template (handles re-seeding
   *  when the admin picks a different one). */
  onSeedTemplate: (template: Template) => void;
  /** Fired once the admin provisions from the augment canvas — drops straight
   *  into the wizard's provisioning run. */
  onComplete: () => void;
}

// ── Timing / motion ──────────────────────────────────────────────────────────

// Step swaps (intent / questions) ease in a touch slower than the token scale.
const STEP_DURATION_MS = 560;

// How long the current step's content fades out before the next step swaps in.
const EXIT_MS = 320;

// Site-path findings pacing — how long Ultron dwells before advancing the trail.
// Slower than a chat cadence on purpose: each finding gets time to type its
// probe beats out and read as work being checked, rather than snapping past.
//  · OPENER  — pause after the "here's the operation I mapped out" line before
//    the findings trail appears.
//  · FINDING — dwell on each finding as the focus walks down it, so its thinking
//    probes cycle and its summary settles green before moving to the next.
const SITE_OPENER_MS = 1300;
const SITE_FINDING_MS = 2400;

// A gentle deceleration curve (easeOutQuint) — glides to rest instead of the
// snappier token ease, so the slower entrance also reads smoother.
const SMOOTH_EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

// The identity is a single persistent element held at one fixed size and
// position across every step — no pop-in, no size morph, no repositioning. Kept
// at/above AgentMark's hero threshold (120) so it always renders the full Ultron
// identity (dense cell sphere + flowing particle swarm), never the sparse form.
const MARK_SIZE = 140;

// ── Content ──────────────────────────────────────────────────────────────────

interface IntentOption {
  id: IntroIntent;
  icon: ComponentType<{ size?: number }>;
  title: string;
  detail: string;
}

const INTENT_OPTIONS: IntentOption[] = [
  {
    id: 'build',
    icon: Users03Icon,
    title: 'Build a specific workforce',
    detail: "I know the team I'm setting up — let's get scheduling, pay, and compliance in place.",
  },
  {
    id: 'solve',
    icon: PuzzlePiece01Icon,
    title: 'Solve a specific problem',
    detail: "I've got a pain point and want to see if Teambridge is the right fit for it.",
  },
  {
    id: 'explore',
    icon: ZapIcon,
    title: 'Just exploring',
    detail: 'Kicking the tires to see what Teambridge can actually do.',
  },
];

// The one-at-a-time question run. Currently just the workplace question; add
// more ids here (and a branch in <QuestionStep>) to grow the run — later
// questions can key off earlier answers.
type QuestionId = 'workplace';
const QUESTION_IDS: QuestionId[] = ['workplace'];

// ── Root ─────────────────────────────────────────────────────────────────────

type Step = 'greeting' | 'intent' | 'questions' | 'build';

export function IntroFlow({ store, onSeedTemplate, onComplete }: IntroFlowProps) {
  const [step, setStep] = useState<Step>('greeting');
  const [answers, setAnswers] = useState<IntroAnswers>({});
  // Once the admin picks a starting-point template on the build step, the chat
  // splits into the inline augment canvas (conversation left, live draft right).
  // Owned here so the outer layout (Scroll/Stage/Content) can go full-width.
  const [augmenting, setAugmenting] = useState(false);
  // The identity mark starts as just core + flowing particles (no links); once
  // the admin picks an intent it forms its first connection line, and grows from
  // there as the setup deepens.
  const [connected, setConnected] = useState(false);
  // While true, the current step's content is fading out; the swap itself runs
  // once that fade completes, so every step exits before the next one enters.
  const [exiting, setExiting] = useState(false);
  const reduced = usePrefersReducedMotion();
  const exitTimer = useRef<number | null>(null);

  // Fade the current content out, then run the swap. Ignores overlapping calls
  // and honours reduced motion (instant swap, no fade).
  const transition = useCallback(
    (run: () => void) => {
      if (exitTimer.current !== null) return;
      setExiting(true);
      exitTimer.current = window.setTimeout(() => {
        run();
        setExiting(false);
        exitTimer.current = null;
      }, reduced ? 0 : EXIT_MS);
    },
    [reduced],
  );

  useEffect(
    () => () => {
      if (exitTimer.current !== null) window.clearTimeout(exitTimer.current);
    },
    [],
  );

  const chooseIntent = (intent: IntroIntent) => {
    setAnswers(a => ({ ...a, intent }));
    setConnected(true); // the mark forms its first connection line
    transition(() => setStep('questions'));
  };

  const finishQuestions = (collected: IntroAnswers) => {
    const merged = { ...answers, ...collected };
    setAnswers(merged);
    // Both paths (pasted site / typed company name) converge on the build thread.
    transition(() => setStep('build'));
  };

  // Picking a starting-point template seeds the log and splits the chat into the
  // augment canvas — an instant swap (no step fade), the panes play their own
  // slide-in. Exiting the canvas folds it back to the recommendation.
  const enterAugment = (template: Template) => {
    setAnswers(a => ({ ...a, template }));
    onSeedTemplate(template);
    setAugmenting(true);
  };

  // The ambient backdrop's network builds with progress: bare particles on the
  // greeting, a first scatter of lines on the intent step, the full web once an
  // intent is picked (echoing the identity forming its connection line).
  const backdropLinks = connected ? 1 : step === 'greeting' ? 0 : 0.4;

  // The identity's own connections deepen with the flow: first line on intent,
  // a second while it works through the build thread.
  const identityStreams = step === 'build' ? 2 : connected ? 1 : 0;

  return (
    <Frame>
      <IntroBackdrop links={backdropLinks} />
      {/* Off the build step the Teambridge mark sits in the corner. On the build
          step it moves into that page's own header lockup (see BuildStep). */}
      {step !== 'build' && (
        <LogoCorner>
          <TeambridgeMark size={22} />
        </LogoCorner>
      )}
      {step === 'questions' && (
        <BackCorner>
          <Button
            variant="tertiary"
            size="md"
            leadingArtwork={<ChevronLeftIcon size={16} />}
            onClick={() => transition(() => setStep('intent'))}
          >
            Back
          </Button>
        </BackCorner>
      )}
      <Scroll $augment={augmenting}>
        {/* The column stays centered in the viewport on every step; on the build
            step its content (and the identity above it) left-align to the column's
            own left edge rather than centering within it. The augment canvas
            breaks out to fill the full frame as a two-column split. */}
        <Stage $build={step === 'build'} $augment={augmenting}>
          {/* The hero identity, held in place across the intro steps — it never
              remounts there, so there's no pop, size morph, or positional jump.
              On the build step it hands off to the compact mark in the header
              (above), and the content rises to fill the freed space. */}
          {step !== 'build' && (
            <Identity>
              <MarkBloom>
                <AgentMark
                  mark="circle"
                  size={MARK_SIZE}
                  tone="auto"
                  state="active"
                  streamCount={identityStreams}
                  aria-label="Ultron"
                />
              </MarkBloom>
            </Identity>
          )}

          {/* The active step's content fades out here before each swap; the
              incoming step then plays its own entrance. */}
          <Content $exiting={exiting} $augment={augmenting}>
            {step === 'greeting' && (
              <GreetingStep onNext={() => transition(() => setStep('intent'))} />
            )}
            {step === 'intent' && <IntentStep selected={answers.intent} onChoose={chooseIntent} />}
            {step === 'questions' && <QuestionStep onComplete={finishQuestions} />}
            {step === 'build' && (answers.companyWebsite || answers.companyName || answers.failedWebsite) && (
              <BuildStep
                website={answers.companyWebsite}
                companyName={answers.companyName}
                failedWebsite={answers.failedWebsite}
                store={store}
                augmenting={augmenting}
                onEnterAugment={enterAugment}
                onComplete={onComplete}
              />
            )}
          </Content>
        </Stage>
      </Scroll>
    </Frame>
  );
}

// ── Step 1 — greeting ─────────────────────────────────────────────────────────

// One greeting is picked at random per visit (see GreetingStep) — all variants
// share the co-pilot voice and pair with the same body copy below.
const GREETING_HEADLINES = [
  "Hello! I'm your Teambridge workforce co-pilot.",
  "Hi there! I'm the co-pilot behind your frontline operation.",
  "Welcome! Let's build the operation that runs your workforce.",
  'Hello! Ready to put your workforce operation on autopilot?',
  "Hey there! Your workforce co-pilot, ready when you are.",
];
const GREETING_BODY =
  "Together, we'll set up the tools that run your frontline — scheduling, pay, and " +
  'compliance — then I keep watch, catching risks early and handling the busywork.';
const GREETING_KICKER = "But first, a bit of context to make sure we're building the right things.";

function GreetingStep({ onNext }: { onNext: () => void }) {
  // The headline pops in; a beat later the subtext + CTA follow as one group.
  // The admin advances on their own click — no auto-jump.
  const [headingDone, setHeadingDone] = useState(false);
  // One greeting per visit, chosen once on mount.
  const [headline] = useState(
    () => GREETING_HEADLINES[Math.floor(Math.random() * GREETING_HEADLINES.length)],
  );
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const t = window.setTimeout(() => setHeadingDone(true), reduced ? 0 : 500);
    return () => window.clearTimeout(t);
  }, [reduced]);

  return (
    <Greeting>
      <Headline>{headline}</Headline>
      {headingDone && (
        <SubGroup>
          <Sub>{GREETING_BODY}</Sub>
          <Sub>{GREETING_KICKER}</Sub>
          <CtaRow>
            <Button
              variant="primary"
              size="md"
              trailingArtwork={<ArrowNarrowRightIcon size={16} />}
              onClick={onNext}
            >
              Get started
            </Button>
          </CtaRow>
        </SubGroup>
      )}
    </Greeting>
  );
}

// ── Step 2 — intent ───────────────────────────────────────────────────────────

function IntentStep({
  selected,
  onChoose,
}: {
  selected?: IntroIntent;
  onChoose: (intent: IntroIntent) => void;
}) {
  return (
    <StepIn>
      <Prompt>What brings you to Teambridge today?</Prompt>
      <PromptSub>Pick whatever's closest — it just helps me tailor the setup.</PromptSub>

      <CardGrid role="radiogroup" aria-label="What brings you to Teambridge today?">
        {INTENT_OPTIONS.map(opt => {
          const Icon = opt.icon;
          const isSelected = selected === opt.id;
          return (
            <OptionCard
              key={opt.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              data-selected={isSelected || undefined}
              onClick={() => onChoose(opt.id)}
            >
              <OptionIcon aria-hidden="true">
                <Icon size={20} />
              </OptionIcon>
              <OptionTitle>{opt.title}</OptionTitle>
              <OptionDetail>{opt.detail}</OptionDetail>
            </OptionCard>
          );
        })}
      </CardGrid>
    </StepIn>
  );
}

// ── Step 3 — questions ────────────────────────────────────────────────────────

function QuestionStep({ onComplete }: { onComplete: (answers: IntroAnswers) => void }) {
  const [index, setIndex] = useState(0);
  const collected = useRef<IntroAnswers>({});

  const answer = (patch: IntroAnswers) => {
    collected.current = { ...collected.current, ...patch };
    const next = index + 1;
    if (next >= QUESTION_IDS.length) onComplete(collected.current);
    else setIndex(next);
  };

  const id = QUESTION_IDS[index];

  return (
    <StepIn key={id}>
      {id === 'workplace' && <WorkplaceQuestion onAnswer={answer} />}
    </StepIn>
  );
}

// "Where do you work?" — a composer for the company website, with a fallback to
// typing the company name for admins who don't have a site.
function WorkplaceQuestion({ onAnswer }: { onAnswer: (a: IntroAnswers) => void }) {
  const [mode, setMode] = useState<'website' | 'name'>('website');
  const [draft, setDraft] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const canSend = draft.trim().length > 0;
  const submit = () => {
    const value = draft.trim();
    if (!value) return;
    if (mode === 'website') {
      // A submission that doesn't look like a real website still passes through —
      // the build thread opens with Ultron owning the miss ("couldn't retrieve
      // enough useful info…") and running the company-name intake instead.
      if (!looksLikeWebsite(value)) {
        onAnswer({ failedWebsite: value });
        return;
      }
      onAnswer({ companyWebsite: value });
      return;
    }
    onAnswer({ companyName: value });
  };

  const switchMode = (next: 'website' | 'name') => {
    setMode(next);
    setDraft('');
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  const onDraftChange = (value: string) => setDraft(value);

  return (
    <>
      <Prompt>Where do you work?</Prompt>
      <QSub key={mode}>
        {mode === 'website'
          ? "Paste your company website and I'll learn what I can about your operation."
          : "No problem — just tell me your company's name and we'll take it from there."}
      </QSub>

      <Composer onSubmit={(e: FormEvent) => { e.preventDefault(); submit(); }}>
        <FieldRow>
          <FieldIcon key={mode} aria-hidden="true">
            {mode === 'website' ? <Link01Icon size={18} /> : <Building02Icon size={18} />}
          </FieldIcon>
          <Field
            ref={inputRef}
            rows={1}
            value={draft}
            placeholder={mode === 'website' ? 'yourcompany.com' : 'Your company name'}
            aria-label={mode === 'website' ? 'Company website' : 'Company name'}
            onChange={e => onDraftChange(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                submit();
              }
            }}
          />
          <BigComposerActions>
            <ComposerSendButton
              state={canSend ? 'ready' : 'disabled-invalid'}
              onSend={submit}
            />
          </BigComposerActions>
        </FieldRow>
      </Composer>

      <AltRow>
        {mode === 'website' ? (
          <TextButton type="button" onClick={() => switchMode('name')}>
            I don't have a website
          </TextButton>
        ) : (
          <TextButton type="button" onClick={() => switchMode('website')}>
            Enter a website instead
          </TextButton>
        )}
      </AltRow>
    </>
  );
}

// ── Step 4 — build thread (both paths) ────────────────────────────────────────

// A single message in the Ultron chat thread. Stable ids let the sequencing
// effects append idempotently (StrictMode double-invokes effects in dev).
interface ThreadMsg {
  id: string;
  from: 'ultron' | 'user';
  text?: string;
  // File names attached to a user answer (roles / facilities uploads).
  chips?: string[];
  // When present, this Ultron turn renders as an Ultron activity trail (the
  // site-path findings) rather than a plain text bubble — each finding reads as
  // a milestone (status check + label + detail), revealed one at a time.
  trail?: ActivityMilestone[];
}

interface CompanySection {
  key: string;
  label: string;
  // The one-line summary shown directly under the finding's label.
  text: (name: string) => string;
  // Extra specifics rendered as a bullet list beneath the summary — the deeper
  // sub-context of what Ultron mapped out for this section.
  details?: (name: string) => string[];
}

// A selectable answer card — icon + title, with an optional short caption
// (e.g. a headcount range on the size buckets). `detail` is the longer blurb,
// kept for reference though the compact tiles don't render it.
interface ChoiceOption {
  id: string;
  icon: ComponentType<{ size?: number }>;
  title: string;
  detail: string;
  caption?: string;
}

// Workforce categories offered on the company-name path — mirror Teambridge's
// supported operation types (see the onboarding intake spec).
const WORKFORCE_TYPES: ChoiceOption[] = [
  { id: 'events',       icon: Microphone02Icon, title: 'Events',         detail: 'Venues, concessions, ushers, security, and game-day crew.' },
  { id: 'healthcare',   icon: MedicalCrossIcon,  title: 'Healthcare',     detail: 'Credentialed clinicians, float pools, facilities, and shift coverage.' },
  { id: 'staffing',     icon: Users03Icon,       title: 'Staffing',       detail: 'Orders, candidate availability, placements, and first-shift readiness.' },
  { id: 'hospitality',  icon: Bell01Icon,        title: 'Hospitality',    detail: 'Housekeeping, front desk, food service, and room-turn labor.' },
  { id: 'longterm',     icon: HeartHandIcon,     title: 'Long Term Care', detail: 'Facility staffing, care ratios, certifications, and compliance.' },
  { id: 'security',     icon: Map01Icon,         title: 'Security',       detail: 'Posts, patrol routes, site coverage, incidents, and compliance logs.' },
  { id: 'facilities',   icon: Building05Icon,    title: 'Facilities',     detail: 'Cleaning routes, building services, supplies, and quality checks.' },
  { id: 'industrial',   icon: PackageIcon,       title: 'Industrial',     detail: 'Warehouse crews, attendance, overtime risk, and dock coverage.' },
  { id: 'construction', icon: Tool01Icon,        title: 'Construction',   detail: 'Job sites, trades, certifications, crews, and project coverage.' },
];

// Three staffing-size buckets, each with a headcount range caption.
const TEAM_SIZES: ChoiceOption[] = [
  { id: 'small',      icon: User01Icon,    title: 'Small',      caption: '0–20',   detail: 'Under 20 people on the roster.' },
  { id: 'growing',    icon: Users03Icon,   title: 'Growing',    caption: '20–100', detail: '20–100 across a handful of sites.' },
  { id: 'enterprise', icon: Building02Icon, title: 'Enterprise', caption: '100+',   detail: '100+ spanning many locations.' },
];

// The ordered intake run for the company-name path. `choices` fields render as
// selectable cards; `composer` fields render a text + file-upload composer.
interface IntakeField {
  key: 'workforce' | 'sizing' | 'roles' | 'facilities';
  kind: 'choices' | 'composer';
  question: (name: string) => string;
  options?: ChoiceOption[];
  placeholder?: string;
}

const INTAKE_FIELDS: IntakeField[] = [
  {
    key: 'workforce', kind: 'choices', options: WORKFORCE_TYPES,
    question: n => `Let's set up ${n}. First — what kind of workforce are you running?`,
  },
  {
    key: 'sizing', kind: 'choices', options: TEAM_SIZES,
    question: () => 'Got it. Roughly how big is the team?',
  },
  {
    key: 'roles', kind: 'composer', placeholder: 'e.g. RNs, LPNs, aides, coordinators…',
    question: () => "Which roles do you staff? List a few, or upload a roster and I'll pull them.",
  },
  {
    key: 'facilities', kind: 'composer', placeholder: 'e.g. 2 branch offices, multi-county…',
    question: () => 'Last one — where does your team work? Name the sites, or drop in a location list.',
  },
];

interface Dataset {
  sections: CompanySection[];
  // The granular templates Ultron recommends for this operation, hero first —
  // ids into REC_TEMPLATES (see fixtures).
  recommend: string[];
}

// DEMO ONLY — three canned medical-staffing profiles Ultron "retrieves" from the
// site. One is picked at random per run (see AnalyzeStep) so the demo shows a
// different operation each time. The company name is still the real scraped one;
// only the operational profile varies.
const DATASETS: Dataset[] = [
  // A — home health / in-home care agency
  {
    sections: [
      {
        key: 'overview', label: 'Company',
        text: n => `${n} runs a home-health agency delivering in-home nursing and personal care across a regional service area.`,
        details: () => [
          'Care mix spans skilled nursing, therapy visits, and non-clinical personal care.',
          'Visits are authorized per client plan, so volume swings with referrals week to week.',
          'Medicare / Medicaid and private-pay clients, each with their own visit and documentation rules.',
        ],
      },
      {
        key: 'workforce', label: 'Workforce type',
        text: () => 'Field clinicians and aides dispatched to client homes on visit-based schedules, plus an on-call after-hours pool.',
        details: () => [
          'Scheduling is visit-based, not shift-based — each caregiver runs a daily route of client homes.',
          'Drive time and mileage between visits factor into hours and pay.',
          'An on-call pool covers nights, weekends, and urgent same-day visits.',
        ],
      },
      {
        key: 'sizing', label: 'Staff sizing',
        text: () => '~180 caregivers — RNs, LPNs, and home-health aides — coordinated by a small office team.',
        details: () => [
          'Roughly 60% aides to 40% licensed clinicians (RNs / LPNs).',
          'A small central office team handles intake, scheduling, and payroll.',
          'Headcount flexes seasonally with referral volume and census.',
        ],
      },
      {
        key: 'roles', label: 'Job roles',
        text: () => 'Registered nurses, LPNs, home-health aides, and care coordinators.',
        details: () => [
          'RNs and LPNs carry state licenses plus CPR — both need expiry tracking.',
          'Aides need certification and background-check clearances on file.',
          'Care coordinators own client plans, referrals, and visit routing.',
        ],
      },
      {
        key: 'facilities', label: 'Facilities',
        text: () => '2 regional branch offices covering a multi-county territory.',
        details: () => [
          'Most hours are logged in client homes, not at a fixed site.',
          'Branch offices anchor scheduling, supplies, and clinician check-ins.',
          'Coverage zones are drawn by county to keep drive times reasonable.',
        ],
      },
    ],
    recommend: ['homehealth', 'ltc', 'allied'],
  },
  // B — acute-care per-diem / travel staffing
  {
    sections: [
      {
        key: 'overview', label: 'Company',
        text: n => `${n} staffs acute-care units with per-diem and travel clinicians across partner hospitals.`,
        details: () => [
          'Fills open shifts against hospital orders, often with same-day turnaround.',
          'Blends local per-diem clinicians with travelers on 8- and 13-week contracts.',
          'Bill rates and pay packages vary by facility, unit, and specialty.',
        ],
      },
      {
        key: 'workforce', label: 'Workforce type',
        text: () => 'Per-diem and contract nurses filling 8- and 12-hour hospital shifts around the clock.',
        details: () => [
          'Clinicians self-schedule into open 8/12-hour day, evening, and night shifts.',
          'Night, weekend, and holiday shifts carry differentials on top of base rate.',
          'Cancellations and call-offs reshuffle coverage constantly, so the pool runs hot.',
        ],
      },
      {
        key: 'sizing', label: 'Staff sizing',
        text: () => '~240 clinicians in the float pool — mostly RNs, with CNAs and patient-care techs.',
        details: () => [
          'The active pool is larger than any single facility needs on a given day.',
          'Utilization is uneven — a core group picks up most shifts, a long tail works occasionally.',
          'Recruiting runs continuously to keep credentialed clinicians ready to deploy.',
        ],
      },
      {
        key: 'roles', label: 'Job roles',
        text: () => 'ICU / ER / Med-Surg RNs, CNAs, patient-care techs, and charge nurses.',
        details: () => [
          'Every clinician needs BLS/ACLS plus state license, verified before first shift.',
          'Unit competencies (ICU, ER, telemetry) gate which orders each person can fill.',
          'Charge nurses require extra sign-off and take precedence on scheduling.',
        ],
      },
      {
        key: 'facilities', label: 'Facilities',
        text: () => 'Placements across 5 partner hospitals and 2 outpatient sites.',
        details: () => [
          'Each facility has its own units, orientation, and badge/access requirements.',
          'Clinicians float between sites, so credentials must satisfy every facility they cover.',
          'Order volume and pay differ site to site, driving where the pool gets deployed.',
        ],
      },
    ],
    recommend: ['travel', 'allied', 'ltc'],
  },
  // C — senior living / long-term care
  {
    sections: [
      {
        key: 'overview', label: 'Company',
        text: n => `${n} operates senior-living communities providing 24/7 assisted-living and memory care.`,
        details: () => [
          'Residents live on-site, so coverage can never drop below safe staffing.',
          'Assisted-living, memory care, and dining each run as their own care area.',
          'State regulations set minimum resident-to-caregiver ratios per shift.',
        ],
      },
      {
        key: 'workforce', label: 'Workforce type',
        text: () => 'Around-the-clock caregiving staff on rotating day, evening, and overnight shifts.',
        details: () => [
          'Three rotating shifts (day / evening / NOC) cover every hour, every day.',
          'Overnight and weekend shifts carry differentials and are hardest to fill.',
          'Call-offs must be backfilled fast to hold ratios, driving open-shift offers.',
        ],
      },
      {
        key: 'sizing', label: 'Staff sizing',
        text: () => '~150 staff — CNAs, med techs, and LPNs — plus dining and activities teams.',
        details: () => [
          'Direct-care staff (CNAs, med techs, LPNs) make up the bulk of the roster.',
          'Dining, activities, and housekeeping teams staff to their own schedules.',
          'Headcount is split across communities, each with its own manager.',
        ],
      },
      {
        key: 'roles', label: 'Job roles',
        text: () => 'Certified nursing assistants, medication techs, LPNs, and shift supervisors.',
        details: () => [
          'CNAs and med techs carry certifications that need expiry tracking.',
          'Med techs require medication-administration sign-off to pass meds.',
          'Shift supervisors own the floor and get scheduling precedence.',
        ],
      },
      {
        key: 'facilities', label: 'Facilities',
        text: () => '3 residential communities, each with a dedicated memory-care wing.',
        details: () => [
          'Each community schedules independently but shares float staff when short.',
          'Memory-care wings need extra training and tighter ratios.',
          'Staff are generally assigned to a home community to keep resident continuity.',
        ],
      },
    ],
    recommend: ['ltc', 'homehealth', 'allied'],
  },
];

// Name-path recommendation map: the workforce type the admin picked → the
// granular templates Ultron recommends (hero first), ids into REC_TEMPLATES.
const WORKFORCE_RECS: Record<string, string[]> = {
  healthcare:   ['ltc', 'travel', 'homehealth'],
  longterm:     ['ltc', 'homehealth', 'allied'],
  hospitality:  ['hotel', 'fnb', 'events'],
  events:       ['events', 'fnb', 'hotel'],
  construction: ['trades', 'crews', 'union'],
  staffing:     ['light', 'clerical', 'warehouse'],
  industrial:   ['light', 'warehouse', 'clerical'],
  security:     ['distributed', 'light', 'clerical'],
  facilities:   ['distributed', 'franchise', 'retail'],
};
const DEFAULT_RECS = ['ltc', 'travel', 'homehealth'];

// The "start blank" escape hatch — no seed, so the wizard opens on an empty
// account the admin shapes from scratch.
const BLANK_TEMPLATE: Template = {
  id: 'tpl_blank', name: 'Blank account', industry: 'Custom', match: 0,
  rationale: '', tags: [], sections: [], seed: [],
};

// Does the pasted text actually look like a website? Guards the site path so a
// bare word ("acme"), an email, or a mistyped link doesn't get treated as a URL
// we can learn from. Accepts an optional protocol; requires a dotted host with a
// real alphabetic TLD (so "yourcompany.com" and "https://foo.co.uk/x" pass, but
// "Acme Corp", "acme", and "htp:/broken" don't).
function looksLikeWebsite(raw: string): boolean {
  const clean = raw.trim().replace(/\s+/g, '');
  if (!clean) return false;
  const withProto = /^https?:\/\//i.test(clean) ? clean : `https://${clean}`;
  let host: string;
  try {
    host = new URL(withProto).hostname;
  } catch {
    return false;
  }
  return /^(?=.{1,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i.test(host);
}

// Derive an org identity from the pasted link (same shape as stage 1's helper):
// bare host for the favicon lookup + a title-cased display name.
function companyFromUrl(raw: string): { name: string; host: string } {
  // Strip stray whitespace first — an accidental space would otherwise survive
  // as a %20 in the parsed hostname (e.g. "favoritestaffing.%20om").
  const clean = raw.replace(/\s+/g, '');
  const withProto = /^https?:\/\//i.test(clean) ? clean : `https://${clean}`;
  let host = clean;
  try { host = new URL(withProto).hostname; } catch { /* keep clean */ }
  host = host.replace(/^www\./, '');
  const root = host.split('.')[0] || host;
  const name = root
    .split(/[-_]/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  return { name: name || host, host };
}

// Favicon for the pasted site — Google's public S2 service, keyed on the bare
// host (same host the company identity is derived from).
function faviconUrl(host: string): string {
  return `https://www.google.com/s2/favicons?domain=${host}&sz=64`;
}

// Nearest scrolling ancestor of a node — used to size the thread's bottom spacer
// (see BuildStep) to that viewport, so the newest turn can always rise to the
// top rather than clamping at the bottom of the content.
function getScrollParent(node: HTMLElement | null): HTMLElement | null {
  let el = node?.parentElement ?? null;
  while (el) {
    if (/(auto|scroll)/.test(getComputedStyle(el).overflowY)) return el;
    el = el.parentElement;
  }
  return null;
}

/* The build thread: both entry paths converge here on one chat thread with
   Ultron, rendered under the persistent identity mark.
     • Site path — Ultron "reads" the pasted site and posts what it found, one
                   message at a time (drawn from a demo profile), then drafts a
                   brief.
     • Name path — Ultron asks a short run (workforce type → team size → roles →
                   facilities); the admin answers with selectable cards or a
                   text/upload composer, each answer landing back in the thread.
   Either way it ends on the same pre-filled build-brief composer; sending it
   completes the intro. */
function BuildStep({
  website,
  companyName,
  failedWebsite,
  store,
  augmenting,
  onEnterAugment,
  onComplete,
}: {
  website?: string;
  companyName?: string;
  /** The pasted "website" that didn't resolve — the thread opens with Ultron
   *  owning the miss, then runs the company-name intake. */
  failedWebsite?: string;
  store: ProvisioningStore;
  /** True once a template is picked — the chat splits into the augment canvas. */
  augmenting: boolean;
  /** Seed the log with the picked template and split into the augment canvas. */
  onEnterAugment: (template: Template) => void;
  /** Provision from the augment canvas — advance into the wizard's run. */
  onComplete: () => void;
}) {
  const reduced = usePrefersReducedMotion();
  const isSite = !!website;
  const { name, host } = isSite
    ? companyFromUrl(website as string)
    : { name: (companyName || 'your company').trim(), host: '' };

  // Site path draws its "findings" from one of the demo profiles (picked once).
  const [dataset] = useState(() => DATASETS[Math.floor(Math.random() * DATASETS.length)]);

  // The chat log — seeded with the admin's opening turn: the company (name, or
  // the pasted site) they gave on the previous step, shown as their first
  // outbound message so the thread reads as a continuing conversation. Messages
  // carry stable ids so the sequencing effects append idempotently under
  // StrictMode's double-invoke.
  const [thread, setThread] = useState<ThreadMsg[]>(() => [
    // The failed-website path echoes what the admin actually pasted as their
    // opening turn, so Ultron's "couldn't retrieve" reply reads as an answer to it.
    { id: 'you-company', from: 'user', text: isSite ? host : failedWebsite ?? name },
  ]);
  const push = (m: ThreadMsg) => setThread(t => (t.some(x => x.id === m.id) ? t : [...t, m]));

  // Site: `step` indexes the findings script. Name: `step` indexes INTAKE_FIELDS.
  // Reaching the end (`done`) hands the thread to the brief composer.
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Record<IntakeField['key'], string>>>({});
  // The starting-point template picked for the augment canvas — keys the
  // suggestion chips to its vertical (nurse roles for healthcare, foremen for
  // construction) instead of one generic set.
  const [pickedTemplate, setPickedTemplate] = useState<Template | null>(null);

  // Active composer field state (roles / facilities), reset between fields.
  const [draft, setDraft] = useState('');
  const [files, setFiles] = useState<{ id: string; name: string }[]>([]);
  const fileSeq = useRef(0);

  // Site findings, rendered as an Ultron activity trail: one milestone per
  // insight section (status check + label headline + detail sub-line). The
  // trail's own focus/settle machinery drives the one-at-a-time reveal, so the
  // findings read as work being checked off rather than a stack of chat bubbles.
  const findingsMilestones: ActivityMilestone[] = useMemo(
    () =>
      dataset.sections.map(sec => ({
        icon: 'done',
        headline: sec.label,
        // The summary line stays visible at rest (headline + first line of
        // sub-text); the deeper specifics Ultron mapped ride the collapsible
        // block as bullets, hidden until the row is expanded via its chevron.
        summary: sec.text(name),
        // Thinking context cycled through the summary line while Ultron is working
        // this finding — muted + blinking until it settles to the green summary.
        probe: [
          `Reading ${isSite ? host : name}…`,
          `Mapping ${sec.label.toLowerCase()}…`,
          'Cross-referencing what I found…',
        ],
        blocks: sec.details ? [{ bullets: sec.details(name) }] : undefined,
      })),
    [dataset, name, isSite, host],
  );

  // Site reveal script: step 0 posts the opener, step 1 posts the findings
  // trail, and each further tick walks the trail's focus down one milestone;
  // done once step passes the last finding.
  const siteCount = isSite ? dataset.sections.length + 1 : 0;
  const done = isSite ? step >= siteCount : step >= INTAKE_FIELDS.length;

  // Build-step tail state. The thread ends in three beats:
  //   recap → composer (ask for additional info) → template recommendation.
  // `briefReady` reveals the composer once the recap lands; submitting the
  // composer flips `recsReady`, which posts the recommendation lead-in + cards.
  const [brief, setBrief] = useState('');
  const [briefReady, setBriefReady] = useState(false);
  const [recsReady, setRecsReady] = useState(false);
  // Once the recommendation is "requested", a blinking skeleton card stands in
  // for a beat while Ultron "matches" a template, then the real cards reveal.
  const [recsRevealed, setRecsRevealed] = useState(false);
  // Which "other close fit" is expanded into the full card layout (one at a time).
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [briefFiles, setBriefFiles] = useState<{ id: string; name: string }[]>([]);
  const briefSeq = useRef(0);
  const briefRef = useRef<HTMLTextAreaElement>(null);
  // The most-recent thread turn — the scroll effect snaps this to the top of the
  // thread viewport so the current turn leads and earlier chat rides above the
  // fold (rather than pinning the newest turn to the bottom).
  const latestRef = useRef<HTMLDivElement>(null);
  // End-of-live-content marker, sat just below the active answer control (cards /
  // composer) on the name path. During the intake questions the snap-to-top is
  // paused, so instead we scroll THIS into view to reveal the newest turn from
  // the bottom when it overflows the fold.
  const intakeEndRef = useRef<HTMLDivElement>(null);
  // Only an outbound turn (or a mode switch) moves the viewport; an inbound reply
  // loads in underneath without scrolling. Track the outbound count / mode to
  // tell those apart across renders.
  const prevOutbound = useRef(thread.filter(m => m.from === 'user').length);
  const prevAugmenting = useRef(augmenting);
  // Thread length across renders — lets the intake reveal fire when a follow-up
  // question lands (the thread grows) rather than on the admin's own answer.
  const prevLen = useRef(thread.length);

  // ── Augment canvas (after a starting-point template is picked) ──
  // The same thread continues on the left while the account draft builds on the
  // right. `thinking` rides an Ultron placeholder while a change drafts; the
  // suggestion chips show until the first instruction is sent; `justAdded`
  // briefly highlights the entries appended in the last turn.
  const [thinking, setThinking] = useState(false);
  const [justAdded, setJustAdded] = useState<string[]>([]);
  const [augDraft, setAugDraft] = useState('');
  const [augStarted, setAugStarted] = useState(false);
  const augSeq = useRef(0);
  const augRef = useRef<HTMLTextAreaElement>(null);

  // Height of the trailing spacer under the thread — sized to the scroll
  // viewport so the newest turn can be scrolled all the way to the top (a bare
  // scrollIntoView clamps at the content's bottom otherwise).
  const [spacerH, setSpacerH] = useState(0);

  // Site path: post the opener, then the findings trail, then walk its focus
  // down one milestone per tick. The trail dims not-yet-reached findings and
  // rides a spinner on the focused one until the run settles into green checks.
  useEffect(() => {
    if (!isSite || step >= siteCount) return;
    if (step === 0) {
      push({ id: 's-open', from: 'ultron', text: `I pulled up ${host} — here's the operation I mapped out. Tell me if anything's off.` });
    } else if (step === 1) {
      push({ id: 's-findings', from: 'ultron', trail: findingsMilestones });
    }
    const t = window.setTimeout(() => setStep(s => s + 1), reduced ? 250 : step === 0 ? SITE_OPENER_MS : SITE_FINDING_MS);
    return () => window.clearTimeout(t);
  }, [isSite, step, siteCount, reduced, host, findingsMilestones]);

  // Name path: post the current question; the admin's answer advances the step.
  // When the pasted website didn't resolve, Ultron opens by owning the miss,
  // then asks the first intake question a beat later so the two read as turns.
  useEffect(() => {
    if (isSite || step >= INTAKE_FIELDS.length) return;
    const f = INTAKE_FIELDS[step];
    const ask = () => push({ id: `q-${f.key}`, from: 'ultron', text: f.question(name) });
    if (failedWebsite && step === 0) {
      push({
        id: 'no-site',
        from: 'ultron',
        text: "I couldn't retrieve enough useful info from that to kickstart your account — no problem, we'll build it together.",
      });
      const t = window.setTimeout(ask, reduced ? 0 : 900);
      return () => window.clearTimeout(t);
    }
    ask();
  }, [isSite, step, name, failedWebsite, reduced]);

  // Once the thread finishes: post Ultron's closing recap, then reveal the
  // composer a beat later so the recap reads first. The composer is the "ask for
  // additional info" step — submitting it posts the admin's turn and Ultron's
  // recommendation lead-in, then reveals the template cards (see askDetails).
  // answers/name are settled by the time `done` flips, so keying on `done` alone
  // is enough.
  useEffect(() => {
    if (!done) return;
    push({ id: 'ready-recap', from: 'ultron', text: readyRecap(isSite, host, answers) });
    const t = window.setTimeout(() => setBriefReady(true), reduced ? 0 : 650);
    return () => window.clearTimeout(t);
  }, [done]); // eslint-disable-line react-hooks/exhaustive-deps

  // Hold on the blinking skeleton for 5s after the recommendation is requested,
  // then reveal the real template cards.
  useEffect(() => {
    if (!recsReady) return;
    const t = window.setTimeout(() => setRecsRevealed(true), 5000);
    return () => window.clearTimeout(t);
  }, [recsReady]);

  // Size the trailing spacer to the thread's scroll viewport, so the newest turn
  // has enough room below it to be scrolled to the very top. Re-measure when the
  // scroll container changes (build column ↔ augment pane) and on resize.
  useEffect(() => {
    const measure = () => {
      const c = getScrollParent(latestRef.current);
      if (c) setSpacerH(c.clientHeight);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [augmenting]);

  // Move the viewport ONLY when the admin adds an outbound turn (or the canvas
  // mode switches): that turn snaps to the top and its reply loads in underneath.
  // Inbound content — Ultron's replies, the findings trail, the recap — just
  // loads under whatever's in view; it never scrolls the viewport on its own.
  useEffect(() => {
    const outbound = thread.filter(m => m.from === 'user').length;
    const grew = thread.length > prevLen.current;
    const moved = outbound > prevOutbound.current || augmenting !== prevAugmenting.current;
    prevOutbound.current = outbound;
    prevAugmenting.current = augmenting;
    prevLen.current = thread.length;

    // Name-path intake questions (workforce → sizing → roles → facilities):
    // pause the snap-to-top. Answering a question no longer lifts the turn to
    // the top of the viewport — we hold the reading position and only reveal the
    // newest turn (question + its answer control) from the bottom when it flows
    // below the fold. scrollIntoView('nearest') is a no-op when it already fits,
    // so a short question doesn't jump at all. Fire when the follow-up question
    // lands (an inbound turn grows the thread), not on the admin's own answer, so
    // the question bubble is in the DOM before we measure; and skip the very
    // first question (step 0), which just sits at its natural opening position.
    const intake = !isSite && !augmenting && step < INTAKE_FIELDS.length;
    if (intake) {
      if (grew && step > 0 && thread[thread.length - 1]?.from === 'ultron') {
        intakeEndRef.current?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'nearest' });
      }
      return;
    }

    if (moved) {
      latestRef.current?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    }
  }, [thread, augmenting, spacerH, reduced, isSite, step]);

  // Auto-grow the brief textarea as the admin types into it.
  const resizeBrief = () => {
    const el = briefRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 220)}px`;
  };
  useEffect(() => {
    if (brief) requestAnimationFrame(resizeBrief);
  }, [brief]);

  // ── Answering (name path) ──
  const field = !isSite && step < INTAKE_FIELDS.length ? INTAKE_FIELDS[step] : null;

  const answerChoice = (label: string) => {
    if (!field) return;
    push({ id: `a-${field.key}`, from: 'user', text: label });
    setAnswers(a => ({ ...a, [field.key]: label }));
    setStep(s => s + 1);
  };

  const answerComposer = () => {
    if (!field) return;
    const text = draft.trim();
    if (!text && files.length === 0) return;
    const chips = files.map(f => f.name);
    push({
      id: `a-${field.key}`,
      from: 'user',
      text: text || `${files.length} file${files.length === 1 ? '' : 's'} attached`,
      chips: chips.length ? chips : undefined,
    });
    setAnswers(a => ({ ...a, [field.key]: text || chips.join(', ') }));
    setDraft('');
    setFiles([]);
    setStep(s => s + 1);
  };

  // Read the FileList synchronously — ComposerAttachment resets the input
  // (value = '') right after onSelect, which empties the live FileList before a
  // deferred setState updater would run, so we snapshot the names here.
  const attachField = (list: FileList) => {
    const added = Array.from(list).map(f => ({ id: `f${fileSeq.current++}`, name: f.name }));
    setFiles(prev => [...prev, ...added]);
  };

  // ── Brief composer (both paths) ──
  const attachBrief = (list: FileList) => {
    const added = Array.from(list).map(f => ({ id: `b${briefSeq.current++}`, name: f.name }));
    setBriefFiles(prev => [...prev, ...added]);
  };

  // The granular templates Ultron recommends, hero first — from the mapped
  // operation (site path) or the chosen workforce type (name path).
  const recs: RecTemplate[] = useMemo(() => {
    const ids = isSite
      ? dataset.recommend
      : (WORKFORCE_RECS[WORKFORCE_TYPES.find(o => o.title === answers.workforce)?.id ?? ''] ?? DEFAULT_RECS);
    return ids.map(id => REC_TEMPLATES[id]).filter(Boolean);
  }, [isSite, dataset, answers.workforce]);
  const heroRec = recs[0];

  // Picking a starting-point template splits the chat into the augment canvas:
  // seed the log with the template, then post Ultron's hand-off so the thread
  // reads on into the augment conversation.
  const startAugment = (template: Template) => {
    setPickedTemplate(template);
    const n = template.seed.length;
    push({
      id: 'augment-intro',
      from: 'ultron',
      text:
        n > 0
          ? `Done — I've laid down the ${template.name} starting point, ${n} item${n === 1 ? '' : 's'} on the right. Tell me what to change: add a role, adjust a pay rule, set a policy, and I'll draft it.`
          : "Let's build your account from scratch. Tell me what you need — a role, a pay rule, a policy — and I'll draft each change on the right.",
    });
    onEnterAugment(template);
  };
  const chooseTemplate = (rec: RecTemplate) => startAugment(buildTemplate(rec));

  // Augment turn: post the admin's instruction, then (after a beat) Ultron's
  // reply plus the concrete draft(s) it appends to the log — surfaced on the
  // right and briefly highlighted.
  const sendInstruction = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || thinking) return;
    push({ id: `aug-${augSeq.current++}`, from: 'user', text: trimmed });
    setAugDraft('');
    setAugStarted(true);
    requestAnimationFrame(() => { if (augRef.current) augRef.current.style.height = 'auto'; });
    setThinking(true);
    window.setTimeout(() => {
      const { reply, drafts, work } = interpretInstruction(trimmed);
      const addedIds = drafts.map(d => store.append(d).id);
      // Persist the drafting activity as a settled card in the thread history
      // (the live running trail is dropped as `thinking` flips off), then post
      // Ultron's reply bubble beneath it — so each change leaves both a record of
      // the work and its confirmation. The `work` trace rides the card's blocks —
      // collapsed by default (no `defaultOpen`), revealed via the row's chevron.
      push({
        id: `aug-act-${augSeq.current++}`,
        from: 'ultron',
        trail: [{
          icon: 'done',
          headline: 'Drafting the change',
          summary: 'Applied your instruction to the account draft.',
          blocks: work.length ? [{ label: 'How I worked this', bullets: work }] : undefined,
        }],
      });
      push({ id: `aug-${augSeq.current++}`, from: 'ultron', text: reply });
      setThinking(false);
      if (addedIds.length) {
        setJustAdded(addedIds);
        window.setTimeout(() => setJustAdded([]), 1600);
      }
    }, reduced ? 200 : 850);
  };

  const resizeAug = () => {
    const el = augRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 140)}px`;
  };

  // Sendable once there's either typed detail OR at least one attached file —
  // the admin can hand off a roster/rates workbook without also writing a note.
  const canSend = brief.trim().length > 0 || briefFiles.length > 0;

  // Submitting the composer is the "additional info" step: post the admin's turn
  // (their note / attached files), capture it as the build prompt, then land
  // Ultron's recommendation lead-in and reveal the template cards.
  const askDetails = () => {
    if (!canSend) return;
    const text = brief.trim();
    const names = briefFiles.map(f => f.name);
    push({
      id: 'you-details',
      from: 'user',
      text: text || `${names.length} file${names.length === 1 ? '' : 's'} attached`,
      chips: names.length ? names : undefined,
    });
    push({ id: 'rec-intro', from: 'ultron', text: recIntro(heroRec) });
    setRecsReady(true);
  };

  const composerLabel = field?.key === 'roles' ? 'Job roles' : 'Facilities';

  // Which turn the scroll effect snaps to the top. Default: the newest turn. But
  // when the newest is an Ultron reply to a fresh outbound turn (the brief
  // submission → recommendation, or an augment instruction → its draft), anchor
  // the OUTBOUND turn instead, so the admin's message leads the viewport and
  // Ultron's reply flows in below it — rather than the reply taking the top and
  // pushing the outbound bubble up off-screen.
  const lastIdx = thread.length - 1;
  const anchorIndex =
    lastIdx >= 1 && thread[lastIdx].from === 'ultron' && thread[lastIdx - 1].from === 'user'
      ? lastIdx - 1
      : lastIdx;

  // While an augment change drafts, the placeholder reads as a live Ultron
  // activity group (the same trail style as the site findings), not a plain
  // bubble — one running milestone whose probe lines cycle until the draft lands.
  const draftingMilestones: ActivityMilestone[] = [{
    icon: 'done',
    headline: 'Drafting the change',
    summary: 'Applying your instruction to the account draft.',
    probe: [
      'Reading your instruction…',
      'Drafting the change…',
      'Holding pay & access changes for sign-off…',
    ],
  }];

  // The chat log — shared by the build run and the augment canvas (it slides from
  // the centered column to the augment's left column, carrying its history). Ends
  // with a live Ultron activity group while an augment change is in flight, and
  // the scroll anchor.
  const threadEls = (
    <Thread>
      {thread.map((m, i) =>
        m.trail ? (
          // Findings turn — the Ultron activity trail (status check + label +
          // detail per finding). Focus walks down with `step` while the run
          // is live, then settles to all-green once done.
          <MsgRow key={m.id} data-from="ultron" ref={i === anchorIndex ? latestRef : undefined}>
            <TrailWrap>
              <ActivityTrailCards
                milestones={m.trail}
                focusIndex={done ? undefined : Math.min(Math.max(step - 1, 0), m.trail.length - 1)}
                running={!done}
                expandAll
                hideActions
              />
            </TrailWrap>
          </MsgRow>
        ) : (
          <MsgRow key={m.id} data-from={m.from} ref={i === anchorIndex ? latestRef : undefined}>
            <MsgStack data-from={m.from}>
              <Bubble data-from={m.from}>{m.text}</Bubble>
              {m.chips && m.chips.length > 0 && (
                <ChipGroup>
                  {m.chips.map((c, i) => (
                    <Tag key={i} size="md" variant="subtle" color="blue" leadingIcon={<File04Icon size={12} />}>
                      {c}
                    </Tag>
                  ))}
                </ChipGroup>
              )}
              {/* Site path: a link card under the pasted-website turn — the
                  site's favicon, its name + URL, and a trailing open control.
                  The whole card is the link (opens the site in a new tab). */}
              {isSite && m.id === 'you-company' && (
                <SiteLinkCard
                  href={`https://${host}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${host} in a new tab`}
                >
                  <SiteFavicon aria-hidden="true">
                    <img src={faviconUrl(host)} alt="" width={20} height={20} loading="lazy" />
                  </SiteFavicon>
                  <SiteMeta>
                    <SiteName>{name}</SiteName>
                    <SiteUrl>{host}</SiteUrl>
                  </SiteMeta>
                  <SiteOpen aria-hidden="true"><ArrowUpRightIcon size={16} /></SiteOpen>
                </SiteLinkCard>
              )}
            </MsgStack>
          </MsgRow>
        ),
      )}
      {augmenting && thinking && (
        // Stable key — this transient row is a sibling of the keyed thread rows
        // above; leaving it keyless makes React reconcile it by position, which
        // drifts the settled cards' collapsible open-state as the thread grows.
        <MsgRow key="drafting-live" data-from="ultron">
          <TrailWrap>
            <ActivityTrailCards
              milestones={draftingMilestones}
              focusIndex={0}
              running
              expandAll
              hideActions
            />
          </TrailWrap>
        </MsgRow>
      )}
    </Thread>
  );

  // ── Augment canvas ──────────────────────────────────────────────────────────
  // Once a template is picked the chat splits: the thread rides the left column
  // (now an instruction composer), the live account draft slides in on the right.
  if (augmenting) {
    return (
      <AugmentRoot>
        <AugmentLeft>
          <BuildHeader>
            <TeambridgeMark size={22} />
            <LogoDivider aria-hidden="true" />
            <AgentMark mark="circle" size={36} tone="auto" state="active" streamCount={2} aria-label="Ultron" />
          </BuildHeader>

          <AugmentScroll>
            {threadEls}
            <ThreadSpacer style={{ height: spacerH }} aria-hidden="true" />
          </AugmentScroll>

          {!augStarted && (
            <AugmentSuggestions>
              {/* Suggestions read native to the picked template's vertical —
                  nurse roles for healthcare, foremen for construction, etc. */}
              {augmentSuggestionsFor(pickedTemplate?.industry).map(s => (
                <SuggestChip key={s} type="button" onClick={() => sendInstruction(s)}>
                  <PlusIcon size={12} /> {s}
                </SuggestChip>
              ))}
            </AugmentSuggestions>
          )}

          <AugmentComposer onSubmit={(e: FormEvent) => { e.preventDefault(); sendInstruction(augDraft); }}>
            <FieldRow>
              <Field
                ref={augRef}
                rows={1}
                value={augDraft}
                placeholder="Tell Ultron what to change…"
                aria-label="Instruction to Ultron"
                onChange={e => { setAugDraft(e.target.value); resizeAug(); }}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendInstruction(augDraft); }
                }}
              />
              <BigComposerActions>
                <ComposerSendButton
                  state={augDraft.trim() && !thinking ? 'ready' : 'disabled-invalid'}
                  onSend={() => sendInstruction(augDraft)}
                />
              </BigComposerActions>
            </FieldRow>
          </AugmentComposer>
        </AugmentLeft>

        <AugmentRight>
          <AugmentFoot>
            <AugmentFootLeft>
              <Button variant="tertiary" size="md" iconOnly aria-label="Refresh draft">
                <RefreshCw04Icon size={16} />
              </Button>
            </AugmentFootLeft>
            <AugmentFootRight>
              <AugmentFootNote>{store.active.length} change{store.active.length === 1 ? '' : 's'} staged</AugmentFootNote>
              <Button
                variant="primary"
                size="md"
                trailingArtwork={<ArrowNarrowRightIcon size={16} />}
                disabled={store.active.length === 0}
                onClick={onComplete}
              >
                Provision account
              </Button>
            </AugmentFootRight>
          </AugmentFoot>
          <AccountDraftPane store={store} justAdded={justAdded} />
        </AugmentRight>
      </AugmentRoot>
    );
  }

  return (
    <BuildStepIn>
      {/* This page's own header lockup — the Teambridge + Ultron marks. */}
      <BuildHeader>
        <TeambridgeMark size={22} />
        <LogoDivider aria-hidden="true" />
        <AgentMark
          mark="circle"
          size={36}
          tone="auto"
          state="active"
          streamCount={2}
          aria-label="Ultron"
        />
      </BuildHeader>

      <BuildCol>
        {/* The chat log — opens with the admin's company turn (seeded above). */}
        {threadEls}

        {/* Active answer control (name path, until the run completes). */}
        {field?.kind === 'choices' && (
          <ChoiceGrid
            role="group"
            aria-label={field.question(name)}
            $cols={field.options!.length <= 3 ? field.options!.length : 2}
          >
            {field.options!.map(opt => {
              const Icon = opt.icon;
              return (
                <ChoiceCard key={opt.id} type="button" onClick={() => answerChoice(opt.title)}>
                  <ChoiceIcon aria-hidden="true"><Icon size={18} /></ChoiceIcon>
                  <ChoiceText>
                    <ChoiceTitle>{opt.title}</ChoiceTitle>
                    {opt.caption && <ChoiceMeta>{opt.caption}</ChoiceMeta>}
                  </ChoiceText>
                </ChoiceCard>
              );
            })}
          </ChoiceGrid>
        )}

        {field?.kind === 'composer' && (
          <FieldComposer onSubmit={(e: FormEvent) => { e.preventDefault(); answerComposer(); }}>
            {files.length > 0 && (
              <FieldPending>
                {files.map(f => (
                  <Tag
                    key={f.id}
                    size="md"
                    variant="subtle"
                    color="blue"
                    leadingIcon={<File04Icon size={12} />}
                    dismissible
                    onDismiss={() => setFiles(prev => prev.filter(p => p.id !== f.id))}
                  >
                    {f.name}
                  </Tag>
                ))}
              </FieldPending>
            )}
            <FieldRow>
              <BigComposerActions>
                <ComposerAttachment state="idle" multiple onSelect={attachField} />
              </BigComposerActions>
              <Field
                rows={1}
                value={draft}
                placeholder={field.placeholder}
                aria-label={composerLabel}
                onChange={e => setDraft(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); answerComposer(); }
                }}
              />
              <BigComposerActions>
                <ComposerSendButton
                  state={draft.trim() || files.length ? 'ready' : 'disabled-invalid'}
                  onSend={answerComposer}
                />
              </BigComposerActions>
            </FieldRow>
          </FieldComposer>
        )}

        {/* Match in progress — a blinking skeleton card stands in for the
            recommendation while Ultron "computes" the fit (5s). */}
        {done && recsReady && !recsRevealed && <RecSkeleton />}

        {/* Recommended starting point — Ultron's granular (subvertical-level)
            template match, revealed once the match completes. Picking one seeds
            the account and drops into augment. */}
        {done && recsReady && recsRevealed && heroRec && (
          <RecGroup>
            <RecHead>Recommended starting point</RecHead>
            <RecHeroCard rec={heroRec} onUse={() => chooseTemplate(heroRec)} />

            {recs.length > 1 && (
              <>
                <RecAltHead>Other close fits</RecAltHead>
                <RecAlts>
                  {recs.slice(1, 3).map(rec =>
                    expandedId === rec.id ? (
                      // Expanded in place into the full card layout.
                      <RecHeroCard
                        key={rec.id}
                        rec={rec}
                        onUse={() => chooseTemplate(rec)}
                        onCollapse={() => setExpandedId(null)}
                      />
                    ) : (
                      <RecAlt key={rec.id}>
                        <RecAltMainButton
                          type="button"
                          aria-expanded={false}
                          aria-label={`Expand ${rec.name}`}
                          onClick={() => setExpandedId(rec.id)}
                        >
                          <RecAltTitle>
                            {rec.name}
                            <RecAltMatch>{rec.match}%</RecAltMatch>
                          </RecAltTitle>
                          <RecAltVertical>{rec.vertical}</RecAltVertical>
                        </RecAltMainButton>
                        <RecAltActions>
                          <Button variant="secondary" size="sm" onClick={() => chooseTemplate(rec)}>
                            Use
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            iconOnly
                            aria-label={`Expand ${rec.name}`}
                            onClick={() => setExpandedId(rec.id)}
                          >
                            <ChevronDownIcon size={16} />
                          </Button>
                        </RecAltActions>
                      </RecAlt>
                    ),
                  )}
                </RecAlts>
              </>
            )}

            {/* Escape hatch — skip the recommendation and shape an empty account. */}
            <RecBlankRow>
              <Button
                variant="ghost"
                size="md"
                leadingArtwork={<PlusIcon size={16} />}
                onClick={() => startAugment(BLANK_TEMPLATE)}
              >
                Start blank
              </Button>
            </RecBlankRow>
          </RecGroup>
        )}

        {/* Additional-info composer — the step between the recap and the
            recommendation. Submitting it posts the admin's turn and reveals
            Ultron's template match; it's hidden once that recommendation is up. */}
        {done && briefReady && !recsReady && (
          <BriefGroup>
            <BriefComposer onSubmit={(e: FormEvent) => { e.preventDefault(); askDetails(); }}>
              {briefFiles.length > 0 && (
                <PendingRow>
                  {briefFiles.map(f => (
                    <Tag
                      key={f.id}
                      size="md"
                      variant="subtle"
                      color="blue"
                      leadingIcon={<File04Icon size={12} />}
                      dismissible
                      onDismiss={() => setBriefFiles(prev => prev.filter(p => p.id !== f.id))}
                    >
                      {f.name}
                    </Tag>
                  ))}
                </PendingRow>
              )}
              <BriefField
                ref={briefRef}
                rows={1}
                value={brief}
                placeholder="Add any details I should factor in — or just tell me to build it."
                aria-label="Build brief"
                onChange={e => { setBrief(e.target.value); resizeBrief(); }}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); askDetails(); }
                }}
              />
              <BriefRow>
                <BigComposerActions>
                  <ComposerAttachment state="idle" multiple onSelect={attachBrief} />
                </BigComposerActions>
                <BigComposerActions>
                  <ComposerSendButton state={canSend ? 'ready' : 'disabled-invalid'} onSend={askDetails} />
                </BigComposerActions>
              </BriefRow>
            </BriefComposer>
          </BriefGroup>
        )}

        {/* End-of-live-content marker — sits right below the active answer
            control. The intake reveal scrolls this into view (bottom-aligned)
            when a question + its cards/composer overflow the fold. */}
        <div ref={intakeEndRef} aria-hidden="true" />

        {/* Trailing room so the newest turn can be snapped to the top of the
            column, carrying earlier content up above the fold. */}
        <ThreadSpacer style={{ height: spacerH }} aria-hidden="true" />
      </BuildCol>
    </BuildStepIn>
  );
}

// Ultron's closing recap, posted when the intake completes — right before the
// (empty) build composer. Confirms what was gathered, then invites the admin to
// add anything else or to tell Ultron to build it — at which point Ultron pulls
// together a starting point (the template) in the wizard.
function readyRecap(
  isSite: boolean,
  host: string,
  a: Partial<Record<IntakeField['key'], string>>,
): string {
  if (isSite) {
    return (
      `That's everything I mapped from ${host}. Anything else I should factor in — ` +
      "or just tell me to build it, and I'll pull together a starting point for your account."
    );
  }
  const wf = a.workforce ? a.workforce.toLowerCase() : 'frontline';
  const size = a.sizing ? `${a.sizing.toLowerCase()} ` : '';
  return (
    `Perfect — that's everything I need. You're running a ${wf} operation with a ${size}team. ` +
    "Anything else I should know — or just tell me to build it, and I'll pull together a " +
    "starting point for your account."
  );
}

// The recommendation lead-in — posted just after the recap, presenting the top
// starting point by name so the cards below read as the answer to this turn.
function recIntro(hero?: RecTemplate): string {
  if (!hero) return "Here's the closest starting point I found for you.";
  return (
    `Here's what I'd start you on — ${hero.name}. It ships the roles, pay rules, and ` +
    'compliance tuned for that niche. Use it as-is, pick one of the alternates, or start blank.'
  );
}

// The full recommendation card — the hero pick, and any "other close fit" the
// admin expands in place. `onCollapse` is present only for an expanded alternate
// (renders the collapse control that folds it back to a row).
function RecHeroCard({ rec, onUse, onCollapse }: {
  rec: RecTemplate;
  onUse: () => void;
  onCollapse?: () => void;
}) {
  return (
    <RecHero>
      <RecHeroTop>
        <RecKicker>{rec.vertical}</RecKicker>
        <RecHeroTopRight>
          <Badge variant="neutral">{rec.match}% match</Badge>
          {onCollapse && (
            <Button variant="ghost" size="sm" iconOnly aria-label="Collapse" onClick={onCollapse}>
              <ChevronDownIcon size={16} style={{ transform: 'rotate(180deg)' }} />
            </Button>
          )}
        </RecHeroTopRight>
      </RecHeroTop>
      <RecName>{rec.name}</RecName>
      <RecRationale>{rec.rationale}</RecRationale>
      <RecTags>
        {rec.tags.map(t => (
          <Tag key={t} size="sm" variant="subtle" color="blue">{t}</Tag>
        ))}
      </RecTags>
      <Button
        variant="primary"
        size="sm"
        trailingArtwork={<ArrowNarrowRightIcon size={14} />}
        onClick={onUse}
      >
        Use this template
      </Button>
    </RecHero>
  );
}

// Loading placeholder for the recommendation — mirrors the hero card frame with
// blinking loader bars while Ultron "matches" a template, then RecGroup fades in
// the real content. Alloy has no Skeleton primitive yet; flag for promotion if
// reused. The AILoader carries the "working" affordance in the header.
function RecSkeleton() {
  return (
    <SkeletonHero aria-busy="true" aria-label="Matching a starting-point template">
      <RecHeroTop>
        <SkelBar $w="88px" $h="var(--space-3)" />
        <AgentMark mark="lines" size={36} tone="auto" state="active" motionSpeed={2.4} aria-label="Loading" />
      </RecHeroTop>
      <SkelBar $w="60%" $h="var(--space-6)" />
      <SkelLines>
        <SkelBar $w="100%" $h="var(--space-3)" />
        <SkelBar $w="82%" $h="var(--space-3)" />
      </SkelLines>
      <SkelRow>
        <SkelBar $w="72px" $h="var(--space-5)" $rounded />
        <SkelBar $w="88px" $h="var(--space-5)" $rounded />
        <SkelBar $w="64px" $h="var(--space-5)" $rounded />
      </SkelRow>
      <SkelBar $w="160px" $h="var(--space-8)" $rounded />
    </SkeletonHero>
  );
}

// ── Hooks ────────────────────────────────────────────────────────────────────

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() => {
    try {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch {
      return false;
    }
  });
  useEffect(() => {
    let mq: MediaQueryList;
    try {
      mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    } catch {
      return;
    }
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);
  return reduced;
}

// ── Styled ───────────────────────────────────────────────────────────────────

const Frame = styled.div`
  /* Anchors the ambient backdrop layer, which fills the frame behind Scroll. */
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary);
  color: var(--color-content-primary);
`;

/* Teambridge logo, pinned to the frame's top-left above the backdrop. A 36px
   square wrapper (32px space-8 + 4px space-1 — no 36px space token exists)
   centers the glyph; content-primary fill follows the theme. */
const LogoCorner = styled.div`
  position: absolute;
  top: var(--space-5);
  left: var(--space-5);
  z-index: 2;
  width: calc(var(--space-8) + var(--space-1));
  height: calc(var(--space-8) + var(--space-1));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-primary);
`;

/* Back control, pinned to the frame's bottom-left above the backdrop — steps
   out of the questions run without scrolling with the content. */
const BackCorner = styled.div`
  position: absolute;
  bottom: var(--space-6);
  left: var(--space-6);
  z-index: 2;
`;

const Scroll = styled.main<{ $augment?: boolean }>`
  /* Above the backdrop layer. */
  position: relative;
  z-index: 1;
  flex: 1;
  min-height: 0;
  /* The augment canvas fills the frame as a fixed two-column split — its panes
     scroll internally, so the frame itself doesn't scroll. */
  overflow-y: ${p => (p.$augment ? 'hidden' : 'auto')};
  /* When a turn is snapped to the top (see the scroll effect), stop below the
     sticky build header rather than tucking under it — plus an 8px breath so the
     snapped turn sits a touch below the header edge, not flush against it. */
  scroll-padding-top: calc(var(--space-20) + var(--space-2));
  display: flex;
  flex-direction: column;
`;

// Top-anchored column so the identity holds ONE position across every step,
// independent of how tall the content below it is (or grows to). Fills at least
// the viewport; taller content scrolls rather than shifting the identity.
const Stage = styled.div<{ $build?: boolean; $augment?: boolean }>`
  min-height: 100%;
  box-sizing: border-box;
  /* Don't let the flex parent shrink this below its content, or the bottom
     padding gets squeezed out and tall content (the build cards) scrolls flush
     against the viewport edge. */
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
  /* The build step carries its own compact header lockup in-flow, so it starts
     near the top; the intro steps keep the taller hero spacing. */
  padding: ${p => (p.$build ? 'var(--space-8)' : 'var(--space-24)')} var(--space-6);
  padding-bottom: var(--space-24);

  /* The augment canvas fills the frame edge-to-edge (no centered column, no
     padding) so its two panes can carry their own chrome. */
  ${p =>
    p.$augment &&
    css`
      min-height: 0;
      flex: 1;
      flex-shrink: 1;
      gap: 0;
      padding: 0;
      align-items: stretch;
    `}
`;

// The persistent Ultron identity — no entrance/size animation of its own; it
// simply holds. On the build step it spans the column's width and pins the mark
// to the left edge (so it lines up with the left-aligned content); elsewhere it
// shrinks to the mark and centers.
const Identity = styled.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`;

// A soft radial bloom sits behind the mark so it reads as lit — kept tight to the
// canvas (not the identity box, which can span the full column on the build step).
const MarkBloom = styled.span`
  display: inline-flex;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -24%;
    border-radius: 50%;
    background: radial-gradient(circle, var(--color-bg-secondary) 0%, transparent 70%);
    pointer-events: none;
  }

  & > canvas {
    position: relative;
    z-index: 1;
  }
`;

/* Wraps the active step. On exit it fades + lifts away; the incoming step then
   plays its own entrance (the greeting types in; intent/questions use StepIn),
   so each transition reads as one step leaving before the next arrives. */
const stepExit = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(-6px); }
`;

const Content = styled.div<{ $exiting?: boolean; $augment?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${p =>
    p.$exiting &&
    css`
      animation: ${stepExit} ${EXIT_MS}ms var(--ease-in) forwards;
    `}

  /* Augment canvas: stretch to fill the frame so the two-column split owns the
     whole height, with its panes scrolling internally. */
  ${p =>
    p.$augment &&
    css`
      flex: 1;
      min-height: 0;
      align-items: stretch;
    `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Greeting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  max-width: 640px;
  text-align: center;
`;

/* The subtext block fades in (as one group) after the headline finishes typing. */
const subFadeIn = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const SubGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  animation: ${subFadeIn} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* The greeting's "Get started" CTA — a touch of air above the subtext. */
const CtaRow = styled.div`
  margin-top: var(--space-3);
`;

const Headline = styled.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Pops in (no type-out). */
  animation: ${subFadeIn} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Sub = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`;

/* Step swap — the intent + question steps ease in when they mount. */
const stepIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const StepIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  width: 100%;
  max-width: 720px;
  text-align: center;
  animation: ${stepIn} ${STEP_DURATION_MS}ms ${SMOOTH_EASE} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Prompt = styled.h1`
  margin: 0;
  font-family: var(--font-sans);
  /* Matches the opening landing headline (Headline) so step titles read consistently. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`;

const PromptSub = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
  max-width: 520px;
`;

/* Mode-swap entrance — the workplace question's subtext + field icon re-fade in
   when the admin toggles between website and company-name modes (keyed on mode). */
const modeSwap = keyframes`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const QSub = styled(PromptSub)`
  animation: ${modeSwap} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  width: 100%;
  margin-top: var(--space-4);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

// Selectable block card — a real button so it's keyboard-reachable; role=radio
// inside the group above. FLAGGED for an Alloy `SelectableCard`.
const OptionCard = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);
  padding: var(--space-5);
  text-align: left;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: border-color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              box-shadow var(--duration-fast) var(--ease-default),
              transform var(--duration-fast) var(--ease-default);

  /* Subtle lift on hover — the card rises a touch and gains a soft shadow. */
  &:hover {
    background: var(--color-bg-secondary);
    border-color: var(--color-border-selected);
    transform: translateY(-2px);
    box-shadow: var(--shadow-below-md);
  }

  /* Pressing settles it back down from the lifted state. */
  &:active {
    transform: translateY(0);
    box-shadow: var(--shadow-below-low);
  }

  &[data-selected] {
    background: var(--color-bg-tertiary);
    border-color: var(--color-border-selected);
    box-shadow: var(--shadow-below-low);
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover,
    &:active {
      transform: none;
    }
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }
`;

const OptionIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-primary);
  margin-bottom: var(--space-2);
`;

const OptionTitle = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`;

const OptionDetail = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`;

/* Composer — a rounded bar framing the input + send button. Mirrors the stage-1
   composer so the two read as one family. FLAGGED for an Alloy `Composer`. */
const Composer = styled.form`
  width: 100%;
  max-width: 520px;
  margin-top: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-below-low);
  transition: border-color var(--duration-fast) var(--ease-default);

  &:focus-within {
    border-color: var(--color-border-focus);
  }
`;

const FieldRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
`;

// Scales + fades in on each mode swap (keyed on mode), so the Link ↔ Building
// glyph transition reads rather than snapping.
const iconSwap = keyframes`
  from { opacity: 0; transform: scale(0.7); }
  to   { opacity: 1; transform: scale(1); }
`;

const FieldIcon = styled.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary);
  flex-shrink: 0;
  animation: ${iconSwap} var(--duration-base) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
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
`;

// Enlarge the send control to 32px via Alloy's composer sizing vars (as stage 1
// does); `&&` outweighs the component's own size rule. ComposerActions defaults
// to width:100% (it's built to span a composer row), so here — where it sits
// inline next to the textarea — pin it to its content width instead; otherwise
// it eats the whole row and the textarea collapses to 0 (uneditable).
const BigComposerActions = styled(ComposerActions)`
  && {
    flex: 0 0 auto;
    width: auto;
    --composer-btn-size: var(--space-8); /* 32px */
    --composer-btn-icon-attach: var(--space-4); /* 16px */
    --composer-btn-icon-send: var(--space-4); /* 16px */
  }
`;

const AltRow = styled.div`
  margin-top: var(--space-3);
`;

/* ── Build thread ─────────────────────────────────────────────────────────── */

// The build step reads as a document/chat, so its content is left-aligned within
// the column (overriding StepIn's centered layout used by the shorter steps).
const BuildStepIn = styled(StepIn)`
  align-items: stretch;
  text-align: left;
`;

// This page's header lockup — brand marks in a compact row. Pinned to the top of
// the scroll area so it holds in place while the thread scrolls up beneath it;
// the opaque background occludes the messages passing under it (the thread shares
// the header's column width, so the band covers everything that scrolls by).
const BuildHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  /* No top padding — the marks sit flush at the top; bottom padding spaces the
     header off the thread scrolling beneath it. */
  padding: 0 0 var(--space-4);
  color: var(--color-content-primary);

  /* Occluding backdrop for the thread scrolling underneath — sits behind the
     marks and extends a strip past the header foot. Instead of a hard rectangle
     it feathers on its bottom, left, and right edges (the top stays solid — it's
     pinned to the viewport top), continuing the fill then fading it to transparent
     while blurring the thread, so messages dissolve up INTO the header on every
     side rather than clipping against an edge. */
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    /* Spill the backdrop into the gutter on both sides by one feather width, so
       the side fade lands OUTSIDE the content column — the full column width stays
       solidly covered and nothing scrolling under bleeds through at the edges. */
    left: calc(-1 * var(--space-6));
    right: calc(-1 * var(--space-6));
    bottom: calc(-1 * var(--space-6));
    background: var(--color-bg-primary);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    /* One feather width shared by all three soft edges. */
    --edge: var(--space-6);
    -webkit-mask-image:
      linear-gradient(to bottom, black calc(100% - var(--edge)), transparent),
      linear-gradient(to right, transparent, black var(--edge), black calc(100% - var(--edge)), transparent);
    mask-image:
      linear-gradient(to bottom, black calc(100% - var(--edge)), transparent),
      linear-gradient(to right, transparent, black var(--edge), black calc(100% - var(--edge)), transparent);
    /* Intersect the two so only the overlap paints — feathering bottom + sides. */
    -webkit-mask-composite: source-in;
    mask-composite: intersect;
    pointer-events: none;
  }
`;

// Hairline separating the Teambridge mark from the Ultron mark in the lockup.
const LogoDivider = styled.span`
  width: 1px;
  height: var(--space-5);
  background: var(--color-border-opaque);
`;

// The build step's content column, stacked under the persistent identity mark.
const BuildCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`;

// The chat log — a left-aligned stack of alternating Ultron / admin bubbles.
// Inter-message spacing lives on MsgRow (not a container gap) so the trailing
// scroll anchor doesn't add a phantom gap below the last message.
const Thread = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
`;

/* Trailing room below the thread — its height is set dynamically to the scroll
   viewport (see BuildStep) so the newest turn can be scrolled to the very top,
   pushing earlier turns up above the fold. Never shrinks the layout on its own. */
const ThreadSpacer = styled.div`
  flex-shrink: 0;
`;

/* Each message eases up into place as it's appended. */
const msgIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const MsgRow = styled.div`
  display: flex;
  animation: ${msgIn} var(--duration-base) var(--ease-out) both;

  & + & { margin-top: var(--space-3); }

  &[data-from='user'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* Wraps the site-path findings trail so it aligns with Ultron's left-aligned
   turns and takes the full content width (wider than the 80% text bubble),
   giving the milestone rows room to read as an activity trail. */
const TrailWrap = styled.div`
  width: 100%;
  min-width: 0;
`;

// Mirrors the Ultron page's chat thread: Ultron speaks as plain left-aligned
// prose (no bubble), while the admin's answer is the subtle right-aligned
// outbound bubble (bg-secondary fill, medium-weight text).
const Bubble = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);

  &[data-from='ultron'] {
    /* Ultron speaks as plain prose, not a chat bubble — let it span the full
       content column (like the trail / link card / composer below it) so its
       left and right edges sit the same inset from the column edge, rather than
       stopping short at the 80% bubble cap. */
    max-width: 100%;
    align-items: flex-start;
    padding: var(--space-1) 0;
  }

  &[data-from='user'] {
    /* content-box so the bubble reserves full L/R padding around its text —
       under the global border-box reset the content collapses and the text
       overflows to one side, leaving uneven left/right padding. */
    box-sizing: content-box;
    align-items: flex-end;
    /* Fill the stack (which shrink-wraps to content and carries the 80% cap),
       rather than a second 80% cap here — two nested percentage caps collapse
       the bubble to min-content and wrap short text early. With 100% the bubble
       hugs short text on one line and wraps only at the stack's 80% cap. */
    max-width: 100%;
    padding: var(--space-2) var(--space-4);
    background: var(--color-bg-tertiary);
    border-radius: 16px;
    font-weight: var(--font-weight-medium);
  }
`;

// Stacks a message's bubble and (for file answers) its tag group, aligned to the
// speaker's side so the tags sit directly under the bubble.
const MsgStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  max-width: 80%;
  min-width: 0;

  /* Size to content (fit-content) so the outbound bubble/card isn't squeezed to
     the nested flex column's min-content — short messages keep one line. */
  &[data-from='user'] { width: fit-content; align-items: flex-end; }
  /* Ultron prose spans the full column (see Bubble) so it isn't capped at the
     80% outbound-bubble width — its right edge lines up with the column. */
  &[data-from='ultron'] { max-width: 100%; align-items: flex-start; }
`;

// The attached-file tags, laid out as a wrapping group under the answer bubble.
const ChipGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  justify-content: flex-end;
`;

/* A compact link card under the pasted-website turn: the site's favicon
   (leading), its name + URL stacked in the middle, and a trailing open
   affordance. The whole card is the link — clicking anywhere opens the site in
   a new tab. Sits on the admin's (right-aligned) side, under the URL bubble. */
const SiteLinkCard = styled.a`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 300px;
  max-width: 100%;
  box-sizing: border-box;
  padding: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg, 12px);
  background: var(--color-bg-primary);
  text-decoration: none;
  transition: background var(--duration-fast, 120ms) var(--ease-out, ease);

  &:hover { background: var(--color-bg-secondary); }
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-border-focus);
  }
`;

/* Leading favicon, framed in a small rounded tile so short/transparent icons
   still read against the card. */
const SiteFavicon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md, 8px);
  overflow: hidden;
  background: var(--color-bg-secondary);

  & img { display: block; width: 20px; height: 20px; object-fit: contain; }
`;

/* Middle column — the site name over its URL. */
const SiteMeta = styled.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
  text-align: left;
`;

const SiteName = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SiteUrl = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/* Trailing open affordance — a circular icon control that reads as the card's
   "go" button (decorative; the whole card carries the link). */
const SiteOpen = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border-opaque);
  color: var(--color-content-secondary);
  transition: background var(--duration-fast, 120ms) var(--ease-out, ease),
              color var(--duration-fast, 120ms) var(--ease-out, ease);

  ${SiteLinkCard}:hover & {
    background: var(--color-bg-primary);
    color: var(--color-content-primary);
  }
`;

// The workforce / size choice grid, sitting directly under Ultron's question.
// Reuses the intent-step grid but drops its top margin, tightens the gap, and
// takes an explicit column count ($cols) — the long workforce list reads as two
// columns, while the three size buckets stay on one row.
const ChoiceGrid = styled(CardGrid)<{ $cols?: number }>`
  margin-top: 0;
  gap: var(--space-3);
  grid-template-columns: repeat(${p => p.$cols ?? 2}, 1fr);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

// Compact choice tile — a small icon + title row, no description. Smaller and
// simpler than the intent step's OptionCard.
const ChoiceCard = styled.button`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  text-align: left;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: border-color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              box-shadow var(--duration-fast) var(--ease-default),
              transform var(--duration-fast) var(--ease-default);

  &:hover {
    background: var(--color-bg-secondary);
    border-color: var(--color-border-selected);
    transform: translateY(-1px);
    box-shadow: var(--shadow-below-low);
  }
  &:active { transform: translateY(0); }
  &:focus-visible { outline: 2px solid var(--color-border-focus); outline-offset: 2px; }

  @media (prefers-reduced-motion: reduce) {
    &:hover, &:active { transform: none; }
  }
`;

const ChoiceIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-8);
  height: var(--space-8);
  flex-shrink: 0;
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-primary);
`;

const ChoiceText = styled.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

const ChoiceTitle = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`;

// Short caption under the title — the size buckets' headcount range.
const ChoiceMeta = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`;

/* Active answer composer (roles / facilities) — fills the build column: any
   attached files show as a wrapped row of tags on top, then the attach button +
   textarea + send on one row below. */
const FieldComposer = styled(Composer)`
  max-width: 100%;
  margin-top: 0;
  display: flex;
  flex-direction: column;

  /* The attach button sits on the left here (not a leading glyph as in the
     workplace composer), so trim the left padding to match the right for a
     balanced row. */
  ${FieldRow} {
    padding-left: var(--space-2);
  }
`;

// Attached-file tags above the composer's input row (padded to clear the border).
const FieldPending = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-3) 0;
`;

/* Build-brief composer — the wider, multi-line variant with attach + send on
   its foot row. Fades in with the ready subtext. */
const BriefGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  animation: ${subFadeIn} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* ── Recommended starting point (inline template recommendation) ───────────── */

/* Wraps Ultron's template recommendation, revealed after the recap. Fades up
   like the composer so it reads as the next beat of the conversation. */
const RecGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  animation: ${subFadeIn} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

// ── Loading skeleton ──
// Soft opacity blink for the loader bars.
const skelBlink = keyframes`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.35; }
`;

// Same frame as RecHero so the reveal doesn't shift layout.
const SkeletonHero = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-5);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-below-md);
  animation: ${subFadeIn} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const SkelLines = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

const SkelRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

// One blinking loader bar. Width/height are per-use layout dimensions; bars in a
// row are offset so the row shimmers rather than blinking in unison.
const SkelBar = styled.div<{ $w: string; $h: string; $rounded?: boolean }>`
  flex-shrink: 0;
  width: ${p => p.$w};
  height: ${p => p.$h};
  border-radius: ${p => (p.$rounded ? 'var(--radius-full)' : 'var(--radius-sm)')};
  background: var(--color-bg-tertiary);
  animation: ${skelBlink} 1.2s var(--ease-default) infinite;

  ${SkelRow} &:nth-child(2) { animation-delay: 0.15s; }
  ${SkelRow} &:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.6;
  }
`;

const RecHead = styled.h3`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`;

/* The hero recommendation card. */
const RecHero = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-5);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-selected);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-below-md);

  /* Fully-rounded hero CTA, set off from the tags with extra top spacing.
     Left padding nudged from --space-2 (8px) to --space-3 (12px) — +4px. */
  & > button {
    align-self: flex-start;
    border-radius: var(--radius-full);
    margin-top: var(--space-2);
    padding-left: var(--space-3);
  }
`;

const RecHeroTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
`;

/* Right cluster of the hero top row — the match badge, plus a collapse control
   when the card is an expanded alternate. */
const RecHeroTopRight = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

const RecKicker = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`;

const RecName = styled.h2`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`;

const RecRationale = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`;

const RecTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`;

const RecAltHead = styled.div`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  margin-top: var(--space-1);
`;

const RecAlts = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

/* A quieter alternate row — name + vertical on the left, a Use button trailing. */
const RecAlt = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  transition: border-color var(--duration-fast) var(--ease-default);

  &:hover { border-color: var(--color-border-hover); }
`;

/* Clickable left region of an alternate row — expands it into the full card. */
const RecAltMainButton = styled.button`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  padding: 0;
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 4px;
    border-radius: var(--radius-sm);
  }
`;

/* Trailing controls on an alternate row — the Use button + expand chevron. */
const RecAltActions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
`;

const RecAltTitle = styled.span`
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`;

const RecAltMatch = styled.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-tertiary);
`;

const RecAltVertical = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`;

/* Holds the "start blank" escape hatch below the recommendations, left-aligned
   under the cards. */
const RecBlankRow = styled.div`
  display: flex;
  margin-top: var(--space-1);
`;

const BriefComposer = styled(Composer)`
  /* Span the full content column so its edges line up with the thread + cards. */
  max-width: 100%;
  margin-top: var(--space-2);
  padding: var(--space-3);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  text-align: left;
`;

const PendingRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`;

const BriefField = styled.textarea`
  width: 100%;
  border: none;
  background: transparent;
  resize: none;
  outline: none;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;

const BriefRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* ── Augment canvas ───────────────────────────────────────────────────────────
   The two-column split the build thread transitions into once a template is
   picked: the conversation rides the left column, the live account draft the
   right. The left settles in from center while the right slides in — reading as
   the chat "moving left" to make room for the account building beside it. */

const leftSettle = keyframes`
  from { opacity: 0.5; transform: translateX(5%); }
  to   { opacity: 1; transform: translateX(0); }
`;

const rightSlideIn = keyframes`
  from { opacity: 0; transform: translateX(24px); }
  to   { opacity: 1; transform: translateX(0); }
`;

// Draft-weighted split (~0.85 : 1.15), mirroring the former standalone canvas —
// the conversation stays comfortably readable while the draft tree gets room.
const AugmentRoot = styled.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  background: var(--color-bg-primary);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
  }
`;

const AugmentLeft = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding: 12px 24px;
  animation: ${leftSettle} var(--duration-slow) ${SMOOTH_EASE} both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

// The thread's own scroll area within the left column (the header + composer
// stay pinned above / below it).
const AugmentScroll = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: var(--space-2) 0 var(--space-4);
  /* The header sits outside this scroll area, so a snapped turn only needs a
     little breathing room from the top — not the full build-header offset. */
  scroll-padding-top: var(--space-4);
`;

const AugmentSuggestions = styled.div`
  position: relative;
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: 0 0 var(--space-3);

  /* Soft fade on the top edge: the scrolling thread above dissolves into the
     pinned suggestions/composer zone rather than ending in a hard cut. Sits just
     above this block and is click-through so it never blocks the thread. */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100%;
    height: var(--space-6);
    background: linear-gradient(to top, var(--color-bg-primary), transparent);
    pointer-events: none;
  }
`;

/* Quick-start prompt chip. Alloy's FilterPill isn't exported from the package
   root, so this is a small token-clean local chip. FLAGGED for a shared chip. */
const SuggestChip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  /* Tighter left padding so the leading + hugs the chip edge. */
  padding: var(--space-1) var(--space-3) var(--space-1) var(--space-2);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-full);
  background: var(--color-bg-primary);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-default),
              border-color var(--duration-fast) var(--ease-default);

  &:hover { background: var(--color-bg-secondary); border-color: var(--color-border-hover); }
  &:focus-visible { outline: 2px solid var(--color-border-focus); outline-offset: 1px; }
`;

// The augment instruction composer — the build composer family, spanning the
// left column and pinned to its foot.
const AugmentComposer = styled(Composer)`
  max-width: 100%;
  margin: 0;
`;

const AugmentRight = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 0;
  /* Inset the pane 12px on top/right/bottom; flush left against the split. */
  padding: 12px 12px 12px 0;
  animation: ${rightSlideIn} var(--duration-slow) ${SMOOTH_EASE} both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

// Foot of the draft pane — the augment CTAs (back to the recommendation, or
// straight into the provisioning run).
const AugmentFoot = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  /* 12px gap below, separating the footer from the draft card beneath it. */
  margin-bottom: 12px;
  background: var(--color-bg-primary);
`;

/* Left cluster of the footer — the refresh icon button sits first (far left),
   then Back. */
const AugmentFootLeft = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

const AugmentFootRight = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-4);
`;

const AugmentFootNote = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;

// Quiet inline text button — the "no website" / "enter a website" fallback.
const TextButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* 36px tall control (32px space-8 + 4px space-1) — no 36px space token exists. */
  min-height: calc(var(--space-8) + var(--space-1));
  border: none;
  background: transparent;
  padding: 0 var(--space-3);
  border-radius: var(--radius-md);
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-tertiary);
  transition: color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default);

  &:hover {
    color: var(--color-content-primary);
    background: var(--color-bg-secondary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }
`;
