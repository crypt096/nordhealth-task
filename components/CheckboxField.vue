<template>
  <provet-checkbox
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
    :label="label"
  />
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean;
  label: string;
}>();

defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();
</script>