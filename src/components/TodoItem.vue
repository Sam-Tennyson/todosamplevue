<!-- eslint-disable vue/no-mutating-props -->
<script setup lang="ts">
import type { TodoItemProps } from '@/interfaces/todoInterface'
import { toRefs } from 'vue'
import TodoButton from '@/components/TodoButton.vue';

const props = defineProps<TodoItemProps>();
const emit = defineEmits(['editTodo', 'deleteTodo', 'completeStatus'])

const { todo, index } = toRefs(props)

const handleEdit = () => {
  emit('editTodo', todo.value);
};

const handleDelete = () => {
  emit('deleteTodo', todo.value.id);
};

const handleToggle = () => {
  emit('completeStatus', index.value);
};

</script>
<template>
  <div
    class="my-8 p-3 rounded  bg-[#e9e8e8]  duration-300 overflow-hidden ">
    <div class="flex flex-col items-start justify-start shrink-0 relative">
      <div class="flex items-center justify-between self-stretch shrink-0 relative mb-3">
        <div class="text-lg font-bold leading-relaxed text-gray-800 break-words overflow-hidden">
          {{ todo.text.length > 25 ? todo.text?.slice(0, 25) + "..." : todo.text }}
        </div>
        <div class="flex items-center justify-between shrink-0 relative cursor-pointer">
          <input class="text-[10px]" type="checkbox" v-model="todo.completed" @click="handleToggle" />
          <label class="ms-1 text-[#2d8636] text-left relative text-[12px]" >
            Completed
          </label>
        </div>
      </div>
      <div class="text-[#000000] text-left relative self-stretch text-[16px] break-words "
        :class="{ completed: todo.completed }">
        {{ todo.desc.length > 250 ? todo.desc?.slice(0, 250) + "...": todo.desc}}
      </div>
    </div>

    <div class="flex gap-[13px] items-center justify-end shrink-0 relative">
      <TodoButton @button-click-event="handleEdit">
        <i class="pi pi-file-edit"></i>
        Edit
      </TodoButton>
      <TodoButton @button-click-event="handleDelete" >
        <i class="pi pi-delete-left"></i>
        Delete
      </TodoButton>

    </div>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
