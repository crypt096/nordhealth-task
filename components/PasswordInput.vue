<template>
  <provet-input
    v-model="password"
    :type="isPasswordVisible ? 'text' : 'password'"
    :label="label"
    :error="error || undefined"
    expand
    required
  >
    <provet-button
      square
      slot="end"
      aria-label="Toggle password visibility"
      :aria-pressed="isPasswordVisible.toString()"
      @click="togglePasswordVisibility"
    >
      <provet-icon
        :name="isPasswordVisible ? 'interface-edit-off' : 'interface-edit-on'"
        size="m"
        label="Toggle password visibility"
      />
    </provet-button>
  </provet-input>
  <provet-tooltip :id="`${inputId}-tooltip`">{{ passwordToggleLabel }}}</provet-tooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import '@provetcloud/web-components/lib/Input';
import '@provetcloud/web-components/lib/Button';
import '@provetcloud/web-components/lib/Icon';
import '@provetcloud/web-components/lib/Tooltip';

interface InputProps {
  label: string;
  error?: string;
}

const { label, error } = defineProps<InputProps>();

const password = ref('');
const isPasswordVisible = ref(false);
const inputId = useId();

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const passwordToggleLabel = computed(() =>
  isPasswordVisible.value ? 'Hide password' : 'Show password'
);
</script>
