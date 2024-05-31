<template>
  <div>
    <h2 class="text-2xl font-bold">Produtos quentes 🔥</h2>
    <div class="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-5 gap-4">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { productService, type Product } from '@/services/product'
import ProductCard from '@/components/molecules/ProductCard.vue'

const products = reactive([] as Array<Product>)

async function fetchProducts() {
  const allProducts = await productService.getProducts({ limit: 10 })
  products.push(...allProducts)
}

onMounted(() => {
  fetchProducts()
})

</script>

<style scoped></style>