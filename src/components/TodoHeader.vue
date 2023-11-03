
<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="bg-red-900 flex justify-around navbar">
        <RouterLink class="hover:text-white" to="/">Home</RouterLink>
        <RouterLink class="hover:text-white" to="/about">About</RouterLink>
    </header>
</template>
