/* ─────────────────────────────────────────────────────────────────────────────
   AccountDraftPane — the live account draft, browsed a category at a time.

   Every AI/admin/template change is a MutationEntry (via the shared log store).
   Rather than one status-grouped tree, the pane is now a set of category PAGES —
   Roles, Pay rates, Policies, Scheduling, Credentials, Permissions — each with the
   view that suits its data:
     · Roles / Pay rates / Credentials / Permissions → Table
     · Policies (Rate rules merged in)               → Cards
     · Scheduling                                     → Calendar (week coverage)
   The header title is a DropdownMenu that switches the active page. Each page is a
   pure fold over `store.active` filtered to that category's domains; undo re-folds.

   Extracted from the former standalone augment stage so the intro build flow can
   host it inline alongside its conversation. FLAGGED for reuse if a second
   surface ever needs the same tree.
   ───────────────────────────────────────────────────────────────────────────── */

import { useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  Button, Tag, Badge, DropdownMenu, Avatar,
  Table, TableHeader, TableHead, TableBody, TableRow, TableCell,
  ChevronDownIcon, DotsVerticalIcon, Copy01Icon, Trash01Icon, PlusIcon, Users03Icon,
} from 'alloy-design-system';
import type { DropdownMenuGroup } from 'alloy-design-system';
import type { ProvisioningStore } from './logStore';
import type { MutationEntry, MutationDomain } from './provisioningLog';
import { liquidGlass } from './glass';
import {
  RISK_COLOR, RISK_LABEL,
} from './shared';

interface AccountDraftPaneProps {
  store: ProvisioningStore;
  /** Entry ids appended in the last turn — briefly highlighted. */
  justAdded: string[];
}

// ── Category pages ───────────────────────────────────────────────────────────
// Each page collects one or more mutation domains and renders them with the view
// that fits the data. Rate rules fold into Policies; Custom fields surface as
// "Credentials". Order here is the order they list in the page switcher.
type PageView = 'table' | 'cards' | 'calendar' | 'jobs' | 'placement' | 'users' | 'locations' | 'permissions';

interface DraftPage {
  key: string;
  label: string;
  view: PageView;
  domains: MutationDomain[];
  // Header metadata bucket: record types are the data definitions (Roles, Pay
  // rates, Credentials); tools are the operational config (Policies, Scheduling,
  // Permissions).
  kind: 'record' | 'tool';
}

const PAGES: DraftPage[] = [
  { key: 'roles',       label: 'Roles',       view: 'table',    domains: ['role'],                kind: 'record' },
  { key: 'jobs',        label: 'Jobs',        view: 'jobs',     domains: ['rateValue'],           kind: 'record' },
  { key: 'placement',   label: 'Placement',   view: 'placement', domains: [],                     kind: 'record' },
  { key: 'users',       label: 'Users',       view: 'users',     domains: [],                     kind: 'record' },
  { key: 'locations',   label: 'Locations',   view: 'locations', domains: [],                     kind: 'record' },
  { key: 'policies',    label: 'Policies',    view: 'cards',    domains: ['policy', 'rateRule'],  kind: 'tool' },
  { key: 'scheduling',  label: 'Scheduling',  view: 'calendar', domains: ['scheduling'],          kind: 'tool' },
  { key: 'credentials', label: 'Credentials', view: 'table',    domains: ['customField'],         kind: 'record' },
  { key: 'permissions', label: 'Permissions', view: 'permissions', domains: ['permission'],        kind: 'tool' },
];

// The Jobs page is a shaped view (name + assigned role + pay rate) rather than a
// raw mutation-log fold, so it's backed by a representative fixture.
interface Job {
  id: string;
  name: string;
  role: string;
  payRate: string;
}

const JOBS: Job[] = [
  { id: 'job_icu_day',    name: 'ICU — Day shift',     role: 'Registered Nurse', payRate: '$48.00 / hr' },
  { id: 'job_er_night',   name: 'ER — Night shift',    role: 'Charge Nurse',     payRate: '$56.00 / hr' },
  { id: 'job_medsurg_we', name: 'Med-Surg — Weekend',  role: 'LPN',              payRate: '$34.00 / hr' },
  { id: 'job_float_prn',  name: 'Float pool — PRN',    role: 'CNA',              payRate: '$22.00 / hr' },
];

// Users and Locations are shaped views too — sampled from the Meridian demo
// worker roster / facilities files.
type UserStatus = 'Active' | 'On Assignment' | 'Inactive';

interface AccountUser {
  id: string;
  name: string;
  role: string;
  workerType: 'Per Diem' | 'Travel';
  facility: string;
  status: UserStatus;
}

const USERS: AccountUser[] = [
  { id: 'usr_1001', name: 'Alicia Nguyen',   role: 'Registered Nurse',            workerType: 'Per Diem', facility: "St. David's North", status: 'Active' },
  { id: 'usr_1002', name: 'Marcus Bell',     role: 'Registered Nurse',            workerType: 'Travel',   facility: 'Baylor Grapevine',  status: 'Active' },
  { id: 'usr_1003', name: 'Priya Shah',      role: 'Charge Nurse',                workerType: 'Per Diem', facility: "St. David's North", status: 'Active' },
  { id: 'usr_1004', name: 'Devon Carter',    role: 'Certified Nursing Assistant', workerType: 'Per Diem', facility: 'Methodist Dallas',  status: 'Active' },
  { id: 'usr_1005', name: 'Sofia Ramirez',   role: 'Registered Nurse',            workerType: 'Travel',   facility: 'Methodist Dallas',  status: 'On Assignment' },
  { id: 'usr_1006', name: "James O'Connor",  role: 'Licensed Vocational Nurse',   workerType: 'Per Diem', facility: 'Baylor Grapevine',  status: 'Active' },
  { id: 'usr_1007', name: 'Fatima Al-Rashid', role: 'Registered Nurse',           workerType: 'Per Diem', facility: "St. David's North", status: 'Inactive' },
  { id: 'usr_1008', name: 'Tyler Brooks',    role: 'Certified Nursing Assistant', workerType: 'Travel',   facility: 'Methodist Dallas',  status: 'On Assignment' },
  { id: 'usr_1009', name: 'Grace Kim',       role: 'Charge Nurse',                workerType: 'Per Diem', facility: 'Baylor Grapevine',  status: 'Active' },
  { id: 'usr_1010', name: 'Leon Whitfield',  role: 'Registered Nurse',            workerType: 'Travel',   facility: "St. David's North", status: 'Active' },
  { id: 'usr_1011', name: 'Hannah Torres',   role: 'Licensed Vocational Nurse',   workerType: 'Per Diem', facility: 'Methodist Dallas',  status: 'Active' },
  { id: 'usr_1012', name: 'Omar Haddad',     role: 'Registered Nurse',            workerType: 'Per Diem', facility: 'Baylor Grapevine',  status: 'Active' },
];

interface Facility {
  id: string;
  name: string;
  city: string;
  state: string;
  units: string[];
  beds: number;
}

