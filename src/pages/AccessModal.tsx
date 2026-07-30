/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — access modal (demo).
   The app's one deliberately high-emphasis conversion surface, in two variants:
     · waitlist — the default: full access is gated by demand; the operator is
                  already on the list, and booking time with the team is what
                  moves them up it
     · grant    — the $1,000 welcome grant, unlocked with a mobile number
   Opened by the M shortcut from anywhere in Ultron (see App), so it isn't tied
   to the welcome thread it started in. DEMO ONLY — the number is held in memory
   and never sent anywhere.
   ───────────────────────────────────────────────────────────────────────────── */

import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { Button, CheckCircleIcon, Dialog, XCloseIcon } from 'alloy-design-system';
import { TeambridgeMark } from './Onboarding/TeambridgeMark';

/** Which variant the card is showing. The demo switch under the card flips it. */
export type AccessModalMode = 'grant' | 'waitlist';

/** How long the post-submit confirmation holds the screen before the modal hands
 *  it back to whatever page is underneath. */
const CONFIRM_HOLD_MS = 1600;

/** A dismissal that goes nowhere — the locked gate's Escape/backdrop handler.
 *  Module-level so its identity is stable across renders. */
const NO_DISMISS = () => {};

interface AccessModalProps {
  open: boolean;
  onClose: () => void;
  /** Terminal gate: the run is over and this is where the demo ends. The card
   *  loses its close button, its demo switch, and its Escape/backdrop exits, and
   *  it keeps the screen after the number is submitted. Nothing behind it is
   *  reachable again — the only surface left is this one. */
  locked?: boolean;
}

export function AccessModal({ open, onClose, locked = false }: AccessModalProps) {
  // The waitlist is what M opens: full access is gated by demand, so that is the
  // state a real account is actually in. The grant card stays one click away on
  // the demo switch, and whichever was shown last sticks across opens.
  const [mode, setMode] = useState<AccessModalMode>('waitlist');
  // DEMO ONLY: held in memory, never sent anywhere.
  const [phone, setPhone] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [waitlistJoined, setWaitlistJoined] = useState(false);
  const holdTimer = useRef<number | null>(null);
  useEffect(() => () => {
    if (holdTimer.current) window.clearTimeout(holdTimer.current);
  }, []);

  /* Each opening is a fresh pitch. The shortcut now answers from every screen, so
     without this the second press greets the operator with the last submission's
     confirmation — a dead end, when the form is the thing they opened it for. */
  useEffect(() => {
    if (!open) return;
    setPhone('');
    setUnlocked(false);
    setWaitlistJoined(false);
  }, [open]);

  // The gate is the waitlist, always — the grant is a demo alternative, and the
  // switch that reaches it isn't on the locked card.
  const isWaitlist = locked || mode === 'waitlist';
  const confirmed = isWaitlist ? waitlistJoined : unlocked;
  const phoneReady = phone.length >= 10;

  // Let the confirmation land, then hand the screen back to the page underneath —
  // unless this is the gate, which has no page left to hand it back to.
  const holdThenClose = () => {
    if (locked) return;
    if (holdTimer.current) window.clearTimeout(holdTimer.current);
    holdTimer.current = window.setTimeout(onClose, CONFIRM_HOLD_MS);
  };
  const unlock = () => { setUnlocked(true); holdThenClose(); };
  const bookTime = () => { setWaitlistJoined(true); holdThenClose(); };

  return (
    <>
      <GrantOverlayBlur />
      <Dialog
        open={open}
        onClose={locked ? NO_DISMISS : onClose}
        size="lg"
        aria-label={`${isWaitlist ? 'Waitlist' : 'Unlock grant'} — Ultron access`}
      >
        <GrantCard>
          <GrantBrandWatermark aria-hidden="true">
            <TeambridgeMark size={300} />
          </GrantBrandWatermark>
          {!locked && (
            <GrantClose type="button" aria-label="Close" onClick={onClose}>
              <XCloseIcon size={18} />
            </GrantClose>
          )}

          <GrantEyebrow>
            <GrantSpark aria-hidden="true" />
            {isWaitlist ? 'You’re on the waitlist' : 'Your welcome grant'}
          </GrantEyebrow>
          {!isWaitlist && (
            <GrantOffer aria-label="$1,000 of work on us">
              <GrantAmount><GrantCurrency>$</GrantCurrency>1,000</GrantAmount>
              <GrantOfferLabel>of work<br /><strong>on us</strong></GrantOfferLabel>
            </GrantOffer>
          )}

          <GrantTitle $prominent={isWaitlist}>
            {isWaitlist ? 'Thanks for setting up your account!' : 'Ready to see the real work?'}
          </GrantTitle>
          <GrantBody>
            {isWaitlist
              ? 'Your account is looking good, but with our first of its kind full-service AI and ' +
                'new free pricing, we currently are experiencing high demand for Ultron. You’ve ' +
                'been added to the waitlist for full access.'
              : 'Bring Ultron into your operation. Leave your mobile number and we’ll get the real workspace ready—your first 100,000 credits are covered.'}
          </GrantBody>

          <GrantPerks aria-label={isWaitlist ? 'What you’re waiting for' : 'Grant benefits'}>
            {isWaitlist ? (
              <>
                <GrantPerk>Full-service AI</GrantPerk>
                <GrantPerk>New free pricing</GrantPerk>
                <GrantPerk>No commitment</GrantPerk>
              </>
            ) : (
              <>
                <GrantPerk>100,000 credits</GrantPerk>
                <GrantPerk>Up to 3 months</GrantPerk>
                <GrantPerk>You approve every action</GrantPerk>
              </>
            )}
          </GrantPerks>

          {confirmed ? (
            <GrantConfirmed role="status">
              <CheckCircleIcon size={20} />
              {isWaitlist
                ? 'You’re moving up — we’ll text you to set a time with our team.'
                : 'You’re set — we’ll text you when your real workspace is ready. Your $1,000 grant is live.'}
            </GrantConfirmed>
          ) : (
            <GrantForm
              onSubmit={(e: FormEvent) => {
                e.preventDefault();
                if (!phoneReady) return;
                if (isWaitlist) bookTime();
                else unlock();
              }}
            >
              {/* On the waitlist variant the ask is no longer "join" — the operator
                  is already on the list — so the label carries the one action that
                  changes their position, and the number is how the team reaches
                  them to set it up. */}
              <GrantFormLabel htmlFor="ultron-access-phone">
                {isWaitlist
                  ? 'Set up time with our team to get expedited to the front of the list.'
                  : 'Where should we text your invite?'}
              </GrantFormLabel>
              <GrantFormRow>
                <GrantField
                  id="ultron-access-phone"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  minLength={10}
                  maxLength={15}
                  value={phone}
                  placeholder="Your phone number"
                  aria-label="Mobile number"
                  autoComplete="tel"
                  onChange={e => setPhone(e.target.value.replace(/\D/g, ''))}
                />
                <GrantButton type="submit" variant="tertiary" size="lg" disabled={!phoneReady}>
                  {isWaitlist ? 'Set up time' : 'Unlock $1,000'}
                </GrantButton>
              </GrantFormRow>
            </GrantForm>
          )}
          <GrantFinePrint>
            {isWaitlist
              ? 'Scheduling and access updates only — never spam. Msg & data rates may apply. Reply STOP to opt out.'
              : 'Proposals only — never spam. Msg & data rates may apply. Reply STOP to opt out.'}
          </GrantFinePrint>
        </GrantCard>
        {!locked && (
        <ModalDemoSwitch
          type="button"
          onClick={() => {
            if (holdTimer.current) window.clearTimeout(holdTimer.current);
            setMode(m => (m === 'grant' ? 'waitlist' : 'grant'));
          }}
        >
          Demo: show {isWaitlist ? 'welcome grant' : 'waitlist'}
        </ModalDemoSwitch>
        )}
      </Dialog>
    </>
  );
}

