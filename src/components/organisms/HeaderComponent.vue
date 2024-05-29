<script setup lang="ts">
import HeaderNavigation from '@/components/molecules/HeaderNavigation.vue';
import HeaderSideBar from '@/components/molecules/HeaderSideBar.vue';
import { useUserStore } from '@/stores/user/user';

const userStore = useUserStore()
</script>

<template>
  <header class="w-full bg-primary h-14 py-2" v-if="$route.path !== '/login'">
    <div class="container h-full mx-auto px-2 laptop:px-0 flex items-center justify-between gap-12">
      <RouterLink to="/" class="h-full">
        <img src="/src/assets/logo/written.png" alt="logo" class="h-full cursor-pointer" />
      </RouterLink>
      <HeaderNavigation />
      <p class="text-primary-inverse">Bem vindo(a) <span class="underline font-bold cursor-pointer">{{
        userStore.userData?.name.firstname
          }}</span></p>
      <HeaderSideBar />
    </div>
  </header>
</template>

<style scoped></style>