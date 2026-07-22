/* ─────────────────────────────────────────────────────────────────────────────
   OnboardingApp — the self-serve onboarding flow that sits ABOVE the live Ultron
   app as the entry layer for a customer admin setting up a Teambridge account.

   The flow runs entirely inside IntroFlow (sign-up → workplace → understand →
   workforce questions → roster upload → schedule upload). When the last step
   completes, `onComplete` fires and the caller drops the admin into the live
   Ultron app via `onEnterApp`.
   ───────────────────────────────────────────────────────────────────────────── */

import { IntroFlow } from './IntroFlow';
import type { IntroAnswers } from './IntroFlow';

interface OnboardingAppProps {
  /** Called when onboarding completes — drops the admin into the live Ultron app,
   *  carrying everything collected across the flow so the app can recap the
   *  setup. Optional so the flow can be previewed standalone (it simply rests on
   *  the final step when omitted). */
  onEnterApp?: (answers: IntroAnswers) => void;
}

export function OnboardingApp({ onEnterApp }: OnboardingAppProps) {
  return <IntroFlow onComplete={answers => onEnterApp?.(answers)} />;
}
