<template>
  <provet-input
    label="Email"
    error="Test error message"
    expand
    required
    name="email"
    type="email"
    placeholder="user@example.com"
  ></provet-input>
</template>

<script setup lang="ts">
import '@provetcloud/web-components/lib/Input';
</script>