const LOCATIONS: Facility[] = [
  { id: 'fac_01', name: "St. David's North", city: 'Austin',    state: 'TX', units: ['ICU', 'Med-Surg', 'ED'],           beds: 320 },
  { id: 'fac_02', name: 'Baylor Grapevine',  city: 'Grapevine', state: 'TX', units: ['Med-Surg', 'Telemetry', 'L&D'],    beds: 210 },
  { id: 'fac_03', name: 'Methodist Dallas',  city: 'Dallas',    state: 'TX', units: ['ICU', 'ED', 'Ortho', 'Med-Surg'],  beds: 585 },
];

// Row counts for the fixture-backed views — everything else folds the log.
const FIXTURE_COUNTS: Partial<Record<PageView, number>> = {
  jobs: JOBS.length,
  placement: JOBS.length,
  users: USERS.length,
  locations: LOCATIONS.length,
};

export function AccountDraftPane({ store, justAdded }: AccountDraftPaneProps) {
  // Count the active entries that land on each page, so the switcher can show them
  // and we can default to the first page that actually has content.
  const countsByPage = useMemo(() => {
    const map: Record<string, number> = {};
    for (const page of PAGES) {
      map[page.key] = FIXTURE_COUNTS[page.view]
        ?? store.active.filter(e => page.domains.includes(e.target.domain)).length;
    }
    return map;
  }, [store.active]);

  const [activeKey, setActiveKey] = useState<string>(() => {
    const firstWithData = PAGES.find(p => (
      store.active.some(e => p.domains.includes(e.target.domain))
    ));
    return (firstWithData ?? PAGES[0]).key;
  });

  const activePage = PAGES.find(p => p.key === activeKey) ?? PAGES[0];
  const entries = useMemo(
    () => store.active.filter(e => activePage.domains.includes(e.target.domain)),
    [store.active, activePage],
  );

  // Header metadata — how many record-type items vs tool items are staged.
  const { recordCount, toolCount } = useMemo(() => {
    const domainsFor = (kind: DraftPage['kind']) =>
      PAGES.filter(p => p.kind === kind).flatMap(p => p.domains);
    const recordDomains = domainsFor('record');
    const toolDomains = domainsFor('tool');
    return {
      recordCount: store.active.filter(e => recordDomains.includes(e.target.domain)).length,
      toolCount: store.active.filter(e => toolDomains.includes(e.target.domain)).length,
    };
  }, [store.active]);

  // Row actions. Delete folds the entry out of the active draft; Duplicate appends
  // a copy (fold keys on the new entry's id, so a reused ref is harmless — the copy
  // gets a distinct ref suffix anyway).
  const duplicate = (entry: MutationEntry) =>
    store.append({
      op: entry.op,
      target: { ...entry.target, ref: `${entry.target.ref}.copy`, label: `${entry.target.label} (copy)` },
      payload: entry.payload,
      source: entry.source,
    });

  // Admin-authored addition from a table's "+ New" row — appends an entry to the
  // active page's primary domain. A local counter keeps refs unique.
  const addSeq = useRef(0);
  const addEntry = (label: string) => {
    const domain = activePage.domains[0];
    store.append({
      op: 'add',
      target: { domain, ref: `admin.${domain}.${addSeq.current++}`, label },
      source: 'admin',
    });
  };

  // The page switcher — one group of options, one per page, with its item count as
  // a trailing number badge and the current page marked selected. Pages section
  // by their header-metadata bucket: record types first, then tools.
  const switcherOptions = (kind: DraftPage['kind']) =>
    PAGES.filter(p => p.kind === kind).map(p => ({
      id: p.key,
      label: p.label,
      trailingAction: 'badge' as const,
      badgeCount: countsByPage[p.key],
      selected: p.key === activeKey,
      onClick: () => setActiveKey(p.key),
    }));

  const switcherGroups: DropdownMenuGroup[] = [
    { id: 'records', heading: 'Data', options: switcherOptions('record') },
    { id: 'tools', heading: 'Tools', options: switcherOptions('tool') },
  ];

  return (
    <DraftFrame>
      <DraftCol>
        <ColHead>
          <DraftHeadRow>
            <DropdownMenu
              trigger={
                <PageSwitcher type="button" aria-label={`Switch page — showing ${activePage.label}`}>
                  <PageTitle>{activePage.label}</PageTitle>
                  <Badge variant="neutral">{countsByPage[activeKey]}</Badge>
                  <SwitcherChevron aria-hidden="true"><ChevronDownIcon size={18} /></SwitcherChevron>
                </PageSwitcher>
              }
              groups={switcherGroups}
              width={240}
              placement="bottom-start"
            />
            <DraftMeta>
              <MetaText>
                {recordCount} record type{recordCount === 1 ? '' : 's'} · {toolCount} tool{toolCount === 1 ? '' : 's'}
              </MetaText>
            </DraftMeta>
          </DraftHeadRow>
        </ColHead>

        <PageBody>
          {activePage.view === 'jobs' ? (
            <JobsView jobs={JOBS} />
          ) : activePage.view === 'placement' ? (
            <PlacementView jobs={JOBS} />
          ) : activePage.view === 'users' ? (
            <UsersView users={USERS} />
          ) : activePage.view === 'locations' ? (
            <LocationsView locations={LOCATIONS} />
          ) : activePage.view === 'permissions' ? (
            <PermissionsView
              entries={entries}
              justAdded={justAdded}
              onDelete={store.undoEntry}
              onDuplicate={duplicate}
              onAdd={addEntry}
            />
          ) : activePage.view === 'table' ? (
            // Tables always render so the "+ New" row is available even when empty.
            <TableView
              entries={entries}
              justAdded={justAdded}
              onDelete={store.undoEntry}
              onDuplicate={duplicate}
              onAdd={addEntry}
              addNoun={activePage.label.replace(/s$/, '').toLowerCase()}
            />
          ) : entries.length === 0 ? (
            <PageEmpty>Nothing in {activePage.label.toLowerCase()} yet. Changes here will appear as you build.</PageEmpty>
          ) : activePage.view === 'cards' ? (
            <PolicyAccordion entries={entries} justAdded={justAdded} onDelete={store.undoEntry} onDuplicate={duplicate} />
          ) : (
            <CalendarView entries={entries} />
          )}
        </PageBody>
      </DraftCol>
    </DraftFrame>
  );
}

// ── Shared row bits ──────────────────────────────────────────────────────────

function RiskTag({ entry }: { entry: MutationEntry }) {
  return <Tag size="sm" variant="subtle" color={RISK_COLOR[entry.risk]}>{RISK_LABEL[entry.risk]}</Tag>;
}

// Per-row action menu — a kebab (⋮) trigger opening Duplicate / Delete. Delete
// folds the entry out of the active draft (undo); Duplicate appends a copy.
interface RowActionHandlers {
  onDelete: (id: string) => void;
  onDuplicate: (entry: MutationEntry) => void;
}

