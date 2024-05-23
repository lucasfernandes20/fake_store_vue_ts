<template>
  <nav class="hidden laptop:block">
    <ul class="flex items-center">
      <li>
        <Button link class="text-primary-inverse hover:text-primary-inverse/80">
          <RouterLink to="/">Home</RouterLink>
        </Button>
      </li>
      <li>
        <Button link class="text-primary-inverse hover:text-primary-inverse/80">
          <RouterLink to="/cart">Carrinho</RouterLink>
        </Button>
      </li>
      <li>
        <Button link class="text-primary-inverse hover:text-primary-inverse/80">
          <RouterLink to="/shop">Produtos</RouterLink>
        </Button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
</script>

<style scoped>

</style>