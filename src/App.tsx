import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { AppShell } from './components/AppShell';
import type { PrimaryNavItem, SecondaryNavMenuEntry, SecondaryNavPageEntry } from './types/nav';
import {
  HomeIcon, MessageCircleIcon, InboxIcon, ReceiptCheckIcon, AIStarIcon,
  MarketplaceIcon,
  DocumentIcon, FormIcon, TasksIcon, PolicyIcon, AutomationIcon, PayrollIcon, ESignIcon,
} from './components/PrimaryNav/NavIcons';
import {
  SettingsGearIcon, CheckCircleIcon,
  Badge, AlertTriangleIcon, Save01Icon, Tooltip,
  DropdownMenu, DotsVerticalIcon, Trash01Icon,
} from 'alloy-design-system';
import { HeadingText } from './components/TopNav/TopNav.styles';
import policyActiveUrl from './assets/policy-icon-active.svg';
import automationActiveUrl from './assets/automation-icon-active.svg';
import {
  UltronPage, NewPage, MemoryPage, AccountDatabasePage, useUltronStore, ACCOUNT_COLLECTIONS, AgentMark,
  UltronIdentityCard, TypingText, caseLabel, mockUltronReply,
  type UltronSection, type ThreadStatus, type NewPageMessage,
} from './pages/Ultron';
import { WelcomeThread, type WelcomeAnswers } from './pages/WelcomeThread';
import { useHashSync } from './nav/hashSync';
import type { MobileModuleGroup } from './components/AppShell/MobileShell';
import { ThemeToggle } from './components/ThemeToggle';

// ── Nav item definitions ──────────────────────────────────────────────────
// The full primary rail is kept for chrome fidelity, but Ultron is the only
// wired module — selecting any other rail item is inert (no navigation, no
// page). Those experiences live in the parent Teambridge app. Ultron's app
// icon is its own identity mark (the Circle AgentMark).

const PRIMARY_ITEMS: Omit<PrimaryNavItem, 'isActive' | 'onClick'>[] = [
  { id: 'ultron',   label: 'Ultron',  icon: <AgentMark mark="circle" size={32} tone="auto" state="idle" aria-label="Ultron" /> },
  { id: 'home',     label: 'Home',    icon: <HomeIcon /> },
  { id: 'engaged',  label: 'Engaged', icon: <MessageCircleIcon />, hasUnread: true },
  { id: 'inbox',    label: 'Inbox',   icon: <InboxIcon />, hasUnread: true },
  { id: 'invoice',  label: 'Invoice', icon: <ReceiptCheckIcon /> },
  { id: 'ai-home',  label: 'AI Home', icon: <AIStarIcon /> },
];

const TOOL_ITEMS: Omit<PrimaryNavItem, 'isActive' | 'onClick'>[] = [
  { id: 'apps', label: 'Apps', icon: <MarketplaceIcon /> },
];

const BOTTOM_ITEMS: Omit<PrimaryNavItem, 'isActive' | 'onClick'>[] = [
  { id: 'docs',       label: 'Document Studio', icon: <DocumentIcon /> },
  { id: 'form',       label: 'Form',            icon: <FormIcon /> },
  { id: 'tasks',      label: 'Tasks',           icon: <TasksIcon /> },
  { id: 'policy',     label: 'Policy',          icon: <PolicyIcon />, activeIcon: <img src={policyActiveUrl} width={16} height={16} style={{ display: 'block' }} alt="" /> },
  { id: 'automation', label: 'Automation',      icon: <AutomationIcon />, activeIcon: <img src={automationActiveUrl} width={16} height={16} style={{ display: 'block' }} alt="" /> },
  { id: 'payroll',    label: 'Payroll',         icon: <PayrollIcon /> },
  { id: 'esign',      label: 'E-Sign Studio',   icon: <ESignIcon /> },
];

// ── Helpers ────────────────────────────────────────────────────────────────

/** Ultron's identity (circle mark + title + live activity) pinned to the top of
 *  the Home secondary nav, above the case groups. Clickable — returns to the
 *  Live landing (Ultron's resting presence); highlights while it's the active
 *  page. */
