<template>
  <nav class="hidden laptop:block">
    <ul class="flex items-center">
      <li>
        <Button link class="text-primary-foreground hover:text-primary-foreground/70">
          <RouterLink to="/">Home</RouterLink>
        </Button>
      </li>
      <li>
        <Button link class="text-primary-foreground hover:text-primary-foreground/70">
          <RouterLink to="/shop?category=electronics">Eletrônicos</RouterLink>
        </Button>
      </li>
      <li>
        <Button link class="text-primary-foreground hover:text-primary-foreground/70">
          <RouterLink to="/shop?category=men's clothing">Roupas Masculinas</RouterLink>
        </Button>
      </li>
      <li>
        <Button link class="text-primary-foreground hover:text-primary-foreground/70">
          <RouterLink to="/shop?category=women's clothing">Roupas Femininas</RouterLink>
        </Button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
</script>

<style scoped></style>