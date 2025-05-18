<template>
  <provet-stack class="n-container-xxs" style="margin: var(--n-space-xl) auto">
    <provet-card padding="l">
      <h1 slot="header" class="n-typescale-l">Create an account</h1>
      <form @submit.prevent="onSubmit">
        <provet-stack gap="l">
          <EmailField
            v-model="email"
            :error="emailError"
            label="Email"
            placeholder="you@example.com"
          />
          <PasswordField
            label="Password"
            v-model="password"
            :error="passwordError"
            placeholder="Enter your password"
          />
          <PasswordField
            label="Confirm password"
            v-model="confirmPassword"
            :error="confirmPasswordError"
            placeholder="Re-enter your password"
          />
          <CheckboxField
            v-model="acceptMarketing"
            label="I would like to receive occasional product updates and announcements"
          />
          <provet-divider></provet-divider>
          <provet-button
            variant="primary"
            type="submit"
            :loading="loading"
            :disabled="loading"
            expand
            >Sign up</provet-button
          >
        </provet-stack>
      </form>
    </provet-card>
  </provet-stack>
</template>

<script setup lang="ts">
import '@provetcloud/web-components/lib/Stack';
import '@provetcloud/web-components/lib/Button';
import '@provetcloud/web-components/lib/Card';
import '@provetcloud/web-components/lib/Checkbox';
import '@provetcloud/web-components/lib/Divider';

import EmailField from '~/components/EmailField.vue';
import PasswordField from '~/components/PasswordField.vue';
import CheckboxField from '~/components/CheckboxField.vue';

import { useForm, useField } from 'vee-validate';
import { useSignupSchema } from '~/composables/useSignupSchema';

const loading = ref(false);
const router = useRouter();
const schema = useSignupSchema();

const { handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    email: '',
    password: '',
    confirmPassword: '',
    acceptMarketing: false,
  },
});

const { value: email, errorMessage: emailError } = useField<string>('email');
const { value: password, errorMessage: passwordError } = useField<string>('password');
const { value: confirmPassword, errorMessage: confirmPasswordError } =
  useField<string>('confirmPassword');
const { value: acceptMarketing } = useField<boolean>('acceptMarketing');

const onSubmit = handleSubmit(async values => {
  loading.value = true;
  try {
    localStorage.setItem('signup-data', JSON.stringify(values));
    await new Promise(resolve => setTimeout(resolve, 1000));
    await router.push('/success');
  } finally {
    loading.value = false;
  }
});
</script>
