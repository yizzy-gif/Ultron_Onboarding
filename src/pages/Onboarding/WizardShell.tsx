/* Wizard shell — the chrome shared by every onboarding stage: the stepper spine
   pinned to the top, a scrolling body slot, and an optional footer for
   back/continue controls. Stages 1/2/4 render inside a centered column; stage 3
   (augment canvas) and stage 5 (provisioning run) opt into full width via
   `wide`. */

import type { ReactNode } from 'react';
import styled from 'styled-components';
import { WizardStepper } from './WizardStepper';
import type { StageId } from './types';
import { STAGES } from './types';

interface WizardShellProps {
  current: StageId;
  onJump?: (id: StageId) => void;
  // Full-bleed body (stage 3 canvas / stage 5 run). Default = centered column.
  wide?: boolean;
  // Optional footer (continue / back). Omit on stages that own their own CTAs.
  footer?: ReactNode;
  children: ReactNode;
}

export function WizardShell({ current, onJump, wide = false, footer, children }: WizardShellProps) {
  const stage = STAGES.find(s => s.id === current)!;
  return (
    <Frame>
      <Header>
        <HeaderInner>
          <WizardStepper current={current} onJump={onJump} />
        </HeaderInner>
      </Header>

      <Body $wide={wide}>
        <BodyInner $wide={wide}>
          {!wide && (
            <Title>
              <StageKicker>Step {stage.id} of {STAGES.length}</StageKicker>
              <StageTitle>{stage.title}</StageTitle>
            </Title>
          )}
          {children}
        </BodyInner>
      </Body>

      {footer && (
        <Footer>
          <FooterInner $wide={wide}>{footer}</FooterInner>
        </Footer>
      )}
    </Frame>
  );
}

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary);
  color: var(--color-content-primary);
`;

const Header = styled.header`
  flex-shrink: 0;
  border-bottom: 1px solid var(--color-border-opaque);
  background: var(--color-bg-primary);
`;

const HeaderInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: var(--space-4) var(--space-6);
`;

const Body = styled.main<{ $wide?: boolean }>`
  flex: 1;
  min-height: 0;
  overflow-y: ${p => (p.$wide ? 'hidden' : 'auto')};
  display: flex;
  flex-direction: column;
`;

const BodyInner = styled.div<{ $wide?: boolean }>`
  flex: 1;
  min-height: 0;
  width: 100%;
  margin: 0 auto;
  ${p =>
    p.$wide
      ? `display: flex; flex-direction: column;`
      : `max-width: 760px; padding: var(--space-8) var(--space-6) var(--space-10);`}
`;

const Title = styled.div`
  margin-bottom: var(--space-6);
`;

const StageKicker = styled.div`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  margin-bottom: var(--space-2);
`;

const StageTitle = styled.h1`
  font-family: var(--font-sans);
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-content-primary);
  margin: 0;
`;

const Footer = styled.footer`
  flex-shrink: 0;
  border-top: 1px solid var(--color-border-opaque);
  background: var(--color-bg-primary);
`;

const FooterInner = styled.div<{ $wide?: boolean }>`
  max-width: ${p => (p.$wide ? '100%' : '760px')};
  margin: 0 auto;
  padding: var(--space-4) var(--space-6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
`;
