<script setup lang="ts">
import HeaderComponent from '@/components/organisms/HeaderComponent.vue'
import { RouterView } from 'vue-router'

</script>

<template>
  <HeaderComponent />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

</style>