import { describe, it, expect } from 'vitest';
import { useSignupSchema } from '@/composables/useSignupSchema';

describe('useSignupSchema', () => {
  const schema = useSignupSchema();

  it('validates a valid input', async () => {
    const validData = {
      email: 'test.user@example.com',
      password: 'StrongP@ss1',
      confirmPassword: 'StrongP@ss1',
      acceptMarketing: true,
    };
    await expect(schema.validate(validData)).resolves.toEqual(validData);
  });

  it('requires email and validates format', async () => {
    await expect(schema.validate({
      password: 'StrongP@ss1',
      confirmPassword: 'StrongP@ss1'
    })).rejects.toThrow('Email is required');

    await expect(schema.validate({
      email: 'invalid-email',
      password: 'StrongP@ss1',
      confirmPassword: 'StrongP@ss1'
    })).rejects.toThrow('Enter a valid email address');
  });

  it('requires password and validates strength', async () => {
    await expect(schema.validate({
      email: 'test@example.com',
      confirmPassword: 'StrongP@ss1'
    })).rejects.toThrow('Password is required');

    await expect(schema.validate({
      email: 'test@example.com',
      password: 'weakpass',
      confirmPassword: 'weakpass'
    })).rejects.toThrow(
      'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character'
    );
  });

  it('requires confirmPassword and validates match', async () => {
    await expect(schema.validate({
      email: 'test@example.com',
      password: 'StrongP@ss1',
    })).rejects.toThrow('Confirm your password');

    await expect(schema.validate({
      email: 'test@example.com',
      password: 'StrongP@ss1',
      confirmPassword: 'DifferentPass1!',
      acceptMarketing: false,
    })).rejects.toThrow('Passwords must match');
  });

  it('accepts acceptMarketing as boolean or undefined', async () => {
    const dataWithTrue = {
      email: 'test@example.com',
      password: 'StrongP@ss1',
      confirmPassword: 'StrongP@ss1',
      acceptMarketing: true,
    };
    await expect(schema.validate(dataWithTrue)).resolves.toEqual(dataWithTrue);

    const dataWithFalse = {
      email: 'test@example.com',
      password: 'StrongP@ss1',
      confirmPassword: 'StrongP@ss1',
      acceptMarketing: false,
    };
    await expect(schema.validate(dataWithFalse)).resolves.toEqual(dataWithFalse);

    const dataWithoutAcceptMarketing = {
      email: 'test@example.com',
      password: 'StrongP@ss1',
      confirmPassword: 'StrongP@ss1',
    };
    await expect(schema.validate(dataWithoutAcceptMarketing)).resolves.toEqual(dataWithoutAcceptMarketing);
  });
});
