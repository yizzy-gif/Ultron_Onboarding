/* ─────────────────────────────────────────────────────────────────────────────
   OnboardingApp — the self-serve provisioning flow that sits ABOVE the Ultron
   page as the entry layer for a customer admin setting up a Teambridge account.

   Owns the whole flow's state:
     • the current wizard stage (1–5),
     • the intake signals (stage 1),
     • the chosen template (stage 2),
     • the shared provisioning log (stages 3–5) — the single source of truth.

   Each stage is a fold over that log; navigation never mutates it except through
   the log store's append/undo/resolve/exec. On completion the flow drops into
   the real app via `onEnterApp`.
   ───────────────────────────────────────────────────────────────────────────── */

import { useCallback, useRef, useState } from 'react';
import { WizardShell } from './WizardShell';
import { useProvisioningLog } from './logStore';
import type { Signal, StageId, Template } from './types';
import { Stage1Signals } from './stages/Stage1Signals';
import { Stage2Template } from './stages/Stage2Template';
import { Stage3Augment } from './stages/Stage3Augment';
import { Stage4Confirm } from './stages/Stage4Confirm';
import { Stage5Provision } from './stages/Stage5Provision';

interface OnboardingAppProps {
  /** Called when provisioning completes — drops the admin into the live app. */
  onEnterApp: () => void;
}

export function OnboardingApp({ onEnterApp }: OnboardingAppProps) {
  const [stage, setStage] = useState<StageId>(1);
  const [signals, setSignals] = useState<Signal[]>([]);
  const [template, setTemplate] = useState<Template | null>(null);

  // The shared provisioning log — the spine of stages 3–5.
  const store = useProvisioningLog();

  // Templates seed the log exactly once. A ref guards against re-seeding when
  // the admin steps back to stage 2 and forward again.
  const seededTemplateId = useRef<string | null>(null);

  const chooseTemplate = useCallback(
    (tpl: Template) => {
      setTemplate(tpl);
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

  const go = useCallback((id: StageId) => setStage(id), []);
  const next = useCallback(() => setStage(s => (Math.min(5, s + 1) as StageId)), []);
  const back = useCallback(() => setStage(s => (Math.max(1, s - 1) as StageId)), []);

  // Stage 3 renders full-width; stage 5 reuses the Ultron run surface (also wide).
  const wide = stage === 3 || stage === 5;

  return (
    <WizardShell current={stage} onJump={go} wide={wide}>
      {stage === 1 && (
        <Stage1Signals signals={signals} onChange={setSignals} onNext={next} />
      )}
      {stage === 2 && (
        <Stage2Template
          signals={signals}
          chosen={template}
          onChoose={chooseTemplate}
          onNext={next}
          onBack={back}
        />
      )}
      {stage === 3 && (
        <Stage3Augment store={store} template={template} onNext={next} onBack={back} />
      )}
      {stage === 4 && (
        <Stage4Confirm store={store} onProvision={next} onBack={back} />
      )}
      {stage === 5 && (
        <Stage5Provision store={store} onDone={onEnterApp} onBack={back} />
      )}
    </WizardShell>
  );
}
