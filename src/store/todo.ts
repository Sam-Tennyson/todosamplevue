import { defineStore } from 'pinia'
import type { IDummyData, ITodo } from '@/interfaces/todoInterface';

export const useTodoStore = defineStore('todo', {
  state: () => {
    return {
      todos: [] as ITodo[],
      newTodo: "" as string,
      desc: "" as string,
      dummyData: [] as IDummyData[],
    }
  },
  actions: {
    addTodo() {
      if (this.newTodo.trim() && this.desc.trim()) {
        this.todos.push({
          id: new Date().getTime(),
          text: this.newTodo,
          completed: false,
          desc: this.desc,
        })
      } 
      this.newTodo = "",
      this.desc = ""
    },
    deleteTodo(id: number) {
      this.todos = this.todos.filter((todo) => todo?.id !== id)
    },
    editTodo(id: number, text?: string, desc?: string) {
      if (text) {
        this.todos[id].text = text
      }
      if (desc) {
        this.todos[id].desc = desc
      }
    },
    toggleCompleted(index: number) {
      this.todos[index].completed = !this.todos[index].completed
    },
    setDummyData(data: IDummyData[]) {
      this.dummyData = data
    }
  },
  getters: {
    getTodos(state): ITodo[] {
      return state.todos
    },
  },
})
