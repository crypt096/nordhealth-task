import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useAuth } from '~/composables/useAuth'; // adjust the path accordingly

describe('useAuth composable', () => {
  beforeEach(() => {
    vi.stubGlobal('localStorage', {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
    });
  });

  it('initially email is null and userInitials is empty', () => {
    const { email, userInitials } = useAuth();
    expect(email.value).toBe(null);
    expect(userInitials.value).toBe('');
  });

  it('signUp sets email and saves to localStorage', () => {
    const { email, signUp } = useAuth();

    signUp('john.doe@example.com');

    expect(email.value).toBe('john.doe@example.com');
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'signup-data',
      JSON.stringify({ email: 'john.doe@example.com' })
    );
  });

  it('signOut clears email and removes from localStorage', () => {
    const { email, signOut } = useAuth();

    email.value = 'someone@example.com';

    signOut();

    expect(email.value).toBe(null);
    expect(localStorage.removeItem).toHaveBeenCalledWith('signup-data');
  });

  it('loadFromStorage loads valid email from localStorage', () => {
    const { email, loadFromStorage } = useAuth();

    (localStorage.getItem as any).mockReturnValueOnce(
      JSON.stringify({ email: 'loaded.email@example.com' })
    );

    loadFromStorage();

    expect(email.value).toBe('loaded.email@example.com');
  });

  it('loadFromStorage sets email to null on invalid JSON', () => {
    const { email, loadFromStorage } = useAuth();

    (localStorage.getItem as any).mockReturnValueOnce('invalid-json');

    loadFromStorage();

    expect(email.value).toBe(null);
  });

  it('userInitials computed returns correct initials', () => {
    const { email, userInitials } = useAuth();

    email.value = 'john.doe@example.com';
    expect(userInitials.value).toBe('JD');

    email.value = 'alice.b@example.com';
    expect(userInitials.value).toBe('AB');

    email.value = 'single@example.com';
    expect(userInitials.value).toBe('S');

    email.value = null;
    expect(userInitials.value).toBe('');
  });
});
