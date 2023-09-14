<script setup lang="ts">
import { ref } from 'vue';

const open = ref(false);

const openModal = () => {
    open.value = true;
}

const closeModal = () => {
    open.value = false;
}

defineExpose({
    openModal
})

</script>

<template>
    <div v-if="open" class="absolute w-full h-screen bg-black bg-opacity-40 flex justify-center items-center">
        <div class="bg-white p-2 w-2/4 h-[200px] rounded shadow flex flex-col">
            <div class="flex">
                <h4 class="flex-1 text-center">My modal</h4>
                <button @click="closeModal">X</button>
            </div>
        </div>
    </div>
</template>