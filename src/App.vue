<script setup lang="ts">
import HeaderComponent from '@/components/organisms/HeaderComponent.vue'
import { onMounted } from 'vue';
import { RouterView, useRouter } from 'vue-router'
import { useUserStore } from './stores/user/user';

const router = useRouter()
const userStore = useUserStore()

onMounted(() => {
  const token = localStorage.getItem('token')
  if (!token) {
    router.push('/login')
  }
  if (!userStore.userData && token) {
    userStore.setUser(token).then(() => router.push('/'))
  }
})

</script>

<template>
  <HeaderComponent />
  <main class="bg-[#FFFFF0] w-svw overflow-x-hidden">
    <RouterView />
  </main>
</template>

<style scoped></style>