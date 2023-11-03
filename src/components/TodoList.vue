<script setup lang="ts">
import { useTodoStore } from '@/store/todo';
import TodoItem from './TodoItem.vue';
const todoStore = useTodoStore();
</script>
<template>
    <div v-for="todo in todoStore.todos" :key="todo.text">
      <TodoItem :todo="todo" />
    </div>
</template>
  
  