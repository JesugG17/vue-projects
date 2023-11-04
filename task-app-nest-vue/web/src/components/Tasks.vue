<script setup lang="ts">
import { TaskItem } from '.';
import { useTaskStore } from '../store/task.store';

const store = useTaskStore;
</script>

<template>
    <ul class="px-5 flex flex-col gap-4">
        <h4 v-if="store.tasks.length === 0" class="text-xl text-center mt-5 font-bold">No tasks to show!..</h4>
        <TaskItem v-for="task in store.tasks" :task="task"/>
    </ul>
</template>