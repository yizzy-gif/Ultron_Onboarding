/* Stage 1 — Signals intake.
   A conversational composer (free text / a URL to scrape / a file to parse)
   feeds a "What I know so far" tray. Each ingested signal is a dismissible chip:
   a SOLID tag for hard evidence, an OUTLINED tag for an AI inference. */

import { useMemo, useRef, useState } from 'react';
import type { DragEvent } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  Button, Tag,
  ComposerActions, ComposerAttachment, ComposerSendButton,
  ArrowNarrowRightIcon, File04Icon, Link01Icon, LinkExternal01Icon,
  Tooltip, InfoCircleIcon,
} from 'alloy-design-system';
import { AgentMark } from '../../Ultron';
import type { Signal } from '../types';
import { SIGNAL_SUGGESTIONS, SIGNAL_CATEGORY_ORDER, SIGNAL_CATEGORY_LABEL } from '../fixtures';

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

// Derive an org identity from a pasted link: a normalized href, the bare host
// (for the favicon lookup), and a title-cased display name.
function companyFromUrl(raw: string): { name: string; host: string; url: string } {
  const withProto = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  let host = raw;
  try { host = new URL(withProto).hostname; } catch { /* keep raw */ }
  host = host.replace(/^www\./, '');
  const root = host.split('.')[0] || host;
  const name = root
    .split(/[-_]/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  return { name: name || host, host, url: withProto };
}

export function Stage1Signals({ signals, onChange, onNext }: Stage1Props) {
  const [draft, setDraft] = useState('');
  const [ingesting, setIngesting] = useState(false);
  // Attached-but-not-yet-sent files, shown as chips on the composer's top row.
  const [pendingFiles, setPendingFiles] = useState<PendingFile[]>([]);
  // True while a file is dragged over the composer — draws the drop affordance.
  const [dragOver, setDragOver] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileSeq = useRef(0);

  // Merge freshly-ingested signals into the tray, skipping any already present.
  // A fresh `company` signal replaces the prior one (only one org identity).
  const ingest = (incoming: Signal[]) => {
    setIngesting(true);
    window.setTimeout(() => {
      const base = incoming.some(s => s.category === 'company')
        ? signals.filter(s => s.category !== 'company')
        : signals;
      const have = new Set(base.map(s => s.id));
      onChange([...base, ...incoming.filter(s => !have.has(s.id))]);
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

    // Attached files become their own `file` signals (real names) plus the
    // parsed roster content.
    if (pendingFiles.length > 0) {
      pendingFiles.forEach(f =>
        incoming.push({ id: `sig_${f.id}`, kind: 'file', evidence: 'evidence', category: 'file', label: f.name }),
      );
      incoming.push(...SIGNAL_SUGGESTIONS.file);
    }

    if (text) {
      if (URL_RE.test(text)) {
        // A link → capture the org identity for the header, then the scraped facts.
        const c = companyFromUrl(text);
        incoming.push({ id: 'sig_company', kind: 'url', evidence: 'evidence', category: 'company', label: c.name, detail: c.url });
        incoming.push(...SIGNAL_SUGGESTIONS.url);
      } else {
        incoming.push(...SIGNAL_SUGGESTIONS.text);
      }
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

  // Drag & drop onto the composer stages files exactly like the attach button.
  const onDragOver = (e: DragEvent) => {
    if (ingesting) return;
    if (Array.from(e.dataTransfer.types).includes('Files')) {
      e.preventDefault();
      setDragOver(true);
    }
  };
  const onDragLeave = (e: DragEvent) => {
    // Ignore leaves into child elements — only clear when leaving the composer.
    if (e.currentTarget.contains(e.relatedTarget as Node)) return;
    setDragOver(false);
  };
  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files?.length) attachFile(e.dataTransfer.files);
  };

  const dismiss = (id: string) => onChange(signals.filter(s => s.id !== id));

  const resize = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  };

  const canSend = draft.trim().length > 0 || pendingFiles.length > 0;
  const sendState = ingesting ? 'streaming' : canSend ? 'ready' : 'disabled-invalid';

  // Fold the flat signal list into the panel's shape: the org header, the files
  // strip, and the typed sub-sections (roles, pay, …).
  const company = useMemo(() => signals.find(s => s.category === 'company') ?? null, [signals]);
  const files = useMemo(() => signals.filter(s => s.category === 'file'), [signals]);
  const groups = useMemo(
    () =>
      SIGNAL_CATEGORY_ORDER.map(cat => ({
        cat,
        // Evidence always sorts before inference within a section; ties keep
        // insertion order (stable sort).
        items: signals
          .filter(s => s.category === cat)
          .sort((a, b) => (a.evidence === 'evidence' ? 0 : 1) - (b.evidence === 'evidence' ? 0 : 1)),
      })).filter(g => g.items.length > 0),
    [signals],
  );
  const hasContent = signals.length > 0;

  return (
    <Wrap>
      <Lede>
        Tell me about your operation in your own words, paste a link to your site,
        or drop in a roster. I'll pull out what matters and pick a starting point.
      </Lede>

      {/* Composer — free text + attach + send, with the AI loader taking over the
          send button's spot while I read what you gave me. */}
      <Composer
        onSubmit={e => { e.preventDefault(); submit(); }}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        $dragOver={dragOver}
      >
        {dragOver && <DropHint><File04Icon size={16} /> Drop to import</DropHint>}
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
          <HeadRight>
            {ingesting && (
              <Reading><AgentMark mark="circle" size={20} tone="auto" state="active" aria-label="Ultron reading" /> Reading…</Reading>
            )}
            <Tooltip
              placement="top"
              content={
                <LegendTip>
                  <LegendRow><LegendSwatch data-kind="solid" /> <strong>Evidence</strong> — you told me directly</LegendRow>
                  <LegendRow><LegendSwatch data-kind="outline" /> <strong>Inference</strong> — I worked out</LegendRow>
                </LegendTip>
              }
            >
              <Button variant="ghost" size="xs" iconOnly aria-label="What do these chips mean?">
                <InfoCircleIcon size={16} />
              </Button>
            </Tooltip>
          </HeadRight>
        </TrayHead>

        {!hasContent && !ingesting ? (
          <Empty>Nothing yet — send a description, link, or file above and I'll start filling this in.</Empty>
        ) : (
          <Knowledge>
            {/* 1 — Company identity, from the scraped link (with favicon). */}
            {company && (
              <CompanyRow key={company.id}>
                <Favicon url={company.detail} />
                <CompanyMeta>
                  <CompanyName>{company.label}</CompanyName>
                  {company.detail && (
                    <CompanyLink href={company.detail} target="_blank" rel="noreferrer">
                      {company.detail.replace(/^https?:\/\//, '')}
                      <LinkExternal01Icon size={12} />
                    </CompanyLink>
                  )}
                </CompanyMeta>
              </CompanyRow>
            )}

            {/* 2 — Files imported. */}
            {files.length > 0 && (
              <SubSection>
                <SubTitle>{SIGNAL_CATEGORY_LABEL.file}</SubTitle>
                <Chips>
                  {files.map(f => (
                    <ChipIn key={f.id}>
                      <Tag size="md" variant="subtle" color="blue" leadingIcon={<File04Icon size={12} />} dismissible onDismiss={() => dismiss(f.id)}>
                        {f.label}
                      </Tag>
                    </ChipIn>
                  ))}
                </Chips>
              </SubSection>
            )}

            {/* 3 — Typed sub-sections: roles, pay, scheduling, … */}
            {groups.map(g => (
              <SubSection key={g.cat}>
                <SubTitle>{SIGNAL_CATEGORY_LABEL[g.cat]}</SubTitle>
                <Chips>
                  {g.items.map(s => (
                    <ChipIn key={s.id}>
                      <Tag
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
                    </ChipIn>
                  ))}
                </Chips>
              </SubSection>
            ))}
          </Knowledge>
        )}
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

// Favicon for the scraped company, pulled from the public favicon service with a
// graceful fall back to a link glyph when it can't load (offline / no icon).
function Favicon({ url }: { url?: string }) {
  const [failed, setFailed] = useState(false);
  let host = '';
  try { host = url ? new URL(url).hostname : ''; } catch { /* no host */ }
  if (!url || !host || failed) {
    return <FaviconFallback><Link01Icon size={16} /></FaviconFallback>;
  }
  return (
    <FaviconImg
      src={`https://www.google.com/s2/favicons?domain=${host}&sz=64`}
      alt=""
      onError={() => setFailed(true)}
    />
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

const Composer = styled.form<{ $dragOver?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-below-low);
  transition: border-color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default);

  &:focus-within { border-color: var(--color-border-focus); }

  /* Drag affordance — a dashed brand outline + tinted surface while a file is
     dragged over, so it reads as a drop target. */
  ${p => p.$dragOver && `
    border-color: var(--color-content-link);
    border-style: dashed;
    background: var(--color-info-bg);
  `}
`;

const DropHint = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  border-radius: var(--radius-xl);
  background: color-mix(in srgb, var(--color-info-bg) 88%, transparent);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-link);
  pointer-events: none;
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

  &::placeholder { color: var(--color-content-disabled); }
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

// Entrance motion — each newly-mounted chip / section rises in, so the panel
// visibly reacts the moment the composer's content is ingested.
const riseIn = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Knowledge = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`;

const CompanyRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-md);
  animation: ${riseIn} var(--duration-slow) var(--ease-default) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const FaviconImg = styled.img`
  width: var(--space-8);
  height: var(--space-8);
  flex-shrink: 0;
  border-radius: var(--radius-sm);
  object-fit: contain;
  background: var(--color-bg-secondary);
`;

const FaviconFallback = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-8);
  height: var(--space-8);
  flex-shrink: 0;
  border-radius: var(--radius-sm);
  background: var(--color-bg-secondary);
  color: var(--color-content-tertiary);
`;

const CompanyMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

const CompanyName = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`;

const CompanyLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  text-decoration: none;

  &:hover { text-decoration: underline; }
`;

const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  animation: ${riseIn} var(--duration-slow) var(--ease-default) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const SubTitle = styled.div`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`;

// Per-chip entrance — only freshly-mounted chips animate, so new knowledge
// slides in without re-animating what's already there.
const ChipIn = styled.span`
  display: inline-flex;
  animation: ${riseIn} var(--duration-slow) var(--ease-default) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const HeadRight = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

// Legend now lives in the header info-button tooltip.
const LegendTip = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

const LegendRow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  /* Inverse content so it reads on the tooltip's inverse surface in both themes. */
  color: var(--color-content-inverse-primary);
  white-space: nowrap;

  strong { font-weight: var(--font-weight-semibold); }
`;

// Solid vs outline swatch mirroring the chip styles, drawn with inverse tokens
// so both are legible on the tooltip's dark surface.
const LegendSwatch = styled.span`
  flex-shrink: 0;
  width: var(--space-6);
  height: var(--space-3);
  border-radius: var(--radius-full);

  &[data-kind='solid']   { background: var(--color-blue-bg-secondary); }
  &[data-kind='outline'] { background: transparent; border: 1px solid var(--color-content-inverse-tertiary); }
`;

const FootRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;
