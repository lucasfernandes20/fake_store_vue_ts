<template>
  <div class="mx-2 w-full h-96 relative rounded-xl">
    <RouterLink to="/shop">
      <div class="bg-gradient-to-b from-gray-800 to-transparent h-1/2 absolute w-full  rounded-xl">
        <h4 class="text-primary-inverse text-center uppercase font-bold text-2xl pt-4">
          {{ category.label }}
        </h4>
      </div>
      <img :src="category.image" alt="category" class="object-cover w-full h-full rounded-xl" />
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  category: {
    label: string,
    image: string
  }
}>()
</script>

<style scoped></style>