function RowActions({ entry, onDelete, onDuplicate }: { entry: MutationEntry } & RowActionHandlers) {
  const groups: DropdownMenuGroup[] = [
    {
      id: 'main',
      options: [
        { id: 'duplicate', label: 'Duplicate', leadingSlot: <Copy01Icon size={16} />, onClick: () => onDuplicate(entry) },
      ],
    },
    {
      id: 'danger',
      options: [
        { id: 'delete', label: 'Delete', destructive: true, leadingSlot: <Trash01Icon size={16} />, onClick: () => onDelete(entry.id) },
      ],
    },
  ];
  return (
    <DropdownMenu
      trigger={
        <Button variant="ghost" size="xs" iconOnly aria-label={`Actions for ${entry.target.label}`}>
          <DotsVerticalIcon size={16} />
        </Button>
      }
      groups={groups}
      width={180}
      placement="bottom-end"
    />
  );
}

// ── Table view (Roles / Pay rates / Credentials / Permissions) ───────────────

// A "random" but stable tag color per row — hashed from the entry's ref/label so
// a given item keeps the same hue across renders instead of flickering.
const TAG_COLORS = ['blue', 'azure', 'purple', 'pink', 'red', 'orange', 'yellow', 'matcha', 'green'] as const;
function tagColor(key: string): (typeof TAG_COLORS)[number] {
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return TAG_COLORS[h % TAG_COLORS.length];
}

// Local "Type" glyph (from Downloads/type-01.svg) — not in Alloy's icon set.
// Uses currentColor so it inherits the header text color.
function TypeIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M4 7C4 6.06812 4 5.60218 4.15224 5.23463C4.35523 4.74458 4.74458 4.35523 5.23463 4.15224C5.60218 4 6.06812 4 7 4H17C17.9319 4 18.3978 4 18.7654 4.15224C19.2554 4.35523 19.6448 4.74458 19.8478 5.23463C20 5.60218 20 6.06812 20 7M9 20H15M12 4V20"
        stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

