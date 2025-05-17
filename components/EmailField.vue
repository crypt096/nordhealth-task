<template>
  <provet-input
    :id="inputId"
    :label="label"
    :placeholder="placeholder"
    :error="error || undefined"
    :value="email"
    @input="onInput"
    expand
    required
    name="email"
    type="email"
  />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import '@provetcloud/web-components/lib/Input';

interface Props {
  modelValue: string;
  label: string;
  placeholder?: string;
  error?: string;
}

const { label, error, modelValue, placeholder } = defineProps<Props>();

const inputId = useId();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const email = ref(modelValue);

watch(() => modelValue, (val) => {
  if (val !== email.value) email.value = val;
});

watch(email, (val) => {
  if (val !== modelValue) emit('update:modelValue', val);
});

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  email.value = target.value;
};
</script>
