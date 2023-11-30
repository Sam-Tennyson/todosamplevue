<script setup lang="ts">
import TodoButton from '@/components/TodoButton.vue'
import TodoList from '@/components/TodoList.vue'
import { useTodoStore } from '@/store/todo';
import { ref } from 'vue';

const todoStore = useTodoStore()

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const handleAddTodo = () => {
  todoStore.addTodo()
  closeModal()
}

</script>
<template>

    <div v-if="isModalOpen" class="fixed z-[100] inset-0 flex items-center justify-center">
      <div class="absolute inset-0 bg-gray-800 opacity-75" @click="closeModal"></div>

      <div class="bg-white p-8 mx-auto z-[100] rounded-md shadow-lg md:w-[60%] w-[80%]">
        <h2 class="text-2xl font-bold mb-4">Add Todo</h2>
        <div class="grid grid-cols-1 gap-[10px]">
          <input
            class="mb-2 p-2 border-2 border-blue-500 rounded-md"
            v-model="todoStore.newTodo"
            placeholder="Title"
          />
          <textarea
          rows="5"
            class="mb-2 p-2 border-2 border-blue-500 rounded-md"
            v-model="todoStore.desc"
            placeholder="Description"
          ></textarea>
        </div>
        <div class="flex justify-end items-center gap-[10px]">
          <button @click="handleAddTodo" class="bg-blue-500 text-white px-4 py-2 rounded-md">
            Add Todo
          </button>
          <button @click="closeModal" class="bg-blue-500 text-white px-4 py-2 rounded-md">
            Close
          </button>
        </div>
      </div>
    </div>
  <div class="flex items-center justify-end">
    <TodoButton @button-click-event="openModal()">
      <i class="pi pi-file-edit"></i>
      Add Todo
    </TodoButton>
    
  </div>
  <div>
    <div class="grid grid-flow-row gap-8 text-neutral-600 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4">
      <TodoList />
    </div>
  </div>
</template>
