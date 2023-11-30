<!-- <script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="bg-red-900 flex justify-around navbar">
        <RouterLink class="hover:text-white" to="/">Home</RouterLink>
        <RouterLink class="hover:text-white" to="/about">About (Layout)</RouterLink>
    </header>
</template> -->

<script setup lang="ts">
import backgrouundImage from '@/assets/images/Vector 1.svg'
import { RouterLink } from 'vue-router'
</script>

<template>
  <img :src="backgrouundImage" alt="bg-image" />
  <div
    class="bg-[rgba(100,94,94,0.69)] px-5 py-2 flex flex-row items-center justify-between fixed top-0 right-0 left-0"
    style="box-shadow: 0px 4px 4px 0px rgba(217, 217, 217, 0.94)"
  >
    <div class="text-[#ffffff] text-left relative flex-1 font-bold text-2xl">
      <RouterLink class="hover:text-white" to="/">Note App</RouterLink>
    </div>
    <div class="flex flex-row items-center justify-between shrink-0 w-[246px] relative">
      <div
        class="cursor-pointer p-2.5 flex flex-row items-center justify-between shrink-0 relative"
      >
        <div class="text-[#ffffff] text-left relative text-xl">
          <RouterLink class="hover:text-white" to="/">Home</RouterLink>
        </div>
      </div>
      <div
        class="cursor-pointer p-2.5 flex flex-row items-center justify-between shrink-0 relative"
      >
        <div class="text-[#ffffff] text-left relative text-xl">
          <RouterLink class="hover:text-white" to="/about">About (Layout)</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
