/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — Run details panel.
   A right-side panel documenting ONE step's agent run. It renders directly off
   the step's own `usage` (ActivityUsage = UsageEntry[], normalized per-event by
   usageForThread) — so the drawer always reflects the actual tools and data that
   step drove, never a shared fixture. Each tool is one collapsible section in a
   single flat accordion (no phase grouping).

   Built entirely on Alloy primitives (Accordion, ListItem, Avatar, StatusTag,
   Tag, Eyebrow, Button + icons). The only Teambridge-local pieces are
   layout chrome (the panel/overlay shell, group spacing, the tinted message
   container) and the monospace QUERY surface (`QueryBlock`) — Alloy has no
   code-block primitive yet. QueryBlock is token-only and FLAGGED below as a
   candidate to promote into Alloy.
   ───────────────────────────────────────────────────────────────────────────── */

import { useState, useEffect, type ComponentType } from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';
import {
  Accordion, AccordionItem, Avatar, ListItem, StatusTag, Eyebrow, Button,
  XCloseIcon, ChevronRightIcon, ChevronDownIcon, CheckCircleIcon, CheckIcon, Copy01Icon, ClipboardCheckIcon,
  CheckVerified01Icon, LineChartUp01Icon, MessageCircle02Icon,
  File04Icon, LinkExternal01Icon, SearchMdIcon, Edit02Icon,
} from 'alloy-design-system';
import { avatarUrl } from './fixtures';
import type {
  ActivityUsage, UsageEntry, UsageIconKey, UsageCandidate, UsageThread, ThreadMessage,
} from './fixtures';

// ── Presentation (derived from each entry's icon — keeps the data layer component-free) ──

type IconCmp = ComponentType<{ size?: number }>;

/** Per-icon leading glyph for the Avatar tile + the inline "tool used" tag.
 *  Each glyph is chosen to read as its tool type: a magnifying glass for the
 *  replacement search, a checklist clipboard for policy, a verified shield for
 *  the credential check, a chat bubble for Engage, a trending-up chart for the
 *  incentive analysis. */
const USAGE_ICON: Record<UsageIconKey, IconCmp> = {
  /* Replacement matching — a magnifying glass over the candidate pool. */
  search: SearchMdIcon,
  /* Read Data — a magnifying glass, reading the record before planning. */
  read: SearchMdIcon,
  message: MessageCircle02Icon,
  policy: ClipboardCheckIcon,
  shield: ClipboardCheckIcon,
  schedule: ClipboardCheckIcon,
  /* Incentive analysis — a trending-up line chart (compares past fills). */
  analytics: LineChartUp01Icon,
  clock: CheckCircleIcon,
  /* Credential verification — a verified shield. */
  monitor: CheckVerified01Icon,
  /* Engage notification — a chat glyph (matches the Engage outreach section). */
  bell: MessageCircle02Icon,
  record: File04Icon,
  task: ClipboardCheckIcon,
};

/** A friendly section title per category (distinct from the tool's own name, which
 *  shows as the "Tool used" tag). Keyed by the entry's glyph. */
const SECTION_TITLE: Partial<Record<UsageIconKey, string>> = {
  search: 'Replacement match',
  shield: 'Policy Engine',
  policy: 'Policy Engine',
  monitor: 'Credential check',
  analytics: 'Incentive recommendation',
  message: 'Engage',
  bell: 'Engage',
  task: 'Tasks',
};
const titleFor = (e: UsageEntry): string =>
  // The Update Data write qualifies its title with the record type it wrote
  // ("Update Data: Shift") — derived from the payload, not hardcoded.
  e.updateData ? `Update Data: ${e.updateData.recordType}` : SECTION_TITLE[e.icon] ?? e.name;

/** A reply-bearing thread reads as success; a still-delivered one stays neutral. */
const threadStatus = (t: UsageThread): 'success' | 'info' | 'neutral' =>
  t.tone === 'positive' ? 'success' : t.tone === 'chatting' ? 'info' : 'neutral';

/** Display sort: interested (positive) first, then chatting, then delivered no-reply. */
const TONE_ORDER: Record<UsageThread['tone'], number> = { positive: 0, chatting: 1, muted: 2 };

// ── Panel ───────────────────────────────────────────────────────────────────────

