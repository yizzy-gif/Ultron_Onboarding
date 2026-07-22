/* Root gate — plays the self-serve onboarding flow, then hands off to the live
 * Ultron app once onboarding completes.
 *
 * The onboarding flow ends on the schedule-upload step; finishing it flips
 * `entered`, swapping OnboardingApp for the Ultron app (`./App`). The flag is
 * kept in sessionStorage so a refresh past onboarding stays in the app — we
 * can't gate on the URL hash, since the app's own hash-sync overwrites it with
 * its nav state (`#ultron/...`). The Ultron screen is kept in sync with the
 * source-of-truth Ultron repo (~/Documents/MyClaudeFolder/Ultron). */

import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { OnboardingApp } from './pages/Onboarding';
import type { IntroAnswers } from './pages/Onboarding';
import App from './App';

const SMOOTH = 'cubic-bezier(0.22, 1, 0.36, 1)';

// The primary + secondary nav fade and slide in from the left…
const navSlideIn = keyframes`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`;
// …then the content fades and rises into place.
const contentFadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// One-time entrance as the app mounts after onboarding. `display: contents` so
// the wrapper adds no box of its own — AppShellRoot still sizes itself (100vh) —
// while its rules still reach the shell's descendants. Targets are semantic
// (aria-labels / <main>), so nothing depends on hashed class names.
const AppEnter = styled.div`
  display: contents;

  nav[aria-label='Primary navigation'] {
    animation: ${navSlideIn} 460ms ${SMOOTH} both;
  }
  nav[aria-label='Secondary navigation'] {
    animation: ${navSlideIn} 500ms ${SMOOTH} 90ms both;
  }
  main {
    animation: ${contentFadeIn} 520ms ease-out 220ms both;
  }

  @media (prefers-reduced-motion: reduce) {
    nav[aria-label='Primary navigation'],
    nav[aria-label='Secondary navigation'],
    main {
      animation: none;
    }
  }
`;

const ENTERED_KEY = 'tb:onboarding-complete';

export default function Root() {
  const [entered, setEntered] = useState(() => {
    try { return window.sessionStorage.getItem(ENTERED_KEY) === '1'; } catch { return false; }
  });
  // Everything onboarding collected, handed to the app so its welcome landing can
  // recap the setup. Kept in memory only (not persisted) — the welcome recap is a
  // one-time handoff, so a refresh past onboarding lands on Ultron's normal home.
  const [answers, setAnswers] = useState<IntroAnswers | null>(null);

  const enterApp = (collected: IntroAnswers) => {
    // Persist across refreshes (the app's hash-sync would clobber a URL flag).
    try { window.sessionStorage.setItem(ENTERED_KEY, '1'); } catch { /* ignore */ }
    setAnswers(collected);
    setEntered(true);
  };

  // Restart the demo from the top of onboarding (wired to the primary-nav
  // Settings icon). Drop the entered flag and hard-reload, so everything —
  // the Ultron store, the URL hash, IntroFlow's own state — comes up fresh on
  // the onboarding landing rather than resuming mid-flow.
  const restartOnboarding = () => {
    try { window.sessionStorage.removeItem(ENTERED_KEY); } catch { /* ignore */ }
    window.location.hash = '';
    window.location.reload();
  };

  return entered ? (
    <AppEnter>
      <App introAnswers={answers ?? undefined} onRestartOnboarding={restartOnboarding} />
    </AppEnter>
  ) : (
    <OnboardingApp onEnterApp={enterApp} />
  );
}
