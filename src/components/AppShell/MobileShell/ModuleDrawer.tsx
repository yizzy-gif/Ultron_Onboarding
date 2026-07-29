// Hamburger drawer — the escape hatch from the bottom sheets. Shows
// every module grouped like the desktop PrimaryNav. Dividers preserve
// the desktop rail's grouping without adding mobile-only section
// eyebrows. Settings and the account row finish the list.

import styled from 'styled-components';
import { SideDrawer } from './SideDrawer';
import { SettingsIcon } from '../../PrimaryNav/NavIcons';
import { List, Row, RowIcon, RowLabel, RowCheck, CheckIcon, SectionDivider } from './sheetStyles';
import type { PrimaryNavItem, UserProfile } from '../../../types/nav';

/* Profile row artwork — the header avatar, relocated. */
const ProfileAvatar = styled.span<{ $color?: string }>`
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: ${p => p.$color ?? 'var(--color-bg-tertiary, #eceef1)'};
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 12px;
  font-weight: 600;
  flex: 0 0 auto;
`;

/* Give the drawer rows a generous 12px inner gutter. Reducing the row's own horizontal
   padding by the same amount keeps icons and labels aligned at their existing
   20px inset while the selected background no longer touches the drawer edge. */
const DrawerRow = styled(Row)`
  width: calc(100% - var(--space-6, 24px));
  margin-inline: var(--space-3, 12px);
  padding-left: var(--space-2, 8px);
  padding-right: var(--space-2, 8px);
`;

interface ModuleDrawerProps {
  activeId: string;
  groups: Array<{ id: string; label: string; items: PrimaryNavItem[] }>;
  user: UserProfile;
  onUserClick?: () => void;
  onSettingsClick?: () => void;
  onSelectModule: (moduleId: string) => void;
  onDismiss: () => void;
}

export function ModuleDrawer({
  activeId,
  groups,
  user,
  onUserClick,
  onSettingsClick,
  onSelectModule,
  onDismiss,
}: ModuleDrawerProps) {
  return (
    <SideDrawer title="Navigation" onDismiss={onDismiss}>
      <List>
        {groups.map((group, groupIndex) => {
          return (
            <div key={group.id}>
              {groupIndex > 0 && <SectionDivider aria-hidden="true" />}
              {group.items.map(item => {
                const isActive = item.id === activeId;
                return (
                  <DrawerRow
                    key={item.id}
                    $active={isActive}
                    $disabled={item.disabled}
                    onClick={() => {
                      item.onClick?.();
                      onSelectModule(item.id);
                      onDismiss();
                    }}
                    aria-pressed={isActive}
                    aria-disabled={item.disabled || undefined}
                  >
                    <RowIcon>{item.icon}</RowIcon>
                    <RowLabel>{item.label}</RowLabel>
                    {isActive && (
                      <RowCheck aria-hidden="true">
                        <CheckIcon size={16} />
                      </RowCheck>
                    )}
                  </DrawerRow>
                );
              })}
            </div>
          );
        })}

        <SectionDivider aria-hidden="true" />
        <DrawerRow
          onClick={() => {
            onSettingsClick?.();
            onDismiss();
          }}
        >
          <RowIcon><SettingsIcon /></RowIcon>
          <RowLabel>Settings</RowLabel>
        </DrawerRow>
        <DrawerRow
          onClick={() => {
            onUserClick?.();
            onDismiss();
          }}
          aria-label={`Account: ${user.name}`}
        >
          <ProfileAvatar $color={user.avatarColor} aria-hidden="true">{user.initials}</ProfileAvatar>
          <RowLabel>Account</RowLabel>
        </DrawerRow>
      </List>
    </SideDrawer>
  );
}
