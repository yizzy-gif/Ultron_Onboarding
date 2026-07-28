// Secondary sub-section sheet. Renders the current module's
// menuEntries (the same structure SecondaryNav gets on desktop),
// flattening groups into a list with a group-label row above their
// children. Tap fires the entry's onClick (which already updates
// secActiveId and the URL hash).

import styled from 'styled-components';
import { Edit02Icon } from 'alloy-design-system';
import { BottomSheet } from './BottomSheet';
import { List, GroupLabel, Row, RowIcon, RowLabel, RowCheck, CheckIcon } from './sheetStyles';
import { UltronWordmark } from '../../../pages/Ultron/UltronWordmark';
import { SpotlightedRow } from '../../SecondaryNav/SecondaryNav';
import type { SecondaryNavMenuEntry } from '../../../types/nav';

interface SecondarySheetProps {
  moduleLabel: string;
  entries: SecondaryNavMenuEntry[];
  onSelect: () => void;
  /** Opens the module's home view. When given, the logotype title becomes the
   *  button for it — the same jump the desktop identity card makes. */
  onHome?: () => void;
  /** Opens a new (empty) Ultron page. Omitted for modules that have none, in
   *  which case the sheet shows no trailing action. */
  onNewPage?: () => void;
}

export function SecondarySheet({ moduleLabel, entries, onSelect, onHome, onNewPage }: SecondarySheetProps) {
  // Ultron sets its own name as a logotype (mark in place of the O), the same
  // lockup the desktop identity card and the mobile crumb carry. Other modules
  // keep the sheet's plain uppercase heading.
  const isUltron = moduleLabel === 'Ultron';
  const logotype = isUltron && onHome
    ? (
        <HomeButton
          type="button"
          aria-label={`${moduleLabel} home`}
          onClick={() => { onHome(); onSelect(); }}
        >
          <SheetWordmark />
        </HomeButton>
      )
    : <SheetWordmark />;
  return (
    <BottomSheet
      title={isUltron ? logotype : moduleLabel}
      ariaLabel={`${moduleLabel} sections`}
      titleAction={isUltron && onNewPage ? (
        <NewPageButton
          type="button"
          aria-label="New page"
          onClick={() => { onNewPage(); onSelect(); }}
        >
          <Edit02Icon size={16} />
        </NewPageButton>
      ) : undefined}
    >
      <List>
        {entries.map((entry) => {
          if (entry.type === 'single') {
            const item = entry.item;
            return (
              <Row
                key={item.id}
                $active={item.isActive}
                onClick={() => {
                  item.onClick?.();
                  onSelect();
                }}
                aria-pressed={!!item.isActive}
              >
                <RowIcon>{item.icon}</RowIcon>
                <RowLabel>{item.label}</RowLabel>
                {item.isActive && (
                  <RowCheck aria-hidden="true">
                    <CheckIcon size={16} />
                  </RowCheck>
                )}
              </Row>
            );
          }
          if (entry.type !== 'group') return null;   // label / divider: not shown in the sheet
          const group = entry.group;
          return (
            <div key={group.id}>
              <GroupLabel>{group.label}</GroupLabel>
              {group.children.map(child => {
                const row = (
                  <Row
                  $active={child.isActive}
                  $indent
                  onClick={() => {
                    child.onClick?.();
                    onSelect();
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

                return child.spotlightPrompt ? (
                  <SpotlightedRow
                    key={child.id}
                    prompt={child.spotlightPrompt}
                    onDismiss={child.spotlightDismiss}
                    placement="above"
                  >
                    {row}
                  </SpotlightedRow>
                ) : (
                  <div key={child.id}>{row}</div>
                );
              })}
            </div>
          );
        })}
      </List>
    </BottomSheet>
  );
}

/* The logotype at the sheet title's size. It brings its own caps and tracking,
   so the heading's uppercase/letter-spacing don't apply — this only sets the
   scale and inherits the title's muted colour. */
const SheetWordmark = styled(UltronWordmark)`
  font-size: 14px;
`;

/* The logotype's hit target. Shrink-wraps the lockup and keeps the title row's
   own alignment, so tapping the name jumps home without the heading gaining any
   button chrome — the negative inset lets the hover/press tint breathe around
   the glyphs without pushing them off the title's left edge. */
const HomeButton = styled.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  margin: 0 calc(var(--space-2, 8px) * -1);
  padding: var(--space-1, 4px) var(--space-2, 8px);
  border-radius: var(--radius-md, 8px);
  cursor: pointer;

  &:hover {
    background: var(--color-bg-tertiary, #eceef1);
  }
  &:active {
    opacity: 0.6;
  }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
  }
`;

/* Trailing compose action on the title row — mirrors the desktop identity
   card's pencil, and closes the sheet after opening the page. */
const NewPageButton = styled.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8, 32px);
  height: var(--space-8, 32px);
  border-radius: var(--radius-md, 8px);
  color: var(--color-content-tertiary, #87919f);
  cursor: pointer;

  &:hover {
    background: var(--color-bg-tertiary, #eceef1);
    color: var(--color-content-primary, #151515);
  }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
  }
`;
