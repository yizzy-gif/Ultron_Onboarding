/* ─────────────────────────────────────────────────────────────────────────────
   Stage 4 — Confirm gate.

   A risk-sorted summary built from gateBuckets():
     • a count strip (auto / notify / gate),
     • a hard-bordered "needs sign-off" block for the high-risk gate entries
       (pay rates, permissions) — the Provision button stays disabled until every
       one is resolved (canProvision()),
     • collapsed accordions for everything that was built silently or flagged.

   Resolving a gate entry writes its resolution back to the shared log; the
   Provision button watches store.provisionReady (canProvision + non-empty log).
   ───────────────────────────────────────────────────────────────────────────── */

import { useState } from 'react';
import styled from 'styled-components';
import {
  Button, DataCard, Tag, Switch, TextField, Accordion, AccordionItem, Tooltip,
  CheckCircleIcon, AlertTriangleIcon, InfoCircleIcon,
  ChevronLeftIcon, ZapIcon,
} from 'alloy-design-system';
import type { ProvisioningStore } from '../logStore';
import type { MutationEntry } from '../provisioningLog';
import { OP_VERB, RISK_COLOR, RISK_LABEL, SOURCE_LABEL, DOMAIN_LABEL } from '../shared';

interface Stage4Props {
  store: ProvisioningStore;
  onProvision: () => void;
  onBack: () => void;
}

export function Stage4Confirm({ store, onProvision, onBack }: Stage4Props) {
  const { auto, notify, gate } = store.buckets;
  // Local text for money inputs; resolution itself lives in the log store.
  const [values, setValues] = useState<Record<string, string>>({});

  const setRate = (id: string, raw: string) => {
    setValues(prev => ({ ...prev, [id]: raw }));
    store.setResolution(id, raw.trim() ? 'resolved' : 'unresolved');
  };
  const confirm = (id: string, on: boolean) => store.setResolution(id, on ? 'resolved' : 'unresolved');

  const unresolved = gate.filter(e => e.resolution === 'unresolved').length;

  return (
    <Wrap>
      <Lede>
        Here's everything Ultron will build. Low-risk items are ready to go; anything that
        touches <strong>pay or access</strong> needs your sign-off before we provision.
      </Lede>

      {/* Count strip */}
      <Strip>
        <DataCard color="green"  icon={<CheckCircleIcon size={24} />}   label="Built automatically" value={auto.length} />
        <DataCard color="orange" icon={<InfoCircleIcon size={24} />}    label="Built · flagged"      value={notify.length} />
        <DataCard color="red"    icon={<AlertTriangleIcon size={24} />} label="Needs sign-off"       value={gate.length} />
      </Strip>

      {/* Hard-bordered sign-off block */}
      {gate.length > 0 && (
        <SignOff>
          <SignOffHead>
            <SignOffTitle><AlertTriangleIcon size={18} /> Needs your sign-off</SignOffTitle>
            <Tag size="sm" variant={unresolved > 0 ? 'solid' : 'subtle'} color={unresolved > 0 ? 'red' : 'green'}>
              {unresolved > 0 ? `${unresolved} remaining` : 'All confirmed'}
            </Tag>
          </SignOffHead>
          <SignOffNote>
            Money and access changes are hard-pinned to high risk — Ultron won't build these until you approve them.
          </SignOffNote>

          <GateList>
            {gate.map(e => (
              <GateRow key={e.id} data-resolved={e.resolution === 'resolved' || undefined}>
                <GateMain>
                  <GateLabel>
                    {OP_VERB[e.op]} {e.target.label}
                    <Tag size="sm" variant="subtle" color={RISK_COLOR[e.risk]}>{RISK_LABEL[e.risk]}</Tag>
                  </GateLabel>
                  <GateMeta>
                    <span>{DOMAIN_LABEL[e.target.domain]}</span>
                    <MetaDot>·</MetaDot>
                    <span>Drafted by {SOURCE_LABEL[e.source]}</span>
                  </GateMeta>
                </GateMain>
                <GateControl>
                  {e.target.domain === 'rateValue' ? (
                    <RateField>
                      <TextField
                        size="sm"
                        type="number"
                        aria-label={`${e.target.label} — dollars per hour`}
                        placeholder="0.00"
                        leadingIcon={<span aria-hidden>$</span>}
                        value={values[e.id] ?? ''}
                        onChange={ev => setRate(e.id, ev.target.value)}
                      />
                      <RateUnit>/hr</RateUnit>
                    </RateField>
                  ) : (
                    <Switch
                      size="sm"
                      label="Approve"
                      checked={e.resolution === 'resolved'}
                      onChange={on => confirm(e.id, on)}
                    />
                  )}
                </GateControl>
              </GateRow>
            ))}
          </GateList>
        </SignOff>
      )}

      {/* Collapsed rest */}
      <Accordion type="multiple" defaultValue={[]}>
        <AccordionItem
          value="auto"
          label="Built automatically"
          description="Low-risk — provisioned without review"
          icon={<CheckCircleIcon size={16} />}
          trailingSlot={<Tag size="sm" variant="subtle" color="green">{auto.length}</Tag>}
        >
          <QuietList>
            {auto.length === 0 ? <QuietEmpty>Nothing here.</QuietEmpty> : auto.map(e => <QuietRow key={e.id} entry={e} />)}
          </QuietList>
        </AccordionItem>
        <AccordionItem
          value="notify"
          label="Built · flagged for review"
          description="Medium-risk — built, but surfaced for your awareness"
          icon={<InfoCircleIcon size={16} />}
          trailingSlot={<Tag size="sm" variant="subtle" color="orange">{notify.length}</Tag>}
        >
          <QuietList>
            {notify.length === 0 ? <QuietEmpty>Nothing here.</QuietEmpty> : notify.map(e => <QuietRow key={e.id} entry={e} />)}
          </QuietList>
        </AccordionItem>
      </Accordion>

      {/* Footer */}
      <Foot>
        <Button variant="tertiary" size="md" leadingArtwork={<ChevronLeftIcon size={16} />} onClick={onBack}>Back</Button>
        <Tooltip
          content={store.provisionReady ? 'Start provisioning your account' : 'Set pay rates and approve access changes to continue'}
          placement="top"
        >
          {/* span wrapper so the tooltip still fires while the button is disabled */}
          <span>
            <Button
              variant="primary" size="lg"
              leadingArtwork={<ZapIcon size={18} />}
              disabled={!store.provisionReady}
              onClick={onProvision}
            >
              Provision account
            </Button>
          </span>
        </Tooltip>
      </Foot>
    </Wrap>
  );
}