const UltronNavCard = styled.button<{ $active: boolean }>`
  display: block;
  width: 100%;
  margin-bottom: var(--space-2);
  /* Same padding in both states so the card keeps the same height whether or
     not Live is the selected page — only the background marks the active state.
     12px sides align the text with the group rows below. */
  padding: var(--space-2) var(--space-3);
  border: none;
  border-radius: var(--radius-md, 8px);
  background: ${p => (p.$active ? 'var(--color-bg-secondary, rgba(70, 108, 255, 0.06))' : 'transparent')};
  text-align: left;
  cursor: pointer;
  transition: background var(--duration-fast, 120ms) var(--ease-out, ease);

  &:hover { background: var(--color-bg-secondary, rgba(70, 108, 255, 0.06)); }
`;

/* The glyph springs in when the play is saved: the interlocking rings whirl
   into place with an overshoot, so the moment the workflow lands is unmistakable
   from the list. Plays once, as the mark mounts. */
const savedPop = keyframes`
  0%   { opacity: 0; transform: scale(0.2) rotate(-140deg); }
  50%  { opacity: 1; transform: scale(1.45) rotate(12deg); }
  68%  { transform: scale(0.86) rotate(-8deg); }
  84%  { transform: scale(1.12) rotate(3deg); }
  100% { transform: scale(1)   rotate(0deg); }
`;

/* The glyph flashes success-green as it lands, then settles to its quiet muted
   tone — a highlight beat that draws the eye to the newly-saved row. */
const savedGlow = keyframes`
  0%, 55% { color: var(--color-success-content); }
  100%    { color: var(--color-content-disabled); }
`;

/* A green halo ripples outward from behind the glyph as it pops, then fades —
   the extra "landing" flourish that makes the save obvious at a glance. */
const savedRipple = keyframes`
  0%   { opacity: 0.45; transform: scale(0.4); }
  100% { opacity: 0;    transform: scale(2.4); }
`;

/* Trailing marker on a case row whose play has been saved as a workflow — a
   muted automation glyph at rest, but it makes an obvious entrance (spring pop +
   green flash + radiating halo) the moment it appears, so saving the play is
   plainly noticeable in the list. */
const SavedWorkflowMark = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-content-disabled);

  & svg {
    width: 16px;
    height: 16px;
    transform-origin: center;
    /* Spring the rings in while flashing green then settling muted; the "both"
       fill holds the muted end colour once the flash finishes. */
    animation:
      ${savedPop} 640ms cubic-bezier(0.34, 1.56, 0.64, 1) both,
      ${savedGlow} 1100ms var(--ease-out, ease-out) both;
  }

  /* Radiating halo behind the glyph — the ripple that lands with the pop. */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    margin: auto;
    width: var(--space-6);
    height: var(--space-6);
    border-radius: var(--radius-full);
    background: var(--color-success-content);
    pointer-events: none;
    animation: ${savedRipple} 720ms var(--ease-out, ease-out) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & svg,
    &::after { animation: none; }
  }
`;

// The ⋯ trigger on a page row — a quiet, muted icon button on the row's trailing
// edge. Hidden until the row is hovered/focused (or its menu is open), so rows
// stay clean at rest. The page row is the ListItem root (role="button"); the
// dropdown trigger wrapper carries aria-expanded when the menu is open.
const PageKebab = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-6);
  height: var(--space-6);
  border: none;
  background: transparent;
  border-radius: var(--radius-md);
  color: var(--color-content-tertiary);
  cursor: pointer;
  opacity: 0;
  transition: opacity var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              color var(--duration-fast) var(--ease-default);

  /* Reveal on row hover / keyboard focus within the row, and hold visible while
     the menu is open. */
  [role='button']:hover &,
  [role='button']:focus-within &,
  [aria-expanded='true'] & {
    opacity: 1;
  }

  /* Touch (no hover): always visible — there's no hover to reveal it. */
  @media (hover: none) {
    opacity: 1;
  }

  &:hover { background: var(--color-bg-tertiary); color: var(--color-content-primary); }
  &:focus-visible { outline: 2px solid var(--color-border-focus); outline-offset: 1px; opacity: 1; }
`;

/** Trailing ⋯ menu on a page row: opens a dropdown with a destructive Delete
 *  action. Wrapped in a stop-propagation span so opening the menu (or picking an
 *  action) doesn't also fire the row's navigation onClick. */
