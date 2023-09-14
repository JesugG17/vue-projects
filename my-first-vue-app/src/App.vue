<script setup lang="ts">
  import { ref, Ref } from 'vue';
  import { v4 as uuid } from 'uuid';
  import { Todo } from './types/todo.interface';
import Modal from './basics/Modal.vue';
import CustomEvents from './basics/CustomEvents.vue';
import Layout from './basics/Layout.vue';
import Button from './basics/Button.vue';
 
  const todos: Ref<Todo[]> = ref([]);
  const modalRef: Ref<InstanceType<typeof Modal> | null> = ref(null);

  const inputRef: Ref<HTMLInputElement | null> = ref(null);
  const textInput = ref('');

  const handleSubmit = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.value.length === 0) return;

    const newTodo: Todo = {
      id: uuid(),
      description: target.value,
      createdAt: new Date(),
      updatedAt: null,
      completed: false
    }

    target.value = '';
    todos.value.push(newTodo);
  }

  const handleDelete = (todoId: string) => {
    todos.value = todos.value.filter(todo => todo.id !== todoId);
  }

  const focusInput = () => {
    if (inputRef) {
      inputRef.value?.focus();
    }
  }

  const size = ref(1)

</script>
<template>
  <!-- <section class="w-full h-screen flex flex-col gap-5 justify-center items-center bg-[#242424]">
      <article class="flex gap-3">
          <input 
            class="p-2 rounded"
            @change="handleSubmit" 
            type="text" 
            placeholder="Add todo" 
          />
          <button class="bg-white px-4 font-bold rounded">Add</button>
      </article>
      
      <ul class="flex flex-col text-white gap-3">
        <p v-if="todos.length === 0">No todos to show</p>
        <li
          class="bg-[#6a6a6a] w-[270px] rounded flex items-center justify-between" 
          v-for="todo in todos"
        >
          <p class="ml-2">{{ todo.description }}</p>
          <button  class="bg-red-500 p-2 rounded-l" @click="handleDelete(todo.id)">Delete</button>
        </li>
      </ul>
      <input v-model="textInput" type="text" placeholder="Test me">
      <input ref="inputRef" class="focus:outline-red-500" type="text" placeholder="Focusss">
      <button @click="focusInput">Click me to focus the input above</button>

      <Modal ref="modalRef" />
      <button @click="modalRef?.openModal" class="p-2 bg-white">Open modal</button>
  </section> -->
  <div :style="{ fontSize: size + 'em'}">
    <CustomEvents @enlarge-text="size += 1"/>
  </div>
  <!-- <Layout>

  </Layout> -->
  
  <Button>Click</Button>
  <Button>Click</Button>
  <Button>Click</Button>
</template>
