<script setup lang="ts">
import TodoItem from './TodoItem.vue';

const props = defineProps(['todos'])
const emit = defineEmits(['removeTodo'])

const remove = (todo: any) => {
  emit('removeTodo', todo)
}

</script>
<template>
  <div>
    <div v-for="todo in props.todos" :key="todo.text">
      <TodoItem :todo="todo" :onRemove="remove" />
    </div>
  </div>
</template>
  
  