/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — shared store hook.
   Called once (in App) so the secondary-nav sidebar and the main detail view
   share one source of truth. DEMO ONLY — in-memory, no backend.
   ───────────────────────────────────────────────────────────────────────────── */

import { useMemo, useReducer, useRef, useState } from 'react';
import { ultronThreads, RESOLVE_OUTCOMES, THREAD_FOLLOWUPS, spawnThreadFromEvent, mockUltronReply } from './fixtures';
import type { IncomingEvent } from './fixtures';
import type { ChatMessage, ThreadItem, ThreadStatus } from './types';
import { SEVERITY_RANK } from './ultronShared';

/** A case Ultron opened itself from a detected risk signal (vs. an authored
 *  fixture). These float to the top of the New group the moment they land. */
const isDetected = (t: ThreadItem) => t.id.startsWith('detected_');

// Activity labels shown one-by-one while a thread executes (Live stream).
export const EXECUTION_ACTIVITIES = ['Thinking', 'Working', 'Processing'];
// How long each timed activity is shown before advancing to the next (analysis
// reasoning and autonomous working cases). Operator-approved runs don't use this
// cadence anymore — they advance step-by-step on the T key (see completeRun).
export const ACTIVITY_STEP_MS = 5400;
// Beat between the operator's chat message landing and Ultron's mocked reply, so
// the reply reads as a considered response rather than an instant echo.
const REPLY_DELAY_MS = 1100;

type Action =
  | { type: 'decide'; threadId: string }
  | { type: 'commit'; threadId: string }
  | { type: 'reopen'; threadId: string }
  | { type: 'resolve'; threadId: string }
  | { type: 'detect'; thread: ThreadItem };

function reducer(state: ThreadItem[], action: Action): ThreadItem[] {
  switch (action.type) {
    case 'detect':
      // A risk Ultron just flagged on the Live landing → opens a fresh analyzing
      // case at the head of the list (it sorts to the top of New). Idempotent:
      // a given signal only ever opens one case.
      return state.some(t => t.id === action.thread.id)
        ? state
        : [action.thread, ...state];
    case 'decide':
      // Ultron finished analyzing → it has a recommendation and now needs the
      // user's approval (analyzing → Needs attention).
      return state.map(t =>
        t.id === action.threadId ? { ...t, status: 'needs_approval' as const } : t,
      );
    case 'commit':
      // Acting on a decision moves it into execution → it shifts from the
      // "Needs attention" group into "Live stream".
      return state.map(t =>
        t.id === action.threadId ? { ...t, status: 'in_progress' as const } : t,
      );
    case 'reopen':
      // First step done, but a follow-up decision is needed → back to
      // "Needs attention" for the second call to action.
      return state.map(t =>
        t.id === action.threadId ? { ...t, status: 'needs_approval' as const } : t,
      );
    case 'resolve':
      // Execution completes → moves into "Resolved" with an outcome.
      return state.map(t =>
        t.id === action.threadId
          ? { ...t, status: 'resolved' as const, outcome: RESOLVE_OUTCOMES[t.id] ?? t.outcome }
          : t,
      );
  }
}

const GROUP_DEFS: { id: string; label: string; statuses: ThreadStatus[] }[] = [
  { id: 'needs_attention', label: 'Needs attention', statuses: ['analyzing', 'needs_approval', 'recommended'] },
  { id: 'live',            label: 'Working',          statuses: ['in_progress', 'monitoring'] },
  { id: 'resolved',        label: 'Done',            statuses: ['resolved', 'auto_resolved', 'workflow_available', 'unresolved'] },
];

export interface UltronGroup {
  id: string;
  label: string;
  threads: ThreadItem[];
}