/* Tweaks to Alloy's md AccordionItem:
   · Type — the title drops to 14px and the subtitle to the paragraph-sm size (12px),
     via the accordion's own size custom properties (doubled `&&` so they beat the
     `.size_md` defaults regardless of cascade order).
   · Header — 12px top/bottom breathing room (Alloy's default is 8px). Targets the
     header row by the hit-target button it wraps.
   · Chevron — moved to the trailing (right) edge via flex `order` and shrunk to a
     small 16px glyph (Alloy renders it leading and larger by default). Reordering
     it past the flex-1 label block also pulls the avatar tile + label flush LEFT.
   · Body — the expanded body (`[role=region] > .bodyInner > .bodyContent`) sheds
     Alloy's inset card and indents to align its sections LEFT under the title text
     (header pad + avatar tile + header gap = 12 + 32 + 12 = 56px), with a 12px
     right gutter — so each section hangs nested beneath the row's label. */
const RunItem = styled(AccordionItem)`
  && {
    --accordion-label-size: var(--text-sm);
    --accordion-desc-size: var(--text-xs);
  }
  & > div:has(> [data-accordion-header-button]) {
    padding-top: var(--space-3);
    padding-bottom: var(--space-3);
  }
  /* Chevron to the trailing edge, smaller. order:1 reorders it past the order-0
     label block (which is flex: 1), so it lands flush right; the 16px box/glyph
     reads smaller than the 32px tile it occupied before. */
  & [class*='_chevron_'] {
    order: 1;
    width: var(--space-4);
    height: var(--space-4);
    color: var(--color-content-tertiary);
  }
  & [class*='_chevron_'] svg {
    width: var(--space-4);
    height: var(--space-4);
  }
  & [class*='_description_'] {
    color: var(--color-content-disabled);
    /* Alloy clamps the description to a single line (white-space: nowrap +
       ellipsis). Let it wrap and clamp at two lines instead, so a collapsed
       section surfaces more of its context before truncating. */
    white-space: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
  }
  /* 12px gap between the leading avatar tile and the label/description block. */
  & [class*='_headerContent_'] {
    gap: var(--space-3);
  }
  & [role='region'] > div > div {
    /* No inset card — the body indents so its sections line up LEFT under the
       title text (header pad + avatar tile + header gap = 12 + 32 + 12 = 56px),
       with a 12px right gutter and 16px below the last section. */
    margin: 0;
    padding: 0 var(--space-3) var(--space-4)
      calc(var(--space-8) + var(--space-3) + var(--space-3));
    background: none;
  }
  /* Inset the inter-item divider 12px on each side. Suppress Alloy's full-bleed
     border (its selector needs &&& to override) and draw the line with a pseudo.
     An expanded section drops its divider — the tinted body card already closes
     the section visually, so a line under it would double the boundary. */
  &&&:not(:last-child) {
    border-bottom: none;
  }
  &:not(:last-child):not([data-expanded='true'])::after {
    content: '';
    position: absolute;
    left: var(--space-3);
    right: var(--space-3);
    bottom: 0;
    height: 1px;
    background: var(--color-border-opaque);
  }
`;

/* The leading tile fronting each tool section — a neutral rounded square (matching
   the 32px avatar footprint used elsewhere in the panel) with the tool's glyph
   centered. Alloy's Avatar renders no icon slot (image/initials only), so this is
   a purpose-built tile for the tool glyphs. */
