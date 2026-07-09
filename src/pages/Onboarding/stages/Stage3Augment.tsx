/* ─────────────────────────────────────────────────────────────────────────────
   Stage 3 — Augment canvas.

   A full-width, draft-weighted two-column canvas (~0.85 : 1.15):
     • LEFT  — the conversation. Type an instruction; Ultron replies and proposes
               concrete account changes.
     • RIGHT — the live account draft tree. Every AI/admin change appends a
               MutationEntry (via the shared log store) and shows up here as an
               attributed, risk-tagged, reversible diff row. The tree is a pure
               fold over the log; undo marks the entry `undone` and re-folds.

   No parallel state: the tree is `store.active` grouped by domain, nothing more.
   ───────────────────────────────────────────────────────────────────────────── */

import { useEffect, useMemo, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  Button, Tag, AILoader, Tooltip,
  CircularArrowIcon, ArrowNarrowUpIcon, ArrowNarrowRightIcon, ChevronLeftIcon, ChevronDownIcon,
  TeambridgeAIIcon, PlusIcon,
} from 'alloy-design-system';
import type { ProvisioningStore } from '../logStore';
import type { MutationEntry } from '../provisioningLog';
import type { Template } from '../types';
import { interpretInstruction, AUGMENT_SUGGESTIONS } from '../fixtures';
import {
  DOMAIN_LABEL, DOMAIN_ORDER, OP_VERB, opIcon,
  RISK_COLOR, RISK_LABEL, SOURCE_LABEL,
} from '../shared';

interface Stage3Props {
  store: ProvisioningStore;
  template: Template | null;
  onNext: () => void;
  onBack: () => void;
}

interface Msg { id: string; role: 'ai' | 'operator'; text: string; }

let msgSeq = 0;
const mkMsg = (role: Msg['role'], text: string): Msg => ({ id: `msg${msgSeq++}`, role, text });

const REPLY_MS = 850;

