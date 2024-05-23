
<script setup lang="ts">
import HeaderNavigation from '../molecules/HeaderNavigation.vue';


</script>

<template>
  <header class="w-full bg-primary h-14 py-2">
    <div class="container h-full mx-auto flex items-center gap-12">
      <RouterLink to="/" class="h-full">
        <img src="/src/assets/logo/written.png" alt="logo" class="h-full cursor-pointer" />
      </RouterLink>
      <HeaderNavigation />
    </div>
  </header>
</template>

<style scoped>

</style>