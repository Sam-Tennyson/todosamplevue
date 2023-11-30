<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps({
  disabled: Boolean,
  isSubmit: Boolean,
  isLoading: Boolean,
  customClass: String
})

const { isLoading, disabled, isSubmit, customClass } = toRefs(props)

const emit = defineEmits(['button-click-event'])

const handlebutton = () => {
  emit('button-click-event', 'Props has been passed')
}

console.log(customClass?.value);

</script>
<template>
  <button
    v-on:click="handlebutton"
    class="btn"
    :class="[
      `${disabled ? 'custom-btn-disabled' : ''} ${customClass ?? ''} min-w-[100px]`,
      'whitespace-nowrap btn focus-visible:outline-none'
    ]"
    :type="isSubmit ? 'submit' : 'button'"
    :disabled="disabled || isLoading"
  >
    <slot ></slot>
  </button>
</template>
