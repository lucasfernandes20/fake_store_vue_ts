<template>
  <div class="bg-[url('/images/hero_image.png')] h-[640px] w-svw">
    <div class="container h-full mx-auto py-12 flex flex-col gap-6 items-start justify-center">
      <h1 class="text-5xl font-serif text-muted">Percorra seu caminho</h1>
      <div class="h-1 w-28 bg-primary"></div>
      <p class="font-bold text-primary-foreground/80">O único caminho certo, é o seu!</p>
      <div class="flex gap-4">
        <RouterLink to="/shop?category=men's clothing">
          <Button label="Roupas Masculinas" icon="pi pi-mars"
            class="text-primary-foreground shadow-lg hover:bg-muted" />
        </RouterLink>
        <RouterLink to="/shop?category=women's clothing">
          <Button label="Roupas Femininas" icon="pi pi-venus"
            class="text-primary-foreground shadow-lg hover:bg-muted" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
</script>

<style scoped></style>