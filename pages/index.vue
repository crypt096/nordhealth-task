<script setup>
import { ref } from 'vue'
import '@provetcloud/web-components/lib/Button'

const count = ref(0)
</script>

<template>
  <provet-button variant="primary" @click="count++">
    Count is: {{ count }}
  </provet-button>
</template>
