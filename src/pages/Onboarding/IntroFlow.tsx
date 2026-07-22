/* ─────────────────────────────────────────────────────────────────────────────
   Intro flow — the opening layer that sits ABOVE the provisioning wizard.

   The steps, played in sequence before the numbered wizard begins:
     1. landing   — Ultron's identity mark + a co-pilot greeting, then a single
                     email capture with a "Get started free" CTA.
     2. account   — the sign-in options, centered on the screen: continue with
                     Google / Microsoft / Apple, or log in with email. Any of
                     them advances (the accounts are mocked — no real auth wired
                     in a prototype).
     3. workplace — "Where do you work?" — paste a company website, or switch to
                     typing the company name. The submission decides the next path.
     4. loading   — understand the operation. Website path: a centered parse run —
                     "reading the site", then the findings pop in one-by-one (no
                     chat thread). Company-name path: a single workforce-type pick
                     (the size / roles / roster intake was removed).
     5. questions — three quick, high-level workforce questions (how workers are
                     paid, how clients are billed, where the team works), each a
                     vertical stack of selectable cards. Only on the no-website /
                     didn't-resolve paths — a parsed website already answers this,
                     so that path skips straight to the roster.
     6. build …   — the account-draft / recommendation / provisioning tail (being
                     redesigned; the flow currently hands into the existing tail so
                     it stays runnable end-to-end).

   Local components: the selectable cards, the URL composer, and the SSO buttons
   have no Alloy primitive (checked the inventory — Radio / ToggleButton / DataCard
   don't cover an icon+title+description selection card, and there's no chat
   composer). They're built here from tokens + Alloy icons/controls and FLAGGED for
   promotion to Alloy (a `SelectableCard` and a `Composer`). */

import { useCallback, useEffect, useRef, useState } from 'react';
import type { ComponentType, FormEvent } from 'react';
import styled, { css, keyframes } from 'styled-components';
import {
  Avatar, Tooltip,
  Button, EmailField, FileUploader, ComposerActions, ComposerSendButton,
  ArrowNarrowRightIcon, CheckCircleIcon, Map01Icon,
  Link01Icon, Building02Icon,
  Microphone02Icon, MedicalCrossIcon, PackageIcon, Lock01Icon,
  Building05Icon,
  BankNote01Icon, ReceiptCheckIcon, CoinsStacked03Icon, ClockIcon, CurrencyDollarIcon, Pin01Icon,
} from 'alloy-design-system';
import { AgentMark } from '../Ultron';
import { IntroBackdrop } from './IntroBackdrop';
import { MouseGlow } from '../../components/MouseGlow';
import { TeambridgeMark } from './TeambridgeMark';
import { liquidGlass, liquidGlassRaised } from './glass';
// Customer logos — Teambridge's own listed customers, sourced from the marketing
// site. Vite resolves each import to a served asset URL.
import levisStadiumLogo from './assets/logos/levis-stadium.webp';
import procareHrLogo from './assets/logos/procare-hr.webp';
import floridaPanthersLogo from './assets/logos/florida-panthers.webp';
import expressHealthcareLogo from './assets/logos/express-healthcare.webp';
import modsquadLogo from './assets/logos/modsquad.png';
import titanMedicalGroupLogo from './assets/logos/titan-medical-group.webp';
import unitedStaffingSolutionsLogo from './assets/logos/united-staffing-solutions.webp';

// ── Public shape ─────────────────────────────────────────────────────────────

export interface IntroAnswers {
  /** Company website the admin pasted (when they have one). */
  companyWebsite?: string;
  /** What they pasted when it didn't look like a website — the flow still moves
   *  on, landing them on the workforce pick. */
  failedWebsite?: string;
  /** Set when the admin taps "I don't have a website" — skips straight to the
   *  workforce pick. */
  noWebsite?: boolean;
  /** Workforce type picked on the loading step (no-website / didn't-resolve
   *  paths; the website path skips straight to the questions). */
  workforceType?: string;
  /** Step-4 workforce answers. */
  pay?: string;      // W-2 | 1099 | Both
  billing?: string;  // Hourly | By month | By post
  worksite?: string; // One location | Multiple locations | Client sites
  /** Roster file the admin uploaded (name only; absent when they skipped). */
  rosterFile?: { name: string };
  /** Schedule file the admin uploaded (name only; absent when they skipped). */
  scheduleFile?: { name: string };
}

interface IntroFlowProps {
  /** Fired once the admin finishes the last onboarding step (schedule upload) —
   *  the onboarding is done and the flow drops into the live Ultron app. Carries
   *  everything collected across the run so the app's welcome landing can recap
   *  what was set up. */
  onComplete: (answers: IntroAnswers) => void;
}

// ── Timing / motion ──────────────────────────────────────────────────────────

// Step swaps (intent / questions) ease in a touch slower than the token scale.
const STEP_DURATION_MS = 560;

// How long the current step's content fades out before the next step swaps in.
const EXIT_MS = 320;


// A gentle deceleration curve (easeOutQuint) — glides to rest instead of the
// snappier token ease, so the slower entrance also reads smoother.
const SMOOTH_EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

// The identity is a single persistent element held at one fixed size and
// position across every step — no pop-in, no size morph, no repositioning. Kept
// at/above AgentMark's hero threshold (120) so it always renders the full Ultron
// identity (dense cell sphere + flowing particle swarm), never the sparse form.
const MARK_SIZE = 140;

// ── Content ──────────────────────────────────────────────────────────────────

// A selectable option inside a step-4 workforce question — icon + title, with a
// short caption underneath.
interface WorkforceOption {
  id: string;
  icon: ComponentType<{ size?: number }>;
  title: string;
  caption: string;
}

// The three quick, high-level questions asked on step 4 (both paths). Each keys
// into IntroAnswers; add more entries here to grow the run. Options render as a
// vertical stack of selectable cards.
interface WorkforceQuestion {
  key: 'pay' | 'billing' | 'worksite';
  prompt: string;
  sub: string;
  options: WorkforceOption[];
}

const WORKFORCE_QUESTIONS: WorkforceQuestion[] = [
  {
    key: 'pay',
    prompt: 'How are your workers paid?',
    sub: 'So I turn on pay the right way from the start.',
    options: [
      { id: 'w2',   icon: BankNote01Icon,      title: 'W-2',  caption: 'Employees on your payroll.' },
      { id: '1099', icon: ReceiptCheckIcon,    title: '1099', caption: 'Independent contractors.' },
      { id: 'both', icon: CoinsStacked03Icon,  title: 'Both', caption: 'A mix of W-2 and 1099.' },
    ],
  },
  {
    key: 'billing',
    prompt: 'How do you bill clients?',
    sub: 'So I handle billing the way you actually work.',
    options: [
      { id: 'hourly', icon: ClockIcon,          title: 'Hourly',   caption: 'Per hour worked.' },
      { id: 'month',  icon: CurrencyDollarIcon, title: 'By month', caption: 'A flat monthly rate.' },
      { id: 'post',   icon: Pin01Icon,          title: 'By post',  caption: 'Per site or position covered.' },
    ],
  },
  {
    key: 'worksite',
    prompt: 'Where does your team work?',
    sub: 'So I set up your sites and scheduling to match.',
    options: [
      { id: 'one',    icon: Building02Icon, title: 'One location',       caption: 'A single site.' },
      { id: 'multi',  icon: Building05Icon, title: 'Multiple locations', caption: 'Several of your own sites.' },
      { id: 'client', icon: Map01Icon,      title: 'Client sites',       caption: 'Out at client locations.' },
    ],
  },
];

