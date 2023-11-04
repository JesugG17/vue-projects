<script setup lang="ts">
import { ref } from 'vue';
import { AddTask, Tabs, Tasks } from './components'

const addTaskRef = ref<InstanceType<typeof AddTask> | null>(null);

</script>

<template>
  <main class="flex h-screen justify-center bg-black items-center">
      <section class="bg-white shadow-md  w-[90%] rounded-md relative max-w-md">
        <Tabs />
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
