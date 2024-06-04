<script setup lang="ts">
import HeaderNavigation from '@/components/molecules/HeaderNavigation.vue';
import HeaderSideBar from '@/components/molecules/HeaderSideBar.vue';
import { useUserStore } from '@/stores/user/user';

const userStore = useUserStore()
</script>

<template>
  <header class="w-svw bg-primary py-2" v-if="$route.path !== '/login'" v-memo="[userStore.userData]">
    <div class="container mx-auto px-2 laptop:px-0 flex flex-col">
      <div class=" flex items-center justify-between gap-12">
        <RouterLink to="/" class="">
          <img src="/src/assets/logo/written.png" alt="logo" class="h-8 cursor-pointer" />
        </RouterLink>
        <p class="text-primary-foreground">Bem vindo(a)
          <span class="underline font-bold cursor-pointer">
            {{
              userStore.userData?.name.firstname
            }}
          </span>
        </p>
        <HeaderSideBar />
      </div>
      <div class="mx-auto">
        <HeaderNavigation />
      </div>
    </div>
  </header>
</template>

<style scoped></style>