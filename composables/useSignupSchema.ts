import { string, object, ref, boolean } from 'yup';

export const useSignupSchema = () => {
  return object({
    email: string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: string()
      .oneOf([ref('password')], 'Passwords must match')
      .required('Confirm your password'),
    acceptMarketing: boolean(),
  });
};
