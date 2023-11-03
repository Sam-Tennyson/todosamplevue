<script setup lang="ts">
import { useCounterStore } from '@/store/counter';
const storeCounter = useCounterStore();
</script>
<template>
    <div class="border-2 border-gray-500 p-4 my-2 rounded-md">
        The counter is : {{ storeCounter.oddEven }}
        <div class="flex gap-2">
            <button class="bg-green-500 text-white px-4 py-2 rounded-lg " @click="storeCounter.increment">+</button>
            <button class="bg-red-500 text-white px-4 py-2 rounded-lg " @click="storeCounter.decrement">-</button>
        </div>
        counter: {{ storeCounter.count }}
        <br />
        Enter something: <input class="w-40" type="number" v-model="storeCounter.count">
    </div>
</template>