export interface UltronStore {
  threads: ThreadItem[];
  groups: UltronGroup[];
  selectedId: string | null;
  selectedThread: ThreadItem | null;
  /** Decision stage of the selected thread (0 = first CTA, 1 = follow-up CTA). */
  selectedStage: number;
  /** Decision stage per thread id (0 = first CTA, 1 = follow-up CTA). Drives the
   *  feed, where every card tracks its own stage independently. */
  stageById: Record<string, number>;
  /** Ids the user has opened — drives the Done "Resolved" mark (green → slate). */
  viewedIds: string[];
  /** Ids whose analysis completed (analyzing → Needs approval) — keeps the
   *  "Analyzed" summary card on the page. */
  analyzedIds: string[];
  /** Outbound messages the operator has sent per thread (the action labels they
   *  approved from the prompt card), shown as sent bubbles in the message thread. */
  outboundByThread: Record<string, string[]>;
  /** The free-text conversation per thread — the operator's typed messages and
   *  Ultron's (mocked) replies, shown as a chat below the activity trail. */
  chatByThread: Record<string, ChatMessage[]>;
  /** Thread ids where Ultron is mid-reply (between a sent message and its mocked
   *  answer) — drives the composer's stop button and the foot typing indicator. */
  replyingIds: string[];
  setSelectedId: (id: string) => void;
  /** Open a fresh analyzing case from a risk signal detected on the Live
   *  landing. Idempotent per signal; the user stays on Live while it lands. */
  detectRisk: (event: IncomingEvent) => void;
  /** DEMO ONLY — advance an analyzing case to Needs approval (reveals the prompt). */
  decide: (threadId: string) => void;
  commit: (threadId: string, label: string) => void;
  /** Finish an executing run — the operator pressed T on its last activity.
   *  Opens the follow-up question when one exists, otherwise resolves the case. */
  completeRun: (threadId: string) => void;
  /** Send a free-text chat message to Ultron — appends it as a sent bubble in the
   *  thread (the composer at the foot of the event page) and lands a mocked Ultron
   *  reply a beat later, without advancing the case's status the way an approved
   *  action (commit) does. */
  sendMessage: (threadId: string, text: string) => void;
  /** Interrupt Ultron's in-flight reply for a thread (the composer stop button) —
   *  cancels the pending answer and clears the working state. */
  stopReply: (threadId: string) => void;
  refine: (label: string) => void;
  saveWorkflow: (thread: ThreadItem) => void;
  /** Threads flagged (from the decision card) to save as a workflow once they
   *  resolve — the deferred-save intent, committed automatically on resolution. */
  pendingWorkflowIds: string[];
  /** Toggle a thread's save-as-workflow intent on/off (before it resolves). */
  toggleWorkflowSave: (threadId: string) => void;
  /** Threads whose play has been saved inline (the deferred toggle, auto-saved on
   *  resolve) — drives the inline "Workflow saved" confirmation in the resolution
   *  turn rather than a separate chat reply. */
  savedWorkflowIds: string[];
  /** Mark a thread's play saved inline (used by the deferred toggle on resolve). */
  markWorkflowSaved: (threadId: string) => void;
}

