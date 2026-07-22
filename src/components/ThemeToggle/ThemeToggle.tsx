// A single, always-present dark/light toggle pinned to the top-right of the
// viewport. Lives at the app root rather than inside TopNav because the primary
// Ultron view hides TopNav and mobile uses its own header — a fixed control is
// the one spot guaranteed to show on every view.

import { SunIcon, Moon01Icon } from 'alloy-design-system';
import { useTheme } from '../../hooks/useTheme';
import { ToggleButton } from './ThemeToggle.styles';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <ToggleButton
      type="button"
      onClick={toggle}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
    >
      {isDark ? <SunIcon size={18} /> : <Moon01Icon size={18} />}
    </ToggleButton>
  );
}
