<script setup lang="ts">
import { GifApi } from '../types/gif-api-response';

const props = defineProps<{
    category: string,
    gif: GifApi
}>();

const getTitle = (title: string) => {
    console.log(title.length);
    return title.length <= 1 ? `${props.category} gif` : title;
}
</script>

<template>
    <picture class="overflow-hidden">
        <img class="object-cover rounded-t w-full h-[130px] hover:scale-125 transition-all duration-200" v-bind:src="gif.images.downsized_medium.url" alt="">
    </picture>
    <div class="p-2">
        <p class="font-bold text-center">{{ getTitle(props.gif.title) }}</p>
    </div>
</template>