// ── Root ─────────────────────────────────────────────────────────────────────

type Step = 'landing' | 'auth' | 'workplace' | 'loading' | 'questions' | 'roster' | 'schedule';

export function IntroFlow({ onComplete }: IntroFlowProps) {
  const [step, setStep] = useState<Step>('landing');
  const [answers, setAnswers] = useState<IntroAnswers>({});
  // The identity mark starts as just core + flowing particles (no links); once
  // the operation comes into focus it forms its first connection line, and grows
  // from there as the setup deepens.
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

  // Teambridge logo (top-left) → restart the demo from the top: back to the
  // landing with everything collected cleared.
  const restart = () =>
    transition(() => {
      setStep('landing');
      setAnswers({});
      setConnected(false);
    });

  // Email captured (landing) → the account page (sign-in options).
  const finishLanding = () => transition(() => setStep('auth'));

  // Account picked (any provider, or email) → the workplace question.
  const finishAuth = () => transition(() => setStep('workplace'));

  // Workplace answered → the loading step (site fly-through, or workforce pick).
  // The mark forms its first connection line as the operation comes into focus.
  const finishWorkplace = (collected: IntroAnswers) => {
    setAnswers(a => ({ ...a, ...collected }));
    setConnected(true);
    transition(() => setStep('loading'));
  };

  // Loading done (workforce type on the no-website path; the fly-through advances
  // on its own on the website path). The website path already read the operation
  // off the site, so it skips the three workforce questions and heads straight
  // to the roster; the no-website / didn't-resolve paths keep them.
  const finishLoading = (collected: IntroAnswers) => {
    setAnswers(a => ({ ...a, ...collected }));
    transition(() => setStep(answers.companyWebsite ? 'roster' : 'questions'));
  };

  // Workforce questions answered → the roster upload.
  const finishQuestions = (collected: IntroAnswers) => {
    setAnswers(a => ({ ...a, ...collected }));
    transition(() => setStep('roster'));
  };

  // Roster uploaded (or skipped) → the schedule upload. A picked file is recorded
  // so the app's welcome recap can note the roster came in.
  const finishRoster = (file: { name: string } | null) => {
    if (file) setAnswers(a => ({ ...a, rosterFile: file }));
    transition(() => setStep('schedule'));
  };

  // Schedule uploaded (or skipped) → onboarding is done; drop into the app with
  // everything collected so the welcome landing can recap the setup.
  const finishSchedule = (file: { name: string } | null) =>
    onComplete({ ...answers, ...(file ? { scheduleFile: file } : {}) });

  // The ambient backdrop's network builds with progress: bare particles on the
  // landing, a first scatter of lines on the workplace step, the full web once
  // the workplace is submitted (echoing the identity forming its connection line).
  const backdropLinks = connected ? 1 : step === 'landing' ? 0 : 0.4;

  // The identity's own connections deepen with the flow: a first line once the
  // operation comes into focus, a second while it takes in the roster & schedule.
  const identityStreams = step === 'roster' || step === 'schedule' ? 2 : connected ? 1 : 0;

  // While the website activation run is working, the identity shifts into its
  // `lines` processing form (same size, same slot); every other step keeps the
  // connected `circle` presence.
  const processing = step === 'loading' && Boolean(answers.companyWebsite);

  return (
    <Frame>
      <IntroBackdrop links={backdropLinks} />
      {/* Ambient cursor glow — layered above the backdrop's dots/lines but below
          all content (DOM order does the stacking; both are z-index auto). */}
      <MouseGlow />
      <LogoCorner type="button" aria-label="Restart demo" title="Restart demo" onClick={restart}>
        <TeambridgeMark size={22} />
      </LogoCorner>
      <Scroll>
        {/* The column stays centered in the viewport on every step, with the
            persistent identity mark held above it. */}
        <Stage>
          {/* The hero identity, centered above the single column on every step
              EXCEPT the landing, which composes its own mark inside the left
              panel of its two-panel split. */}
          {step !== 'landing' && (
            <Identity>
              <MarkBloom>
                <AgentMark
                  mark={processing ? 'lines' : 'circle'}
                  size={MARK_SIZE}
                  tone="auto"
                  state="active"
                  {...(processing ? {} : { streamCount: identityStreams })}
                  aria-label="Ultron"
                />
              </MarkBloom>
            </Identity>
          )}

          {/* The active step's content fades out here before each swap; the
              incoming step then plays its own entrance. */}
          <Content $exiting={exiting}>
            {step === 'landing' && <LandingStep onNext={finishLanding} />}
            {step === 'auth' && (
              <StepIn>
                <AuthStep onNext={finishAuth} />
              </StepIn>
            )}
            {step === 'workplace' && (
              <StepIn>
                <WorkplaceQuestion onAnswer={finishWorkplace} />
              </StepIn>
            )}
            {step === 'loading' && (answers.companyWebsite || answers.failedWebsite || answers.noWebsite) && (
              <LoadingStep
                website={answers.companyWebsite}
                failedWebsite={answers.failedWebsite}
                onDone={finishLoading}
              />
            )}
            {step === 'questions' && <WorkforceQuestionsStep onComplete={finishQuestions} />}
            {step === 'roster' && <UploadStep kind="roster" onDone={finishRoster} />}
            {step === 'schedule' && <UploadStep kind="schedule" onDone={finishSchedule} />}
          </Content>
        </Stage>
      </Scroll>
    </Frame>
  );
}

// ── Step 1 — landing (sign-up) ────────────────────────────────────────────────

// The landing greeting: headline sets the aspiration; the body points straight
// at the next step (the workplace question, where they show us their company).
const GREETING_HEADLINE = 'Lead the work that matters.';
const GREETING_BODY =
  "Show us your company and we'll set up the work.";

// ── Landing social proof ──────────────────────────────────────────────────────
// The sign-up screen carries a light proof panel beside the sign-up block: a
// "live" Ultron Index stat, a row of customer wordmarks, and one operator quote.
//
// MOCKED: Ultron isn't wired to a data source in this prototype (no `ultron`
// anywhere in the app), so the Index figure is a static placeholder using the
// example copy. Swap ULTRON_INDEX_TOTAL for a real feed when one exists.
const ULTRON_INDEX_TOTAL = 41000;

