  
<script setup lang="ts">
import type { ITodo } from '@/interfaces/todoInterface';
import { ref } from 'vue';

interface Props {
  todo: ITodo;
  onRemove: (todo: ITodo) => void;
}

const props = defineProps<Props>();
const todo = ref(props.todo);

const removeTodo = () => {

  props.onRemove(todo.value);
}

</script>
<template>
  <div>
    <input type="checkbox" v-model="todo.completed" />
    <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
    <button @click="removeTodo">Delete</button>
  </div>
</template>
  
<style scoped>
.completed {
  text-decoration: line-through;
}
</style>