function QuietRow({ entry }: { entry: MutationEntry }) {
  return (
    <QuietRowEl>
      <QuietLabel>{OP_VERB[entry.op]} {entry.target.label}</QuietLabel>
      <QuietAttrib>{SOURCE_LABEL[entry.source]}</QuietAttrib>
    </QuietRowEl>
  );
}

// ── Styled ───────────────────────────────────────────────────────────────────

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
`;

const Lede = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);

  strong { color: var(--color-content-primary); font-weight: var(--font-weight-semibold); }
`;

const Strip = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);

  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const SignOff = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-5);
  background: var(--color-bg-primary);
  /* Hard border — this block is the gate. */
  border: 2px solid var(--color-error-border);
  border-radius: var(--radius-lg);
`;

const SignOffHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
`;

const SignOffTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-error-content);
`;

const SignOffNote = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`;

const GateList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

const GateRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-md);
  transition: border-color var(--duration-slow) var(--ease-default);

  &[data-resolved] { border-color: var(--color-success-border); background: var(--color-success-bg); }
`;

const GateMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`;

const GateLabel = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`;

const GateMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`;

const MetaDot = styled.span`
  color: var(--color-content-disabled);
`;

const GateControl = styled.div`
  flex-shrink: 0;
`;

const RateField = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  width: 140px;
`;

const RateUnit = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;

const QuietList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-2) 0;
`;

const QuietRowEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);

  &:hover { background: var(--color-bg-secondary); }
`;

const QuietLabel = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-primary);
`;

const QuietAttrib = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`;

const QuietEmpty = styled.p`
  margin: 0;
  padding: var(--space-2) var(--space-3);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;

const Foot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border-opaque);
`;
