<script setup lang="ts">

const props = defineProps<{
    title: string
}>()

</script>


<template>
    <div class="w-full h-screen flex justify-center items-center">
        <div class="bg-white w-2/4 h-2/4 p-2 rounded">
            <h4>{{ props.title }}</h4>
            <slot />
        </div>
    </div>
</template>