export function Stage3Augment({ store, template, onNext, onBack }: Stage3Props) {
  const [messages, setMessages] = useState<Msg[]>(() => [
    mkMsg('ai',
      template && template.seed.length > 0
        ? `I've laid down the "${template.name}" starting point — ${template.seed.length} items on the right. Tell me what to change: add a role, adjust a pay rule, set a policy, and I'll draft it. Pay and access changes get held for your sign-off.`
        : `Let's build your account from scratch. Tell me what you need — a role, a pay rule, a policy — and I'll draft each change on the right.`,
    ),
  ]);
  const [thinking, setThinking] = useState(false);
  const [draft, setDraft] = useState('');
  // Entry ids appended in the last turn — briefly highlighted in the tree.
  const [justAdded, setJustAdded] = useState<string[]>([]);
  // Collapsed status sections — "Built" starts collapsed (the low-risk bulk).
  const [collapsed, setCollapsed] = useState<Set<string>>(() => new Set(['built']));
  const toggleSection = (key: string) =>
    setCollapsed(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  const convoRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Keep the conversation pinned to the newest message.
  useEffect(() => {
    convoRef.current?.scrollTo({ top: convoRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, thinking]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || thinking) return;
    setMessages(prev => [...prev, mkMsg('operator', trimmed)]);
    setDraft('');
    requestAnimationFrame(() => { if (textareaRef.current) textareaRef.current.style.height = 'auto'; });
    setThinking(true);

    window.setTimeout(() => {
      const { reply, drafts } = interpretInstruction(trimmed);
      const addedIds = drafts.map(d => store.append(d).id);
      setMessages(prev => [...prev, mkMsg('ai', reply)]);
      setThinking(false);
      if (addedIds.length) {
        setJustAdded(addedIds);
        window.setTimeout(() => setJustAdded([]), 1600);
      }
    }, REPLY_MS);
  };

  const resize = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 140)}px`;
  };

  // Fold the log into two status sections — everything that needs the admin's
  // sign-off (gate) first, then everything built automatically (auto + notify).
  // Each section nests domain sub-sections (roles, rate rules, …).
  const groups = useMemo(() => {
    const byDomain = (entries: MutationEntry[]) => {
      const map = new Map<string, MutationEntry[]>();
      for (const e of entries) {
        const arr = map.get(e.target.domain) ?? [];
        arr.push(e);
        map.set(e.target.domain, arr);
      }
      return DOMAIN_ORDER.filter(d => map.has(d)).map(d => ({
        domain: d, label: DOMAIN_LABEL[d], entries: map.get(d)!,
      }));
    };
    const gate = store.active.filter(e => e.gateBehavior === 'gate');
    const built = store.active.filter(e => e.gateBehavior !== 'gate');
    const out: { key: string; label: string; total: number; domains: ReturnType<typeof byDomain> }[] = [];
    if (gate.length) out.push({ key: 'gate', label: 'Needs sign-off', total: gate.length, domains: byDomain(gate) });
    if (built.length) out.push({ key: 'built', label: 'Built', total: built.length, domains: byDomain(built) });
    return out;
  }, [store.active]);

  const gateCount = store.active.filter(e => e.gateBehavior === 'gate').length;

  return (
    <Canvas>
      <Columns>
        {/* ── Left: conversation ─────────────────────────────────────────── */}
        <ConvoCol>
          <ColHead $plain>
            <ColTitle><TeambridgeAIIcon size={16} /> Conversation</ColTitle>
            <ColSub>Describe changes — Ultron drafts them on the right.</ColSub>
          </ColHead>

          <Convo ref={convoRef}>
            {messages.map(m => (
              <Bubble key={m.id} data-role={m.role}>
                {m.role === 'ai' && <BubbleWho><AILoader size="xs" state="ready" /> Ultron</BubbleWho>}
                <BubbleText>{m.text}</BubbleText>
              </Bubble>
            ))}
            {thinking && (
              <Bubble data-role="ai">
                <BubbleWho><AILoader size="xs" /> Ultron</BubbleWho>
                <Thinking>Drafting the change…</Thinking>
              </Bubble>
            )}
          </Convo>

          {messages.length <= 1 && (
            <Suggestions>
              {AUGMENT_SUGGESTIONS.map(s => (
                <SuggestChip key={s} type="button" onClick={() => send(s)}>
                  <PlusIcon size={12} /> {s}
                </SuggestChip>
              ))}
            </Suggestions>
          )}

          <Composer onSubmit={e => { e.preventDefault(); send(draft); }}>
            <ComposerField
              ref={textareaRef}
              rows={1}
              value={draft}
              placeholder="Tell Ultron what to change…"
              aria-label="Instruction to Ultron"
              onChange={e => { setDraft(e.target.value); resize(); }}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(draft); } }}
            />
            <SendBtn type="submit" variant="primary" size="sm" iconOnly disabled={!draft.trim() || thinking} aria-label="Send">
              <ArrowNarrowUpIcon size={18} />
            </SendBtn>
          </Composer>
        </ConvoCol>

        {/* ── Right: live account draft tree ─────────────────────────────── */}
        <DraftPane>
          <DraftCol>
          <ColHead>
            <DraftHeadRow>
              <ColTitle>Account draft</ColTitle>
              <DraftMeta>
                <Tag size="sm" variant="subtle" color="neutral">{store.active.length} items</Tag>
                {gateCount > 0 && <Tag size="sm" variant="subtle" color="red">{gateCount} need sign-off</Tag>}
                <Tooltip content="Undo the last change" placement="top">
                  <Button
                    variant="ghost" size="sm" iconOnly aria-label="Undo last change"
                    disabled={!store.canUndo} onClick={store.undo}
                  >
                    <CircularArrowIcon size={16} />
                  </Button>
                </Tooltip>
              </DraftMeta>
            </DraftHeadRow>
          </ColHead>

          <Tree>
            {groups.length === 0 ? (
              <TreeEmpty>Nothing drafted yet. Your changes will appear here as a live account tree.</TreeEmpty>
            ) : (
              groups.map(g => {
                const isCollapsed = collapsed.has(g.key);
                return (
                  <StatusSection key={g.key}>
                    <StatusHead type="button" onClick={() => toggleSection(g.key)} aria-expanded={!isCollapsed}>
                      <StatusHeadLeft>
                        <Chevron data-collapsed={isCollapsed || undefined}><ChevronDownIcon size={16} /></Chevron>
                        <StatusLabel data-status={g.key}>{g.label}</StatusLabel>
                      </StatusHeadLeft>
                      <TreeGroupCount>{g.total}</TreeGroupCount>
                    </StatusHead>
                    {!isCollapsed && (
                      <StatusBody>
                        {g.domains.map(d => (
                          <TreeGroup key={d.domain}>
                            <TreeGroupHead>
                              <TreeGroupLabel>{d.label}</TreeGroupLabel>
                              <TreeGroupCount>{d.entries.length}</TreeGroupCount>
                            </TreeGroupHead>
                            <Rows>
                              {d.entries.map(e => (
                                <DiffRow key={e.id} entry={e} fresh={justAdded.includes(e.id)} onUndo={() => store.undoEntry(e.id)} />
                              ))}
                            </Rows>
                          </TreeGroup>
                        ))}
                      </StatusBody>
                    )}
                  </StatusSection>
                );
              })
            )}
          </Tree>
          </DraftCol>
        </DraftPane>
      </Columns>

      {/* Footer */}
      <Foot>
        <Button variant="tertiary" size="md" leadingArtwork={<ChevronLeftIcon size={16} />} onClick={onBack}>Back</Button>
        <FootRight>
          <FootNote>{store.active.length} change{store.active.length === 1 ? '' : 's'} staged</FootNote>
          <Button
            variant="primary" size="lg"
            trailingArtwork={<ArrowNarrowRightIcon size={18} />}
            disabled={store.active.length === 0}
            onClick={onNext}
          >
            Review & sign off
          </Button>
        </FootRight>
      </Foot>
    </Canvas>
  );
}

// ── Diff row ─────────────────────────────────────────────────────────────────

function DiffRow({ entry, fresh, onUndo }: { entry: MutationEntry; fresh: boolean; onUndo: () => void }) {
  return (
    <Row data-fresh={fresh || undefined}>
      <OpGlyph data-op={entry.op}>{opIcon(entry.op)}</OpGlyph>
      <RowMain>
        <RowLabel>
          <OpVerb>{OP_VERB[entry.op]}</OpVerb> {entry.target.label}
        </RowLabel>
        <RowMeta>
          {/* Domain is now the sub-section header, so the row just carries its
              attribution. */}
          <Attrib>Drafted by {SOURCE_LABEL[entry.source]}</Attrib>
        </RowMeta>
      </RowMain>
      <RowRight>
        <Tag size="sm" variant="subtle" color={RISK_COLOR[entry.risk]}>{RISK_LABEL[entry.risk]}</Tag>
        <Tooltip content="Revert this change" placement="top">
          <Button variant="ghost" size="xs" iconOnly aria-label={`Revert ${entry.target.label}`} onClick={onUndo}>
            <CircularArrowIcon size={14} />
          </Button>
        </Tooltip>
      </RowRight>
    </Row>
  );
}

// ── Styled ───────────────────────────────────────────────────────────────────

const Canvas = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;

const Columns = styled.div`
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
  }
