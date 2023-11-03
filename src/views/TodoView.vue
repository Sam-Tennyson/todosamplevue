<script setup lang="ts">
import Counter from "@/components/Counter.vue";
import TodoList from "../components/TodoList.vue"
import { useTodoStore } from '@/store/todo';
const todoStore = useTodoStore()
</script>
<template>
  <div >
    <Counter />
    <hr>
    <h1>Todo App</h1>
    <input class="mb-2 p-2 border-2 border-blue-500 rounded-md" v-model="todoStore.newTodo" @keyup.enter="todoStore.addTodo" placeholder="Add a new todo" />
    <TodoList />
  </div>
</template>