// Teambridge customers — the client list from teambridge.com's "#1 AI Platform"
// section, with each company's own wordmark logo (downloaded from the marketing
// site's CDN). `name` is the accessible label; `src` is the Vite-resolved asset.
const CUSTOMER_LOGOS = [
  { name: "Levi's Stadium", src: levisStadiumLogo },
  { name: 'ProCare HR', src: procareHrLogo },
  { name: 'Florida Panthers', src: floridaPanthersLogo },
  { name: 'Express Healthcare', src: expressHealthcareLogo },
  { name: 'ModSquad', src: modsquadLogo },
  { name: 'Titan Medical Group', src: titanMedicalGroupLogo },
  { name: 'United Staffing Solutions', src: unitedStaffingSolutionsLogo },
];

// Operator testimonials — fictional personas for the prototype, most voiced for
// the customers in the logo row so the panel reads as one story. The proof
// panel loops through them, one card popping in at a time.
const OPERATOR_QUOTES = [
  {
    quote:
      'Ultron turned three days of scheduling into ten minutes. It just handles the ' +
      "busywork so my managers don't have to.",
    name: 'Dana Okafor',
    role: 'Director of Operations',
    org: 'Meridian Care',
    avatarColor: 'purple' as const,
  },
  {
    quote:
      'Every event used to start with a spreadsheet marathon. Now open shifts fill ' +
      "themselves before I've finished my coffee.",
    name: 'Marcus Webb',
    role: 'Event Staffing Manager',
    org: "Levi's Stadium",
    avatarColor: 'blue' as const,
  },
  {
    quote:
      'Onboarding a class of forty caregivers used to eat my whole week. Ultron ' +
      'drafts it, I review it, done by lunch.',
    name: 'Priya Raman',
    role: 'VP of People',
    org: 'ProCare HR',
    avatarColor: 'green' as const,
  },
  {
    quote:
      "It caught a credential lapse we'd have missed and reworked the schedule " +
      'around it before anyone had to call in.',
    name: 'Sofia Delgado',
    role: 'Compliance Lead',
    org: 'Express Healthcare',
    avatarColor: 'orange' as const,
  },
  {
    quote:
      "It's like giving every team its own ops coordinator without adding " +
      'headcount. My leads finally lead again.',
    name: 'Jamie Chen',
    role: 'Workforce Lead',
    org: 'ModSquad',
    avatarColor: 'azure' as const,
  },
];

// How long each compliment card holds before the next one pops in.
const QUOTE_ROTATE_MS = 6000;

// Brand marks for the SSO buttons. Vendor logos aren't (and shouldn't be) part of
// Alloy's icon set — they're third-party trademarks — so they're inlined here as
// each vendor's own glyph. The literal brand colors are the one sanctioned
// exception to Teambridge's no-raw-hex rule: a brand mark has to render in its own
// colors to be recognizable and used legitimately.
function GoogleMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path fill="#4285F4" d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" />
      <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A9 9 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" />
      <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.346l2.582-2.581C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" />
    </svg>
  );
}
function MicrosoftMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <rect x="1" y="1" width="7.2" height="7.2" fill="#F25022" />
      <rect x="9.8" y="1" width="7.2" height="7.2" fill="#7FBA00" />
      <rect x="1" y="9.8" width="7.2" height="7.2" fill="#00A4EF" />
      <rect x="9.8" y="9.8" width="7.2" height="7.2" fill="#FFB900" />
    </svg>
  );
}
function AppleMark() {
  // Monochrome — inherits the button's text color via currentColor.
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.365 1.43c0 1.14-.42 2.2-1.11 2.98-.75.87-1.98 1.54-3.13 1.45-.14-1.12.4-2.29 1.06-3.03.73-.83 2.02-1.44 3.18-1.4zM20.44 17.03c-.56 1.29-1.24 2.57-2.31 3.62-.9.88-1.99 1.98-3.4 1.99-1.36.01-1.71-.9-3.56-.89-1.85.01-2.24.91-3.6.9-1.41-.01-2.44-1-3.34-1.88-2.5-2.47-4.4-6.98-1.83-10.13.9-1.11 2.35-1.81 3.87-1.83 1.42-.02 2.76.96 3.56.96.8 0 2.44-1.18 4.11-1.01.7.03 2.66.28 3.92 2.13-3.4 2.09-2.86 6.72.58 8.04z"
      />
    </svg>
  );
}

const SSO_PROVIDERS: { id: string; label: string; mark: ComponentType }[] = [
  { id: 'google',    label: 'Continue with Google',    mark: GoogleMark },
  { id: 'microsoft', label: 'Continue with Microsoft', mark: MicrosoftMark },
  { id: 'apple',     label: 'Continue with Apple',     mark: AppleMark },
];

// Loose email shape check — just enough to gate the "Continue" button so an empty
// or obviously-incomplete address doesn't advance. (Accounts are mocked here.)
function looksLikeEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

function LandingStep({ onNext }: { onNext: () => void }) {
  // The headline pops in; a beat later the body + sign-up block follow as one
  // group. Advancing is the admin's own action (any sign-up control) — no auto-jump.
  const [headingDone, setHeadingDone] = useState(false);
  const [email, setEmail] = useState('');
  // Email-validity feedback shown via an Alloy Tooltip (replacing the browser's
  // native constraint-validation bubble). An object, not a bare string, so each
  // failed attempt is a fresh value — the focus effect below re-fires even when
  // the message is unchanged. Empty stays valid: the demo advances without one.
  const [error, setError] = useState<{ text: string } | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const t = window.setTimeout(() => setHeadingDone(true), reduced ? 0 : 500);
    return () => window.clearTimeout(t);
  }, [reduced]);

  // Alloy's Tooltip shows on hover/focus, so surface a submit-time error by
  // focusing the field once the error is set (after the render that enables the
  // tooltip) — its focus handler then pops the bubble.
  useEffect(() => {
    if (error) emailRef.current?.focus();
  }, [error]);

  return (
    <LandingPanels>
      {/* Left panel — mirrors the proof panel's box (left half, logo-aligned
          margins, full height); its content is centered. Carries the landing's
          own mark so the greeting reads as one centered lockup. */}
      <LeftPanel>
        <LeftInner>
          <MarkBloom>
            <AgentMark
              mark="circle"
              size={MARK_SIZE}
              tone="auto"
              state="active"
              streamCount={0}
              aria-label="Ultron"
            />
          </MarkBloom>
          <Headline>{GREETING_HEADLINE}</Headline>
          {headingDone && (
            <SubGroup>
              <Sub>{GREETING_BODY}</Sub>

              {/* Page one collects only the email; the sign-in options (SSO +
                  email log-in) live on the account step that follows. */}
              <SignUp aria-label="Get started">
                <GetStartedForm
                  noValidate
                  onSubmit={(e: FormEvent) => {
                    e.preventDefault();
                    // Empty or valid → advance (no email required for the demo).
                    // Anything else → hold and flag it via the Alloy tooltip
                    // instead of the browser's native validation bubble.
                    if (email.trim() === '' || looksLikeEmail(email)) {
                      onNext();
                    } else {
                      setError({ text: "That doesn't look like an email — try you@company.com." });
                    }
                  }}
                >
                  <Tooltip content={error?.text ?? ''} placement="top" disabled={!error}>
                    <GlassEmailField
                      ref={emailRef}
                      aria-label="Work email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={e => { setEmail(e.target.value); if (error) setError(null); }}
                    />
                  </Tooltip>
                  <GetStartedButton
                    variant="primary"
                    size="lg"
                    type="submit"
                  >
                    Get started free
                  </GetStartedButton>
                </GetStartedForm>
              </SignUp>
            </SubGroup>
          )}
        </LeftInner>
      </LeftPanel>

      {/* Right panel — the proof card, full-height over the right half. */}
      {headingDone && <SocialProof />}
    </LandingPanels>
  );
}