const ToolTile = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`;

export interface RunDetailsPanelProps {
  open: boolean;
  onClose: () => void;
  /** Run-specific title, e.g. the step's headline. @default "Run details" */
  title?: string;
  /** This step's tools, normalized to its case (see usageForThread). */
  usage: ActivityUsage;
}

/** Enter/exit duration for the drawer (scrim fade + panel slide). Kept in JS so the
 *  unmount waits for the exit transition; mirrored in the styled transitions below. */
const PANEL_ANIM_MS = 240;

export function RunDetailsPanel({ open, onClose, title = 'Run details', usage }: RunDetailsPanelProps) {
  // Single-open accordion — one controlled Accordion so opening any section
  // collapses the others. Keyed by entry index.
  const [openId, setOpenId] = useState<string>(() => (usage.length ? '0' : ''));

  // Two-phase visibility so the drawer animates BOTH ways: `mounted` keeps it in the
  // tree through its exit transition; `shown` drives the enter/exit state (flipped a
  // frame after mount so the browser paints the closed state first, then transitions).
  const [mounted, setMounted] = useState(open);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (open) {
      setMounted(true);
      let raf2 = 0;
      const raf1 = requestAnimationFrame(() => { raf2 = requestAnimationFrame(() => setShown(true)); });
      return () => { cancelAnimationFrame(raf1); cancelAnimationFrame(raf2); };
    }
    setShown(false);
    const t = setTimeout(() => setMounted(false), PANEL_ANIM_MS);
    return () => clearTimeout(t);
  }, [open]);

  if (!mounted) return null;

  // Count tappable sections (matches the trail's "N tools used" trigger). Some
  // sections share an underlying engine, so this counts operations, not distinct tools.
  const toolCount = usage.length;
  const subtitle = `${toolCount} ${toolCount === 1 ? 'tool' : 'tools'} used · tap any to see its query and results`;

  // Tag each entry with its original index so it's the stable accordion value.
  const indexed = usage.map((entry, index) => ({ entry, index }));

  return createPortal(
    <Overlay role="dialog" aria-modal="true" aria-label={title}>
      <Scrim $shown={shown} onClick={onClose} />
      <Panel $shown={shown}>
        <Header>
          <Headings>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </Headings>
          <Button variant="ghost" size="sm" iconOnly aria-label="Close run details" onClick={onClose}>
            <XCloseIcon size={18} />
          </Button>
        </Header>

        <Body>
          <HeaderFade aria-hidden="true" />
          <Accordion type="single" collapsible value={openId} onValueChange={v => setOpenId(typeof v === 'string' ? v : '')}>
            {indexed.map(({ entry, index }) => {
              // An Update Data write fronts a pencil (matching its titleFor special
              // case — the read keeps the file glyph); every other tile keeps its
              // per-tool glyph (magnifying glass, clipboard, shield, chat, chart).
              const Icon = entry.updateData ? Edit02Icon : USAGE_ICON[entry.icon];
              return (
                <RunItem
                  key={index}
                  value={String(index)}
                  label={titleFor(entry)}
                  description={entry.description}
                  leadingSlot={
                    <ToolTile aria-hidden="true"><Icon size={18} /></ToolTile>
                  }
                >
                  <SectionBody>
                    <EntryResult entry={entry} />
                  </SectionBody>
                </RunItem>
              );
            })}
          </Accordion>
        </Body>
      </Panel>
    </Overlay>,
    document.body,
  );
}

// ── Result body — renders whichever detail the entry carries ─────────────────────
// An execution entry carries exactly one of policies(+eligible) / threads /
// notification; a planning entry carries a query + summary. Each section renders
// only if its field is present, so one body shape covers both modes.

function EntryResult({ entry }: { entry: UsageEntry }) {
  return (
    <>
      {entry.channel && (
        <Field>
          <Eyebrow>Channel</Eyebrow>
          <SummaryText>{entry.channel}</SummaryText>
        </Field>
      )}
      {entry.message && (
        <Field>
          <Eyebrow>Message</Eyebrow>
          <MessageContainer>{entry.message}</MessageContainer>
        </Field>
      )}
      {entry.recordDetails && (
        <Field>
          {/* The record snapshot the read pulled — same key/value card as an
              Update Data write, but read-only (plain values, no change arrows). */}
          <Eyebrow>Record details</Eyebrow>
          <DetailRows>
            {entry.recordDetails.map((row, i) => (
              <ListItem
                key={i}
                size="sm"
                label={row.label}
                trailingSlot={<DetailValue $success={row.emphasis === 'success'} $placeholder={!row.value}>{row.value || '???'}</DetailValue>}
              />
            ))}
          </DetailRows>
        </Field>
      )}
      {entry.policies && (
        <Field>
          <Eyebrow>{`Policies evaluated · ${entry.policies.total}`}</Eyebrow>
          <PolicyList>
            {entry.policies.items.map((p, i) => (
              <PolicyRow key={i}>
                <PolicyCheck aria-hidden="true"><CheckIcon size={16} /></PolicyCheck>
                <span>{p}</span>
              </PolicyRow>
            ))}
          </PolicyList>
        </Field>
      )}
      {entry.eligible && (
        <Field>
          <Eyebrow>{`Returned · ${entry.eligible.total} ${entry.eligible.unit}`}</Eyebrow>
          <CandidateList candidates={entry.eligible.items} total={entry.eligible.total} moreNoun={entry.eligible.moreNoun} />
        </Field>
      )}
      {entry.threads && (
        <Field>
          <Eyebrow>{`Threads · ${entry.threads.total}`}</Eyebrow>
          <ThreadList threads={entry.threads} />
        </Field>
      )}
      {entry.notification && (
        <>
          <Field>
            <Eyebrow>Recipient</Eyebrow>
            <RecipientCard>
              <ListItem
                size="md"
                divider={false}
                leadingSlot={<Avatar size="sm" src={avatarUrl(entry.notification.seed)} name={entry.notification.name} alt="" style={{ ['--avatar-bg' as never]: 'var(--color-bg-secondary)' }} />}
                label={entry.notification.name}
                description={entry.notification.role}
                trailingSlot={
                  <Button
                    variant="ghost"
                    size="xs"
                    iconOnly
                    aria-label={`Open ${entry.notification.name}'s profile`}
                  >
                    <LinkExternal01Icon size={14} />
                  </Button>
                }
              />
            </RecipientCard>
          </Field>
          <Field>
            <Eyebrow>Message</Eyebrow>
            <MessageContainer>{entry.notification.message}</MessageContainer>
          </Field>
        </>
      )}
      {entry.task && (
        <Field>
          <Eyebrow>Task</Eyebrow>
          {/* The created task's detail — the same key/value card as an UpdateData
              write (muted labels, emphasized values). */}
          <DetailRows>
            {entry.task.fields.map((row, i) => (
              <ListItem
                key={i}
                size="sm"
                label={row.label}
                trailingSlot={
                  row.emphasis === 'success-tag'
                    ? <StatusTag status="success" size="sm">{row.value}</StatusTag>
                    : <DetailValue $success={row.emphasis === 'success'} $placeholder={!row.value}>{row.value || '???'}</DetailValue>
                }
              />
            ))}
          </DetailRows>
        </Field>
      )}
      {entry.updateData && (
        <Field>
          {/* Eyebrow uppercases, so "Record details" renders as "RECORD DETAILS". */}
          <Eyebrow>Record details</Eyebrow>
          {/* A multi-record write (`groups`) renders one card per record under the
              single eyebrow; a single-record write keeps its one `fields` card. */}
          {(entry.updateData.groups ?? [entry.updateData.fields ?? []]).map((rows, g) => (
            <DetailRows key={g}>
              {rows.map((row, i) => (
                <ListItem
                  key={i}
                  size="sm"
                  label={row.label}
                  trailingSlot={
                    row.emphasis === 'change' && row.previousValue
                      ? (
                          <ChangeValue>
                            <DroppedValue>{row.previousValue}</DroppedValue>
                            <ChangeArrow aria-hidden="true">→</ChangeArrow>
                            <FilledValue>{row.value}</FilledValue>
                          </ChangeValue>
                        )
                      : row.emphasis === 'success-tag'
                      ? <StatusTag status="success" size="sm">{row.value}</StatusTag>
                      : <DetailValue $success={row.emphasis === 'success'} $placeholder={!row.value}>{row.value || '???'}</DetailValue>
                  }
                />
              ))}
            </DetailRows>
          ))}
        </Field>
      )}
      {entry.recommendation && (
        <Field>
          <Eyebrow>Recommendation</Eyebrow>
          <RecommendationCard>
            <RecommendationRow>
              <RecommendationKey>Incentive?</RecommendationKey>
              <RecommendationAmount $add={entry.recommendation.add}>
                {entry.recommendation.add ? entry.recommendation.amount : 'No bonus'}
              </RecommendationAmount>
            </RecommendationRow>
            <RecommendationRow>
              <RecommendationKey>Reason</RecommendationKey>
              <RecommendationRationale>{entry.recommendation.rationale}</RecommendationRationale>
            </RecommendationRow>
          </RecommendationCard>
        </Field>
      )}
      {/* Query and "What it does" both tuck to the bottom — the raw invocation and
          the plain-language recap sit under the concrete results rather than
          leading them. Both are always expanded (no sub-accordion), each a plain
          labeled field like the sections above. Query sits above "What it does". */}
      {entry.query && (
        <Field>
          <Eyebrow>Query</Eyebrow>
          <QueryBlock>{entry.query}</QueryBlock>
        </Field>
      )}
      {entry.summary && (
        <Field>
          <Eyebrow>What it does</Eyebrow>
          <SummaryText>{entry.summary}</SummaryText>
        </Field>
      )}
    </>
  );
}

