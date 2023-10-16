<script setup lang="ts">
    
const props = defineProps<{
    openModal: () => void;
    toggleCart: () => void;
}>();

</script>

<template>
    <nav class="w-full p-4 flex justify-between">
        <div class="flex gap-4 items-center">
            <img @click="props.openModal" src="/img/icon-menu.svg" alt="Icon Menu">
            <img src="/img/logo.svg" alt="Logo">
        </div>
        <div class="flex items-center gap-4">
            <img @click="toggleCart" src="/img/icon-cart.svg" alt="Icon cart">
            <img class="w-8" src="/img/image-avatar.png" alt="Image avatar">
        </div>
    </nav>
</template>