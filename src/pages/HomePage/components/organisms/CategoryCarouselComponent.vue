<template>
  <Carousel :value="categoryStore.categories" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions"
    :circular="true" :autoplayInterval="3000" :v-once="true">

    <template #item="slotProps">
      <CategoryCard :category="slotProps.data" />
    </template>

  </Carousel>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { useCategoryStore } from '@/stores/category/category'

import Carousel from 'primevue/carousel';
import CategoryCard from '../molecules/CategoryCard.vue';

const categoryStore = useCategoryStore()


const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);


onMounted(() => {
  if (!categoryStore.categories || !categoryStore.categories.length) {
    categoryStore.setCategories()
  }
})


</script>

<style scoped></style>