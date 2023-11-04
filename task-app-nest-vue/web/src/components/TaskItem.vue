<script setup lang="ts">
import { Task, useTaskStore } from '../store/task.store';

const store = useTaskStore;

const { task } = defineProps<{
    task: Task
}>()

</script>

<template>
    <li class="flex gap-4">
        <input @click="store.toggleTask(task.id)" :checked="task.completed" class="w-6" type="radio">
        <p class="text-gray-500 font-medium" :class="task.completed && 'line-through opacity-50'">
            {{ task.desc }}
        </p>
    </li>
</template>