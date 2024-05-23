<script setup lang="ts">
  import {RouterLink} from 'vue-router'
</script>

<template>
  <header class="bg-primary">
  </header>
  <nav class="w-full flex items-center gap-2">
    <RouterLink to="/" class="btn btn-primary">Home</RouterLink>
    <RouterLink to="/about" class="btn btn-primary">About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

</style>