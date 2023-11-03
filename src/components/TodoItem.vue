  
<script setup lang="ts">
import type { ITodo } from '@/interfaces/todoInterface';
import { useTodoStore } from '@/store/todo';
import { ref } from 'vue';
interface Props {
  todo: ITodo;
}
const todoStore = useTodoStore();
const props = defineProps<Props>();
const todo = ref(props.todo);
</script>
<template>
  <div class="border-2 border-blue-600 rounded-md p-2 mb-2 w-56 gap-3">
    <input type="checkbox" v-model="todo.completed" @click="todoStore.toggleCompleted(todo?.id)" />
    <span class="ms-2" :class="{ completed: todo.completed }">{{ todo.text }}</span>
    <button class="ms-2 bg-red-500 rounded-md p-2 text-white" @click="todoStore.deleteTodo(todo?.id)">Delete</button>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>

