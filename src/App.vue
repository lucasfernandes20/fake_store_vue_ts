<script setup lang="ts">
  import HeaderComponent from '@/components/organisms/HeaderComponent.vue'
  import { RouterView } from 'vue-router'
</script>

<template>
  <HeaderComponent />
  <main class="container mx-auto py-6 px-2 laptop:px-0">
    <RouterView />
  </main>
</template>

<style scoped>

</style>