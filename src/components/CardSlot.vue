        
<script setup lang="ts">

</script>
<template>
	<h2 class="font-bold">This is an about page. Slot is working here</h2>
	<div class="card">
		<div id="card-header">
			<slot name="header"></slot>
		</div>
		<div id="card-content">
			<slot></slot>
		</div>
		<div id="card-footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>