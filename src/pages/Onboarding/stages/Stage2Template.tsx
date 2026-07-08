/* Stage 2 — Template match.
   The AI's best-fit template is the hero card (match %, plain-language rationale,
   signal-mirroring tags). Two quieter alternates sit below, plus "browse all" /
   "start blank" escape hatches. "Preview contents" reveals a read-only breakdown
   (roles / rate rules / policies); rate VALUES render empty + locked. */

import { useState } from 'react';
import styled from 'styled-components';
import {
  Button, Tag, Badge, Lock01Icon, ChevronDownIcon,
  ArrowNarrowRightIcon, ChevronLeftIcon, PlusIcon,
} from 'alloy-design-system';
import type { Signal, Template } from '../types';
import { TEMPLATES } from '../fixtures';

interface Stage2Props {
  signals: Signal[];
  chosen: Template | null;
  onChoose: (tpl: Template) => void;
  onNext: () => void;
  onBack: () => void;
}

export function Stage2Template({ signals, chosen, onChoose, onNext, onBack }: Stage2Props) {
  const [hero, ...alternates] = [...TEMPLATES].sort((a, b) => b.match - a.match);
  const [previewId, setPreviewId] = useState<string | null>(null);
  const [browseAll, setBrowseAll] = useState(false);

  const use = (tpl: Template) => { onChoose(tpl); onNext(); };

  return (
    <Wrap>
      <Lede>
        Based on {signals.length > 0 ? `${signals.length} signal${signals.length === 1 ? '' : 's'}` : 'what you shared'},
        this is the closest fit. You'll be able to change anything on the next step.
      </Lede>

      {/* Hero — the recommended template. */}
      <Hero>
        <HeroTop>
          <HeroTitleBlock>
            <MatchRow>
              <Badge variant="primary">{hero.match}% match</Badge>
              <Industry>{hero.industry}</Industry>
            </MatchRow>
            <HeroName>{hero.name}</HeroName>
          </HeroTitleBlock>
        </HeroTop>

        <Rationale>{hero.rationale}</Rationale>

        <Tags>
          {hero.tags.map(t => (
            <Tag key={t} size="md" variant="subtle" color="blue">{t}</Tag>
          ))}
        </Tags>

        {previewId === hero.id && <Preview template={hero} />}

        <HeroActions>
          <Button variant="primary" size="lg" trailingArtwork={<ArrowNarrowRightIcon size={18} />} onClick={() => use(hero)}>
            Use this template
          </Button>
          <Button
            variant="tertiary"
            size="lg"
            trailingArtwork={<ChevronDownIcon size={16} style={{ transform: previewId === hero.id ? 'rotate(180deg)' : undefined, transition: 'transform 150ms' }} />}
            onClick={() => setPreviewId(previewId === hero.id ? null : hero.id)}
          >
            {previewId === hero.id ? 'Hide contents' : 'Preview contents'}
          </Button>
        </HeroActions>
      </Hero>

      {/* Alternates — quieter cards. */}
      <AltHead>Other close fits</AltHead>
      <Alternates>
        {(browseAll ? alternates : alternates.slice(0, 2)).map(tpl => (
          <AltCard key={tpl.id}>
            <AltMain>
              <AltTitleRow>
                <AltName>{tpl.name}</AltName>
                <Tag size="sm" variant="outline" color="neutral">{tpl.match}%</Tag>
              </AltTitleRow>
              <AltIndustry>{tpl.industry}</AltIndustry>
              {previewId === tpl.id && <Preview template={tpl} />}
            </AltMain>
            <AltActions>
              <Button variant="secondary" size="sm" onClick={() => use(tpl)}>Use</Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setPreviewId(previewId === tpl.id ? null : tpl.id)}
              >
                {previewId === tpl.id ? 'Hide' : 'Preview'}
              </Button>
            </AltActions>
          </AltCard>
        ))}
      </Alternates>

      {/* Escape hatches. */}
      <Escapes>
        {!browseAll && alternates.length > 2 && (
          <Button variant="ghost" size="md" onClick={() => setBrowseAll(true)}>Browse all templates</Button>
        )}
        <Button variant="ghost" size="md" leadingArtwork={<PlusIcon size={16} />} onClick={() => use(blankTemplate())}>
          Start blank
        </Button>
      </Escapes>

      <FootRow>
        <Button variant="tertiary" size="md" leadingArtwork={<ChevronLeftIcon size={16} />} onClick={onBack}>Back</Button>
        {chosen && <Chosen>Chosen: {chosen.name}</Chosen>}
      </FootRow>
    </Wrap>
  );
}

// ── Read-only template breakdown ─────────────────────────────────────────────

function Preview({ template }: { template: Template }) {
  return (
    <PreviewBox>
      {template.sections.map(section => (
        <PreviewSection key={section.key}>
          <PreviewSectionTitle>{section.title}</PreviewSectionTitle>
          <PreviewLines>
            {section.lines.map((line, i) => (
              <PreviewLine key={i}>
                <PreviewLabel>{line.label}</PreviewLabel>
                {line.locked ? (
                  // Money is shown empty + locked — set during augment / sign-off.
                  <LockedValue><Lock01Icon size={12} /> Set later</LockedValue>
                ) : (
                  <PreviewDetail>{line.detail ?? '—'}</PreviewDetail>
                )}
              </PreviewLine>
            ))}
          </PreviewLines>
        </PreviewSection>
      ))}
    </PreviewBox>
  );
}

function blankTemplate(): Template {
  return {
    id: 'tpl_blank', name: 'Blank account', industry: 'Custom', match: 0,
    rationale: '', tags: [], sections: [], seed: [],
  };
}

// ── Styled ───────────────────────────────────────────────────────────────────

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`;

const Lede = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`;

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-6);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-selected);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-below-md);
`;

const HeroTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const HeroTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

const MatchRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`;

const Industry = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`;

const HeroName = styled.h2`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`;

const Rationale = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`;

const HeroActions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`;

const AltHead = styled.h3`
  margin: var(--space-2) 0 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`;

const Alternates = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;

const AltCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-5);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
`;

const AltMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
`;

const AltTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

const AltName = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`;

const AltIndustry = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`;

const AltActions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
`;

const Escapes = styled.div`
  display: flex;
  gap: var(--space-3);
`;

const FootRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border-opaque);
`;

const Chosen = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;

// Preview

const PreviewBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-4);
  background: var(--color-bg-secondary);
  border-radius: var(--radius-md);
`;

const PreviewSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

const PreviewSectionTitle = styled.div`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`;

const PreviewLines = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`;

const PreviewLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-1) 0;
`;

const PreviewLabel = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-primary);
`;

const PreviewDetail = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;

const LockedValue = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  padding: var(--space-1) var(--space-2);
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-sm);
`;
