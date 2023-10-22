<script setup lang="ts">
import { onMounted, onUnmounted, ref, Ref } from 'vue';
import ProductSlider from './ProductSlider.vue';

const isOpen = ref(false);
const sliderItem: Ref<InstanceType<typeof ProductSlider> | null> = ref(null);

const openLightBox = () => {
  isOpen.value = true;
};

const closeLightBox = () => {
  isOpen.value = false;
};

const onKeyUp = (event: KeyboardEvent) => {
  if (event.key === 'Escape') isOpen.value = false;
};

onMounted(() => {
  window.addEventListener('keyup', onKeyUp);
});

onUnmounted(() => {
  window.removeEventListener('keyup', onKeyUp);
});

defineExpose({
  openLightBox,
});
</script>

<template>
  <section
    v-if="isOpen"
    class="bg-black bg-opacity-60 w-full h-screen fixed top-0 left-0 flex justify-center items-center z-50"
  >
    <article class="flex flex-col items-center w-[500px] gap-5">
      <CloseIcon @click="closeLightBox" />
      <ProductSlider ref="sliderItem" />
      <Carousel class="w-[95%]" :item="sliderItem?.productSlide" />
    </article>
  </section>
</template>
