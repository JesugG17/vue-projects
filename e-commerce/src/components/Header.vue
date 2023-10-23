<script setup lang="ts">
const props = defineProps<{
  totalItems: number;
  openModal: () => void;
}>();

const links = ['Collections', 'Men', 'Women', 'About', 'Contact'];

defineEmits(['toggle-cart']);
</script>

<template>
  <header
    class="w-full fixed top-0 z-40 bg-white p-4 flex justify-between md:p-0 md:justify-around md:border-b lg:w-4/5 lg:m-auto md:static"
  >
    <div class="flex gap-4 items-center">
      <img class="md:hidden" @click="props.openModal" src="/img/icon-menu.svg" alt="Icon Menu" />
      <img src="/img/logo.svg" alt="Logo" />
      <nav class="hidden md:block ml-4">
        <ul class="flex gap-4 items-center text-gray-400 text-sm lg:text-base">
          <li
            v-for="text in links"
            class="border-b-4 border-transparent py-6 hover:border-orange transition-all duration-200"
          >
            {{ text }}
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex items-center gap-4 md:gap-7">
      <figure class="relative">
        <img class="lg:w-7 cursor-pointer" @click="$emit('toggle-cart')" src="/img/icon-cart.svg" alt="Icon cart" />
        <span
          class="bg-orange p-1 -top-2 right-0 text-white w-4 h-4 rounded-full absolute text-xs flex justify-center items-center font-bold"
          v-if="totalItems !== 0"
        >
          {{ totalItems }}
        </span>
      </figure>
      <img
        class="w-8 lg:w-12 border-2 hover:border-orange rounded-full transition-all duration-200"
        src="/img/image-avatar.png"
        alt="Image avatar"
      />
    </div>
  </header>
</template>
