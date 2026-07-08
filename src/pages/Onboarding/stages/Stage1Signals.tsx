/* Stage 1 — Signals intake.
   A conversational composer (free text / a URL to scrape / a file to parse)
   feeds a "What I know so far" tray. Each ingested signal is a dismissible chip:
   a SOLID tag for hard evidence, an OUTLINED tag for an AI inference. */

import { useRef, useState } from 'react';
import styled from 'styled-components';
import {
  Button, Tag, AILoader,
  ComposerActions, ComposerAttachment, ComposerSendButton,
  ArrowNarrowRightIcon, File04Icon,
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

// A file staged in the composer but not yet parsed — it rides the composer's
// top row as a removable chip until the admin hits send.
interface PendingFile { id: string; name: string; }

export function Stage1Signals({ signals, onChange, onNext }: Stage1Props) {
  const [draft, setDraft] = useState('');
  const [ingesting, setIngesting] = useState(false);
  // Attached-but-not-yet-sent files, shown as chips on the composer's top row.
  const [pendingFiles, setPendingFiles] = useState<PendingFile[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileSeq = useRef(0);

  // Merge freshly-ingested signals into the tray, skipping any already present.
  const ingest = (incoming: Signal[]) => {
    setIngesting(true);
    window.setTimeout(() => {
      const have = new Set(signals.map(s => s.id));
      onChange([...signals, ...incoming.filter(s => !have.has(s.id))]);
      setIngesting(false);
    }, INGEST_MS);
  };

  // Send: parse whatever is staged — the typed text (as free text or a URL) and
  // any attached files — into signals, then clear the composer.
  const submit = () => {
    if (ingesting) return;
    const text = draft.trim();
    if (!text && pendingFiles.length === 0) return;
    const incoming: Signal[] = [];
    if (pendingFiles.length > 0) incoming.push(...SIGNAL_SUGGESTIONS.file);
    if (text) {
      const kind: SignalKind = URL_RE.test(text) ? 'url' : 'text';
      incoming.push(...SIGNAL_SUGGESTIONS[kind]);
    }
    ingest(incoming);
    setDraft('');
    setPendingFiles([]);
    requestAnimationFrame(() => { if (textareaRef.current) textareaRef.current.style.height = 'auto'; });
  };

  // Attaching only STAGES the files as chips — nothing is parsed until send.
  const attachFile = (files: FileList) => {
    if (ingesting) return;
    const added = Array.from(files).map(f => ({ id: `f${fileSeq.current++}`, name: f.name }));
    if (added.length) setPendingFiles(prev => [...prev, ...added]);
  };
  const removePending = (id: string) => setPendingFiles(prev => prev.filter(f => f.id !== id));

  const dismiss = (id: string) => onChange(signals.filter(s => s.id !== id));

  const resize = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  };

  const canSend = draft.trim().length > 0 || pendingFiles.length > 0;
  const sendState = ingesting ? 'streaming' : canSend ? 'ready' : 'disabled-invalid';

  return (
    <Wrap>
      <Lede>
        Tell me about your operation in your own words, paste a link to your site,
        or drop in a roster. I'll pull out what matters and pick a starting point.
      </Lede>

      {/* Composer — free text + attach + send, with the AI loader taking over the
          send button's spot while I read what you gave me. */}
      <Composer onSubmit={e => { e.preventDefault(); submit(); }}>
        {/* Top row — staged files, shown as removable chips before send. */}
        {pendingFiles.length > 0 && (
          <PendingRow>
            {pendingFiles.map(f => (
              <Tag
                key={f.id}
                size="md"
                variant="subtle"
                color="blue"
                leadingIcon={<File04Icon size={12} />}
                dismissible
                onDismiss={() => removePending(f.id)}
              >
                {f.name}
              </Tag>
            ))}
          </PendingRow>
        )}
        <Field
          ref={textareaRef}
          rows={2}
          value={draft}
          placeholder="e.g. We run three restaurants, open late, mostly hourly staff on rotating shifts…"
          aria-label="Describe your operation"
          onChange={e => { setDraft(e.target.value); resize(); }}
          onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submit(); } }}
        />
        <ComposerRow>
          <LeftGroup>
            <BigComposerActions>
              <ComposerAttachment state={ingesting ? 'disabled' : 'idle'} onSelect={attachFile} />
            </BigComposerActions>
            <ComposerHint>Upload a file, paste a link, or just describe it</ComposerHint>
          </LeftGroup>
          <BigComposerActions>
            <ComposerSendButton state={sendState} onSend={submit} />
          </BigComposerActions>
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
  gap: var(--space-2);
  padding: var(--space-3);
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

const PendingRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding-bottom: var(--space-1);
`;

const ComposerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

const ComposerHint = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`;

/* Enlarge the composer controls to 32px via Alloy's own composer sizing vars.
   `&&` outweighs the component's `.size-md` rule (which sets these on the same
   root element), so the override wins without depending on stylesheet order. */
const BigComposerActions = styled(ComposerActions)`
  && {
    --composer-btn-size: var(--space-8); /* 32px */
    --composer-btn-icon-attach: var(--space-4); /* 16px */
    --composer-btn-icon-send: var(--space-4); /* 16px */
  }
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
