<script setup lang="ts">
const props = defineProps<{
    src: string;
}>();
</script>

<template>
    <button>
        <img class="w-12" :src="props.src" alt="Image">
        <slot />
    </button>
</template>