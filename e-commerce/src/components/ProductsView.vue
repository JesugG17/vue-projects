<script setup lang="ts">
import { ref, Ref } from 'vue';
import Carousel from './Carousel.vue';
import Lighbox from './Lighbox.vue';

const lightBox: Ref<InstanceType<typeof Lighbox> | null> = ref(null);

</script>

<template>
    <section class="hidden px-6 md:flex flex-col gap-6 xl:w-[40%]">
        <img @click="lightBox?.openLightBox" class="rounded-lg lg:w-full" src="/img/image-product-1.jpg" alt="Product image">
        <Carousel />
        <Lighbox ref="lightBox" />
    </section>
</template>