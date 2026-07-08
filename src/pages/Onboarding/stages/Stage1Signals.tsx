/* Stage 1 — Signals intake.
   A conversational composer (free text / a URL to scrape / a file to parse)
   feeds a "What I know so far" tray. Each ingested signal is a dismissible chip:
   a SOLID tag for hard evidence, an OUTLINED tag for an AI inference. */

import { useRef, useState } from 'react';
import styled from 'styled-components';
import {
  Button, Tag, AILoader,
  ComposerActions, ComposerAttachment, ComposerSendButton,
  Link01Icon, File04Icon, FeatherIcon, ArrowNarrowRightIcon,
} from 'alloy-design-system';
import type { Signal, SignalKind } from '../types';
import { SIGNAL_SUGGESTIONS } from '../fixtures';

interface Stage1Props {
  signals: Signal[];
  onChange: (next: Signal[]) => void;
  onNext: () => void;
}

const URL_RE = /https?:\/\/|www\.|\.[a-z]{2,}\//i;
const INGEST_MS = 900;

export function Stage1Signals({ signals, onChange, onNext }: Stage1Props) {
  const [draft, setDraft] = useState('');
  const [ingesting, setIngesting] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Merge freshly-ingested signals into the tray, skipping any already present.
  const ingest = (incoming: Signal[]) => {
    setIngesting(true);
    window.setTimeout(() => {
      const have = new Set(signals.map(s => s.id));
      onChange([...signals, ...incoming.filter(s => !have.has(s.id))]);
      setIngesting(false);
    }, INGEST_MS);
  };

  const submitText = () => {
    const text = draft.trim();
    if (!text || ingesting) return;
    const kind: SignalKind = URL_RE.test(text) ? 'url' : 'text';
    ingest(SIGNAL_SUGGESTIONS[kind]);
    setDraft('');
    requestAnimationFrame(() => { if (textareaRef.current) textareaRef.current.style.height = 'auto'; });
  };

  const attachFile = () => { if (!ingesting) ingest(SIGNAL_SUGGESTIONS.file); };

  const dismiss = (id: string) => onChange(signals.filter(s => s.id !== id));

  const resize = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  };

  const sendState = ingesting ? 'streaming' : draft.trim() ? 'ready' : 'disabled-invalid';

  return (
    <Wrap>
      <Lede>
        Tell me about your operation in your own words, paste a link to your site,
        or drop in a roster. I'll pull out what matters and pick a starting point.
      </Lede>

      {/* Composer — free text + attach + send, with the AI loader taking over the
          send button's spot while I read what you gave me. */}
      <Composer onSubmit={e => { e.preventDefault(); submitText(); }}>
        <Field
          ref={textareaRef}
          rows={2}
          value={draft}
          placeholder="e.g. We run three restaurants, open late, mostly hourly staff on rotating shifts…"
          aria-label="Describe your operation"
          onChange={e => { setDraft(e.target.value); resize(); }}
          onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submitText(); } }}
        />
        <ComposerRow>
          <Hints>
            <Hint><FeatherIcon size={14} /> Describe</Hint>
            <Hint><Link01Icon size={14} /> Paste a URL</Hint>
            <Hint><File04Icon size={14} /> Attach a roster</Hint>
          </Hints>
          <Actions>
            <ComposerActions>
              <ComposerAttachment state={ingesting ? 'disabled' : 'idle'} onSelect={attachFile} />
              <ComposerSendButton state={sendState} onSend={submitText} />
            </ComposerActions>
          </Actions>
        </ComposerRow>
      </Composer>

      {/* What I know so far — the accumulating signal tray. */}
      <Tray>
        <TrayHead>
          <TrayTitle>What I know so far</TrayTitle>
          {ingesting && (
            <Reading><AILoader size="xs" /> Reading…</Reading>
          )}
        </TrayHead>

        {signals.length === 0 && !ingesting ? (
          <Empty>Nothing yet — send a description, link, or file above and I'll start filling this in.</Empty>
        ) : (
          <Chips>
            {signals.map(s => (
              <Tag
                key={s.id}
                size="md"
                // Solid = hard evidence you gave me; outline = something I inferred.
                variant={s.evidence === 'evidence' ? 'solid' : 'outline'}
                color={s.evidence === 'evidence' ? 'blue' : 'neutral'}
                dismissible
                onDismiss={() => dismiss(s.id)}
                title={s.detail}
              >
                {s.label}
              </Tag>
            ))}
          </Chips>
        )}

        <Legend>
          <LegendItem><Tag size="sm" variant="solid" color="blue">Evidence</Tag> you told me directly</LegendItem>
          <LegendItem><Tag size="sm" variant="outline" color="neutral">Inference</Tag> I worked out</LegendItem>
        </Legend>
      </Tray>

      <FootRow>
        <Button
          variant="primary"
          size="lg"
          disabled={signals.length === 0}
          trailingArtwork={<ArrowNarrowRightIcon size={18} />}
          onClick={onNext}
        >
          Find my template
        </Button>
      </FootRow>
    </Wrap>
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
`;

const Composer = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-below-low);

  &:focus-within { border-color: var(--color-border-focus); }
`;

const Field = styled.textarea`
  width: 100%;
  border: none;
  background: transparent;
  resize: none;
  outline: none;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);

  &::placeholder { color: var(--color-content-tertiary); }
`;

const ComposerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
`;

const Hints = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
`;

const Hint = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`;

const Actions = styled.div`
  flex-shrink: 0;
`;

const Tray = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-5);
  background: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
`;

const TrayHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TrayTitle = styled.h2`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`;

const Reading = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`;

const Empty = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`;

const Legend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  padding-top: var(--space-2);
  border-top: 1px solid var(--color-border-opaque);
`;

const LegendItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`;

const FootRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;
