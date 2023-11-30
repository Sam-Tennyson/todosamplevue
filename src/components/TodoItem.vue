<script setup lang="ts">
import type { ITodo } from '@/interfaces/todoInterface'
import { useTodoStore } from '@/store/todo'
import { ref } from 'vue'
import ActionButton from './atoms/ActionButton.vue'
import editSvg from "@/components/atoms/EditSvg.vue"
interface Props {
  todo: ITodo
}
const todoStore = useTodoStore()
const props = defineProps<Props>()
const todo = ref(props.todo)

const handleEdit = () => {

}


const handleDelete = () => {

}
</script>
<template>

  <div
    class="bg-[#ffeded] rounded-xl px-4 py-2 flex flex-col gap-[32px] justify-start relative overflow-hidden"
    style="box-shadow: 0px 4px 4px 0px rgba(255, 69, 69, 0.25)"
  >
    <div class="flex flex-col gap-[5px] items-start justify-start shrink-0 h-[110px] relative">
      <div class="flex items-center justify-between self-stretch shrink-0 relative">
        <div
          class="text-[#000000] text-left relative flex-1 text-[16px] font-bold w-[250px] overflow-hidden"
        >
          {{ todo.text }}
        </div>
        <div class="flex items-center justify-between shrink-0 relative">
          <input
            class="text-[10px]"
            type="checkbox"
            v-model="todo.completed"
            @click="todoStore.toggleCompleted(todo?.id)"
          />

          <div
            class="ms-1 text-[#2d8636] text-left relative text-[12px]"
            @click="todoStore.toggleCompleted(todo?.id)"
          >
            Completed
          </div>
        </div>
      </div>
      <div
        class="text-[#000000] text-left relative self-stretch text-[16px]"
        :class="{ completed: todo.completed }"
      >
        {{ todo.desc }}
      </div>
    </div>

    <div class="flex gap-[13px] items-center justify-end shrink-0 relative">
      <TodoButton v-on:button-click-event="handleEdit()">
        <i class="pi pi-file-edit"></i>
        Edit
      </TodoButton>
      <TodoButton v-on:button-click-event="handleDelete()" :customClass="'bg-[#db2929]'">
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
