<script setup lang="ts">
import { Ref, ref } from 'vue';
import GifGrid from './components/GifGrid.vue';

const categories: Ref<string[]> = ref([]);
const category = ref('');

const handleShowGifs = async() => {
    categories.value.push(category.value);
    category.value = '';
}

</script>

<template>
    <form @submit.prevent="handleShowGifs" class="p-4 w-full flex flex-col gap-5 items-center">
        <h4 class="text-4xl font-bold">Gifs app</h4>
        <input v-model="category" class="w-3/5 p-2 rounded border-2" type="text" placeholder="Search a gif">
    </form>
    <ul class="flex flex-col gap-3 items-center">
        <h4 v-if="categories.length === 0" class="text-4xl font-bold">No gifs searched!</h4>
        <GifGrid v-for="category in categories" :category="category"/>
    </ul>
</template>

