<template>
  <provet-stack class="n-container-xxs" style="margin: var(--n-space-xl) auto">
    <provet-card padding="l">
      <h1 slot="header" class="n-typescale-l">Create an account</h1>
      <form @submit.prevent="onSubmit">
        <provet-stack gap="l">
          <EmailInput
            v-model="email"
            :error="emailError"
            label="Email"
            placeholder="user@example.com"
          />
          <PasswordInput label="Password" v-model="password" :error="passwordError" />
          <PasswordInput
            label="Confirm password"
            v-model="confirmPassword"
            :error="confirmPasswordError"
          />
          <provet-checkbox
            :checked="acceptMarketing"
            @change="acceptMarketing = $event.target.checked"
            label="I would like to receive occasional product updates and announcements"
          />
          <provet-divider></provet-divider>
          <provet-button type="submit" expand variant="primary">Sign up</provet-button>
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

import { useForm, useField } from 'vee-validate';
import { useSignupSchema } from '~/composables/useSignupSchema';

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

const onSubmit = handleSubmit(values => {
  console.log('Form submitted:', values);
});
</script>