// ── Styled ───────────────────────────────────────────────────────────────────

/* ── Access modal (sales reach-out) ───────────────────────────────────────────
   The one deliberately inverse surface in the app — the inverse token family
   keeps it maximally contrasted against the scrim in either theme (dark card on
   light, light card on dark), so the conversion moment reads as its own moment
   rather than another bubble. Layout mirrors the wireframe — headline, body,
   phone field beside the action, fine print — wrapped in Alloy's Dialog, which
   supplies the portal, centering, radius clip, and close behaviors. */

/* The gentle deceleration curve the intro flow uses (easeOutQuint) — glides to
   rest instead of Alloy's snappier default, so the modal reads smooth. */
const GRANT_SMOOTH = 'cubic-bezier(0.22, 1, 0.36, 1)';

/* Entrance: the scrim's blur has to be animated explicitly — backdrop-filter
   doesn't fade with the element's opacity, so without this the blur snaps on
   at full strength one frame in. */
const grantScrimIn = keyframes`
  from {
    opacity: 0;
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
  }
  to {
    opacity: 1;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
  }
`;

const grantScrimOut = keyframes`
  from {
    opacity: 1;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
  }
  to {
    opacity: 0;
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
  }
`;

const grantCardIn = keyframes`
  0%   { opacity: 0; transform: scale(0.88) translateY(36px) rotate(-1deg); }
  70%  { opacity: 1; transform: scale(1.018) translateY(-2px) rotate(0); }
  100% { opacity: 1; transform: scale(1) translateY(0) rotate(0); }
`;

const grantCardOut = keyframes`
  from { opacity: 1; transform: scale(1) translateY(0); }
  to   { opacity: 0; transform: scale(0.97) translateY(10px); }
`;