// ── Step 2 — account (sign-in options) ───────────────────────────────────────

// The account page that follows the email capture: the third-party providers
// plus a plain email log-in, centered on the screen beneath the persistent
// identity mark (the root wraps it in StepIn like the other centered steps).
function AuthStep({ onNext }: { onNext: () => void }) {
  const [email, setEmail] = useState('');
  // Same email feedback as the landing step: an Alloy Tooltip in place of the
  // browser's native validation bubble, surfaced by focusing the field once the
  // error is set (Alloy's Tooltip shows on hover/focus). Empty still advances.
  const [error, setError] = useState<{ text: string } | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (error) emailRef.current?.focus();
  }, [error]);

  return (
    <>
      <Prompt>Create your account</Prompt>
      <PromptSub>Continue with your work account, or log in with email.</PromptSub>

      <AuthBlock aria-label="Create your account">
        <SsoStack>
          {SSO_PROVIDERS.map(p => {
            const Mark = p.mark;
            return (
              <SsoButton
                key={p.id}
                variant="secondary"
                size="lg"
                type="button"
                leadingArtwork={<Mark />}
                onClick={onNext}
              >
                {p.label}
              </SsoButton>
            );
          })}
        </SsoStack>

        <OrRow aria-hidden="true">
          <OrText>or log in with email</OrText>
        </OrRow>

        <EmailForm
          noValidate
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            // Empty or valid → advance; anything else → flag it via the Alloy
            // tooltip rather than the browser's native validation bubble.
            if (email.trim() === '' || looksLikeEmail(email)) {
              onNext();
            } else {
              setError({ text: "That doesn't look like an email — try you@company.com." });
            }
          }}
        >
          <EmailFieldWrap>
            <Tooltip content={error?.text ?? ''} placement="top" disabled={!error}>
              <GlassEmailField
                ref={emailRef}
                aria-label="Work email"
                placeholder="you@company.com"
                value={email}
                onChange={e => { setEmail(e.target.value); if (error) setError(null); }}
              />
            </Tooltip>
          </EmailFieldWrap>
          <SubmitButton
            variant="primary"
            size="md"
            type="submit"
            iconOnly
            aria-label="Continue"
          >
            <ArrowNarrowRightIcon size={16} />
          </SubmitButton>
        </EmailForm>

        <Fine>Creating an account means you agree to Teambridge's Terms and Privacy Policy.</Fine>
      </AuthBlock>
    </>
  );
}

// The proof panel beside the sign-up, read top to bottom as one flow: the live
// Ultron Index (the metric), one operator quote (the voice), then a quiet row of
// other operators (the breadth). No boxes — plain type on the page, separated by
// rhythm and a single footer hairline, so it doesn't read as content crammed
// into a card.
function SocialProof() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Loop the compliment cards — every few seconds the next operator pops in.
  useEffect(() => {
    const id = setInterval(
      () => setQuoteIndex(i => (i + 1) % OPERATOR_QUOTES.length),
      QUOTE_ROTATE_MS,
    );
    return () => clearInterval(id);
  }, []);

  const q = OPERATOR_QUOTES[quoteIndex];
  return (
    <ProofPanel>
      <ProofInner>
      <LiveUltronIndex />

      {/* Keyed by index so each rotation remounts the card and replays its
          pop-in entrance. */}
      <Quote key={quoteIndex}>
        <QuoteText>{`“${q.quote}”`}</QuoteText>
        <QuoteBy>
          <Avatar name={q.name} color={q.avatarColor} size="sm" />
          <QuoteMeta>
            <QuoteName>{q.name}</QuoteName>
            <QuoteRole>{`${q.role} · ${q.org}`}</QuoteRole>
          </QuoteMeta>
        </QuoteBy>
      </Quote>

      <LogoFooter>
        <ProofLabel>Trusted by frontline operators</ProofLabel>
        <LogoMarquee aria-label="Operators using Teambridge">
          {/* Two identical tracks sit end to end; the pair translates left by
              exactly one track's width, so the loop is seamless. The duplicate
              is aria-hidden so the list reads once to assistive tech. */}
          <LogoTrack>
            {CUSTOMER_LOGOS.map(logo => (
              <LogoImg key={logo.name} src={logo.src} alt={logo.name} loading="lazy" />
            ))}
          </LogoTrack>
          <LogoTrack aria-hidden="true">
            {CUSTOMER_LOGOS.map(logo => (
              <LogoImg key={`${logo.name}-dup`} src={logo.src} alt="" loading="lazy" />
            ))}
          </LogoTrack>
        </LogoMarquee>
      </LogoFooter>
      </ProofInner>
    </ProofPanel>
  );
}

// The "live" Ultron Index stat — the headline figure counts up on mount and a
// small dot breathes to read as a live feed. The number itself is mocked
// (ULTRON_INDEX_TOTAL); the treatment is what sells "live".
function LiveUltronIndex() {
  const value = useCountUp(ULTRON_INDEX_TOTAL, 1600);
  return (
    <StatBlock>
      <StatHeader>
        <LiveDot aria-hidden="true" />
        <StatKicker>Ultron Index · Live</StatKicker>
      </StatHeader>
      <StatValue>{value.toLocaleString('en-US')}</StatValue>
      <StatCaption>pieces of work Ultron performed this week</StatCaption>
    </StatBlock>
  );
}

// ── Step 2 — workplace ────────────────────────────────────────────────────────

// "Where do you work?" — a composer for the company website, with a fallback to
// typing the company name for admins who don't have a site.
function WorkplaceQuestion({ onAnswer }: { onAnswer: (a: IntroAnswers) => void }) {
  const [draft, setDraft] = useState('');

  const canSend = draft.trim().length > 0;
  const submit = () => {
    const value = draft.trim();
    if (!value) return;
    // Anything that doesn't look like a website still moves the flow along — it
    // just lands on the workforce pick instead of the site fly-through.
    onAnswer(looksLikeWebsite(value) ? { companyWebsite: value } : { failedWebsite: value });
  };

  return (
    <>
      <Prompt>Where do you work?</Prompt>
      <QSub>Paste your company website and I'll get a head start on turning things on.</QSub>

      <Composer onSubmit={(e: FormEvent) => { e.preventDefault(); submit(); }}>
        <FieldRow>
          <FieldIcon aria-hidden="true">
            <Link01Icon size={18} />
          </FieldIcon>
          <Field
            rows={1}
            value={draft}
            placeholder="yourcompany.com"
            aria-label="Company website"
            onChange={e => setDraft(e.target.value)}
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
        {/* No site → straight to the workforce pick. */}
        <TextButton type="button" onClick={() => onAnswer({ noWebsite: true })}>
          No website? Pick a workforce instead.
        </TextButton>
      </AltRow>
    </>
  );
}

