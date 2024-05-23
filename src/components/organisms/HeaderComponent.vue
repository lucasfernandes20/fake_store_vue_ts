
<script setup lang="ts">
  import HeaderNavigation from '@/components/molecules/HeaderNavigation.vue';
  import HeaderSideBar from '@/components/molecules/HeaderSideBar.vue';

</script>

<template>
  <header class="w-full bg-primary h-14 py-2">
    <div class="container h-full mx-auto px-2 laptop:px-0 flex items-center justify-between gap-12">
      <RouterLink to="/" class="h-full">
        <img src="/src/assets/logo/written.png" alt="logo" class="h-full cursor-pointer" />
      </RouterLink>
      <HeaderNavigation />
      <HeaderSideBar />
    </div>
  </header>
</template>

<style scoped>

</style>