/* Blurs this dialog's scrim and smooths its motion. Alloy's Dialog owns the
   overlay (a CSS-module class portaled to <body>), so the one stable hook is
   the overlay's own dialog semantics — scoped to this modal via its aria-label.
   The extra [data-state] in each selector out-specifies Alloy's own animation
   rules regardless of stylesheet injection order. Exit durations must stay
   under the Dialog's 180ms unmount timer or the animation gets cut off. */
const GrantOverlayBlur = createGlobalStyle`
  [role='dialog'][aria-label$='Ultron access'][data-state] {
    background: color-mix(in srgb, black 58%, transparent);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    animation: ${grantScrimIn} 440ms ${GRANT_SMOOTH} both;

    & > div {
      position: relative;
      overflow: visible;
      border: 0;
      background: transparent;
      box-shadow: 0 32px 90px rgba(3, 11, 25, 0.56);
      animation: ${grantCardIn} 560ms ${GRANT_SMOOTH} both;
    }
  }

  @media (max-width: 620px) {
    [role='dialog'][aria-label$='Ultron access'][data-state] {
      padding:
        max(var(--space-4), env(safe-area-inset-top))
        max(var(--space-4), env(safe-area-inset-right))
        max(var(--space-4), env(safe-area-inset-bottom))
        max(var(--space-4), env(safe-area-inset-left));

      & > div {
        width: 100%;
        max-height: calc(
          100dvh
          - max(var(--space-4), env(safe-area-inset-top))
          - max(var(--space-4), env(safe-area-inset-bottom))
          - 40px
        );
        border-radius: var(--radius-xl);
      }
    }
  }

  [role='dialog'][aria-label$='Ultron access'][data-state='closed'] {
    animation: ${grantScrimOut} 170ms var(--ease-default, ease) forwards;

    & > div {
      animation: ${grantCardOut} 170ms var(--ease-default, ease) forwards;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [role='dialog'][aria-label$='Ultron access'][data-state],
    [role='dialog'][aria-label$='Ultron access'][data-state] > div {
      animation: none;
    }
  }
`;

const GrantCard = styled.section`
  position: relative;
  width: 100%;
  min-height: 0;
  padding: var(--space-10);
  overflow-x: hidden;
  overflow-y: auto;
  background:
    radial-gradient(75% 90% at 100% 0%, color-mix(in srgb, var(--Alloy-blue-500) 38%, transparent), transparent 68%),
    radial-gradient(70% 80% at 0% 100%, color-mix(in srgb, var(--Alloy-purple-500) 30%, transparent), transparent 72%),
    linear-gradient(145deg, var(--Alloy-slate-950), var(--Alloy-purple-950));
  border: none;
  border-radius: var(--radius-xl);
  box-shadow: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);

  & > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 620px) {
    padding:
      var(--space-8)
      var(--space-6)
      max(var(--space-6), env(safe-area-inset-bottom));
    gap: var(--space-4);
  }
`;

/* Demo-only control beneath the access card. It is deliberately quiet so the
   modal content remains the conversion surface while both variants stay easy
   to review without restarting the flow. */
const ModalDemoSwitch = styled.button`
  position: absolute;
  top: calc(100% + var(--space-2));
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);
  padding: var(--space-1) var(--space-3);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: var(--radius-full);
  background: rgba(15, 23, 42, 0.72);
  color: var(--Alloy-slate-200);
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  cursor: pointer;
  white-space: nowrap;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(30, 41, 59, 0.9);
    color: var(--color-bg-always-light);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }
`;

const GrantBrandWatermark = styled.div`
  && {
    position: absolute;
    right: -74px;
    bottom: -44px;
    z-index: 0;
    color: var(--Alloy-blue-100);
    opacity: 0.075;
    transform: rotate(-8deg);
    filter: drop-shadow(0 0 32px color-mix(in srgb, var(--Alloy-blue-300) 30%, transparent));
    pointer-events: none;
  }

  @media (max-width: 620px) {
    && {
      right: -112px;
      bottom: -34px;
      opacity: 0.06;
      transform: rotate(-8deg) scale(0.82);
    }
  }
`;

/* Ghost close, top-right — Alloy's DialogHeader close button re-cut for the
   inverse surface (the header bar itself doesn't fit this card's layout). */
const GrantClose = styled.button`
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--space-8);
  height: var(--space-8);
  padding: 0;
  border: none;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.06);
  color: var(--Alloy-slate-200);
  cursor: pointer;
  transition:
    background var(--duration-fast) var(--ease-default),
    color var(--duration-fast) var(--ease-default);

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    color: var(--color-bg-always-light);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 1px;
  }
`;

const GrantEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  width: fit-content;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--Alloy-blue-200);
`;

const GrantSpark = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--Alloy-matcha-400);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--Alloy-matcha-400) 14%, transparent),
              0 0 20px var(--Alloy-matcha-400);
`;

const GrantOffer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-4);
  margin: var(--space-1) 0;

  @media (max-width: 620px) {
    gap: var(--space-2);
  }
`;

const GrantAmount = styled.div`
  font-family: 'Geist', var(--font-sans), sans-serif;
  font-size: clamp(64px, 13vw, 96px);
  font-weight: var(--font-weight-bold);
  line-height: 0.82;
  letter-spacing: -0.05em;
  color: var(--color-bg-always-light);
  text-shadow: 0 0 44px color-mix(in srgb, var(--Alloy-blue-300) 36%, transparent);
  font-variant-numeric: tabular-nums;

  @media (max-width: 620px) {
    font-size: clamp(48px, 17vw, 64px);
  }
`;

const GrantCurrency = styled.span`
  display: inline-block;
  margin-right: 0.03em;
  font-size: 0.52em;
  vertical-align: 0.42em;
  color: var(--Alloy-matcha-400);
`;

const GrantOfferLabel = styled.span`
  padding-bottom: var(--space-1);
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-tight);
  color: var(--Alloy-slate-300);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);

  strong {
    color: var(--Alloy-matcha-400);
    font-weight: var(--font-weight-bold);
  }

  @media (max-width: 620px) {
    font-size: var(--text-xs);
  }
`;

const GrantTitle = styled.h2<{ $prominent?: boolean }>`
  margin: 0;
  /* Keep the headline clear of the close button. */
  padding-right: var(--space-8);
  font-family: var(--font-sans);
  font-size: ${p => p.$prominent ? 'clamp(32px, 5vw, 42px)' : 'var(--text-3xl)'};
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-bg-always-light);

  @media (max-width: 620px) {
    font-size: ${p => p.$prominent ? 'clamp(28px, 8vw, 36px)' : 'var(--text-3xl)'};
  }
`;

const GrantBody = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-200);
  max-width: 520px;
`;

const GrantPerks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`;

const GrantPerk = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: var(--space-8);
  padding: 0 var(--space-3);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.065);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--Alloy-slate-200);
`;

const GrantForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`;

const GrantFormLabel = styled.label`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--Alloy-slate-300);
`;

const GrantFormRow = styled.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-3);

  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

/* Dark-surface text field, hand-rolled: Alloy's Input has no inverse-surface
   variant yet — candidate for promotion into Alloy. The border is the inverse
   tertiary content mixed down so it reads as a hairline on the dark fill. */
const GrantField = styled.input`
  flex: 1;
  min-width: 200px;
  height: var(--space-12);
  padding: 0 var(--space-4);
  background: rgba(255, 255, 255, 0.075);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  font-size: var(--text-md);
  color: var(--color-bg-always-light);
  outline: none;
  transition:
    border-color var(--duration-fast) var(--ease-default),
    background var(--duration-fast) var(--ease-default);

  &::placeholder { color: var(--Alloy-slate-400); }
  &:focus-visible {
    border-color: var(--Alloy-blue-300);
    background: rgba(255, 255, 255, 0.11);
  }

  @media (max-width: 520px) {
    width: 100%;
    min-width: 0;
  }
`;

/* White fill, not the matcha accent: on this card the accent already carries the
   eyebrow spark and the confirmation check, and a third green surface competed
   with them. White is the brightest thing available against the slate/purple
   gradient, so the action reads as the one lit control on the card. */
const GrantButton = styled(Button)`
  && {
    min-width: 156px;
    color: var(--Alloy-slate-950);
    background: var(--color-bg-always-light);
    border-color: transparent;
    font-weight: var(--font-weight-bold);
    /* A pale lift rather than a coloured glow — a dark shadow would vanish into
       the card it sits on. */
    box-shadow: 0 8px 28px rgba(255, 255, 255, 0.14);
  }

  &&:hover:not(:disabled) {
    background: var(--Alloy-slate-100);
    transform: translateY(-1px);
  }

  /* Waiting on a number: a translucent pane of the card rather than a pale grey
     fill, which now that the live state is white would read as another white
     button. Same treatment the phone card's own Launch button uses. */
  &&:disabled {
    color: rgba(226, 232, 255, 0.38);
    background: rgba(255, 255, 255, 0.16);
    box-shadow: none;
  }

  @media (max-width: 520px) {
    && {
      width: 100%;
    }
  }
`;

/* Post-submit state — swaps in where the form row sat, holding its height so
   the card doesn't jump. The check carries the neon matcha accent. */
const GrantConfirmed = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--space-12);
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-medium);
  color: var(--color-bg-always-light);

  & svg {
    flex-shrink: 0;
    color: var(--Alloy-matcha-400);
  }
`;

const GrantFinePrint = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-400);
`;