export function useUltronStore(): UltronStore {
  const [threads, dispatch] = useReducer(reducer, ultronThreads);

  // Default selection: the first thread that needs attention.
  const [selectedId, setSelectedIdRaw] = useState<string | null>(() => {
    const first = ultronThreads.find(
      t => t.status === 'needs_approval' || t.status === 'recommended',
    );
    return first?.id ?? ultronThreads[0]?.id ?? null;
  });

  // Cases the user has opened. Drives the Done "Resolved" mark: green (unviewed)
  // → slate (viewed). Selecting a case marks it viewed.
  const [viewedIds, setViewedIds] = useState<string[]>([]);
  const setSelectedId = (id: string) => {
    setSelectedIdRaw(id);
    setViewedIds(prev => (prev.includes(id) ? prev : [...prev, id]));
  };

  const groups = useMemo<UltronGroup[]>(() => {
    const indexed = threads.map((item, index) => ({ item, index }));
    return GROUP_DEFS.map(g => ({
      id: g.id,
      label: g.label,
      // A case lives in exactly one group — the one its current status maps to.
      // As the user acts on it, the case moves from group to group (its single
      // card travels Needs attention → Working → Done, or back for a follow-up).
      threads: indexed
        .filter(x => g.statuses.includes(x.item.status))
        // Consistent rule (shared with the paged feed): needs-attention cases
        // always sit ABOVE still-analyzing ones. Within the analyzing block a
        // freshly-detected case floats to the top; then severity-first, then
        // authored recency (ascending fixture index).
        .sort((a, b) =>
          ((a.item.status === 'analyzing' ? 1 : 0) - (b.item.status === 'analyzing' ? 1 : 0)) ||
          ((isDetected(b.item) ? 1 : 0) - (isDetected(a.item) ? 1 : 0)) ||
          (SEVERITY_RANK[a.item.severity] - SEVERITY_RANK[b.item.severity]) || (a.index - b.index))
        .map(x => x.item),
    }));
  }, [threads]);

  const selectedThread = threads.find(t => t.id === selectedId) ?? null;

  // Per-thread decision stage (0 = first CTA, 1 = follow-up CTA).
  const [stageById, setStageById] = useState<Record<string, number>>({});
  const selectedStage = selectedId ? (stageById[selectedId] ?? 0) : 0;

  // Cases that finished analysis (analyzing → Needs approval). Keeps the
  // "Analyzed" summary card on the page after the analysis completes.
  const [analyzedIds, setAnalyzedIds] = useState<string[]>([]);

  // Outbound messages per thread — each action the operator approves from the
  // prompt card is appended here and rendered as a sent bubble under the trail.
  const [outboundByThread, setOutboundByThread] = useState<Record<string, string[]>>({});

  // Free-text conversation per thread — the operator's typed messages paired with
  // Ultron's mocked replies, rendered as a chat below the activity trail.
  const [chatByThread, setChatByThread] = useState<Record<string, ChatMessage[]>>({});

  // Threads where Ultron is mid-reply — the window between a sent message and its
  // mocked answer landing. Drives the composer's stop button and the thread's
  // typing indicator; cleared when the reply arrives or the operator stops it.
  const [replyingIds, setReplyingIds] = useState<string[]>([]);
  // Pending reply timers, so a stop can cancel the in-flight answer.
  const replyTimers = useRef<Record<string, number>>({});

  // Threads the operator has flagged (from the decision card) to save as a workflow
  // once they resolve. The save isn't posted at click time — it's deferred until the
  // event resolves, then committed automatically (see commit's resolve branch). The
  // toggle is intent only, so the operator can switch it back off before resolution.
  const [pendingWorkflowIds, setPendingWorkflowIds] = useState<string[]>([]);
  const toggleWorkflowSave = (threadId: string) => {
    setPendingWorkflowIds(prev =>
      prev.includes(threadId) ? prev.filter(id => id !== threadId) : [...prev, threadId],
    );
  };
  // Threads whose play has been saved INLINE — the deferred toggle auto-saved on
  // resolve, so the resolution turn (the OfferTurn) shows the confirmation off this
  // flag rather than posting a separate chat reply.
  const [savedWorkflowIds, setSavedWorkflowIds] = useState<string[]>([]);
  const markWorkflowSaved = (threadId: string) => {
    setSavedWorkflowIds(prev => (prev.includes(threadId) ? prev : [...prev, threadId]));
  };

  // A risk surfaced on the Live landing → Ultron opens a case. Lands a fresh
  // analyzing case at the top of New (orbit/working mark + typing title in the
  // sidebar). The user stays on the Live landing; the New badge ticks up.
  const detectRisk = (event: IncomingEvent) => {
    dispatch({ type: 'detect', thread: spawnThreadFromEvent(event) });
  };

  // DEMO ONLY — simulate Ultron finishing its analysis: flip the case to Needs
  // approval so the recommendation prompt + CTAs appear.
  const decide = (threadId: string) => {
    // Keep the view anchored on the case being acted on, so it stays in focus
    // as its status shifts (and the sidebar selection moves with it).
    setSelectedId(threadId);
    setAnalyzedIds(prev => (prev.includes(threadId) ? prev : [...prev, threadId]));
    dispatch({ type: 'decide', threadId });
  };

  const commit = (threadId: string, label: string) => {
    // Keep the view anchored on this case as it travels Working → Done (or back
    // to Needs attention for a follow-up); the sidebar selection follows it.
    setSelectedId(threadId);

    // Record the operator's reply as an outbound message in the thread.
    setOutboundByThread(prev => ({
      ...prev,
      [threadId]: [...(prev[threadId] ?? []), label],
    }));

    // Move to Live stream (executing). The run has no auto-resolution timer —
    // the first activity fires and stays running until the operator steps the
    // rest through with the T key; a final T on the last activity completes the
    // run (see completeRun).
    dispatch({ type: 'commit', threadId });
  };

  // Finish the current execution run — the operator pressed T on the last
  // activity. Moves the case on: to its follow-up question (stage 0 → 1, back to
  // Needs attention) when one exists, otherwise to Resolved — committing any
  // deferred save-as-workflow intent flagged on the decision card.
  const completeRun = (threadId: string) => {
    const stage = stageById[threadId] ?? 0;
    const followUp = THREAD_FOLLOWUPS[threadId];
    if (stage === 0 && followUp) {
      // First step done → ask the follow-up question (back to Needs attention).
      setStageById(prev => ({ ...prev, [threadId]: 1 }));
      dispatch({ type: 'reopen', threadId });
    } else {
      dispatch({ type: 'resolve', threadId });
      // The play was flagged for saving during the decision — now that it's
      // resolved, mark it saved inline (the resolution turn shows the confirmation),
      // once. (The explicit "Save as workflow" button takes the conversational path
      // instead — see saveWorkflow.)
      if (pendingWorkflowIds.includes(threadId)) {
        markWorkflowSaved(threadId);
        setPendingWorkflowIds(prev => prev.filter(id => id !== threadId));
      }
    }
  };
  // A free-text reply typed into the composer at the foot of the event page.
  // The operator's message lands immediately as a sent bubble; Ultron then mocks
  // a reply a beat later (the response to their message). Unlike commit, this
  // keeps the view anchored on the case without moving it through its lifecycle —
  // it's conversation, not an approved action.
  const sendMessage = (threadId: string, text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setSelectedId(threadId);
    setChatByThread(prev => ({
      ...prev,
      [threadId]: [...(prev[threadId] ?? []), { role: 'operator', text: trimmed }],
    }));
    // Ultron answers shortly after — until then it reads as "working" (the
    // composer shows a stop button). The reply variant walks the canned pool by
    // how many times Ultron has already replied in this thread (read fresh from
    // the latest state so rapid messages don't collide on a stale count).
    setReplyingIds(prev => (prev.includes(threadId) ? prev : [...prev, threadId]));
    const timer = window.setTimeout(() => {
      setChatByThread(prev => {
        const existing = prev[threadId] ?? [];
        const replyCount = existing.filter(m => m.role === 'ultron').length;
        return {
          ...prev,
          [threadId]: [...existing, { role: 'ultron', text: mockUltronReply(trimmed, replyCount) }],
        };
      });
      setReplyingIds(prev => prev.filter(id => id !== threadId));
      delete replyTimers.current[threadId];
    }, REPLY_DELAY_MS);
    replyTimers.current[threadId] = timer;
  };

  // Interrupt Ultron's in-flight reply: cancel the pending answer and drop the
  // working state. The operator's message stays; Ultron simply doesn't respond.
  const stopReply = (threadId: string) => {
    const timer = replyTimers.current[threadId];
    if (timer) { window.clearTimeout(timer); delete replyTimers.current[threadId]; }
    setReplyingIds(prev => prev.filter(id => id !== threadId));
  };

  // Refinement is a demo stub with no surface yet — a no-op.
  const refine = (_label: string) => {};
  // Explicitly saving the play from the offer's "Save as workflow" button reads as a
  // conversation: the operator's click lands as a "Save as workflow" sent bubble, then
  // Ultron confirms with a "Workflow saved" reply a beat later. (The deferred toggle
  // takes the inline path instead — see markWorkflowSaved.)
  const saveWorkflow = (thread: ThreadItem) => {
    const threadId = thread.id;
    setSelectedId(threadId);
    setChatByThread(prev => ({
      ...prev,
      [threadId]: [...(prev[threadId] ?? []), { role: 'operator', text: 'Save as workflow' }],
    }));
    setReplyingIds(prev => (prev.includes(threadId) ? prev : [...prev, threadId]));
    const timer = window.setTimeout(() => {
      setChatByThread(prev => ({
        ...prev,
        [threadId]: [...(prev[threadId] ?? []), { role: 'ultron', text: 'Workflow saved', kind: 'workflow_saved' }],
      }));
      // Flag the thread saved so the sidebar case row shows its trailing
      // "workflow saved" mark, landing together with Ultron's confirmation.
      markWorkflowSaved(threadId);
      setReplyingIds(prev => prev.filter(id => id !== threadId));
      delete replyTimers.current[threadId];
    }, REPLY_DELAY_MS);
    replyTimers.current[threadId] = timer;
  };

  return { threads, groups, selectedId, selectedThread, selectedStage, stageById, viewedIds, analyzedIds, outboundByThread, chatByThread, replyingIds, setSelectedId, detectRisk, decide, commit, completeRun, sendMessage, stopReply, refine, saveWorkflow, pendingWorkflowIds, toggleWorkflowSave, savedWorkflowIds, markWorkflowSaved };
}
