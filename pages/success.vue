<template>
  <provet-stack class="n-container-xxs" style="margin: var(--n-space-xl) auto">
    <provet-card>
      <h1 slot="header">
        Account Created Successfully
      </h1>

      <provet-stack gap="l">
        <provet-banner variant="success">
          Account created for email ({{ email }}). You're ready to get started.
        </provet-banner>

        <provet-divider />
      </provet-stack>

      <provet-stack slot="footer" justify-content="center" align-items="center">
        <provet-button
          variant="primary"
          size="m"
          @click="signOut"
        >
          Sign out
          <provet-icon slot="end" name="interface-logout" />
        </provet-button>
      </provet-stack>
    </provet-card>
  </provet-stack>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'

import '@provetcloud/web-components/lib/Card'
import '@provetcloud/web-components/lib/Button'
import '@provetcloud/web-components/lib/Divider'
import '@provetcloud/web-components/lib/Banner'
import '@provetcloud/web-components/lib/Icon'
import '@provetcloud/web-components/lib/Stack'

const router = useRouter()
const email = ref<string | null>(null)

onMounted(() => {
  const stored = localStorage.getItem('signup-data')
  if (!stored) {
    router.replace('/signup')
    return
  }

  try {
    const parsed = JSON.parse(stored)
    if (!parsed.email) {
      router.replace('/signup')
      return
    }

    email.value = parsed.email
  } catch {
    router.replace('/signup')
  }
})

const signOut = () => {
  localStorage.removeItem('signup-data')
  router.replace('/signup')
}
</script>
