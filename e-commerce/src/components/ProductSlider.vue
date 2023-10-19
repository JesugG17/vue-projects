<script setup lang="ts">
import { ref } from 'vue';

const productSlide = ref(0);

const images = [
    '/img/image-product-1.jpg',
    '/img/image-product-2.jpg',
    '/img/image-product-3.jpg',
    '/img/image-product-4.jpg',
]

const nextImage = () => {
    productSlide.value = productSlide.value === images.length - 1 ? 0 : productSlide.value + 1;
}

const previousImage = () => {
    productSlide.value = productSlide.value === 0 ? images.length - 1 : productSlide.value - 1;
}


</script>

<template>
    <section class="relative">
        <img class="w-full object-cover h-[300px] lg:h-[500px]" :src="images[productSlide]" alt="Product image">
        <figure @click="previousImage" class="absolute cursor-pointer flex justify-center items-center w-8 h-8 z-10 bg-white top-[40%] left-4 p-2 rounded-full lg:-left-4 lg:top-[45%] lg:w-12 lg:h-12">
            <img class="w-2" src="/img/icon-previous.svg" alt="Icon previous">
        </figure>
        <figure @click="nextImage" class="absolute cursor-pointer flex justify-center items-center w-8 h-8 z-10 bg-white top-[40%] right-4 p-2 rounded-full lg:-right-4 lg:top-[45%] lg:w-12 lg:h-12">
            <img class="w-2" src="/img/icon-next.svg" alt="Icon next">
        </figure>
    </section>
</template>