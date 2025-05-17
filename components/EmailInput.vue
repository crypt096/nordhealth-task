<template>
  <provet-input
    :label="label"
    :placeholder="placeholder"
    :error="error || undefined"
    :value="modelValue"
    @input="onInput"
    expand
    required
    name="email"
    type="email"
  />
</template>

<script setup lang="ts">
import '@provetcloud/web-components/lib/Input';

interface EmailProps {
  modelValue: string;
  label?: string;
  placeholder?: string;
  error?: string;
}

defineProps<EmailProps>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>
