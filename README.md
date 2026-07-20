# Ultron Onboarding

A standalone prototype of the **Teambridge self-serve onboarding flow** — the entry layer a customer admin walks through to stand up a workforce-operations account, powered by the **Ultron** AI agent. An intro conversation shapes the account (intent → company → build brief), Ultron drafts the roles / pay / policies / scheduling, and a provisioning run creates it — all on top of the existing Ultron app surface, extracted into its own Vite + React + TypeScript app.

> **Demo only.** All state is local/in-memory — there is no backend. The data is fixtures and every "endpoint" in the provisioning run is mocked.

## What's in it

- **The flow is the app** — [`Root.tsx`](src/Root.tsx) renders **only** the onboarding flow. The live Ultron event app (`./App` + `./pages/Ultron`) still exists but its post-provisioning handoff is disabled for now, so the flow rests on Stage 5's "Your account is ready" screen. Nothing was deleted — re-enable via the `#app` hash gate in git history.
- **Intro layer** ([`IntroFlow`](src/pages/Onboarding/IntroFlow.tsx)) — a full-screen opening played before the wizard: Ultron's identity greeting → intent cards → a short question run → a **build** chat that converges on a pre-filled brief. A drifting-particle [`IntroBackdrop`](src/pages/Onboarding/IntroBackdrop.tsx) builds connection lines as the admin progresses.
- **Live account draft** ([`AccountDraftPane`](src/pages/Onboarding/AccountDraftPane.tsx)) — the account browsed a category at a time (Roles, Pay, Policies, Scheduling, Credentials, Permissions), each rendered as the view that suits it (table / cards / week calendar). Every change is an entry in the shared log; undo re-folds.
- **Provisioning run** ([`Stage5Provision`](src/pages/Onboarding/stages/Stage5Provision.tsx)) — a thin adapter that replays the log's runnable entries through Ultron's own `ActivityTrail` renderer, with per-step Retry / Skip on failure (it pauses, never rolls back).
- **One source of truth** — every surface is a pure **fold** over an append-only [`provisioningLog`](src/pages/Onboarding/provisioningLog.ts), owned by the [`logStore`](src/pages/Onboarding/logStore.tsx) hook and shared across the whole flow. No parallel state.
- **Design system** — built on the local [Alloy](../Alloy) design system (`alloy-design-system`), styled-components, and Geist.

## Getting started

This project depends on the local Alloy design system via a `file:` path:

```jsonc
"alloy-design-system": "file:/Users/unassignedlaptop9/Documents/MyClaudeFolder/Alloy"
```

So a fresh clone needs Alloy checked out at that path (or the dependency repointed) before installing.

```bash
npm install
npm run dev      # http://localhost:5174
```

## Scripts

| Script            | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| `npm run dev`     | Start the Vite dev server on port 5174.                      |
| `npm run build`   | Type-check (`tsc -b`) and build to `dist/`.                  |
| `npm run preview` | Preview the production build locally.                        |
| `npm run deploy`  | Build and publish `dist/` to the `gh-pages` branch.          |

## Deployment

Deployed to GitHub Pages from the `gh-pages` branch:

**https://yizzy-gif.github.io/Ultron_Onboarding/**

The Vite `base` is set to `/Ultron_Onboarding/` to match the project-site path.

## Project structure

```
src/
├── Root.tsx                    # Entry gate — renders the onboarding flow only
├── App.tsx                     # Ultron app shell (handoff disabled for now)
├── main.tsx                    # Alloy tokens + fonts + ToastProvider, mounts Root
├── components/                 # AppShell, PrimaryNav, SecondaryNav, TopNav (+ mobile)
├── pages/Onboarding/           # The onboarding flow
│   ├── OnboardingApp.tsx       # Owns flow state: intro layer vs provisioning run
│   ├── IntroFlow.tsx           # Greeting → intent → questions → build brief
│   ├── IntroBackdrop.tsx       # Ambient drifting-particle canvas
│   ├── AccountDraftPane.tsx    # Live account draft, browsed by category
│   ├── WizardShell.tsx         # Shared chrome (title / body / footer)
│   ├── WizardStepper.tsx       # Stage progress spine
│   ├── logStore.tsx            # Shared provisioning-log hook (source of truth)
│   ├── provisioningLog.ts      # Append-only mutation log + fold selectors
│   ├── shared.tsx              # Domain/op/risk presentation helpers
│   ├── TeambridgeMark.tsx      # Brand glyph
│   ├── fixtures.ts  ·  types.ts
│   └── stages/
│       ├── Stage2Template.tsx  # Template match (best-fit + alternates)
│       └── Stage5Provision.tsx # Provisioning run over Ultron's ActivityTrail
├── pages/Ultron/               # The underlying Ultron experience (event pages,
│                               #   case feed, activity trail, in-memory store)
├── hooks/  ·  nav/  ·  types/  ·  data/
```