// ── Step 3 — loading / understand the operation ───────────────────────────────

// The activation beats that fly through while Ultron turns things on (website
// path) — plain, non-technical: what's being switched on, not how.
const ACTIVATION_BEATS = [
  'Turning on scheduling',
  'Setting up pay',
  'Activating compliance',
  'Handing off the busywork',
];

// Pacing for the fly-through (ms): each beat works for a moment, then the next
// flies in; a short hold at the end before the step auto-advances.
const BEAT_MS = 820;

// Step 3 routes on the path taken on step 2: a pasted website runs the activation
// fly-through (which auto-advances to the questions); no website — or something
// that didn't look like one — lands on a single workforce-type pick.
function LoadingStep({
  website,
  failedWebsite,
  onDone,
}: {
  website?: string;
  failedWebsite?: string;
  onDone: (a: IntroAnswers) => void;
}) {
  if (website) return <SiteParse website={website} onDone={onDone} />;
  return <WorkforcePick failedWebsite={failedWebsite} onDone={onDone} />;
}

// Website path — a self-running fly-through: Ultron turns things on one beat at a
// time, then hands off to the questions on its own. There's no button; the
// animation IS the step.
function SiteParse({ website, onDone }: { website: string; onDone: (a: IntroAnswers) => void }) {
  const reduced = usePrefersReducedMotion();
  const { name } = companyFromUrl(website);
  const total = ACTIVATION_BEATS.length;

  // `active` = the 1-based beat currently working (everything before it is on).
  // `allDone` flips once the last beat settles; then the step auto-advances.
  const [active, setActive] = useState(1);
  const [allDone, setAllDone] = useState(false);

  useEffect(() => {
    if (allDone) {
      // Hold the settled bar just long enough for the finish to register, then
      // hand off — the flow's own exit fade carries the step out gracefully.
      const t = window.setTimeout(() => onDone({}), reduced ? 400 : 1600);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(
      () => (active >= total ? setAllDone(true) : setActive(a => a + 1)),
      reduced ? 140 : BEAT_MS,
    );
    return () => window.clearTimeout(t);
  }, [active, allDone, reduced]); // eslint-disable-line react-hooks/exhaustive-deps

  const beatLabel = allDone ? 'All set.' : ACTIVATION_BEATS[active - 1];

  return (
    <StepIn>
      <Prompt>{`Turning on ${name}`}</Prompt>
      <PromptSub>Hang tight — I'm getting your workspace ready.</PromptSub>

      {/* The activation run, one segment per beat: done segments hold full,
          the working segment fills continuously across its beat, upcoming ones
          wait empty. The current beat's label shimmers under the bar beside a
          step counter; on completion the fills settle with one soft pulse
          before the step fades out. */}
      <ProgressWrap role="status" aria-live="polite">
        <SegmentRow
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={allDone ? total : active - 1}
          aria-label={`Step ${Math.min(active, total)} of ${total}`}
          $complete={allDone}
        >
          {ACTIVATION_BEATS.map((beat, i) => {
            const status = allDone || i + 1 < active ? 'done' : i + 1 === active ? 'working' : 'pending';
            return (
              <Segment key={beat} data-status={status}>
                {status !== 'pending' && <SegmentFill $working={status === 'working'} />}
              </Segment>
            );
          })}
        </SegmentRow>
        <ProgressMeta>
          <ProgressLabel key={beatLabel} $working={!allDone}>
            {allDone && <CheckCircleIcon size={14} />}
            {beatLabel}
          </ProgressLabel>
          <ProgressCount>{`${allDone ? total : active} of ${total}`}</ProgressCount>
        </ProgressMeta>
      </ProgressWrap>
    </StepIn>
  );
}

// One-tap workforce examples shown as pills above the free-text composer —
// shortcuts for the most common answers, not an exhaustive taxonomy.
const WORKFORCE_SUGGESTIONS: { icon: ComponentType<{ size?: number }>; label: string }[] = [
  { icon: MedicalCrossIcon, label: 'Travel nurses' },
  { icon: Microphone02Icon, label: 'Event staff' },
  { icon: Lock01Icon, label: 'Security guards' },
  { icon: PackageIcon, label: 'Warehouse temps' },
];

// No-website (or didn't-resolve) path — describe the workforce in the admin's
// own words. A composer (mirroring the step-2 website composer) with a row of
// one-tap suggestion pills above it; a pill submits its label directly.
function WorkforcePick({
  failedWebsite,
  onDone,
}: {
  failedWebsite?: string;
  onDone: (a: IntroAnswers) => void;
}) {
  const [draft, setDraft] = useState('');

  const canSend = draft.trim().length > 0;
  const submit = () => {
    const value = draft.trim();
    if (!value) return;
    onDone({ workforceType: value });
  };

  return (
    <StepIn>
      {failedWebsite && <MissNote>No problem — let's set it up together.</MissNote>}
      <Prompt>What kind of workforce are you running?</Prompt>
      <PromptSub>Say it in your own words — or grab one of these.</PromptSub>

      <PillRow>
        {WORKFORCE_SUGGESTIONS.map(({ icon: Icon, label }) => (
          <SuggestionPill
            key={label}
            type="button"
            onClick={() => onDone({ workforceType: label })}
          >
            <Icon size={16} />
            {label}
          </SuggestionPill>
        ))}
      </PillRow>

      <Composer onSubmit={(e: FormEvent) => { e.preventDefault(); submit(); }}>
        <FieldRow>
          <Field
            rows={1}
            value={draft}
            placeholder="e.g. home-care aides across three cities"
            aria-label="Describe your workforce"
            onChange={e => setDraft(e.target.value)}
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
    </StepIn>
  );
}

// ── Step 4 — workforce questions (both paths) ─────────────────────────────────

// Three quick, high-level questions, one at a time — each a vertical stack of
// selectable cards. Answering the last one hands the collected answers up.
function WorkforceQuestionsStep({ onComplete }: { onComplete: (a: IntroAnswers) => void }) {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const collected = useRef<IntroAnswers>({});
  const q = WORKFORCE_QUESTIONS[index];

  const choose = (option: WorkforceOption) => {
    collected.current = { ...collected.current, [q.key]: option.title };
    const next = index + 1;
    if (next >= WORKFORCE_QUESTIONS.length) onComplete(collected.current);
    else setIndex(next);
  };

  return (
    <StepIn key={q.key}>
      <Progress
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={WORKFORCE_QUESTIONS.length}
        aria-valuenow={index + 1}
        aria-label={`Question ${index + 1} of ${WORKFORCE_QUESTIONS.length}`}
      >
        {WORKFORCE_QUESTIONS.map((wq, i) => (
          <Bar key={wq.key} data-filled={i <= index || undefined} />
        ))}
      </Progress>
      <Prompt>{q.prompt}</Prompt>
      <PromptSub>{q.sub}</PromptSub>

      <OptionColumn role="radiogroup" aria-label={q.prompt}>
        {q.options.map((opt, i) => {
          const Icon = opt.icon;
          return (
            <RowCard
              key={opt.id}
              type="button"
              role="radio"
              aria-checked={false}
              style={{ animationDelay: reduced ? '0ms' : `${i * 70}ms` }}
              onClick={() => choose(opt)}
            >
              <OptionIcon aria-hidden="true">
                <Icon size={20} />
              </OptionIcon>
              <RowText>
                <OptionTitle>{opt.title}</OptionTitle>
                <OptionDetail>{opt.caption}</OptionDetail>
              </RowText>
            </RowCard>
          );
        })}
      </OptionColumn>
    </StepIn>
  );
}

// ── Steps 5 & 6 — roster / schedule uploads ───────────────────────────────────

// Copy for the two upload steps — same shape, different subject. Uploading is
// optional (a "Skip for now" escape hatch advances without a file), so the demo
// never dead-ends on a file the tester doesn't have handy.
const UPLOAD_CONFIG = {
  roster: {
    prompt: 'Upload your roster',
    sub: "Drop in your team roster and I'll bring your people in for you.",
    title: 'Choose your roster or drag & drop it here.',
    description: 'Any spreadsheet or document works.',
    accept: '.csv,.xlsx,.xls,.pdf',
  },
  schedule: {
    prompt: 'Upload your schedule',
    sub: "Drop in your current schedule and I'll turn it into shifts for you.",
    title: 'Choose your schedule or drag & drop it here.',
    description: 'Any spreadsheet or document works.',
    accept: '.csv,.xlsx,.xls,.pdf',
  },
} as const;

// The uploader is the step's one primary action: choosing a file IS the CTA, so
// picking one hands off on its own (after a beat to show it landed). "Skip for
// now" is the quiet secondary out.
function UploadStep({ kind, onDone }: { kind: 'roster' | 'schedule'; onDone: (file: { name: string } | null) => void }) {
  const cfg = UPLOAD_CONFIG[kind];
  const reduced = usePrefersReducedMotion();
  const [file, setFile] = useState<{ name: string; type?: string } | null>(null);
  const advanced = useRef(false);

  const handleSelect = (f: File) => {
    if (advanced.current) return;
    advanced.current = true;
    setFile({ name: f.name, type: f.type });
    // Let the "landed" state show for a beat, then hand off automatically —
    // carrying the file name so the app can recap what came in.
    window.setTimeout(() => onDone({ name: f.name }), reduced ? 250 : 1100);
  };

  return (
    <StepIn key={kind}>
      <Prompt>{cfg.prompt}</Prompt>
      <PromptSub>{cfg.sub}</PromptSub>

      <UploadWrap>
        <FileUploader
          variant="area"
          accept={cfg.accept}
          state={file ? 'complete' : 'empty'}
          file={file}
          title={cfg.title}
          description={cfg.description}
          onFileSelect={handleSelect}
        />
      </UploadWrap>

      <AltRow>
        <TextButton type="button" onClick={() => onDone(null)}>
          Skip for now
        </TextButton>
      </AltRow>
    </StepIn>
  );
}

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

// ── Hooks ────────────────────────────────────────────────────────────────────

// Counts from 0 up to `target` over `durationMs` on mount (easeOutCubic), so the
// Ultron Index reads as a live tally landing on its figure. Honours reduced
// motion — jumps straight to the final value, no animation.
function useCountUp(target: number, durationMs: number): number {
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(reduced ? target : 0);

  useEffect(() => {
    if (reduced) {
      setValue(target);
      return;
    }
    let raf = 0;
    let start: number | null = null;
    const tick = (now: number) => {
      if (start === null) start = now;
      const p = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = window.requestAnimationFrame(tick);
    };
    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, [target, durationMs, reduced]);

  return value;
}

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
   centers the glyph; content-primary fill follows the theme. A quiet button:
   clicking it restarts the demo from the landing. */
const LogoCorner = styled.button`
  position: absolute;
  top: var(--space-5);
  left: var(--space-5);
  z-index: 2;
  width: calc(var(--space-8) + var(--space-1));
  height: calc(var(--space-8) + var(--space-1));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--color-content-primary);
  cursor: pointer;
  border-radius: var(--radius-md);

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }
`;

/* Back control, pinned to the frame's bottom-left above the backdrop — steps
   out of the questions run without scrolling with the content. */

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

// The Ultron identity for the numbered steps — centered above the single column.
// (The landing composes its own mark inside its left panel.)
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

/* Wraps the active step. On exit it fades away; the incoming step then plays
   its own entrance (the greeting types in; intent/questions use StepIn), so
   each transition reads as one step leaving before the next arrives.
   Opacity ONLY — animating transform here would make Content the containing
   block for fixed descendants, and the landing's two panels are position:fixed
   on wide screens: they'd snap from viewport-anchored to content-anchored and
   visibly jump for the length of the exit. */
const stepExit = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; }
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

/* The landing is two symmetric panels. On wide screens each is a fixed, full-
   height half of the viewport (see LeftPanel / ProofPanel), so this wrapper only
   governs the narrow case, where the panels drop back into a centered stack. */
const LandingPanels = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
  width: 100%;
`;

/* Left panel — mirrors ProofPanel's box: full height over the left half on wide
   screens, margins aligned with the Teambridge logo (space-5 top / left /
   bottom). Content is centered horizontally and vertically. Drops back into the
   stacked flow on narrow. */
const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--space-8);

  @media (min-width: 801px) {
    position: fixed;
    top: var(--space-5);
    left: var(--space-5);
    bottom: var(--space-5);
    right: calc(50vw + var(--space-3));
    z-index: 1;
    overflow-y: auto;
  }

  @media (max-width: 800px) {
    width: 100%;
    max-width: 400px;
  }
`;

/* Caps the left content's measure and centers it — mirrors ProofInner. */
const LeftInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-5);
  width: 100%;
  max-width: 400px;
`;

/* The subtext block fades in (as one group) after the headline finishes typing. */
const subFadeIn = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* The body + sign-up block, fading in as one group under the headline once it
   settles. Centered within the left panel. */
const SubGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  width: 100%;
  animation: ${subFadeIn} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* ── Landing sign-up ─────────────────────────────────────────────────────────
   The sign-up block: SSO buttons, an "or" rule, and an email row. FLAGGED — a
   shared `SignUp` / SSO-button set would be a good Alloy add. */
const SignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--space-4);
  width: 100%;
  max-width: 360px;
`;

const SsoStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;

/* Full-width SSO button — the brand mark leads, label sits beside it. `&&` wins
   over Button's own width rule. */
const SsoButton = styled(Button)`
  && {
    width: 100%;
    ${liquidGlass}
  }
`;

/* "or sign up with email" — the label centered on a hairline rule. */
const OrRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--color-border-opaque);
  }
