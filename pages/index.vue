<template>
  <provet-stack class="n-container-xxs" style="margin: var(--n-space-xl) auto">
    <provet-card padding="l">
      <h1 slot="header" class="n-typescale-xl">Welcome to NordHealth Product</h1>

      <provet-stack gap="l">
        <div class="n-typescale-m">
          Software we design and build enables healthcare professionals to save time, deliver better care, and grow their business.
        </div>

        <provet-divider />
      </provet-stack>

      <provet-stack slot="footer" justify-content="center" align-items="center">
        <provet-button
          variant="primary"
          size="m"
          @click="navigateToSignup"
        >
          Get Started
          <provet-icon slot="end" name="arrow-right-long" />
        </provet-button>
      </provet-stack>
    </provet-card>
  </provet-stack>
</template>

<script setup lang="ts">
import '@provetcloud/web-components/lib/Stack';
import '@provetcloud/web-components/lib/Card';
import '@provetcloud/web-components/lib/Button';
import '@provetcloud/web-components/lib/Icon';
import '@provetcloud/web-components/lib/Divider';

import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToSignup = () => {
  router.push('/signup');
};
</script>