/** The top ranked rows of an eligible pool; the remainder collapses behind a
 *  "+N more {moreNoun}" button that expands the full ranked list in place.
 *  Rows read "{name} … {match} · {distance}". The fixtures only carry the top
 *  rows, so the overflow rows are synthesized with monotonically decreasing
 *  match scores to keep the ranking reading plausibly. */
function CandidateList({ candidates, total, moreNoun }: { candidates: UsageCandidate[]; total: number; moreNoun: string }) {
  const [expanded, setExpanded] = useState(false);
  const shown = candidates.slice(0, 3);
  const more = total - shown.length;
  const baseMatch = parseFloat(shown[shown.length - 1]?.match ?? '4.5');
  const overflow = expanded
    ? Array.from({ length: more }, (_, i) => fillerCandidate(i, baseMatch))
    : [];
  const rows = [...shown, ...overflow];
  return (
    <>
      <CandidateRows>
        {rows.map((c, i) => (
          <ListItem
            key={i}
            size="sm"
            leadingSlot={<Avatar size="sm" src={avatarUrl(c.name)} name={c.name} alt="" style={{ ['--avatar-bg' as never]: 'var(--color-bg-secondary)' }} />}
            label={c.name}
            trailingSlot={<RowMeta>{`${c.match} · ${c.distance}`}</RowMeta>}
          />
        ))}
      </CandidateRows>
      {more > 0 && (
        <MoreButton type="button" onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}>
          {expanded ? `Show fewer ${moreNoun}` : `+${more} more ${moreNoun}`}
        </MoreButton>
      )}
    </>
  );
}

