<script setup lang="ts">
import { ref, Ref } from 'vue';
import Header from './components/Header.vue';
import ProductSlider from './components/ProductSlider.vue';
import ProductDescription from './components/ProductDescription.vue';
import Aside from './components/Aside.vue';
import Cart from './components/Cart.vue';
import { CartItem } from './types/cart.type';
import ProductsView from './components/ProductsView.vue';

const isModalOpen = ref(false);
const isCartOpen = ref(false);
const cartItems: Ref<CartItem[]> = ref([]);


const openModal = () => {
  isModalOpen.value = true;
}

const closeModal = () => {
  isModalOpen.value = false;
}

const toggleCart = () => {
  isCartOpen.value = !isCartOpen.value;
}

const removeItem = (id: string) => {
  cartItems.value = cartItems.value.filter( item => item.id !== id);
}

</script>

<template>
  <Header :open-modal="openModal" :toggle-cart="toggleCart" />
  <section class="md:flex md:mt-10">
    <ProductSlider class="md:hidden" />
    <ProductsView />
    <ProductDescription :cart-items="cartItems"/>
  </section>
  <Aside :close-modal="closeModal" v-if="isModalOpen" />
  <Cart :cart-items="cartItems" :remove-item="removeItem" v-if="isCartOpen" />
</template>
