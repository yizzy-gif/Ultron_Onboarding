import styled from 'styled-components';

export const AppShellRoot = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

/** Wraps SecondaryNav + ContentArea — starts at x=48 (collapsed nav width) */
export const MainArea = styled.div`
  display: flex;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  padding-left: 48px;
`;

/* The content pane, set as an inset panel rather than a flush region: a 12px
   margin lifts it off the window edges and off the secondary nav (which no
   longer draws a divider), and the matching radius rounds it. `overflow: hidden`
   was already here and now also clips the pane's contents — backdrops included —
   to those corners.

   `height: 100%` is deliberately gone: as a flex item this stretches to its
   container anyway, and combining a fixed full height with vertical margins
   would have pushed the pane 24px past the viewport. */
export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  min-height: 0;
  /* No left margin — the pane sits flush against the secondary nav, and only
     lifts off the top, right and bottom window edges. */
  margin: var(--space-3, 12px) var(--space-3, 12px) var(--space-3, 12px) 0;
  border-radius: var(--radius-lg, 12px);
  overflow: hidden;
`;

export const ContentMain = styled.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  background: var(--color-bg-primary, white);
  padding-bottom: var(--space-8, 32px);

  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: var(--color-border-opaque, #e8eaee);
    border-radius: 99px;
  }
`;