`;

const ConvoCol = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 0;
`;

// The right column rides inside an inset, rounded pane (12px radius + margin).
const DraftPane = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  margin: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  overflow: hidden; /* clip the rounded corners over the scrolling tree */
`;

const DraftCol = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  background: var(--color-bg-secondary);
`;

const ColHead = styled.div<{ $plain?: boolean }>`
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6);
  ${p => !p.$plain && 'border-bottom: 1px solid var(--color-border-opaque);'}
`;

const ColTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`;

const ColSub = styled.p`
  margin: var(--space-1) 0 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`;

const Convo = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-6);
`;

const Bubble = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  max-width: 88%;

  &[data-role='operator'] {
    align-self: flex-end;
    align-items: flex-end;
  }
`;

const BubbleWho = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-tertiary);
`;

const BubbleText = styled.div`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-lg);
  background: var(--color-bg-secondary);
  color: var(--color-content-primary);

  [data-role='operator'] & {
    background: var(--color-bg-inverse-primary);
    color: var(--color-content-inverse-primary);
  }
`;

const Thinking = styled.div`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-style: italic;
  color: var(--color-content-tertiary);
  padding: var(--space-2) var(--space-4);
`;

const Suggestions = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: 0 var(--space-6) var(--space-3);
`;

/* Quick-start prompt chip. Alloy's FilterPill isn't exported from the package
   root, so this is a small token-clean local chip. Flagged for a shared chip. */
const SuggestChip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-full);
  background: var(--color-bg-primary);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-default),
              border-color var(--duration-fast) var(--ease-default);

  &:hover { background: var(--color-bg-secondary); border-color: var(--color-border-hover); }
  &:focus-visible { outline: 2px solid var(--color-border-focus); outline-offset: 1px; }
`;

