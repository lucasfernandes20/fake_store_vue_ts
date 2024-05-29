<script setup lang="ts">
import { ref } from 'vue';

import LoginFormComponent from '@/components/organisms/LoginFormComponent.vue';

const gradient = ref('bg-gradient-to-br from-green-300 via-blue-500 to-purple-600');

</script>

<template>
  <div :class="['h-svh flex items-center justify-between', gradient]">
    <div class="w-full h-full hidden laptop:block">
      <img src="/images/store.jpg" alt="logo" class="object-cover h-full">
    </div>
    <div class="w-full flex items-center justify-center">
      <LoginFormComponent />
    </div>
  </div>
</template>