`;

const OrText = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`;

/* Landing email capture — the field stacked over a full-width CTA, reading as
   one compact "get started" unit. */
const GetStartedForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
`;

/* Full-width CTA under the email field. Keeps Alloy's default primary button
   fill (no glass override) so it reads as a standard primary action; `&&` only
   stretches it to the field's width. */
const GetStartedButton = styled(Button)`
  && {
    width: 100%;
  }
`;

/* The account step's sign-in block — the landing's sign-up column, re-centered
   under the step prompt with a little air above it. */
const AuthBlock = styled(SignUp)`
  margin-top: var(--space-2);
`;

const EmailForm = styled.form`
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
  width: 100%;
`;

const EmailFieldWrap = styled.div`
  flex: 1;
  min-width: 0;
  /* Flex so the Alloy Tooltip's inline-flex wrapper stretches to fill, keeping
     the email field full-width beside the submit button. */
  display: flex;
  & > * { flex: 1; min-width: 0; }
`;

/* Liquid-glass email field — the glass tint sits on the Alloy field's shell
   (the element that owns the border and radius) and the inner input goes
   transparent so it reads as one frosted control. Styling the root instead
   would draw a second border around the shell's own. Alloy's focus-within
   border/ring rules are more specific, so focus states still win. */
const GlassEmailField = styled(EmailField)`
  && [class*='shell'] {
    ${liquidGlass}
  }
  && input {
    background: transparent;
  }
