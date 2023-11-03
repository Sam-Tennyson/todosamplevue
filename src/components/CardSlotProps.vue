<script setup lang="ts">
import { ref } from 'vue';

const avengers = ref([
	{
		id: 1,
		name: "Tony",
		super_hero_name: "Iron man"
	},
	{
		id: 2,
		name: "Steve",
		super_hero_name: "Captain"
	},
	{
		id: 3,
		name: "Thor",
		super_hero_name: "Thor"
	},
	{
		id: 4,
		name: "Bruce",
		super_hero_name: "Hulk"
	},
])
</script>
<template>
	<h2 class="font-bold">Here we are passing props to parent componet then rendering happens</h2>
	<div v-for="avenger in avengers" :key="avenger.id">
		<slot :hero_name="avenger.super_hero_name" :avenger_name="avenger.name"></slot>
	</div>
</template>