/* A bordered card wrapping a list of rows (eligible candidates, message threads)
   — rows inset from the border (the size class sets --li-px on the row itself, so
   override it on the row, a direct child div). The last row's divider is suppressed
   so it doesn't double up with the card border. Any "+N more" line/toggle sits
   below the card (a sibling), not inside it. */
const CandidateRows = styled.div`
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;

  & > div {
    --li-px: var(--space-3);
    /* Names use the Label/sm type size. */
    --li-label-size: var(--text-xs);
    /* Draw the row divider inset 12px from each edge (aligned with the row's
       content padding) rather than the default full-width border. */
    position: relative;
    border-bottom-color: transparent;
  }
  & > div::after {
    content: '';
    position: absolute;
    left: var(--space-3);
    right: var(--space-3);
    bottom: 0;
    border-bottom: 1px solid var(--color-border-opaque);
  }
  & > div:last-child::after {
    display: none;
  }
`;

/* UpdateData key/value rows — the same bordered card as CandidateRows, but the row
   reads label→value: the ListItem label is the muted field name on the left, while
   the value carries the emphasis on the right (DetailValue, or a success StatusTag
   for an emphasized row). */
const DetailRows = styled(CandidateRows)`
  /* 8px of breathing room inside the card's top/bottom edges — the rows themselves
     stay tight (see --li-py below), so the padding sits on the card, not each row.
     The column gap spaces the rows apart (the rows carry no vertical padding of
     their own). */
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
  padding-bottom: var(--space-2);

  & [class*='_label_'] {
    color: var(--color-content-tertiary);
  }
  /* Condensed key/value block — no inter-row dividers, and the rows shed their
     48/36px min-height so each collapses to just its content plus a tight vertical
     pad, removing the extra height and inter-row gaps. */
  & > div::after {
    display: none;
  }
  & > div {
    --li-py: 0;
    --li-min-height: auto;
    min-height: 0;
  }
`;

/* The written value on an UpdateData row — emphasized (primary, medium weight)
   against the muted label, right-aligned to the trailing edge. `$success` renders
   the value in the success green (an `emphasis: 'success'` field) — the row the
   update actually changed — while the context rows stay primary. */
const DetailValue = styled.span<{ $success?: boolean; $placeholder?: boolean }>`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  /* A missing value renders as a muted "???" placeholder (disabled tone) so the row
     reads as "no data yet" rather than a blank trailing edge. */
  color: ${p =>
    p.$placeholder
      ? 'var(--color-content-disabled)'
      : p.$success
        ? 'var(--color-success-content)'
        : 'var(--color-content-primary)'};
  text-align: right;
`;

/* A field REPLACEMENT value — the dropped value struck through, then the new value
   in success green, reading as "was → now". Plain text (no tag), right-aligned. */
