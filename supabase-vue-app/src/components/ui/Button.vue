<script setup lang="ts">

const props = defineProps<{
    src: string;
}>();
console.log(props.src);
</script>

<template>
    <button>
        <img class="w-12" :src="props.src" alt="Image">
        <slot />
    </button>
</template>