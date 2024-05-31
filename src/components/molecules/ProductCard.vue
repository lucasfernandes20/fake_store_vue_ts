<template>
  <div class="shadow-xl rounded-2xl p-3 bg-white flex items-start gap-3 h-80 laptop:flex-col laptop:h-auto">
    <div class="w-1/2 h-80 laptop:w-full relative">
      <Image :src="product.image" alt="product" class="h-full w-full" preview>
        <template #indicatoricon>
          <i class="pi pi-eye"></i>
        </template>
        <template #image>
          <img :src="product.image" alt="product image" class="h-full w-full object-contain" />
        </template>
        <template #preview="slotProps">
          <img :src="product.image" alt="product preview" :style="slotProps.style" @click="slotProps.onClick" />
        </template>
      </Image>
    </div>
    <div class="w-1/2 laptop:w-full flex flex-col items-start justify-center gap-2 py-2">
      <div class="w-full relative flex flex-col gap-2 cursor-pointer">
        <h4 class="laptop:text-xl w-full truncate">{{ product.title }}</h4>
        <p class="w-full h-20 overflow-hidden text-sm text-gray-500">{{ product.description }}</p>
        <div class="absolute w-full h-14 bottom-0 left-0 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      <div class="w-full flex items-center gap-2">
        <Rating v-model="rating" readonly :cancel="false" />
        <span class="text-gray-500 text-xs">
          ({{ totalAnalysis }} análises)
        </span>
      </div>
      <div class="w-full flex items-center justify-between gap-2">
        <Tag class="text-xl" severity="success">
          R$
          <span class="text-base ml-1">
            {{ product.price }}
          </span>
        </Tag>
        <Button icon="pi pi-shopping-cart" outlined severity="success" class="border-0"></Button>
      </div>
      <Button class="w-full" label="Comprar agora" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { type Product } from '@/services/product';

import Button from 'primevue/button';
import Image from 'primevue/image';
import Tag from 'primevue/tag';
import Rating from 'primevue/rating'

const props = defineProps<{
  product: Product
}>()

const rating = ref(props.product.rating.rate)
const totalAnalysis = ref(props.product.rating.count)


</script>

<style scoped></style>