function TableView({ entries, justAdded, onDelete, onDuplicate, onAdd, addNoun = 'item' }: {
  entries: MutationEntry[];
  justAdded: string[];
  onAdd?: (label: string) => void;
  addNoun?: string;
} & RowActionHandlers) {
  // Clicking "+ New" appends an editable row to the bottom of the list (same row
  // style); Enter commits, Esc/blur cancels back to the button.
  const [adding, setAdding] = useState(false);
  const [draft, setDraft] = useState('');
  const cancel = () => { setAdding(false); setDraft(''); };
  const commit = () => {
    const name = draft.trim();
    if (name && onAdd) onAdd(name);
    cancel();
  };

  return (
    <TableStack>
      <TableWrap>
        <Table size="sm">
          <TableHeader>
            <TableRow hoverable={false}>
              <TableHead>
                <HeadName>
                  <TypeSquare aria-hidden="true"><TypeIcon size={14} /></TypeSquare>
                  Name
                </HeadName>
              </TableHead>
              <TableHead align="right" aria-label="Actions" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {entries.map(e => (
              <TableRow key={e.id} data-fresh={justAdded.includes(e.id) || undefined}>
                <TableCell>
                  {/* Key the color off the label so a role's tag matches its Jobs-page tag. */}
                  <Tag size="sm" variant="subtle" color={tagColor(e.target.label)}>{e.target.label}</Tag>
                </TableCell>
                <TableCell align="right" compact><RowActions entry={e} onDelete={onDelete} onDuplicate={onDuplicate} /></TableCell>
              </TableRow>
            ))}
            {adding && (
              <TableRow hoverable={false}>
                <TableCell>
                  <AddInput
                    autoFocus
                    value={draft}
                    placeholder={`New ${addNoun} name`}
                    aria-label={`New ${addNoun} name`}
                    onChange={ev => setDraft(ev.target.value)}
                    onKeyDown={ev => {
                      if (ev.key === 'Enter') { ev.preventDefault(); commit(); }
                      else if (ev.key === 'Escape') cancel();
                    }}
                    onBlur={cancel}
                  />
                </TableCell>
                <TableCell align="right" compact />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableWrap>
      {onAdd && !adding && (
        <AddRowButton type="button" onClick={() => setAdding(true)}>
          <PlusIcon size={14} /> New {addNoun}
        </AddRowButton>
      )}
    </TableStack>
  );
}

// ── Jobs view ────────────────────────────────────────────────────────────────
// A shaped table: job name (plain text), assigned role (tag), and pay rate.

// Per-row action menu for the fixture-backed views (kebab → Duplicate / Delete),
// mirroring RowActions. `subject` labels the trigger for screen readers.
function FixtureRowActions({ subject, onDelete, onDuplicate }: {
  subject: string;
  onDelete: () => void;
  onDuplicate: () => void;
}) {
  const groups: DropdownMenuGroup[] = [
    { id: 'main', options: [{ id: 'duplicate', label: 'Duplicate', leadingSlot: <Copy01Icon size={16} />, onClick: onDuplicate }] },
    { id: 'danger', options: [{ id: 'delete', label: 'Delete', destructive: true, leadingSlot: <Trash01Icon size={16} />, onClick: onDelete }] },
  ];
  return (
    <DropdownMenu
      trigger={
        <Button variant="ghost" size="xs" iconOnly aria-label={`Actions for ${subject}`}>
          <DotsVerticalIcon size={16} />
        </Button>
      }
      groups={groups}
      width={180}
      placement="bottom-end"
    />
  );
}

function JobsView({ jobs: initialJobs }: { jobs: Job[] }) {
  // Jobs are fixture-backed, so row edits live in local state.
  const [jobs, setJobs] = useState(initialJobs);
  const copySeq = useRef(0);
  const removeJob = (id: string) => setJobs(js => js.filter(j => j.id !== id));
  const duplicateJob = (job: Job) =>
    setJobs(js => {
      const i = js.findIndex(j => j.id === job.id);
      const copy = { ...job, id: `${job.id}.copy.${copySeq.current++}`, name: `${job.name} (copy)` };
      return [...js.slice(0, i + 1), copy, ...js.slice(i + 1)];
    });

  return (
    <TableStack>
      <TableWrap>
        <Table size="sm">
          <TableHeader>
            <TableRow hoverable={false}>
              <TableHead>
                <HeadName>
                  <TypeSquare aria-hidden="true"><TypeIcon size={14} /></TypeSquare>
                  Name
                </HeadName>
              </TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Pay rate</TableHead>
              <TableHead align="right" aria-label="Actions" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map(j => (
              <TableRow key={j.id}>
                <TableCell><JobText>{j.name}</JobText></TableCell>
                <TableCell>
                  <Tag size="sm" variant="subtle" color={tagColor(j.role)}>{j.role}</Tag>
                </TableCell>
                <TableCell><JobRate>{j.payRate}</JobRate></TableCell>
                <TableCell align="right" compact>
                  <FixtureRowActions subject={j.name} onDelete={() => removeJob(j.id)} onDuplicate={() => duplicateJob(j)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrap>
    </TableStack>
  );
}

// ── Placement view ───────────────────────────────────────────────────────────
// Wires the Jobs fixture into a placement list: each row pairs a job (first
// column) with a description generated from that job's fields.

// Job names follow "Unit — Shift". Acronym shifts (PRN) keep their casing;
// the rest read lowercase mid-sentence.
function placementDescription(job: Job): string {
  const [unit, shift] = job.name.split('—').map(s => s.trim());
  const shiftText = !shift ? 'scheduled shifts'
    : shift === shift.toUpperCase() ? shift
    : shift.toLowerCase();
  return `${job.role} covering ${shiftText} in ${unit}, paid at ${job.payRate}.`;
}

function PlacementView({ jobs: initialJobs }: { jobs: Job[] }) {
  // Placements are fixture-backed, so row edits live in local state (same as JobsView).
  const [jobs, setJobs] = useState(initialJobs);
  const copySeq = useRef(0);
  const removeJob = (id: string) => setJobs(js => js.filter(j => j.id !== id));
  const duplicateJob = (job: Job) =>
    setJobs(js => {
      const i = js.findIndex(j => j.id === job.id);
      const copy = { ...job, id: `${job.id}.copy.${copySeq.current++}`, name: `${job.name} (copy)` };
      return [...js.slice(0, i + 1), copy, ...js.slice(i + 1)];
    });

  return (
    <TableStack>
      <TableWrap>
        <Table size="sm">
          <TableHeader>
            <TableRow hoverable={false}>
              <TableHead>
                <HeadName>
                  <TypeSquare aria-hidden="true"><TypeIcon size={14} /></TypeSquare>
                  Job
                </HeadName>
              </TableHead>
              <TableHead>Description</TableHead>
              <TableHead align="right" aria-label="Actions" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map(j => (
              <TableRow key={j.id}>
                <TableCell>
                  <Tag size="sm" variant="subtle" color={tagColor(j.name)}>{j.name}</Tag>
                </TableCell>
                <TableCell><PlacementDesc>{placementDescription(j)}</PlacementDesc></TableCell>
                <TableCell align="right" compact>
                  <FixtureRowActions subject={j.name} onDelete={() => removeJob(j.id)} onDuplicate={() => duplicateJob(j)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrap>
    </TableStack>
  );
}

// ── Users view ───────────────────────────────────────────────────────────────
// The staffed workers, sampled from the roster: initials avatar + name, role
// tag, worker type, and home facility.

function UsersView({ users: initialUsers }: { users: AccountUser[] }) {
  // Users are fixture-backed, so row edits live in local state (same as JobsView).
  const [users, setUsers] = useState(initialUsers);
  const copySeq = useRef(0);
  const removeUser = (id: string) => setUsers(us => us.filter(u => u.id !== id));
  const duplicateUser = (user: AccountUser) =>
    setUsers(us => {
      const i = us.findIndex(u => u.id === user.id);
      const copy = { ...user, id: `${user.id}.copy.${copySeq.current++}`, name: `${user.name} (copy)` };
      return [...us.slice(0, i + 1), copy, ...us.slice(i + 1)];
    });

  return (
    <TableStack>
      <TableWrap>
        <Table size="sm">
          <TableHeader>
            <TableRow hoverable={false}>
              <TableHead>
                <HeadName>
                  <TypeSquare aria-hidden="true"><TypeIcon size={14} /></TypeSquare>
                  Name
                </HeadName>
              </TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Facility</TableHead>
              <TableHead align="right" aria-label="Actions" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map(u => (
              <TableRow key={u.id}>
                <TableCell>
                  <UserCell>
                    {/* Color keys off the name so each person keeps a stable identity hue. */}
                    <Avatar size="sm" name={u.name} color={tagColor(u.name)} />
                    <JobText>{u.name}</JobText>
                  </UserCell>
                </TableCell>
                <TableCell>
                  <Tag size="sm" variant="subtle" color={tagColor(u.role)}>{u.role}</Tag>
                </TableCell>
                <TableCell><CellNote>{u.workerType}</CellNote></TableCell>
                <TableCell><CellNote>{u.facility}</CellNote></TableCell>
                <TableCell align="right" compact>
                  <FixtureRowActions subject={u.name} onDelete={() => removeUser(u.id)} onDuplicate={() => duplicateUser(u)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrap>
    </TableStack>
  );
}

// ── Locations view ───────────────────────────────────────────────────────────
// The partner facilities, sampled from the facilities list: name, city/state,
// staffed units, and bed count.

function LocationsView({ locations: initialLocations }: { locations: Facility[] }) {
  // Locations are fixture-backed, so row edits live in local state (same as JobsView).
  const [locations, setLocations] = useState(initialLocations);
  const copySeq = useRef(0);
  const removeLocation = (id: string) => setLocations(ls => ls.filter(l => l.id !== id));
  const duplicateLocation = (loc: Facility) =>
    setLocations(ls => {
      const i = ls.findIndex(l => l.id === loc.id);
      const copy = { ...loc, id: `${loc.id}.copy.${copySeq.current++}`, name: `${loc.name} (copy)` };
      return [...ls.slice(0, i + 1), copy, ...ls.slice(i + 1)];
    });

  return (
    <TableStack>
      <TableWrap>
        <Table size="sm">
          <TableHeader>
            <TableRow hoverable={false}>
              <TableHead>
                <HeadName>
                  <TypeSquare aria-hidden="true"><TypeIcon size={14} /></TypeSquare>
                  Name
                </HeadName>
              </TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Units</TableHead>
              <TableHead>Beds</TableHead>
              <TableHead align="right" aria-label="Actions" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {locations.map(l => (
              <TableRow key={l.id}>
                <TableCell><JobText>{l.name}</JobText></TableCell>
                <TableCell><CellNote>{l.city}, {l.state}</CellNote></TableCell>
                <TableCell>
                  <UnitTags>
                    {l.units.map(unit => (
                      <Tag key={unit} size="sm" variant="subtle" color={tagColor(unit)}>{unit}</Tag>
                    ))}
                  </UnitTags>
                </TableCell>
                <TableCell><JobRate>{l.beds}</JobRate></TableCell>
                <TableCell align="right" compact>
                  <FixtureRowActions subject={l.name} onDelete={() => removeLocation(l.id)} onDuplicate={() => duplicateLocation(l)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrap>
    </TableStack>
  );
}

// ── Permissions view (Access Groups layout) ──────────────────────────────────
// Each permission entry renders as an access-group-style row: a colored icon
// square, the permission name, the cluster of members it grants (representative,
// derived deterministically from the label), a default toggle, and the row's
// controls. Folds the real log entries, so delete / duplicate / add drive the
// shared draft exactly like the table views.

// A small representative roster the member clusters draw from — stable initials
// + identity hue per person. Which slice a row shows (and how many it overflows)
// is derived from the permission label, so a given permission always renders the
// same cluster across re-renders.
const MEMBER_POOL: { initials: string; color: (typeof TAG_COLORS)[number] }[] = [
  { initials: 'TU', color: 'purple' }, { initials: 'AL', color: 'orange' },
  { initials: 'PT', color: 'blue' },   { initials: 'BD', color: 'red' },
  { initials: 'MD', color: 'yellow' }, { initials: 'JD', color: 'azure' },
  { initials: 'TW', color: 'blue' },   { initials: 'DC', color: 'orange' },
  { initials: 'AH', color: 'orange' }, { initials: 'MA', color: 'yellow' },
  { initials: 'DR', color: 'matcha' }, { initials: 'VM', color: 'purple' },
];

// How many member avatars to show before collapsing the rest into a "+N" chip.
const MEMBER_SHOWN = 3;

// Deterministic member cluster for a permission — a stable slice of the roster
// plus an overflow count (2–32 total), keyed off the label so it never flickers.
function memberSlice(key: string): { shown: typeof MEMBER_POOL; overflow: number } {
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  const count = 2 + (h % 31);
  const offset = h % MEMBER_POOL.length;
  const n = Math.min(MEMBER_SHOWN, count);
  const shown = Array.from({ length: n }, (_, k) => MEMBER_POOL[(offset + k) % MEMBER_POOL.length]);
  return { shown, overflow: count - n };
}

function PermissionsView({ entries, justAdded, onDelete, onDuplicate, onAdd }: {
  entries: MutationEntry[];
  justAdded: string[];
  onAdd?: (label: string) => void;
} & RowActionHandlers) {
  // The default group — first entry unless the admin repoints it via "Make Default".
  const [defaultId, setDefaultId] = useState<string | null>(null);
  const effectiveDefault = defaultId ?? entries[0]?.id ?? null;

  // Inline add, mirroring the table views' "+ New" affordance.
  const [adding, setAdding] = useState(false);
  const [draft, setDraft] = useState('');
  const cancel = () => { setAdding(false); setDraft(''); };
  const commit = () => { const name = draft.trim(); if (name && onAdd) onAdd(name); cancel(); };

  return (
    <PermStack>
      {entries.length > 0 && (
        <PermList>
          {entries.map(e => {
            const { shown, overflow } = memberSlice(e.target.label);
            const isDefault = e.id === effectiveDefault;
            return (
              <PermRow key={e.id} data-fresh={justAdded.includes(e.id) || undefined}>
                <Avatar
                  size="lg"
                  shape="square"
                  variant="solid"
                  color={tagColor(e.target.label)}
                  icon={<Users03Icon />}
                  aria-hidden="true"
                />
                <PermName>{e.target.label}</PermName>
                <MemberCluster aria-label={`${shown.length + overflow} members`}>
                  {shown.map((m, k) => (
                    <MemberAv key={k}>
                      <Avatar size="sm" shape="square" variant="solid" color={m.color} initials={m.initials} aria-hidden="true" />
                    </MemberAv>
                  ))}
                  {overflow > 0 && <MemberOverflow>+{overflow}</MemberOverflow>}
                </MemberCluster>
                <PermSpacer aria-hidden="true" />
                <PermActions>
                  <Button variant="tertiary" size="sm" iconOnly aria-label={`Delete ${e.target.label}`} onClick={() => onDelete(e.id)}>
                    <Trash01Icon size={16} />
                  </Button>
                  <Button variant="tertiary" size="sm" iconOnly aria-label={`Duplicate ${e.target.label}`} onClick={() => onDuplicate(e)}>
                    <Copy01Icon size={16} />
                  </Button>
                  {isDefault ? (
                    <Tag size="md" variant="subtle" color="purple">Default</Tag>
                  ) : (
                    <Button variant="secondary" size="sm" onClick={() => setDefaultId(e.id)}>Make Default</Button>
                  )}
                  <Button variant="primary" size="sm">Edit</Button>
                </PermActions>
              </PermRow>
            );
          })}
        </PermList>
      )}

      {adding ? (
        <PermAddRow>
          <AddInput
            autoFocus
            value={draft}
            placeholder="New permission name"
            aria-label="New permission name"
            onChange={ev => setDraft(ev.target.value)}
            onKeyDown={ev => {
              if (ev.key === 'Enter') { ev.preventDefault(); commit(); }
              else if (ev.key === 'Escape') cancel();
            }}
            onBlur={cancel}
          />
        </PermAddRow>
      ) : onAdd ? (
        <AddRowButton type="button" onClick={() => setAdding(true)}>
          <PlusIcon size={14} /> New permission
        </AddRowButton>
      ) : null}

      {entries.length === 0 && !adding && (
        <PageEmpty>No permissions yet. Add one to grant a group access.</PageEmpty>
      )}
    </PermStack>
  );
}

// ── Cards view (Policies + Rate rules) ───────────────────────────────────────

// The scheduling action a sub-policy carries — what the engine does when the
// rule would trigger, in escalating severity: steer toward the cheapest outcome
// (optimize), note it in reports (flag), warn and schedule around it (avoid),
// escalate for approval (critical), or refuse the schedule outright (block).
type PolicyActionId = 'optimize' | 'flag' | 'avoid' | 'critical' | 'block';

// Local shape glyphs for the action set (from Downloads/{circle,square,triangle,
// hexagon-01,octagon}.svg) — plain geometric severity shapes, not in Alloy's icon
// set (same precedent as TypeIcon below). Stroke rides currentColor so each
// glyph tints with its action hue. More sides ≈ more severe: circle → square →
// triangle → hexagon → octagon (the stop sign).
interface GlyphProps { size?: number }

function CircleGlyphIcon({ size = 14 }: GlyphProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SquareGlyphIcon({ size = 14 }: GlyphProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TriangleGlyphIcon({ size = 14 }: GlyphProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M2.39019 18.0986L10.6151 3.89195C11.0696 3.10679 11.2969 2.71421 11.5935 2.58235C11.8521 2.46734 12.1474 2.46734 12.4061 2.58235C12.7026 2.71421 12.9299 3.10679 13.3844 3.89195L21.6093 18.0986C22.0655 18.8866 22.2936 19.2806 22.2599 19.6039C22.2305 19.886 22.0827 20.1423 21.8534 20.309C21.5904 20.5002 21.1352 20.5002 20.2246 20.5002H3.77487C2.86435 20.5002 2.40908 20.5002 2.14613 20.309C1.91677 20.1423 1.769 19.886 1.73959 19.6039C1.70588 19.2806 1.93398 18.8866 2.39019 18.0986Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HexagonGlyphIcon({ size = 14 }: GlyphProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M11.223 2.43177C11.5066 2.27421 11.6484 2.19543 11.7985 2.16454C11.9315 2.13721 12.0685 2.13721 12.2015 2.16454C12.3516 2.19543 12.4934 2.27421 12.777 2.43177L20.177 6.54288C20.4766 6.70928 20.6263 6.79248 20.7354 6.91082C20.8318 7.01551 20.9049 7.13959 20.9495 7.27477C21 7.42756 21 7.59889 21 7.94153V16.0586C21 16.4013 21 16.5726 20.9495 16.7254C20.9049 16.8606 20.8318 16.9847 20.7354 17.0893C20.6263 17.2077 20.4766 17.2909 20.177 17.4573L12.777 21.5684C12.4934 21.726 12.3516 21.8047 12.2015 21.8356C12.0685 21.863 11.9315 21.863 11.7985 21.8356C11.6484 21.8047 11.5066 21.726 11.223 21.5684L3.82297 17.4573C3.52345 17.2909 3.37369 17.2077 3.26463 17.0893C3.16816 16.9847 3.09515 16.8606 3.05048 16.7254C3 16.5726 3 16.4013 3 16.0586V7.94153C3 7.59889 3 7.42756 3.05048 7.27477C3.09515 7.13959 3.16816 7.01551 3.26463 6.91082C3.37369 6.79248 3.52345 6.70928 3.82297 6.54288L11.223 2.43177Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function OctagonGlyphIcon({ size = 14 }: GlyphProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M7.39137 2.46863C7.56432 2.29568 7.6508 2.2092 7.75172 2.14736C7.84119 2.09253 7.93873 2.05213 8.04077 2.02763C8.15586 2 8.27815 2 8.52274 2H15.4773C15.7218 2 15.8441 2 15.9592 2.02763C16.0613 2.05213 16.1588 2.09253 16.2483 2.14736C16.3492 2.2092 16.4357 2.29568 16.6086 2.46863L21.5314 7.39137C21.7043 7.56432 21.7908 7.6508 21.8526 7.75172C21.9075 7.84119 21.9479 7.93873 21.9724 8.04077C22 8.15586 22 8.27815 22 8.52274V15.4773C22 15.7218 22 15.8441 21.9724 15.9592C21.9479 16.0613 21.9075 16.1588 21.8526 16.2483C21.7908 16.3492 21.7043 16.4357 21.5314 16.6086L16.6086 21.5314C16.4357 21.7043 16.3492 21.7908 16.2483 21.8526C16.1588 21.9075 16.0613 21.9479 15.9592 21.9724C15.8441 22 15.7218 22 15.4773 22H8.52274C8.27815 22 8.15586 22 8.04077 21.9724C7.93873 21.9479 7.84119 21.9075 7.75172 21.8526C7.6508 21.7908 7.56432 21.7043 7.39137 21.5314L2.46863 16.6086C2.29568 16.4357 2.2092 16.3492 2.14736 16.2483C2.09253 16.1588 2.05213 16.0613 2.02763 15.9592C2 15.8441 2 15.7218 2 15.4773V8.52274C2 8.27815 2 8.15586 2.02763 8.04077C2.05213 7.93873 2.09253 7.84119 2.14736 7.75172C2.2092 7.6508 2.29568 7.56432 2.46863 7.39137L7.39137 2.46863Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface PolicyActionDef {
  id: PolicyActionId;
  label: string;
  // One-line meaning, shown as the row description in the picker menu.
  description: string;
  icon: (props: GlyphProps) => JSX.Element;
  // Color-specific semantic token hue (—color-{hue}-*) the chip + glyph tint with.
  hue: 'green' | 'blue' | 'yellow' | 'orange' | 'red';
}

const POLICY_ACTIONS: PolicyActionDef[] = [
  { id: 'optimize', label: 'Optimize', description: 'Schedule to minimize triggering this rule.',  icon: CircleGlyphIcon,   hue: 'green'  },
  { id: 'flag',     label: 'Flag',     description: 'Allow it, but mark it in reports.',           icon: SquareGlyphIcon,   hue: 'blue'   },
  { id: 'avoid',    label: 'Avoid',    description: 'Warn schedulers and steer around it.',        icon: TriangleGlyphIcon, hue: 'yellow' },
  { id: 'critical', label: 'Critical', description: 'Escalate — requires manager approval.',       icon: HexagonGlyphIcon,  hue: 'orange' },
  { id: 'block',    label: 'Block',    description: 'Refuse schedules that would trigger it.',     icon: OctagonGlyphIcon,  hue: 'red'    },
];

const ACTION_BY_ID = Object.fromEntries(POLICY_ACTIONS.map(a => [a.id, a])) as Record<PolicyActionId, PolicyActionDef>;

// Descriptive copy for the policies accordion. The mutation log only carries a
// label, so the plain-language description and 1–3 sub-policies are attached
// here — keyed by the known ref, with a keyword/domain fallback so AI-drafted
// policies still expand into something meaningful. Each sub-policy carries a
// default action (see PolicyActionId) the admin can retune inline.
interface SubPolicy {
  text: string;
  action: PolicyActionId;
}

interface PolicyDetail {
  description: string;
  subs: SubPolicy[];
}

const POLICY_DETAIL: Record<string, PolicyDetail> = {
  'rate.ot': {
    description: 'Higher pay once weekly hours cross the overtime threshold.',
    subs: [
      { text: '1.5× base rate after 40h in a week', action: 'optimize' },
      { text: 'Daily overtime after 8h in a shift', action: 'flag' },
      { text: 'Doubletime after 12h in a shift',    action: 'block' },
    ],
  },
  'rate.differential': {
    description: 'Added pay for evening, overnight, and weekend shift windows.',
    subs: [
      { text: 'Evening (6pm–11pm) +$1.50/hr',  action: 'optimize' },
      { text: 'Overnight (11pm–6am) +$2.50/hr', action: 'flag' },
      { text: 'Weekend +10% of base rate',      action: 'avoid' },
    ],
  },
  'rate.event_premium': {
    description: 'Premium rate on designated high-demand event days.',
    subs: [
      { text: 'Game / show days +15%',  action: 'flag' },
      { text: 'Holiday events +20%',    action: 'critical' },
    ],
  },
  'policy.breaks': {
    description: 'Mandated meal and rest periods for scheduled shifts.',
    subs: [
      { text: '30-minute unpaid meal after 5 hours', action: 'block' },
      { text: '10-minute paid rest per 4 hours',     action: 'critical' },
    ],
  },
};

function policyDetail(entry: MutationEntry): PolicyDetail {
  const byRef = POLICY_DETAIL[entry.target.ref ?? ''];
  if (byRef) return byRef;

  const key = `${entry.target.ref ?? ''} ${entry.target.label}`.toLowerCase();
  if (/differential|night|evening|weekend/.test(key)) {
    return { description: 'Added pay for less-desirable shift windows.', subs: [{ text: 'Evening & overnight uplift', action: 'optimize' }, { text: 'Weekend premium', action: 'flag' }] };
  }
  if (/\bovertime\b|\bot\b|40h|hours?/.test(key)) {
    return { description: 'Higher pay once hours cross the overtime threshold.', subs: [{ text: '1.5× base rate after 40h/week', action: 'optimize' }] };
  }
  if (/premium|event|holiday|bonus/.test(key)) {
    return { description: 'Premium rate on designated high-demand days.', subs: [{ text: 'Applies to flagged event days', action: 'flag' }] };
  }
  if (/break|meal|rest|leave|pto|time off/.test(key)) {
    return { description: 'Break and time-off rules applied to schedules.', subs: [{ text: 'Meal & rest periods', action: 'critical' }, { text: 'Accrual on eligible shifts', action: 'flag' }] };
  }
  return entry.target.domain === 'rateRule'
    ? { description: 'Pay adjustment applied to matching shifts.', subs: [{ text: 'Applies to eligible roles', action: 'flag' }] }
    : { description: 'Workforce policy applied account-wide.', subs: [{ text: 'Applies to all locations', action: 'flag' }] };
}

// The per-sub-policy action control: a tinted chip (icon + label + chevron)
// that opens a picker menu listing all five actions with their meaning — the
// current one marked selected. Reads at a glance by color/shape, and retunes
// inline without leaving the accordion.
function SubActionPicker({ value, subText, onChange }: {
  value: PolicyActionId;
  subText: string;
  onChange: (next: PolicyActionId) => void;
}) {
  const current = ACTION_BY_ID[value];
  const CurrentIcon = current.icon;
  const groups: DropdownMenuGroup[] = [{
    id: 'actions',
    options: POLICY_ACTIONS.map(a => {
      const Icon = a.icon;
      return {
        id: a.id,
        label: a.label,
        description: a.description,
        leadingSlot: <ActionGlyph $hue={a.hue}><Icon size={16} /></ActionGlyph>,
        selected: a.id === value,
        onClick: () => onChange(a.id),
      };
    }),
  }];
  return (
    <DropdownMenu
      trigger={
        <ActionChip type="button" $hue={current.hue} aria-label={`Action for "${subText}": ${current.label}`}>
          <CurrentIcon size={14} />
          {current.label}
          <ActionChipChevron aria-hidden="true"><ChevronDownIcon size={12} /></ActionChipChevron>
        </ActionChip>
      }
      groups={groups}
      width={260}
      placement="bottom-end"
    />
  );
}

// Policies render as an accordion list: each row shows the policy name + a short
// description, and expands to reveal its 1–3 sub-policies — each a rule + its
// scheduling action (Optimize / Flag / Avoid / Critical / Block).
function PolicyAccordion({ entries, justAdded, onDelete, onDuplicate }: { entries: MutationEntry[]; justAdded: string[] } & RowActionHandlers) {
  const [open, setOpen] = useState<Set<string>>(() => new Set());
  // Admin-tuned action overrides, keyed `${entryId}:${subIndex}` — the defaults
  // live on the sub-policy fixtures; picking a new action lands here.
  const [tuned, setTuned] = useState<Record<string, PolicyActionId>>({});
  const toggle = (id: string) =>
    setOpen(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });

  return (
    <AccordionList>
      {entries.map(e => {
        const detail = policyDetail(e);
        const isOpen = open.has(e.id);
        const panelId = `policy-panel-${e.id}`;
        return (
          <AccordionItem key={e.id} data-fresh={justAdded.includes(e.id) || undefined}>
            <AccordionHead>
              <AccordionTrigger type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => toggle(e.id)}>
                <AccordionTitleBlock>
                  <AccordionTitle>{e.target.label}</AccordionTitle>
                  <AccordionDesc>{detail.description}</AccordionDesc>
                </AccordionTitleBlock>
              </AccordionTrigger>
              <RowActions entry={e} onDelete={onDelete} onDuplicate={onDuplicate} />
              {/* Chevron sits at the far right; the trigger above is the accessible toggle. */}
              <AccordionChevron $open={isOpen} aria-hidden="true" onClick={() => toggle(e.id)}><ChevronDownIcon size={16} /></AccordionChevron>
            </AccordionHead>
            {isOpen && (
              <AccordionPanel id={panelId} role="region" aria-label={`${e.target.label} sub-policies`}>
                <SubList>
                  {detail.subs.map((s, i) => {
                    const key = `${e.id}:${i}`;
                    return (
                      <SubItem key={i}>
                        <SubText>{s.text}</SubText>
                        <SubActionPicker
                          value={tuned[key] ?? s.action}
                          subText={s.text}
                          onChange={next => setTuned(prev => ({ ...prev, [key]: next }))}
                        />
                      </SubItem>
                    );
                  })}
                </SubList>
              </AccordionPanel>
            )}
          </AccordionItem>
        );
      })}
    </AccordionList>
  );
}

// ── Calendar view (Scheduling) ───────────────────────────────────────────────
// The scheduling entries are configuration rules, not dated shifts, so the
// calendar renders a representative week: a 7-day header with each scheduling
// rule shown as an all-week coverage band. It reads as a calendar without
// inventing specific shift times the data doesn't carry.
const WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function CalendarView({ entries }: { entries: MutationEntry[] }) {
  return (
    <Calendar>
      <CalWeekHead aria-hidden="true">
        {WEEK.map(d => <CalDay key={d}>{d}</CalDay>)}
      </CalWeekHead>
      <CalBands>
        {entries.map(e => (
          <CalBand key={e.id}>
            <CalBandLabel>{e.target.label}</CalBandLabel>
            <RiskTag entry={e} />
          </CalBand>
        ))}
      </CalBands>
      <CalNote>Applied across the week — set specific shifts once the account is live.</CalNote>
    </Calendar>
  );
}

// ── Styled ───────────────────────────────────────────────────────────────────

/* Frame around the draft column — a rounded, hairline-bordered card sitting flush
   to its container edges. overflow:hidden clips the header rule and the scrolling
   body to the rounded corners. */
const DraftFrame = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  border: 1px solid var(--color-border-opaque);
  border-radius: 12px;
  overflow: hidden;
`;

const DraftCol = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  background: var(--color-bg-secondary);
`;

const ColHead = styled.div`
  flex-shrink: 0;
  padding: var(--space-3) var(--space-6);
  border-bottom: 1px solid var(--color-border-opaque);
`;

const DraftHeadRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
`;

/* The page-switcher trigger — the page name reads as the pane title, with a
   chevron that opens the category menu. */
const PageSwitcher = styled.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-2);
  margin-left: calc(-1 * var(--space-2));
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-default);

  &:hover { background: var(--color-bg-tertiary); }
  &:focus-visible { outline: 2px solid var(--color-border-focus); outline-offset: 1px; }
`;

const PageTitle = styled.h2`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`;

const SwitcherChevron = styled.span`
  display: inline-flex;
  color: var(--color-content-tertiary);
`;

const DraftMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

/* Header summary — record-type vs tool item counts for the whole draft. */
const MetaText = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;

/* The active page's content area — scrolls independently under the fixed header. */
const PageBody = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: var(--space-6);
`;

/* Wraps the table in a hairline-bordered box with 6px rounded corners;
   overflow:hidden clips the header rule and rows to the radius. */
// Stacks the table and its detached "+ New" button below it.
const TableStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;

// Inline add field — a dotted underline instead of a boxed input.
const AddInput = styled.input`
  all: unset;
  width: 100%;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-primary);

  &::placeholder { color: var(--color-content-tertiary); }
`;

// Plain-text job name.
const JobText = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-primary);
`;

// Generated placement summary — quieter than the job name it describes.
const PlacementDesc = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`;

// Secondary cell text (worker type, facility, city) — quieter than the row name.
const CellNote = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
`;

// Identity cell — initials avatar leading the user's name.
const UserCell = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
`;

// Wrapping row of unit tags in a location row.
const UnitTags = styled.span`
  display: inline-flex;
  flex-wrap: wrap;
  gap: var(--space-1);
`;

// Pay rate — mono for the numeric read, quieter than the name.
const JobRate = styled.span`
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
`;

// Header "Name" label with its leading Type glyph.
const HeadName = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
`;

// Square wrapper around the Type icon — equal sides, no fill.
const TypeSquare = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-5);
  height: var(--space-5);
  color: var(--color-content-secondary);
`;

// No wrapper border or row fill — the rows read as a bare list of hairline
// dividers over the pane, not a boxed card.
const TableWrap = styled.div`
  & thead tr,
  & thead th,
  & tbody tr {
    background: transparent;
  }

  /* The final row keeps its divider — it draws the line between the list and
     the trailing "+ New …" add-row button. */
`;

/* Floating "+ New" trigger — a standalone button below the table (not a row),
   sized to its content and left-aligned. FLAGGED for a shared table-add control. */
const AddRowButton = styled.button`
  all: unset;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-2);
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
  transition: color var(--duration-fast) var(--ease-default);

  &:hover { color: var(--color-content-primary); }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
  }
`;

const PageEmpty = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;

// Fresh-highlight — a brief tinted flash on entries appended in the last turn.
const freshFlash = `
  animation: none;
  &[data-fresh] {
    box-shadow: 0 0 0 1px var(--color-info-border), 0 0 0 4px var(--color-info-bg);
  }
`;

// ── Permissions (Access Groups list) ──
const PermStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;

// A bare list of rows separated by hairline dividers — no boxed card, matching
// the Access Groups screen's flat list feel.
const PermList = styled.div`
  display: flex;
  flex-direction: column;
`;

/* One access group / permission row: icon square, name, member cluster, then the
   controls pushed to the far right by a flexible spacer. */
const PermRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-2);
  border-radius: var(--radius-md);
  transition: background var(--duration-fast) var(--ease-default);
  ${freshFlash}

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }

  &:hover { background: var(--color-bg-primary); }
`;

const PermName = styled.span`
  min-width: 0;
  flex-shrink: 1;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// Overlapping cluster of member avatars + a trailing "+N" overflow chip.
const MemberCluster = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const MemberAv = styled.span`
  display: inline-flex;
  border-radius: var(--radius-sm);
  /* Ring in the pane bg so overlapping avatars read as separate discs. */
  box-shadow: 0 0 0 2px var(--color-bg-secondary);

  & + & { margin-left: calc(-1 * var(--space-2)); }
`;

const MemberOverflow = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: calc(-1 * var(--space-2));
  min-width: var(--space-6);
  height: var(--space-6);
  padding: 0 var(--space-1);
  border-radius: var(--radius-sm);
  background: var(--color-content-primary);
  color: var(--color-bg-primary);
  box-shadow: 0 0 0 2px var(--color-bg-secondary);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
`;

// Flexible gap that pushes the row's controls to the far right.
const PermSpacer = styled.div`
  flex: 1;
  min-width: var(--space-4);
`;

const PermActions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
`;

// Inline add row — the dotted-underline field the "+ New permission" button opens.
const PermAddRow = styled.div`
  padding: var(--space-3) var(--space-2);
`;

// ── Policies (accordion list) ──
const AccordionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

const AccordionItem = styled.div`
  position: relative;
  ${liquidGlass}
  border-radius: var(--radius-lg);
  overflow: hidden;
  ${freshFlash}

  /* When a row's action menu is open, drop the rounded-corner clip and lift the
     card so the dropdown escapes the edge and paints above sibling cards. */
  &:has([data-open]) {
    overflow: visible;
    z-index: 2;
  }
`;

// Header row: the expand trigger fills the row; the action kebab sits outside it
// so the whole title area stays a single clean toggle.
const AccordionHead = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding-right: var(--space-3);
  transition: background var(--duration-fast) var(--ease-default);

  /* Hover shifts the whole header row, not just the trigger button. */
  &:hover { background: var(--color-bg-secondary); }
`;

const AccordionTrigger = styled.button`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;

  &:focus-visible { outline: 2px solid var(--color-border-focus); outline-offset: -2px; }
`;

const AccordionChevron = styled.span<{ $open: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  align-self: center;
  /* 24px slot around the 16px glyph — a consistent hit target. */
  width: var(--space-6);
  height: var(--space-6);
  cursor: pointer;
  color: var(--color-content-tertiary);
  transform: rotate(${p => (p.$open ? '180deg' : '0deg')});
  transition: transform var(--duration-fast) var(--ease-default);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`;

const AccordionTitleBlock = styled.span`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`;

const AccordionTitle = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`;

const AccordionDesc = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`;

// Left padding aligns the sub-list under the title (chevron now trails, so the
// title starts at the trigger's left padding).
const AccordionPanel = styled.div`
  /* Tight, symmetric vertical padding — the sub-policy rows carry their own
     8px, so the panel only needs a small equal breath above and below. */
  padding: var(--space-1) var(--space-4);
  border-top: 1px solid var(--color-border-opaque);
`;

const SubList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

/* Each sub-policy reads as a row: the rule text leading, its action chip
   trailing — separated by hairlines so the set scans like a mini rule table. */
const SubItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-2) 0;

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }
`;

const SubText = styled.span`
  min-width: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`;

/* The action chip — a compact tinted pill carrying the action's icon + label,
   colored by severity via the hue-specific semantic tokens. The trailing
   chevron marks it as a picker. */
const ActionChip = styled.button<{ $hue: PolicyActionDef['hue'] }>`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  flex-shrink: 0;
  padding: var(--space-1) var(--space-2);
  border: 1px solid transparent;
  border-radius: var(--radius-full);
  /* bg-tertiary is the hue's soft tint (50-stop; bg-secondary is the saturated
     500 fill) — the chip should read as a quiet tinted pill, not a solid. */
  background: ${p => `var(--color-${p.$hue}-bg-tertiary)`};
  color: ${p => `var(--color-${p.$hue}-content-primary)`};
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: border-color var(--duration-fast) var(--ease-default);

  &:hover {
    border-color: ${p => `var(--color-${p.$hue}-border-secondary)`};
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 1px;
  }
`;

const ActionChipChevron = styled.span`
  display: inline-flex;
  align-items: center;
  opacity: 0.7;
`;

/* Leading icon slot in the picker menu — tints each action's glyph with its
   severity hue so the menu mirrors the chips. */
const ActionGlyph = styled.span<{ $hue: PolicyActionDef['hue'] }>`
  display: inline-flex;
  align-items: center;
  color: ${p => `var(--color-${p.$hue}-content-primary)`};
`;

// ── Calendar ──
const Calendar = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;

const CalWeekHead = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: var(--space-1);
`;

const CalDay = styled.div`
  padding: var(--space-2) 0;
  text-align: center;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-sm);
`;

const CalBands = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

/* An all-week coverage band — a rule that applies across every day. The dashed
   left accent reads it as a scheduled span rather than a plain row. */
const CalBand = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background: var(--color-info-bg);
  border: 1px solid var(--color-info-border);
  border-radius: var(--radius-md);
`;

const CalBandLabel = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`;

const CalNote = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`;

// ── Shared row glyph / text ──
