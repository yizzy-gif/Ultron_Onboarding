import styled from 'styled-components';
import { MOBILE_MEDIA_QUERY } from '../../hooks/useMediaQuery';

/* The mobile header's own height: a 48px row under the status-bar inset, plus
   its hairline. The toggle clears all of it rather than hiding behind it. */
const MOBILE_HEADER_PX = 'calc(env(safe-area-inset-top, 0px) + 49px)';

/* Fixed to the viewport top-right, above page content but below modals/toasts
   so overlays can still cover it. A neutral surface disc that reads on any
   background in either theme. */
export const ToggleButton = styled.button`
  position: fixed;
  /* 20px in from the top-right — clears the content pane's own 12px inset by a
     further 8px, so the disc sits inside the pane rather than on its corner. */
  top: var(--space-5);
  right: var(--space-5);
  z-index: var(--z-sticky);

  /* Phones put a fixed header in that corner, so the disc drops below it —
     same 12px gap the header keeps from the viewport edges. */
  @media ${MOBILE_MEDIA_QUERY} {
    top: calc(${MOBILE_HEADER_PX} + var(--space-3));
    right: var(--space-3);
  }

  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;

  border-radius: var(--radius-full);
  border: 1px solid var(--color-border-opaque);
  background: var(--color-bg-primary);
  color: var(--color-content-secondary);
  box-shadow: var(--shadow-below-low);
  cursor: pointer;
  transition:
    background var(--duration-fast) var(--ease-default),
    color var(--duration-fast) var(--ease-default),
    border-color var(--duration-fast) var(--ease-default);

  &:hover {
    background: var(--color-bg-secondary);
    color: var(--color-content-primary);
    border-color: var(--color-border-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }

  & svg {
    display: block;
  }
`;
