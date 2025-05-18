<template>
  <div>
    <NuxtLayout>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/useAuth';

const { loadFromStorage } = useAuth();
loadFromStorage();
</script>