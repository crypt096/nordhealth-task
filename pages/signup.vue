<template>
  <provet-stack class="n-container-xxs" style="margin: var(--n-space-xl) auto">
    <provet-card padding="l">
      <h1 slot="header" class="n-typescale-l">Create an account</h1>
      <form action="#">
        <provet-stack gap="l">
          <EmailInput />
          <PasswordInput />
          <PasswordInput />
          <provet-checkbox label="I would like to receive occasional product updates and announcements"></provet-checkbox>
          <provet-button type="submit" expand variant="primary">Sign up</provet-button>
        </provet-stack>
      </form>
    </provet-card>
  </provet-stack>
</template>

<script setup lang="ts">
import '@provetcloud/web-components/lib/Stack';
import '@provetcloud/web-components/lib/Button';
import '@provetcloud/web-components/lib/Card';
import '@provetcloud/web-components/lib/Checkbox';
</script>
