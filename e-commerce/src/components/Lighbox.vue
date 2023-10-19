<script setup lang="ts">
import { ref } from 'vue';
import ProductSlider from './ProductSlider.vue';
import Carousel from './Carousel.vue';

const isOpen = ref(false);


const openLightBox = () => isOpen.value = true;

const closeLightBox = () => isOpen.value = false;

defineExpose({
    openLightBox
})

</script>

<template>
    <section v-if="isOpen" class="bg-black bg-opacity-25 w-full h-screen absolute top-0 left-0 flex justify-center items-center">
        <article class="flex flex-col items-center w-[500px] gap-5">
            <img @click="closeLightBox" class="self-end w-4 cursor-pointer" src="/img/icon-close.svg" alt="Icon close">
            <ProductSlider />
            <Carousel class="w-[95%]" />
        </article>
    </section>
</template>