<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { AddTask, Tasks } from './components'
import { useTaskStore } from './store/task.store';

const store = useTaskStore;


onMounted(() => {
  store.getAllTask();
});

const addTaskRef = ref<InstanceType<typeof AddTask> | null>(null);

</script>

<template>
  <main class="flex h-screen justify-center bg-gray-800 items-center">
      <section class="bg-black bg-opacity-40 shadow-md p-5  w-[90%] rounded-md relative max-w-md">
        <!-- <Tabs /> -->
        <Tasks />
        <div class="w-full relative min-h-[60px] flex justify-center">
          <button @click="addTaskRef?.openView"  class="bg-orange-400 text-white text-4xl p-2 rounded-full w-14 h-14 flex items-center justify-center absolute -bottom-8">
            +
          </button>
        </div>
      </section>
      <AddTask ref="addTaskRef" />
  </main>
</template>
