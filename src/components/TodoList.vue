<script setup lang="ts">
import { useTodoStore } from '@/store/todo';
import TodoItem from './TodoItem.vue';
import { ref } from 'vue';
import type { ITodo } from '@/interfaces/todoInterface';
import TodoButton from './TodoButton.vue';

const currentTodo = ref()

const todoStore = useTodoStore();
const isEditModalOpen = ref(false)
const isDeleteModalOpen = ref(false)

const openEditModal = () => {
  isEditModalOpen.value = true
}

const closeEditModal = () => {
  isEditModalOpen.value = false
}

const resetState = () => {
  currentTodo.value = ""
  closeEditModal()
  closeDeleteModal()
}

const openDeleteModal = () => {
  isDeleteModalOpen.value = true
}

const closeDeleteModal = () => {
  isDeleteModalOpen.value = false
}

const handleEdit = () => {
  todoStore.editTodo(currentTodo.value)
  resetState()
}

const handleDelete = () => {
  todoStore.deleteTodo(currentTodo.value)
  resetState()
}

const completeStatus = (index: number) => {
  todoStore.toggleCompleted(index)
}

const editTodo = (data: ITodo) => {
  currentTodo.value = data;
  openEditModal()
};

const deleteTodo = (id: number) => {
  currentTodo.value = id
  openDeleteModal()
};

</script>
<template>
  <!-- Edit Modal -->
  <div v-if="isEditModalOpen" class="fixed z-[100] inset-0 flex items-center justify-center">
    <div class="absolute inset-0 bg-gray-800 opacity-75" @click="closeEditModal"></div>
    <div class="bg-white p-8 -md mx-auto z-[100] rounded-md shadow-lg  md:w-[60%] w-[80%]">
      <h2 class="text-2xl font-bold mb-4">Edit Todo</h2>
      <div class="grid grid-cols-1 gap-[10px]">
        <input class="mb-2 p-2 border-2 border-blue-500 rounded-md" v-model="currentTodo.text" placeholder="Title" />
        <textarea rows="5" class="mb-2 p-2 border-2 border-blue-500 rounded-md" v-model="currentTodo.desc"
          placeholder="Description"></textarea>
      </div>
      <div class="flex justify-end items-center gap-[10px]">
        <TodoButton @button-click-event="handleEdit">
          <i class="pi pi-file-edit"></i>
          Update
        </TodoButton>
        <TodoButton @button-click-event="closeEditModal">
          <i class="pi pi-times"></i>
          Close
        </TodoButton>
      </div>
    </div>
  </div>

  <!-- Delete modal -->
  <div v-if="isDeleteModalOpen" class="fixed z-[100] inset-0 flex items-center justify-center">
    <div class="absolute inset-0 bg-gray-800 opacity-75" @click="closeDeleteModal"></div>

    <div class="bg-white p-8 max-w-md mx-auto z-[100] rounded-md shadow-lg text-center">
      <h2 class="text-2xl font-bold mb-2">Delete Todo</h2>
      <p class="text-center mb-2">Are you sure you want to do this operation?</p>
      <div class="flex justify-center items-center gap-[10px]">
        <TodoButton @button-click-event="handleDelete">
          <i class="pi pi-file-edit"></i>
          Delete
        </TodoButton>
        <TodoButton @button-click-event="closeDeleteModal">
          <i class="pi pi-times"></i>
          Close
        </TodoButton>
      </div>
    </div>
  </div>
  <div v-for="(todo, index) in todoStore.todos" :key="todo.text">
    <TodoItem :todo="todo" :index="index" @editTodo="editTodo" @deleteTodo="deleteTodo"
      @completeStatus="completeStatus" />
  </div>
</template>
  
  