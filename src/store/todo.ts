import { defineStore } from 'pinia'
import type { ITodo } from '@/interfaces/todoInterface';

export const useTodoStore = defineStore('todo', {
  state: () => {
    return {
      todos: [] as ITodo[],
      newTodo: "" as string,
    }
  },
  actions: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({
          id: new Date().getTime(),
          text: this.newTodo,
          completed: false,
        })
      } 
      this.newTodo = ""
    },
    deleteTodo(id: number) {
      this.todos = this.todos.filter((todo) => todo?.id !== id)
    },
    editTodo(id: number, text: string) {
      this.todos[id].text = text
    },
    toggleCompleted(id: number) {
      this.todos[id].completed = !this.todos[id].completed
    },
  },
  getters: {
    getTodos(state): ITodo[] {
      return state.todos
    },
  },
})
