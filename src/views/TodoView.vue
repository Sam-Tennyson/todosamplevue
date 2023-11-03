<script setup lang="ts">
import TodoList from "../components/TodoList.vue"
import { useTodoStore } from '@/store/todo';
const todoStore = useTodoStore()
</script>
<template>
  <div>
    <h1>Todo App</h1>
    <input class="mb-2 p-2" v-model="todoStore.newTodo" @keyup.enter="todoStore.addTodo" placeholder="Add a new todo" />
    <TodoList />
  </div>
</template>