function PageRowActions({ onDelete }: { onDelete: () => void }) {
  const stop = (e: { stopPropagation: () => void }) => e.stopPropagation();
  return (
    <span onClick={stop} onKeyDown={stop} onMouseDown={stop}>
      <DropdownMenu
        placement="bottom-end"
        width={168}
        trigger={
          <PageKebab type="button" aria-label="Page options">
            <DotsVerticalIcon size={16} />
          </PageKebab>
        }
        groups={[
          {
            id: 'actions',
            options: [
              { id: 'delete', label: 'Delete page', destructive: true, leadingSlot: <Trash01Icon size={16} />, onClick: onDelete },
            ],
          },
        ]}
      />
    </span>
  );
}

// Group icons for the Ultron secondary-nav groups (Needs attention / Live
// stream / Resolved), keyed by the store group id.
const HOME_GROUP_ICON: Record<string, React.ReactNode> = {
  needs_attention: <AlertTriangleIcon size={16} />,
  live:            <AgentMark mark="orbit2d" size={32} tone="auto" state="active" />,
  resolved:        <CheckCircleIcon size={16} />,
};

// Which feed section a case's status belongs to. The page always follows the
// selected case: as its status shifts, the section (and the sidebar group it
// sits under) moves with it — Needs attention (New) → Working → Done.
const STATUS_SECTION: Record<ThreadStatus, UltronSection> = {
  analyzing:          'new',
  needs_approval:     'new',
  recommended:        'new',
  in_progress:        'working',
  monitoring:         'working',
  resolved:           'done',
  auto_resolved:      'done',
  workflow_available: 'done',
  unresolved:         'done',
};

// ── App ───────────────────────────────────────────────────────────────────

interface AppProps {
  /** Everything onboarding collected, handed in when the flow drops into the
   *  app. Present only on the fresh post-onboarding entry — drives the one-time
   *  welcome landing (a chat thread that recaps the setup and asks what's next).
   *  Absent on a refresh, so the app then opens on Ultron's normal home. */
  introAnswers?: WelcomeAnswers;
}

