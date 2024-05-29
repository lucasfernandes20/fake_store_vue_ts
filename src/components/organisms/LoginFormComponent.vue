<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import router from '@/router';
import { reactive } from 'vue';
import { useUserStore } from '@/stores/user/user';

const userStore = useUserStore()

const user = reactive({
  username: '' as string,
  password: '' as string
})

const login = async () => {
  userStore.login(user).then(() => router.push('/'))
}

</script>

<template>
  <div class="bg-white/10 laptop:w-1/2 p-9 rounded-xl backdrop-blur-xl flex flex-col items-stretch gap-6 shadow-xl">
    <form class="flex flex-col gap-6">
      <div class="text-center">
        <span class="bg-white/10 inline-flex justify-center items-center rounded-full p-4">
          <i class="pi pi-user text-4xl text-white" />
        </span>
      </div>
      <InputText placeholder="Nome de usuário" type="text" required v-model="user.username" />
      <InputText placeholder="Senha" type="password" required v-model="user.password" />
      <Button label="Login" v-on:click="async () => await login()" rounded />
      <Button label="Criar conta" outlined rounded class="text-primary-inverse border-primary-inverse" />
    </form>
    <Button link class="w-fit self-center text-primary-inverse hover:underline" label="Esqueci minha senha" />
  </div>
</template>


<style scoped></style>