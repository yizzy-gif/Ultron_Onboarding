// 48px top header used on viewports below the mobile breakpoint.
// Layout (left to right): hamburger, then the secondary-nav crumb — the
// current section within the active module (falling back to the module
// name when it has no sections) — plus an optional persona crumb.
// Module switching, search, and the profile all live in the hamburger
// drawer. Supports scroll-away: when the parent passes `hidden`, the
// header translates off-screen with a short transition.

import { forwardRef, type MouseEventHandler } from 'react';
import styled from 'styled-components';
import { BreadcrumbButton } from './BreadcrumbButton';

const HeaderRoot = styled.header<{ $hidden: boolean }>`
  position: sticky;
  top: 0;
  z-index: 800;
  background: var(--color-bg-primary, #ffffff);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  padding-top: env(safe-area-inset-top);
  transform: ${p => (p.$hidden ? 'translateY(-100%)' : 'translateY(0)')};
  transition: transform 180ms ease-out;
`;

const Row = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  padding: 0 var(--space-3, 12px);
`;

const IconButton = styled.button`
  all: unset;
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md, 8px);
  color: var(--color-content-secondary, #475569);
  cursor: pointer;
  flex: 0 0 auto;
  &:hover { background: var(--color-bg-tertiary, #eceef1); }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
  }
`;

const Crumbs = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
`;

const Separator = styled.span`
  flex: 0 0 auto;
  font-size: 14px;
  color: var(--color-content-tertiary, #87919f);
  line-height: 1;
  user-select: none;
`;

/** Simple 3-line hamburger glyph — avoids pulling in another Alloy icon. */
function HamburgerIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface MobileHeaderProps {
  /** Fallback crumb label for modules without a secondary section. */
  primaryLabel: string;
  secondaryLabel?: string;
  tertiaryLabel?: string | null;
  openOverlay: 'drawer' | 'secondary' | 'persona' | null;
  hidden: boolean;
  onHamburgerClick: MouseEventHandler<HTMLButtonElement>;
  onSecondaryClick: MouseEventHandler<HTMLButtonElement>;
  onTertiaryClick?: MouseEventHandler<HTMLButtonElement>;
}

export const MobileHeader = forwardRef<HTMLElement, MobileHeaderProps>(function MobileHeader(
  {
    primaryLabel,
    secondaryLabel,
    tertiaryLabel,
    openOverlay,
    hidden,
    onHamburgerClick,
    onSecondaryClick,
    onTertiaryClick,
  },
  ref,
) {
  return (
    <HeaderRoot ref={ref} $hidden={hidden}>
      <Row>
        <IconButton onClick={onHamburgerClick} aria-label="Open navigation">
          <HamburgerIcon size={18} />
        </IconButton>

        <Crumbs>
          <BreadcrumbButton
            label={secondaryLabel ?? primaryLabel}
            isOpen={openOverlay === 'secondary'}
            onClick={onSecondaryClick}
            ariaLabel="Choose a section"
          />
          {tertiaryLabel && (
            <>
              <Separator aria-hidden="true">›</Separator>
              <BreadcrumbButton
                label={tertiaryLabel}
                isOpen={openOverlay === 'persona'}
                onClick={onTertiaryClick ?? (() => {})}
                ariaLabel="Choose a persona"
              />
            </>
          )}
        </Crumbs>
      </Row>
    </HeaderRoot>
  );
});
