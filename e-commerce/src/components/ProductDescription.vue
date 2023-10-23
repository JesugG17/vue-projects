<script setup lang="ts">
import { ref } from 'vue';
import { v4 as uuid } from 'uuid';
import { CartItem } from '../types/cart.type';

const props = defineProps<{
  cartItems: CartItem[];
}>();

const counter = ref(0);

const addToCart = () => {
  if (counter.value === 0) return;
  props.cartItems.push({ id: uuid(), quantity: counter.value });
  counter.value = 0;
};
</script>

<template>
  <section class="flex flex-col py-4 px-6 gap-3 lg:mt-10 xl:w-[40%]">
    <strong class="text-orange font-bold tracking-widest text-xs lg:text-base">
      SNEAKER COMPANY
    </strong>
    <h1 class="text-2xl font-bold md:text-3xl lg:text-5xl">
      Fall Limited Edition Sneakers
    </h1>
    <p class="text-gray-600 text-sm md:text-base lg:text-lg">
      These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, the'll
      withstand everything the weather can offer
    </p>
    <article class="flex justify-between md:justify-normal md:flex-wrap md:gap-1">
      <div class="flex items-center gap-2 md:w-full">
        <strong class="text-2xl">$125.00</strong>
        <p class="bg-pale-orange px-1 text-orange font-bold rounded">50%</p>
      </div>
      <p class="text-dark-grayish-blue line-through font-bold opacity-60">$250.00</p>
    </article>
    <article class="flex flex-col gap-2 md:flex-row md:mt-3 lg:mt-">
      <button class="w-full flex items-center justify-between bg-light-grayish-blue p-4 rounded-md md:w-[40%]">
        <MinusIcon @click="counter === 0 ? 0 : counter--" />
        <strong>{{ counter }}</strong>
        <PlusIcon @click="counter++" />
      </button>
      <button
        @click="addToCart"
        class="bg-orange font-bold flex items-center justify-center gap-2 p-4 rounded-md text-white shadow-sm shadow-orange md:w-[55%] hover:brightness-110 transition-all duration-200"
      >
        <img class="brightness-0 invert w-4" src="/img/icon-cart.svg" alt="Icon cart" />
        Add to cart
      </button>
    </article>
  </section>
</template>
