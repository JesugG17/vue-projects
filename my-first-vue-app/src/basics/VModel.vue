<script setup lang="ts">
    import { ref, Ref } from 'vue';
    const text = ref('');
    const selected: Ref<string[]> = ref([]);
</script>


<template>
    <div class="flex flex-col gap-5">
        <h1 class="text-center text-3xl">{{ selected }}</h1>
        <input v-model="text" type="text" placeholder="edit me">
        <select v-model="selected" multiple>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
        </select>
    </div>

</template>