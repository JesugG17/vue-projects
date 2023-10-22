<script setup lang="ts">
const props = defineProps<{
  item?: number;
}>();

const images = [
  '/img/image-product-1-thumbnail.jpg',
  '/img/image-product-2-thumbnail.jpg',
  '/img/image-product-3-thumbnail.jpg',
  '/img/image-product-4-thumbnail.jpg',
];
</script>

<template>
  <article class="flex justify-between">
    <img
      v-for="(image, index) in images"
      class="w-[20%] rounded-md border-2 border-transparent hover:brightness-125 bg-opacity-60 hover:border-orange transition-all duration-200"
      :class="props.item === index && 'outline outline-orange brightness-125'"
      :src="image"
      alt="Thumbnail"
    />
  </article>
</template>
