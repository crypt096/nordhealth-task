import { ref, computed } from 'vue';

const email = ref<string | null>(null);

export function useAuth() {
  // Load once from localStorage (can be called during app boot)
  function loadFromStorage() {
    const data = localStorage.getItem('signup-data');
    if (data) {
      try {
        email.value = JSON.parse(data)?.email || null;
      } catch {
        email.value = null;
      }
    }
  }

  function signUp(userEmail: string) {
    email.value = userEmail;
    localStorage.setItem('signup-data', JSON.stringify({ email: userEmail }));
  }

  function signOut() {
    email.value = null;
    localStorage.removeItem('signup-data');
  }

  const userInitials = computed(() =>
    email.value
      ? email.value
        .split('@')[0]
        .split('.')
        .map(part => part[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
      : ''
  );

  return {
    email,
    userInitials,
    signUp,
    signOut,
    loadFromStorage,
  };
}
