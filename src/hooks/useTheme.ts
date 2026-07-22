// Theme control for the app. Alloy's tokens resolve dark mode three ways:
//   • default          → follows OS via @media (prefers-color-scheme)
//   • .dark on <html>  → forced dark
//   • .light on <html> → forced light
// This hook layers an explicit user override on top of the OS preference and
// persists it, so a chosen theme survives reloads. Choosing the theme that
// already matches the OS clears the override and hands control back to the OS.

import { useCallback, useEffect, useState } from 'react';
import { useMediaQuery } from './useMediaQuery';

export type Theme = 'light' | 'dark';
/** null = follow the OS preference (no explicit override). */
type Override = Theme | null;

const STORAGE_KEY = 'ultron-theme';

function readOverride(): Override {
  if (typeof window === 'undefined') return null;
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === 'light' || v === 'dark' ? v : null;
}

/** Reflect the override onto <html>: explicit class when set, neither when following OS. */
function apply(override: Override) {
  const el = document.documentElement;
  el.classList.toggle('dark', override === 'dark');
  el.classList.toggle('light', override === 'light');
}

export function useTheme() {
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  const [override, setOverride] = useState<Override>(readOverride);

  // Keep <html> and localStorage in sync with the current override.
  useEffect(() => {
    apply(override);
    if (typeof window === 'undefined') return;
    if (override) window.localStorage.setItem(STORAGE_KEY, override);
    else window.localStorage.removeItem(STORAGE_KEY);
  }, [override]);

  // The theme actually on screen: explicit override wins, else the OS says.
  const theme: Theme = override ?? (prefersDark ? 'dark' : 'light');

  const toggle = useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    // If the next theme matches the OS, drop the override and follow the OS again.
    setOverride(next === (prefersDark ? 'dark' : 'light') ? null : next);
  }, [theme, prefersDark]);

  return { theme, toggle };
}
