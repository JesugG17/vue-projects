<script setup lang="ts">
import { ref, Ref } from 'vue';
import Header from './components/Header.vue';
import ProductSlider from './components/ProductSlider.vue';
import ProductDescription from './components/ProductDescription.vue';
import Aside from './components/Aside.vue';
import Cart from './components/Cart.vue';
import { CartItem } from './types/cart.type';
import ProductsView from './components/ProductsView.vue';

const isAsideOpen = ref(false);
const cart: Ref<InstanceType<typeof Cart> | null> = ref(null);
const cartItems: Ref<CartItem[]> = ref([]);

const toggleCart = () => {
  if (cart?.value?.isCartOpen) return cart.value.closeCart();
  cart.value?.openCart();
}

const openModal = () => {
  isAsideOpen.value = true;
}

const closeModal = () => {
  isAsideOpen.value = false;
}

const removeItem = (id: string) => {
  cartItems.value = cartItems.value.filter( item => item.id !== id);
}

</script>

<template>
  <Header :open-modal="openModal" @toggle-cart="toggleCart" />
  <section class="md:flex md:mt-10 xl:w-4/5 xl:justify-center xl:gap-20 xl:m-auto xl:mt-20 max-w-7xl">
    <ProductSlider class="md:hidden" />
    <ProductsView />
    <ProductDescription :cart-items="cartItems"/>
  </section>
  <Aside :close-modal="closeModal" v-if="isAsideOpen" />
  <Cart :cart-items="cartItems" :remove-item="removeItem" ref="cart"/>
</template>
