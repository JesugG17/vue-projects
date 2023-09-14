<script setup lang="ts">

defineEmits(['enlarge-text']);

</script>

<template>
    <h1>Hola mundo</h1>
    <button @click="$emit('enlarge-text')">Enlarge Text</button>
</template>