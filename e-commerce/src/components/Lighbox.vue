<script setup lang="ts">
import { ref, Ref } from 'vue';
import ProductSlider from './ProductSlider.vue';
import Carousel from './Carousel.vue';

const isOpen = ref(false);
const sliderItem: Ref<InstanceType<typeof ProductSlider> | null> = ref(null);

const openLightBox = () => isOpen.value = true;

const closeLightBox = () => isOpen.value = false;

defineExpose({
    openLightBox
});

console.log(sliderItem.value);
</script>

<template>
    <section v-if="isOpen" class="bg-black bg-opacity-60 w-full h-screen absolute top-0 left-0 flex justify-center items-center z-50">
        <article class="flex flex-col items-center w-[500px] gap-5">
            <img @click="closeLightBox" class="self-end w-4 cursor-pointer" src="/img/icon-close.svg" alt="Icon close">
            <ProductSlider ref="sliderItem"/>
            <Carousel class="w-[95%]" :item="sliderItem?.productSlide"/>
        </article>
    </section>
</template>