/* Root gate — the onboarding flow sits ABOVE the existing Ultron app.
 *
 * A fresh admin lands in the self-serve onboarding wizard; once provisioning
 * completes (or if the URL already points past it via `#app`), we drop into the
 * live Ultron app. This is the one place the two experiences are stitched
 * together — everything below `App` is the existing product, untouched. */

import { useState } from 'react';
import App from './App';
import { OnboardingApp } from './pages/Onboarding';

export default function Root() {
  // `#app` (set on completion) skips onboarding on reload — deep links into the
  // provisioned product survive a refresh, matching the app's hash-nav approach.
  const [entered, setEntered] = useState(() => window.location.hash.startsWith('#app'));

  if (entered) return <App />;

  return (
    <OnboardingApp
      onEnterApp={() => {
        window.location.hash = '#app';
        setEntered(true);
      }}
    />
  );
}