export default function App({ introAnswers }: AppProps = {}) {
  // The rail is kept for fidelity but Ultron is the only wired module, so
  // `activeId` never leaves 'ultron'. The other nav-state fields are retained
  // only to satisfy the hash-sync + mobile-shell contracts.
  const [activeId, setActiveId] = useState('ultron');
  const [secActiveId, setSecActiveId] = useState('home-overview');
  const [selectedPersonaId, setSelectedPersonaId] = useState<string | null>(null);
  const [activePageId, setActivePageId] = useState<string | null>(null);
  // Home secondary-nav body toggle: 'ultron' shows Ultron threads grouped by
  // lifecycle; 'account' shows the (stubbed) Account database collections.
  const [homeView, setHomeView] = useState<'ultron' | 'account' | 'memory'>('ultron');
  const [accountCollection, setAccountCollection] = useState('employees');
  // Shared Ultron store (threads + grouping + selection) — drives both the
  // sidebar and the main detail view.
  const ultron = useUltronStore();
  // Welcome landing — the handoff shown right after onboarding: a chat thread
  // recapping what was set up, with Ultron asking what to take on next. Present
  // on fresh entry (introAnswers passed in); any nav action drops out of it, but
  // it stays re-openable from the persistent "Welcome" entry in the Pages nav.
  const [onWelcome, setOnWelcome] = useState(Boolean(introAnswers));
  // Live landing — Ultron's resting presence (large Circle mark, no case open).
  // Ultron's normal home: the user rests here, opening any case in the sidebar
  // leaves it, and clicking the identity returns to it. Starts inactive while the
  // welcome handoff is showing so its nav card isn't falsely highlighted.
  const [onLive, setOnLive] = useState(!introAnswers);

  // Custom pages the operator creates from the identity-card "+". Each starts
  // empty (a blank Ultron page). `activePage` is the open one (null = not on a
  // page). The id counter lives in a ref so ids stay stable across renders.
  const [pages, setPages] = useState<{ id: string; title: string }[]>([]);
  const [activePage, setActivePage] = useState<string | null>(null);
  const pageSeq = useRef(0);
  const openPage = (id: string) => { setHomeView('ultron'); setOnWelcome(false); setOnLive(false); setActivePage(id); };
  // Re-open the welcome recap from its Pages entry, so it isn't lost on nav.
  const openWelcome = () => { setHomeView('ultron'); setOnLive(false); setActivePage(null); setOnWelcome(true); };
  const createPage = () => {
    const id = `page-${pageSeq.current++}`;
    setPages(prev => [...prev, { id, title: 'New page' }]);
    openPage(id);
  };

  // Per-page conversation, owned here so it survives navigating away and back.
  // DEMO ONLY — in-memory; Ultron mocks a reply a beat after each message.
  const [pageChats, setPageChats] = useState<Record<string, NewPageMessage[]>>({});
  const [pageReplying, setPageReplying] = useState<Record<string, boolean>>({});
  const pageTimers = useRef<Record<string, number>>({});
  const sendToPage = (pageId: string, text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const replyCount = (pageChats[pageId] ?? []).filter(m => m.role === 'ultron').length;
    setPageChats(prev => ({ ...prev, [pageId]: [...(prev[pageId] ?? []), { role: 'operator', text: trimmed }] }));
    setPageReplying(prev => ({ ...prev, [pageId]: true }));
    pageTimers.current[pageId] = window.setTimeout(() => {
      setPageChats(prev => ({ ...prev, [pageId]: [...(prev[pageId] ?? []), { role: 'ultron', text: mockUltronReply(trimmed, replyCount) }] }));
      setPageReplying(prev => ({ ...prev, [pageId]: false }));
      delete pageTimers.current[pageId];
    }, 1100);
  };
  // Delete a page (from its row's ⋯ menu) — drops it and its conversation. If it
  // was the open one, fall back to the Live landing.
  const deletePage = (id: string) => {
    if (pageTimers.current[id]) { window.clearTimeout(pageTimers.current[id]); delete pageTimers.current[id]; }
    setPages(prev => prev.filter(p => p.id !== id));
    setPageChats(prev => { const { [id]: _drop, ...rest } = prev; return rest; });
    setPageReplying(prev => { const { [id]: _drop, ...rest } = prev; return rest; });
    if (activePage === id) { setActivePage(null); setOnLive(true); }
  };

  // The feed section follows the selected case: it's derived from that case's
  // current status, so acting on a case (which shifts its status) carries the
  // view — and the active sidebar group — along with it. Until the user opens a
  // case, the page rests on the Live landing.
  const homeSection: UltronSection = onLive
    ? 'live'
    : ultron.selectedThread
    ? STATUS_SECTION[ultron.selectedThread.status]
    : 'new';

  // URL-hash sync — kept so deep links survive refresh on both chromes.
  useHashSync(
    { activeId, secActiveId, selectedPersonaId, activePageId },
    { setActiveId, setSecActiveId, setSelectedPersonaId, setActivePageId },
  );

  // Rail rendering: only Ultron is wired. Every other module renders greyed-out
  // and disabled (Settings, rendered separately by PrimaryNav, stays enabled).
  const withActive = (items: typeof PRIMARY_ITEMS): PrimaryNavItem[] =>
    items.map(item => ({
      ...item,
      isActive: item.id === activeId,
      disabled: item.id !== 'ultron',
      onClick: item.id === 'ultron' ? () => setActiveId('ultron') : undefined,
    }));

  const pageEntries: SecondaryNavPageEntry[] = [
    {
      id: 'memory',
      label: 'Memory',
      icon: <Save01Icon size={16} />,
      isActive: homeView === 'memory',
      onClick: () => setHomeView('memory'),
    },
    { id: 'settings', label: 'Settings', icon: <SettingsGearIcon size={16} /> },
  ];

  const topNavHeading: React.ReactNode = (
    <HeadingText>{homeView === 'memory' ? 'Memory' : homeView === 'account' ? 'Account database' : 'Ultron'}</HeadingText>
  );

  // Operator-created pages, listed as a group at the top of the Ultron sidebar
  // (above the case groups). Selecting one opens it; the active one highlights.
  const pageMenuEntries: SecondaryNavMenuEntry[] = [
    {
      type: 'group',
      group: {
        id: 'pages',
        label: 'Pages',
        icon: <DocumentIcon />,
        trailingBadge: <Badge>{pages.length + 1}</Badge>,
        defaultExpanded: true,
        outlined: false,
        children: [
          // Persistent Welcome entry — the post-onboarding recap, kept here so
          // it's always reachable instead of vanishing on the first nav click.
          {
            id: 'welcome',
            label: 'Welcome',
            icon: <DocumentIcon />,
            isActive: onWelcome,
            onClick: openWelcome,
          },
          // Operator-created pages, each deletable from its ⋯ menu.
          ...pages.map(p => ({
            id: p.id,
            label: p.title,
            icon: <DocumentIcon />,
            isActive: activePage === p.id,
            onClick: () => openPage(p.id),
            trailingSlot: <PageRowActions onDelete={() => deletePage(p.id)} />,
          })),
        ],
      },
    },
    { type: 'divider', id: 'pages-divider' },
  ];

  // Home renders its secondary-nav menu through the standard pipeline (same
  // MenuGroupItem / MenuSingleItem components as every other app) so the rows
  // match: collapsible groups, 32px rows, tertiary labels, Tag counts.
  const homeMenuEntries: SecondaryNavMenuEntry[] = homeView === 'account'
    ? ACCOUNT_COLLECTIONS.map(c => ({
        type: 'single' as const,
        item: {
          id: c.id, label: c.label, icon: c.icon,
          isActive: accountCollection === c.id,
          onClick: () => setAccountCollection(c.id),
        },
      }))
    : [...pageMenuEntries, ...ultron.groups.flatMap<SecondaryNavMenuEntry>(g => {
        // Each group lists its cases as children; clicking one opens that case
        // on the group's page. New and Done are paged one case per page; the
        // New group relabels the needs-attention bucket.
        const childSection: UltronSection =
          g.id === 'needs_attention' ? 'new' : g.id === 'resolved' ? 'done' : 'working';
        // The New group only lists cases that have animated in on the top-level
        // deck (see revealedNewIds) — so it fills one-by-one in lockstep with the
        // deck reveal rather than showing the whole backlog up front. Still-
        // analyzing cases (no deck card) always show. The deck itself caps the
        // reveal at its top 5, so no extra slice is needed here.
        const groupThreads = g.id === 'needs_attention'
          ? g.threads.filter(t => t.status === 'analyzing' || ultron.revealedNewIds.includes(t.id))
          : g.threads;
        const groupEntry = {
          type: 'group' as const,
          group: {
            id: g.id,
            label: g.id === 'needs_attention' ? 'New' : g.label,
            icon: HOME_GROUP_ICON[g.id],
            trailingBadge: <Badge>{groupThreads.length}</Badge>,
            defaultExpanded: true,
            outlined: false,
            children: groupThreads.map(t => ({
              id: t.id,
              // Cases Ultron just detected on the Live landing type their title
              // in (the moment of detection); authored cases show it plainly.
              // The label is action-oriented and phrased for the case's current
              // lifecycle group (New → the ask, Working → in-progress, Done →
              // completed); see caseLabels.ts.
              label: t.id.startsWith('detected_')
                ? <TypingText text={caseLabel(t.name, childSection)} />
                : caseLabel(t.name, childSection),
              // Needs-attention cases carry an orange Pulse mark — a breathing
              // core that flags the case for the user — except while Ultron is
              // still analyzing, which keeps the orbiting mark. Working cases
              // use the orbiting/idling identity mark; Done cases the Pulse
              // mark (orange while unresolved, muted once settled).
              icon: childSection === 'new'
                ? (t.status === 'analyzing'
                    ? <AgentMark mark="orbit2d" size={32} tone="auto" state="active" aria-label="Analyzing" />
                    : <AgentMark mark="pulse" size={32} tone="auto" state="active" color="var(--color-orange-content-tertiary)" aria-label="Needs attention" />)
                : childSection === 'working'
                ? <AgentMark mark="orbit2d" size={32} tone="auto" state={t.status === 'in_progress' ? 'active' : 'idle'} aria-label="Working" />
                : <AgentMark mark="pulse" size={32} tone="auto" state={t.status === 'unresolved' ? 'idle' : 'static'} color={t.status === 'unresolved' ? 'var(--color-orange-content-tertiary)' : ultron.viewedIds.includes(t.id) ? 'var(--color-slate-content-tertiary)' : 'var(--color-green-content-tertiary)'} aria-label="Done" />,
              isActive: homeView === 'ultron' && !onLive && !activePage && homeSection === childSection && ultron.selectedId === t.id,
              onClick: () => { setHomeView('ultron'); setOnWelcome(false); setOnLive(false); setActivePage(null); ultron.setSelectedId(t.id); },
              // Once the operator saves this case's play as a reusable workflow, the
              // row carries a trailing automation glyph so the saved state is legible
              // from the list without opening the case.
              trailingSlot: ultron.savedWorkflowIds.includes(t.id)
                ? (
                    <Tooltip content="Saved as workflow" placement="top">
                      <SavedWorkflowMark aria-label="Saved as workflow"><AutomationIcon /></SavedWorkflowMark>
                    </Tooltip>
                  )
                : undefined,
            })),
          },
        };
        // Divider above the Working and Done groups.
        return g.id === 'resolved'
          ? [{ type: 'divider' as const, id: 'done-divider' }, groupEntry]
          : g.id === 'live'
          ? [{ type: 'divider' as const, id: 'working-divider' }, groupEntry]
          : [groupEntry];
      })];

  // Module catalog for PrimarySheet + ModuleDrawer. Groups mirror the
  // three-tier layout of the desktop PrimaryNav (main / tools / bottom).
  const mobileModuleGroups: MobileModuleGroup[] = [
    { id: 'main',   label: 'Workspace', items: withActive(PRIMARY_ITEMS) },
    { id: 'tools',  label: 'Tools',     items: withActive(TOOL_ITEMS) },
    { id: 'bottom', label: 'Apps',      items: withActive(BOTTOM_ITEMS) },
  ];

  return (
    <>
    <ThemeToggle />
    <AppShell
      // PrimaryNav
      items={withActive(PRIMARY_ITEMS)}
      toolItems={withActive(TOOL_ITEMS)}
      bottomItems={withActive(BOTTOM_ITEMS)}
      workspace={{ id: 'acme', name: '{Account.name}', initial: 'A' }}
      user={{ name: 'Tito Goldstein', initials: 'TG', avatarColor: '#ee9c2d' }}
      newItemId="app-tool"
      aiItemId="ai-home"
      // SecondaryNav — always the Ultron sidebar; no header bar (heading +
      // header slot omitted), so the identity card sits at the very top.
      secNavHeading=""
      menuEntries={homeMenuEntries}
      // Ultron's identity (circle mark + title + live activity) rides the top of
      // the Home secondary nav as a card, above the case groups.
      menuHeader={homeView === 'ultron'
        ? (
            <UltronNavCard
              $active={onLive && !activePage}
              onClick={() => { setHomeView('ultron'); setOnWelcome(false); setOnLive(true); setActivePage(null); }}
              aria-label="Live — Ultron presence"
              aria-current={onLive && !activePage ? 'page' : undefined}
            >
              <UltronIdentityCard onNew={createPage} />
            </UltronNavCard>
          )
        : undefined}
      pageEntries={pageEntries}
      showSecondaryNav
      showTopNav={homeView !== 'ultron'}
      showSearch={false}
      // TopNav
      heading={topNavHeading}
      actions={[]}
      showActivityButton
      showPonderButton
      // Mobile chrome opt-in
      mobileNav={{
        activeId,
        secActiveId,
        activePageId,
        selectedPersonaId,
        moduleGroups: mobileModuleGroups,
        primaryLabel: 'Ultron',
        secondaryLabel: undefined,
        onMobileNavigate: (id) => { if (id === 'ultron') setActiveId('ultron'); },
        onSelectPersona: setSelectedPersonaId,
      }}
    >
      {homeView === 'memory' ? (
        <MemoryPage />
      ) : homeView === 'account' ? (
        <AccountDatabasePage collectionId={accountCollection} />
      ) : onWelcome ? (
        <WelcomeThread answers={introAnswers} />
      ) : activePage ? (
        <NewPage
          key={activePage}
          messages={pageChats[activePage] ?? []}
          replying={pageReplying[activePage] ?? false}
          onSend={text => sendToPage(activePage, text)}
        />
      ) : (
        <UltronPage
          threads={ultron.threads}
          stageById={ultron.stageById}
          section={homeSection}
          analyzedIds={ultron.analyzedIds}
          outboundByThread={ultron.outboundByThread}
          chatByThread={ultron.chatByThread}
          selectedId={ultron.selectedId}
          onDecide={ultron.decide}
          onAction={ultron.commit}
          onCompleteRun={ultron.completeRun}
          onRefinement={ultron.refine}
          onSaveWorkflow={ultron.saveWorkflow}
          pendingWorkflowIds={ultron.pendingWorkflowIds}
          onToggleSaveWorkflow={ultron.toggleWorkflowSave}
          savedWorkflowIds={ultron.savedWorkflowIds}
          onSend={ultron.sendMessage}
          replyingIds={ultron.replyingIds}
          onStop={ultron.stopReply}
          onClose={() => { setHomeView('ultron'); setOnWelcome(false); setOnLive(true); }}
          onDetectRisk={ultron.detectRisk}
          onRevealNew={ultron.revealNew}
        />
      )}
    </AppShell>
    </>
  );
}
