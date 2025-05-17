<template>
  <provet-button
    @click="toggleDark"
    square
    variant="plain"
    size="m"
    :aria-label="darkModeLabel"
  >
    <provet-icon
      :name="isDark ? 'interface-mode-light' : 'interface-mode-dark'"
      size="m"
    />
    <provet-visually-hidden>
      Toggle theme
    </provet-visually-hidden>
  </provet-button>
</template>

<script setup lang="ts">
import '@provetcloud/web-components/lib/Button'
import '@provetcloud/web-components/lib/Icon'
import '@provetcloud/web-components/lib/VisuallyHidden'
import { useTheme } from '~/composables/useTheme'

const { isDark, toggleDark, darkModeLabel } = useTheme()
</script>
