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

      <div class="bg-white p-8 max-w-md mx-auto z-[100] rounded-md shadow-lg">
        <h2 class="text-2xl font-bold mb-4">Add Todo</h2>
        <div class="grid grid-cols-2 gap-[10px]">
          <input
            class="mb-2 p-2 border-2 border-blue-500 rounded-md"
            v-model="todoStore.newTodo"
            placeholder="Title"
          />
          <input
            class="mb-2 p-2 border-2 border-blue-500 rounded-md"
            v-model="todoStore.desc"
            placeholder="Description"
          />
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
    <TodoButton v-on:button-click-event="openModal()">
      <i class="pi pi-file-edit"></i>
      Add Todo
    </TodoButton>
  </div>
  <div>
    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[30px]">
      <TodoList />
    </div>
  </div>
</template>
