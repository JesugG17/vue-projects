<script setup lang="ts">

const props = defineProps<{
    closeModal: () => void;
}>();

</script>

<template>
    <section class="fixed top-0 z-20 bg-black bg-opacity-70 w-full h-screen">
        <aside class="absolute w-3/5 bg-white h-full left-0 px-4 py-6">
            <img @click="props.closeModal" class="w-3" src="/img/icon-close.svg" alt="Icon close">
            <ul class="mt-10 font-bold flex flex-col gap-5">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </aside>
    </section>
</template>