`;

/* Square, icon-only submit — pinned to the 40px (space-10) email-field height so
   the field + button read as one paired control. `&&` beats Button's own
   iconOnly size rule (36px at md). */
const SubmitButton = styled(Button)`
  && {
    flex-shrink: 0;
    width: var(--space-10);
    height: var(--space-10);
  }
`;

const Fine = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  text-align: center;
`;

/* ── Landing proof panel ──────────────────────────────────────────────────────
   The proof block, wrapped in a frosted-glass card that lifts off the ambient
   particle backdrop. On wide screens it's a full-height panel pinned to the
   right half of the viewport, with margins aligned to the Teambridge logo
   (space-5 top / right / bottom). On narrow it drops back into the stacked flow
   as an ordinary card. */
const ProofPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* Frosted-glass wrapper: a translucent tint of the surface (theme-aware via
     color-mix on the semantic token) plus a backdrop blur, so the ambient
     particles show through softly. */
  padding: var(--space-10);
  background: color-mix(in srgb, var(--color-bg-primary) 72%, transparent);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  border: 1px solid var(--color-border-transparent);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-below-md);
  animation: ${subFadeIn} var(--duration-slow) var(--ease-out) both;

  /* Wide: full-height panel filling the right half. Logo-aligned outer margin
     (space-5); its inner edge stops just past the centre line, leaving a small
     gutter so the two halves don't collide. */
  @media (min-width: 801px) {
    position: fixed;
    top: var(--space-5);
    right: var(--space-5);
    bottom: var(--space-5);
    left: calc(50vw + var(--space-3));
    z-index: 1;
    overflow-y: auto;
    /* The full-height panel can afford more breathing room than the card. */
    padding: var(--space-12);
  }

  /* Narrow: an ordinary card in the stacked flow. */
  @media (max-width: 800px) {
    width: 100%;
    max-width: 400px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* Caps the proof content's measure inside the wide panel and centers it, so a
   half-viewport card doesn't stretch the lines too far. On wide screens the
   column fills the panel's full height and spreads its three blocks — stat at
   the top, quote in the middle, logos anchoring the foot — so the tall panel
   reads composed instead of clustered at the center. */
const ProofInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  width: 100%;

  @media (min-width: 801px) {
    flex: 1;
    justify-content: space-between;
  }
`;

/* The live stat — plain on the page (no box), so the big figure carries the
   top of the panel like a heading rather than a crammed card. */
const StatBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`;

const StatHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

/* Breathing dot — signals a live feed. Steadies under reduced motion. */
const liveBreathe = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.35; transform: scale(0.8); }
`;

const LiveDot = styled.span`
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-success-fill);
  flex-shrink: 0;
  animation: ${liveBreathe} 2s var(--ease-default) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const StatKicker = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`;

const StatValue = styled.span`
  font-family: var(--font-sans);
  /* Anchors the panel now that there's no card around it. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Hold digit width so the count-up doesn't jitter the caption below. */
  font-variant-numeric: tabular-nums;
`;

const StatCaption = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`;

/* Customer wordmarks — muted text stand-ins for logos (no real trademarks), set
   apart as a quiet footer under the quote by a single hairline. */
const LogoFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border-opaque);
`;

const ProofLabel = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`;

/* Slides one full track-width left, then snaps back — seamless because a second
   identical track trails the first, so the reset lands on an identical frame. */
const logoScroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`;

/* Viewport for the marquee: clips the overflow and fades both edges so wordmarks
   dissolve in and out rather than popping at a hard border. */
const LogoMarquee = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent,
    #000 var(--space-5),
    #000 calc(100% - var(--space-5)),
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    #000 var(--space-5),
    #000 calc(100% - var(--space-5)),
    transparent
  );

  /* Pause on hover so a reader can settle on a name. */
  &:hover > * {
    animation-play-state: paused;
  }
`;

/* One copy of the wordmark list, laid out in a row. Two of these translate as a
   unit; each is exactly its content width, so -100% swaps track A for track B. */
const LogoTrack = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: var(--space-6);
  padding-right: var(--space-6);
  animation: ${logoScroll} 32s linear infinite;
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* Client logo image. Each asset has its own aspect ratio, so height is fixed and
   width tracks it. Slate theme — the brand marks are desaturated to grey and
   tinted toward the slate content color, then held at reduced opacity, so a row of
   differently-colored logos reads as one cohesive, muted trust strip rather than a
   clash of brand palettes. */
const LogoImg = styled.img`
  height: 30px;
  width: auto;
  flex-shrink: 0;
  display: block;
  object-fit: contain;
  opacity: 0.62;
  filter: grayscale(1) brightness(0.55) sepia(0.12) hue-rotate(180deg);
  transition: opacity var(--duration-fast, 150ms) var(--ease-out, ease),
    filter var(--duration-fast, 150ms) var(--ease-out, ease);

  /* On hover the marquee pauses (see LogoMarquee); lift the logo the pointer is
     over back to its full-color self. */
  &:hover {
    opacity: 1;
    filter: none;
  }
`;

/* One compliment card at a time — the keyed remount replays this pop-in as the
   loop advances. */
const quotePop = keyframes`
  from { opacity: 0; transform: translateY(12px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;

const Quote = styled.figure`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin: 0;
  /* Room for the tallest card (four relaxed text-md lines plus the byline) —
     raw px deliberately, so rotating cards of different lengths never reflow
     the spread panel around them. */
  min-height: 152px;
  animation: ${quotePop} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const QuoteText = styled.blockquote`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`;

const QuoteBy = styled.figcaption`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`;

const QuoteMeta = styled.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`;

const QuoteName = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`;

const QuoteRole = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
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
  max-width: 560px;
`;

/* Step swap — the intent + question steps ease in when they mount. */
const stepIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const StepIn = styled.div<{ $wide?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  width: 100%;
  /* $wide widens the step for the workforce-type grid so its three cards have
     room to keep each caption on a single line. */
  max-width: ${p => (p.$wide ? '1060px' : '720px')};
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

/* Suggestion pills — one-tap workforce examples above the composer. The same
   liquid-glass family as the composer below them, shrunk to chip size. */
const PillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-4);
`;