const ChangeValue = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
`;

const DroppedValue = styled.span`
  color: var(--color-content-disabled);
  text-decoration: line-through;
`;

const ChangeArrow = styled.span`
  color: var(--color-content-tertiary);
`;

const FilledValue = styled.span`
  color: var(--color-success-content);
`;

/* Synthesize an overflow candidate row. Fixtures only ship the top 3 ranked
   rows, so the expanded list fills the remainder with deterministic names and
   match scores that step down from the last real row. */
const FILLER_FIRST = ['Lena', 'Omar', 'Priya', 'Devon', 'Mara', 'Theo', 'Nadia', 'Cole', 'Ivy', 'Ravi', 'Greta', 'Sam', 'Yuki', 'Diego', 'Hana', 'Pete', 'Lola', 'Kofi'];
const FILLER_LAST = ['Brooks', 'Nguyen', 'Shah', 'Reyes', 'Ford', 'Klein', 'Park', 'Owens', 'Diaz', 'Hale', 'Mori', 'Watts', 'Cruz', 'Bauer', 'Singh', 'Lowe'];

function fillerCandidate(i: number, baseMatch: number): UsageCandidate {
  const first = FILLER_FIRST[i % FILLER_FIRST.length]!;
  const last = FILLER_LAST[(i * 7 + 3) % FILLER_LAST.length]!;
  const match = Math.max(3.0, baseMatch - (i + 1) * 0.1);
  const distance = (4 + ((i * 13) % 90) / 10).toFixed(1);
  return { name: `${first} ${last}`, match: `${match.toFixed(1)} match`, distance: `${distance} mi` };
}

/** The Engage outreach threads, top rows in a card with a "+N more / Show fewer"
 *  toggle that expands the full list in place. Each row drills into its thread on
 *  the Engage surface. Fixtures only ship the top rows, so the overflow rows are
 *  synthesized as delivered-no-reply threads (the common state for the long tail). */
const COLLAPSED_THREADS = 3;

function ThreadList({ threads }: { threads: { total: number; moreNoun: string; items: UsageThread[] } }) {
  const [expanded, setExpanded] = useState(false);
  // Which warm thread's conversation is open (only one at a time). Keyed by row identity.
  const [openKey, setOpenKey] = useState<string | null>(null);

  // Sort the fixture threads interested → chatting → delivered, then synthesize the
  // delivered no-reply long tail to reach `total` (the common state for the rest).
  const real = [...threads.items].sort((a, b) => TONE_ORDER[a.tone] - TONE_ORDER[b.tone]);
  const fillerCount = Math.max(0, threads.total - real.length);
  const all = [...real, ...Array.from({ length: fillerCount }, (_, i) => fillerThread(i))];
  const shown = expanded ? all : all.slice(0, COLLAPSED_THREADS);
  const hidden = all.length - COLLAPSED_THREADS;

  return (
    <>
      <CandidateRows>
        {shown.map((t, i) => {
          const hasConvo = !!t.conversation?.length;
          const key = `${t.name}-${i}`;
          const open = hasConvo && openKey === key;
          return (
            <ThreadEntry key={key} data-open={open || undefined}>
              <ListItem
                size="md"
                /* Warm threads (interested / chatting) expand in place to reveal the
                   full transcript. The delivered no-reply tail has nothing to show. */
                interactive={hasConvo}
                onClick={hasConvo ? () => setOpenKey(open ? null : key) : undefined}
                aria-expanded={hasConvo ? open : undefined}
                leadingSlot={<Avatar size="sm" src={avatarUrl(t.seed)} name={t.name} alt="" style={{ ['--avatar-bg' as never]: 'var(--color-bg-secondary)' }} />}
                label={t.name}
                description={t.preview}
                trailingSlot={
                  <ThreadTrailing>
                    <StatusTag status={threadStatus(t)} size="sm">{t.status}</StatusTag>
                    {hasConvo
                      ? <ExpandChevron data-open={open || undefined}><ChevronDownIcon size={16} /></ExpandChevron>
                      : <ChevronRightIcon size={16} />}
                  </ThreadTrailing>
                }
              />
              {open && <Conversation messages={t.conversation!} />}
            </ThreadEntry>
          );
        })}
      </CandidateRows>
      {hidden > 0 && (
        <MoreButton type="button" onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}>
          {expanded ? `Show fewer ${threads.moreNoun}` : `+${hidden} more ${threads.moreNoun}`}
        </MoreButton>
      )}
    </>
  );
}

/** SMS-style transcript revealed under an expanded warm thread. Their lines sit
 *  left on a neutral surface; Ultron's outbound sits right on a solid fill. */
function Conversation({ messages }: { messages: ThreadMessage[] }) {
  return (
    <Convo>
      {messages.map((m, i) => (
        <Bubble key={i} $from={m.from}>
          <BubbleText>{m.text}</BubbleText>
          <BubbleTime>{m.time}</BubbleTime>
        </Bubble>
      ))}
    </Convo>
  );
}

/** Synthesize an overflow thread row. Fixtures ship only the top threads, so the
 *  expanded list fills the remainder with delivered-no-reply rows (deterministic
 *  names; the seed is the name, matching the candidate fillers). */
function fillerThread(i: number): UsageThread {
  const first = FILLER_FIRST[i % FILLER_FIRST.length]!;
  const last = FILLER_LAST[(i * 7 + 3) % FILLER_LAST.length]!;
  const name = `${first} ${last}`;
  return { seed: name, name, preview: 'Delivered · no reply yet', status: 'Delivered', tone: 'muted' };
}

// ── Styled — layout chrome + the flagged QueryBlock (token-only) ─────────────────

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  font-family: var(--font-sans);
`;

