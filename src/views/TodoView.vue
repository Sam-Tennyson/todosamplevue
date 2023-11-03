<!-- <script lang="ts">
import { defineComponent, ref, type Ref } from 'vue';

export default defineComponent({
  data() {
    return {
      newTodo: '',
      todos: [
        { text: 'Learn Vue 3', completed: false },
        { text: 'Build a Vue app', completed: false },
      ],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.todos.push({ text: this.newTodo, completed: false });
        console.log(this.todos);

        this.newTodo = '';
      }
    },
    removeTodo(todo: { text: string; completed: boolean }) {
      this.todos = this.todos.filter((t) => t !== todo);
    },
  },
});
</script> -->
<script setup lang="ts">
import { ref } from 'vue';
import TodoList from "../components/TodoList.vue"
import type { ITodo } from '@/interfaces/todoInterface';

const newTodo = ref('');
const todos = ref([
  { text: 'Learn Vue 3', completed: false },
  { text: 'Build a Vue app', completed: false },
])

const addTodo = () => {
  if (newTodo.value.trim() !== '') {
    todos.value.push({ text: newTodo.value, completed: false });
    newTodo.value = '';
  }
}
const removeTodo = (todo: ITodo) => {
  todos.value = todos.value.filter((t) => t !== todo);
}

const removeTodoEvent =(todo: ITodo) =>{
  todos.value = todos.value.filter((t) => t !== todo);
}

</script>
<template>
  <div>
    <h1>Todo App</h1>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo" />
    <TodoList :todos="todos" @remove="removeTodo" @remove-todo="removeTodoEvent" />
  </div>
</template>






