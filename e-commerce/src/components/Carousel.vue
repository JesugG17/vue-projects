<script setup lang="ts">
import {} from 'vue';

const props = defineProps<{
    item?: number;
}>();

console.log(props.item);
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
            class="w-[20%] rounded-md hover:border-2 hover:opacity-50 border-orange transition-all duration-200"
            :class="
                !props.item && index === 0
                    ? 'outline outline-orange'
                    : props.item === index && 'outline outline-orange'
            "
            :src="image"
            alt="Thumbnail"
        />
    </article>
</template>