const Scrim = styled.div<{ $shown?: boolean }>`
  position: absolute;
  inset: 0;
  background: var(--color-bg-always-dark);
  opacity: ${p => (p.$shown ? 0.45 : 0)};
  transition: opacity ${PANEL_ANIM_MS}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`;

const Panel = styled.div<{ $shown?: boolean }>`
  position: relative;
  width: min(460px, 92vw);
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--color-bg-primary);
  border-left: 1px solid var(--color-border-opaque);
  box-shadow: var(--shadow-below-high);
  /* Slides in from the right edge on open, back out on close. */
  transform: translateX(${p => (p.$shown ? '0' : '100%')});
  transition: transform ${PANEL_ANIM_MS}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; transform: none; }
`;

const Header = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
`;

const Headings = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`;

const Title = styled.h2`
  margin: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`;

const Body = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`;

/* A sticky scrim pinned to the top of the scroll area — panel bg fading to
   transparent — so content dissolves under the header instead of meeting a hard
   edge as it scrolls. Sits in the top gutter at rest (over its own bg, so it's
   invisible); content scrolls up beneath it (z-index) and fades. Inert to clicks. */
const HeaderFade = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  height: var(--space-4);
  background: linear-gradient(to bottom, var(--color-bg-primary), transparent);
  pointer-events: none;
`;

/* The expanded body content for a section. */
const SectionBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`;

/* A labeled field — an Eyebrow over its value (query block, list, etc.). */
const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

/* FLAGGED: Teambridge-local monospace surface. Alloy has no Code/CodeBlock
   primitive — only the --font-mono token. This is a candidate to promote into
   Alloy as a `Code` / `CodeBlock` component. Token-only, so dark mode follows.
   The primary fill lifts the code off the tinted section card; the trailing
   button copies the query and flips to a check while the copy registers. */
function QueryBlock({ children }: { children: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(children);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };
  return (
    <QuerySurface>
      <QueryCode>{children}</QueryCode>
      <Button variant="ghost" size="xs" iconOnly aria-label={copied ? 'Copied' : 'Copy query'} onClick={copy}>
        {copied ? <CheckIcon size={14} /> : <Copy01Icon size={14} />}
      </Button>
    </QuerySurface>
  );
}

const QuerySurface = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);

  /* The copy control is a hover affordance: hidden at rest, revealed when the
     pointer is over the box. Opacity (not display) so it keeps its layout slot
     and stays keyboard-reachable — tabbing to it reveals it too. */
  & > button {
    opacity: 0;
    transition: opacity var(--duration-fast) var(--ease-default);
  }
  &:hover > button,
  & > button:focus-visible {
    opacity: 1;
  }
`;

const QueryCode = styled.pre`
  flex: 1;
  min-width: 0;
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-primary);
  white-space: pre-wrap;
  word-break: break-word;
  overflow-x: auto;
`;

