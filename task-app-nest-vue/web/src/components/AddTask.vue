<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useTaskStore } from '../store/task.store';
import { useCloseWindow } from '../composables/useCloseWindow';


const taskDesc = ref('');
const inputRef = ref<HTMLElement | null>(null);
const store = useTaskStore;
const isAddingTask = useCloseWindow()


const openView = () => {
    isAddingTask.value = true;
}

const onSubmit = () => {
    if (taskDesc.value.length === 0) return;
    store.addTask(taskDesc.value);
    taskDesc.value = '';
    isAddingTask.value = false;
}

watchEffect(() => {
    if (isAddingTask.value) {
        inputRef.value?.focus();
    }

    if (!isAddingTask.value) {
        taskDesc.value = '';
    }
});

defineExpose({
    openView
})

</script>

<template>
    <section v-if="isAddingTask" class="bg-black bg-opacity-40 w-full h-screen absolute top-0 left-0 flex justify-center items-center">
        <form @submit.prevent="onSubmit" class="bg-zinc-700 p-4 rounded-md flex flex-col gap-5 text-white w-[75%] max-w-xs">
            <h4 class="text-center text-xl font-bold border-b-2 pb-5">Add new task</h4>
            <input v-model="taskDesc" ref="inputRef" class="text-black p-2 rounded" type="text" placeholder="Task description">
            <button class="bg-orange-500 w-2/4 self-center font-bold p-2 rounded shadow hover:brightness-105 transition-all duration-200">
                Create task
            </button>
        </form>
    </section>
</template>