const SuggestionPill = styled.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--space-8);
  padding: 0 var(--space-3);
  ${liquidGlass}
  border-radius: var(--radius-full);
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
  transition: color var(--duration-fast) var(--ease-default),
              border-color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              box-shadow var(--duration-fast) var(--ease-default),
              transform var(--duration-fast) var(--ease-default);

  /* Leading icon reads a step quieter than the label. */
  svg {
    color: var(--color-content-tertiary);
    flex-shrink: 0;
  }

  &:hover {
    ${liquidGlassRaised}
    color: var(--color-content-primary);
    transform: translateY(-1px);

    svg {
      color: var(--color-content-primary);
    }
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover,
    &:active {
      transform: none;
    }
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

/* ── Step 3 — activation progress ────────────────────────────────────────────
   The site-path processing run: one segment per activation beat, breaking the
   bar evenly — done segments hold full, the working one fills continuously
   across its beat, upcoming ones wait empty. Monochrome content-primary fill
   (dark bar on light surfaces; tracks the theme), no card chrome. */
const cardPop = keyframes`
  from { opacity: 0; transform: translateY(10px) scale(0.985); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;

/* Light band sweeping through the working label (background-clip text). */
const shimmer = keyframes`
  from { background-position: 200% 0; }
  to   { background-position: -200% 0; }
`;

/* The working segment's fill draws across its beat, left to right. */
const segGrow = keyframes`
  from { width: 0; }
  to   { width: 100%; }
`;

/* Completion settle — every fill breathes once as the run lands. */
const segSettle = keyframes`
  0%   { opacity: 1; }
  35%  { opacity: 0.45; }
  100% { opacity: 1; }
`;

/* Each new beat label rises in under the bar. */
const labelIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const ProgressWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  max-width: 360px;
  margin-top: var(--space-5);
`;

/* One equal-width cell per activation beat. On completion the fills settle
   with a single soft pulse before the step fades out. */
const SegmentRow = styled.div<{ $complete?: boolean }>`
  display: flex;
  gap: var(--space-1);
  width: 100%;

  ${p => p.$complete && css`
    & > * > * {
      animation: ${segSettle} 900ms ${SMOOTH_EASE};
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    & > * > * { animation: none; }
  }
`;

const Segment = styled.div`
  flex: 1;
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  overflow: hidden;
`;

/* The fill inside a segment: done segments hold full; the working segment
   (remounted per beat) draws in across the beat so progress reads as
   continuous work, not discrete jumps. */
const SegmentFill = styled.div<{ $working?: boolean }>`
  height: 100%;
  width: 100%;
  border-radius: var(--radius-full);
  background: var(--color-content-primary);

  ${p => p.$working && css`
    animation: ${segGrow} ${BEAT_MS}ms ${SMOOTH_EASE} both;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* Label + step counter, sharing the bar's width. */
const ProgressMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  width: 100%;
`;

const ProgressCount = styled.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`;

const ProgressLabel = styled.span<{ $working?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
  animation: ${labelIn} var(--duration-base) ${SMOOTH_EASE} both;

  /* The settled state's check reads as the finish line. */
  svg {
    flex-shrink: 0;
    color: var(--color-success-content);
  }

  ${p => p.$working && css`
    /* Working shimmer — a light band sweeping through the muted label. Both
       gradient stops are semantic tokens, so light and dark themes track. */
    color: transparent;
    background: linear-gradient(
      90deg,
      var(--color-content-tertiary) 0%,
      var(--color-content-primary) 50%,
      var(--color-content-tertiary) 100%
    );
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    animation: ${labelIn} var(--duration-base) ${SMOOTH_EASE} both,
      ${shimmer} 1.6s linear infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    ${p => p.$working && css`
      color: var(--color-content-secondary);
      background: none;
    `}
  }
`;

/* No-website path note (shown only when a pasted entry didn't look like a site). */
const MissNote = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 480px;
`;

/* ── Steps 5 & 6 — uploads ───────────────────────────────────────────────────
   Frames the Alloy FileUploader drop zone to the centered column width. */
/* The drop area wears the shared liquid-glass surface (tint + blur + edge
   highlight) in place of Alloy's opaque fill. `border-style: dashed` is
   restated after the glass mixin (which sets a solid border) so the area keeps
   reading as a drop zone. Scoped to :not([data-drag-over]) so Alloy's
   drag-over feedback (secondary fill + focus border) still wins mid-drag. */
const UploadWrap = styled.div`
  width: 100%;
  max-width: 520px;
  margin-top: var(--space-2);
  text-align: left;

  & [class*='area']:not([data-drag-over]) {
    ${liquidGlass}
    border-style: dashed;
  }
`;

/* ── Step 4 — workforce questions ────────────────────────────────────────────
   A vertical stack of selectable option cards (full-width rows), staggered in. */
/* Step-4 progress — one thin bar per question, filled up to the current one. */
const Progress = styled.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;
  max-width: 140px;
`;

const Bar = styled.span`
  flex: 1;
  /* Hairline — deliberately below the 4px grid for a thin progress line. */
  height: 2px;
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  transition: background var(--duration-base) var(--ease-out);

  &[data-filled] {
    background: var(--color-content-primary);
  }
`;

const OptionColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 480px;
  margin-top: var(--space-3);
`;

/* Full-width option row — a horizontal SelectableCard. Reuses OptionIcon /
   OptionTitle / OptionDetail; the icon's stacked-card bottom margin is dropped
   here since it sits inline. */
const RowCard = styled.button`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  text-align: left;
  ${liquidGlass}
  border-radius: var(--radius-lg);
  cursor: pointer;
  /* fill "backwards" (not "both"): holds the pre-entrance state during the
     stagger delay, but releases transform once the pop finishes — a filled
     animation would keep pinning transform and the hover lift below never
     applies. */
  animation: ${cardPop} var(--duration-base) ${SMOOTH_EASE} backwards;
  transition: border-color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              box-shadow var(--duration-fast) var(--ease-default),
              transform var(--duration-fast) var(--ease-default);

  ${OptionIcon} {
    margin-bottom: 0;
  }

  &:hover {
    ${liquidGlassRaised}
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: var(--shadow-below-low);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    &:hover,
    &:active {
      transform: none;
    }
  }
`;

const RowText = styled.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`;

/* Composer — a rounded bar framing the input + send button. Mirrors the stage-1
   composer so the two read as one family. FLAGGED for an Alloy `Composer`. */
const Composer = styled.form`
  width: 100%;
  max-width: 520px;
  margin-top: var(--space-2);
  ${liquidGlass}
  border-radius: var(--radius-xl);
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

// Quiet inline text button — the "no website" / "enter a website" fallback.
const TextButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: var(--space-6);
  border: none;
  background: transparent;
  padding: 0 var(--space-2);
  border-radius: var(--radius-md);
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-tertiary);
  transition: color var(--duration-fast) var(--ease-default);

  &:hover {
    color: var(--color-content-primary);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }
`;
