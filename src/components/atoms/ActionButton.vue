<script setup lang="ts">
import { VueElement, defineProps, h, toRefs } from 'vue'

const props = defineProps({
  foo: String,
  buttonLabel: String,
  disabled: Boolean,
  isSubmit: Boolean,
  isLoading: Boolean,
  customClass: String,
  icon: Object, 
  onclick: Function,
})

const { buttonLabel, isLoading, disabled, isSubmit, customClass } = toRefs(props)

// Access the callbackProp from props
const handleClick = () => {
  // Call the callback function when the button is clicked
  if (props.onclick) {
    props.onclick()
  }
};
</script>

<template>
  <button
    :type="isSubmit ? 'submit' : 'button'"
    :disabled="disabled || isLoading"
    @click="handleClick"
    :class="[
      `${disabled ? 'custom-btn-disabled' : ''} ${customClass ?? ''} min-w-[100px]`,
      'whitespace-nowrap btn focus-visible:outline-none'
    ]"
  >
    <span>{{icon }} {{ isLoading ? 'Loading ...' : buttonLabel }}</span>
  </button>
</template>

<style scoped></style>
