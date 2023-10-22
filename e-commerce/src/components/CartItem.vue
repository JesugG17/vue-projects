<script setup lang="ts">
import {} from 'vue';
import { CartItem } from '../types/cart.type';

const props = defineProps<{
  cartItem: CartItem;
  removeItem: (id: string) => void;
}>();
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-4">
      <img class="w-12 rounded-md" src="/img/image-product-1-thumbnail.jpg" alt="Thumnail" />
      <div>
        <h4>Fall Limited Edition sneakers</h4>
        <p>
          $125.00 x {{ props.cartItem.quantity }}
          <strong>${{ props.cartItem.quantity * 125 }}</strong>
        </p>
      </div>
    </div>
    <img
      class="cursor-pointer hover:brightness-105 transition-all duration-200"
      @click="() => removeItem(props.cartItem.id)"
      src="/img/icon-delete.svg"
      alt="Icon delete"
    />
  </div>
</template>
