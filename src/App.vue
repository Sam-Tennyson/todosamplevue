<script setup lang="ts">
import Counter from './components/Counter.vue';
import TodoHeader from './components/TodoHeader.vue';

</script>

<template>
  <Counter />
  <TodoHeader />
  <RouterView />
</template>
<style scoped>
.navbar {
  @apply bg-slate-600 p-4 text-white rounded-md
}
</style>

