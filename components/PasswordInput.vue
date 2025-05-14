<template>
  <provet-input v-model="password" :type="showPassword ? 'text' : 'password'" label="Password">
    <provet-button
      slot="end"
      square
      @click="togglePasswordVisibility"
      aria-label="Toggle password visibility"
      :aria-pressed="showPassword.toString()"
    >
      <provet-icon :name="showPassword ? 'interface-edit-off' : 'interface-edit-on'" size="m" />
    </provet-button>
  </provet-input>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import '@provetcloud/web-components/lib/Input';
import '@provetcloud/web-components/lib/Button';
import '@provetcloud/web-components/lib/Icon';

const password = ref('');
const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>