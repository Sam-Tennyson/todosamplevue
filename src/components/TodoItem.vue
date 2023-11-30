<script setup lang="ts">
interface Props {
  todo: ITodo
}

import type { ITodo } from '@/interfaces/todoInterface'
import { useTodoStore } from '@/store/todo'
import { ref } from 'vue'
import TodoButton from './TodoButton.vue';

const todoStore = useTodoStore()
const props = defineProps<Props>()

const todo = ref(props.todo)
const isEditModalOpen = ref(false)
const isDeleteModalOpen = ref(false)

const openEditModal = () => {
  isEditModalOpen.value = true
}

const closeEditModal = () => {
  isEditModalOpen.value = false
}


const openDeleteModal = () => {
  isDeleteModalOpen.value = true
}

const closeDeleteModal = () => {
  isDeleteModalOpen.value = false
}


const handleEdit = () => {
  todoStore.editTodo(todo.value.id, todo.value.text, todo.value.desc)
  closeEditModal()
}

const handleDelete = () => {
  todoStore.deleteTodo(todo.value.id)
  closeDeleteModal()
}

</script>
<template>
  <!-- Edit Modal -->
  <div v-if="isEditModalOpen" class="fixed z-[100] inset-0 flex items-center justify-center">
    <div class="absolute inset-0 bg-gray-800 opacity-75" @click="closeEditModal"></div>

    <div class="bg-white p-8 -md mx-auto z-[100] rounded-md shadow-lg  md:w-[60%] w-[80%]">
      <h2 class="text-2xl font-bold mb-4">Edit Todo</h2>
      <div class="grid grid-cols-1 gap-[10px]">
        <input class="mb-2 p-2 border-2 border-blue-500 rounded-md" v-model="todo.text" placeholder="Title" />
        <textarea rows="5" class="mb-2 p-2 border-2 border-blue-500 rounded-md" v-model="todo.desc"
          placeholder="Description"></textarea>
      </div>
      <div class="flex justify-end items-center gap-[10px]">
        <button @click="handleEdit" class="bg-blue-500 text-white px-4 py-2 rounded-md">
          Update
        </button>
        <button @click="closeEditModal" class="bg-blue-500 text-white px-4 py-2 rounded-md">
          Close
        </button>
      </div>
    </div>
  </div>

  <!-- Delete modal -->
  <div v-if="isDeleteModalOpen" class="fixed z-[100] inset-0 flex items-center justify-center">
    <div class="absolute inset-0 bg-gray-800 opacity-75" @click="closeDeleteModal"></div>

    <div class="bg-white p-8 max-w-md mx-auto z-[100] rounded-md shadow-lg">
      <h2 class="text-2xl font-bold mb-4">Delete Todo</h2>
      <p class="text-center">Are you sure you want to do this operation?</p>
      <div class="flex justify-end items-center gap-[10px]">
        <button @click="handleDelete" class="bg-blue-500 text-white px-4 py-2 rounded-md">
          Delete
        </button>
        <button @click="closeDeleteModal" class="bg-blue-500 text-white px-4 py-2 rounded-md">
          Close
        </button>
      </div>
    </div>
  </div>
  <div
    class="my-8 px-3 py-2 rounded shadow-lg bg-[#ebe1e1]  duration-300 overflow-hidden [box-shadow:0px_4px_4px_0px_rgba(255,_69,_69,_0.25)]">
    <div class="flex flex-col items-start justify-start shrink-0 h-[230px] relative">
      <div class="flex items-center justify-between self-stretch shrink-0 relative">
        <div class="text-lg mb-4 font-bold leading-relaxed text-gray-800 break-words overflow-hidden">
          {{ todo.text }}
        </div>
        <div class="flex items-center justify-between shrink-0 relative">
          <input class="text-[10px]" type="checkbox" v-model="todo.completed"
            @click="todoStore.toggleCompleted(todo?.id)" />

          <div class="ms-1 text-[#2d8636] text-left relative text-[12px]" @click="todoStore.toggleCompleted(todo?.id)">
            Completed
          </div>
        </div>
      </div>
      <div class="text-[#000000] text-left relative self-stretch text-[16px] break-words"
        :class="{ completed: todo.completed }">
        {{ todo.desc }}
      </div>
    </div>

    <div class="flex gap-[13px] items-center justify-end shrink-0 relative">
      <TodoButton v-on:button-click-event="openEditModal()">
        <i class="pi pi-file-edit"></i>
        Edit
      </TodoButton>
      <TodoButton v-on:button-click-event="openDeleteModal()" :customClass="'bg-[#db2929]'">
        <i class="pi pi-delete-left"></i>
        Delete
      </TodoButton>
    </div>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
