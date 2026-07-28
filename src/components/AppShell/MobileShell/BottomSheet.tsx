// Bottom sheet primitive — rounded-top card that rises from the bottom
// of the viewport, capped at 70% viewport height, with a drag-handle
// indicator at the top. The scrim is rendered by the caller so all
// overlays share a single backdrop.

import type { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;

const SheetRoot = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 901;
  background: var(--color-bg-primary, #ffffff);
  border-top-left-radius: var(--radius-lg, 12px);
  border-top-right-radius: var(--radius-lg, 12px);
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.12);
  animation: ${slideUp} 220ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-bottom: env(safe-area-inset-bottom);
`;

const HandleRow = styled.div`
  display: flex;
  justify-content: center;
  padding: var(--space-2, 8px) 0 var(--space-1, 4px);
`;

const Handle = styled.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: var(--color-border-opaque, #cbd0d7);
`;

/* Title plus its optional trailing action. The row carries the insets the title
   used to own, so the action lands on the sheet's right edge inset rather than
   hanging off the heading's own box. */
const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  padding: var(--space-2, 8px) var(--space-5, 20px) var(--space-3, 12px);
`;

const Title = styled.h2`
  margin: 0;
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-tertiary, #87919f);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Body = styled.div`
  overflow-y: auto;
  padding: 0 0 var(--space-2, 8px);
  flex: 1 1 auto;
  min-height: 0;
`;

interface BottomSheetProps {
  /** ReactNode rather than string so a caller can set a lockup (the Ultron
   *  logotype) in the title slot. Pass `ariaLabel` alongside when it isn't
   *  plain text — the dialog's name can't come from a node. */
  title?: ReactNode;
  children: ReactNode;
  /** aria-label when title is not set */
  ariaLabel?: string;
  /** Optional trailing control on the title row (e.g. "new page"). */
  titleAction?: ReactNode;
}

export function BottomSheet({ title, children, ariaLabel, titleAction }: BottomSheetProps) {
  return (
    <SheetRoot role="dialog" aria-modal="true" aria-label={ariaLabel ?? (typeof title === 'string' ? title : undefined)}>
      <HandleRow>
        <Handle aria-hidden="true" />
      </HandleRow>
      {title && (
        <TitleRow>
          <Title>{title}</Title>
          {titleAction}
        </TitleRow>
      )}
      <Body>{children}</Body>
    </SheetRoot>
  );
}
