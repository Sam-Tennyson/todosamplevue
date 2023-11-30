<script setup lang="ts">
import type { IActionButton } from '@/interfaces/actionButton';
import { toRefs } from 'vue';

const props = defineProps<IActionButton>()

const { isLoading, disabled, isSubmit, customClass } = toRefs(props)

const emit = defineEmits(['button-click-event'])

const handlebutton = () => {
  emit('button-click-event')
}

</script>
<template>
  <button v-on:click="handlebutton" class="btn" :class="[
    `${disabled ? 'custom-btn-disabled' : ''} ${customClass ?? ''} `,
    'whitespace-nowrap btn focus-visible:outline-none'
  ]" :type="isSubmit ? 'submit' : 'button'" :disabled="disabled || isLoading">
    <slot></slot>
  </button>
</template>
