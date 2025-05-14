<template>
    <provet-stack>
      <provet-header>
        <h1 class="n-typescale-l">Nordhealth Task</h1>
      </provet-header>
      <main>
        <slot />
      </main>
      <provet-footer>
        <provet-stack gap="none" direction="horizontal" justify-content="end" align-items="center">
          <provet-button target="_blank" href="https://github.com/crypt096/nordhealth-task" square variant="plain" size="m">
            <provet-icon name="generic-github" size="m" />
            <provet-visually-hidden>
              View the code on GitHub
            </provet-visually-hidden>
          </provet-button>
          © 2025 Aleksandar Cvjetan
        </provet-stack>
      </provet-footer>
    </provet-stack>
</template>

<script setup lang="ts">
import '@provetcloud/web-components/lib/Header'
import '@provetcloud/web-components/lib/Footer'
import '@provetcloud/web-components/lib/Stack'
import '@provetcloud/web-components/lib/Icon'
</script>