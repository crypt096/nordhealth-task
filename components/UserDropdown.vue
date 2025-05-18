<template>
  <provet-dropdown v-if="email">
    <provet-button slot="toggle" variant="plain" aria-describedby="user-tooltip">
      <provet-avatar :name="userInitials">
        {{ userInitials }}
      </provet-avatar>
    </provet-button>

    <provet-avatar slot="header" size="s" :name="userInitials">
      {{ userInitials }}
    </provet-avatar>
    <p slot="header" class="n-color-text-weak n-font-size-s">
      Signed in as <span class="n-font-weight-active">{{ email }}</span>
    </p>

    <provet-dropdown-group>
      <provet-dropdown-item @click="handleSignOut">
        Sign out
        <provet-icon slot="end" name="interface-logout" />
      </provet-dropdown-item>
    </provet-dropdown-group>
  </provet-dropdown>

  <provet-tooltip id="user-tooltip" position="block-end">
    {{ email }}
  </provet-tooltip>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuth } from '~/composables/useAuth';
import '@provetcloud/web-components/lib/Avatar';
import '@provetcloud/web-components/lib/Tooltip';
import '@provetcloud/web-components/lib/Dropdown';
import '@provetcloud/web-components/lib/DropdownItem';
import '@provetcloud/web-components/lib/DropdownGroup';

const router = useRouter();
const { email, userInitials, signOut } = useAuth();

const handleSignOut = () => {
  signOut();
  router.push('/');
};
</script>
