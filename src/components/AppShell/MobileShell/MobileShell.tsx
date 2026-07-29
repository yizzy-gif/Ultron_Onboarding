// Mobile chrome: a single 48px header + content column, with an
// overlay layer for sheets and the left-side drawer. Takes the same
// prop surface AppShell already receives; the only extra is
// `onMobileNavigate` which wires module-switching through App.tsx so
// the primary sheet can also restore each module's last-visited
// sub-section.

import { useEffect, useMemo, useState, type ReactNode } from 'react';
import styled from 'styled-components';
import { useScrollDirection } from '../../../hooks/useScrollDirection';
import { MobileHeader } from './MobileHeader';
import { OverlayScrim } from './OverlayScrim';
import { SecondarySheet } from './SecondarySheet';
import { PersonaSheet } from './PersonaSheet';
import { ModuleDrawer } from './ModuleDrawer';
import { mockPersonas } from '../../../data/mockPersonas';
import type {
  PrimaryNavItem,
  SecondaryNavMenuEntry,
  UserProfile,
} from '../../../types/nav';

// Module-group catalog for the primary sheet + drawer. Labels mirror
// the visual grouping in the desktop PrimaryNav.
export interface MobileModuleGroup {
  id: 'main' | 'tools' | 'bottom';
  label: string;
  items: PrimaryNavItem[];
}

export interface MobileShellProps {
  // Nav state (read-only here — mobile reads for labels/active state)
  activeId: string;
  secActiveId: string;
  activePageId: string | null;
  selectedPersonaId: string | null;

  // Structure
  moduleGroups: MobileModuleGroup[];
  primaryLabel: string;
  secondaryLabel?: string;
  menuEntries: SecondaryNavMenuEntry[];

  // User
  user: UserProfile;
  onUserClick?: () => void;
  onSettingsClick?: () => void;

  // Actions
  onMobileNavigate: (moduleId: string) => void;
  onSelectPersona: (id: string) => void;
  /** Opens a new (empty) Ultron page — surfaced on the secondary sheet's title. */
  onHome?: () => void;
  onNewPage?: () => void;
  /** Opens the current module's navigation sheet for a guided event handoff. */
  openSecondaryNav?: boolean;

  children: ReactNode;
}

/* Exactly the viewport, not "at least" it. Every page this shell hosts owns its
   full height and scrolls its own body (the welcome thread, the case page, the
   Live landing all do), so a min-height let the shell — and with it each page's
   backdrop — stretch to whatever the page's content measured. `dvh` so the
   mobile browser's collapsing toolbars don't leave a strip uncovered. */
const Shell = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary, #ffffff);
`;

const Content = styled.main`
  flex: 1 1 auto;
  min-width: 0;
  /* Stretch the page to the shell's remaining height. Pages size themselves
     with percentage heights (e.g. the welcome thread's Root), which don't
     resolve against a flex item without a definite height — so pass the height
     down through flex instead. Short pages fill the viewport (no white gap
     under their backdrop). */
  display: flex;
  flex-direction: column;
  /* And no taller: without this the automatic minimum size pins this column to
     its content, so a long thread would push the page past the viewport instead
     of scrolling inside itself. */
  min-height: 0;

  & > * {
    flex: 1 1 auto;
    min-width: 0;
  }
`;

export function MobileShell(props: MobileShellProps) {
  const {
    activeId,
    selectedPersonaId,
    moduleGroups,
    primaryLabel,
    secondaryLabel,
    menuEntries,
    user,
    onUserClick,
    onSettingsClick,
    onMobileNavigate,
    onSelectPersona,
    onHome,
    onNewPage,
    openSecondaryNav,
    children,
  } = props;

  const [overlay, setOverlay] = useState<'drawer' | 'secondary' | 'persona' | null>(null);

  const scrollDir = useScrollDirection({ deadZonePx: 8, topThresholdPx: 20 });
  const headerHidden = overlay === null && scrollDir === 'down';

  const personaLabel = useMemo(() => {
    if (!selectedPersonaId) return null;
    const p = mockPersonas.find(x => x.id === selectedPersonaId);
    return p?.name ?? null;
  }, [selectedPersonaId]);

  const close = () => setOverlay(null);
  const open = (o: typeof overlay) => setOverlay(o);

  useEffect(() => {
    if (openSecondaryNav) setOverlay('secondary');
  }, [openSecondaryNav]);

  // Reused by every dismiss path (scrim, ESC, selection)
  const scrimActive = overlay !== null;

  return (
    <Shell>
      <MobileHeader
        primaryLabel={primaryLabel}
        secondaryLabel={secondaryLabel}
        tertiaryLabel={personaLabel}
        openOverlay={overlay}
        hidden={headerHidden}
        onHamburgerClick={() => open('drawer')}
        onSecondaryClick={() => {
          // The crumb opens the current module's sections; a module without
          // any falls back to the drawer so the tap always lands somewhere.
          open(menuEntries.length > 0 ? 'secondary' : 'drawer');
        }}
        onTertiaryClick={personaLabel ? () => open('persona') : undefined}
      />

      <Content>{children}</Content>

      {scrimActive && <OverlayScrim onDismiss={close} />}

      {overlay === 'secondary' && (
        <SecondarySheet
          moduleLabel={primaryLabel}
          entries={menuEntries}
          onSelect={close}
          onHome={onHome}
          onNewPage={onNewPage}
        />
      )}

      {overlay === 'persona' && (
        <PersonaSheet
          personas={mockPersonas}
          activeId={selectedPersonaId}
          onSelect={id => {
            onSelectPersona(id);
            close();
          }}
        />
      )}

      {overlay === 'drawer' && (
        <ModuleDrawer
          activeId={activeId}
          groups={moduleGroups}
          user={user}
          onUserClick={onUserClick}
          onSettingsClick={onSettingsClick}
          onSelectModule={moduleId => onMobileNavigate(moduleId)}
          onDismiss={close}
        />
      )}
    </Shell>
  );
}
