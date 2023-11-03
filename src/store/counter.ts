// stores/counter.js
import { defineStore } from 'pinia'

export type RootState = {
    count: number;
};

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 } as RootState
  },

  actions: {
    increment() {
      this.count++
    },
    decrement() {
        this.count--
    }
  },
  getters: {
    oddEven: (state) => {
      if (state.count % 2 === 0) return "even"
      return 'odd'
    }
  }
})