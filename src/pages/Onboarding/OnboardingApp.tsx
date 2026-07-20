/* ─────────────────────────────────────────────────────────────────────────────
   OnboardingApp — the self-serve provisioning flow that sits ABOVE the Ultron
   page as the entry layer for a customer admin setting up a Teambridge account.

   Owns the whole flow's state:
     • the intro layer vs the wizard's provisioning run,
     • the chosen template (picked on the intro build step),
     • the shared provisioning log — the single source of truth.

   Each surface is a fold over that log; navigation never mutates it except
   through the log store's append/undo/resolve/exec. On completion the flow
   drops into the real app via `onEnterApp`.
   ───────────────────────────────────────────────────────────────────────────── */

import { useCallback, useRef, useState } from 'react';
import { WizardShell } from './WizardShell';
import { IntroFlow } from './IntroFlow';
import { useProvisioningLog } from './logStore';
import type { Template } from './types';
import { Stage5Provision } from './stages/Stage5Provision';

interface OnboardingAppProps {
  /** Called when provisioning completes — used to drop the admin into the live
   *  Ultron app. Optional for now: the Ultron event pages are disabled, so the
   *  flow rests on the provisioning completion screen when this is omitted. */
  onEnterApp?: () => void;
}

export function OnboardingApp({ onEnterApp }: OnboardingAppProps) {
  // The flow opens on the intro layer (greeting → intent → questions → build →
  // augment). The build step is where Ultron recommends a starting-point
  // template; picking one seeds the account and splits the chat into the inline
  // augment canvas. Provisioning from there drops into the wizard's run —
  // augment is the last stop before the account is created.
  const [phase, setPhase] = useState<'intro' | 'wizard'>('intro');

  // The shared provisioning log — the spine of every surface.
  const store = useProvisioningLog();

  // The chosen template seeds the log exactly once. A ref guards against
  // re-seeding when the admin steps back to the intro and picks again.
  const seededTemplateId = useRef<string | null>(null);

  const chooseTemplate = useCallback(
    (tpl: Template) => {
      if (seededTemplateId.current !== tpl.id) {
        // Re-seeding a different template: reset the log first so we don't stack
        // two templates' worth of drafts.
        if (seededTemplateId.current) store.reset();
        tpl.seed.forEach(s =>
          store.append({
            op: s.op,
            target: { domain: s.domain, ref: s.ref, label: s.label },
            payload: s.payload,
            source: 'template',
          }),
        );
        seededTemplateId.current = tpl.id;
      }
    },
    [store],
  );

  // The intro layer plays before the wizard — greeting through the inline
  // augment canvas (where the account is shaped). It owns its own full-screen
  // chrome (no stepper/title), so it renders outside WizardShell. Provisioning
  // from the augment canvas opens the wizard at the run.
  if (phase === 'intro') {
    return (
      <IntroFlow
        store={store}
        onSeedTemplate={chooseTemplate}
        onComplete={() => setPhase('wizard')}
      />
    );
  }

  // The provisioning run reuses the wide Ultron surface; back drops to the
  // intro layer, where the account was shaped in the augment canvas.
  return (
    <WizardShell current={1} wide>
      <Stage5Provision store={store} onDone={onEnterApp} onBack={() => setPhase('intro')} />
    </WizardShell>
  );
}
