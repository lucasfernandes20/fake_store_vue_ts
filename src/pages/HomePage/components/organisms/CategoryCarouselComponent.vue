<template>
  <Carousel :value="categories" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" :circular="true"
    :autoplayInterval="3000">

    <template #item="slotProps">
      <div class="bg-primary mx-2 w-full h-96 relative">
        <div class="bg-gradient-to-b from-gray-800 to-transparent h-1/2 absolute w-full z-30">
          <h4 class="text-primary-inverse text-center uppercase font-bold text-2xl pt-4">
            {{ slotProps.data.label }}
          </h4>
        </div>
        <img :src="slotProps.data.image" alt="category" class="object-cover w-full h-full" />
      </div>
    </template>

  </Carousel>
</template>

<script setup lang="ts">
import Carousel from 'primevue/carousel';
import { categoryServices } from '@/services/category';
import { onMounted, reactive, ref } from 'vue';

const categories = reactive([] as Array<{ label: string, image: string }>)


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

function selectImage(category: string) {
  return `/images/categories/${category}.jpg`
}

function translateCategory(category: string) {
  switch (category) {
    case 'men\'s clothing':
      return 'Roupas Masculinas'
    case 'women\'s clothing':
      return 'Roupas Femininas'
    case 'electronics':
      return 'Eletrônicos'
    case 'jewelery':
      return 'Jóias'
    default:
      return category
  }
}

function transformData(categories: string[]) {
  return categories.map((category) => {
    return {
      label: translateCategory(category),
      image: selectImage(category)
    }
  })
}

onMounted(() => {
  categoryServices.getCategories().then((response) => {
    const transformedCategories = transformData(response)
    categories.push(...transformedCategories)
  })
})


</script>

<style scoped></style>