const Composer = styled.form`
  flex-shrink: 0;
  margin: 0 var(--space-6) var(--space-6);
  display: flex;
  align-items: flex-end;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-below-low);

  &:focus-within { border-color: var(--color-border-focus); }
`;

const ComposerField = styled.textarea`
  flex: 1;
  min-width: 0;
  padding: calc((var(--space-8) - 1lh) / 2) 0;
  border: none;
  background: transparent;
  resize: none;
  outline: none;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);

  &::placeholder { color: var(--color-content-tertiary); }
`;

const SendBtn = styled(Button)`
  flex-shrink: 0;
  border-radius: var(--radius-full);
`;

const DraftHeadRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
`;

const DraftMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

const Tree = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding: var(--space-6);
`;

const TreeEmpty = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;

const TreeGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

const TreeGroupHead = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0 var(--space-1);
`;

const TreeGroupLabel = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`;

const TreeGroupCount = styled.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`;

// Top-level status section (Needs sign-off / Built) — collapsible, nesting the
// domain sub-sections.
const StatusSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;

const StatusHead = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  width: 100%;
  padding: var(--space-1) 0;
  border: none;
  background: transparent;
  cursor: pointer;

  &:focus-visible { outline: 2px solid var(--color-border-focus); outline-offset: 2px; border-radius: var(--radius-sm); }
`;

const StatusHeadLeft = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
`;

const Chevron = styled.span`
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-fast) var(--ease-default);

  &[data-collapsed] { transform: rotate(-90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`;

const StatusLabel = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);

  &[data-status='gate'] { color: var(--color-error-content); }
`;

const StatusBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding-left: var(--space-6);
`;

const Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

const freshPop = keyframes`
  0%   { background: var(--color-info-bg); border-color: var(--color-info-border); }
  100% { background: var(--color-bg-primary); border-color: var(--color-border-opaque); }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-md);

  &[data-fresh] { animation: ${freshPop} 1600ms var(--ease-default); }

  @media (prefers-reduced-motion: reduce) {
    &[data-fresh] { animation: none; }
  }
`;

const OpGlyph = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-6);
  height: var(--space-6);
  border-radius: var(--radius-sm);

  &[data-op='add']    { background: var(--color-green-bg-tertiary);  color: var(--color-green-content-secondary); }
  &[data-op='update'] { background: var(--color-blue-bg-tertiary);   color: var(--color-blue-content-secondary); }
  &[data-op='remove'] { background: var(--color-red-bg-tertiary);    color: var(--color-red-content-secondary); }
`;

const RowMain = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const RowLabel = styled.div`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const OpVerb = styled.span`
  font-weight: var(--font-weight-semibold);
`;

const RowMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

const Attrib = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`;

const RowRight = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-1);
  flex-shrink: 0;
`;

const Foot = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-6);
  border-top: 1px solid var(--color-border-opaque);
  background: var(--color-bg-primary);
`;

const FootRight = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-4);
`;

const FootNote = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;
