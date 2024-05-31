<script setup lang="ts">
import CategoryCarouselComponent from './components/organisms/CategoryCarouselComponent.vue';
import HeroComponent from './components/organisms/HeroComponent.vue';
import ProductListComponent from './components/organisms/productListComponent.vue';

</script>

<template>
  <HeroComponent />
  <section class="container mx-auto py-6 px-2 laptop:px-0 ">
    <CategoryCarouselComponent />
    <ProductListComponent />
  </section>
</template>
