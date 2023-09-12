<script setup lang="ts">
import { ref, Ref } from 'vue';
import { gifApi } from '../api/gif-api';
import { GifApi } from '../types/gif-api-response';
import GifGridItem from './GifGridItem.vue';

const props = defineProps<{
    category: string,
}>();

const gifs: Ref<GifApi[]> = ref([]);

async function getData() {
    const { data } = await gifApi.get(`${props.category}&limit=10`);
    gifs.value = data.data;
}

getData();
</script>

<template>
    <h4 class="text-3xl font-bold">{{ category }}</h4>
    <li class="grid grid-cols-5 gap-5 w-3/4">
        <div v-for="gif in gifs" class="flex flex-col shadow-lg rounded">
            <GifGridItem :category="category" :gif="gif"/>
        </div>
    </li>
    <hr>
</template>