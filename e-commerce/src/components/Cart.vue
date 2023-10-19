<script setup lang="ts">
import { ref } from 'vue';
import CartItem from './CartItem.vue';
import { CartItem as CartItemType } from '../types/cart.type';

const props = defineProps<{
    cartItems: CartItemType[]
    removeItem: (id: string) => void;
}>();

const isCartOpen = ref(false);

const openCart = () => {
    isCartOpen.value = true;
};

const closeCart = () => {
    isCartOpen.value = false;
};

defineExpose({
    openCart,
    closeCart,
    isCartOpen
})

</script>

<template>
    <section v-if="isCartOpen" class="w-full flex justify-center absolute top-20 z-20 md:justify-end md:mr-5 md:w-[95%] lg:w-[80%]">
        <article class="bg-white w-[95%] max-h-[250px] max-w-[350px] rounded-md shadow-md overflow-y-scroll ">
            <div class="p-6 border-b border-gray-300">
                <h4 class="font-bold">Cart</h4>
            </div>
            <div v-if="props.cartItems.length !== 0" class="p-6 flex flex-col gap-4">
                <CartItem v-for="item in props.cartItems" :cart-item="item" :remove-item="removeItem"/>        
                <button class="w-full bg-orange text-white font-bold py-4 rounded-md">Checkout</button>
            </div>
            <div v-if="props.cartItems.length === 0" class="h-[150px] flex justify-center items-center">
                <h4 class="text-center self-center font-bold opacity-70">Your cart is empty</h4>
            </div>
        </article>
    </section>
</template>