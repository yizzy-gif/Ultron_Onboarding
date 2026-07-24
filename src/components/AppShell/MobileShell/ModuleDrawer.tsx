// Hamburger drawer — the escape hatch from the bottom sheets. Shows
// every module grouped like the desktop PrimaryNav and expands the
// active module inline with its sub-items. Any child row tap closes
// the drawer. Also home to search (a filter over the nav rows) and the
// profile row, both relocated here from the mobile header.

import { useState, type ReactNode } from 'react';
import styled from 'styled-components';
import { SearchSmIcon } from 'alloy-design-system';
import { SideDrawer } from './SideDrawer';
import { List, GroupLabel, Row, RowIcon, RowLabel, RowCheck, CheckIcon } from './sheetStyles';
import type { PrimaryNavItem, SecondaryNavMenuEntry, SecondaryNavMenuItem, UserProfile } from '../../../types/nav';

/* Search field pinned above the nav list — filters the rows below as the
   admin types, so the drawer doubles as the mobile search surface. */
const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  margin: var(--space-3, 12px) var(--space-4, 16px) var(--space-1, 4px);
  padding: 0 var(--space-3, 12px);
  height: 40px;
  border-radius: var(--radius-md, 8px);
  background: var(--color-bg-secondary, #f6f7f9);
  color: var(--color-content-tertiary, #87919f);

  &:focus-within {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: -1px;
  }
`;

const SearchInput = styled.input`
  all: unset;
  flex: 1 1 auto;
  min-width: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 15px;
  color: var(--color-content-primary, #151515);

  &::placeholder {
    color: var(--color-content-tertiary, #87919f);
  }
`;

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

const AccountDivider = styled.div`
  margin: var(--space-2, 8px) 0 0;
  border-top: 1px solid var(--color-border-opaque, #e8eaee);
`;

interface ModuleDrawerProps {
  activeId: string;
  groups: Array<{ id: string; label: string; items: PrimaryNavItem[] }>;
  currentMenuEntries: SecondaryNavMenuEntry[];
  user: UserProfile;
  onUserClick?: () => void;
  onSelectModule: (moduleId: string) => void;
  onDismiss: () => void;
}

export function ModuleDrawer({
  activeId,
  groups,
  currentMenuEntries,
  user,
  onUserClick,
  onSelectModule,
  onDismiss,
}: ModuleDrawerProps) {
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();
  const matches = (label: string) => label.toLowerCase().includes(q);
  // Menu-item labels can be nodes (animated titles); those stay visible
  // under any query rather than being unmatchable.
  const matchesNode = (label: ReactNode) => (typeof label === 'string' ? matches(label) : true);

  // A submenu child row, shared by singles and group children.
  const childRow = (child: SecondaryNavMenuItem) => (
    <Row
      key={child.id}
      $active={child.isActive}
      $indent
      onClick={() => {
        child.onClick?.();
        onDismiss();
      }}
      aria-pressed={!!child.isActive}
    >
      <RowIcon>{child.icon}</RowIcon>
      <RowLabel>{child.label}</RowLabel>
      {child.isActive && (
        <RowCheck aria-hidden="true">
          <CheckIcon size={16} />
        </RowCheck>
      )}
    </Row>
  );

  return (
    <SideDrawer title="Navigation" onDismiss={onDismiss}>
      <SearchWrap>
        <SearchSmIcon size={16} />
        <SearchInput
          type="search"
          placeholder="Search"
          aria-label="Search navigation"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </SearchWrap>

      <List>
        {groups.map(group => {
          const visibleItems = q ? group.items.filter(item => matches(item.label)) : group.items;
          if (q && visibleItems.length === 0) return null;
          return (
            <div key={group.id}>
              <GroupLabel>{group.label}</GroupLabel>
              {visibleItems.map(item => {
                const isActive = item.id === activeId;
                return (
                  <div key={item.id}>
                    <Row
                      $active={isActive}
                      onClick={() => {
                        onSelectModule(item.id);
                        onDismiss();
                      }}
                      aria-pressed={isActive}
                    >
                      <RowIcon>{item.icon}</RowIcon>
                      <RowLabel>{item.label}</RowLabel>
                      {isActive && (
                        <RowCheck aria-hidden="true">
                          <CheckIcon size={16} />
                        </RowCheck>
                      )}
                    </Row>
                    {isActive && currentMenuEntries.length > 0 && (
                      <div>
                        {currentMenuEntries.map(entry => {
                          if (entry.type === 'single') {
                            if (q && !matchesNode(entry.item.label)) return null;
                            return childRow(entry.item);
                          }
                          if (entry.type !== 'group') return null;   // label / divider: not shown in the drawer
                          const sub = entry.group;
                          const children = q ? sub.children.filter(c => matchesNode(c.label)) : sub.children;
                          if (q && children.length === 0) return null;
                          return (
                            <div key={sub.id}>
                              <GroupLabel>{sub.label}</GroupLabel>
                              {children.map(childRow)}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Profile — relocated from the mobile header's trailing avatar. */}
        <AccountDivider aria-hidden="true" />
        <GroupLabel>Account</GroupLabel>
        <Row
          onClick={() => {
            onUserClick?.();
            onDismiss();
          }}
          aria-label={`User: ${user.name}`}
        >
          <ProfileAvatar $color={user.avatarColor} aria-hidden="true">{user.initials}</ProfileAvatar>
          <RowLabel>{user.name}</RowLabel>
        </Row>
      </List>
    </SideDrawer>
  );
}