/* Right-aligned muted meta on a candidate/eligible/returned row. */
const RowMeta = styled.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`;

/* One thread + its (optional) expandable conversation. Direct child of the
   CandidateRows card, so it inherits the row padding vars and gets the inset
   divider drawn by CandidateRows' `& > div::after`. */
const ThreadEntry = styled.div``;

/* Expand affordance — a chevron that rotates to point up when the row is open.
   Replaces the static drill-down chevron on warm (expandable) rows. */
const ExpandChevron = styled.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  transition: transform var(--duration-fast) var(--ease-default);

  &[data-open] {
    transform: rotate(180deg);
    color: var(--color-content-tertiary);
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`;

const convoIn = keyframes`
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* SMS transcript under an expanded row. Indented left to clear the avatar so the
   bubbles align under the row's text column. */
const Convo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3) var(--space-3);
  animation: ${convoIn} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const Bubble = styled.div<{ $from: ThreadMessage['from'] }>`
  max-width: 80%;
  align-self: ${p => (p.$from === 'them' ? 'flex-start' : 'flex-end')};
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-lg);
  background: ${p => (p.$from === 'them' ? 'var(--color-bg-secondary)' : 'var(--color-info-fill)')};
  color: ${p => (p.$from === 'them' ? 'var(--color-content-primary)' : 'var(--color-content-inverse)')};
  /* Squared-off tail corner on the side the bubble is anchored to. */
  border-bottom-${p => (p.$from === 'them' ? 'left' : 'right')}-radius: var(--radius-xs);
`;

const BubbleText = styled.div`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
`;

const BubbleTime = styled.div`
  margin-top: 2px;
  font-size: 10px;
  line-height: 1;
  opacity: 0.65;
  text-align: right;
`;

/* Thread row trailing cluster — status tag + a drill-down chevron (the chevron
   inherits the muted tertiary color via currentColor). */
const ThreadTrailing = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-content-tertiary);

  /* Lighter drill-down chevron — a step muted below the status tag so it reads as
     quiet affordance rather than competing with the tag. */
  & svg {
    color: var(--color-content-disabled);
  }
`;

const MoreButton = styled.button`
  appearance: none;
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  font-size: var(--text-sm);
  text-align: left;
  color: var(--color-content-tertiary);
  cursor: pointer;

  &:hover {
    color: var(--color-content-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
  }
`;

/* The evaluated policies as a bordered card — matching the eligible-candidate /
   thread cards below (see CandidateRows): each row insets its divider 12px from
   each edge, and the last row drops its divider so it doesn't double the border. */
const PolicyList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;
`;

const PolicyRow = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  /* Condensed 36px rows — a fixed height with horizontal-only padding, so the
     list reads tighter than the default 12px-all-around row. */
  height: 36px;
  padding: 0 var(--space-3);
  box-sizing: border-box;
  font-size: var(--text-sm);
  color: var(--color-content-primary);

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    left: var(--space-3);
    right: var(--space-3);
    bottom: 0;
    border-bottom: 1px solid var(--color-border-opaque);
  }
`;

const PolicyCheck = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-success-content);
`;

/* Single-recipient message body — a tinted, bordered container. */
const MessageContainer = styled.div`
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;

/* Recipient row as a bordered card — wraps the ListItem; overflow-hidden clips the
   row to the 6px radius. The row's padding is condensed to a uniform 8px (the md
   size sets --li-px/--li-py on the row itself, so override them on the row). */
const RecipientCard = styled.div`
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;
  overflow: hidden;

  & > div {
    --li-px: var(--space-3);
    --li-py: var(--space-2);
    /* 8px gap between the avatar and the name/role. */
    --li-gap: var(--space-2);
    /* Name uses the Label/sm type size. */
    --li-label-size: var(--text-xs);
  }
`;

/* The incentive verdict — a tinted, bordered card carrying the decision (a status
   tag + the amount) with the rationale beneath. */
const RecommendationCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
`;

/* One labeled row — a fixed muted key column on the left, the value on the right. */
const RecommendationRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`;

const RecommendationKey = styled.span`
  flex-shrink: 0;
  width: var(--space-20);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`;

/* The "Incentive?" answer — the bonus amount in success green when recommended,
   or a muted "No bonus" when none. */
const RecommendationAmount = styled.span<{ $add?: boolean }>`
  flex: 1;
  min-width: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: ${p => (p.$add ? 'var(--color-success-content)' : 'var(--color-content-primary)')};
`;

/* The "Reason" prose — plain, muted, wraps under its key. */
const RecommendationRationale = styled.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`;

/* The plan's "what it does" summary — plain prose, no container chrome. */
const SummaryText = styled.div`
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;
