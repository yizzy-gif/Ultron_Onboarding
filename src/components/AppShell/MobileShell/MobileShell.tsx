// Mobile chrome: a single 48px header + content column, with an
// overlay layer for sheets and the left-side drawer. Takes the same
// prop surface AppShell already receives; the only extra is
// `onMobileNavigate` which wires module-switching through App.tsx so
// the primary sheet can also restore each module's last-visited
// sub-section.

import { useMemo, useState, type ReactNode } from 'react';
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

  // Actions
  onMobileNavigate: (moduleId: string) => void;
  onSelectPersona: (id: string) => void;

  children: ReactNode;
}

const Shell = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-bg-primary, #ffffff);
`;

const Content = styled.main`
  flex: 1 1 auto;
  min-width: 0;
  /* Stretch the page to the shell's remaining height. Pages size themselves
     with percentage heights (e.g. the welcome thread's Root), which don't
     resolve against a flex item without a definite height — so pass the height
     down through flex instead. Short pages fill the viewport (no white gap
     under their backdrop); tall ones still grow and scroll. */
  display: flex;
  flex-direction: column;

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
    onMobileNavigate,
    onSelectPersona,
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
          currentMenuEntries={menuEntries}
          user={user}
          onUserClick={onUserClick}
          onSelectModule={moduleId => onMobileNavigate(moduleId)}
          onDismiss={close}
        />
      )}
    </Shell>
  );
}

