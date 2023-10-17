<script setup lang="ts">
    
const props = defineProps<{
    openModal: () => void;
    toggleCart: () => void;
}>();

</script>

<template>
    <nav class="w-full p-4 flex justify-between md:p-0 md:justify-around">
        <div class="flex gap-4 items-center">
            <img class="md:hidden" @click="props.openModal" src="/img/icon-menu.svg" alt="Icon Menu">
            <img src="/img/logo.svg" alt="Logo">
            <nav class="hidden md:block ml-4">
                <ul class="flex gap-4 items-center text-gray-400 text-sm">
                    <li class="border-b-4 border-transparent py-6 hover:border-orange">Collections</li>
                    <li class="border-b-4 border-transparent py-6 hover:border-orange">Men</li>
                    <li class="border-b-4 border-transparent py-6 hover:border-orange">Women</li>
                    <li class="border-b-4 border-transparent py-6 hover:border-orange">About</li>
                    <li class="border-b-4 border-transparent py-6 hover:border-orange">Contact</li>
                </ul>
            </nav>
        </div>
        <div class="flex items-center gap-4">
            <img @click="toggleCart" src="/img/icon-cart.svg" alt="Icon cart">
            <img class="w-8" src="/img/image-avatar.png" alt="Image avatar">
        </div>
    </nav>
</template>