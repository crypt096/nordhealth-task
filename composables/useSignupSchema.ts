import { string, object, ref, boolean } from 'yup';

const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()[\]{}|\\/:;<>,.+~=_\-])[A-Za-z\d@$!%*?&#^()[\]{}|\\/:;<>,.+~=_\-]{8,}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const useSignupSchema = () => {
  return object({
    email: string()
      .required('Email is required')
      .matches(emailRegex, 'Enter a valid email address'),
    password: string()
      .required('Password is required')
      .matches(
        strongPasswordRegex,
        'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character'
      ),
    confirmPassword: string()
      .required('Confirm your password')
      .test('passwords-match', 'Passwords must match', function(value) {
        const { password } = this.parent;
        if (!password) return true;
        return value === password;
      }),
    acceptMarketing: boolean(),
  });
};
