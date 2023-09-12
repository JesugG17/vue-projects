<script setup lang="ts">
import { GifApi } from '../types/gif-api-response';

const props = defineProps<{
    category: string,
    gif: GifApi
}>();

function getTitle(title: string) {
    return title.length === 0 ? `${props.category} gif` : title;
}

</script>


<template>
    <picture class="overflow-hidden">
        <img class="object-cover rounded-t w-full h-[100px] hover:scale-125 transition-all duration-200" v-bind:src="gif.images.downsized_medium.url" alt="">
    </picture>
    <div class="p-2">
        <p class="font-bold text-center">{{ getTitle(props.gif.title) }}</p>
    </div>
</template>