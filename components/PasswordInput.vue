<template>
  <provet-input
    v-model="password"
    :type="showPassword ? 'text' : 'password'"
    label="Password"
    error="Test error message"
    expand
    required
  >
    <provet-button
      square
      slot="end"
      aria-label="Toggle password visibility"
      :aria-pressed="showPassword.toString()"
      @click="togglePasswordVisibility"
    >
      <provet-icon :name="showPassword ? 'interface-edit-off' : 'interface-edit-on'" size="m" label="Toggle password visibility" />
    </provet-button>
  </provet-input>
  <provet-tooltip :id="`${inputId}-tooltip`">Show / hide password</provet-tooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import '@provetcloud/web-components/lib/Input';
import '@provetcloud/web-components/lib/Button';
import '@provetcloud/web-components/lib/Icon';
import '@provetcloud/web-components/lib/Tooltip';

const password = ref('');
const showPassword = ref(false);
const inputId = useId();

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>
