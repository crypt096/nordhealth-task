import { useState, useHead } from '#imports';

export const useTheme = () => {
  const theme = useState<'light' | 'dark'>('theme', () => 'light');

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme.value);
  };

  // Keep <html data-theme=""> synced on SSR
  useHead({
    htmlAttrs: {
      'data-theme': theme,
    },
  });

  return {
    theme,
    toggleTheme,
  };
};
