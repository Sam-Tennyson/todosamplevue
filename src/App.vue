<script setup lang="ts">
import TodoHeader from './components/TodoHeader.vue';
</script>
<template>
  <TodoHeader />
  <div class="w-4/5 m-auto">
    <RouterView />
  </div>
</template>
<style scoped>
.navbar {
  @apply bg-slate-600 p-4 text-white rounded-md
}
</style>

