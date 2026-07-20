/* Root gate — for now this renders ONLY the self-serve onboarding flow.
 *
 * The live Ultron app (`./App`) used to load once provisioning completed, via an
 * `#app` hash gate + `onEnterApp` handoff. That handoff — and the Ultron event
 * pages it led to — is disabled for now: the wizard simply stops on Stage 5's
 * "Your account is ready" screen. Nothing in `./App` or `./pages/Ultron` was
 * removed; to re-enable, restore the `entered`/`#app` gate here (see git
 * history) and re-add the "Enter your account" CTA in Stage5Provision. */

import { OnboardingApp } from './pages/Onboarding';

export default function Root() {
  return <OnboardingApp />;
}
