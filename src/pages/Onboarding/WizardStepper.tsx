/* Wizard spine — the five-stage progress indicator across the top of the
   onboarding flow. Alloy has no stepper primitive (checked the inventory), so
   this is a Teambridge-local component built from tokens + an Alloy CheckIcon.
   FLAGGED for promotion to Alloy as a `Steps` component. */

import styled from 'styled-components';
import { CheckIcon } from 'alloy-design-system';
import { STAGES, type StageId } from './types';

interface WizardStepperProps {
  current: StageId;
  // Stages the user can jump back to (completed ones). Forward jumps are blocked.
  onJump?: (id: StageId) => void;
}

export function WizardStepper({ current, onJump }: WizardStepperProps) {
  return (
    <Spine aria-label="Onboarding progress">
      {STAGES.map((s, i) => {
        const state: 'done' | 'active' | 'todo' =
          s.id < current ? 'done' : s.id === current ? 'active' : 'todo';
        const clickable = state === 'done' && !!onJump;
        return (
          <Step key={s.id}>
            {i > 0 && <Connector data-filled={s.id <= current} />}
            <StepButton
              type="button"
              data-state={state}
              disabled={!clickable}
              onClick={clickable ? () => onJump!(s.id) : undefined}
              aria-current={state === 'active' ? 'step' : undefined}
            >
              <Dot data-state={state}>
                {state === 'done' ? <CheckIcon size={14} /> : <span>{s.id}</span>}
              </Dot>
              <Label data-state={state}>{s.short}</Label>
            </StepButton>
          </Step>
        );
      })}
    </Spine>
  );
}

const Spine = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;

  &:last-child { flex: 0 0 auto; }
`;

const Connector = styled.div<{ 'data-filled'?: boolean }>`
  flex: 1;
  height: 2px;
  margin: 0 var(--space-2);
  border-radius: var(--radius-full);
  background: ${p => (p['data-filled'] ? 'var(--color-content-brand, var(--color-bg-inverse-primary))' : 'var(--color-border-opaque)')};
  transition: background var(--duration-slow) var(--ease-default);
`;

const StepButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-2);
  border: none;
  background: transparent;
  border-radius: var(--radius-md);
  cursor: default;
  white-space: nowrap;

  &:not(:disabled) { cursor: pointer; }
  &:not(:disabled):hover { background: var(--color-bg-secondary); }
  &:focus-visible { outline: 2px solid var(--color-border-focus); outline-offset: 2px; }
`;

const Dot = styled.span<{ 'data-state'?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-6);
  height: var(--space-6);
  border-radius: var(--radius-full);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  transition: all var(--duration-fast) var(--ease-default);

  &[data-state='done'] {
    background: var(--color-bg-inverse-primary);
    color: var(--color-content-inverse-primary);
  }
  &[data-state='active'] {
    background: var(--color-bg-inverse-primary);
    color: var(--color-content-inverse-primary);
    box-shadow: 0 0 0 4px var(--color-bg-secondary);
  }
  &[data-state='todo'] {
    background: var(--color-bg-secondary);
    color: var(--color-content-tertiary);
    border: 1px solid var(--color-border-opaque);
  }
`;

const Label = styled.span<{ 'data-state'?: string }>`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-tertiary);

  &[data-state='active'] { color: var(--color-content-primary); font-weight: var(--font-weight-semibold); }
  &[data-state='done'] { color: var(--color-content-secondary); }
`;
