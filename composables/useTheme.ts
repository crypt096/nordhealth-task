import { useHead, useState } from '#imports';
import { computed } from 'vue';

type Modes = 'light' | 'dark';

export function useTheme() {
  const storageKey = 'color-mode';

  const preference = useState<Modes>('color-mode', () => {
    if (process) {
      const saved = localStorage.getItem(storageKey) as Modes | null;
      return saved ?? 'light';
    }
    return 'light';
  });

  const themes: Record<Modes, string> = {
    light: 'https://nordcdn.net/ds/provetcloud/themes/1.0.0/provet.css',
    dark: 'https://nordcdn.net/ds/provetcloud/themes/1.0.0/provet-dark.css',
  };

  const isDark = computed(() => preference.value === 'dark');

  const darkModeLabel = computed(() =>
    isDark.value ? 'Switch to light mode' : 'Switch to dark mode'
  );

  function savePreference(value: Modes) {
    preference.value = value;
    if (process) {
      localStorage.setItem(storageKey, value);
    }
  }

  function toggleDark() {
    savePreference(isDark.value ? 'light' : 'dark');
  }

  useHead({
    meta: [
      {
        id: 'theme-color',
        name: 'theme-color',
        content: () => (isDark.value ? '#222222' : '#ffffff'),
      },
    ],
    link: [
      {
        id: 'theme-css',
        rel: 'stylesheet',
        href: () => themes[preference.value],
      },
    ],
  });

  return {
    preference,
    isDark,
    darkModeLabel,
    toggleDark,
  };
}
